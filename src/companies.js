import React from 'react';
import { DisabledInput, Edit, List, Datagrid, TextField, Create, SimpleForm, TextInput } from 'react-admin'; 

export const CompaniesList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="fields.title" label="Title" />
        </Datagrid>
    </List>
)

export const CompaniesCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="fields.title" label="Title" />
        </SimpleForm>
    </Create>
)

export const CompaniesEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput label="Id" source="id" />
            <TextInput source="fields.title" />
        </SimpleForm>
    </Edit>
);