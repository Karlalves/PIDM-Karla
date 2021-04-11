import React, { Component } from 'react';
import { TextInput } from 'react-native';

import {Card, Button,Text} from 'galio-framework'




export default class AddUserScreen extends Component {

    constructor(props) {
        super(props)
        this.state = { name: '' }
        this.state = {curso: ''}
        this.state = {idade: ''}
    }

    render() {
        return (
            <Card>
                <Card>
                    <Text h4>Adicionar nova pessoa</Text>
                </Card>
                <Card>
                    <TextInput
                        onChangeText={(text) => this.setState({ text })}
                        placeholder='Qual seu nome?'/>
                </Card>
                <Card>
                    <Button>Adicionar Usuário</Button>
                    <Button onPress={() => this.props.navigation.goBack()}>Voltar</Button>
                </Card>

            </Card>


        )
    }
}