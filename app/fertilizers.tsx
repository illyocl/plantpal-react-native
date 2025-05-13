import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons'; 

const FertilizerPage = () => {
  const fertilizers = [
    {
      plant: 'Aloe Vera',
      fertilizerInfo:
        'Aloe Vera bitkisi için en iyi gübre organik komposttur. Bitkinin sağlıklı gelişmesi için suya karıştırılan sıvı gübreler kullanılabilir.',
    },
    {
      plant: 'Deve Tabanı',
      fertilizerInfo:
        'Deve Tabanı, genellikle fosfor ve potasyum içeren gübrelerden fayda sağlar. Yüksek azotlu gübrelerden kaçınılmalıdır.',
    },
    {
      plant: 'Yucca',
      fertilizerInfo:
        'Yucca bitkisi, dengeli bir gübre tercih eder. Özellikle yaz aylarında organik gübreler kullanılabilir.',
    },
    {
      plant: 'Sukkulent',
      fertilizerInfo:
        'Sukkulent bitkiler fazla gübre istemez. Haftada bir veya iki haftada bir, düşük azotlu gübreler kullanılabilir.',
    },
    {
      plant: 'Yelken Çiçeği',
      fertilizerInfo:
        'Yelken Çiçeği, düzenli sulama ile birlikte potasyum ve fosfor bakımından zengin gübrelerden fayda sağlar.',
    },
    {
      plant: 'Menekşe',
      fertilizerInfo:
        'Menekşe bitkisi için sıvı gübre kullanılabilir. Haftada bir, suya karıştırılarak verilmesi önerilir.',
    },
    {
      plant: 'Süsen',
      fertilizerInfo:
        'Süsenler için azotlu gübreler kullanılabilir. İlkbahar ve yaz aylarında daha sık gübreleme yapılmalıdır.',
    },
    {
      plant: 'Bonsai',
      fertilizerInfo:
        'Bonsai bitkileri için düşük azotlu gübreler tercih edilmelidir. Gübreleme, yaprakların büyüme dönemi boyunca yapılabilir.',
    },
    {
      plant: 'Paşa Kılıcı',
      fertilizerInfo:
        'Paşa Kılıcı bitkisi, organik gübrelerden fayda sağlar. Ayrıca toprağın nemini koruyacak şekilde gübreleme yapılmalıdır.',
    },
    {
      plant: 'Kaktüs',
      fertilizerInfo:
        'Kaktüsler, çok fazla gübreye ihtiyaç duymazlar. Düşük azot içeren, suya karıştırılarak uygulanan sıvı gübreler uygundur.',
    },
    {
      plant: 'Monstera',
      fertilizerInfo:
        'Monstera, fosfor ve potasyum açısından zengin gübreleri tercih eder. Kışın gübreleme yapılmamalıdır.',
    },
    {
      plant: 'Orkide',
      fertilizerInfo:
        'Orkide bitkileri için orkide gübreleri kullanılmalıdır. Sıvı gübreler ve besin takviyeleri de faydalıdır.',
    },
    {
      plant: 'Kauçuk',
      fertilizerInfo:
        'Kauçuk bitkisi, dengeli gübrelerle beslenmelidir. Yüksek potasyumlu gübreler önerilir.',
    },
    {
      plant: 'Elma',
      fertilizerInfo:
        'Elma bitkisi için en iyi gübre organik komposttur. Toprağınızın pH seviyesini düzenlemek için kireç de kullanılabilir.',
    },
    {
      plant: 'Pancar',
      fertilizerInfo:
        'Pancar için dengeli bir gübre kullanılabilir. Özellikle fosfor ve potasyum bakımından zengin gübreler tercih edilmelidir.',
    },
    {
      plant: 'Lahana',
      fertilizerInfo:
        'Lahana bitkisi için azotlu gübreler uygundur. Ancak fazla gübrelememeye dikkat edilmelidir.',
    },
    {
      plant: 'Kırmızı Biber',
      fertilizerInfo:
        'Kırmızı biber için, özellikle fosfor ve potasyum açısından zengin gübreler önerilir. Haftada bir gübreleme yapılabilir.',
    },
    {
      plant: 'Havuç',
      fertilizerInfo:
        'Havuç bitkisi için fosfor ve potasyum ağırlıklı gübreler kullanılır. Gübrelemede dikkatli olunmalı, fazla gübreden kaçınılmalıdır.',
    },
    {
      plant: 'Maydanoz',
      fertilizerInfo:
        'Maydanoz bitkisi için azotlu gübreler tercih edilebilir. Haftada bir gübreleme yapılması önerilir.',
    },
    {
      plant: 'Salatalık',
      fertilizerInfo:
        'Salatalık için fosfor ve potasyum bakımından zengin gübreler tercih edilmelidir. Özellikle sıcak havalarda sık gübreleme yapılabilir.',
    },
    {
      plant: 'Patlıcan',
      fertilizerInfo:
        'Patlıcan için dengeli gübreler ve azotlu gübreler uygundur. Yaz aylarında daha sık gübreleme yapılabilir.',
    },
    {
      plant: 'Nane',
      fertilizerInfo:
        'Nane bitkisi için hafif, organik gübreler kullanılabilir. Toprağı fazla kurutmadan gübreleme yapılmalıdır.',
    },
    {
      plant: 'Patates',
      fertilizerInfo:
        'Patates bitkisi için yüksek potasyumlu gübreler önerilir. Gübreleme, patateslerin büyüme döneminde yapılmalıdır.',
    },
    {
      plant: 'Turp',
      fertilizerInfo:
        'Turp bitkisi için düşük azotlu gübreler tercih edilmelidir. Haftada bir gübreleme yapılması yeterlidir.',
    },
    {
      plant: 'Domates',
      fertilizerInfo:
        'Domates bitkisi için azotlu gübreler gereklidir. Ayrıca fosfor ve potasyumlu gübreler domatesin sağlıklı gelişimine katkı sağlar.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleInfo = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Gübreler ve Kullanım Talimatları</Text>
      <Image
        source={{ uri: 'https://probitki.com/wp-content/uploads/2023/04/evde-bitki-yetistirme-teknikleri.webp' }}
        style={styles.image}
      />

      {fertilizers.map((item, index) => (
        <View key={index} style={styles.fertilizerItem}>
          <TouchableOpacity onPress={() => toggleInfo(index)} style={styles.fertilizerHeader}>
            <Text style={styles.fertilizerTitle}>{item.plant}</Text>
            <AntDesign 
              name={openIndex === index ? "up" : "down"} 
              size={18} 
              color="#225B38" 
            />
          </TouchableOpacity>
          {openIndex === index && (
            <Text style={styles.fertilizerInfo}>{item.fertilizerInfo}</Text>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  fertilizerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  fertilizerInfo: {
    fontSize: 16,
    color: 'gray',
    marginLeft: 10,
  },
  fertilizerItem: {
    marginBottom: 20,
  },
  fertilizerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default FertilizerPage;
