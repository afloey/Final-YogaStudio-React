import { copyFile } from 'fs';
import React from 'react';
import { Navbar } from '../Navbar';
import '../../style.css'
import Reservedsign from '../../assets/images/reservedsign.jpg'
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
  background: {
      backgroundImage: `url(${Reservedsign})`,
      width: '100%',
      height: '90%',
      backgroundPosition: 'center',
      position: 'absolute',
      zIndex: -1,
  },
  main_text: {
      textAlign: 'center',
      position: 'relative',
      top: '40%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'white',
  },
})


export const About = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
        Welcome to our Yoga Studio! 
    </div>
  )
}

export const MainImage = () => {
  const classes = useStyles();
  return <img src={Reservedsign} alt="" />
}



export const About = ( props: Props ) => {

  const classes = useStyles()

  return (
    <>
      <Navbar />
      <div className={`${classes.background}`}>
          <div className={classes.main_text}>
              <h1>{props.title}<Navbar />
                    Welcome to our Yoga Studio! 
                  < className={classes.main_text}>Add classes to your schedule>
          </div>
      </div>
    </>
  )
}


