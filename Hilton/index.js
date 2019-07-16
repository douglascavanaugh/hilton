import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import * as url_data from './data/url.json';

import Navigation from './navigation/Navigation';

const theme = {
  ...DefaultTheme,
  fonts: {
    regular: 'Roboto',
    medium: 'Roboto',
    light: 'Roboto Light',
    thin: 'Roboto Thin',
  },
  colors: {
    ...DefaultTheme.colors,
    primary: '#3f51b5',
    accent: '#313e93',
  },
};

const client = new ApolloClient({
  link: new HttpLink({
    uri: url_data.apiUrl
  }),
  cache: new InMemoryCache()
});

function Hilton() {
  return (
    <ApolloProvider client={client}>
      <PaperProvider theme={theme}>
        <Navigation />
      </PaperProvider>
    </ApolloProvider>
  );
}

export default Hilton;
