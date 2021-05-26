import React, { Fragment } from 'react'

import { Weather } from './components/Weather/Weather';
import { GlobalStyles } from './globalStyles';

export const App = () => (
  <Fragment>
    <GlobalStyles />
    <Weather />
  </Fragment>
)