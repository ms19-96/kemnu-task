import React from 'react';
import clsx from 'clsx';
import {makeStyles} from "@mui/styles";
import {Card, CardContent, Grid, Typography} from "@mui/material";

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  }
}));

const Earnings = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
          spacing={3}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h5"
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              Earnings
            </Typography>
            <Typography
              color="textPrimary"
              variant="h1"
              style={{ fontFamily: 'Lato, sans-serif', fontWeight: 600 }}
            >
              $10,000
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Earnings;
