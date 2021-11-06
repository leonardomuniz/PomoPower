import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import {styles} from '../styles/globalStyle';

interface IButton {
    buttonText: string | any;
    buttonFunction?: any;
}

export default function Button({ buttonFunction, buttonText }: IButton) {
    return (
        <TouchableOpacity style={styles.button} onPress={buttonFunction}>
            {<Text style={styles.buttonText}>{buttonText}</Text>}
        </TouchableOpacity>
    )
}

