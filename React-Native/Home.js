import React, {useEffect, useState} from 'react';
import {View,Text,FlatList,StyleSheet,StatusBar,TextInput, Image} from 'react-native';
import PanesItem from './PanesItem';

const Home = ({navigation}) => {
  const [panes, setPanes] = useState([])
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      cargarDatos();
    });
    return unsubscribe;
  }, [navigation]);
  const cargarDatos = async () => {
      const resp = await fetch("https://panaderia.azurewebsites.net/");
      const datos = await resp.json()
      console.log(datos);
      setPanes(datos)
  }
  useEffect(()=>{
    cargarDatos();
  },[]);

    return (
      <View style={styles.caja}>
      <StatusBar backgroundColor='orange'/>
      <View style={styles.header}>
          
          <Image
              style={{ width: '50%', height: 90, }}
              source={require('./img/logo.png')}
          />

      </View>

        <FlatList
          style={styles.listas}
          data={panes}
          numColumns={2}
          renderItem={({item})=>{
          return <PanesItem panes={item}/>
        }}
        />
      
      </View> 
    )
  }

const styles = StyleSheet.create({
  caja:{
    backgroundColor: 'white',
    alignItems: 'center',
    flex: 1,
  },
  fuente:{
    color: 'orange',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '800' 
  },
  listas:{
    width: '98%'
  },
  header:{
      flexDirection: 'row',
      justifyContent: 'center',
      width: '90%',
      marginBottom: 20,
      marginTop: 50
  },
  searchInput:{
    color: 'orangered',
    borderBottomColor: 'orange',
    borderBottomWidth: 2,
    width: '40%',
    textAlign: 'right',
  },
  image:{
  	width: 30,
  	height: 30,
  },
})


export default Home;
