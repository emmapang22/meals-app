import { Meal } from "./Meal";

export type MealExtended = Meal & {
  strCategory: string;
  strInstructions: string;
  strTags: string;
  strYoutube?: string;
};
