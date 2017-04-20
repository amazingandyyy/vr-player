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

export default class WelcomeToVR extends Component {
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
      },
      count: 44
    }
  }
  componentDidMount(){
    var self = this;
    setInterval(()=>{
      console.log('hey')
      if(this.state.count > 0){
        self.setState({
          videoStyles: {
            width: this.state.videoStyles.width* 1.1, height:this.state.videoStyles.height* 1.1,
          },
          count: this.state.count -1
        })
      }
    }
    , 50)
    
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

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
