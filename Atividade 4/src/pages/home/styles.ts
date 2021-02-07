import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#18277A",
    justifyContent: "center",
    padding: 30,
  },

  banner: {
    width: "100%",
    resizeMode: "contain",
  },

  title: {
    color: "#fff",
    fontSize: 21,
    lineHeight: 30,
    marginTop: 5,
  
  },

  titleBold: {
    fontWeight: "bold",
  },
  notify:{
    color: '#E81F64',
    fontWeight: 'bold'
  },

  buttonsContainer: {
    flexDirection: "row",
    marginTop: 25,
    justifyContent: "space-between",
  },

  button: {
    height: 150,
    width: "48%",
    backgroundColor: "#333",
    borderRadius: 8,
    padding: 24,
    justifyContent: "space-evenly",
  },

  buttonPrimary: {
    backgroundColor: "#E81F64",
  },

  buttonSecondary: {
    backgroundColor: "#6842C2",
  },
  buttonText: {

    color: "#fff",
    fontSize: 20,
  },
  totalConnections: {

    alignContent: "center",
    color: "#d4c2ff",
    fontSize: 14,
    marginRight: 16,
    maxWidth: 300,
    marginTop: 25,
    marginBottom: 15,
    justifyContent: "space-between",
  },
});

export default styles;
