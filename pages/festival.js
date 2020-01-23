import React from 'react';

import Header from '../components/header';
import { Box } from '../components/flexbox';

const Fest = () => (
  <div>
    <Header />
    <Box px={['4%', null, '31%']} py="8em">
      <h1>About the fest</h1>
      <p>
        Complexity is a platform that celebrates adventurous and boundary pushing heavy music in the
        Patronaat venue in Haarlem, NL. Besides presenting several club shows throughout the year,
        we host our very own festival on a yearly basis.
      </p>

      <p>
        Complexity is founded in 2016 and presented acts such as Devin Townsend, Ihsahn and Bong-Ra.
      </p>

      <p>
        “Complexity knows that everyone who has played this weekend isn’t about selling out or doing
        anything by numbers. It’s about passion, heart and a pioneering spirit.” - Metal Hammer
        (2018)
      </p>

      <p>
        If you have any questions or you want to suggest your band to play our fest, e-mail
        {' '}
        <a href="mailto:complexity@patronaat.nl">complexity [at] patronaat [dot] nl</a>
      </p>
    </Box>
  </div>
);

export default Fest;
