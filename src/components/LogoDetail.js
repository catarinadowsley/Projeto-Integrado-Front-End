import React from 'react';
import { View, Text, StyleSheet , Image} from 'react-native';


const LogoDetail = ({imageToShow , title , score}) =>{

    return (
        <View>
            <Image 
            style = {styles.image}
            source ={imageToShow}/>

            
                    
        </View>
    );
};


const styles = StyleSheet.create({
    image: {
        width: 120,
        height: 120,
        
        alignItems:'center'        
        

     
        
   
        
    }
});


export default LogoDetail;