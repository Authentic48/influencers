import React from 'react'
import { useField } from "formik";
import { FormControl, TextField } from '@material-ui/core';

export default function FromField({ label, placeholder, ...props }) {
    const [field, meta] = useField(props);
    return (
         <FormControl style={{width: '100%'}}  error={meta.touched && !!meta.error}>
            <TextField
            id="standard-textarea"
            placeholder={placeholder}
            multiline
            label={label} 
            {...field} 
            {...props}
            error={meta.error && meta.touched}
            // fullWidth
            helperText={meta.error && meta.touched && meta.error}
            style={{
                marginBottom: '1rem',
                padding: 10,
            }}
            />
        </FormControl>
    )
}
