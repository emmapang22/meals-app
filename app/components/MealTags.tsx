import { MealExtended } from "../models/MealExtended";

type MealTagsProps = {
  meal: MealExtended;
};

export const MealTags = ({ meal }: MealTagsProps) => {
  if (meal.strTags) {
    return (
      <div className="flex gap-2">
        {meal.strTags.split(",").map((tag) => (
          <div key={tag} className="border border-white px-4 py-2">
            {tag}
          </div>
        ))}
      </div>
    );
  }

  return;
};
