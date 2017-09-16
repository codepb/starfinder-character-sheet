import React, { Component } from 'react';
import Card, { CardHeader, CardContent } from 'material-ui/Card';

export default class ComponentContainer extends Component {
    render() {
        const cardHeader = this.props.title ? <CardHeader title={this.props.title} /> : '';
        return(
            <Card style={{margin: 5, marginBottom: 15, paddingBottom:15, width: '100%', overflowX: 'auto'}}>
                {cardHeader}
                <CardContent>
                    {this.props.children}
                </CardContent>
            </Card>
        )
    }
}