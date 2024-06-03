import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface CustomButtonProps {
  /** Function to be called on button press. */
  onPress: () => void;
  /** Text to be displayed on the button. */
  text: string;
  /** Button type (PRIMARY, SECONDARY, TERTIARY). */
  type?: 'PRIMARY' | 'SECONDARY' | 'TERTIARY';
  /** Background color of the button. Overrides default styles. */
  bgColor?: string;
  /** Text color of the button. Overrides default styles. */
  fgColor?: string;
}


const CustomButton: React.FC<CustomButtonProps> = ({ 
  onPress, text, type='PRIMARY', bgColor, fgColor 
}) => {
  const textStyle = type === 'PRIMARY'
  ? styles.text_PRIMARY
  : type === 'SECONDARY'
    ? styles.text_SECONDARY
    : styles.text_TERTIARY;

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
      ]}
    >
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? { color: fgColor } : {},
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

// export default function CustomButton({onPress, text, type="PRIMARY", bgColor, fgColor}) {
//   return (
//     <Pressable 
//       onPress={onPress} 
//       style={[
//         styles.container, 
//         styles[`container_${type}`],
//         bgColor ? {backgroundColor: bgColor} : {}
//       ]}>
//       <Text 
//         style={[
//             styles.text, 
//             styles[`text_${type}`],
//             fgColor ? {color: fgColor} : {}
//         ]}>{text}
//         </Text>
//     </Pressable>
//   )
// }

const styles = StyleSheet.create({
    container: {   
        width: '100%',

        padding: 15,
        marginVertical: 5,

        alignItems: 'center',
        borderRadius: 5,
    },
    container_PRIMARY: {
        backgroundColor: '#3B71F3',
    },
    container_SECONDARY: {
      borderColor: '#3B71F3',
      borderWidth: 2
    },
    container_TERTIARY: {},
    text: {
        fontWeight: 'bold',
        color: 'white',
    },
    text_PRIMARY: {},
    text_SECONDARY: {
      color: '#3B71F3',
    },
    text_TERTIARY: {
        color: 'gray',
    },
})

export default CustomButton;