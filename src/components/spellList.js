import React, { Component } from 'react';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import SpellLevel from './spellLevel';
import spells from '../rules/spells';

export default class SpellList extends Component {
  render() {
    const levels = [...Array(7).keys()];
    const content = [];
    for (let level in levels) {
      const knownSpells = [];
      if(level == 1) {
        knownSpells.push(spells[0]);
      }
      content.push(<SpellLevel key={level} level={level} knownSpells={knownSpells}/>);
    }

    return (
      <Card raised={true}>
        <CardHeader title="Spells" />
        <CardContent>
          {content}
        </CardContent>
      </Card>
    );
  }
}