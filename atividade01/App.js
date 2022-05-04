import { StatusBar, StyleSheet, Text, SafeAreaView, Image, Dimensions, View} from 'react-native';

import arthas from './assets/arthas.png'
import alianca from './assets/alianca.png'
import Topo from './source/telas/Menu/Topo';


const width = Dimensions.get('screen').width;



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Topo/>

      <Text style={styles.frase}>I would gladly bear any curse to save my homeland</Text>
      <View style={styles.historia}>
      <Image style={styles.alianca}source={alianca}/>  
      <Text style={styles.descHistoria}>Prince Arthas Menethil was born to King Terenas Menethil II and Queen Lianne Menethil, four years before the start of the First War.The young prince grew up in a time when the lands of Azeroth were ravaged by war, the Alliance was crumbling, and darker clouds still loomed on the horizon.</Text>
      </View>
      <Text style={styles.desc}>Light Bless You </Text>
      <Text style={styles.rodape}>"I will fight with honor!"</Text>
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  frase:{
    color:"#ff1100",
    fontWeight:"bold",
    fontSize: 25,
    lineHeight:35,
    textAlign:"center"
  },
  descHistoria:{
    color:"#a3a3a3",
    fontSize:18,
    lineHeight:26,
    marginLeft:10
  },
  desc:{
    fontSize:24,
    paddingVertical:10,
    textAlign:"center"
  },
  rodape:{
    color:"#4f4f4e",
    marginTop:10,
    fontSize: 35,
    fontWeight:"bold",
    textAlign:"right",
    paddingHorizontal:10
  },
  alianca:{
    width:50,
    height:50,
    marginLeft:30
  },
  historia:{
    marginTop:1,
    flexDirection: "row",
    marginRight:100,
    padding:0
  }
});
