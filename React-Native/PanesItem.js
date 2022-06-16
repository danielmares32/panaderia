import React from 'react';
import {Text,View,StyleSheet,Image,Button, Pressable} from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';

const PanesItem = ({panes}) => {
    const navigation = useNavigation();
    return (
      <View style={styles.caja}>
      	<View style={styles.separador}>
            <Image
              style={styles.image}
              source={{uri: "https://panaderia.azurewebsites.net" + panes.imagen}}
             />
			
        </View>
		<Pressable style={styles.button} onPress={()=>{navigation.navigate("Pan",{
          id: panes.id,
          nombre: panes.nombre,
          descripcion: panes.descripcion,
          precio: panes.precio,
          imagen: "https://panaderia.azurewebsites.net" + panes.imagen
        })}}>
			<Text style={styles.fuente}>Ver</Text>
		</Pressable>
      </View>
    );
  }

const styles = StyleSheet.create({
	caja:{
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 10,
    justifyContent: 'space-between', 
	marginHorizontal: '5%'
  },
  fuente:{
    color: 'white',
    textAlign: 'center',
  },
  separador:{
    flexDirection:'row',
  },
  image:{
  	width: 150,
  	height: 150,
	borderRadius: 7,
  },
  symbol:{
  	textAlign: 'center',
  	color: 'gray',
  	fontSize: 10,

  },
  names:{
    marginLeft: 20,
  },
  pricecolor:{
    color: 'aqua',
    textAlign: 'right',
  },
  up:{
    color: 'green',
  },
  down:{
    color: 'red',
  },
  button: {
	margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#689f38',
  },

});

export default PanesItem;