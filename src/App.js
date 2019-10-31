import React from 'react';
import { fetchUtils, Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { CompaniesList} from './companies';

const url = process.env.REACT_APP_AIRTABLE_ENDPOINT;
const httpClient = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  // add your own headers here
  options.headers.set('Authorization', 'Bearer ' + process.env.REACT_APP_AIRTABLE_API_KEY);
  return fetchUtils.fetchJson(url, options);
}
const dataProvider = simpleRestProvider(url, httpClient);

const App = () => (
  <Admin dataProvider={dataProvider}>
      <Resource name="companies" list={CompaniesList} />
  </Admin>
)

export default App;
