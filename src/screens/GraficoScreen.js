import React from 'react';
import {useState} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, SegmentedControlIOSBase} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons'; 
import LogoDetailMenor from '../components/LogoDetailMenor';
import userService from '../../services/UsuarioServices';
import { LineChart, YAxis, XAxis, Grid } from 'react-native-svg-charts'
import GraficoDetail from '../components/GraficoDetail';
import banco from '../api/banco';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';
import { Picker } from '@react-native-picker/picker'

        
//const data = [5 , 6 , 7 , 8 , 2 , 3 , 1]

const GraficoScreen = ({navigation}) => {
    const[selectedValue,setSelectedValue] =useState('hoje')
    const data = [1,2,3,4,5,6,7,8,9,10]
    const contentInset = { top: 20, bottom: 20 }

    

//Dados de hoje
const[dadosHoje, setDados] = useState('');
const[horasHoje, setHorasHoje] = useState('');
const getApiHoje = async () => {
const response = await banco.get('/graph/one_day/0');
response.data.value_list.reverse();
response.data.time_list.reverse()
//console.log(response.data.value_list);
setDados(response.data.value_list);
setHorasHoje(response.data.time_list)
};
//console.log(dadosHoje)


//Dados Ontem
const[dadosOntem, setDadosOntem] = useState('');
const getApiOntem = async () => {
const response = await banco.get('/graph/one_day/1');
response.data.value_list.reverse();
//console.log(response.data.value_list);
setDadosOntem(response.data.value_list);
};
//console.log(dadosOntem)


//Dados 7 dias
const[dados7 ,setDados7] = useState('');
const[dias7, setDias7] =useState ('');
const getApi7 = async () => {
const response = await banco.get('/graph/max_uv/7');
response.data.value_list.reverse();
response.data.time_list.reverse();
//console.log(response.data.value_list);
setDados7(response.data.value_list);
setDias7(response.data.time_list);

};




//Dados 15 dias
const[dados15, setDados15] = useState('');
const getApi15 = async () => {
const response = await banco.get('/graph/max_uv/15');
response.data.value_list.reverse();
//console.log(response.data.value_list);
setDados15(response.data.value_list);
};


//Dados 30 dias 
const[dados30, setDados30] = useState('');
const getApi30 = async () => {
const response = await banco.get('/graph/max_uv/30');
response.data.value_list.reverse();
//console.log(response.data.value_list);
setDados30(response.data.value_list);
};


 const getApis = () =>  {
  getApi15();
  getApi30();
  getApiHoje();
  getApiOntem();
 getApi7();
};


/*
getApiHoje();
getApiOntem();
getApi7();
getApi15();
getApi30();*/

  return(
 
     
      <View style={styles.viewStyle}>
      <LinearGradient
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

    <View style={styles.container}>
      
      <Picker style={styles.picker}
        selectedValue={selectedValue}
        
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        prompt={"Escolha o período que deseja:"}
        
      >
        <Picker.Item label="Hoje" value="hoje" />
        <Picker.Item label="Ontem" value="ontem" />
        <Picker.Item label="Últimos 7 dias" value="seteDias" />
        <Picker.Item label="Últimos 15 dias" value="quinzeDias" />
        <Picker.Item label="Últimos 30 dias" value="trintaDias" />
      </Picker> 
      
      
      { selectedValue === 'seteDias' &&
       
       

       <>
       <Text style={styles.titulo}>Últimos 7 dias</Text>
       <View style={styles.grafico}>
            <YAxis
              data={dados7}
              contentInset={contentInset}
              svg={{
                fill: 'grey',
                fontSize: 15,
              }}
              numberOfTicks={10}
              formatLabel={(value) => `${value} UV`} />
            <LineChart
              style={{ flex: 1, marginLeft: 16}}
              data={dados7}
              svg={{ stroke: '#017889' }}
              contentInset={contentInset}
            >
              <Grid />
            </LineChart>
          
          </View></>
            }
      
      
     { selectedValue === 'quinzeDias' &&
      <> 
            <>
            <Text style={styles.titulo}>Últimos 15 dias</Text>
            <View style={styles.grafico}>
              <YAxis
                data={dados15}
                contentInset={contentInset}
                svg={{
                  fill: 'grey',
                  fontSize: 15,
                }}
                numberOfTicks={10}
                formatLabel={(value) => `${value} UV`} />
              <LineChart
                style={{ flex: 1, marginLeft: 16 }}
                data={dados15}
                svg={{ stroke: '#017889' }}
                contentInset={contentInset}
              >
                <Grid />
              </LineChart>
            </View></></>
      
      }
       { selectedValue === 'trintaDias' &&
      <><>
      <Text style={styles.titulo}>Últimos 30 dias</Text>
      <View style={styles.grafico}>
            <YAxis
              data={dados30}
              contentInset={contentInset}
              svg={{
                fill: 'grey',
                fontSize: 15,
              }}
              numberOfTicks={10}
              formatLabel={(value) => `${value} UV`} />
            <LineChart
              style={{ flex: 1, marginLeft: 16 }}
              data={dados30}
              svg={{ stroke: '#017889' }}
              contentInset={contentInset}
            >
              <Grid />
            </LineChart>
          </View></></>
      
      }
       { selectedValue === 'hoje' &&
       <><Text style={styles.titulo}>Hoje</Text><View style={styles.grafico}>
            <YAxis
              data={dadosHoje}
              contentInset={contentInset}
              svg={{
                fill: 'grey',
                fontSize: 15,
              }}
              numberOfTicks={10}
              formatLabel={(value) => `${value} UV`} />
            <LineChart
              style={{ flex: 1, marginLeft: 16 }}
              data={dadosHoje}
              svg={{ stroke: '#017889' }}
              contentInset={contentInset}
            >
              <Grid />
            </LineChart>

          </View></>
         
    }
     { selectedValue === 'ontem' &&
     
      <><><Text style={styles.titulo}>Ontem</Text>
      <View style={styles.grafico}>
            <YAxis
              data={dadosOntem}
              contentInset={contentInset}
              svg={{
                fill: 'grey',
                fontSize: 15,
              }}
              numberOfTicks={10}
              formatLabel={(value) => `${value} UV`} />
            <LineChart
              style={{ flex: 1, marginLeft: 16 }}
              data={dadosOntem}
              svg={{ stroke: '#017889' }}
              contentInset={contentInset}
            >
              <Grid />
            </LineChart>
          </View></></>
         
    }
      
    </View>
    

   <TouchableOpacity style={styles.medir}  onPress ={ () => getApis() }>
      <Text style={styles.medirTexto}>MEDIR</Text>
     
      </TouchableOpacity>

      <TouchableOpacity style={styles.atualizar}  onPress ={() => getApis()} >
          <Feather name='refresh-ccw' size={35} color = '#017889'/>
        </TouchableOpacity>


    <View style={styles.MenuInferior}>
    <TouchableOpacity 
     onPress ={() => navigation.navigate('Editar')}> 
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
   )
   

}





