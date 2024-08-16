// color design tokens export
export const colorTokens = {
  grey: {
    0: "#FFFFFF",
    100: "#777777",
    200: "#828282",
    300: "#383838",
    400: "#1B1B1B",
    500: "#F9F9F9",
    1000: "#000000",
  },
  primary: {
    0: "#D15D4B",
  },
};

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "light"
        ? {
            // light mode
            primary: {
              main: colorTokens.primary[0],
            },
            neutral: {
              title: colorTokens.grey[1000],
              subtitle: colorTokens.grey[300],
              label: colorTokens.grey[100],
              buttonText: colorTokens.grey[0],
            },
            background: {
              default: colorTokens.grey[0],
              box: colorTokens.grey[500],
            },
          }
        : {
            // dark mode
            primary: {
              main: colorTokens.primary[0],
            },
            neutral: {
              title: colorTokens.grey[0],
              subtitle: colorTokens.grey[100],
              label: colorTokens.grey[200],
              buttonText: colorTokens.grey[0],
            },
            background: {
              default: colorTokens.grey[1000],
              box: colorTokens.grey[400],
            },
          }),
    },
    typography: {
      fontFamily: ["Rubik", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
