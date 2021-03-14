import FacebookIcon from '@material-ui/icons/Facebook';
import {Dialog, DialogTitle, DialogContent,Button,DialogActions, Typography} from '@material-ui/core/';
import { useState } from 'react';

import './styleModal.css'

export default function RegisterModal() {

    const [ open, setOpen ] = useState(false)

    return (
        <div>
             <Dialog onClose={()=>setOpen(!open)} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={()=>setOpen(!open)}>
                    Login To WebsiteName
                </DialogTitle>
                <DialogContent dividers>
                    <button className='fb_sign'>
                        <FacebookIcon />
                        Sign in with Facebook
                    </button>
                    <button className='google_sign'>
                        <img src='https://w7.pngwing.com/pngs/249/19/png-transparent-google-logo-g-suite-google-guava-google-plus-company-text-logo.png' alt='' />
                        Sign in with Google
                    </button>
                    <button className='register_btn'>Register</button>
                </DialogContent>
                <DialogContent dividers>
                    <button className='login_fb_btn'>Login With Facebook</button>
                    <button className='login_g_btn'>Register With Google</button>
                </DialogContent>
                <DialogActions>
                <Button autoFocus onClose={()=>setOpen(!open)} color="primary">
                    Save changes
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
