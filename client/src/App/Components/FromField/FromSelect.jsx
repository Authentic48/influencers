import React from 'react'
import { FormControl,Select, Input, InputLabel, MenuItem } from '@material-ui/core';

import { useField } from "formik";


  

export default function FromSelect({label,options, ...props}) {
 


    const [field, meta, helpers] = useField(props);

    return (
        <FormControl style={{width:'100%'}} error={meta.touched && !!meta.error}>
         <InputLabel id="demo-mutiple-name-label">{label}</InputLabel>
            <Select 
            id="demo-mutiple-name-label"
           
            name='category'
            value={field.value}
            onChange={(e,d) => helpers.setValue(d.value) }
            {...props}
            {...field}
            error={meta.error && meta.touched}
            style={{
                marginBottom: '0.5rem',
                padding: 10,
            }}
            input={<Input />}
            >
                {options.map(option => (
                <MenuItem key={option.value} value={option.value}>{option.label} </MenuItem>
                ))}
            </Select>
            {meta.error && meta.touched ? (
            <label  style={{color: 'red', fontSize:12}}>
            {meta.error}
            </label>
      ) : null}
      </FormControl>
    )
}
