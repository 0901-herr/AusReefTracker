import React from "react";
import {
  Box,
  Grid,
  Typography,
  useTheme,
  Divider,
  IconButton,
  Dialog,
  Pagination,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { Place, HelpOutline } from "@mui/icons-material";
import Footer from "../components/Footer.jsx";
import Articles from "../../static/data/articles.json";
import Corals from "../../static/data/corals_data.json";

const LibraryPage = (props) => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  const mainColor = theme.palette.primary.main;
  const boxColor = theme.palette.background.box;
  const titleColor = theme.palette.neutral.title;
  const subtitleColor = theme.palette.neutral.subtitle;
  const labelColor = theme.palette.neutral.label;
  const buttonColor = theme.palette.neutral.buttonText;

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(12);

  const [isArticleHelp, setIsArticleHelp] = useState(false);
  const [isCoralHelp, setIsCoralHelp] = useState(false);

  const handlePageChange = (event, value) => {
    setStartIndex(startIndex + 12);
    setEndIndex(endIndex + 12);
  };

  return (
    <Box m={isNonMobileScreens ? "4rem 0 0 0" : "2rem 0rem"}>
      {/* Coral Reef Creatures */}
      <Box m={isNonMobileScreens ? "4rem" : "4rem 2rem"}>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography
            fontSize={isNonMobileScreens ? "24px" : "22px"}
            fontWeight="bold"
            color={titleColor}
          >
            Coral Reef Creatures
          </Typography>

          <IconButton
            style={{ color: labelColor }}
            onClick={() => {
              setIsCoralHelp(true);
            }}
          >
            <HelpOutline />
          </IconButton>
        </Box>

        <Divider sx={{ borderBottomWidth: 1.5, margin: "0.75rem 0" }} />

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          mt="1.5rem"
        >
          <Grid
            container
            spacing={{ xs: 2, md: 4 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {Corals.slice(startIndex, endIndex).map((coral, index) => (
              <Grid item xs={isNonMobileScreens ? 3 : 2} key={index}>
                <Box
                  width="100%"
                  height={isNonMobileScreens ? "140px" : null}
                  p="1rem"
                  sx={{
                    backgroundColor: boxColor,
                    borderRadius: "12px",
                  }}
                >
                  <Typography
                    fontSize="16px"
                    fontWeight="bold"
                    color={titleColor}
                  >
                    {coral.scientificName}
                  </Typography>
                  <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    mt="0.25rem"
                  >
                    <Place sx={{ fontSize: "12px" }} />
                    <Typography fontSize="12px" color={titleColor} pl="0.25rem">
                      {coral.stateProvince}
                    </Typography>
                  </Box>

                  <Typography fontSize="12px" color={subtitleColor} mt="0.8rem">
                    {coral.kingdom}, {coral.phylum}, {coral.class},{" "}
                    {coral.order}, {coral.family}, {coral.genus},{" "}
                    {coral.specificEpithet}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            m="4rem 0 0 2rem"
          >
            <Pagination
              count={100}
              size={isNonMobileScreens ? "large" : "medium"}
              onChange={handlePageChange}
            />
          </Box>
        </Box>
      </Box>

      {/* Articles */}
      <Box
        display="flex"
        flexDirection="column"
        m={isNonMobileScreens ? "6rem 4rem" : "6rem 2rem"}
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography
            fontSize={isNonMobileScreens ? "24px" : "22px"}
            fontWeight="bold"
            color={titleColor}
          >
            Recommended Reading
          </Typography>

          <IconButton
            style={{ color: labelColor }}
            onClick={() => setIsArticleHelp(true)}
          >
            <HelpOutline />
          </IconButton>
        </Box>
        <Divider
          sx={{
            borderBottomWidth: 1.5,
            color: labelColor,
            margin: "0.75rem 0",
          }}
        />
        {/* Featured articles */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            "&:hover": {
              cursor: "pointer",
              backgroundColor: boxColor,
            },
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            width={isNonMobileScreens ? "45%" : "100%"}
            m={isNonMobileScreens ? "2rem 0" : "0.5rem 0"}
            p="1rem"
          >
            <Typography
              fontSize="12px"
              fontWeight="bold"
              color={mainColor}
              m="0.5rem 0"
            >
              FEATURED
            </Typography>
            <img
              width="100%"
              height="200px"
              alt="advert"
              src="../../static/images/corals5.jpg"
              style={{ objectFit: "cover", borderRadius: "6px" }}
            />
            <Typography fontSize="14px" color={labelColor} mt="0.8rem">
              National Geography
            </Typography>
            <Typography
              fontSize="18px"
              color={titleColor}
              fontWeight="bold"
              mt="0.2rem"
              component="a"
              href={
                "https://education.nationalgeographic.org/resource/great-barrier-reef"
              }
              sx={{
                "&:hover": {
                  color: mainColor,
                },
              }}
            >
              Great Barrier Reef
            </Typography>

            <Typography
              fontSize={isNonMobileScreens ? "14px" : "13px"}
              color={subtitleColor}
              mt="0.6rem"
            >
              The Great Barrier Reef, which extends for over 2,300 kilometers
              (1429 miles) along the northeastern coast of Australia, is home to
              over 9,000 known species. There are likely many more—new
              discoveries are frequently being made, including a new species of
              branching coral discovered in 2017.
            </Typography>
          </Box>
        </Box>
        {/* Normal articles */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          mt="2rem"
        >
          {Articles.map((article, index) => (
            <Box
              width={isNonMobileScreens ? "60%" : "100%"}
              sx={{
                "&:hover": {
                  cursor: "pointer",
                  backgroundColor: boxColor,
                },
              }}
            >
              <Box
                display="flex"
                flexDirection="row"
                m={isNonMobileScreens ? "2rem" : "2rem 0"}
                p="0 1rem"
              >
                <img
                  width={isNonMobileScreens ? "130px" : "115px"}
                  height={isNonMobileScreens ? "130px" : "115px"}
                  alt="advert"
                  src={"../../static/images/article" + (index + 1) + ".jpg"}
                  style={{ objectFit: "cover", borderRadius: "6px" }}
                />

                <Box
                  ml="2rem"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Typography fontSize="14px" color={labelColor}>
                    {article.author}
                  </Typography>
                  <Typography
                    fontSize={isNonMobileScreens ? "18px" : "16px"}
                    color={titleColor}
                    fontWeight="bold"
                    mt="0.2rem"
                    component="a"
                    href={article.url}
                    sx={{
                      "&:hover": {
                        color: mainColor,
                      },
                    }}
                  >
                    {article.title}
                  </Typography>
                  <Typography
                    fontSize={isNonMobileScreens ? "14px" : "13px"}
                    color={subtitleColor}
                    mt="0.6rem"
                    style={{
                      maxHeight: "60px",
                      overflow: "hidden",
                    }}
                  >
                    {article.description}
                  </Typography>
                </Box>
              </Box>
              <Divider
                sx={{
                  opacity: index === 5 ? 0 : 1,
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      <Divider sx={{ borderBottomWidth: 1.5 }} />

      {/* Article Help Guidlines */}
      <Dialog
        onClose={() => {
          setIsCoralHelp(false);
          setIsArticleHelp(false);
        }}
        open={isCoralHelp || isArticleHelp}
      >
        <Box width="600px" height="450px" p="1.5rem">
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
              p="0.45rem 0.95rem"
              border="1.4px solid"
              borderRadius="22px"
              borderColor={mainColor}
              color={mainColor}
              onClick={() => {
                setIsCoralHelp(false);
                setIsArticleHelp(false);
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
            {isArticleHelp && (
              <Typography
                fontSize={isNonMobileScreens ? "14px" : "13px"}
                color={subtitleColor}
                mt="0.6rem"
              >
                This is a section where you can read coral-related articles by
                different publishers. They highlighted some of the most
                concerning issues about coral reefs, and some interesting facts
                that you might not know about. The featured article features
                some important knowledge regarding coral reefs that we would
                like to share with you.
              </Typography>
            )}
            {isCoralHelp && (
              <Typography
                fontSize={isNonMobileScreens ? "14px" : "13px"}
                color={subtitleColor}
                mt="0.6rem"
              >
                This is a section where you can learn more about the coral reefs
                in Australia. There are over 600 types of different coral
                species that can be found in Australia, and we have displayed
                some of them for users to learn more about.
              </Typography>
            )}
          </Box>

          <Box mt="1.5rem">
            <Typography
              fontSize={isNonMobileScreens ? "18px" : "16px"}
              fontWeight="bold"
              color={titleColor}
            >
              How does it works
            </Typography>
            {isArticleHelp && (
              <Typography
                fontSize={isNonMobileScreens ? "14px" : "13px"}
                color={subtitleColor}
                mt="0.6rem"
              >
                To view each article, simply hover over the article title and
                click on it. After you clicked on the title, you should be
                directed to another website where the article is located at. You
                should then be able to read the articles and learn more about
                the related content.
              </Typography>
            )}
            {isCoralHelp && (
              <Typography
                fontSize={isNonMobileScreens ? "14px" : "13px"}
                color={subtitleColor}
                mt="0.6rem"
              >
                Display in each box is the scientific name of each coral. Under
                the scientific name, we have the location of the coral in
                Australia (state). We have also listed out the kingdom, phylum,
                class, order, family, genus, and specific epithet in order for
                the users to learn more about them.
              </Typography>
            )}
          </Box>
        </Box>
      </Dialog>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default LibraryPage;
