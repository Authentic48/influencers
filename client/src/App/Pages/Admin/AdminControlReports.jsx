import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { getReports } from '../../Redux/Report/reportAction';

// import Navbar from '../../Layouts/Navbar/Navbar'
import Loading from '../../Common/Loading/Loading';

import { 

    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';




export default function AdminControlReports() {
    const dispatch = useDispatch()
    const { reports, loading } = useSelector(state => state.reports)
    
    useEffect(()=>{
        dispatch(getReports())
    },[dispatch])

    if (loading) return <Loading />
    return (
        <>
        {/* <Navbar /> */}
        <div style={{marginLeft: '5%', marginTop: '9rem', width:'90%', marginBottom: '4rem'}}>
            <TableContainer component={Paper}>
            <Table  aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell align="right">USER_NAME</TableCell>
                        <TableCell align="right">USER_ID</TableCell>
                        <TableCell align="right">INFLUENCER_ID</TableCell>
                        <TableCell align="right">DESCRIPTION(REPORT)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {reports?.map((reports) => (
                        <TableRow key={reports._id}>
                            <TableCell align="right">{reports.name}</TableCell>
                            <TableCell align="right">{reports.user}</TableCell>
                            <TableCell align="right">{reports.influencer}</TableCell>
                            <TableCell align="right">{reports.description}</TableCell>
                            <TableCell align="right">
                               
                            </TableCell>
                            <TableCell align="right">
                                
                            </TableCell>
                            <TableCell align="right">
                                
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
