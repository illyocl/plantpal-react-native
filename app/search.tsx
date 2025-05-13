import { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { Link } from 'expo-router';

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/ç/g, "c")
    .replace(/ğ/g, "g")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ş/g, "s")
    .replace(/ü/g, "u")
    .replace(/[^a-z0-9\s-]/g, "") 
    .replace(/\s+/g, "-") 
    .replace(/-+/g, "-") 
    .replace(/^-+|-+$/g, ""); 
}

const plantData = [
  { name: "Aloe Vera", type: "indoor", light: "az", water: "az" },
  { name: "Deve Tabanı", type: "indoor", light: "orta", water: "orta" },
  { name: "Yucca", type: "indoor", light: "fazla", water: "az" },
  { name: "Domates", type: "outdoor", light: "fazla", water: "fazla" },
  { name: "Patlıcan", type: "outdoor", light: "fazla", water: "orta" },
  { name: "Kaktüs", type: "indoor", light: "fazla", water: "az" },
  { name: "Nane", type: "outdoor", light: "orta", water: "fazla" },
  { name: "Orkide", type: "indoor", light: "az", water: "orta" },
  { name: "Monstera", type: "indoor", light: "orta", water: "orta" },
  { name: "Kauçuk Bitkisi", type: "indoor", light: "orta", water: "orta" },
  { name: "Sukkulent", type: "indoor", light: "fazla", water: "az" },
  { name: "Yelken Çiçeği", type: "indoor", light: "az", water: "orta" },
  { name: "Menekşe", type: "indoor", light: "orta", water: "orta" },
  { name: "Süsen", type: "outdoor", light: "fazla", water: "orta" },
  { name: "Bonsai", type: "indoor", light: "orta", water: "orta" },
  { name: "Paşa Kılıcı", type: "indoor", light: "az", water: "az" },
  { name: "Elma", type: "outdoor", light: "fazla", water: "orta" },
  { name: "Pancar", type: "outdoor", light: "orta", water: "fazla" },
  { name: "Lahana", type: "outdoor", light: "orta", water: "fazla" },
  { name: "Kırmızı Biber", type: "outdoor", light: "fazla", water: "orta" },
  { name: "Havuç", type: "outdoor", light: "orta", water: "orta" },
  { name: "Maydanoz", type: "outdoor", light: "orta", water: "fazla" },
  { name: "Salatalık", type: "outdoor", light: "fazla", water: "fazla" },
  { name: "Turp", type: "outdoor", light: "orta", water: "orta" },
];



export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedLight, setSelectedLight] = useState('');
  const [selectedWater, setSelectedWater] = useState('');

  const matchesQuery = (plantName: string, query: string): boolean => {
    const normalizedPlant = plantName.toLowerCase();
    const normalizedQuery = query.toLowerCase();
    let lastIndex = -1;
    for (let char of normalizedQuery) {
      lastIndex = normalizedPlant.indexOf(char, lastIndex + 1);
      if (lastIndex === -1) return false;
    }
    return true;
  };

  const filteredPlants = plantData.filter((plant) => {
    return (
      matchesQuery(plant.name, query) &&
      (selectedType === '' || plant.type === selectedType) &&
      (selectedLight === '' || plant.light === selectedLight) &&
      (selectedWater === '' || plant.water === selectedWater)
    );
  });

  const renderOption = (label: string, value: string, selectedValue: string, setValue: (val: string) => void) => {
    const isSelected = value === selectedValue;
    return (
      <Pressable
        onPress={() => setValue(isSelected ? '' : value)}
        style={[styles.option, isSelected && styles.optionSelected]}
      >
        <Text style={isSelected ? styles.optionTextSelected : styles.optionText}>{label}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bitki Arama</Text>
      <TextInput
        style={styles.input}
        placeholder="Bitki ismi girin..."
        value={query}
        onChangeText={setQuery}
      />

      {/* Filtre Seçenekleri */}
      <Text style={styles.filterTitle}>Mekan</Text>
      <View style={styles.filterRow}>
        {renderOption('İç', 'indoor', selectedType, setSelectedType)}
        {renderOption('Dış', 'outdoor', selectedType, setSelectedType)}
      </View>

      <Text style={styles.filterTitle}>Işık</Text>
      <View style={styles.filterRow}>
        {renderOption('Az', 'az', selectedLight, setSelectedLight)}
        {renderOption('Orta', 'orta', selectedLight, setSelectedLight)}
        {renderOption('Fazla', 'fazla', selectedLight, setSelectedLight)}
      </View>

      <Text style={styles.filterTitle}>Su</Text>
      <View style={styles.filterRow}>
        {renderOption('Az', 'az', selectedWater, setSelectedWater)}
        {renderOption('Orta', 'orta', selectedWater, setSelectedWater)}
        {renderOption('Fazla', 'fazla', selectedWater, setSelectedWater)}
      </View>

      <FlatList
        data={filteredPlants}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          const slug = slugify(item.name);
          return (
            <Link href={{ pathname: "/plant-details/[plant]", params: { plant: slug } }} asChild>
              <TouchableOpacity style={styles.item}>
                <Text>{item.name}</Text>
              </TouchableOpacity>
            </Link>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 12 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginBottom: 12 },
  item: { padding: 12, backgroundColor: '#f0f0f0', borderRadius: 8, marginBottom: 8 },
  filterTitle: { fontSize: 16, fontWeight: '600', marginTop: 16, marginBottom: 6 },
  filterRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  option: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  optionSelected: {
    backgroundColor: '#225B38',
    borderColor: '#225B38',
  },
  optionText: { color: '#333' },
  optionTextSelected: { color: '#fff' },
});
