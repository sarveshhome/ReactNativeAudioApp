import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from './styles';
import AudioSlider from './src/AudioSlider';
import AudioFile from './assets/counting.m4a';


export default function App() {
 const pathfileurl = 'https://ia800204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act1_shakespeare.mp3';
  return (
     
        <View style={[styles.StandardContainer, {
                flex: 0,
                flexDirection: "column",
                justifyContent: "flex-start",
                marginTop: 100,
                marginBottom: 5,
            }]}>

            <View style={{
                flex: 0,
                flexDirection: "row",
                justifyContent: "space-between",
                }}>

                <Text style={[styles.StandardText, {flex: 5}]}>
                    Audio name
                </Text>

                <TouchableOpacity 
                    style={[{flex: 1}]}
                >
                    <Text style={styles.StandardText}>Edit</Text>
                </TouchableOpacity>
                

            </View>

            <AudioSlider audio={pathfileurl}/>

        </View>
  );
}
