import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const TaskTwo = () => {
  const [image, setImage] = useState('');

  const choosePhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      compressImageQuality: 1.0,
    }).then(image => {
      setImage(image.path || '');
    });
  };

  //   const takePhoto = () => {
  //     ImagePicker.openCamera({
  //       width: 300,
  //       height: 400,
  //       cropping: true,
  //       compressImageQuality: 1.0,
  //     }).then(image => {
  //       setImage(image.path || '');
  //     });
  //   };
  return (
    <View style={styles.container}>
      <View style={styles.photoContainer}>
        <ImageBackground
          source={{
            uri: image,
          }}
          resizeMode="contain"
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => choosePhoto()}
            style={{
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              //   backgroundColor: 'pink',
            }}>
            {!image ? <Text style={{color: 'red', fontSize: 50}}>+</Text> : ''}
          </TouchableOpacity>
        </ImageBackground>
      </View>
      {/* <View style={styles.buttonContainer}>
        <Button title="Choose Photo" onPress={() => choosePhoto()} />
        <Button title="Take Photo" onPress={() => takePhoto()} />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  photoContainer: {
    backgroundColor: 'white',
    height: '30%',
    borderWidth: 2,
    borderColor: '#000',
    borderStyle: 'dashed',
  },

  buttonContainer: {
    height: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default TaskTwo;
