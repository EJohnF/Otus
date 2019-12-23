import database from '@react-native-firebase/database';
import { ADD_POST, FETCH_POSTS } from '../types';

const ref = database().ref(`/posts`);

export const fetchDatabase = () => async (dispatch) => {
  const snapshot = await ref.once('value');
  // const values = snapshot.val()
  // dispatch({
  //   type: FETCH_POSTS,
  //   list: Object.keys(values).map((item) => ({
  //     id: item,
  //     ...values[item],
  //   }))
  // })

  ref.on('child_added', (newValue) => {
    dispatch({
      type: ADD_POST,
      post: newValue.val()
    })
  })
};

export const cancelSubscription = () => {
  ref.off('child_added')
}

export const submitPost = (text) => async (dispatch) => {
  // const ref = database().ref(`/posts`);
  const post = {
    text,
    image: `https://picsum.photos/id/${Math.round(Math.random() * 250)}/200/200`,
  };
  ref.push(post);
};
