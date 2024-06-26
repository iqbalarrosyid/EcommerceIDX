import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Appbar = () => {
  const navigate = useNavigate();
  const user = "user";
  const userMenu = [
    {
    menu: "Profile", link: "/profile"
  },{
    menu: "Order", link: "/order"
  }];
  const adminMenu = ["Setting", "Dashboard", "Logout"];
  const [open, setOpen] = useState(null);
  const menuOpen = (event) => {
    setOpen(event.currentTarget);
  };
  const menuClose = () => {
    setOpen(null);
  };

  const toCart = () => navigate("/cart");
  const toHome = () => navigate("/");
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1786599567.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3021398324.
  const toPage = (link) => {
    navigate(link);
    menuClose();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ cursor: "pointer" }} onClick={toHome}>
            <img
              src="/RBlogo.png"
              alt="logo"
              style={{ height: "70px", width: "70px", objectFit: "contain" }}
            />
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton onClick={toCart}>
              <ShoppingCartIcon />
            </IconButton>

            {user === "user" ? (
              <>
                <IconButton onClick={menuOpen}>
                  <AccountCircleIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={open}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(open)}
                  onClose={menuClose}
                >
                  {userMenu.map((item, index) => (
                    <MenuItem key={index} onClick={() => toPage(item.link)}>
                      {item.menu}
                    </MenuItem>
                  ))}
                  <MenuItem>
                      Logout
                    </MenuItem>
                </Menu>
              </>
            ) : user === "admin" ? (
              <>
                <IconButton onClick={menuOpen}>
                  <AccountCircleIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={open}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(open)}
                  onClose={menuClose}
                >
                  {adminMenu.map((item) => (
                    <MenuItem key={item} onClick={menuClose}>
                      {item}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <IconButton>
                <LoginIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Appbar;
