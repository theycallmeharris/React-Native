import { useState } from "react";
import { View, Text, Button, StyleSheet,TouchableHighlight } from "react-native";

const App = () => {
  const [num, setNum] = useState(0);

  return (
    <View style={styles.container}>


      <Text style={styles.mainHeading} >Counter App</Text>
      <View style={styles.innerCounter} >



        <TouchableHighlight style={styles.btn} onPress={() => setNum(num - 1)}>
          <Text style={styles.btnText} >-</Text>
        </TouchableHighlight>


        <Text style={styles.number} >{num}</Text>


        <TouchableHighlight style={styles.btn} onPress={() => setNum(num + 1)}>
          <Text style={styles.btnText} >+</Text>
        </TouchableHighlight>


      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainHeading:{
    fontSize:30,
    fontWeight:"bold",
    marginBottom:10
  },
  container: {
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  innerCounter:{
    flexDirection:"row",
    justifyContent:"center",  
    alignItems:"center"
  },
  btn:{
    paddingVertical:6,
    paddingHorizontal:20,
    backgroundColor:"#3cc1fa",
    borderRadius:5
  },
  btnText:{
    fontSize:30,
    color:"#fff"
  },
  number:{
    fontSize:25,
    marginHorizontal:10
  }
});

export default App;