const styles = StyleSheet.create({



  viewStyle:{
      
     
      borderColor: 'rgb(252, 160, 0)k' ,
      alignItems: 'center' ,
      //justifyContent: 'space-around',
      
      //backgroundColor: '' ,
      ...StyleSheet.absoluteFillObject,
    

  },
  picker: {
    height: 50, 
    width: 200 ,
    fontSize: 50,
    color: 'white',
    
   

  },

  titulo: {

    top: 40,
    left: 80,
    fontSize: 28,
    fontWeight: 'bold',
    color: 'orange',
    width: 300
  },
  medir: {
    position: 'absolute',
    top: 80,
    left: 280,
    height: 50,
    width: 100,
    borderRadius:20,
    paddingTop: 0,
    backgroundColor: 'orange',
    alignItems: "center",
    justifyContent:'center',
    borderColor: 'orange',
    borderWidth: 3,

    
  },
  medirTexto:{
    fontWeight:'bold',
    color:'white',
    fontSize: 20
  },

  atualizar:{
    position: 'absolute',
    top: 180,
    left: 320
  },
 
  grafico :{
    height: 400,
    width:320, 
    flexDirection: 'row' ,
    position: 'absolute',
    top:140,
    left: 20,
    
  },
  container: {
    
    paddingTop: 0,
    alignItems: "center",
    borderColor: 'orange',
    borderWidth: 3,
    position: 'absolute',
    backgroundColor: 'orange',
    top: 80,
    left:20,
    height: 50,
    width: 200,
    borderRadius:20,
    fontSize: 50
    
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
    alignItems: 'center',
},
Voltar:{
    position: 'absolute',
    marginLeft:-140,
    marginTop:0,

  },

});

export default GraficoScreen;

