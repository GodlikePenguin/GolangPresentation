import React from 'react';
import AceEditor from 'react-ace';

import 'brace/mode/golang';
import 'brace/theme/monokai';

import './RunnableBlock.css';

class RunnableBlock extends React.Component {
  state = { input: '', output: '' };
  constructor(props) {
    super(props);
    this.state.output = props.initialOutput;
    this.buttonClick = this.buttonClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  buttonClick() {
    fetch('http://localhost:9000/ping', { method: 'post', body: this.state.input })
      .then(response => response.text())
      .then(data => {
        this.setState({ output: data });
      })
  }

  handleChange(e) {
    this.setState({ input: e })
  }

  componentDidMount() {
    this.state.input = this.props.value.split('+S').join('');
  }

  render() {
    return (
      <div className={'wrapper'}>
        <AceEditor
          mode="golang"
          theme="monokai"
          fontSize={24}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={this.state.input}
          onChange={this.handleChange}
          setOptions={{
            showLineNumbers: true,
            tabSize: 2,
          }}
          className={'ace-editor'}
          width="100%"
          height={this.props.height}
        />
        <br />
        <button onClick={this.buttonClick} className={'run-button'}>
          Run
      </button>
        <br />
        <div className="output-block">
          <code>{this.state.output}</code>
        </div>
      </div>
    )
  }
}

export default RunnableBlock;
