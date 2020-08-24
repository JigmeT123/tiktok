import React, {useState, useRef} from 'react'
import './video.css';
import VideoFooter from './VideoFooter';
import VideoSideBar from './VideoSideBar';
function Video({
    videoSrc,
    username,
    description,
    song,
    likes,
    messages,
    shares
}) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);
    const clickHandler = e => {
        if (playing) {
            videoRef
                .current
                .pause();
            setPlaying(false)
        } else {
            videoRef
                .current
                .play();
            setPlaying(true);
        }
    }
    return (
        <div className="video">
            <video
                className="videoPlayer"
                ref={videoRef}
                onClick={clickHandler}
                loop="loop"
                src={videoSrc}>
                
                </video>
            <VideoFooter
                username={username}
                description={description}
                song={song}/>
            <VideoSideBar likes={likes} shares={shares} messages={messages}/>
        </div>
    )
}

export default Video
