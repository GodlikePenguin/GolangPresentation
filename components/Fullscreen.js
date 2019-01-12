import React from 'react';

export default class Fullscreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.addEventListener('keypress', function(e) {
        if (e.key === 'f') {
            document.documentElement.requestFullscreen();
        }
    });
  }

  render() {
    return (
      <div></div>
    );
  }
}