import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import YouTube from 'react-native-youtube';

class VideoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          status: null
        }
      }

    render() {
        const playVideo = this.props.currentPlayingSong == null ?
                        <Text>Add songs from Song Selection Tab(:</Text> :
                        <YouTube
                            apiKey="AIzaSyB1skQ8mlbsEcPMmuFVGKV8Q64x6fTEsnk"
                            videoId={this.props.currentPlayingSong.videoId}
                            fullscreen={false}
                            play={true} //auto-play
                            onChangeState={e => {if (e.state == 'ended') this.props.playNextSong() }}
                            style={{ alignSelf: 'stretch', height: 300 }}
                        />;
        return (
            <View style={{ marginTop: 50 }}>
                {playVideo}
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    currentPlayingSong: state.currentPlayingSong
})

const mapDispatchToProps = dispatch => ({
    playNextSong: () => dispatch({ type: 'PLAY_NEXT_SONG' }),
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoContainer);