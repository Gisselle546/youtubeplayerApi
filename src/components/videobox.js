import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import axios from 'axios';
import VideoDetail from './videodetail';
import VideoList from './videolist';
import '../videobox.css'



class VideoBox extends Component {

state={
  videos:[],
  mounted: false,
  selectvideos:null
}

  loadfunction=()=>{
    const key ='';
    var requestUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${this.props.url}&type=video&key=${key}`;
    axios.get(requestUrl)
          .then(videos=>{
            this.setState({videos:videos.data.items})
          })
          .then(videos=>{
            this.setState({selectvideos:this.state.videos[0]})
          })
          .catch((err)=>{
          console.log(err);
    });
  }

componentWillReceiveProps(nextProps){
  if(nextProps.url !== this.props.url && nextProps.url !== ''){
      this.setState({mounted:true,url:nextProps.url},()=>{
        this.loadfunction();
      });

    }
}

componentDidMount(){
  if(this.props.url !== ''){
      this.loadfunction();
      this.setState({mounted:true});
 }
}

postSelectedHandler=(id)=>{
    this.setState({selectvideos:id});
}


  render() {

    return (
      <div className="VideoBox">

      <Grid>
          <Grid.Column width={12}>
            <VideoDetail video={this.state.selectvideos}/>
          </Grid.Column>
          <Grid.Column width={4}>
            <VideoList video={this.state.videos} videoclick={this.postSelectedHandler}/>
          </Grid.Column>

      </Grid>



      </div>
    );
  }
}

export default VideoBox;
