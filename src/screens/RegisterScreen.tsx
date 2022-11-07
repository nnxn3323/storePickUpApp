import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {AuthContext} from '../context/AuthProvider';
import {SContainer} from '../components/styled/SContainter';
import InputField from '../components/InputField/InputField';
import SButton from '../components/styled/SButton';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SText} from '../components/styled/stext';
import Loader from '../components/Loading/Loader';
import {fetchClient} from '../lib/client';
import {useRecoilState} from 'recoil';
import {isLoadingSomething} from '../components/Atom/atoms';
export type AuthStackParamList = {
  Login: {};
  Register: {};
};
const LoginScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const [focusInput, setFocusInput] = useState<boolean>(false);
  const [focusPwd, setFocusPwd] = useState<boolean>(false);
  const [focusUname, setFocusUname] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [isL, setL] = useRecoilState(isLoadingSomething);
  return (
    <SContainer>
      <SafeAreaView
        style={{flex: 1, justifyContent: 'center'}}
        onTouchStart={() => {
          setFocusInput(false);
          setFocusPwd(false);
        }}>
        <View style={{paddingHorizontal: 24}}>
          <Text
            style={{
              fontSize: 36,
              fontWeight: '500',
              color: '#333',
              marginBottom: 30,
              textAlign: 'center',
            }}>
            로그인
          </Text>

          <View>
            <SText textWeight={400} textSize={16}>
              아이디
            </SText>
            <View
              style={{
                flexDirection: 'row',
                borderBottomColor: focusInput ? '#6366f1' : '#ccc',
                borderBottomWidth: 1,
                paddingBottom: 8,
                marginBottom: 24,
                height: 48,
              }}>
              <TextInput
                placeholder="아이디"
                onBlur={() => setFocusInput(false)}
                onFocus={() => setFocusInput(true)}
                style={{flex: 1, paddingVertical: 0, fontSize: 24}}
                value={userId}
                onChangeText={a => setUserId(a)}
                caretHidden={focusInput ? false : true}
              />
            </View>
          </View>
          <View>
            <SText textWeight={400} textSize={16}>
              password
            </SText>
            <View
              style={{
                flexDirection: 'row',
                borderBottomColor: focusPwd ? '#6366f1' : '#ccc',
                borderBottomWidth: 1,
                paddingBottom: 8,
                marginBottom: 24,
                height: 48,
              }}>
              <TextInput
                placeholder="비밀번호"
                onBlur={() => setFocusPwd(false)}
                onFocus={() => setFocusPwd(true)}
                clearTextOnFocus={true}
                style={{flex: 1, paddingVertical: 0, fontSize: 24}}
                secureTextEntry={true}
                value={password}
                onChangeText={a => setPassword(a)}
                caretHidden={focusPwd ? false : true}
              />
            </View>
          </View>
          <View>
            <SText textWeight={400} textSize={16}>
              이름
            </SText>
            <View
              style={{
                flexDirection: 'row',
                borderBottomColor: focusUname ? '#6366f1' : '#ccc',
                borderBottomWidth: 1,
                paddingBottom: 8,
                marginBottom: 24,
                height: 48,
              }}>
              <TextInput
                placeholder="이름"
                onBlur={() => setFocusUname(false)}
                onFocus={() => setFocusUname(true)}
                clearTextOnFocus={true}
                style={{flex: 1, paddingVertical: 0, fontSize: 24}}
                value={username}
                onChangeText={a => setUsername(a)}
                caretHidden={focusUname ? false : true}
              />
            </View>
          </View>
          <SButton
            text="가입하기"
            disabled={isL || !(userId || password || username)}
            onPress={async () => {
              try {
                setL(true);
                await fetchClient.post('/api/auth/register', {
                  username,
                  userId,
                  password,
                });
                setL(false);
              } catch {
                setL(false);
              }
            }}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 24,
              marginTop: 12,
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('Login', {})}>
              <SText textWeight={700} textSize={18} textColor="#6366f1">
                로그인하기
              </SText>
            </TouchableOpacity>
          </View>
        </View>
        {isL ? <Loader /> : null}
      </SafeAreaView>
    </SContainer>
  );
};

export default LoginScreen;
