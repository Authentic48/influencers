import React from 'react'
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert style={{width:500, marginTop: '3rem'}} elevation={6} variant="filled" {...props} />;
}
export default Alert