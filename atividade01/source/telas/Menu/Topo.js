import React from 'react';
import { Image, Text, StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('screen').width;
import arthas from '../../../assets/arthas.png';


export default function Topo (){
    return<>
        <Image style={styles.arthas} source={arthas}/>
         <Text style = {styles.nome}>Arthas Menetil</Text>
        </> ;
}
const styles = StyleSheet.create({
    arthas:{
        width:"100%",
        height:582/772 * width
    },
    
    nome:{
      position: 'absolute',
      paddingVertical: 60,
      textAlign: "center",
      width:"100%",
      fontSize: 20,
      fontWeight: "bold",
      lineHeight: 40,
      color:"#fff"
    },
})