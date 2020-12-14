import React, { Component } from "react";
import { View, Image } from "react-native";

export default class Corpo extends Component {
  render() {
      const imagem = {uri:'https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2020/06/anitta95.jpg'}
    return (
      <View>
        <Image source = {imagem} style= {{width: 250, height: 250, borderRadius: 150}}/>
      </View>
    );
  }
}
