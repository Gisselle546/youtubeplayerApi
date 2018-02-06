import React from 'react';
import { Embed,Segment,Header } from 'semantic-ui-react'
import Moment from 'react-moment';


const videodetail = ({video}) => {

   if(!video){
     return <div>Loading!!!</div>;
   }

  const videoplayer = video.id.videoId
  const placeholder=video.snippet.thumbnails.default.url
  const publishedAt = video.snippet.publishedAt
  return(
    <div className="videodetail">
            <Embed
                 autoplay={false}
                 color='white'
                 hd={false}
                 id={videoplayer}
                 iframe={{
                   allowFullScreen: true,
                   style: {
                     padding: 10,
                   },
                 }}
                 placeholder={placeholder}
                 source='youtube'
           />

               <Segment padded>
                <Header as='h3'>{video.snippet.title}</Header>
                <Header as='h5'>Published on: <Moment format="MM/DD/YYYY">{publishedAt}</Moment></Header>
                <Header as='h6'><strong>Channel: </strong> {video.snippet.channelTitle}</Header>
               </Segment>



    </div>
  )
}

export default videodetail;
