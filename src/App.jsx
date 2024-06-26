import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import DetailProduct from "./pages/products/DetailProduct";
import theme from "./Theme";
import Cart from "./pages/cart/Cart";
import Profile from "./pages/user/Profile";
import Orders from "./pages/user/order/Orders";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Mengatur baseline CSS untuk Material UI */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:name" element={<DetailProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="order" element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
