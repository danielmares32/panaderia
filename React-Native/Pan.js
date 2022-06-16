import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import NumericInput from 'react-native-numeric-input'
import { useNavigation, NavigationContainer } from '@react-navigation/native';

const eliminarPan = async (id)=>{
  const resp = await fetch(`https://panaderia.azurewebsites.net/delete/${id}`);
  const datos = await resp.json();
  console.log(datos);
}

const Pan = ({route, navigation})=>{
  const { nombre, descripcion, precio, imagen, id } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
      <Image
          style={{height: "50%", width:"90%"}}
          source={{uri:imagen}}
      />
      <View style={styles.caja}>
        <Text style={styles.titulo}>{nombre}</Text>
        <Text style={styles.carac}>{descripcion}</Text>
        
        <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-evenly', marginTop: 50}}>
          <Text style={styles.titulo}>${precio}</Text>
          
          <NumericInput type='up-down' onChange={value => console.log(value)} />

        </View>
        <View style={{marginTop:20}}>
          <Pressable style={styles.button}>
            <Text style={styles.fuente}>Comprar</Text>
          </Pressable>
        </View>
        
        <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-evenly', marginTop: 10}}>
          <Pressable style={styles.buttoneliminar}>
            <Text style={styles.fuente} onPress={()=>{
              eliminarPan(id);
              navigation.navigate("Home");
            }}>Eliminar</Text>
          </Pressable>
          
        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    fontWeight: "bold",
    fontSize: "28pt",
	  margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#689f38',
  },
  fuente:{
    color: 'white',
    textAlign: 'center',
  },
  caja:{
    width: '90%',
    backgroundColor: 'white',
    alignItems: 'stretch',
    flexDirection: 'column',
    paddingTop: 10,
    justifyContent: 'space-between', 
	  marginHorizontal: '5%'
  },
  titulo:{
    fontSize: 28,
    fontWeight: "bold",

  },
  buttoneliminar: {
    width:'100%',
	  margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#cb3234',
  },
});

export default Pan;