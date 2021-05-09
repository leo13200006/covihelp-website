const componentStyles = (theme) => ({
  header: {
    position: "relative",
    background:
      "linear-gradient(87deg," + theme.palette.info.main + ",#1171ef)",
    paddingBottom: "4rem",
    paddingTop: "2rem",
    [theme.breakpoints.up("md")]: {
      paddingTop: "4rem",
    },
    marginBottom: "2rem"
  },
  containerRoot: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: "39px",
      paddingRight: "39px",
    },
  },
});

export default componentStyles;
