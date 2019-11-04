import React from 'react';
import { Create, SimpleForm, ImageField, List, Datagrid, TextField, TextInput } from 'react-admin';

export const DogsList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="fields.name" label="Nickname"  />
            <ImageField source="fields.photo[0].url" label="Picture" />
        </Datagrid>
    </List>
);

export const DogsCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="fields.name" />
        </SimpleForm>
    </Create>
)