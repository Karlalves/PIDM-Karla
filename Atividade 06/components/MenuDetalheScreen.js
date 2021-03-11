import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View } from 'react-native';
import { Text, Card, Button } from 'react-native-elements';
import firebase from '../Firebase';

class BoardDetailScreen extends Component {
  
  static navigationOptions = {
    title: 'MenuDetails',
  };

  constructor() {
    super();
    this.state = {
      isLoading: true,
      menus: {},
      key: ''
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    const ref = firebase.firestore().collection('menus').doc(JSON.parse(navigation.getParam('menukey')));
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          menu: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("Nenhum documento encontrado!");
      }
    });
  }
  deleteBoard(key) {
    const { navigation } = this.props;
    this.setState({
      isLoading: true
    });

    firebase.firestore().collection('menus').doc(key).delete().then(() => {
      console.log("Documento deletado com sucesso");
      this.setState({
        isLoading: false
      });

      navigation.navigate('Menu');

    }).catch((error) => {
      console.error("Erro ao deletar documento: ", error);
      this.setState({
        isLoading: false
      });
    });
  }
  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.activity}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }
    return (
      <ScrollView>
        <Card style={styles.container}>
          <View style={styles.subContainer}>
            <View>
              <Text h3>{this.state.menu.nome}</Text>
            </View>
            <View>
              <Text h5>{this.state.menu.idade}</Text>
            </View>
            <View>
              <Text h4>{this.state.menu.curso}</Text>
            </View>
          </View>
          <View style={styles.detailButton}>
            <Button
              large
              backgroundColor={'#CCCCCC'}
              leftIcon={{name: 'edit'}}
              title='Editar'
              onPress={() => {
                this.props.navigation.navigate('MenuDetails', {
                  boardkey: `${JSON.stringify(this.state.key)}`,
                });
              }} />
          </View>
          <View style={styles.detailButton}>
            <Button
              large
              backgroundColor={'#999999'}
              color={'#FFFFFF'}
              leftIcon={{name: 'delete'}}
              title='Deletar'
              onPress={() => this.deleteBoard(this.state.key)} />
          </View>
        </Card>
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
    paddingBottom: 20,
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
  },
  detailButton: {
    marginTop: 10
  }
})

export default BoardDetailScreen;
