import React, {useEffect} from 'react';
import { FlatList, Text, Image, View, TextInput } from 'react-native'
import {connect} from 'react-redux';
import { cancelSubscription, fetchDatabase, submitPost } from '../core/actions/database';

const Post = (props) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      {props.item.image && (
        <Image
          style={{width: 140, height: 140, resizeMode: 'contain'}}
          source={{uri: props.item.image}}/>)}
      <Text>{props.item.text}</Text>
    </View>
  )
}

const PostsScreen = (props) => {
  useEffect(() => {
    props.fetchMore()
    return () => {
      cancelSubscription()
    }
  }, [])
  return (
    <>
      <TextInput
        style={{height: 60}}
        placeholder="Enter you post!"
        onSubmitEditing={(e) => {
          props.submitPost(e.nativeEvent.text)
        }}
      />

      <FlatList
        data={props.list}
        keyExtractor={(item) => item?.id?.toString()}
        renderItem={({index, item}) => <Post item={item}/>}
        ItemSeparatorComponent={() => <View style={{height: 8}}/>}
        style={{flex: 1}}/>
    </>
  )
};

const mapState = (state) => ({
  list: state.list,
});

const mapAction = (dispatch) => ({
  fetchMore: () => dispatch(fetchDatabase()),
  submitPost: (text) => dispatch(submitPost(text))
});

export default connect(mapState, mapAction)(PostsScreen)


