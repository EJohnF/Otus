import React, { useState } from 'react';
import { Input, Text } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';

export const Comment = () => {
  const [comment, setComment] = useState()
  const [currentText, setCurrentText] = useState();
  return (
    <>
      {comment && (
        <Text h4 style={{ alignSelf: 'center'}}>{comment}</Text>
      )}
      <Input
        value={currentText}
        onChangeText={setCurrentText}
        placeholder="Комментарий"
        containerStyle={{ marginBottom: 20}}
        rightIcon={{
          Component:TouchableOpacity,
          onPress: () => {setComment(currentText); setCurrentText('')},
          name: 'sc-telegram',
          type: 'evilicon',
          color: '#517fa4'}}/>
    </>
  )
}
