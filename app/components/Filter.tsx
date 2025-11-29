"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

type Area = {
  strArea: string;
}
type Categorie = {
  strCategory: string;
}

const Filter = () => {
  const [areas, setAreas] = useState<Area[]>([]);
  const [categories, setCategories] = useState<Categorie[]>([]);
  const [showArea, setShowArea] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [filterAreas, setFilterAreas] = useState<string[]>([]);
  const [filterCategories, setFilterCategories] = useState<string[]>([]);

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then(res => setAreas(res.data.meals || []))
      .catch(err => console.error(err));

    axios.get("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
      .then(res => setCategories(res.data.meals || []))
      .catch(err => console.error(err));
  }, []);

  const handleAreaChange = (area: string, checked: boolean) => {
    if (checked) setFilterAreas(prev => [...prev, area]);
    else setFilterAreas(prev => prev.filter(item => item !== area));
  };

  const handleCategorieChange = (categorie: string, checked: boolean) => {
    if (checked) setFilterCategories(prev => [...prev, categorie]);
    else setFilterCategories(prev => prev.filter(item => item !== categorie));
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md flex flex-col gap-4">
      
      <div>
        <h3 className="flex justify-between items-center cursor-pointer text-lg font-semibold mb-2"
            onClick={() => setShowArea(!showArea)}>
          Areas
          {showArea ? <FaAngleUp /> : <FaAngleDown />}
        </h3>
        {showArea && (
          <div className="flex flex-wrap gap-2">
            {areas.map(area => (
              <label key={area.strArea} className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full cursor-pointer hover:bg-gray-200 transition">
                <input
                  type="checkbox"
                  value={area.strArea}
                  checked={filterAreas.includes(area.strArea)}
                  onChange={e => handleAreaChange(area.strArea, e.target.checked)}
                  className="accent-indigo-500"
                />
                {area.strArea}
              </label>
            ))}
          </div>
        )}
      </div>

      <div>
        <h3 className="flex justify-between items-center cursor-pointer text-lg font-semibold mb-2"
            onClick={() => setShowCategories(!showCategories)}>
          Categories
          {showCategories ? <FaAngleUp /> : <FaAngleDown />}
        </h3>
        {showCategories && (
          <div className="flex flex-wrap gap-2">
            {categories.map(categorie => (
              <label key={categorie.strCategory} className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full cursor-pointer hover:bg-gray-200 transition">
                <input
                  type="checkbox"
                  value={categorie.strCategory}
                  checked={filterCategories.includes(categorie.strCategory)}
                  onChange={e => handleCategorieChange(categorie.strCategory, e.target.checked)}
                  className="accent-indigo-500"
                />
                {categorie.strCategory}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
