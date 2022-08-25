import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7D2CD',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
  },
  header:{
    flexDirection: 'row',
    alignSelf:'center',
  },
  text:{
    padding: 20,
  },
  row:{
    flexDirection:"row",
    justifyContent:"space-between",
  },
  square:{
    borderWidth:1,
    borderColor: "black",
    width:120,
    height:120,
    justifyContent:"center"
  },
  selected:{
    fontSize:60,
    alignSelf: "center",
  }
});
