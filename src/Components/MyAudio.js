import { FaRegPlayCircle, FaRegPauseCircle } from "react-icons/fa";
import audiofile from '../Assets/christmas-song.mp3';
import { useState } from "react";

const audio = new Audio(audiofile);

function MyAudio() {

    let [isplaying, setisPlaying] = useState(false);

    function audioHandler() {
        if (isplaying) {
            audio.pause()
        }
        else {
            audio.play();
        }

        setisPlaying(!isplaying);
    }


    return (
        <div className={`audio-container ${isplaying ? "playing" : "paused"}`} onClick={audioHandler}>
            {
                isplaying ? <FaRegPlayCircle /> : <FaRegPauseCircle />

            }
        </div>

    )
}
export default MyAudio;