"use client";
import Image from "next/image";
import Filter from "./components/Filter";
import SearchForm from "./components/SearchForm";
import { useState } from "react";

export interface MealSummary {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export default function Home() {
  const [filter, setFilter] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="https://img.freepik.com/free-photo/traditional-salad-with-pieces-medium-rare-grilled-ahi-tuna-sesame-with-fresh-vegetable-salad-rice-plate_2829-18465.jpg?semt=ais_hybrid&w=740&q=80"
          alt="heroImage"
          fill
          style={{ objectFit: "cover" }}
          unoptimized
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
            RECIPES FINDER
          </h1>
          <p className="text-white text-lg md:text-2xl mt-2 drop-shadow-md">
            You can find your dream food recipe here!
          </p>
        </div>
      </div>

      {/* Search and Filter Grid */}
      <div className="max-w-6xl mx-auto mt-8 px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Search Section */}
        <div className="md:col-span-3 bg-white rounded-xl shadow-lg p-6">
          <SearchForm />
        </div>

        {/* Filter Section */}
        <div 
          className="md:col-span-1 bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-2xl transition"
          onClick={() => setFilter(!filter)}
        >
          <h2 className="text-xl font-semibold mb-4 flex justify-between items-center">
            Filter
            <span>{filter ? "▲" : "▼"}</span>
          </h2>

          {/* Conditionally show Filter component */}
          {filter && <Filter />}
        </div>

      </div>
    </div>
  );
}
