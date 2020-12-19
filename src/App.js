import { Grid } from '@material-ui/core';
import React from 'react';

const App = () => {
  return (
    <Grid contaiter direction='column'>
      <Grid item>This is will be Header</Grid>
      <Grid item>This is will be Content</Grid>
    </Grid>
  );
};

export default App;
