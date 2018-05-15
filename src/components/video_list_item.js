import React from 'react';

const VideoListItem =({video, onVideoSelect})=>{
    const imagUrl = video.snippet.thumbnails.default.url; 
    const videoTitle = video.snippet.title;
    return (
        <li className="list-group-item" onClick={ ()=>{onVideoSelect(video);}}>
            <div className="video-list media">
                <div className="media-left">
                    <img src={imagUrl} alt={videoTitle} className="media-object"/>
                </div>
                <div className="media-body">
                    <div className="meadi-heading">
                        {videoTitle}
                    </div>
                </div>
            </div>
        </li>
    )
}
export default VideoListItem;