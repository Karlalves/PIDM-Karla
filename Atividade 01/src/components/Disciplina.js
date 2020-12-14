import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Disciplina extends Component {
  render() {
    return (
      <View>
        <Text style={styles.disciplina}>{this.props.disciplina}</Text>
      </View>
    );
  }
}

const styles=StyleSheet.create({
    disciplina: {
        fontSize: 20,
        paddingTop: 10,
        color: '#fff'
    }
})