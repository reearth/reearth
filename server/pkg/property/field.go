package property

import (
	"context"
	"errors"

	"github.com/reearth/reearth/server/pkg/dataset"
)

var (
	ErrInvalidPropertyValue = errors.New("invalid property value")
	ErrCannotLinkDataset    = errors.New("cannot link dataset")
	ErrInvalidPropertyType  = errors.New("invalid property type")
	ErrInvalidPropertyField = errors.New("invalid property field")
)

type Field struct {
	FieldField FieldID        `msgpack:"FieldField"`
	LinksField *Links         `msgpack:"LinksField"`
	ValueField *OptionalValue `msgpack:"ValueField"`
}

func (p *Field) Clone() *Field {
	if p == nil {
		return nil
	}
	return &Field{
		FieldField: p.FieldField,
		LinksField: p.LinksField.Clone(),
		ValueField: p.ValueField.Clone(),
	}
}

func (p *Field) Field() FieldID {
	return p.FieldField
}

func (p *Field) FieldRef() *FieldID {
	if p == nil {
		return nil
	}
	return p.FieldField.Ref()
}

func (p *Field) Links() *Links {
	if p == nil {
		return nil
	}
	return p.LinksField
}

func (p *Field) Type() ValueType {
	if p == nil {
		return ValueTypeUnknown
	}
	return p.ValueField.Type()
}

func (p *Field) Value() *Value {
	if p == nil {
		return nil
	}
	return p.ValueField.Value()
}

func (p *Field) TypeAndValue() *OptionalValue {
	if p == nil {
		return nil
	}
	return p.ValueField
}

func (p *Field) ActualValue(ds *dataset.Dataset) *ValueAndDatasetValue {
	if p == nil {
		return nil
	}

	var dv *dataset.Value
	if p.LinksField != nil {
		if l := p.LinksField.Last(); l != nil {
			d := l.Dataset()
			if d != nil && ds.ID() == *d && l.DatasetSchemaField() != nil {
				dv = ds.Field(*l.DatasetSchemaField()).Value()
			} else {
				return nil
			}
		} else {
			return nil
		}
	}
	return NewValueAndDatasetValue(p.Type(), dv, p.Value())
}

func (p *Field) Datasets() []DatasetID {
	if p == nil {
		return nil
	}

	res := []DatasetID{}
	if p.Links().IsLinkedFully() {
		dsid := p.Links().Last().Dataset()
		if dsid != nil {
			res = append(res, *dsid)
		}
	}

	return res
}

func (p *Field) IsDatasetLinked(s DatasetSchemaID, i DatasetID) bool {
	return p.Links().HasDatasetSchemaAndDataset(s, i)
}

func (p *Field) Update(value *Value, field *SchemaField) error {
	if p == nil {
		return nil
	}
	if field == nil || p.FieldField != field.ID() || !field.Validate(p.ValueField) {
		return ErrInvalidPropertyValue
	}
	p.ValueField.SetValue(value)
	return nil
}

func (p *Field) UpdateUnsafe(value *Value) {
	if p == nil {
		return
	}
	p.ValueField.SetValue(value)
}

func (p *Field) Cast(t ValueType) bool {
	if p == nil || t == ValueTypeUnknown || p.Type() == ValueTypeUnknown || p.Type() == t {
		return false
	}
	p.ValueField = p.ValueField.Cast(t)
	p.Unlink()
	return true
}

func (p *Field) Link(links *Links) {
	if p == nil {
		return
	}
	p.LinksField = links.Clone()
}

func (p *Field) Unlink() {
	p.Link(nil)
}

func (p *Field) UpdateField(field FieldID) {
	if p == nil {
		return
	}
	p.FieldField = field
}

func (p *Field) IsEmpty() bool {
	return p == nil || p.Value().IsEmpty() && p.Links().IsEmpty()
}

func (p *Field) MigrateSchema(ctx context.Context, newSchema *Schema, dl dataset.Loader) bool {
	if p == nil || dl == nil || newSchema == nil {
		return false
	}

	fid := p.Field()
	schemaField := newSchema.Groups().Field(fid)

	// If field is not found in new schema, this field should be removed
	invalid := schemaField == nil

	// if value is not compatible for type, value will be cleared
	if !schemaField.Validate(p.ValueField) {
		p.UpdateUnsafe(nil)
	}

	// If linked dataset is not compatible for type, it will be unlinked
	l := p.Links()
	if dl != nil && l.IsLinkedFully() {
		if dsid, dsfid := l.Last().Dataset(), l.Last().DatasetSchemaField(); dsid != nil && dsfid != nil {
			dss, _ := dl(ctx, *dsid)
			if dsf := dss[0].Field(*dsfid); dsf != nil {
				if schemaField.Type() != ValueType(dsf.Type()) {
					p.Unlink()
				}
			}
		}
	}

	return !invalid
}

func (p *Field) MigrateDataset(q DatasetMigrationParam) {
	if p == nil {
		return
	}
	link := p.Links()
	link.Replace(q.OldDatasetSchemaMap, q.OldDatasetMap, q.DatasetFieldIDMap)
	if !link.Validate(q.NewDatasetSchemaMap, q.NewDatasetMap) {
		p.Unlink()
	}
}

func (f *Field) GuessSchema() *SchemaField {
	if f == nil {
		return nil
	}
	if f, err := NewSchemaField().ID(f.Field()).Type(f.Type()).Build(); err == nil {
		return f
	}
	return nil
}

type DatasetMigrationParam struct {
	OldDatasetSchemaMap map[DatasetSchemaID]DatasetSchemaID
	OldDatasetMap       map[DatasetID]DatasetID
	DatasetFieldIDMap   map[DatasetFieldID]DatasetFieldID
	NewDatasetSchemaMap map[DatasetSchemaID]*dataset.Schema
	NewDatasetMap       map[DatasetID]*dataset.Dataset
}
