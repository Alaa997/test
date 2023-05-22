import React, { useEffect, useState } from "react";
import { CDBSidebar, CDBSidebarContent, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem } from "cdbreact";
import { Link } from "react-router-dom";
import CategoryAPI from "../APIs/CategoryAPI";

const GetAllCategories = (props) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getAllCategories() {
      const allCategories = await CategoryAPI.getCategories();
      setCategories(allCategories);
    }
    getAllCategories();
  }, []);

  const handleCategorySelect = (categoryId) => {
    if (categoryId) {
      props.filterProducts(categoryId);
    } else {
      props.filterProducts(null);
    }
  };

  return (
    <CDBSidebar textColor="#fff" backgroundColor="#333">
      <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
        <h5 className="text-decoration-none" style={{ color: "inherit" }}>
          Categories
        </h5>
      </CDBSidebarHeader>
      <CDBSidebarContent className="sidebar-content">
        <CDBSidebarMenu>
          <CDBSidebarMenuItem
            icon="columns"
            onClick={() => handleCategorySelect(null)}
          >
            <Link to="/home/all/product/categories">All products</Link>
          </CDBSidebarMenuItem>

          {categories.map((category) => (
            <CDBSidebarMenuItem
              key={category.id}
              icon="columns"
              onClick={() => handleCategorySelect(category.id)}
            >
              <Link
                to={`/home/all/product/category/${category.id}/${category.name}`}
              >
                {category.name}
              </Link>
            </CDBSidebarMenuItem>
          ))}
        </CDBSidebarMenu>
      </CDBSidebarContent>
    </CDBSidebar>
  );
};

export default GetAllCategories;
