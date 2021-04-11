import React, { Component } from 'react'
import { View, FlatList } from 'react-native'

import firestore from '@react-native-firebase/firestore'

import { Card, Button, Text } from 'galio-framework'


export default class ListUserScrenn extends Component {

    constructor(props) {
        super(props)
        this.state = { users: [] }
    }

    componentDidMount() {
        this.listUsers()
    }

    listUsers() {
        firestore()
            .collection('alunos')
            .get()
            .then(querySnapshot => {
                console.log('Total users: ', querySnapshot.size);
                let users = []
                querySnapshot.forEach(
                    documentSnapshot => {
                        console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                        users.push(documentSnapshot.data())
                    }
                );
                this.setState({ users })
            });
    }

    renderUsers() {
        return (
            <FlatList
                data={this.state.users}
                renderItem={
                    ({ item }) => {
                        return (
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'flex-start'
                            }}>
                                <View style={{ flex: 1.5 }}>
                                    <Text h5 >{item.nome}</Text>
                                    <Text h5 >{item.idade}</Text>
                                    <Text h5 >{item.curso}</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Button
                                        onPress={
                                            () => this.props.navigation.navigate('EditUserScreen', { name: item.name })
                                        }

                                    >Editar</Button>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Button >Deletar</Button>
                                </View>
                            </View>
                        )
                    }
                }
                keyExtractor={(item, index) => item + index}
            />
        )
    }

    render() {
        return (
            <Card>
                <Card style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>..::List Users::..</Text>
                </Card>
                <Card>
                    {this.renderUsers()}
                </Card>
                <Card>
                    <Button
                        title='Adicionar Usuário'
                        onPress={
                            () => this.props.navigation.navigate('AddUserScreen')
                        }
                    />
                </Card>
            </Card>
        )
    }
}