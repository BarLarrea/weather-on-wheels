
export type PlaceType = "restaurant" | "park" | "hotel";

export interface Place {
  name: string;
  type: PlaceType;
  address: string;
}

