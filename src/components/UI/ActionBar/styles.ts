import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { DRAWER_WIDTH } from '../../../constants/ui';


export default makeStyles((theme: Theme) =>
createStyles({
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      marginLeft: DRAWER_WIDTH,
    },
    boxShadow: 'none',
    borderBottom: '1px solid #E9ECF4',
    backgroundColor: '#FCFCFC',
  },
  menuButton: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
}),
);