import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cabecalho from './src/components/Cabecalho';
import Corpo from './src/components/Corpo';
import Disciplina from './src/components/Disciplina';

export default function App() {
  return (
    <View style={styles.container}>
      <Corpo></Corpo>
      <Cabecalho  nome= 'Anitta' curso='Bacharel em Dança' style= {styles.titulo}></Cabecalho>
      <Disciplina disciplina= 'Teoria da dança'></Disciplina>
      <Disciplina disciplina= 'Dança contemporânea'></Disciplina>
      <Disciplina disciplina= 'História da arte'></Disciplina>
      <Disciplina disciplina= 'Dança clássica'></Disciplina>
      <Disciplina disciplina= 'Jazz'></Disciplina>
      <StatusBar style= 'light'></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 16,
    color: '#fff'
  }
});
