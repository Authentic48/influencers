import React from 'react'
import LottieView from '../../Common/LottieView/LottieView'
import { Container } from '@material-ui/core';
import Typical from 'react-typical'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import animation from '../../Common/Animation/animation5.json'

import './StyleHero.css'

export default function Hero() {
    return (
        <div className='hero'> 
            <Container>
                <div className='flex_center'>
                    <div className='hero_left'>
                        <div className='main_title'>
                            <Typical
                                steps={['Success is nothing more than a', 1000, 'Success is nothing more  than a few simple decisions practiced every day!', 800]}
                                loop={Infinity}
                                wrapper="h1"
                            />
                        </div>
                        <h3>
                            Let's get in Business with influencer easily
                        </h3>
                        <button className='flex hero_btn'>
                            View influencer
                            <ArrowRightAltIcon />
                        </button>
                    </div>
                    <div className='hero_right' >
                        <LottieView height={700} width={700} animation={animation} />
                    </div>
                </div>
            </Container>
        </div>
    )
}
