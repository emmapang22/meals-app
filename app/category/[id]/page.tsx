import { CategoryMealCard } from "@/app/components/CategoryMealCard";
import { Meals } from "@/app/models/Meals";
import Link from "next/link";

type MealCategoryPageProps = {
  params: Promise<{ id: string }>;
};

export default async function MealCategoryPage({
  params,
}: MealCategoryPageProps) {
  const { id } = await params;

  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`,
  );

  const data: Meals = await response.json();

  return (
    <>
      <Link href={"/"}>Home</Link>
      <h1>{id} dishes</h1>

      <div className="grid grid-cols-12 gap-4 w-full">
        {data.meals.map((meal) => (
          <CategoryMealCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </>
  );
}
