import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';

const outdoorPlants = [
    { name: "Elma", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFFdnYDOw4-IN-BAMKoTyvvrc-G-SfJVloV1X-57Z5mLmcbeVi1ytraEdSrMyg2pTxqsk&usqp=CAU" },
    { name: "Pancar", image: "https://ideacdn.net/shop/ir/87/myassets/products/678/pancar-tohumu-detroit-dark-red-2.jpg?revision=1726669547" },
    { name: "Lahana", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWSOTycDgLLmIGYwAqqk6LZv2Tkn7OzWBW4w&s" },
    { name: "Kırmızı Biber", image: "https://ideacdn.net/idea/fe/18/myassets/products/207/adsiz-tasarim-1.jpg?revision=1724866378" },
    { name: "Havuç", image: "https://m.media-amazon.com/images/I/61zlp9XRTqL._AC_UF1000,1000_QL80_.jpg" },
    { name: "Maydanoz", image: "https://i.pinimg.com/736x/c4/9f/6c/c49f6cff5980ae6607eefb531999882c.jpg" },
    { name: "Salatalık", image: "https://i.lezzet.com.tr/images-800x600/b4b99e69-903f-4977-9855-48c2544e0ed3-dec853c0-ef20-468e-ae1e-2a94cdc926cc" },
    { name: "Patlıcan", image: "https://ideacdn.net/idea/ip/66/myassets/blogs/6049e2e24ca70e00326a295e-patlicanin-meyve-yapisi-min.png?revision=1626337836" },
    { name: "Nane", image: "https://i.nefisyemektarifleri.com/2023/06/22/nanenin-faydalari-neye-iyi-gelir-az-bilinen-mucizevi-etkileri.jpg" },
    { name: "Patates", image: "https://i.lezzet.com.tr/images-xxlarge-secondary/patates-yetistiriciligi-evde-patates-ne-zaman-ve-nasil-ekilir-6e0af123-e61a-4e40-980a-e263b79b52d8.jpg" },
    { name: "Turp", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVrRQutsEnKzZ4Q8DAiw6klw4-rP1wmUzsJyT0JZuUVv4xUv7XUL30_nWYmyTEPq9ILQk&usqp=CAU" },
    { name: "Domates", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9bMTF2pdzbXPdstNZDcvqfpIE1eEitRLA0A&s" },



];

function slugify(text: string) {
    return text
        .toLowerCase()
        .replace(/ç/g, "c")
        .replace(/ğ/g, "g")
        .replace(/ı/g, "i")
        .replace(/ö/g, "o")
        .replace(/ş/g, "s")
        .replace(/ü/g, "u")
        .replace(/\s+/g, "-");
}

export default function OutdoorPlantsPage() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dış Mekan Bitkileri</Text>
            <FlatList
                data={outdoorPlants}
                numColumns={2}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => {
                    const slug = slugify(item.name);
                    return (
                        <Link href={{ pathname: "/plant-details/[plant]", params: { plant: slug } }} asChild>
                            <TouchableOpacity style={styles.card}>
                                <Image source={{ uri: item.image }} style={styles.image} />
                                <Text style={styles.name}>{item.name}</Text>
                            </TouchableOpacity>
                        </Link>
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
    card: {
        flex: 1,
        margin: 8,
        backgroundColor: '#e5f5ec',
        borderRadius: 8,
        alignItems: 'center',
        padding: 12,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginBottom: 8,
    },
    name: { fontWeight: 'bold' },
});
