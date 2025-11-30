"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

type Area = { strArea: string };
type Categorie = { strCategory: string };

type FilterProps = {
  filterAreas: string[];
  setFilterAreas: React.Dispatch<React.SetStateAction<string[]>>;
  filterCategories: string[];
  setFilterCategories: React.Dispatch<React.SetStateAction<string[]>>;
};

const Filter = ({
  filterAreas,
  setFilterAreas,
  filterCategories,
  setFilterCategories,
}: FilterProps) => {
  const [areas, setAreas] = useState<Area[]>([]);
  const [categories, setCategories] = useState<Categorie[]>([]);
  const [showArea, setShowArea] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then((res) => setAreas(res.data.meals || []));

    axios.get("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
      .then((res) => setCategories(res.data.meals || []));
  }, []);

  return (
    <div className="w-72 p-5 bg-white rounded-2xl shadow-lg border border-brand-orange/30 flex flex-col gap-6 sticky top-4 h-fit">

      {/* Areas */}
      <div>
        <h3
          className="flex justify-between items-center cursor-pointer text-lg font-semibold text-brand-dark mb-2"
          onClick={() => setShowArea(!showArea)}
        >
          Areas {showArea ? <FaAngleUp /> : <FaAngleDown />}
        </h3>

        {showArea && (
          <div className="flex flex-wrap gap-2">
            {areas.map((area) => (
              <label
                key={area.strArea}
                className="flex items-center gap-2 bg-brand-cream px-3 py-1 rounded-full cursor-pointer hover:bg-brand-orange/20 text-brand-dark transition"
              >
                <input
                  type="checkbox"
                  checked={filterAreas.includes(area.strArea)}
                  onChange={(e) => {
                    if (e.target.checked)
                      setFilterAreas([...filterAreas, area.strArea]);
                    else
                      setFilterAreas(filterAreas.filter((a) => a !== area.strArea));
                  }}
                  className="accent-brand-orange"
                />
                {area.strArea}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Categories */}
      <div>
        <h3
          className="flex justify-between items-center cursor-pointer text-lg font-semibold text-brand-dark mb-2"
          onClick={() => setShowCategories(!showCategories)}
        >
          Categories {showCategories ? <FaAngleUp /> : <FaAngleDown />}
        </h3>

        {showCategories && (
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <label
                key={cat.strCategory}
                className="flex items-center gap-2 bg-brand-cream px-3 py-1 rounded-full cursor-pointer hover:bg-brand-orange/20 text-brand-dark transition"
              >
                <input
                  type="checkbox"
                  checked={filterCategories.includes(cat.strCategory)}
                  onChange={(e) => {
                    if (e.target.checked)
                      setFilterCategories([...filterCategories, cat.strCategory]);
                    else
                      setFilterCategories(
                        filterCategories.filter((c) => c !== cat.strCategory)
                      );
                  }}
                  className="accent-brand-orange"
                />
                {cat.strCategory}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
