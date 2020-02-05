import React, { useState } from 'react';
import styled from 'styled-components';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

import { Box } from './flexbox';

const URL = '//patronaat.us20.list-manage.com/subscribe/post?u=d9d947c60d3c574c643f6ca24&id=ec0ad952d3';

const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const Wrapper = styled(Box)`
  background: ${props => props.theme.colors.greyGreen};

  h2 {
    color: ${props => props.theme.colors.white};
    text-transform: uppercase;
  }

  input,
  button {
    height: 80px;
    font-weight: normal;
    font-size: 1.2em;
  }

  input {
    appearance: none;
    padding: 0.5em;
    font: inherit;
    border: 0;
    width: 100%;
    padding-left: 20px;
    border-radius: 4px;
  }

  button {
    appearance: none;
    background: ${props => props.theme.colors.darkGrey};
    color: ${props => props.theme.colors.white};
    border: 0;
    font: inherit;
    width: 100%;
    transition: all 0.25s ease;
    cursor: pointer;

    &:hover {
      background: ${props => props.theme.colors.white};
      color: ${props => props.theme.colors.darkGrey};
    }
  }

  .form-container {
    max-width: 640px;
  }

  p {
    color: ${props => props.theme.colors.white};
    font-size: 0.75em;
  }
`;

const isAlreadySubscribed = (status, message) => {
  if (status !== 'error') {
    return false;
  }
  if (message.indexOf('already subscribed') > -1) {
    return true;
  }
};

const NewsletterForm = () => {
  const [email, set] = useState('');
  return (
    <Wrapper py={['2em', null, '4em']} px={['9%', null, '13%']} align="center">
      <h2>Signup to the complexity newsletter</h2>
      <MailchimpSubscribe
        url={URL}
        render={({ subscribe, status, message }) => {
          const alreadySubscribed = isAlreadySubscribed(status, message);
          return (
            <form
              onSubmit={(e) => {
                if (status !== 'sending' && isValidEmail(email)) {
                  subscribe({ EMAIL: email });
                }
                e.preventDefault();
                return false;
              }}
            >
              <Box width={1} className="form-container" mx="auto">
                <Box mb="1em" flex="1">
                  <input
                    type="email"
                    name="email"
                    onChange={e => set(e.target.value)}
                    placeholder="Email..."
                  />
                </Box>
                <Box flex="1">
                  <button type="submit">Sign up</button>
                </Box>
                {status === 'sending' && <p>Sending...</p>}
                {status === 'error' && alreadySubscribed && (
                  <p>Looks like you've already subscribed, yay!</p>
                )}
                {status === 'error' && !alreadySubscribed && (
                  <p>Something went wrong, please try again</p>
                )}
                {status === 'success' && <p>Thank you for signing up!</p>}
                <p>
                  *We promise to handle your data with care and will NEVER share it with third
                  parties. It will ONLY be used to send you events you might find interesting or
                  updates about the festival.
                </p>
              </Box>
            </form>
          );
        }}
      />
    </Wrapper>
  );
};

export default NewsletterForm;
