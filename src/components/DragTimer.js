import { withStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import Draggable from 'react-draggable'
import { useDispatch, useSelector } from 'react-redux';
import { getTime, setTime } from '../Slices/TimerSlice';

const DragTimer = (props) => {
    const dispatch = useDispatch();
    const classes = props.classes;
    const openResults = useSelector(state=>state.results.open);
    const timer = useSelector(state=>state.timer.time);
    const [drag, setdrag] = useState({
        activeDrags: 0,
        deltaPosition: {
            x: 0, y: 0
        },
    })
    const onStart = () => {
        setdrag({activeDrags: ++drag.activeDrags});
      };
    
    const onStop = () => {
        setdrag({activeDrags: --drag.activeDrags});
      };

    const [seconds, setSeconds] = useState(0);
    const startTimer = useSelector(state=>state.timer.open)
    useEffect(() => {
        if(startTimer===true){
            const interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
                }, 1000);
            return () => clearInterval(interval);
        }
    },[]);

    
    const minutes = Math.floor(seconds/60);

    return(
        <Draggable 
            onStart={onStart}
            onStop={onStop}
            bounds="parent"
        >
            <span className={classes.draggable}>
                { `${minutes} : ${seconds%60}` }
            </span>
        </Draggable>
    )
}

export default withStyles(styles)(DragTimer);