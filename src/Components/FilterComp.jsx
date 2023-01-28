import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const FilterComp = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategoryFilters = searchParams.getAll("category");

  const initialsortByFilters = searchParams.getAll("sortBy");

  const [category, setCategory] = useState(initialCategoryFilters || []);

  const [sortBy, setSortBy] = useState( initialsortByFilters[0] || "");

   const handleSort = (e) => {
     setSortBy(e.target.value)
   }

  //  console.log(sortBy)


  const handleFilterCheckbox = (e) => {
    const newCategory = [...category];

    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
    }
    setCategory(newCategory);
  };

  //   console.log(category)

  useEffect(() => {
    if (category || sortBy) {
      let params = {};
      category && (params.category = category); //url making
      sortBy && (params.sortBy = sortBy); 
      setSearchParams(params);
    }
  }, [category, setSearchParams, sortBy]);

  return (
    <div>
      <h3>Filter Comp</h3>
      <div>
        <div>
          <input
            type="checkbox"
            value="Novel"
            checked={category.includes('Novel')}
            onChange={handleFilterCheckbox}
          />
          <label>Novel</label>
        </div>

        <div>
          <input
            type="checkbox"
            value="Motivational"
            checked={category.includes('Motivational')}
            onChange={handleFilterCheckbox}
          />
          <label>Motivational</label>
        </div>

        <div>
          <input
            type="checkbox"
            value="Science_Fiction"
            checked={category.includes('Science_Fiction')}
            onChange={handleFilterCheckbox}
          />
          <label>Science Fiction</label>
        </div>

        <div>
          <input
            type="checkbox"
            value="Thriller"
            checked={category.includes('Thriller')}
            onChange={handleFilterCheckbox}
          />
          <label>Thriller</label>
        </div>
      </div>

    <h3>Sort Comp</h3>
    <div onChange={handleSort}>
        <input type='radio' value="asc" name="sortBy" defaultChecked={sortBy=== "asc"}/>
        <label >Ascending</label>
        <br></br>
        <input type='radio' value="desc" name="sortBy" defaultChecked={sortBy=== "desc"}/>
        <label >Descending</label>
    </div>


    </div>
  );
};
