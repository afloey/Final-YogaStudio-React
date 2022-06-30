import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Navbar } from '../Navbar/Navbar'
import { Link } from 'react-router-dom';
import Lotusimage from '../../assets/images/lotusimage.jpeg'

interface Props {
    title: string;
}

const useStyles = makeStyles({
    background: {
        backgroundImage: `url(${Lotusimage})`,
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
    button_text: {
        color: 'white',
        textDecoration: 'none',
    },
})

export const Home = ( props: Props ) => {

    const classes = useStyles()

    return (
      <>
        <Navbar />
        <div className={`${classes.background}`}>
            <div className={classes.main_text}>
                <h1>{props.title}</h1>
                <Button>
                    <Link to='/classes' className={classes.button_text}>Add classes to your schedule</Link>
                </Button>
            </div>
        </div>
      </>
    )
}