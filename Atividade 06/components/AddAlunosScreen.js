import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  View,
  TextInput,
} from "react-native";
import { Button } from "react-native-elements";
import firebase from "../Firebase";

class AddAlunosScreen extends Component {
  static navigationOptions = {
    title: "AddAlunoScreen",
  };

  constructor() {
    super();
    this.ref = firebase.firestore().collection("alunos");
    this.state = {
      nome: "",
      curso: "",
      idade: "",
      isLoading: false,
    };
  }
  updateTextInput = (text, field) => {
    const state = this.state;
    state[field] = text;
    this.setState(state);
  };

  saveMenu() {
    this.setState({
      isLoading: true,
    });
    this.ref
      .add({
        nome: this.state.nome,
        curso: this.state.curso,
        idade: this.state.idade,
      })
      .then((docRef) => {
        this.setState({
          nome: "",
          curso: "",
          idade: "",
          isLoading: false,
        });
        this.props.navigation.goBack();
      })
      .catch((error) => {
        console.error("Error ao adicionar documento: ", error);
        this.setState({
          isLoading: false,
        });
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.activity}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
    return (
      <ScrollView style={styles.container}>
        <View style={styles.subContainer}>
          <TextInput
            placeholder={"Nome"}
            value={this.state.nome}
            onChangeText={(text) => this.updateTextInput(text, "nome")}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
            placeholder={"Curso"}
            value={this.state.curso}
            onChangeText={(text) => this.updateTextInput(text, "curso")}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
            placeholder={"Idade"}
            value={this.state.idade}
            onChangeText={(text) => this.updateTextInput(text, "idade")}
          />
        </View>
        <View style={styles.button}>
          <Button
            large
            leftIcon={{ name: "save" }}
            title="Salvar"
            onPress={() => this.saveMenu()}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  subContainer: {
    flex: 1,
    marginBottom: 20,
    padding: 5,
    borderBottomWidth: 2,
    borderBottomColor: "#CCCCCC",
  },
  activity: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AddAlunosScreen;
