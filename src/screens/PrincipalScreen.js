import React from 'react';
import {useState} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons'; 
import LogoDetailMenor from '../components/LogoDetailMenor';
import RecommendationLogo from '../components/RecommendationLogo';
import banco from '../api/banco';



const PrincipalScreen = ({navigation}) => {

  const data = new Date();
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const horas = String(data.getUTCHours()).padStart(2, '0');
  const minutos = String(data.getUTCMinutes()).padStart(2, '0');
  const horaAtual =  (horas -3) + ':' +minutos
  const ano = data.getFullYear();
  const dataAtual = dia + '/' + mes + '/' + ano;

 const[novohoras,setNovohoras] = useState('');
 const[novadata,setNovadata] = useState('');
 const searchData =() =>{
  const data = new Date();
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const horas = String(data.getUTCHours()).padStart(2, '0');
  const minutos = String(data.getUTCMinutes()).padStart(2, '0');
  const horaAtual =  (horas -3) + ':' +minutos
  const ano = data.getFullYear();
  const dataAtual = dia + '/' + mes + '/' + ano;
  setNovadata(dataAtual);
  setNovohoras(horaAtual);
 }

  //Sinal de UV que vai chegar. Nesse programa o results é tratado sempre sendo >=1

  const[bateria, setBateria] = useState('')
  const[results,setResults] = useState(-1);
  const searchApi = async () => {
    const response = await banco.get('/data_read/last');
    console.log(response.data);
    setResults(response.data.uv);
    setBateria(response.data.nivel_bateria);
    console.log(results);
    
  };

 
searchApi();
if (results === -1){
  
  return(
 
     
      <View style={styles.viewStyle}>
      <LinearGradient
    // Background Linear Gradient
      colors={[ 'rgba(255,255,255,1)', 'rgba(255,255,255,1)']}
      style={{
      ...StyleSheet.absoluteFillObject
       }}
      />

    <View style={styles.MenuSuperior}>
    <LogoDetailMenor 
                title="SVUV"
                imageToShow={require('../../assets/logo_branco.png')}
         />
    </View>

    <View style={styles.inicial}>
    <View style={styles.OLA}> 
     
         <Text style={styles.TextoOLA}>Olá, Bem-Vindo ao SVUV! </Text>  
    </View>
    
      <TouchableOpacity  onPress ={() => searchApi()} >
      <View style={styles.medicao}>
      <Text style={styles.TextoMedicao}>Fazer medição!</Text>
      </View>
      </TouchableOpacity>
      
    
    
    </View>
    <View style={styles.MenuInferior}>
    <TouchableOpacity 
     onPress ={() => navigation.navigate('Editar')}> 
    <Feather name="user" size={35} color="white" />
    </TouchableOpacity>
    <TouchableOpacity> 
    <Feather name="home" size={35} color="white" />
    </TouchableOpacity>
    <TouchableOpacity onPress ={() => navigation.navigate('Grafico')}> 
    <Feather name="bar-chart-2" size={35} color="white" />
    </TouchableOpacity>
    </View>
  </View>
   )
      }
 
  
  else if (results<=3){
    //console.log("Muito baixo")
  
    return(
       <View style={styles.viewStyle}>
          <LinearGradient
        // Background Linear Gradient
          colors={[ 'rgba(255,255,255,1)', 'rgba(255,255,255,1)']}
          style={{
          ...StyleSheet.absoluteFillObject
           }}
          />

        <View style={styles.MenuSuperior}>
        <LogoDetailMenor 
                    title="SVUV"
                    imageToShow={require('../../assets/logo_branco.png')}
             />
        </View>
        
        <View style={styles.Retangulos}>
        <View style={styles.Bateria}>
        <Feather name="battery" size={35} color= 'rgb(252, 160, 0)' />
        <Text style={styles.TextoRetangulos}>{bateria} </Text>  
        </View>
        <View style={styles.Data}> 
        <Feather name="calendar" size={35} color= 'rgb(252, 160, 0)' />
              
             <Text style={styles.TextoRetangulos}> Última atualização em {dataAtual} {horaAtual} </Text>  
        <TouchableOpacity  onPress ={() => searchApi()} onPress ={() => searchData()}>
          <Feather name='refresh-ccw' size={35} color = 'rgb(252,160,0)'/>
        </TouchableOpacity>
        </View>
        <View style={styles.Retangulo}> 
        <Feather name="sun" size={35} color= 'rgb(252, 160, 0)' /> 
         
             <Text style={styles.TextoRetangulos}>{results} UV </Text>  
             
        </View>
        <View style={styles.Recomendações}>
        <Feather name="check" size={50} color= 'green' /> 
                <Text style={styles.TextoRetangulos}>Incidência de raios UV BAIXA! </Text>
                <Text style={styles.TextoRetangulos}>Se proteja com </Text>
                <View style ={styles.imagens}>
                <RecommendationLogo
                    title="protetor"
                    imageToShow={require('../../assets/protetor.png')}
                     />
                         
                </View>
        </View> 
        </View>
        <View style={styles.MenuInferior}>
        <TouchableOpacity 
         onPress ={() => navigation.navigate('Editar')}> 
        <Feather name="user" size={35} color="white" />
        </TouchableOpacity>
        <TouchableOpacity> 
        <Feather name="home" size={35} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress ={() => navigation.navigate('Grafico')}> 
        <Feather name="bar-chart-2" size={35} color="white" />
        </TouchableOpacity>
        </View>
      </View>
  )
}else if (results >=3 && results<6){
  console.log("Moderado")

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
        <LogoDetailMenor 
                    title="SVUV"
                    imageToShow={require('../../assets/logo_branco.png')}
                
            />
        </View>
        <View style={styles.Retangulos}>
        <View style={styles.Bateria}>
        <Feather name="battery" size={35} color= 'rgb(252, 160, 0)' />
        <Text style={styles.TextoRetangulos}>{bateria} </Text>  
        </View>
        <View style={styles.Data}> 
        <Feather name="calendar" size={35} color= 'rgb(252, 160, 0)' /> 
            <Text style={styles.TextoRetangulos}> Última atualização em {dataAtual} {horaAtual} </Text>  
        <TouchableOpacity  onPress ={() => searchApi()} onPress ={() => searchData()}>
          <Feather name='refresh-ccw' size={35} color = 'rgb(252,160,0)'/>
        </TouchableOpacity>
        </View>
        <View style={styles.Retangulo}> 
        <Feather name="sun" size={35} color= 'rgb(252, 160, 0)' /> 
        
            <Text style={styles.TextoRetangulos}>{results}  UV</Text>  
        </View>
        <View style={styles.Recomendações}>
        <Feather name="alert-circle" size={50} color= 'rgb(252, 160, 0)' /> 
                <Text style={styles.TextoRetangulos}>Incidência de raios UV MODERADA! </Text>
                <Text style={styles.TextoRetangulos}>Se proteja com  </Text>
                <View style ={styles.imagens}>
                <RecommendationLogo
                    title="protetor"
                    imageToShow={require('../../assets/protetor.png')}
                     />
                <RecommendationLogo
                    title="camisa"
                    imageToShow={require('../../assets/camisa.png')}
                     />
                <RecommendationLogo
                    title="bone"
                    imageToShow={require('../../assets/bone.png')}
                     />
            
                </View>
        </View> 
       
        </View>
        <View style={styles.MenuInferior}>
        <TouchableOpacity 
        onPress ={() => navigation.navigate('Editar')}> 
        <Feather name="user" size={35} color="white" />
        </TouchableOpacity>
        <TouchableOpacity> 
        <Feather name="home" size={35} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress ={() => navigation.navigate('Grafico')}> 
        <Feather name="bar-chart-2" size={35} color="white" />
        </TouchableOpacity>
        </View>
      </View>
  )
}else if (results >=6 && results<8 ){
  console.log("Alto")

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
        <LogoDetailMenor 
                    title="SVUV"
                    imageToShow={require('../../assets/logo_branco.png')}
                
            />
        </View>
        <View style={styles.Retangulos}>
        <View style={styles.Bateria}>
        <Feather name="battery" size={35} color= 'rgb(252, 160, 0)' />
        <Text style={styles.TextoRetangulos}>{bateria} </Text>  
        </View>
        <View style={styles.Data}> 
        <Feather name="calendar" size={35} color= 'rgb(252, 160, 0)' /> 
            <Text style={styles.TextoRetangulos}> Última atualização em {dataAtual} {horaAtual}</Text>  
        <TouchableOpacity  onPress ={() => searchApi()} onPress ={() => searchData()}>
          <Feather name='refresh-ccw' size={35} color = 'rgb(252,160,0)'/>
        </TouchableOpacity>
        </View>
        <View style={styles.Retangulo}> 
        <Feather name="sun" size={35} color= 'rgb(252, 160, 0)' /> 
        
            <Text style={styles.TextoRetangulos}>{results} UV</Text>  
        </View>
        <View style={styles.Recomendações}>
        <Feather name="alert-circle" size={50} color= 'rgb(252, 160, 0)' /> 
                <Text style={styles.TextoRetangulos}>Incidência de raios UV ALTA! </Text>
                <Text style={styles.TextoRetangulos}>Se proteja com  </Text>
                <View style ={styles.imagens}>
                <RecommendationLogo
                    title="protetor"
                    imageToShow={require('../../assets/protetor.png')}
                     />
                <RecommendationLogo
                    title="camisa"
                    imageToShow={require('../../assets/camisa.png')}
                     />
                <RecommendationLogo
                    title="bone"
                    imageToShow={require('../../assets/bone.png')}
                     />
                <RecommendationLogo
                    title="guarda-sol"
                    imageToShow={require('../../assets/guardasol.png')}
                     />
 
                </View>
        </View> 
       
        </View>
        <View style={styles.MenuInferior}>
        <TouchableOpacity 
        onPress ={() => navigation.navigate('Editar')}> 
        <Feather name="user" size={35} color="white" />
        </TouchableOpacity>
        <TouchableOpacity> 
        <Feather name="home" size={35} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress ={() => navigation.navigate('Grafico')}> 
        <Feather name="bar-chart-2" size={35} color="white" />
        </TouchableOpacity>
        </View>
      </View>
  )
}else if (results >=8 && results<11 ){
  console.log("Alto")

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
        <LogoDetailMenor 
                    title="SVUV"
                    imageToShow={require('../../assets/logo_branco.png')}
                
            />
        </View>
        <View style={styles.Retangulos}>
        <View style={styles.Bateria}>
        <Feather name="battery" size={35} color= 'rgb(252, 160, 0)' />
        <Text style={styles.TextoRetangulos}>{bateria} </Text>  
        </View>
        <View style={styles.Data}> 
        <Feather name="calendar" size={35} color= 'rgb(252, 160, 0)' /> 
            <Text style={styles.TextoRetangulos}> Última atualização em: {dataAtual} {horaAtual}</Text>  
        <TouchableOpacity  onPress ={() => searchApi()} onPress ={() => searchData()}>
          <Feather name='refresh-ccw' size={35} color = 'rgb(252,160,0)'/>
        </TouchableOpacity>
        </View>
        <View style={styles.Retangulo}> 
        <Feather name="sun" size={35} color= 'rgb(252, 160, 0)' /> 
        
            <Text style={styles.TextoRetangulos}>{results} UV </Text>  
        </View>
        <View style={styles.Recomendações}>
        <Feather name="alert-triangle" size={50} color= 'red' /> 
                <Text style={styles.TextoRetangulos}>Incidência de raios UV MUITO ALTA! </Text>
                <Text style={styles.TextoRetangulos}>Se proteja com </Text>
                <View style ={styles.imagens}>
                <RecommendationLogo
                    title="protetor"
                    imageToShow={require('../../assets/protetor.png')}
                     />
                <RecommendationLogo
                    title="camisa"
                    imageToShow={require('../../assets/camisa.png')}
                     />
                <RecommendationLogo
                    title="bone"
                    imageToShow={require('../../assets/bone.png')}
                     />
                <RecommendationLogo
                    title="oculos"
                    imageToShow={require('../../assets/oculos.png')}
                     />
                <RecommendationLogo
                    title="guarda-sol"
                    imageToShow={require('../../assets/guardasol.png')}
                     />
 
                </View>
        </View> 
      
        </View>
        <View style={styles.MenuInferior}>
        <TouchableOpacity 
        onPress ={() => navigation.navigate('Editar')}> 
        <Feather name="user" size={35} color="white" />
        </TouchableOpacity>
        <TouchableOpacity> 
        <Feather name="home" size={35} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress ={() => navigation.navigate('Grafico')}> 
        <Feather name="bar-chart-2" size={35} color="white" />
        </TouchableOpacity>
        </View>
      </View>
  )
}else if (results >=11 ){
  console.log("EXTREMO")

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
        <LogoDetailMenor 
                    title="SVUV"
                    imageToShow={require('../../assets/logo_branco.png')}
                
            />
        </View>
        <View style={styles.Retangulos}>
        <View style={styles.Bateria}>
        <Feather name="battery" size={35} color= 'rgb(252, 160, 0)' />
        <Text style={styles.TextoRetangulos}>{bateria} </Text>  
        </View>
        <View style={styles.Data}> 
        <Feather name="calendar" size={35} color= 'rgb(252, 160, 0)' /> 
            <Text style={styles.TextoRetangulos}> Última atualização em {dataAtual} {horaAtual}</Text>  
        <TouchableOpacity  onPress ={() => searchApi()} onPress ={() => searchData()}>
          <Feather name='refresh-ccw' size={35} color = 'rgb(252,160,0)'/>
        </TouchableOpacity>
        </View>
        <View style={styles.Retangulo}> 
        <Feather name="sun" size={35} color= 'rgb(252, 160, 0)' /> 
        
            <Text style={styles.TextoRetangulos}>{results} UV </Text>  
        </View>
        <View style={styles.Recomendações}>
        <Feather name="alert-triangle" size={50} color= 'red' /> 
                <Text style={styles.TextoRetangulos}>Incidência de raios UV EXTREMO! </Text>
                <Text style={styles.TextoRetangulos}>Se proteja com </Text>
                <View style ={styles.imagens}>
                <RecommendationLogo
                    title="protetor"
                    imageToShow={require('../../assets/protetor.png')}
                     />
                <RecommendationLogo
                    title="camisa"
                    imageToShow={require('../../assets/camisa.png')}
                     />
                <RecommendationLogo
                    title="bone"
                    imageToShow={require('../../assets/bone.png')}
                     />
                <RecommendationLogo
                    title="oculos"
                    imageToShow={require('../../assets/oculos.png')}
                     />
                <RecommendationLogo
                    title="guarda-sol"
                    imageToShow={require('../../assets/guardasol.png')}
                     />
                <RecommendationLogo
                    title="casa"
                    imageToShow={require('../../assets/casa.png')}
                     />
                </View>
               
        </View> 


        </View>
        <View style={styles.MenuInferior}>
        <TouchableOpacity 
        onPress ={() => navigation.navigate('Editar')}> 
        <Feather name="user" size={35} color="white" />
        </TouchableOpacity>
        <TouchableOpacity> 
        <Feather name="home" size={35} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress ={() => navigation.navigate('Grafico')}> 
        <Feather name="bar-chart-2" size={35} color="white" />
        </TouchableOpacity>
        </View>
      </View>
  )
}
}


