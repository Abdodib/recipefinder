"use client";
import Image from "next/image";
import Filter from "./components/Filter";
import SearchForm from "./components/SearchForm";
import { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "./components/RecipeCard";

export interface MealSummary {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
}

export default function Home() {
  const [filter, setFilter] = useState(false);
  const [meals, setMeals] = useState<MealSummary[]>([]);
  const [search, setSearch] = useState("");
  const [filterAreas, setFilterAreas] = useState<string[]>([]);
  const [filterCategories, setFilterCategories] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => setMeals(res.data.meals || []))
      .catch(console.error);
  }, []);

  const filteredMeals = meals.filter((meal) => {
    const matchesSearch = meal.strMeal.toLowerCase().includes(search.toLowerCase());
    const matchesArea = filterAreas.length === 0 || filterAreas.includes(meal.strArea);
    const matchesCategory =
      filterCategories.length === 0 || filterCategories.includes(meal.strCategory);

    return matchesSearch && matchesArea && matchesCategory;
  });

  return (
    <div className="bg-brand-cream min-h-screen pb-20">

      {/* Hero Section */}
      <div className="relative w-full h-[400px] md:h-[520px] overflow-hidden shadow-xl">
        <Image
          src="https://img.freepik.com/free-photo/traditional-salad-with-pieces-medium-rare-grilled-ahi-tuna-sesame-with-fresh-vegetable-salad-rice-plate_2829-18465.jpg"
          alt="heroImage"
          fill
          style={{ objectFit: "cover" }}
          className="brightness-75 scale-105"
          unoptimized
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-xl">
            RECIPES FINDER
          </h1>
          <p className="text-white text-lg md:text-2xl mt-3 drop-shadow-md max-w-xl">
            You can find your dream food recipe here!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto mt-10 px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Search */}
        <div className="md:col-span-3 bg-white rounded-2xl shadow-lg p-6 border border-brand-orange/30">
          <SearchForm search={search} setSearch={setSearch} />
        </div>

        {/* Filter toggle */}
        <div
          onClick={() => setFilter(!filter)}
          className="md:col-span-1 bg-white rounded-2xl shadow-lg p-6 border border-brand-orange/30 cursor-pointer hover:shadow-2xl transition-all"
        >
          <h2 className="text-xl font-semibold mb-4 flex justify-between items-center text-brand-dark">
            Filter
            <span className="text-brand-orange">{filter ? "▲" : "▼"}</span>
          </h2>
        </div>

        {/* Meals + Filter */}
        <div className="md:col-span-4 flex gap-10 relative">

          {/* Meals Grid */}
          <div
            className={`w-full grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
              ${filter ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}
          >
            {filteredMeals.length > 0 ? (
              filteredMeals.map((meal) => (
                <RecipeCard
                  key={meal.idMeal}
                  id={meal.idMeal}
                  name={meal.strMeal}
                  categorie={meal.strCategory}
                  image={meal.strMealThumb}
                  area={meal.strArea}
                />
              ))
            ) : (
              <p className="text-brand-dark/70 text-lg col-span-full text-center py-6">
                No recipes found...
              </p>
            )}
          </div>

          {filter && (
            <Filter
              filterAreas={filterAreas}
              setFilterAreas={setFilterAreas}
              filterCategories={filterCategories}
              setFilterCategories={setFilterCategories}
            />
          )}
        </div>
      </div>
    </div>
  );
}
