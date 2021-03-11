import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import firebase from '../Firebase';

class EditMenuScreen extends Component {
  static navigationOptions = {
    title: 'Edit Menu',
  };
  
  constructor() {
    super();
    this.state = {
      key: '',
      isLoading: true,
      nome: '',
      idade: '',
      curso: ''
    };
  }
  componentDidMount() {
    const { navigation } = this.props;
    const ref = firebase.firestore().collection('menus').doc(JSON.parse(navigation.getParam('menukey')));
    ref.get().then((doc) => {
      if (doc.exists) {
        const board = doc.data();
        this.setState({
          key: doc.id,
          nome: menu.nome,
          idade: board.idade,
          curso: board.curso,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  updateTextInput = (text, field) => {
    const state = this.state
    state[field] = text;
    this.setState(state);
  }

  updateBoard() {
    this.setState({
      isLoading: true,
    });
    const { navigation } = this.props;
    const updateRef = firebase.firestore().collection('menus').doc(this.state.key);
    updateRef.set({
      nome: this.state.nome,
      idade: this.state.idade,
      curso: this.state.curso,
    }).then((docRef) => {
      this.setState({
        key: '',
        nome: '',
        idade: '',
        curso: '',
        isLoading: false,
      });
      this.props.navigation.navigate('Menu');
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
      this.setState({
        isLoading: false,
      });
    });
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.activity}>
          <ActivityIndicator size="large" color="#0000ff"/>
        </View>
      )
    }
    return (
      <ScrollView style={styles.container}>
        <View style={styles.subContainer}>
          <TextInput
              placeholder={'Nome'}
              value={this.state.nome}
              onChangeText={(text) => this.updateTextInput(text, 'nome')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
              multiline={true}
              numberOfLines={4}
              placeholder={'Idade'}
              value={this.state.idade}
              onChangeText={(text) => this.updateTextInput(text, 'idade')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
              placeholder={'Curso'}
              value={this.state.curso}
              onChangeText={(text) => this.updateTextInput(text, 'curso')}
          />
        </View>
        <View style={styles.button}>
          <Button
            large
            leftIcon={{name: 'update'}}
            title='Atualizar'
            onPress={() => this.updateBoard()} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  subContainer: {
    flex: 1,
    marginBottom: 20,
    padding: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#CCCCCC',
  },
  activity: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default EditMenuScreen;
