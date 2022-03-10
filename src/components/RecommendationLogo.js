import React from 'react';
import { View, Text, StyleSheet , Image} from 'react-native';

const RecommendationLogo = ({imageToShow , title , score}) =>{
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
        width: 50,
        height: 50,        
        alignItems:'center' ,
        borderRadius:5       ,
               
    }
});

export default RecommendationLogo;