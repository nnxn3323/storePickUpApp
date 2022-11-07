import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardTypeOptions,
} from 'react-native';
import {SText} from '../styled/stext';

export default function InputField({
  label,
  inputType,
  keyboardType,
}: {
  label: string;
  inputType?: string;
  keyboardType?: KeyboardTypeOptions;
}) {
  const [focusLine, setIsFocused] = useState<boolean>(false);
  return (
    <View>
      <SText textWeight={400} textSize={16}>
        {label}
      </SText>
      <View
        style={{
          flexDirection: 'row',
          borderBottomColor: focusLine ? '#6366f1' : '#ccc',
          borderBottomWidth: 1,
          paddingBottom: 8,
          marginBottom: 24,
          height: 48,
        }}>
        {inputType == 'password' ? (
          <TextInput
            placeholder={label}
            keyboardType={keyboardType}
            onBlur={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
            clearTextOnFocus={true}
            style={{flex: 1, paddingVertical: 0, fontSize: 24}}
            secureTextEntry={true}
          />
        ) : (
          <TextInput
            placeholder={label}
            keyboardType={keyboardType}
            onBlur={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
            style={{flex: 1, paddingVertical: 0, fontSize: 24}}
          />
        )}
      </View>
    </View>
  );
}
