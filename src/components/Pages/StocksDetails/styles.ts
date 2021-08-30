import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    symbol: {
      fontSize: '22px',
      marginRight: '10px',
    },
    title: {
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: '32px',
      marginBottom: '10px',
    },
    priceWrapper: {
      marginBottom: '20px',
    },
    section: {
      margin: '12px 0',
      fontSize: '16px'
    },
    value: {
      fontWeight: 500,
      marginLeft: '6px',
    },
    phone: {
      marginTop: '7px',
    },
    tagsSection: {
      marginTop: '40px',
    },
    stocksContainer: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    tags: {
      fontSize: '14px',
      padding: '6px 18px',
      marginRight: '14px',
      color: '#FFFFFF',
      borderRadius: '4px',
      textDecoration: 'none',
      [theme.breakpoints.down('md')]: {
        marginTop: '14px',
      },
    },
    green: {
      backgroundColor: '#58D38C',
    },
    red: {
      backgroundColor: '#E83E3E',
    },
    liteBlue: {
      backgroundColor: '#5887D3',
    },
    violet: {
      backgroundColor: '#8B40CB',
    },
    loadingWrapper: {
      display: 'flex',
      justifyContent: 'center',
    },
  })
);
