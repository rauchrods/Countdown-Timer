import { useState } from "react";

function Clock({ target , title}) {

    let [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    setInterval(() => {
        const targetdate = new Date(target);
        const currentdate = new Date();

        let difference = (targetdate - currentdate) / 1000;

        if (difference < 0) {
            return;
        }

        let days = Math.floor(difference / 24 / 60 / 60);
        let hours = Math.floor((difference / 60 / 60) % 24);
        let minutes = Math.floor((difference / 60) % 60);
        let seconds = Math.floor((difference) % 60);

        setCountdown({
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        });


    }, 1000);



    return (
        <>
            <div className="title">
                {title}
            </div>
            <div className="clock-container">
                <div className="days-sec">
                    <div>{countdown.days}</div>
                    <div>Days</div>
                </div>
                <div className="colon">:</div>
                <div className="hour-sec">
                    <div>{countdown.hours}</div>
                    <div>Hours</div>
                </div>
                <div className="colon">:</div>
                <div className="minute-sec">
                    <div>{countdown.minutes}</div>
                    <div>Minutes</div>
                </div>
                <div className="colon">:</div>
                <div className="second-sec">
                    <div>{countdown.seconds}</div>
                    <div>Seconds</div>
                </div>
            </div>
        </>
    )
}

export default Clock;