import React from 'react';

const VideoListItem =({video})=>{
    const imagUrl = video.snippet.thumbnails.default.url; 
    const videoTitle = video.snippet.title;
    return (
        <li className="list-group-item">
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