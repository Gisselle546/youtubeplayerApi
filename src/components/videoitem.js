import React from 'react';
import { Image,Segment,Header } from 'semantic-ui-react';
import '../videoitem.css';


const videoitem = ({video, selectvideo}) => {
    const src=video.snippet.thumbnails.default.url;
  return(
    <div className="videoitem">
       <Segment onClick={()=> selectvideo(video) }>
              <Image src={src} size='small'  />
                <Header size='tiny'>{video.snippet.title}</Header>

        </Segment>
    </div>
  )
}

export default videoitem;
