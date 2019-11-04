import React from 'react';
import { fetchUtils, Admin, Resource } from 'react-admin';
import { CompaniesList, CompaniesCreate} from './companies';
import { DogsList, DogsCreate} from './dogs';
import { ProfessionalsList } from './professionals';
import airtableDataProvider from './airtableDataProvider'

const url = process.env.REACT_APP_AIRTABLE_ENDPOINT;

const httpClient = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  // add your own headers here
  options.headers.set('Authorization', 'Bearer ' + process.env.REACT_APP_AIRTABLE_API_KEY);
  return fetchUtils.fetchJson(url, options);
}

const dataProvider = airtableDataProvider(url, httpClient)

console.log(dataProvider);
const App = () => (
  <Admin dataProvider={dataProvider}>
      <Resource name="companies" list={CompaniesList} create={CompaniesCreate} />
      <Resource name="professionals" list={ProfessionalsList} />
      <Resource name="dogs" list={DogsList} create={DogsCreate} />
  </Admin>
)

export default App;

function newFunction() {
  const url = process.env.REACT_APP_AIRTABLE_ENDPOINT + '/companies?api_key=' + process.env.REACT_APP_AIRTABLE_API_KEY;
  fetch(url)
    .then((resp) => resp.json())
    .then(data => {
      return data
    }).catch(err => {
    });
}

