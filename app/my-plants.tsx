import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { addPlant as addPlantAPI, getPlants, deletePlant } from '../src/services/api'; 

const plantTypes = [
  "Aloe Vera", "Yucca", "Domates", "Patlıcan", "Kaktüs", "Nane", "Orkide", "Monstera", "Kauçuk Bitkisi",
  "Sukkulent", "Yelken Çiçeği", "Menekşe", "Süsen", "Bonsai", "Paşa Kılıcı", "Elma", "Pancar", "Lahana",
  "Kırmızı Biber", "Havuç", "Maydanoz", "Salatalık", "Turp"
];


type Plant = {
  _id: string;
  userId: string;
  name: string;
  type: string;
  size: string;
  dateAdded: string;
};

export default function MyPlantsPage() {
  const [name, setName] = useState('');
  const [type, setType] = useState(plantTypes[0]);
  const [size, setSize] = useState<'küçük' | 'orta' | 'büyük'>('küçük');
  const [plants, setPlants] = useState<Plant[]>([]);

  const userId = '6810824bfa1e5b47f630c841'; // giriş yapan userId

  useEffect(() => {
    loadPlants();
  }, []);

  const loadPlants = async () => {
    try {
      const res = await getPlants(userId);
      setPlants(res);
    } catch (error) {
      console.error('Bitkiler alınırken hata:', error);
    }
  };

  const handleAddPlant = async () => {
    if (!name.trim()) {
      Alert.alert("Hata", "Lütfen bitki adını girin.");
      return;
    }

    try {
      const newPlant = { name, type, size };
      await addPlantAPI(userId, newPlant);
      Alert.alert("Başarılı", `${name} eklendi!`);
      loadPlants();
      setName('');
      setType(plantTypes[0]);
      setSize('küçük');
    } catch (error) {
      console.error('Bitki eklenirken hata:', error);
      Alert.alert('Hata', 'Bitki eklenirken bir hata oluştu.');
    }
  };

  const handleDeletePlant = async (plantId: string) => {
    try {
      await deletePlant(plantId);
      Alert.alert('Başarılı', 'Bitki silindi.');
      loadPlants(); 
    } catch (error) {
      console.error('Bitki silinirken hata:', error);
      Alert.alert('Hata', 'Bitki silinirken bir hata oluştu.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bitki Ekle</Text>

      <Text>Bitki Adı</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Örn: Menekşe"
      />

      <Text>Bitki Türü</Text>
      <Picker selectedValue={type} onValueChange={(val) => setType(val)}>
        {plantTypes.map((t) => (
          <Picker.Item key={t} label={t} value={t} />
        ))}
      </Picker>

      <Text>Bitki Boyutu</Text>
      <Picker selectedValue={size} onValueChange={(val) => setSize(val)}>
        <Picker.Item label="Küçük" value="küçük" />
        <Picker.Item label="Orta" value="orta" />
        <Picker.Item label="Büyük" value="büyük" />
      </Picker>

      <Button title="Bitkiyi Ekle" onPress={handleAddPlant} />

      <Text style={styles.subtitle}>Eklenen Bitkiler</Text>

      <FlatList
        data={plants}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.plantItem}>
            <View style={{ flex: 1 }}>
              <Text style={styles.plantText}>🌿 {item.name} ({item.type}) - {item.size}</Text>
            </View>
            <Button
              title="Sil"
              color="#D32F2F"
              onPress={() => handleDeletePlant(item._id)}
            />
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>Henüz hiç bitkiniz yok.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
  subtitle: { fontSize: 18, fontWeight: 'bold', marginTop: 24, marginBottom: 8 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 6,
    marginBottom: 12,
  },
  plantItem: {
    backgroundColor: '#e9f5ed',
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  plantText: {
    fontSize: 16,
  },
  empty: {
    textAlign: 'center',
    color: 'gray',
    marginTop: 20,
  },
});
