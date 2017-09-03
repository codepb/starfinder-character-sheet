import React, { Component } from 'react';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import KnownSpellDisplay from './knownSpellDisplay';

export default class SpellLevel extends Component {
  render() {
    const content = [];
    console.log(this.props);
    for (let knownSpell in this.props.knownSpells) {
      content.push(<KnownSpellDisplay key={knownSpell} spell={this.props.knownSpells[knownSpell]} />);
    }
    return (
      <Card>
        <CardHeader title={`Level ${this.props.level}`} />
        <CardContent>
          {content}
          <Button>Add Spell</Button>
        </CardContent>
      </Card>
    );
  }
}