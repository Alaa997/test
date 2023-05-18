// import React, { useEffect, useState } from "react";
// import CategoryAPI from "../../APIs/CategoryAPI";
// import CategorySidebar from "../../Components/Category/CategorySidebar";

// const CategoryPage = (props) => {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const data = await CategoryAPI.getCategories();
//       setCategories(data);
//     }
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <CategorySidebar
//         categories={categories}
//         onCategorySelect={props.handleCategoryClick}
//         filterProducts={props.filterProducts}
//       />
//     </div>
//   );
// };

// export default CategoryPage;
