import { copyFile } from 'fs';
import React, { ReactNode } from 'react';
import { Navbar } from '../Navbar';
import '../../style.css'
import Yogalandscape from '../../assets/images/yogalandscape.jpg'
import { makeStyles } from '@material-ui/core';

interface Props {
  main_text: ReactNode;
  title: string;
}

const useStyles = makeStyles({
  background: {
      backgroundImage: `url(${Yogalandscape})`,
      width: '100%',
      height: '100%',
      backgroundPosition: 'center',
      position: 'absolute',
      zIndex: 3,
      borderRadius: '5%',

  },
  main_text: {
      textAlign: 'left',
      position: 'relative',
      top: '40%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'black',
  },

  title: {
    textAlign: 'left',
    position: 'relative',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'burlywood',
  }
})


export const About = (props: Props) => {
  
  const classes = useStyles()
  
  return (
    <>
      <Navbar />
      <div className={`${classes.background}`}>
        <div className={classes.main_text}>
          <h1>{props.title}
            Welcome to our Yoga Studio!
          </h1>
          <p>{props.main_text}Ritual Yoga Studio was founded in 2019 with the mission of bringing healing to the
            community through mindfulness. We achieve this through practicing yoga, meditation,
            and offering specialty workshops throughout the year.</p>
            <h2>{props.title}
            Offerings
          </h2>
          <p>{props.main_text}We offer a range of yoga classes for beginners to advanced yogis. Our offerings
          also include hot yoga, yin yoga, and traditional hatha yoga. Check out our offerings
            page for our weekly schedule.</p>
            <h2>{props.title}
            Workshops
          </h2>
          <p>{props.main_text}Outside of our usual offerings, we hold workshops virtually and at the studio for many 
                different things, such as sound healing, posture workshops, workshops for different types
                of meditation, and a host of other areas of mindfulness.</p>
        </div>
      </div>
    </>
   )
}
