import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const CompaniesList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="fields.title" />
        </Datagrid>
    </List>
);