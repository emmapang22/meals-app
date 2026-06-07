import { MealExtended } from "../models/MealExtended";

type MealTagsProps = {
  meal: MealExtended;
};

export const MealTags = ({ meal }: MealTagsProps) => {
  if (meal.strTags) {
    return (
      <div className="flex gap-2">
        {meal.strTags.split(",").map((tag) => (
          <span
            key={tag}
            className="bg-[#f0c56d] text-[15px] border-2 font-medium px-4 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    );
  }

  return;
};
