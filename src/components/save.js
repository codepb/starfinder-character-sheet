import React, { Component } from 'react';
import Button from 'material-ui/Button';

export default class SaveButton extends Component {
  save = (ev) => {
    this.props.onSave();
  }

  getFile = (callback) => {
    var input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'application/json');
    input.addEventListener('change', () => {
      callback(input.files[0], () => {
        document.body.removeChild(input);
      });
    }, false);
    input.setAttribute('style', 'opacity:0');
    document.body.appendChild(input);
    input.click();
  }

  load = () => {
    this.getFile((file, callback) => {
      if (!file) {
        callback();
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        var contents = e.target.result;
        this.props.onLoad(contents);
        callback();
      };
      reader.readAsText(file);
    });
  }

  render() {
    return (
      <div>
        <Button raised={true} onClick={this.save}>Save</Button>
        <Button raised={true} onClick={this.load}>Load</Button>
      </div>
    );
  }
}