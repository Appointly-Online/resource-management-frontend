import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import { CompaniesList } from './companies'
import fakeDataProvider from 'ra-data-fakerest';

// const httpClient = (url, options = {}) => {
//     if (!options.headers) {
//         options.headers = new Headers({ Accept: 'application/json' });
//     }
//     // add your own headers here
//     options.headers.set('Authorization', 'Bearer keyjxQc4CwDosOuNH');
//     return fetchUtils.fetchJson(url, options);
// }
// const dataProvider = simpleRestProvider('https://api.airtable.com/v0/app75rrcZQbWVZ1wi', httpClient);

// const App = () => (
//     <Admin dataProvider={dataProvider}>
//         <Resource name="companies" list={CompaniesList} />
//     </Admin>
// );

// const dataProvider = jsonServerProvider('http://api.airtable.com/v0/app75rrcZQbWVZ1wi/companies?api_key=keyjxQc4CwDosOuNH',);
// const App = () => (
//   <Admin dataProvider={dataProvider}>
//       <Resource name="companies" list={CompaniesList} />
//   </Admin>
// );

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    newFunction(); 
  }

  render() { 
    const data = {
      records: [
          { 
            id: "recKDO3oVbfPTg1PE", 
            fields: {
              "services-type": [
                  "recbRsAYwRWRraGVv"
              ],
              "professionals": [
                  "recm6IdKga5aR6UJF"
              ],
              "title": "Acme ltda"
            },
            createdTime: "2019-10-30T17:11:30.000Z"
          },
          { 
            id: "recOq3HAhNzQnuR3a", 
            fields: {
              "services-type": [
                  "recbRsAYwRWRraGVv"
              ],
              "professionals": [
                  "recm6IdKga5aR6UJF"
              ],
              "title": "Foobar"
            },
            createdTime: "2019-10-30T17:01:43.000Z"
          },
          { 
            id: "recS4eyf33ZCP2td3", 
            fields: {
              "services-type": [
                  "recbRsAYwRWRraGVv"
              ],
              "professionals": [
                  "recm6IdKga5aR6UJF"
              ],
              "title": "Foobar"
            },
            createdTime: "2019-10-30T17:01:43.000Z"
          },
          { 
            id: "recVrEC9ZgKp7gCnx", 
            fields: {
              "services-type": [
                  "recbRsAYwRWRraGVv"
              ],
              "professionals": [
                  "recm6IdKga5aR6UJF"
              ],
              "title": "Foobar"
            },
            createdTime: "2019-10-30T17:01:43.000Z"
          }
      ]
    };

    // console.log(this.state.data);
    const dataProvider = fakeDataProvider(newFunction());

    return (
        <Admin dataProvider={dataProvider}>
          <Resource name={'records'} list={CompaniesList} />
        </Admin>  
    );
  }
}

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

