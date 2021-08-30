import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) =>
  createStyles({
    chartWrapper: {
      width: "100%",
      height: "332px",
      [theme.breakpoints.down("sm")]: {
        height: "90px",
      },
    },
  })
);
