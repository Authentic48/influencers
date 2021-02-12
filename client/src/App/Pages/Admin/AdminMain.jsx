import React, { useEffect } from 'react'

import { deleteUser, getUsers } from '../../Redux/Users/userActions';
import { useDispatch, useSelector } from 'react-redux';


import Navbar from '../../Layouts/Navbar/Navbar'
import Sidebar from '../../Layouts/Sidebar/Sidebar'
import SidebarRow from '../../Layouts/Sidebar/SidebarRow/SidebarRow'
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
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';
import DeleteIcon from '@material-ui/icons/Delete';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChatIcon from '@material-ui/icons/Chat';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';



export default function AdminMain({history}) {
    const dispatch = useDispatch()
    const { users, loading } = useSelector(state => state.users)
    const { success } = useSelector(state => state.deleteUser)
    
    useEffect(()=>{
        dispatch(getUsers())
    },[dispatch, success])


    if (loading) return <Loading />
    console.log(users)
    return (
        <>
        <Navbar />
        <div className='flex'>
            <Sidebar>
                <SidebarRow title='users' Icon={AccountBoxIcon}/>  
                <SidebarRow title='influencers' Icon={AccountCircleIcon} onClick={()=> history.push('admin-manage-influencer')}/>
                <SidebarRow title='Orders'  Icon={FormatListNumberedIcon}/>
                <SidebarRow title='user chat' Icon={ChatIcon}  />
                <SidebarRow title='infl chat' Icon={ChatIcon}  />
            </Sidebar>  
            <div style={{marginLeft: '15%', marginTop: '9rem', width:'80%', marginBottom: '4rem'}}>
                <TableContainer component={Paper}>
                <Table  aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">NAME</TableCell>
                            <TableCell align="right">EMAIL</TableCell>
                            <TableCell align="right">ADMIN</TableCell>
                            <TableCell align="right">INFLUENCER</TableCell>
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
                                <TableCell align="right">{users.email}</TableCell>
                                <TableCell align="right">
                                    {users.isAdmin ?
                                    <CheckCircleIcon fontSize='large' style={{color: 'green'}} /> 
                                    :
                                    <CancelIcon fontSize='large' style={{color:'red'}} />
                                    }
                                </TableCell>
                                <TableCell align="right">
                                    {users.isInfluencer?
                                    <CheckCircleIcon fontSize='large' style={{color: 'green'}} /> 
                                    :
                                    <CancelIcon fontSize='large' style={{color:'red'}} />
                                    }
                                </TableCell>
                                <TableCell align="right">
                                    <ButtonGroup variant="contained">
                                        <Button 
                                        onClick={()=> history.push(`/admin/users/${users._id}/edit`)}
                                        style={{color: 'black'}}>
                                            <EditIcon />
                                        </Button>
                                        <Button  style={{color: 'red'}} onClick={()=> dispatch(deleteUser(users._id))} >
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
        </div>
        </>
    )
}
