import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from '../../styles/globalStyle';

interface ITodoItem {
    id: number;
    value: string;
}

export default function ToDoList() {
    const { colors } = useTheme();

    const [list, setList] = useState<ITodoItem[]>([{ id: Date.now(), value: 'primeira tarefa' }]);
    const [text, setText] = useState<string>('');

    async function handleAdd() {
        const addTask = [...list, { id: Date.now(), value: text }];

        if (text !== '') {
            setList(addTask);
        };

        setText('');

        await AsyncStorage.setItem('@toDoList', JSON.stringify(addTask));
    };

    async function handleDelete(id: ITodoItem['id']) {
        const removeTask = list.filter(item => item.id !== id);

        setList(removeTask);

        await AsyncStorage.setItem('@toDoList', JSON.stringify(removeTask));
    };


    useEffect(() => {
        (async () => {
            const toDos: any = await AsyncStorage.getItem('@toDoList');

            toDos === null ? null: setList(JSON.parse(toDos));
            
        })();
    }, []);

    return (
        <View style={styles.toDoList}>
            <ScrollView style={styles.toDos}>
                {list.map((item, index) => (
                    <TouchableOpacity key={item.id} onPress={() => handleDelete(item.id)} style={{
                        marginLeft: '2.5%',
                        marginTop: '2%',
                        padding: 15,
                        width: '95%',
                        backgroundColor: colors.notification,
                        borderRadius: 5
                    }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: colors.text }}>{item.value}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <View >
                <View style={styles.showCase}>
                    <TouchableOpacity style={styles.button} onPress={() => handleAdd()}>
                        <FontAwesome name="plus" size={24} color={colors.primary} />
                    </TouchableOpacity>
                    <TextInput
                        style={{
                            fontSize: 20,
                            backgroundColor: colors.notification,
                            color: colors.text,
                            paddingVertical: 2,
                            paddingHorizontal: 15, width: '75%',
                            borderRadius: 5
                        }}
                        placeholderTextColor={colors.text}
                        value={text}
                        onChangeText={setText}
                    />
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
};