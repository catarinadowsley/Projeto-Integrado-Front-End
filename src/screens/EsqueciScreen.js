import React from 'react';
import {useState} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import LogoDetail from '../components/LogoDetail';

const EsqueciScreen = ({navigation}) => {
  const [login,setLogin] =useState ('');
  const [password,setPassword] =useState('');
  return (
      
      
       <View style={styles.viewStyle}>

          <LinearGradient
        // Background Linear Gradient
          colors={[ 'rgba(255,255,255,1)', 'rgba(255,255,255,1)']}
          style={{
          ...StyleSheet.absoluteFillObject
           }}
          />
         
         <LogoDetail 
                    style={styles.logo}
                    title="SVUV"
                    imageToShow={require('../../assets/logo.png')}
                
             />
        <View style={styles.IntroStyle} >
            <Text style={styles.TextIntro}>Insira seu email cadastrado e vamos te enviar mais informações sobre como redefinir sua senha.</Text>
        </View>
          
         
        
          <View style={styles.SectionStyle}>

                
             
                 
            
             
             <TextInput
               //Placeholder Email
               style={{ flex: 1 , fontSize:20 , color:'black'}}
                placeholder="Email"
                underlineColorAndroid="transparent"
                placeholderTextColor='rgb(252, 160, 0)'
                autoCapitalize ='none'
                
                autoCorrect={false}
                value={login}
                onChangeText = {(newLogin) => setLogin(newLogin)}
            />
             <Feather name="mail" size={24} color="rgb(252, 160, 0)" />
        </View>
          

             
     
           
           
       
           
          <TouchableOpacity 
              //Botão de Fazer Login
              style={styles.buttonStyle}
              
              title = "Login "
          >
              <Text style={styles.loginbutton}>Enviar email</Text>
          </TouchableOpacity>


          
        
          

          <TouchableOpacity 
          //Botão Voltar
              
              onPress ={() => navigation.navigate('Login')}
              title = "VoltarLogin"
          >
              <Text style={styles.textVoltar}>Lembrou sua senha? Tente novamente.</Text>
          </TouchableOpacity>


      </View>
  );
};

const styles = StyleSheet.create({


  SectionStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderLeftColor: 'transparent',
      borderTopColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor:'rgb(252, 160, 0)',
      paddingHorizontal:5,
      width:300,
      fontSize: 20,
      marginHorizontal:40,
      marginVertical:11,
      height: 45,
      color:'white',
      margin: 10,


  },

  IntroStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderLeftColor: 'transparent',
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor:'transparent',
    paddingHorizontal:5,
    width:350,
    marginHorizontal:40,
    marginVertical:11,
    height: 70,
    color:'white',
    margin: 10,


},



  viewStyle:{
      
      justifyContent: 'center',
      borderColor: 'rgb(252, 160, 0)k' ,
      alignItems: 'center' ,
      
      //backgroundColor: '' ,
      ...StyleSheet.absoluteFillObject,
    
      
      


  },
 
  
  
  google:{

      marginLeft:15,
      tintColor:'rgb(252, 160, 0)',

  },

  buttonStyle: {
      
      
      flexDirection:'row',
      marginTop:20,
      marginBottom:60,
      marginHorizontal: 30,
      borderWidth:0.5,
      borderColor: 'rgb(252, 160, 0)',
      backgroundColor: 'rgb(252, 160, 0)',
      width: 300,
      height: 50,
      alignItems:'center',
      justifyContent: 'space-around',
      borderRadius:17,
   
       

  },


  socialButtons:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignSelf:'center',
      width:110,
      
      height:90,
      paddingVertical:5,
      marginTop:20,
      marginBottom:30
      
  },


  textVoltar: {
      justifyContent: 'center',
      alignItems: 'center',
      fontSize:20,
      color: 'rgb(252, 160, 0)',
      //fontWeight:'bold',
      


  },

  textForget: {
      fontSize: 17,
      color: 'rgb(252, 160, 0)',
      marginHorizontal:25
  
  },
 
  
  TextIntro: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    color: 'rgb(252, 160, 0)',
    

},
  

  ouStyle: {
      color: 'rgb(252, 160, 0)',
      fontSize:23,
      
  },
  entre: {
      color: 'rgb(252, 160, 0)',
      fontSize:15,
      marginTop:5,
     
  },

  loginbutton: {
      fontSize:20,
      color: 'white',
  }
});

export default EsqueciScreen;