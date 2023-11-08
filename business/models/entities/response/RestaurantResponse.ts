import * as superstruct from "superstruct";

export const RestaurantDataResponse = superstruct.object({
  id_user: superstruct.string(),
  restaurantName: superstruct.string(),
  createdDate: superstruct.date(),
  cellPhone: superstruct.string(),
  active: superstruct.boolean(),
  initialAction: superstruct.date(),
  finishAction: superstruct.date(),
});

export type TRestaurantDataSchemaResponse = superstruct.Infer<typeof RestaurantDataResponse>;
