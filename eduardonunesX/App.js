import { StatusBar, StyleSheet,SafeAreaView} from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold} from '@expo-google-fonts/montserrat'; 
import Topo from './source/telas/Carrinho/Topo';
import Detalhes from './source/telas/Carrinho/Detalhes';
import { View } from 'react-native';
import Mocks from "./source/mocks/carrinho"
import Itens from './source/telas/Carrinho/Itens';
import { ScrollView } from 'react-native';


export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold
  });

  if (!fontsLoaded) {
    return <View></View>;
  }

  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
      <Topo {...Mocks.topo}/>
      <Detalhes {...Mocks.detalhes}/>
      <Itens {...Mocks.itens}/>
      <StatusBar />
    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  
});
