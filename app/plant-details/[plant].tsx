import { useLocalSearchParams } from 'expo-router';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { plants } from '../../src/data/plants';



export default function PlantDetailPage() {
  const { plant } = useLocalSearchParams<{ plant: string }>();
  const plantData = plants[plant as keyof typeof plants];

  if (!plantData) {
    return (
      <View style={styles.centered}>
        <Text>Bitki bulunamadı</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{plantData.name}</Text>
      <Image source={{ uri: plantData.image }} style={styles.image} />
      <Text style={styles.description}>{plantData.description}</Text>
      <Text style={styles.info}>💧 Su İhtiyacı: {plantData.water}</Text>
      <Text style={styles.info}>☀️ Işık İhtiyacı: {plantData.light}</Text>
      <Text style={styles.info}>🌿 Ortam: {plantData.environment}</Text>

      {plantData.botanicalName && (
        <Text style={styles.info}>🧬 Botanik Adı: {plantData.botanicalName}</Text>
      )}
      {plantData.soil && (
        <Text style={styles.info}>🪴 Toprak Tipi: {plantData.soil}</Text>
      )}

      {plantData.tips && (
        <>
          <Text style={styles.sectionTitle}>Bakım İpuçları</Text>
          {plantData.tips.map((tip, index) => (
            <Text key={index} style={styles.bullet}>• {tip}</Text>
          ))}
        </>
      )}

      {plantData.pests && (
        <>
          <Text style={styles.sectionTitle}>Zararlılar ve Hastalıklar</Text>
          <View style={styles.table}>
            <View style={[styles.tableRow, styles.tableHeader]}>
              <Text style={styles.cell}>Zararlı/Hastalık</Text>
              <Text style={styles.cell}>Tip</Text>
              <Text style={styles.cell}>Belirtiler</Text>
              <Text style={styles.cell}>Çözüm</Text>
            </View>
            {plantData.pests.map((pest, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.cell}>{pest.name}</Text>
                <Text style={styles.cell}>{pest.type}</Text>
                <Text style={styles.cell}>{pest.symptoms}</Text>
                <Text style={styles.cell}>{pest.solution}</Text>
              </View>
            ))}
          </View>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#225B38',
    marginBottom: 12,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
    textAlign: 'center',
  },
  info: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
    textAlign: 'left',
    width: '100%',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    color: '#225B38',
    alignSelf: 'flex-start',
  },
  bullet: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
    alignSelf: 'flex-start',
  },
  table: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: 8,
  },
  tableHeader: {
    backgroundColor: '#e5f5ec',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cell: {
    flex: 1,
    padding: 6,
    fontSize: 12,
    borderRightWidth: 1,
    borderRightColor: '#ccc',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
