import React, { FC } from "react";
import { Link, generatePath } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import cns from "classnames";

import PageLayout from "../../Layouts/PageLayout";
import Paths from "../../../constants/paths";
import useStockDetails from "./useStocksDetails";
import Price from "./components/Price";
import Chart from "./components/Chart";
import Map from "./components/Map";

import useStyles from "./styles";

const StocksDetails: FC = () => {
  const classes = useStyles();
  const { company, price, bars, loading } = useStockDetails();

  return (
    <PageLayout>
      {!loading ? (
        <Grid container>
          <Grid container>
            <div className={classes.symbol}>{company?.symbol}</div>
            <div className={classes.title}>{company?.name}</div>
          </Grid>
          {price && (
            <Grid container className={classes.priceWrapper}>
              <Price price={price} />
            </Grid>
          )}
          {bars && (
            <Grid
              container
              className="graph"
              style={{ backgroundColor: "#FFF" }}
            >
              <Chart bars={bars} />
            </Grid>
          )}
          <Grid container className={classes.section} spacing={3}>
            <Grid item md={6} xs={12}>
              <Grid container>
                <Grid item xs={12} className={classes.title}>
                  {`About ${company?.name}`}
                </Grid>
                <Grid container>
                  <Grid item xs={6}>
                    <Grid container>
                      <div>Sector:</div>
                      <div className={classes.value}>{company?.sector}</div>
                    </Grid>
                    <Grid container>
                      <div>Industry:</div>
                      <div className={classes.value}>{company?.industry}</div>
                    </Grid>
                    <Grid container>
                      <div className="title">CEO: </div>
                      <div className={classes.value}>{company?.ceo}</div>
                    </Grid>
                    <Grid container>
                      <div className="title">Employees: </div>
                      <div className={classes.value}>{company?.employees}</div>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <div>{company?.hq_address}</div>
                    <div className={classes.phone}>{company?.phone}</div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={6} xs={12}>
              {company && (
                <Map
                  name={company?.name}
                  address={company?.hq_address}
                  country={company?.hq_country}
                  state={company?.hq_state}
                />
              )}
            </Grid>
          </Grid>
          <Grid container className={classes.section} spacing={3}>
            <Grid item md={6} xs={12}>
              <Grid item xs={12} className={classes.title}>
                Description
              </Grid>
              <Grid item xs={12}>
                {company?.description}
              </Grid>
            </Grid>
            <Grid item md={6} xs={12}>
              <Grid item xs={12} className={classes.title}>
                Related Stocks
              </Grid>
              <Grid item xs={12}>
                {company?.similar.map((stock: string, index) => (
                  <Link
                    to={generatePath(Paths.StocksDetails, { ticker: stock })}
                    key={stock}
                    className={cns(
                      classes.tags,
                      Math.abs(index % 2) === 1
                        ? classes.green
                        : classes.red
                    )}
                  >
                    {stock}
                  </Link>
                ))}
              </Grid>
              <Grid
                item
                xs={12}
                className={cns(classes.title, classes.tagsSection)}
              >
                Tags
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  {company?.tags.map((tag: string, index) => (
                    <div
                      className={cns(
                        classes.tags,
                        Math.abs(index % 2) === 1
                          ? classes.liteBlue
                          : classes.violet
                      )}
                      key={tag}
                    >
                      {tag}
                    </div>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <div className={classes.loadingWrapper}>
          <CircularProgress />
        </div>
      )}
    </PageLayout>
  );
};

export default StocksDetails;
