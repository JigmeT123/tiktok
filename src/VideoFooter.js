import React from 'react'
import './videofooter.css'
import {MusicNote} from '@material-ui/icons'
import Ticker from 'react-ticker'
function VideoFooter({username, description, song}) {
    return (
        <div className="videoFooter">
            <div className="videoFooter__desc">
                <h5>@{username}</h5>
                <p>{description}</p>
                <div className="videoFooter__ticker">
                    <MusicNote className="videoFooter__icon"/>
                    <Ticker mode="smooth">
                    {({index}) => (
                        <>
                            <p className="ticker__text">{song}</p>
                        </>
                    )}
                    </Ticker>
                </div> 
            </div>
            <img className="videoFooter__record" src="https://static.thenounproject.com/png/934821-200.png" alt=""/>
        </div>

       
    )
}

export default VideoFooter
