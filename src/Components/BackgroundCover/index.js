// @flow
import React from 'react';
import VideoCover from "react-video-cover";
import styles from './styles.scss';

type BackgroundCoverProps = {
    videoSource: any,
    videoAutoPlay: boolean,
    videoLoop: boolean,
    imageSource: any
};
const BackgroundCover = (props: BackgroundCoverProps) => {
    const {videoSource, imageSource, videoAutoPlay, videoLoop} = props;
    return (
        <div className={styles.cover} style={{backgroundImage: `url(${imageSource ? imageSource : ''})`}}>
            {
                !imageSource &&
                <VideoCover className={`videoCover`}
                            videoOptions={{
                                src: videoSource,
                                autoPlay: videoAutoPlay,
                                loop: videoLoop
                            }}
                />
            }

        </div>
    );
};

BackgroundCover.defaultProps = {
    videoAutoPlay: true,
    videoLoop: true
};

export default BackgroundCover