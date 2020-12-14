import React, { Component } from "react";
import { View, Text, ScrollView, Button } from "react-native";

import { Feather } from "@expo/vector-icons";
import styles from "./styles";

export default class Dashboard extends Component {
  state = {
    votoFor: 0,
    votoQUIX: 0,
    votoLIMO: 0,
    votoJUAZ: 0,
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Eleições 2020</Text>
          <View style={styles.cards}>
            <View style={styles.card}>
              <Feather name="home"></Feather>
              <Text style={styles.cardTexts}>Fortaleza</Text>
              <Text style={styles.voto}>
                Quantidade de votos:{this.state.votoFor}
              </Text>
              <Button
                title="Votar"
                onPress={() => {
                  this.setState({ votoFor: this.state.votoFor + 1 });
                }}
              ></Button>
            </View>
          </View>
          <View style={styles.cards}>
            <View style={styles.card}>
              <Feather name="home"></Feather>
              <Text style={styles.cardTexts}>Quixadá</Text>
              <Text style={styles.voto}>
                Quantidade de votos: {this.state.votoQUIX}{" "}
              </Text>
              <Button
                title="Votar"
                onPress={() => {
                  this.setState({ votoQUIX: this.state.votoQUIX + 1 });
                }}
              ></Button>
            </View>
          </View>
          <View style={styles.cards}>
            <View style={styles.card}>
              <Feather name="home"></Feather>
              <Text style={styles.cardTexts}>Limoeiro</Text>
              <Text style={styles.voto}>
                Quantidade de votos: {this.state.votoLIMO}
              </Text>
              <Button
                title="Votar"
                onPress={() => {
                  this.setState({ votoLIMO: this.state.votoLIMO + 1 });
                }}
              ></Button>
            </View>
          </View>
          <View style={styles.cards}>
            <View style={styles.card}>
              <Feather name="home"></Feather>
              <Text style={styles.cardTexts}>Juazeiro</Text>
              <Text style={styles.voto}>
                Quantidade de votos: {this.state.votoJUAZ}
              </Text>
              <Button
                title="Votar"
                onPress={() => {
                  this.setState({ votoJUAZ: this.state.votoJUAZ + 1 });
                }}
              ></Button>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
