import React from 'react';
import { DisabledInput, Edit, List, Datagrid, TextField, Create, SimpleForm, TextInput } from 'react-admin'; 

export const PizzasList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="fields.Name" label="Name" />
        </Datagrid>
    </List>
)

export const PizzasCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="fields.Name" label="Name" />
        </SimpleForm>
    </Create>
)

export const PizzasEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput label="Id" source="id" />
            <TextInput source="fields.Name" />
        </SimpleForm>
    </Edit>
);