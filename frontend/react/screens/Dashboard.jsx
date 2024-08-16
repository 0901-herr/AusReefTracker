import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Dialog,
  useTheme,
  useMediaQuery,
  Divider,
} from "@mui/material";
import { HelpOutline } from "@mui/icons-material";
import { useState } from "react";
import Footer from "../components/Footer.jsx";
import TableauEmbed from "../screens/Tableau.js";
import "../../react/style.css";

const DashboardPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  const mainColor = theme.palette.primary.main;
  const titleColor = theme.palette.neutral.title;
  const subtitleColor = theme.palette.neutral.subtitle;
  const labelColor = theme.palette.neutral.label;
  const buttonColor = theme.palette.neutral.buttonText;

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(8);

  const [isDashboardHelp, setIsDashboardHelp] = useState(false);

  const handlePageChange = (event, value) => {
    setStartIndex(startIndex + 8);
    setEndIndex(endIndex + 8);
  };

  return (
    <Box m={isNonMobileScreens ? "4rem 0 0 0" : "2rem 0"}>
      {/* Dashboard */}
      <Box
        display="flex"
        flexDirection="column"
        m={isNonMobileScreens ? "0 4rem" : "0 2rem"}
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography fontSize="24px" fontWeight="bold" color={titleColor}>
            Dashboard
          </Typography>

          <IconButton
            style={{ color: labelColor }}
            onClick={() => {
              setIsDashboardHelp(true);
            }}
          >
            <HelpOutline />
          </IconButton>
        </Box>

        <Divider sx={{ borderBottomWidth: 1.5, margin: "0.75rem 0" }} />

        <Box mt="1.5rem">
          <TableauEmbed />
        </Box>
      </Box>

      <Dialog onClose={() => setIsDashboardHelp(false)} open={isDashboardHelp}>
        <Box width="600px" height="500px" p="1.5rem">
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              fontSize={isNonMobileScreens ? "20px" : "18px"}
              fontWeight="bold"
              color={titleColor}
            >
              About
            </Typography>

            <Box
              width="75px"
              p="0.5rem 1rem"
              border="1.4px solid"
              borderRadius="22px"
              borderColor={mainColor}
              color={mainColor}
              onClick={() => {
                setIsDashboardHelp(false);
                setIsDashboardHelp(false);
              }}
              sx={{
                "&:hover": {
                  cursor: "pointer",
                  backgroundColor: mainColor,
                  color: buttonColor,
                },
              }}
            >
              <Typography textAlign="center" fontSize="12px" key={"try"}>
                Done
              </Typography>
            </Box>
          </Box>
          <Divider
            style={{
              margin: "1rem 0",
              borderWidth: "1px",
            }}
          />

          <Box mt="1.5rem">
            <Typography
              fontSize={isNonMobileScreens ? "18px" : "16px"}
              fontWeight="bold"
              color={titleColor}
            >
              What is this
            </Typography>
            <Typography
              fontSize={isNonMobileScreens ? "14px" : "13px"}
              color={subtitleColor}
              mt="0.6rem"
            >
              This is the main dashboard where you can view each of the datasets
              related to the coral reef. There are two main datasets that we are
              using, the coral reef species count dataset, and the AIMS weather
              dataset. These two datasets are used to provide better insights
              into what the current situation of the coral reefs is like in
              Australia. To track these corals in real-time, we are using live
              datasets that are being updated weekly. The data we are presenting
              here are important factors that would cause coral bleaching.
            </Typography>
          </Box>

          <Box mt="2rem">
            <Typography
              fontSize={isNonMobileScreens ? "18px" : "16px"}
              fontWeight="bold"
              color={titleColor}
            >
              How does it works
            </Typography>

            <Typography
              fontSize={isNonMobileScreens ? "14px" : "13px"}
              color={subtitleColor}
              mt="0.6rem"
            >
              The map shows the count of corals present in the area, and it also
              serves as a filter. When you click on any circled area, the
              surrounding graphs would change accordingly to that location. The
              bottom graphs show the gust and air speed of that area, and the
              right-hand-side graphs show the water temperature at different
              depths.
            </Typography>
          </Box>
        </Box>
      </Dialog>

      <Divider sx={{ borderBottomWidth: 1.5 }} />

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default DashboardPage;
