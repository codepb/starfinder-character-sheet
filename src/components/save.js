import React, { PureComponent } from 'react';
import Button from 'material-ui/Button';

export default class SaveButton extends PureComponent {
  save = (ev) => {
    this.props.onSave();
  }

  load = (ev) => {
    const file = ev.target.files[0];
    if (!file || file.name.split('.').pop().toLowerCase() !== 'json') {
      alert('file not correct format');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      var contents = e.target.result;
      this.props.onLoad(contents);
    };
    reader.readAsText(file);
  }

  render() {
    return (
      <div style={{marginBottom: '10px'}}>
        <Button raised={true} onClick={this.save} style={{marginRight: '10px'}}>Save</Button>
        <Button component="label" raised={true} style={{width:'56px'}}>
          Load
          <input type="file" accept=".json" onChange={this.load} style={{visibility: 'hidden', height: 0, width:0}}/>
        </Button>
      </div>
    );
  }
}