import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import { useState } from 'react';

interface CustomInputProps {
  /** The initial value to display in the input field. */
  value?: string;
  /** The value to set when the text changes. Can be a function that receives the new text or a direct string value. */
  onChangeText: string | ((text: string) => void);
  /** The placeholder text to display when the input is empty. */
  placeholder?: string;
  /** Whether to obscure the input text (like for passwords). */
  secureTextEntry?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  value = '', // Set a default empty string value
  onChangeText,
  placeholder,
  secureTextEntry = false, // Set a default for secureTextEntry
}) => {
  const [internalValue, setInternalValue] = useState(value);

  const handleOnChange = (text: string) => {
    setInternalValue(text);
    if (typeof onChangeText === 'function') {
      onChangeText(text);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={internalValue}
        onChangeText={handleOnChange}
        placeholder={placeholder}
        placeholderTextColor="grey"
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};


// export default function CustomInput({valueOf, newValue, placeholder, secureTextEntry}){
//     const[value, setValue] = useState(valueOf);   

//   return (
//     <View style={styles.container}>
//       <TextInput 
//         value= {value}
//         onChangeText={() => setValue(newValue)}
//         placeholder =  {placeholder}
//         placeholderTextColor = {"grey"} 
//         style = {styles.input}
//         secureTextEntry={secureTextEntry}
        
//       />
//     </View>
//   )
// }

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',

        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal: 10,
        marginVertical: 5,
    },
    input: {
        color: 'black',
    },
})

;
export default CustomInput;