import { copyFile } from 'fs';
import React, { ReactNode } from 'react';
import { Navbar } from '../Navbar';
import '../../style.css'
import Buddhaquote from '../../assets/images/buddhaquote.jpg'
import { makeStyles } from '@material-ui/core';

interface Props {
  main_text: ReactNode;
  title: string;
}

const useStyles = makeStyles({
  background: {
      backgroundImage: `url(${Buddhaquote})`,
      width: '100%',
      height: '100%',
      backgroundPosition: 'center',
      position: 'absolute',
      zIndex: 3,
      borderRadius: '5%',

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


export const ThankYou = (props: Props) => {
  
  const classes = useStyles()
  
  return (
    <>
      <Navbar />
      <div className={`${classes.background}`}>
          <h1>{props.title}
            Thank you for visiting! Come back soon!
          </h1>
        </div>
    </>
   )
}