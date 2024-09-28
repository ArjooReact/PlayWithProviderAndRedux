import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import {ProfileType} from './ProfileType';
import * as Progress from 'react-native-progress';
import {useGetDataQuery, useGetDataByIdQuery} from '../../../api/GetAllApi';

const Profile: React.FC<ProfileType> = () => {
  const {data, isLoading, isFetching} = useGetDataQuery('');

  const state1: any = useSelector(state => {
    return state;
  });

  useEffect(() => {
    console.log('CALLING FROM PROFILE_TAB_COMPONENT')
    console.log('IS_FETCHING_FROM_PROFILES:::',isFetching)
        console.log('IS_LOADING_FROM_PROFILES::',isLoading)
  }, []);
  return (
    <SafeAreaView style={styles.mainContainer}>
      {isFetching ? <Progress.Circle size={30} indeterminate={true} /> : null}

      <Text>{JSON.stringify(data)}</Text>
      <Text>{JSON.stringify(data)}</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});

export default Profile;
