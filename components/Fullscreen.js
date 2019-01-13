import React from 'react';

export default class Fullscreen extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    document.addEventListener('keypress', function(e) {
      if (e.key === 'f') {
        let elem = document.documentElement;
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
          elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
          elem.msRequestFullscreen();
        }
      }
    });
  }
  
  render() {
    return (
      <div></div>
      );
    }
  }