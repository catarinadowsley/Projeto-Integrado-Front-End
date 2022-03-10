import React from 'react';
import {useState} from "react";
import { View, ActivityIndicator, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import userService from '../../services/UsuarioServices';
import LogoDetail from '../components/LogoDetail';
import {NavigationActions} from 'react-navigation';


const LoginScreen = ({navigation}) => {
  const [login,setLogin] =useState ('');
  const [password,setPassword] =useState('');
  const [isLoading, setLoading] = useState(false);


  /*const cadastrar =() =>{
    navigation.navigate("Cadastro")*/

const validar =()=> {
    let error = false
    if (login ==null){
        
        error = true
    }
    return !error

}

const cadastrar =  ()=> {
    if(validar()){
        setLoading(true)

        let data ={
        email: login ,
        password: password , 
        
    }

    userService.login(data)
    .then((response) => {
        setLoading(false)
        console.log(response.data)
        navigation.navigate('Principal')

    })
    .catch((error) =>{
        setLoading(false)
        console.log(error)
        console.log("Erro no login.")
        

    })


        
}}
    
   
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
          
         
        
          <View style={styles.SectionStyle}>
             
             <TextInput
               //Placeholder Email
               style={{ flex: 1 , fontSize:15 , color:'black'}}
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
          

          <View style={styles.SectionStyle}>
             

             <TextInput
               //Placeholder Senha
               style={{ flex: 1 , fontSize:15 , color:'black'}}
                placeholder="Senha"
                underlineColorAndroid="transparent"
                placeholderTextColor='rgb(252, 160, 0)'
                autoCapitalize ='none'
                secureTextEntry={true}
                autoCorrect={false}
                value={password}
                onChangeText = {(newPassword) => setPassword(newPassword)}
            />
            <Feather name="key" size={24} color="rgb(252, 160, 0)" />
        </View>     
           
           
          <TouchableOpacity
            //Botão Esqueci a Senha
              onPress ={() => navigation.navigate('Esqueci')}
              style={styles.textForget}
              title="Forget Password"
          >
           <Text style={styles.textForget}>Esqueceu a senha?</Text>
             
          </TouchableOpacity>
          
           

        {isLoading &&

        
            <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator />
            <ActivityIndicator size="large" color= 'rgb(252, 160, 0)' />
            </View>
           
        }   

        { !isLoading &&
    

          <TouchableOpacity 
              //Botão de Fazer Login
              //onPress ={() => navigation.navigate('Principal')}
              style={styles.buttonStyle}
              onPress={() => cadastrar()}
              title = "Login "
          >
              <Text style={styles.loginbutton}>LOGIN</Text>
          </TouchableOpacity>
        }
          

          <TouchableOpacity 
          //Botão Cadastro
              
              onPress ={() =>  navigation.navigate('Cadastro')}
              title = "Cadastro"
          >
              <Text style={styles.textCadastro}>Não Possui Conta? Cadastre-se</Text>
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
  container: {
    flex: 0.5,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    
  },

  viewStyle:{
      
      justifyContent: 'center',
      borderColor: 'rgb(252, 160, 0)k' ,
      alignItems: 'center' ,
      
      //backgroundColor: '' ,
      ...StyleSheet.absoluteFillObject,
    
      
      


  },
  Carregando:{

    fontSize: 23,
    color: 'rgb(252, 160, 0)',
    alignSelf:'center'
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


  textCadastro: {
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

export default LoginScreen;