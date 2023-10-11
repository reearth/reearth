import { useCallback } from "react";

import { ValueType, ValueTypes } from "@reearth/beta/utils/value";
import { usePropertyFetcher } from "@reearth/services/api";

// Unlick common story blocks which will use the auto generted field components editor,
// Some special story blocks will use the custom editor components and need to update date directly.
export default () => {
  const { useUpdatePropertyValue, useAddPropertyItem, useRemovePropertyItem, useMovePropertyItem } =
    usePropertyFetcher();

  const handlePropertyValueUpdate = useCallback(
    (
      schemaGroupId: string,
      propertyId: string,
      fieldId: string,
      vt: ValueType,
      itemId?: string,
    ) => {
      return async (v?: ValueTypes[ValueType]) => {
        await useUpdatePropertyValue(propertyId, schemaGroupId, itemId, fieldId, "en", v, vt);
      };
    },
    [useUpdatePropertyValue],
  );

  const handleAddPropertyItem = useCallback(
    (propertyId: string, schemaGroup: string) => {
      return useAddPropertyItem(propertyId, schemaGroup);
    },
    [useAddPropertyItem],
  );

  const handleRemovePropertyItem = useCallback(
    (propertyId: string, schemaGroup: string, itemId: string) => {
      return useRemovePropertyItem(propertyId, schemaGroup, itemId);
    },
    [useRemovePropertyItem],
  );

  const handleMovePropertyItem = useCallback(
    (propertyId: string, schemaGroup: string, { id }: { id: string }, index: number) => {
      return useMovePropertyItem(propertyId, schemaGroup, id, index);
    },
    [useMovePropertyItem],
  );

  return {
    handlePropertyValueUpdate,
    handleAddPropertyItem,
    handleRemovePropertyItem,
    handleMovePropertyItem,
  };
};
