import { Brand } from "effect";

/*----------------------------------------------------------------------------------------------------------------------
 |  TITLE: Nominal/branded types for the various ids in the data model
 *--------------------------------------------------------------------------------------------------------------------*/
export type EntityId = string & Brand.Brand<'EntityId'>;
export const EntityId = Brand.nominal<EntityId>();