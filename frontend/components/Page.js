import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

import Header from './Header';
import Meta from './Meta';

const theme = {
    red: 'tomato',
    black: '#393939',
    grey: '#3a3a3a',
    lightGrey: '#e1e1e1',
    offWhite: '#ededed',
    white: '#fff',
    screenSm: '768px',
    screenMd: '992px',
    screenLg: '1200px',
    bs: '0 12px 24px rgba(0, 0, 0, 0.09)'
};

const StyledPage = styled.div`
    background: ${props => props.theme.white};
    color: ${props => props.theme.black};
`;

const Inner = styled.div`
    max-width: ${props => props.theme.screenMd};
    margin: 0 auto;
    padding: 2rem;
`;

injectGlobal`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1rem;
    line-height: 2;
    font-family: 'radnika_next';
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  button {  font-family: 'radnika_next'; }
`;

class Page extends Component {
    state = {};
    render() {
        return (
            <ThemeProvider theme={theme}>
                <StyledPage>
                    <Meta />
                    <Header />
                    <Inner>{this.props.children}</Inner>
                </StyledPage>
            </ThemeProvider>
        );
    }
}

export default Page;
