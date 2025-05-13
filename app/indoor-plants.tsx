import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';



const indoorPlants = [
    { name: "Aloe Vera", image: "https://m.media-amazon.com/images/I/81XWpVvk5AL._AC_UF1000,1000_QL80_.jpg" },
    { name: "Kaktüs", image: "https://static.ticimax.cloud/cdn-cgi/image/width=-,quality=85/62546/uploads/urunresimleri/buyuk/kaktus-saksi-4lu-set-sari-0124-lt-2956-bc8-b6.jpg" },
    { name: "Orkide", image: "https://cdn.cicekmarket.com/cicek-resim/l/cm717.jpg" },
    { name: "Monstera", image: "https://ideacdn.net/idea/lo/88/myassets/products/248/2fe0d9b8-3d48-4ea8-bd2a-0d772044e5d1.JPG?revision=1705945055" },
    { name: "Deve Tabanı", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmepjhvr1K0G5YVBlafrTmfQ4ZmU5KmboKBw&s"},
    { name: "Yucca", image: "https://cdn.myikas.com/images/1bd9ce94-24d0-4dd9-a116-9f46a272aad2/6b60bd20-480d-4a0d-86a0-8eb9069ed75d/image_3840.webp"},
    { name: "Sukkulent", image: "https://static.ticimax.cloud/36217/uploads/urunresimleri/buyuk/sukulent--49cd-.jpeg"},
    { name: "Yelken Çiçeği", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiGZEAMSvQmMCZg3PIxz9OZkySBgMHetbhYw&s"},
    { name: "Menekşe", image: "https://static.ticimax.cloud/62546/uploads/urunresimleri/buyuk/menekse-afrika-ithal-bb-fd0.jpg"},
    { name: "Süsen", image: "https://ideacdn.net/shop/ir/87/myassets/products/862/iris-fidesi-louisiana-black-gamecock-1.jpg?revision=1697143329"},
    { name: "Bonsai", image: "https://ideacdn.net/idea/gs/40/myassets/products/054/ruz1285.png?revision=1697143329"},
    { name: "Paşa Kılıcı", image: "https://sarifrezya.com/cdn/shop/files/IMG_7670-scaled-1-1-scaled-1.jpg?v=1719758699"},

    
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

export default function IndoorPlantsPage() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>İç Mekan Bitkileri</Text>
            <FlatList
                data={indoorPlants}
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
