import React, {Component} from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
  Video,
  MediaPlayerState,
  VideoControl
} from 'react-vr';

class Amazingandyyy extends Component {
  constructor(props){
    super(props);
    this.state = {
      playerState: new MediaPlayerState({
        loop:true,
        autoPlay: true
      }),
      videoStyles: {
        width: 0.1, height:0.066,
        transform: [{translate: [-5.0, 3.0, -4]}]
      }
    }
  }
  componentDidMount(){
    const move = ()=>{
      this.setState({
        videoStyles: {
          width: this.state.videoStyles.width* 1.1, height:this.state.videoStyles.height* 1.1,
        }
      })
    }
    const id = setInterval(move,50);
    setTimeout(() => {
      clearInterval(id)
    }, 2200);
    
  }
  render() {
    return (
      <View>
        <Text
          style={{
            transform: [{translate: [-3.0, 2.0, -4]}]
          }}
        >after {this.state.count} seconds...</Text>
        <Pano source={asset('chess-world.jpg')}/>
        <Video style={this.state.videoStyles}
          playerState={this.state.playerState}
          source={asset('andy.m4v')} />
      </View>
    );
  }
};

export default Amazingandyyy;
