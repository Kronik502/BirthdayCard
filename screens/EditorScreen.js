import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';

const EditorScreen = ({ route, navigation }) => {
  const [text, setText] = useState('');
  const [imageUri, setImageUri] = useState(null);

  useEffect(() => {
    loadCardData();
  }, []);

  const loadCardData = async () => {
    try {
      const savedText = await AsyncStorage.getItem('cardText');
      const savedImage = await AsyncStorage.getItem('cardImage');
      if (savedText) setText(savedText);
      if (savedImage) setImageUri(savedImage);
    } catch (error) {
      console.error("Error loading card data:", error);
    }
  };

  const handleSave = async () => {
    try {
      await AsyncStorage.setItem('cardText', text);
      if (imageUri) await AsyncStorage.setItem('cardImage', imageUri);
      Alert.alert('Success', 'Card saved successfully!');
      navigation.goBack();
    } catch (error) {
      console.error("Error saving card:", error);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Your Card ✨</Text>

      <TextInput
        style={styles.textInput}
        placeholder="Enter your message..."
        value={text}
        onChangeText={setText}
      />

      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}

      <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
        <Text style={styles.imageButtonText}>📸 Pick an Image</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>💾 Save Card</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8F9FA',
    alignItems: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  textInput: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    marginBottom: 15,
    fontSize: 16,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  imageButton: {
    backgroundColor: '#03A9F4',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  imageButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  saveButton: {
    backgroundColor: '#6200EE',
    padding: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditorScreen;
