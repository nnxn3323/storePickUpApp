import {View, Text, Image} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {SText} from '../../styled/stext';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import NavigateButton from '../../NavigateButtons/NavigateButton';
import SProfileImage from '../../styled/SProfileImage';
const UserProfileCard = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <BackgroundCard>
        <View
          style={{flex: 1, flexDirection: 'row', margin: 24, marginBottom: 0}}>
          <SProfileImage
            size={100}
            src="https://nnxncdnbucket.s3.ap-northeast-2.amazonaws.com/얼초뉴프로필.jpg"
          />
          <View style={{margin: 12, marginTop: 18}}>
            <SText textSize={36} textWeight={600}>
              손도준
            </SText>
            <SText textSize={24} textWeight={300}>
              11015
            </SText>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            width: '100%',
            height: '50%',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <NavigateButton
            children={<AntDesign name="home" size={40} color="gray" />}
            name="home"
          />
          <NavigateButton
            children={<AntDesign name="arrowright" size={40} color="gray" />}
            name="home"
          />
          <NavigateButton
            children={<AntDesign name="arrowleft" size={40} color="gray" />}
            name="home"
          />
          <NavigateButton
            children={<AntDesign name="arrowdown" size={40} color="gray" />}
            name="home"
          />
        </View>
      </BackgroundCard>
    </View>
  );
};

export const BackgroundCard = styled.View`
  align-items: flex-start;
  justify-content: center;
  height: 200px;
  background-color: white;
  border-radius: 25px;
`;

export default UserProfileCard;
