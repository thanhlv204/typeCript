import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { useEffect, useState } from "react";
import { Product } from "./interface/Product";
import instance from "./axios";
import ProductForm from "./pages/ProductForm";
import AuthForm from "./components/AuthForm";

function App() {
  const fetchProduct = async () => {
    const { data } = await instance.get(`/products`);
    setProducts(data);
  };
  const nav = useNavigate();

  const onSubmitProduct = async (data: Product) => {
    try {
      if (data.id) {
        //logic edit
        await instance.patch(`/products/${data.id}`, data);
      } else {
        //logic add
        await instance.post(`/products`, data);
      }
      fetchProduct();
      nav("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await instance.get(`/products`);
      setProducts(data);
    })();
  }, []);

  const handleremove = (id: number) => {
    (async () => {
      if (confirm("ban co chac chan muon xoa")) {
        try {
          await instance.delete(`/products/${id}`);
          setProducts(products.filter((item) => item.id !== id));
        } catch (error) {
          console.log(error);
        }
      }
    })(),
      [];
  };
  return (
    <>
      <div>
        <ul className="flex gap-3 text-2xl mb-4">
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/register">register</Link>
          </li>
        </ul>
      </div>
      <div className="">
        <Routes>
          <Route path="/login" element={<AuthForm isLogin />}></Route>
          <Route path="/register" element={<AuthForm />}></Route>
          <Route
            path="/admin"
            element={
              <Dashboard products={products} removeProduct={handleremove} />
            }
          ></Route>
          <Route
            path="/product-add"
            element={<ProductForm onSubmitProduct={onSubmitProduct} />}
          ></Route>
          <Route
            path="/product-edit/:id"
            element={<ProductForm onSubmitProduct={onSubmitProduct} />}
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
