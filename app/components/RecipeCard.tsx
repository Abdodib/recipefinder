import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
type RecipeCardProps = {
id : string,
name : string,
categorie : string,
image : string,
area : string
};

const RecipeCard = ( {id , name , categorie , image , area} : RecipeCardProps ) => {
  return (
    <div className=' flex-col items-baseline gap-2'>
        <Image src={image} alt='recipe image' height={10} width={10} />
        <h3> {name} </h3>
        <div className=' flex items-center justify-between'>
            <p>categories: {categorie}</p>
            <p> {area} </p>
        </div>
        <Link href={`/${id}/Details`}>
        <button > DETAILS</button>
        </Link>

    </div>
  )
}

export default RecipeCard
