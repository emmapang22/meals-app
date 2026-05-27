import { Meal } from "./Meal";
import { MealExtended } from "./MealExtended";

export type DetailMeals = Meal & {
  meals: MealExtended[];
};
