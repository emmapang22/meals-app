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
                  className="text-black"
                >
                  {m.strCategory}
                </Link>
              </span>
            </span>
          </div>

          <div className="flex flex-col lg:flex-row w-full gap-4 mt-6">
            <div className="flex flex-col lg:flex-1">
              <div className="flex flex-col items-center gap-2">
                <Image
                  src={m.strMealThumb}
                  alt={m.strMeal}
                  width={500}
                  height={500}
                  loading="eager"
                  className="border-3 border-black rounded-lg"
                />

                <MealTags meal={m} />

                {m.strYoutube && (
                  <Link
                    href={m.strYoutube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#951515] border-2 border-black px-4 py-2 text-white rounded-lg font-medium hover:bg-[#5b0f0f]"
                  >
                    Go to video recipe
                  </Link>
                )}
              </div>
            </div>

            <section className="flex flex-col lg:flex-1 gap-4 border-3 bg-[#f6f3ee] px-4 lg:px-8 py-10 rounded-lg">
              <h1 className="text-center">{m.strMeal}</h1>

              <ul className="list-decimal list-inside">
                {m.strInstructions
                  .trim()
                  .split(".")
                  .filter((ins) => ins !== "")
                  .map((ins, i) => (
                    <li key={i}>{ins}</li>
                  ))}
              </ul>
            </section>
          </div>
        </div>
      ))}
    </>
  );
}
