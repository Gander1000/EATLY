import Home_Date from "./Home_Date";
import { Routes, Route } from "react-router";
import Menu_date from "./Menu_date";
import Blog_Date from "./Blog_Date";
import Pricing_Date from "./Pricing_Date";
import Contact_Date from "./Contact_Date";
import Sign_up_Date from "./Sign_up_Date";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home_Date />} />
      <Route path="/Menu" element={<Menu_date />} />
      <Route path="/Blog" element={<Blog_Date />} />
      <Route path="/Pricing" element={<Pricing_Date />} />
      <Route path="/Contact" element={<Contact_Date />} />
      <Route path="/Sign_up" element={<Sign_up_Date />} />
    </Routes>
  );
}

export default App;
