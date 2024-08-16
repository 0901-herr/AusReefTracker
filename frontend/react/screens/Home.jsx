import React from "react";
import {
  Box,
  Typography,
  CardMedia,
  useTheme,
  useMediaQuery,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer.jsx";

const HomePage = (props) => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  const mainColor = theme.palette.primary.main;
  const backgroundColor = theme.palette.background.default;
  const titleColor = theme.palette.neutral.title;
  const subtitleColor = theme.palette.neutral.subtitle;
  const labelColor = theme.palette.neutral.label;
  const buttonColor = theme.palette.neutral.buttonText;

  const navigate = useNavigate();

  const { setCurrentNavItem } = props;

  return (
    <Box m={isNonMobileScreens ? "4rem 0 0 0" : "2rem 0"}>
      {/* Landing page */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems={isNonMobileScreens ? "center" : "left"}
        justifyContent="center"
        m="8rem 3rem"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems={isNonMobileScreens ? "center" : "left"}
          justifyContent="center"
        >
          {isNonMobileScreens && (
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              m="1rem 0"
            >
              <Box display="flex" flexDirection="column" pt="3rem" mr="4rem">
                <Box pl="1.5rem">
                  <img
                    width="45"
                    height="45"
                    alt="advert"
                    src={"../../static/images/fish1.png"}
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <Box display="flex" flexDirection="row" height="80px">
                  <img
                    width="45"
                    height="45"
                    alt="advert"
                    src={
                      theme.palette.mode === "dark"
                        ? "../../static/images/fish-white1.png"
                        : "../../static/images/fish1.png"
                    }
                    style={{ objectFit: "cover" }}
                  />
                  <Box pt="16px">
                    <img
                      width="45"
                      height="45"
                      alt="advert"
                      src={"../../static/images/fish1.png"}
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                </Box>
              </Box>

              <Box display="flex" flexDirection="column" width="45%">
                <Typography
                  textAlign="center"
                  fontSize="56px"
                  fontWeight="600"
                  color={titleColor}
                  sx={{
                    opacity: 0,
                    transition: "opacity 0.6s ease-in-out",
                    animationDelay: "0s",
                    animationFillMode: "forwards",
                    animationDuration: "1.5s",
                    animationName: "fadeIn",
                    "@keyframes fadeIn": {
                      from: { opacity: 0 },
                      to: { opacity: 1 },
                    },
                  }}
                >
                  Aus Reef <span style={{ color: mainColor }}>Tracker</span>
                </Typography>

                <Box mt="2rem">
                  <Typography
                    fontSize="16px"
                    textAlign="center"
                    color={subtitleColor}
                    sx={{
                      opacity: 0,
                      transition: "opacity 0.5s ease-in-out",
                      animationDelay: "0s",
                      animationFillMode: "forwards",
                      animationDuration: "1.5s",
                      animationName: "fadeIn",
                      "@keyframes fadeIn": {
                        from: { opacity: 0 },
                        to: { opacity: 1 },
                      },
                    }}
                  >
                    Discover the current state of coral reefs across the
                    Australian coast with Aus Reef Tracker's cutting-edge
                    technology and advanced data analysis.
                  </Typography>
                </Box>
              </Box>

              <Box display="flex" flexDirection="column" ml="4rem">
                <img
                  width="45"
                  height="45"
                  alt="advert"
                  src={
                    theme.palette.mode === "dark"
                      ? "../../static/images/fish-white1.png"
                      : "../../static/images/fish1.png"
                  }
                  style={{ objectFit: "cover" }}
                />

                <Box display="flex" flexDirection="row">
                  <img
                    width="45"
                    height="45"
                    alt="advert"
                    src={"../../static/images/fish1.png"}
                    style={{ objectFit: "cover" }}
                  />
                  <Box pl="1rem">
                    <img
                      width="45"
                      height="45"
                      alt="advert"
                      src={
                        theme.palette.mode === "dark"
                          ? "../../static/images/fish-white1.png"
                          : "../../static/images/fish1.png"
                      }
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          )}

          {!isNonMobileScreens && (
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Box
                display="flex"
                flexDirection="column"
                alignItems="left"
                justifyContent="center"
              >
                <Box display="flex" flexDirection="row">
                  <Typography
                    textAlign="left"
                    fontSize="40px"
                    fontWeight="bold"
                    color={titleColor}
                  >
                    Aus Reef <span style={{ color: mainColor }}>Tracker!!</span>
                  </Typography>
                </Box>
                <Box width="80%" mt="1rem" textAlign="left">
                  <Typography fontSize="14px" color={subtitleColor}>
                    Track and Monitor Coral Reefs in Australia with Aus Reef
                    Tracker's Interactive Data and Graphs
                  </Typography>
                </Box>
              </Box>
            </Box>
          )}
        </Box>

        <Box
          width="125px"
          height="45px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="25px"
          mt="4rem"
          sx={{
            background: mainColor,
            color: buttonColor,
            "&:hover": {
              cursor: "pointer",
              border: "1.4px solid",
              background: backgroundColor,
              borderColor: mainColor,
              color: mainColor,
            },
          }}
          onClick={() => {
            setCurrentNavItem("Dashboard");
            navigate("/dashboard");
          }}
        >
          <Typography fontSize="14px">Get Started</Typography>
        </Box>
      </Box>

      {/* About */}
      <Box
        display="flex"
        flexDirection={isNonMobileScreens ? "row" : "column"}
        alignItems="center"
        m="6rem 0"
      >
        <Box sx={{ position: "relative" }}>
          <CardMedia
            component="video"
            image="../../static/images/corals.mp4"
            sx={{
              filter: "brightness(35%)",
              backgroundRepeat: "no-repeat",
              height: isNonMobileScreens ? "100%" : "600px",
              width: "100%",
              objectFit: "cover",
            }}
            autoPlay={true}
            muted
            playsInline
          />

          <Box
            sx={{
              position: "absolute",
              top: 80,
              left: 40,
              zIndex: 1,
              p: { xs: 2, sm: 4, md: 6 },
            }}
          >
            <Typography
              fontSize={isNonMobileScreens ? "13px" : "11px"}
              fontWeight="bold"
              color={mainColor}
            >
              ABOUT
            </Typography>
            <Typography
              fontSize={isNonMobileScreens ? "26px" : "20px"}
              fontWeight="bold"
              mt="0.25rem"
              color={buttonColor}
            >
              What is Aus Reef Tracker?
            </Typography>

            <Box mt="1.5rem" width={isNonMobileScreens ? "40%" : "80%"}>
              <Typography
                fontSize={isNonMobileScreens ? "16px" : "14px"}
                color={buttonColor}
              >
                Aus Reef Tracker is a powerful tool that enables the general
                public to monitor and track the condition of coral reefs in
                Australia. Through interactive graphs and live data, users can
                easily access information on the degradation of coral reefs and
                key attributes that contribute to their bleaching. Additionally,
                the website features a library page that highlights different
                species of corals and offers a curated selection of articles
                about coral reefs in Australia.
              </Typography>
            </Box>

            <Box
              width="110px"
              mt="2.5rem"
              p="0.5rem 1rem"
              border="1.4px solid"
              borderRadius="20px"
              borderColor={mainColor}
              color={mainColor}
              onClick={() => {
                setCurrentNavItem("Dashboard");
                navigate("/dashboard");
              }}
              sx={{
                "&:hover": {
                  cursor: "pointer",
                  backgroundColor: mainColor,
                  color: buttonColor,
                },
              }}
            >
              <Typography textAlign="center" fontSize="14px" key={"try"}>
                Try it Out
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Meet our team */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        m={isNonMobileScreens ? "10rem 0" : "6rem 3rem"}
      >
        <img
          width={isNonMobileScreens ? "220" : "170"}
          height={isNonMobileScreens ? "220" : "170"}
          alt="advert"
          src={"../../static/images/group.png"}
          style={{ objectFit: "cover", borderRadius: "5px" }}
        />
        <Box
          m="2rem 0 0 0"
          display="flex"
          flexDirection="column"
          width={isNonMobileScreens ? "50%" : "100%"}
        >
          <Box textAlign="center">
            <Typography
              fontSize={isNonMobileScreens ? "14px" : "11px"}
              color={labelColor}
              m="1.5rem 0"
            >
              NELLY | ROBERT | PHILIPPE
            </Typography>
          </Box>

          <Box mt="1.5rem">
            <Typography
              fontSize={isNonMobileScreens ? "13px" : "11px"}
              fontWeight="bold"
              color={mainColor}
            >
              THE TEAM
            </Typography>
            <Typography
              fontSize={isNonMobileScreens ? "26px" : "20px"}
              fontWeight="bold"
              mt="0.25rem"
              color={titleColor}
            >
              Meet our team
            </Typography>
          </Box>
          <Box mt="1rem">
            <Typography
              fontSize={isNonMobileScreens ? "16px" : "14px"}
              color={subtitleColor}
            >
              As a group of final year computer science students at Monash
              University, we are thrilled to be working on a project that has
              the potential to make a positive impact on our planet. Our
              project, Aus Reef Tracker, aims to provide the general public with
              the ability to monitor and track the situation of the coral reefs
              in Australia. With interactive graphs, live data, and a library of
              coral species, our tool is designed to make it easy for anyone to
              stay informed about the state of Australia's precious coral reefs.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ borderBottomWidth: 1.5 }} />

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default HomePage;
