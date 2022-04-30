import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import Navigation from '../components/navigation';
import GlobalStyle from '../components/global-style';
import theme from '../theme';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps,
    };
  }

  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <div>
          <Head>
            <link
              rel="stylesheet"
              href="https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome-font-awesome.min.css"
            />
            <title>Complexity Fest | complexityfest.com</title>
          </Head>
          <GlobalStyle />
          <Navigation />
          <Component {...pageProps} key={router.route} />
        </div>
      </ThemeProvider>
    );
  }
}
