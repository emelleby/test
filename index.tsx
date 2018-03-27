import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Paragraph from './Paragraph';
import './style.css';
import Editor from './editor';

interface AppProps { }
interface AppState {
  name: string;
  text: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      text: 'Start editing here to see some magic happen :)'
    };
  }

  render() {
    return (
      <div>
      <div>
        <Hello name={this.state.name}  />
        <Paragraph text={this.state.text}  />        
      </div>
      <div>
        <Editor />
      </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
