import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 30,
  },
  title: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold"
  },
  cards: {
      marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    height: 150,
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 8,
    justifyContent:"space-evenly",
    padding:24
  },
  cardTexts:{
    textAlign:"center",
    fontWeight:"bold"
  },
  voto:{
    color: '#E81F64',
    fontWeight: 'bold'
  }
});
export default styles;
