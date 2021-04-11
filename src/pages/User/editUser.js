import React, { Component } from 'react';
import { Text, TextInput } from 'react-native';

import { Button, Card } from 'galio-framework'


export default class EditUserScreen extends Component {

    constructor(props) {
        super(props)
        this.state = { name: this.props.route.params.name }
    }

    render() {
        return (
            <Card style={{ backgroundColor: '#fff', margin: 10, padding: 10 }}>
                <Card>
                    <Text>Edit User</Text>
                </Card>
                <Card style={{ backgroundColor: '#fff', margin: 10, padding: 10 }}>
                    <TextInput
                        onChangeText={(name) => this.setState({ name })}
                        value={this.state.name}
                    />
                </Card>
                <Card style={{ backgroundColor: '#fff', margin: 10, padding: 10 }}>
                    <Button
                        title='Update'
                        onPress={() => alert(this.state.name)}
                    />
                    <Button
                        title='Back'
                        onPress={() => this.props.navigation.goBack()} />
                </Card>

            </Card>


        )
    }
}