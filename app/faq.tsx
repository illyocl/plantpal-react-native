import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons'; 

const FAQPage = () => {
  const faqItems = [
    {
      question: 'PlantPal nedir?',
      answer: 'PlantPal, bitkilerinize nasıl bakacağınız konusunda kapsamlı bilgiler sağlayan bir bitki bakım uygulamasıdır.',
    },
    {
      question: 'PlantPal, bitki bakımı konusunda bana nasıl yardımcı olabilir?',
      answer: 'PlantPal, tüm bitki bakım ihtiyaçlarınız için tek durak noktası olacak şekilde tasarlanmıştır.',
    },
    {
        question: 'PlantPal uygulamasında bulunan bitki bakımı bilgileri tüm bitkiler için uygun mu?',
        answer:
                    "Bitki bakımı ipuçlarımız ve önerilerimiz geniş bir bitki türünü kapsasa da, her bitkinin benzersiz olduğunu ve belirli bakım gereksinimlerinin olabileceğini unutmamak önemlidir. PlantPal'da verilen bilgiler, genel yönergeler ve en iyi uygulamalar olarak hizmet eder.",
    },
    {
        question: 'Bitkilerimi ne sıklıkla sulamalıyım?',
        answer: 'Bitkilerin sulama sıklığı, türüne, çevresel koşullara ve dikildikleri toprağın türüne bağlı olarak değişebilir. Genel bir kural olarak, toprağın üst kısmı (yaklaşık 2,5 cm) dokunduğunuzda kuru hissettiğinde bitkilerinizi sulamak en iyisidir.',
      },
      {
        question: 'İç mekan bitkileri ne kadar ışığa ihtiyaç duyar?',
        answer: 'İç mekan bitkilerinin ihtiyaç duyduğu ışık miktarı değişiklik gösterebilir. Çoğu iç mekan bitkisi, parlak, dolaylı ışıkta gelişir. Onları filtrelenmiş güneş ışığı alabilecekleri bir pencere yakınına yerleştirin.',
      },
      {
        question: 'Bitkilerimde haşere istilasını nasıl önleyebilirim?',
        answer: 'Haşere istilasını önlemek için, bitkileriniz için sağlıklı ve temiz bir ortam sağlamak önemlidir. Bitkilerinizi düzenli olarak haşere belirtileri açısından kontrol edin, etkilenen yaprakları çıkarın ve gerekirse organik haşere kontrol yöntemlerini kullanmayı düşünün.',
      },
      {
        question: 'Bitkimin saksısını ne zaman değiştirmem gerektiğini nasıl anlarım?',
        answer: 'Bir bitkinin saksı değiştirilmesi gerektiğini gösteren bazı işaretler vardır; drenaj deliklerinden çıkan kökler, büyümede durgunluk veya toprağın hızla kuruması gibi. Bu işaretleri fark ederseniz, bitkinizi daha büyük bir saksıya taşımayı düşünün.',
      },
      {
        question: 'İç mekan bitkilerim için nemi nasıl artırabilirim?',
        answer: 'Nem artırmak, özellikle tropikal bölgelerden gelen iç mekan bitkileri için faydalıdır. Bitkileri bir araya toplayabilir, yanlarına bir su tepsisi koyabilir veya bir oda nemlendiricisi kullanabilirsiniz.',
      },
      {
        question: 'Bitkilerimi nasıl çoğaltırım?',
        answer: 'Gövde çelikleri ile bitki çoğaltma, sağlıklı bir gövde seçmeyi, bir düğümün hemen altından kesmeyi ve iyi süzülen bir saksı karışımına yerleştirmeyi içerir. Kökler gelişene kadar çeliği dolaylı ışık alan, nemli ve sıcak bir yerde tutun.',
      },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Sık Sorulan Sorular</Text>

      <Image
        source={{ uri: 'https://dekoratif.dyo.com.tr/uploads/2023/09/dyo--1.jpg' }}
        style={styles.image}
      />

      {faqItems.map((item, index) => (
        <View key={index} style={styles.faqItem}>
          <TouchableOpacity onPress={() => toggleAnswer(index)} style={styles.faqHeader}>
            <Text style={styles.question}>{item.question}</Text>
            <AntDesign 
              name={openIndex === index ? "up" : "down"} 
              size={18} 
              color="#225B38" 
            />
          </TouchableOpacity>
          {openIndex === index && (
            <Text style={styles.answer}>{item.answer}</Text>
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
  faqItem: {
    marginBottom: 20,
  },
  faqHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  answer: {
    fontSize: 16,
    color: 'gray',
    marginLeft: 10,
  },
});

export default FAQPage;
