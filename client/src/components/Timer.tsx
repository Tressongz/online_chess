import React, {FC, useEffect, useRef, useState} from 'react';
import {Player} from "../models/Player";
import {Colors} from "../models/Colors";

interface TimerProps {
    currentPLayer: Player | null;
    restart: () => void;
}

const Timer: FC<TimerProps> = ({currentPLayer, restart}) => {
    const time = 300;
    const [blackTime, setBlackTime] = useState(time);
    const [whiteTime, setWhiteTime] = useState(time);
    const timer = useRef<null | ReturnType<typeof setInterval>>(null);

    useEffect(() => {
        startTimer()
    }, [currentPLayer])


    function startTimer() {
        if(timer.current) {
            clearInterval(timer.current)
        }
        const callback = currentPLayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer;
        timer.current = setInterval(callback, 1000);
    }

    const handlerRestart = () => {
        setBlackTime(time);
        setWhiteTime(time);
        restart();
    }

    function decrementBlackTimer() {
        setBlackTime(prev => prev - 1)
    }
    function decrementWhiteTimer() {
        setWhiteTime(prev => prev - 1)
    }

    return (
        <div>
            <div>
                <button onClick={handlerRestart}>Новая игра</button>
            </div>
            <h2>Черные - {blackTime}</h2>
            <h2>Белые - {whiteTime}</h2>
        </div>
    );
};

export default Timer;