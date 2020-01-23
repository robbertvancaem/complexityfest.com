import React from 'react';

import { Box } from '../components/flexbox';

const items = [
  {
    title: 'TICKETS',
    content:
      'You should always purchase your COMPLEXITY FEST and PRESENTS tickets through our official vendor Ticketmaster. You can find them on their internet page or a link on our website or on the website of Patronaat. Be aware of secondary ticketing websites and scammers that attempt to scam people into buying fake, void or overpriced tickets. Always check the people or business who is selling you the ticket, in particular on website as Facebook, Ticketswap and Viagogo.',
  },
  {
    title: 'ACCESSIBILITY ',
    content: `The venue Patronaat is a 10 minute walk from Haarlem train station. Also busses 2, 3, 73, 81, 300 and 340 will take you close to the venue.
Coming over straight from the airport? Bus 300 will take you from the airport to the Haarlem city centre the quickest.
Traveling by car? There's a big parking garage close to Patronaat Haarlem, follow signs to 'Raaks'. It's open 24 hours, and there's an evening rate at € 2,84 for the entire night (starting at 19:00).
`,
  },
  {
    title: 'PIN ONLY',
    content:
      'Patronaat is a Pin Only venue and therefore it is only possible to pay by debit card inside the venue. Credit Cards are not accepted.',
  },
  {
    title: 'PHOTO, VIDEO AND AUDIO EQUIPMENT',
    content: `As a visitor you are allowed to bring and use compact cameras, GoPro video cameras or something similar as a phone, but selfie sticks are not allowed at the festival. You are not allowed to bring, DSLR cameras, larger video cameras, tripods and monopods, audio or any other kind of recording equipment into the venue if you are not accredited as press.
`,
  },
  {
    title: 'CODE OF CONDUCT',
    content:
      'COMPLEXITY FEST and PATRONAAT are safe and free spaces for everyone. Treat others like you want to be treated yourself, take care of each other, and follow the instructions from the Patronaat staff. ',
  },
];

const Practical = () => (
  <Box px={['9%', null, '19%']} py={['2em', null, '8em']}>
    <h1>Practical info</h1>

    {items.map(({ title, content }) => (
      <Box key={title} mb="2em">
        <h4>{title}</h4>
        <p>{content}</p>
      </Box>
    ))}
  </Box>
);

export default Practical;
