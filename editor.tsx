import React, { Component } from 'react'
import { render } from 'react-dom'

import EmailEditor from 'react-email-editor'

export default class App extends Component {
  render() {
    return <div>
      <h1>react-email-editor Demo</h1>

      <div>
        <button onClick={this.exportHtml}>Export HTML</button>
      </div>

      <EmailEditor
        ref={designer => this.designer = designer}
      />
    </div>
  }

  exportHtml = () => {
    this.designer.exportHtml(html => {
      console.log('exportHtml', html)
    })
  }
}
