import { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardTypeOptions,
} from 'react-native'

import { icons } from '../../constants'

interface FormFieldProps {
  title: string
  otherStyles?: string
  handleChangeText: (e: string) => void
  placeholder?: string
  value: string
  keyboardType?: KeyboardTypeOptions
}

const FormField = ({
  value,
  title,
  otherStyles,
  handleChangeText,
  placeholder,
  ...props
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium mb-1">{title}</Text>
      <View className="w-full flex-row items-center h-16 px-4 bg-black-100 rounded-2xl border-black-200 focus: border-secondary">
        <TextInput
          value={value}
          onChangeText={handleChangeText}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          className={`flex-1 text-white font-psemibold text-base ${otherStyles}`}
          secureTextEntry={title === 'Password' && !showPassword}
          {...props}
        />

        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              resizeMode="contain"
              className="h-6 w-6"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField
