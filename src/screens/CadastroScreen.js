import React , {useState} from 'react';
import { View, Text, StyleSheet ,Button,  Image, TextInput, TouchableOpacity} from 'react-native';
import { Alert } from 'react-native';
import LogoDetail from '../components/LogoDetail';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import userService from '../../services/UsuarioServices';


const CadastroScreen =({navigation}) =>{
    const[name, setName]= useState('');
    const[last_name, setlast_name]= useState('');
    const [email, setEmail] =useState ('');
    const [password, setPassword] =useState('');
    const [passwordC, setPasswordC] =useState('');
    const [isLoading, setLoading] =useState(false);
    
   


    const validar =()=> {
        let error = false
        if (email ==null){
            
            error = true
        }
        return !error

    }

    const salvar =  ()=> {
        if(validar()){
            setLoading(true)

            let data ={
            name: name,
            last_name: last_name,
            email: email ,
            password: password , 
            
        }

        userService.cadastrar(data)
        .then((response) => {
            setLoading(false)
            console.log(response.data)
            navigation.navigate('Principal')

        })
        .catch((error) =>{
            setLoading(false)
            console.log(error)
            console.log("Erro no cadastro.")
            

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
            title="SVUV"
            imageToShow={require('../../assets/logo.png')}
            />
            
            <View style={styles.inputview}>

            <View style={styles.SectionStyle}>
               
               <TextInput
                 
                 style={{ flex: 1 , fontSize:15 , color:'black'}}
                  placeholder="Nome"
                  underlineColorAndroid="transparent"
                  placeholderTextColor='rgb(252, 160, 0)'
                  autoCapitalize ='none'
                  
                  autoCorrect={false}
                  value={name}
                  onChangeText = {(newName) => {
                      setName(newName) 
                      }}
              />
                <AntDesign name="user" size={24} color='rgb(252, 160, 0)' />

              
            </View>

            <View style={styles.SectionStyle}>  
               
               <TextInput
                 
                 style={{ flex: 1 , fontSize:15 , color:'black'}}
                  placeholder="Sobrenome"
                  underlineColorAndroid="transparent"
                  placeholderTextColor='rgb(252, 160, 0)'
                  autoCapitalize ='none'
                  
                  autoCorrect={false}
                  value={last_name}
                  onChangeText = {(newlast_name) => {
                      setlast_name(newlast_name) 
                  }}
              />
                <AntDesign name="user" size={24} color='rgb(252, 160, 0)' />


             </View>
            <View style={styles.SectionStyle}>
               
               <TextInput
                 
                 style={{ flex: 1 , fontSize:15 , color:'black'}}
                  placeholder="Email"
                  underlineColorAndroid='transparent'
                  placeholderTextColor='rgb(252, 160, 0)'
                  autoCapitalize ='none'
                  
                  autoCorrect={false}
                  value={email}
                  onChangeText = {(newEmail) => {
                      
                      setEmail(newEmail)
                    }}
              />
              <Feather name="mail" size={24} color='rgb(252, 160, 0)' />
              
          </View>    
            
            <View style={styles.SectionStyle}>
               
               <TextInput
                 
                 style={{ flex: 1 , fontSize:15 , color:'black'}}
                  placeholder="Senha"
                  underlineColorAndroid="transparent"
                  placeholderTextColor='rgb(252, 160, 0)'
                  autoCapitalize ='none'
                  secureTextEntry={true}
                  autoCorrect={false}
                  value={password}
                  onChangeText = {(newPassword) =>{ setPassword(newPassword) 
                     }}
               />
                <Feather name="key" size={24} color='rgb(252, 160, 0)' />

          </View>
                  
          <View style={styles.SectionStyle}>
            
               <TextInput
                 
                 style={{ flex: 1 , fontSize:15 , color:'black'}}
                  placeholder="Confirme Sua Senha"
                  underlineColorAndroid="transparent"
                  placeholderTextColor='rgb(252, 160, 0)'
                  autoCapitalize ='none'
                  secureTextEntry={true}
                  autoCorrect={false}
                  value={passwordC}
                  onChangeText = {(newPasswordC) => setPasswordC(newPasswordC)}
               />
            
            <Feather name="key" size={24} color='rgb(252, 160, 0)' />

         </View>
            
        { isLoading &&
         
         <View style={[styles.container, styles.horizontal]}>
         <Text>Carregando...</Text>
        
         </View>
        }            


        { !isLoading &&       

            <TouchableOpacity 
                style={styles.buttonStyle}
                title = "Cadastro"
                onPress={() =>salvar()}
            >
                <Text style={styles.textCadastro}>Cadastre-se</Text>
            </TouchableOpacity>
        }
            <TouchableOpacity 
                
                onPress ={() => navigation.navigate('Login')}
                title = "Login"
            >
                <Text style={styles.backtoLogin}>Já Possui Conta? Faça o Login</Text>
            
            </TouchableOpacity>
             </View>
            
        </View>
    );
};

const styles = StyleSheet.create({

    viewStyle: {
        justifyContent: 'center',
        borderColor: 'white' ,
        alignItems: 'center' ,
        
        ...StyleSheet.absoluteFillObject,
       


    },
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
        color:'rgb(252, 160, 0)',
        margin: 10,


    },
    
    inputview:{
        paddingVertical:20

      
    },
    Carregando:{

        fontSize: 23,
        color: 'rgb(252, 160, 0)',
        alignSelf:'center'
    },

    buttonStyle: {
        
        flexDirection:'row',
        marginTop:15,
        marginBottom:50,
        marginHorizontal: 30,
        borderWidth: 0.5,
        borderColor: 'rgb(252, 160, 0)',
        backgroundColor: 'rgb(252, 160, 0)',
        width: 300,
        height: 50,
        alignItems:'center',
        justifyContent: 'space-around',
        borderRadius: 17,
        
    },
  
    textCadastro: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize:20,
        color: 'white',
      

    },

    backtoLogin: {
        fontSize: 20,
        color: 'rgb(252, 160, 0)',
        
        alignSelf:'center'
        
    },
    container: {
        flex: 0.5,
        justifyContent: "center"
      },
      horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        
      },
  

});

export default CadastroScreen;