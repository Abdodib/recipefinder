import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  id: string;
  name: string;
  categorie: string;
  image: string;
  area: string;
}

const RecipeCard = ({ id, name, categorie, image, area }: Props) => {
  return (
    <div className="bg-white rounded-xl shadow-md border border-brand-orange/30 hover:shadow-xl transition p-3 flex flex-col">
      
      <Image
        src={image}
        alt={name}
        width={500}
        height={300}
        className="rounded-lg object-cover w-full h-48"
      />

      <h3 className="text-xl font-semibold text-brand-dark mt-3">{name}</h3>
      <p className="text-brand-dark/70 text-sm">{categorie} • {area}</p>

      {/* Spacer to push button to bottom */}
      <div className="flex-1"></div>

      <Link
        href={`/recipe/${id}`}
        className="mt-3 px-4 py-2 rounded-lg bg-brand-orange text-white hover:bg-brand-dark transition w-full text-center"
      >
        View Recipe
      </Link>
    </div>
  );
};

export default RecipeCard;
