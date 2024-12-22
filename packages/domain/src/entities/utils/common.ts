import * as P from "@/primitives";
/**
 * @category primitives
 * @since 0.1.0
 */
export const EntityAuditDefaults = {
  createdAt: P.Dte,
  updatedAt: P.DteOrNull,
  createdBy: P.Email,
  modifiedBy: P.EmailOrNull,
};
