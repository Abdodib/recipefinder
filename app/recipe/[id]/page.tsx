/* eslint-disable @next/next/no-img-element */
'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

interface Meal {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube?: string;
  [key: string]: string | undefined;
}

export default function MealDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState<Meal | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchMeal = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        if (!response.ok) throw new Error('Failed to fetch meal');
        const data = await response.json();
        setMeal(data.meals[0] as Meal);
      } catch (err: unknown) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchMeal();
  }, [id]);

  if (loading)
    return <div className="text-center text-brand-dark mt-20 text-xl">Loading...</div>;

  if (error)
    return <div className="text-center text-red-600 mt-20 text-xl">Error: {error}</div>;

  if (!meal)
    return <div className="text-center text-brand-dark mt-20 text-xl">Meal not found.</div>;

  return (
    <div className=' bg-brand-cream'>

    <div className="max-w-5xl mx-auto p-6 bg-brand-cream rounded-2xl shadow-lg mt-10">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full md:w-1/3 rounded-xl shadow-md object-cover"
        />

        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-dark">{meal.strMeal}</h1>
          <p className="text-brand-dark/70"><strong>Category:</strong> {meal.strCategory}</p>
          <p className="text-brand-dark/70"><strong>Area:</strong> {meal.strArea}</p>

          <h2 className="text-2xl font-semibold text-brand-dark mt-4">Instructions</h2>
          <p className="text-brand-dark/80 whitespace-pre-line">{meal.strInstructions}</p>

          <h2 className="text-2xl font-semibold text-brand-dark mt-4">Ingredients</h2>
          <ul className="list-disc list-inside text-brand-dark/80">
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
              const ingredient = meal[`strIngredient${num}`];
              const measure = meal[`strMeasure${num}`];
              if (ingredient && ingredient.trim()) {
                return (
                  <li key={num}>
                    {measure} {ingredient}
                  </li>
                );
              }
              return null;
            })}
          </ul>

          {meal.strYoutube && (
            <a
              href={meal.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 bg-brand-orange text-white rounded-lg hover:bg-brand-dark transition"
            >
              Watch on YouTube
            </a>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}
