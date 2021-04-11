import React, { Component } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import auth from '@react-native-firebase/auth';

import LoginApp from '../Login/login'
import { Card, Button, theme, NavBar } from 'galio-framework'


export default class HomeScreen extends Component {

    constructor(props) {
        super(props)
        this.state = { loading: true }
    }

    renderLoginResponse() {
        if (this.state.loading) {
            return (
                <Card
                    flex
                    borderless
                    imageBlockStyle={{ padding: theme.SIZES.BASE / 2 }}
                >

                    <ActivityIndicator size='large' color='red' />
                    <Text>Carregando...</Text>

                </Card>
            )
        }
        return (
            <>
                <NavBar title="Meu app" />
                <Card>
                    <Card style={{ backgroundColor: '#fff', margin: 10, padding: 10 }}>
                        <LoginApp />
                    </Card>
                    <Card style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Button onPress={this.createUserWithEmailAndPassword}>Adicionar usuário</Button>

                        <Button onPress={this.logOff} >Sair da aplicação</Button>
                    </Card>
                    <Card>
                        <Button onPress={() => this.props.navigation.navigate('AddUserScreen')}>
                            Adicionar ao FIrestore
                    </Button><Button onPress={() => this.props.navigation.navigate('ListUserScreen')}>
                           Listar informações
                    </Button>

                    </Card>
                </Card>
            </>
        )
    }

    createUserWithEmailAndPassword = () => {
        auth()
            .signInWithEmailAndPassword('karlalves.letras@gmail.com', '123456')
            .then(() => {
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    }

    logOff = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    }

    logIn = () => {

    }

    anonymouslyLogin() {
        auth()
            .signInAnonymously()
            .then(() => {
                console.log('User signed in anonymously');
                this.setState({ loading: false })
            })
            .catch(error => {
                if (error.code === 'auth/operation-not-allowed') {
                    console.log('Enable anonymous in your firebase console.');
                }
                console.error(error);
            });
    }

    componentDidMount() {
        this.anonymouslyLogin()
    }

    render() {
        return (
            <View>
                {this.renderLoginResponse()}
            </View>
        )
    }
}