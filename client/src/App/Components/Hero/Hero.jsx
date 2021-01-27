import React from 'react'
import LottieView from '../../Common/LottieView/LottieView'
import { Container } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import animation from '../../Common/Animation/animation3.json'

import './StyleHero.css'

export default function Hero() {
    return (
        <div className='hero'> 
            <Container>
                <div className='flex_center'>
                    <div className='hero_left'>
                        <h1 className='main_title'>
                            Success is nothing more  than a few simple decisions practiced every day
                        </h1>
                        <h3>
                            Let's get in Business with influencer easily
                        </h3>
                        <button className='flex hero_btn'>
                            View influencer
                            <ArrowRightAltIcon />
                        </button>
                    </div>
                    <div className='hero_right'>
                        <LottieView animation={animation} />
                    </div>
                </div>
            </Container>
        </div>
    )
}
