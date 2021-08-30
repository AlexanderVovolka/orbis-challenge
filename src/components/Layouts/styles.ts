import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const drawerWidth = 72;

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: "#B6B7C3",
      padding: "16px 18px",
      boxSizing: "border-box",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      marginTop: 65,
      backgroundColor: '#FCFCFC',
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(1),
        paddingBottom: theme.spacing(3),
      },
    },
    avatar: {
      backgroundColor: "#001458",
      width: 35,
      height: 35,
    },
  })
);
