import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Utility/Footer";
import NavbarLogin from "./Components/Utility/NavbarLogin";
import HomePage from "./Pages/Home/HomePage";
import AllCategoriesPage from "./Pages/Category/AllCategoriesPage";
import AddCategoryForm from "./productComponent/AddCategoryForm";
import AddProductForm from "./productComponent/AddProductForm";
import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <div className="font">
      <NavbarLogin />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/home/all/product/categories" element={<HomePage />} />
          <Route
            path="/home/all/product/category/:categoryId/:categoryName"
            element={<HomePage />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="addcategory" element={<AddCategoryForm />} />
          <Route path="addproduct" element={<AddProductForm />} />
          {/* <Route path="/user/register" element={<AddUserForm />} /> */}
          <Route path="/sign-up" element={<SignUpPage />} />
          {/* <Route path="/user/login" element={<UserLoginForm />} /> */}
          <Route path="/allcategories" element={<AllCategoriesPage />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
