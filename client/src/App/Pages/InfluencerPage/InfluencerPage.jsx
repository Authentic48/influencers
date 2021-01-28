
import { Container } from '@material-ui/core'
import React from 'react'
import Card from '../../Components/Card/Card'

export default function InfluencerPage() {
    return (

        <div style={{
            display:"flex",
            flexWrap:'wrap',
            marginTop: '10rem',
        }}>
            <Card />
            <Card />
            <Card />
        </div>
    )
}
