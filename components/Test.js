import React from 'react';
import { render } from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/golang';
import 'brace/theme/monokai';

const wrapperStyle = {
  textAlign: 'center'
}

const editorStyle = {
  display: 'inline-block'
}

const buttonStyle = {
  backgroundColor: '#4CAF50', /* Green */
  border: 'none',
  color: 'white',
  padding: '15px 32px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px'
}

class Test extends React.Component {
  state = {input: '', output: ''}
  constructor(props) {
    super(props);
    this.buttonClick = this.buttonClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  buttonClick() {
    fetch('http://localhost:9000/ping', {method: 'post', body: this.state.input})
    .then(response => response.text())
    .then(data => {
      this.setState({output: data});
    })
  }
  
  handleChange(e) {
    this.setState({input: e})
  }
  
  componentDidMount() {
    this.state.input = this.props.value;
  }
  
  render() {
    return (<div style={wrapperStyle}>
      <AceEditor
      mode="golang"
      theme="monokai"
      fontSize={20}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      value={this.state.input}
      onLoad={this.handleLoad}
      onChange={this.handleChange}
      setOptions={{
        showLineNumbers: true,
        tabSize: 2,
      }}
      style={editorStyle}/><br />
      <button onClick={this.buttonClick} style={buttonStyle}>Run</button><br />
      <code>{this.state.output}</code>
      </div>
      )
    }
  }
  
  export default Test;