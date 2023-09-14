import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  Dimensions,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const TaskeOne = () => {
  const [image, setImage] = useState(
    'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=',
  );

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

  const takePhoto = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      compressImageQuality: 1.0,
    }).then(image => {
      setImage(image.path || '');
    });
  };
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
          }}></ImageBackground>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Choose Photo" onPress={() => choosePhoto()} />
        <Button title="Take Photo" onPress={() => takePhoto()} />
      </View>
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
    height: '95%',
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

export default TaskeOne;
