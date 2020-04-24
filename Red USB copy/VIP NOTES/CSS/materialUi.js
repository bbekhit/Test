// - page speed insights https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fintense-mountain-35484.herokuapp.com%2F

// https://tinyjpg.com/

// svgomg https://jakearchibald.github.io/svgomg/

// https://material-ui.com/styles/basics/

// color
const {
  palette: {
    common: { myColor, arcBlue, orange }
  }
} = theme;
<AppBar
  position="fixed"
  style={{ background: myColor, color: orange }}
></AppBar>;

// inline styles
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3rem"
  },
  colorBtn: {
    background: theme.palette.common.myColor
  },
  logo: {
    height: "7rem"
  },
  tabsContainer: {
    marginLeft: "auto"
  },
  tab: {
    ...theme.typography.tab,
    color: theme.palette.common.myColor,
    minWidth: 10,
    marginLeft: "25px",
    "&:last-child": {
      // nesting
      color: "red"
    }
  }
}));
const Header = props => {
  const classes = useStyles();
  const theme = useTheme; // to get access to theme inside component(import { makeStyles, useTheme } from "@material-ui/core/styles";)(video 63 7:10)
  return (
    <>
      <div className={classes.toolbarMargin} />
    </>
  );
};

// disabbleGutters (video 19 6:03)

// extending theme (video 22 11:22)

// indicator color (video 25 5:18)

// disableRipple (video 27 10:23) Header logo

// nesting inside menus documents

// overrides in customization documents

// MenuListProps (video 31 12:42) to close menu

// elevation (video 33 4:19) to make menu flat

// disable typography (video 42 )

// keepMounted for menu (video 46)

// classes={{
//   root: classes.drawerItemEstimate,
//   selected: classes.drawerItemSelected
// }} // estimate button 2 classes

// vertical align for images (video 49 9:47)

// align="center" text in typography (video 62 3:15)

// "&:hover": {
//   backgroundColor: theme.palette.secondary.light
// } (video 63)

// differernt image CallToAction component
// background: {
//   backgroundImage: `url(${background})`,
//   backgroundPosition: "center",
//   backgroundSize: "cover",
//   backgroundAttachment: "fixed",
//   backgroundRepeat: "no-repeat",
//   height: "60em",
//   width: "100%",
//   [theme.breakpoints.down("md")]: {
//     backgroundImage: `url(${mobileBackground})`,
//     backgroundAttachment: "inherit"
//   }
// },

// conditionally CallToAction component
{
  /* <Grid
container
alignItems="center"
justify={matchesSM ? "center" : "space-between"}
className={classes.background}
direction={matchesSM ? "column" : "row"}
> */
}
{
  /* <Grid container justify={matchesSM ? "center" : undefined} item> */
}

// fixing breaking VIP (video 75 0:25)(video 63 10:57)
// (video 77 9:18) fixing extended div

// alignIng text  and gutterBottom
{
  /* <Grid
item
style={{
  marginLeft: matchesSM ? 0 : "5em",
  marginTop: matchesSM ? "1em" : "2em",
  textAlign: matchesSM ? "center" : undefined
}}
>
<Typography
  align={matchesSM ? "center" : undefined}
  variant="h2"
  gutterBottom
>
  Services
</Typography> */
}

// Hover
// list: {
//   ...theme.customBorder,
//   borderRadius: "1rem",
//   marginBottom: "1rem",
//   "&:hover": {
//     cursor: "pointer",
//     "& $btnContainer": {
//       display: "block"
//     }
//   }
// },
