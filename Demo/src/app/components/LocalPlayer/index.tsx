/*
 * index.tsx
 * Copyright (C) 2018 disoul <disoul@DiSouldeMacBook-Pro.local>
 *
 * Distributed under terms of the MIT license.
 */
import * as React from 'react';
import * as styles from './style.css'

interface Props {
  className?: string
  videoClassName?: string
}

interface State {
}

export class LocalPlayer extends React.Component<Props, State> {
  video: HTMLVideoElement

  getVideoElement = () => this.video

  render() {
    return (
      <div className={this.props.className}>
        <video
          className={`${this.props.videoClassName || ''} ${styles.video}`}
          autoPlay
          muted
          ref={ref => this.video = ref}
        />
      </div>
    );
  }
}
