import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type RecipeCardProps = {
  id: string,
  name: string,
  categorie: string,
  image: string,
  area: string
}

const RecipeCard = ({ id, name, categorie, image, area }: RecipeCardProps) => {
  return (
    <div className="flex flex-col bg-white shadow-md rounded-2xl p-4 w-full max-w-sm hover:shadow-lg transition-shadow duration-300">
      <div className="w-full h-40 relative rounded-xl overflow-hidden mb-3">
        <Image
          src={image}
          alt="recipe image"
          fill
          className="object-cover"
        />
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>

      <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
        <p>Category: <span className="font-medium">{categorie}</span></p>
        <p className="font-medium">{area}</p>
      </div>

      <Link href={`/${id}/Details`}>
        <button className="w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
          DETAILS
        </button>
      </Link>
    </div>
  )
}

export default RecipeCard
