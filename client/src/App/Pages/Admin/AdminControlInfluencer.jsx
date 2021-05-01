import React, { useEffect } from 'react'

import { getInfluencer } from '../../Redux/Influencer/profile/profileAction';
import { useDispatch, useSelector } from 'react-redux';


// import Navbar from '../../Layouts/Navbar/Navbar'
import Loading from '../../Common/Loading/Loading';

import { 
    Button, 
    ButtonGroup, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteProfile } from '../../Redux/Influencer/profile/editProfileAction';




export default function AdminControlInfluencer({history}) {
    const dispatch = useDispatch() 
    const { influencer : users, loading } = useSelector(state => state.influencerProfile)
    const { success } = useSelector(state => state.deleteProfile)
    useEffect(()=>{
        dispatch(getInfluencer())
    },[dispatch, success])


    if (loading) return <Loading />

    return (
        <>
    
        <div style={{marginLeft: '5%', marginTop: '9rem', width:'90%', marginBottom: '4rem'}}>
            <TableContainer component={Paper}>
            <Table  aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">NAME</TableCell>
                        <TableCell align="right">FOLLOWERS</TableCell>
                        <TableCell align="right">PHONE</TableCell>
                        <TableCell align="right">RATE</TableCell>
                        <TableCell align="right">ACTIONS</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users?.map((users) => (
                        <TableRow key={users._id}>
                            <TableCell component="th" scope="row">
                                {users._id}
                            </TableCell>
                            <TableCell align="right">{users.name}</TableCell>
                            <TableCell align="right">{users.instFollowers}</TableCell>
                            <TableCell align="right">{users.phoneNumber}</TableCell>
                            <TableCell align="right">{users.rating}</TableCell>
                            <TableCell align="right">
                                <ButtonGroup variant="contained">
                                    <Button  style={{color: 'red'}} onClick={()=> dispatch(deleteProfile(users._id))}  >
                                        <DeleteIcon />
                                    </Button>
                                </ButtonGroup>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div> 
        </>
    )
}
