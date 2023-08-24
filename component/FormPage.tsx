import React, { useState } from 'react';
import axios from 'axios'
import { View, Text, TextInput, Button } from 'react-native';

const FormPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    axios.post('http://localhost:5000/api/',{
        "Name":name,
        "Email":email
    })
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10, width: 200 }}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10, width: 200 }}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default FormPage;
