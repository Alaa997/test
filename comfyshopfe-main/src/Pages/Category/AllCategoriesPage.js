import React, { useEffect, useState } from "react";
import CategoryAPI from "../../APIs/CategoryAPI";
import CategoryList from "../../Components/Category/CategoryList";
import Pagination from "../../Components/Utility/Pagination";

const AllCategoriesPage = () => {
  const [categories, setCategories] = useState([]);

  const refreshCategories = async () => {
    const allCategories = await CategoryAPI.getCategories();
    if (allCategories) {
      setCategories(allCategories);
    }
  };

  useEffect(() => {
    refreshCategories();
  }, []);

  return (
    <div style={{ minHeight: "670" }}>
      <CategoryList
        categories={categories}
        onCategoryDeleted={refreshCategories}
      />
      {/* <Pagination /> */}
    </div>
  );
};

export default AllCategoriesPage;
