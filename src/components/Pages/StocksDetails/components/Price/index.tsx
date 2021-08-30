import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import cns from 'classnames';
import useStyles from './styles';

import { PriceProps } from '../../useStocksDetails';

interface PriceComponentProps {
  price: PriceProps;
}

const Price: FC<PriceComponentProps> = ({ price }) => {
  const { close, open } = price;
  const classes = useStyles();
  const higher = close > open;

  return (
    <Grid container className={classes.price}>
      <div className={classes.closedPrice}>{`$${close || '--'}`}</div>
      {open && close ? (
        <div
          className={cns(
            classes.difference,
            higher ? classes.higher : classes.lower
          )}
        >
          <div>{(close - open).toFixed(2)}</div>
          <div className={classes.iconWrapper}>
            {higher ? (
              <ArrowUpwardIcon className={classes.icon} />
            ) : (
              <ArrowDownwardIcon className={classes.icon} />
            )}
          </div>
          <span>{`${Math.abs((close / open) * 100 - 100).toFixed(2)}%`}</span>
        </div>
      ) : (
        <div className={classes.difference}>Not available at the moment</div>
      )}
    </Grid>
  );
};
export default Price;
