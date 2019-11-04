import React from 'react';
import { ReferenceField, List, Datagrid, TextField } from 'react-admin';

export const ProfessionalsList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="fields.name" label="Name" />
        </Datagrid>
    </List>
);

// <ReferenceField label="Company" source="fields.company" reference="companies">
//     <TextField source="fields.title" />
// </ReferenceField>