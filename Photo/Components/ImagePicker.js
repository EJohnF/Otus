import React, {useState, useCallback} from 'react';
import {Image, View, TouchableOpacity, Text} from 'react-native';
import ImagePickerLib from 'react-native-image-picker';
import ImageResizer from 'react-native-image-resizer';

// More info on all the options is in the API Reference... just some common use cases shown here
const options = {
  title: 'Select Image',
  customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export const ImagePicker = () => {
  const [image, setImage] = useState(undefined);
  const pickImage = useCallback(() => {
    ImagePickerLib.launchCamera(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        console.log(response);
        const source = {uri: response.uri};
        setImage(source);
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        // you can compress image
        ImageResizer.createResizedImage(
          response.uri,
          response.width / 6,
          response.height / 6,
          'JPEG',
          5,
        ).then(compressed => {
          const now = String(Date.now());
          const source = {
            uri: compressed.uri,
            width: response.width / 4,
            height: response.height / 4,
            name: `${now}.jpg`,
          };
          setImage(source);
        });
      }
    });
  }, []);
  return (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity
        onPress={pickImage}
        style={{backgroundColor: 'green', padding: 24}}>
        <Text>Select Image</Text>
      </TouchableOpacity>
      {image && <Image source={image} style={{width: 300, height: 300}} />}
    </View>
  );
};

/*
Чтобы обпрвить изображение на сервер необходимо:

const createFormData = (photo, body) => {
  const data = new FormData();

  data.append("photo", {
    name: photo.fileName,
    type: photo.type,
    uri:
      Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
  });

  Object.keys(body).forEach(key => {
    data.append(key, body[key]);
  });

  return data;
};

handleUploadPhoto = () => {
  fetch("http://localhost:3000/api/upload", {
    method: "POST",
    body: createFormData(this.state.photo, { userId: "123" })
  })
    .then(response => response.json())
    .then(response => {
      console.log("upload succes", response);
      alert("Upload success!");
      this.setState({ photo: null });
    })
    .catch(error => {
      console.log("upload error", error);
      alert("Upload failed!");
    });
};
 */
