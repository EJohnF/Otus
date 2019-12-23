import React from 'react';
import {
  KeyboardAvoidingView,
  Keyboard,
  SafeAreaView,
  TouchableWithoutFeedback,
  View, ScrollView
} from 'react-native';
import { Button } from 'react-native-elements';

import { Post } from './Components/Post';
import { Like } from './Components/Like';
import { Comment } from './Components/Comment';
import { ImagePickerComponent } from './Components/ImagePicker';

export const MainScreen = () => (
    <SafeAreaView >
      <KeyboardAvoidingView behavior='position' >
        <ScrollView keyboardShouldPersistTaps='always'>
          <>
            <ImagePickerComponent/>
            <Post/>
            <Like/>
            <Comment />
            <Button title="Your action" />
          </>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
