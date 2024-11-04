import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, TextInput } from './Themed';
import { Card } from 'react-native-paper';


interface Props {
    onSubmit: (name: string) => void;
}

export default function AddCategoryForm({ onSubmit}: Props) {
    const [name, setName] = useState('');

    return (
        <Card style={styles.container}>
            <TextInput
                value={name}
                onChangeText={setName}
            />
            <Button 
                title='Publicar'
                onPress={() => {
                    onSubmit(name)
                    setName('')
                }}
            />
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 16,
    },
})