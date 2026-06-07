import { Categories } from "./models/Categories";
import { CategoryCard } from "./components/CategoryCard";

export default async function Home() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php",
  );
  const data: Categories = await response.json();
  return (
    <>
      <h1>Meal Shelf</h1>
      <section>
        <h2 className="mb-4 h3 font-serif">Categories</h2>

        <ul className="grid grid-cols-12 gap-4 w-full">
          {data.categories.map((category) => (
            <CategoryCard key={category.idCategory} category={category} />
          ))}
        </ul>
      </section>
    </>
  );
}