const styles = StyleSheet.create({



  viewStyle:{
      
     
      borderColor: 'rgb(252, 160, 0)k' ,
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
  imagens: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',

  },

  logo:{
    width: 410,
    height: 30,

  },
  TextoRetangulos:{
      fontSize:20,
      color: 'black',
      fontFamily: 'normal',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight:'bold',
  },

  Retangulo:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgb(252, 160, 0)',
    backgroundColor: 'white',
    paddingHorizontal:5,
    width:350,
    height: 70,
    fontSize: 20,
    marginHorizontal:40,
    marginVertical:11,
    margin: 10,
    borderRadius: 20,
    
   
  },
  Data:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgb(252, 160, 0)',
    backgroundColor: 'white',
    paddingHorizontal:20,
    width:350,
    height: 80,
    fontSize: 20,
    marginHorizontal:40,
    marginVertical:11,
    margin: 10,
    borderRadius: 20,
    
   
  },
   TextoOLA:{
    textAlign:'center',
    fontSize:35,
    color: 'black',
    fontFamily: 'normal',
    justifyContent: 'center',
    alignItems: 'center',
},
TextoMedicao:{
  textAlign:'center',
  fontSize:20,
  color: 'black',
  fontFamily: 'normal',
  justifyContent: 'center',
  alignItems: 'center',
},
  OLA:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
   // borderWidth: 2,
   // borderColor: 'rgb(252, 160, 0)',
    backgroundColor: 'white',
    paddingHorizontal:20,
    width:350,
    height: 80,
    fontSize: 20,
    marginHorizontal:40,
    marginVertical:11,
    margin: 10,
    borderRadius: 50,
  },
  medicao:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgb(252, 160, 0)',
    backgroundColor: 'white',
    paddingHorizontal:20,
    width:350,
    height: 80,
    fontSize: 20,
    marginHorizontal:40,
    marginVertical:11,
    margin: 10,
    borderRadius: 50,
    
   
  },
  Bateria:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgb(252, 160, 0)',
    backgroundColor: 'white',
    paddingHorizontal:20,
    width:350,
    height: 50,
    fontSize: 20,
    marginHorizontal:40,
    marginVertical:11,
    margin: 10,
    borderRadius: 20,
    
   
  },
  inicial:{
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    marginLeft:10,
    marginTop:220,
    height: 300,

  },
  Retangulos:{
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    marginLeft:10,
    marginTop:110,

  },
  Recomendações:{

    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgb(252, 160, 0)',
    backgroundColor: 'white',
    padding: 10,
    width:350,
    height: 250,
    fontSize: 20,
    marginHorizontal:40,
    marginVertical:11,
    margin: 10,
    borderRadius: 20,
  },
  Grafico:{

    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'rgba(252, 160, 0, 0.25)',
    paddingHorizontal:5,
    width:350,
    height: 100,
    fontSize: 20,
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
    marginTop:680,
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
    alignItems: 'center'
}

})


export default PrincipalScreen;