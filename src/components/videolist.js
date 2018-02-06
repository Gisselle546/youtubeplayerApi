import React from 'react';
import VideoItem from './videoitem';
import { Segment } from 'semantic-ui-react'



const videolist = (props) => {

const map = props.video.map(videoplayer=>{
   return <VideoItem key={videoplayer.etag} video={videoplayer} selectvideo={props.videoclick}/>
})
  return(
    <div className="videolist">
        <Segment.Group >
          {map}
        </Segment.Group>

    </div>
  )
}

export default videolist;
