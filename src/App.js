import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  helloThereStyle: {
    fontStyle: 'oblique',
    color: 'red',
    fontSize: '30px',
  },
  button: {
    color: 'brown',
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography
        color='primary'
        variant='h1'
        className={classes.helloThereStyle}>
        Hey there
      </Typography>
      <Button variant='outlined' color='secondary' className={classes.button}>
        This is our first button
      </Button>
    </div>
  );
};

export default App;
