/**
 * @since 0.1.0
 * @category entities
 */
import { Model } from "@effect/sql"

/**
 * @since 0.1.0
 * @category entities
 */
export const baseFields = {
  createdAt: Model.DateTimeInsertFromDate,
  updatedAt: Model.DateTimeUpdateFromDate,
}