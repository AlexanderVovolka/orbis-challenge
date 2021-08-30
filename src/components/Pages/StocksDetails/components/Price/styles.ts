import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    price: {
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
    closedPrice: {
      fontSize: '28px',
      fontWeight: 500,
      marginRight: '8px',
    },
    difference: {
      display: 'flex',
      fontSize: '18px',
      lineHeight: '48px',
    },
    higher: {
      color: '#58D38C',
    },
    lower: {
      color: '#E51616',
    },
    iconWrapper: {
      margin: '0 4px',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    icon: {
      width: '19px',
      height: '19px',
    },
  })
);
