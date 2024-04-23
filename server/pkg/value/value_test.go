package value

import (
	"net/url"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestValue_IsEmpty(t *testing.T) {
	tests := []struct {
		name  string
		value *Value
		want  bool
	}{
		{
			name: "empty",
			want: true,
		},
		{
			name: "nil",
			want: true,
		},
		{
			name: "non-empty",
			value: &Value{
				TField: Type("hoge"),
				VField: "foo",
			},
			want: false,
		},
	}

	for _, tt := range tests {
		tt := tt
		t.Run(tt.name, func(t *testing.T) {
			t.Parallel()
			assert.Equal(t, tt.want, tt.value.IsEmpty())
		})
	}
}

func TestValue_Clone(t *testing.T) {
	tp := &tpmock{}
	tpm := TypePropertyMap{
		Type("hoge"): tp,
	}

	tests := []struct {
		name  string
		value *Value
		want  *Value
	}{
		{
			name: "ok",
			value: &Value{
				TField: TypeString,
				VField: "foo",
			},
			want: &Value{
				TField: TypeString,
				VField: "foo",
			},
		},
		{
			name: "custom type property",
			value: &Value{
				TField: Type("hoge"),
				VField: "foo",
				PField: tpm,
			},
			want: &Value{
				TField: Type("hoge"),
				VField: "fooa",
				PField: tpm,
			},
		},
		{
			name:  "nil",
			value: nil,
			want:  nil,
		},
		{
			name:  "empty",
			value: &Value{},
			want:  nil,
		},
	}

	for _, tt := range tests {
		tt := tt
		t.Run(tt.name, func(t *testing.T) {
			t.Parallel()
			assert.Equal(t, tt.want, tt.value.Clone())
		})
	}
}

func TestValue_Some(t *testing.T) {
	tp := &tpmock{}
	tpm := TypePropertyMap{
		Type("hoge"): tp,
	}

	tests := []struct {
		name  string
		value *Value
		want  *Optional
	}{
		{
			name: "ok",
			value: &Value{
				TField: TypeString,
				VField: "foo",
			},
			want: &Optional{
				TField: TypeString,
				VField: &Value{
					TField: TypeString,
					VField: "foo",
				},
			},
		},
		{
			name: "custom type property",
			value: &Value{
				TField: Type("hoge"),
				VField: "fooa",
				PField: tpm,
			},
			want: &Optional{
				TField: Type("hoge"),
				VField: &Value{
					TField: Type("hoge"),
					VField: "fooa",
					PField: tpm,
				},
			},
		},
		{
			name:  "nil",
			value: nil,
			want:  nil,
		},
		{
			name:  "empty",
			value: &Value{},
			want:  nil,
		},
	}

	for _, tt := range tests {
		tt := tt
		t.Run(tt.name, func(t *testing.T) {
			t.Parallel()
			assert.Equal(t, tt.want, tt.value.Some())
		})
	}
}

func TestValue_Value(t *testing.T) {
	u, _ := url.Parse("https://reearth.io")

	tests := []struct {
		name  string
		value *Value
		want  interface{}
	}{
		{
			name:  "ok",
			value: &Value{TField: TypeURL, VField: u},
			want:  u,
		},
		{
			name:  "empty",
			value: &Value{},
		},
		{
			name: "nil",
		},
	}

	for _, tt := range tests {
		tt := tt
		t.Run(tt.name, func(t *testing.T) {
			t.Parallel()
			if tt.want == nil {
				assert.Nil(t, tt.value.Value())
			} else {
				assert.Same(t, tt.want, tt.value.Value())
			}
		})
	}
}

func TestValue_Type(t *testing.T) {
	tests := []struct {
		name  string
		value *Value
		want  Type
	}{
		{
			name:  "ok",
			value: &Value{TField: TypeString},
			want:  TypeString,
		},
		{
			name:  "empty",
			value: &Value{},
			want:  TypeUnknown,
		},
		{
			name: "nil",
			want: TypeUnknown,
		},
	}

	for _, tt := range tests {
		tt := tt
		t.Run(tt.name, func(t *testing.T) {
			t.Parallel()
			assert.Equal(t, tt.want, tt.value.Type())
		})
	}
}

func TestValue_TypeProperty(t *testing.T) {
	tp := &tpmock{}
	tpm := TypePropertyMap{
		Type("hoge"): tp,
	}

	tests := []struct {
		name  string
		value *Value
		want  TypeProperty
	}{
		{
			name: "default type",
			value: &Value{
				VField: "string",
				TField: TypeString,
			},
			want: defaultTypes[TypeString],
		},
		{
			name: "custom type",
			value: &Value{
				VField: "string",
				TField: Type("hoge"),
				PField: tpm,
			},
			want: tp,
		},
		{
			name:  "empty",
			value: &Value{},
			want:  nil,
		},
		{
			name: "nil",
			want: nil,
		},
	}

	for _, tt := range tests {
		tt := tt
		t.Run(tt.name, func(t *testing.T) {
			t.Parallel()
			res := tt.value.TypeProperty()
			if tt.want == nil {
				assert.Nil(t, res)
			} else {
				assert.Same(t, tt.want, res)
			}
		})
	}
}

func TestValue_Interface(t *testing.T) {
	tp := &tpmock{}
	tpm := TypePropertyMap{
		"foo": tp,
	}

	tests := []struct {
		name  string
		value *Value
		want  interface{}
	}{
		{
			name:  "string",
			value: &Value{TField: TypeString, VField: "hoge"},
			want:  "hoge",
		},
		{
			name:  "latlng",
			value: &Value{TField: TypeLatLng, VField: LatLng{Lat: 1, Lng: 2}},
			want:  LatLng{Lat: 1, Lng: 2},
		},
		{
			name: "custom",
			value: &Value{
				PField: tpm,
				TField: Type("foo"),
				VField: "foo",
			},
			want: "foobar",
		},
		{
			name:  "empty",
			value: &Value{},
			want:  nil,
		},
		{
			name:  "nil",
			value: nil,
			want:  nil,
		},
	}

	for _, tt := range tests {
		tt := tt
		t.Run(tt.name, func(t *testing.T) {
			t.Parallel()
			assert.Equal(t, tt.want, tt.value.Interface())
		})
	}
}

func TestValue_Cast(t *testing.T) {
	type args struct {
		t Type
		p TypePropertyMap
	}

	tests := []struct {
		name   string
		target *Value
		args   args
		want   *Value
	}{
		{
			name:   "diff type",
			target: &Value{TField: TypeNumber, VField: 1.1},
			args:   args{t: TypeString},
			want:   &Value{TField: TypeString, VField: "1.1"},
		},
		{
			name:   "same type",
			target: &Value{TField: TypeNumber, VField: 1.1},
			args:   args{t: TypeNumber},
			want:   &Value{TField: TypeNumber, VField: 1.1},
		},
		{
			name:   "to string",
			target: &Value{TField: TypeLatLng, VField: LatLng{Lat: 1, Lng: 2}},
			args:   args{t: TypeString},
			want:   &Value{TField: TypeString, VField: "2.000000, 1.000000"},
		},
		{
			name:   "invalid value",
			target: &Value{TField: TypeNumber},
			args:   args{t: TypeString},
			want:   nil,
		},
		{
			name:   "empty",
			target: &Value{},
			args:   args{t: TypeString},
			want:   nil,
		},
		{
			name:   "nil",
			target: nil,
			args:   args{t: TypeString},
			want:   nil,
		},
	}

	for _, tt := range tests {
		tt := tt
		t.Run(tt.name, func(t *testing.T) {
			t.Parallel()
			assert.Equal(t, tt.want, tt.target.Cast(tt.args.t, tt.args.p))
		})
	}
}
