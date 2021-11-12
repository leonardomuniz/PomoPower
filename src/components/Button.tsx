import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { MaterialIcons, AntDesign, FontAwesome5 } from '@expo/vector-icons';

import { styles } from '../styles/globalStyle';

interface IButton {
    buttonText?: string | any;
    buttonFunction?: any;
    iconName?: string | any;
    iconSize?: number;
    iconColor?: string;
}

export default function Button({ buttonFunction, buttonText, iconName, iconSize, iconColor }: IButton) {
    return (
        <TouchableOpacity style={styles.button} onPress={buttonFunction}>
            {buttonText && <Text>{buttonText}</Text>}
            {iconName && <FontAwesome5 name={iconName} size={iconSize} color={iconColor} />}
        </TouchableOpacity>
    )
}

