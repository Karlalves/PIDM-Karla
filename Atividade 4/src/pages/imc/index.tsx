import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "./styles";

export default class IMC extends React.Component {
  state = {
    imc: 0,
    peso: 0,
    altura: 0,
    resultado: "Aguardando informações...",
  };
  constructor(props: any) {
    super(props);
    this.calcIMC = this.calcIMC.bind(this);
    this.render = this.render.bind(this);
  }

  retornar() {
    const navigation = useNavigation();
  }

  calcIMC() {
    const altura = this.state.altura;
    const peso = this.state.peso;
    if (altura > 0 && peso > 0) {
      const imc = Math.round((peso / (altura * altura)) * 100) / 100;
      let info = "";
      if (imc < 17) {
        info = "Seu índice IMC está extremamente baixo!";
      } else if (imc >= 17 && imc <= 18.4) {
        info = "Seu índice IMC está baixo";
      } else if (imc >= 18.5 && imc <= 24.9) {
        info = "Excelente resultado, índice IMC perfeito";
      } else if (imc > 24.9) {
        info = "Lamento informar, mas você está acima do peso";
      }
      this.setState({ resultado: "Seu IMC É: " + imc + " " + info });
    } else {
      this.setState({ resultado: "Aguardando informações..." });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          keyboardType="decimal-pad"
          placeholder="Digite o seu peso"
          onChangeText={(text) => this.setState({ peso: text }, this.calcIMC)}
        />
        <TextInput
          style={styles.input}
          keyboardType="decimal-pad"
          placeholder="Digite a sua altura"
          onChangeText={(text) => this.setState({ altura: text }, this.calcIMC)}
        />
        <Text style={styles.title}>Peso: {this.state.peso}kg</Text>
        <Text style={styles.title}>Altura: {this.state.altura}m</Text>
        <Text style={styles.resultado}>{this.state.resultado}</Text>
      </View>
    );
  }
}
