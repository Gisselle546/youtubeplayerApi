import React, { Component } from 'react';
import VideoBox from './videobox';
import { Container,Input } from 'semantic-ui-react'
import '../maindashboard.css'

class MainDashboard extends Component {


  state={
    inputvalue:'',
    searchurl:''||'nasa'
  }


changeHandler=(e)=>{
  this.setState({inputvalue:e.target.value});
}

handlekeyup=(e)=>{


  if (e.key === 'Enter' && this.state.inputvalue !== '') {

      var searchurl = `q=${this.state.inputvalue}`;
      this.setState({searchurl});
    }
}

  render() {

    return (
      <div className="MainDashboard">
        <div className="Header">
         <Input fluid placeholder='Search...' type="text"  value={this.state.inputvalue}  onChange={this.changeHandler} onKeyUp={this.handlekeyup} />
        </div>
       <Container >
          <VideoBox url={this.state.searchurl}/>
        </Container>

      </div>

    );
  }
}

export default MainDashboard;
