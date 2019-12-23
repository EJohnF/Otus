import { Icon, Image } from 'react-native-elements';
import React, { useCallback, useState } from 'react';
import { ActivityIndicator, Dimensions, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const { width } = Dimensions.get('window')

const options = {
  title: 'Select Image',
  customButtons: [{ name: 'image', title: 'Some meaningless button' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export const ImagePickerComponent = () => {
  const [ newImage, setNewImage ] = useState(null);
  const pickImage = useCallback(() => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        setNewImage(source)
      }
    });
  }, [setNewImage])
  return (
    <>
      <Icon
        name='camera'
        type='font-awesome'
        color='#000000'
        onPress={pickImage}
      />
      {newImage && (
        <TouchableOpacity onPress={() => setNewImage()}>
          <Image
            style={{width, height: 300}}
            source={newImage}
            resizeMode="cover"
            PlaceholderContent={<ActivityIndicator size="large" />}
          />
        </TouchableOpacity>
        )}
    </>
  )
}
