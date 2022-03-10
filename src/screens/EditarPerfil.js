import React from 'react';
import {useState} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, AsyncStorage} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import LogoDetailMenor from '../components/LogoDetailMenor';
import banco from '../api/banco'


const EditarPerfilScreen = ({navigation}) => {
  const [login,setLogin] =useState ('');
  const [password,setPassword] =useState('');

  const[nome,SetNome] =useState('');
  const[sobrenome,SetSobrenome] =useState('');
  const[email,SetEmail] =useState('');

  const searchUser = async() =>{
    const response = await banco.get('/user/current');
    SetNome(response.data.name);
    SetSobrenome(response.data.last_name);
    SetEmail(response.data.email);
  }

  searchUser();
  const logout = (navigation) => {
    //AsyncStorage.removeItem("TOEKN")
    navigation.navigate('Login')
  }
  return (


       
       <View style={styles.viewStyle}>

          <LinearGradient
        // Background Linear Gradient
          colors={[ 'rgba(255,255,255,1)', 'rgba(255,255,255,1)']}
          style={{
          ...StyleSheet.absoluteFillObject
           }}
          />

        <View style={styles.MenuSuperior}>
            <TouchableOpacity style={styles.Voltar}  onPress ={() => navigation.navigate('Principal')}>
            <Feather name="chevron-left" size={50} color="white" />
            </TouchableOpacity>
       
        <LogoDetailMenor 
                    
                    title="SVUV"
                    imageToShow={require('../../assets/logo_branco.png')}
                
             />
        </View>
        <View style={styles.user}>
          <Feather name="user" size={70} color="rgb(252, 160, 0)"/>
        </View>

        <View style={styles.Retangulos}>
        <View style={styles.Retangulo}> 
             <Text style={styles.dados}> Nome:</Text>
            <Text style={styles.dados}> {nome}</Text>  
        </View>
        <View style={styles.Retangulo}>
                <Text style={styles.dados}>Sobrenome:</Text>
                <Text style={styles.dados}>{sobrenome}</Text>
        </View>
        <View style={styles.Retangulo}>
                <Text style={styles.dados}>Email: </Text>
                <Text style={styles.dados}>{email}</Text>
        </View>
       
        <View style={styles.Sair}> 
        <TouchableOpacity  style={styles.Sair} onPress={() => logout(navigation)} >
        <Text style={styles.sair}>SAIR</Text>
        </TouchableOpacity>     
        </View> 
        </View>
        

        <View style={styles.MenuInferior}>
        <TouchableOpacity> 
        <Feather name="user" size={35} color="white" />
        </TouchableOpacity>
        <TouchableOpacity  onPress ={() => navigation.navigate('Principal')}> 
        <Feather name="home" size={35} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress ={() => navigation.navigate('Grafico')}> 
        <Feather name="bar-chart-2" size={35} color="white" />
        </TouchableOpacity>
        </View>
        
          
            
      </View>
  );
};

const styles = StyleSheet.create({



  viewStyle:{
      
     
      borderColor: 'rgb(252, 160, 0)' ,
      alignItems: 'center' ,
      //justifyContent: 'space-around',
      
      //backgroundColor: '' ,
      ...StyleSheet.absoluteFillObject,
    

  },

 
  Topo:{

    flexDirection:'row',
    marginTop:30,
    marginBottom:60,
    marginHorizontal: 30,
    borderWidth:0.5,
    borderColor: 'rgb(252, 160, 0)',
    backgroundColor: 'rgb(252, 160, 0)',
    width: 410,
    height: 60,
    alignItems:'center',
    justifyContent: 'space-around',
    borderBottomRightRadius:20,
    borderBottomLeftRadius: 20,
  
 
  },
  dados: {
    fontSize: 20
  },
    sair: {
    fontWeight:'bold',
    fontSize: 20,
    color: 'white'
  },

  logo:{
    width: 410,
    height: 30,

  },
  Voltar:{
    position: 'absolute',
    marginLeft:-140,
    marginTop:0,

  },

  Retangulo:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(252, 160, 0, 0.25)',
    paddingHorizontal:5,
    width:300,
    height: 50,
    marginHorizontal:40,
    marginVertical:11,
    color:'white',
    margin: 10,
    borderRadius: 20,
   
  },
  Retangulos:{
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    marginLeft:10,
    marginTop:250,

  },
  user:{
    position: 'absolute',
    marginLeft:10,
    marginTop:140,


  },
  Recomendações:{

    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'rgba(252, 160, 0, 1.0)',
    paddingHorizontal:5,
    width:300,
    height: 60,
    fontSize: 20,
    marginHorizontal:40,
    marginVertical:11,
    color:'white',
    margin: 10,
    borderRadius: 20,
  },
  Sair:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'rgba(252, 160, 0, 0.75)',
    paddingHorizontal:5,
    width:300,
    height: 60,
    fontSize: 35,
    marginHorizontal:40,
    marginVertical:11,
    color:'white',
    margin: 10,
    borderRadius: 20,
  },

  MenuInferior:{
    position: 'absolute',
    backgroundColor: 'rgba(252, 160, 0, 1.0)',
    marginLeft:10,
    marginTop:670,
    width:410,
    height:70,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  MenuSuperior:{
    position: 'absolute',
    backgroundColor: 'rgba(252, 160, 0, 1.0)',
    marginLeft:10,
    marginTop:0,
    width:410,
    height:70,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
}


});

export default EditarPerfilScreen;