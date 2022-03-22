import ReactDOM from "react-dom";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import AboutPage from "./components/about";
import AdminPage from "./components/admin";
import HomePage from "./components/home";
import Dashboard from "./components/Admin/dashboard";
import FoodList from "./components/Admin/foodlist";

export default function App() {
  
  let admin = localStorage.getItem('admin');

  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="*" element={<Navigate to = {"/"} />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/admin" element={ !admin ? <AdminPage/> : <Navigate to = {"/admin/dashboard"} /> }/>
          { admin && (<>
          <Route path="/admin/dashboard" element={<Dashboard/>}/> 
          <Route path="/foodlist" element={<FoodList/>}/> 
          </>)
          }
          
        </Routes>
      </BrowserRouter>

  );
}

ReactDOM.render(<App />, document.getElementById("root"));
