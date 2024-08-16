import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  Divider,
  Box,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Menu, LightModeOutlined, DarkModeOutlined } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMode } from "../../state/index.js";

const NavBar = (props) => {
  const { currentNavItem, setCurrentNavItem } = props;
  const theme = useTheme();
  const dispatch = useDispatch();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const mainColor = theme.palette.primary.main;
  const backgroundColor = theme.palette.background.default;
  const titleColor = theme.palette.neutral.title;
  const buttonColor = theme.palette.neutral.buttonText;

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    {
      text: "Home",
    },

    {
      text: "Dashboard",
    },
    {
      text: "Library",
    },
  ];

  const drawerItems = [
    {
      text: "Dark Mode",
    },
    {
      text: "Home",
    },

    {
      text: "Dashboard",
    },
    {
      text: "Library",
    },
  ];

  return (
    <Box>
      {/* Desktop Navbar */}
      {isNonMobileScreens && (
        <Box display="flex" justifyContent="space-between" p="1.25rem 1rem">
          <Box pl="2.5rem">
            <IconButton
              edge="start"
              aria-label="menu"
              style={{ color: titleColor }}
              onClick={() => dispatch(setMode())}
            >
              {theme.palette.mode === "dark" ? (
                <LightModeOutlined sx={{ color: buttonColor }} />
              ) : (
                <DarkModeOutlined sx={{ color: titleColor }} />
              )}{" "}
            </IconButton>
          </Box>

          <Box display="flex" flexDirection="row">
            {navItems.map((item) => (
              <Box
                m="0 2rem"
                p="0.4rem 1rem"
                border="1.4px solid"
                borderRadius="18px"
                borderColor={
                  currentNavItem === item.text ? mainColor : backgroundColor
                }
                color={currentNavItem === item.text ? mainColor : titleColor}
                onClick={() => {
                  setCurrentNavItem(item.text);
                  navigate(`/${item.text.toLowerCase()}`);
                }}
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    backgroundColor: mainColor,
                    color: buttonColor,
                  },
                }}
              >
                <Typography textAlign="center" fontSize="14px" key={item.text}>
                  {item.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      )}

      {!isNonMobileScreens && (
        <>
          <AppBar
            position="static"
            style={{
              background: backgroundColor,
              boxShadow: "none",
            }}
          >
            <Toolbar>
              <IconButton
                edge="start"
                aria-label="menu"
                style={{ color: titleColor }}
                onClick={toggleDrawer}
              >
                <Menu style={{ fontSize: "24px" }} />
              </IconButton>
            </Toolbar>
          </AppBar>

          <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
            <Box style={{ width: 250, height: "100%", marginTop: "1rem" }}>
              <List>
                {drawerItems.map((item) => (
                  <Box p="0.25rem 0.5rem">
                    {item.text === "Dark Mode" ? (
                      <ListItem
                        button
                        onClick={() => {
                          dispatch(setMode());
                        }}
                      >
                        <Box
                          display="flex"
                          flexDirection="row"
                          alignItems="center"
                        >
                          {theme.palette.mode === "dark" ? (
                            <LightModeOutlined sx={{ color: buttonColor }} />
                          ) : (
                            <DarkModeOutlined sx={{ color: titleColor }} />
                          )}
                          <ListItemText
                            primary={
                              theme.palette.mode === "dark"
                                ? "Light Mode"
                                : "Dark Mode"
                            }
                            primaryTypographyProps={{
                              pl: "1rem",
                              style: {
                                color:
                                  currentNavItem === item.text
                                    ? mainColor
                                    : titleColor,
                              },
                            }}
                          />
                        </Box>
                      </ListItem>
                    ) : (
                      <ListItem
                        button
                        key={item.text}
                        onClick={() => {
                          setCurrentNavItem(item.text);
                          navigate(`/${item.text.toLowerCase()}`);
                          setIsOpen(false);
                        }}
                      >
                        <ListItemText
                          primary={item.text}
                          primaryTypographyProps={{
                            style: {
                              color:
                                currentNavItem === item.text
                                  ? mainColor
                                  : titleColor,
                            },
                          }}
                        />
                      </ListItem>
                    )}
                  </Box>
                ))}
              </List>
            </Box>
          </Drawer>
        </>
      )}

      <Divider sx={{ borderBottomWidth: 1.5 }} />
    </Box>
  );
};

export default NavBar;
