import Link from "next/link";
import { Meal } from "../models/Meal";
import Image from "next/image";

type CategoryMealCardProps = {
  meal: Meal;
};

export const CategoryMealCard = ({ meal }: CategoryMealCardProps) => {
  return (
    <div className="flex flex-col items-center gap-2 col-span-12 md:col-span-6 lg:col-span-3 rounded-xl text-white relative hover:filter hover:bg-[#ffffff89]">
      <Link href={`/meal/${meal.idMeal}`}>
        <div className="">
          <Image
            src={meal.strMealThumb}
            alt={meal.strMeal}
            width={500}
            height={500}
            loading="eager"
            className="rounded-lg"
          />
        </div>

        <div className="absolute bottom-0 bg-linear-to-b from-transparent to-black rounded-lg w-full flex flex-col pt-20 px-4 py-5">
          <h3 className="text-center font-bold h4">{meal.strMeal}</h3>
        </div>
      </Link>
    </div>
  );
};
