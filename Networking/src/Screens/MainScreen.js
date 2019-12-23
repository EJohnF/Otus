import React, {useEffect} from 'react';
import { FlatList, Text, Image, View, TextInput } from 'react-native'
import {connect} from 'react-redux';
import { fetchMoreBeer, setFilterName } from '../core/actions/beer';

const Beer = (props) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      {props.beer.image_url && (
        <Image
          style={{width: 140, height: 140, resizeMode: 'contain'}}
          source={{uri: props.beer.image_url}}/>)}
      <Text>{props.beer.name}</Text>
    </View>
  )
}

const MainScreen = (props) => {
  useEffect(() => {
    props.fetchMore()
  }, [])
  return (
    <>
      <TextInput
        style={{height: 60}}
        placeholder="filter by name"
        onSubmitEditing={(e) => {
          props.setFilterName(e.nativeEvent.text)
        }}/>

       <TextInput
         style={{height: 60}}
         placeholder="filter by brew-after" />
      <FlatList
        data={props.list}
        onEndReached={props.fetchMore}
        keyExtractor={(item) => item?.id?.toString()}
        renderItem={({index, item}) => <Beer beer={item}/>}
        style={{flex: 1}}/>
    </>
  )
};

const mapState = (state) => ({
    list: state.list,
});

const mapAction = (dispatch) => ({
  fetchMore: () => dispatch(fetchMoreBeer()),
  setFilterName: (name) => dispatch(setFilterName(name))
});

export default connect(mapState, mapAction)(MainScreen)


