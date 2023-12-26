import Clock from "./Clock";
// import snowfall05 from '../Assets/snowfall05.gif';
import './DisplayCountdown.css';
import MyAudio from "./MyAudio";

function DisplayCountdown() {
    return (
        <div className="countdown-container">
            <MyAudio/>
            <Clock target = {"09 November 2024 12:00 Am"} title={"Richard's Birthday in..."}/>
            <Clock target = {"24 December 2024 12:00 Am"} title={"Roysten's Birthday in..."}/>
            <Clock target = {"25 December 2024 12:00 Am"} title={"Christmas Countdown..."}/>
            <Clock target = {"27 January 2024 12:00 Am"} title={"Roysten's Wedding in..."}/>
            {/* <img src={snowfall05} alt="snaow fall gif" class="snow-gif" /> */}
            
        </div>
    )
}

export default DisplayCountdown;