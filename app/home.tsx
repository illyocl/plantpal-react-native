import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from 'expo-router';

export default function HomePage() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>PlantPal</Text>

      {/* Search Button */}
      <TouchableOpacity style={styles.searchButton} onPress={() => navigation.navigate('search' as never)}>
        <Text style={styles.searchButtonText}>Hangi bitkiye bakım yapmak istiyorsunuz?</Text>
      </TouchableOpacity>

      {/* Saved Plants */}
      <Text style={styles.sectionTitle}>Kaydedilmiş Bitkileriniz</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {['Aloe Vera', 'Kaktüs', 'Yucca'].map((plant) => (
          <View key={plant} style={styles.plantCard}>
            <Text style={styles.plantName}>{plant}</Text>
            <Text style={styles.plantDate}>Sulama: 22.12.2024</Text>
            <Text style={styles.plantDate}>Gübreleme: 01.01.2025</Text>
            <Text style={styles.plantDate}>Toprak Değişimi: 01.01.2025</Text>
          </View>
        ))}
      </ScrollView>

      {/* Popular Plants */}
      <Text style={styles.sectionTitle}>Popüler Bitkiler</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {[
          { name: 'Monstera', image: 'https://ideacdn.net/idea/lo/88/myassets/products/248/2fe0d9b8-3d48-4ea8-bd2a-0d772044e5d1.JPG?revision=1705945055' },
          { name: 'Orkide', image: 'https://cdn.cicekmarket.com/cicek-resim/l/cm717.jpg' },
          { name: 'Kauçuk', image: 'https://cdn.myikas.com/images/1bd9ce94-24d0-4dd9-a116-9f46a272aad2/0225b52f-a18b-448d-a633-ffe7aaa54776/3840/ek-gorseller-eticaret-gorseller-kopyasi-18.webp' }
        ].map((plant) => (
          <View key={plant.name} style={styles.popularCard}>
            <Image source={{ uri: plant.image }} style={styles.plantImage} />
            <Text style={styles.popularPlantName}>{plant.name}</Text>
            <Text style={styles.plantDetails}>☀️ Işık: Orta</Text>
            <Text style={styles.plantDetails}>🌡️ Sıcaklık: 5°C</Text>
            <Text style={styles.plantDetails}>💧 Su İhtiyacı: 3/5</Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#225B38',
    marginBottom: 16,
  },
  searchButton: {
    backgroundColor: '#225B38',
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  searchButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 17,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  plantCard: {
    backgroundColor: '#e5f5ec',
    padding: 16,
    borderRadius: 12,
    marginRight: 16,
    width: 180,
    height: 130,
    justifyContent: 'center',
  },

  popularCard: {
    backgroundColor: '#f1f1f1',
    borderRadius: 16,
    padding: 12,
    marginRight: 16,
    width: 220,
    height: 260,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  plantImage: {
    width: '100%',
    height: 150,
    borderRadius: 12,
    marginBottom: 8,
  },
  popularPlantName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
    textAlign: 'center',
  },
  plantDetails: {
    fontSize: 13,
    textAlign: 'center',
    color: '#444',
    lineHeight: 18,
  },
  plantName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  plantDate: {
    fontSize: 13,
    color: 'gray',
  },
});
