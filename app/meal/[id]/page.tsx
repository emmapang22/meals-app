import { MealTags } from "@/app/components/MealTags";
import { DetailMeals } from "@/app/models/DetailMeals";
import Image from "next/image";
import Link from "next/link";

type MealDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function MealDetailPage({ params }: MealDetailPageProps) {
  const { id } = await params;

  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
  );
  const data: DetailMeals = await response.json();
  console.log(data);

  return (
    <>
      {data.meals.map((m) => (
        <div key={m.idMeal} className="flex flex-col w-full">
          <div id="breadcrumb">
            <span className="flex gap-2">
              <span>
                <Link href={"/"}>Home</Link>
              </span>
              /
              <span>
                <Link
                  href={`/category/${m.strCategory}`}
                  className="text-white"
                >
                  {m.strCategory}
                </Link>
              </span>
            </span>
          </div>

          <div className="flex flex-col items-center ">
            <div>
              <Image
                src={m.strMealThumb}
                alt={m.strMeal}
                width={200}
                height={200}
                loading="eager"
              />
            </div>
            <h2 className="text-xl text-center">{m.strMeal}</h2>
            <MealTags meal={m} />

            <ul className="list-decimal">
              {m.strInstructions
                .trim()
                .split(".")
                .filter((ins) => ins !== "")
                .map((ins, i) => (
                  <li key={i}>{ins}</li>
                ))}
            </ul>
            <p>
              Link:
              <a href={m.strYoutube} className="underline">
                {m.strYoutube}
              </a>
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
