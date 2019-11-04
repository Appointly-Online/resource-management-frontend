import React from 'react';
import { List, Datagrid, TextField, Create, SimpleForm, TextInput } from 'react-admin'; 

export const CompaniesList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="fields.title" label="Title" />
        </Datagrid>
    </List>
);

export const CompaniesCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="fields.title" label="Title" />
        </SimpleForm>
    </Create>
)