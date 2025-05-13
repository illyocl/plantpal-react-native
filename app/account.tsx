import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { registerUser, loginUser } from '../src/services/api'; 
export default function AccountPage() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const demoAccount = { email: 'demo@plantpal.com', password: '123456' };

  const handleLogin = async () => {
    try {
      const res = await loginUser(email, password);
      if (res.userId) {
        console.log('Başarılı giriş:', res);
        router.push('/home');
      } else {
        Alert.alert('Giriş Başarısız', res.message || 'Hatalı giriş bilgisi');
      }
    } catch (err) {
      console.error('Login error:', err);
      Alert.alert('Sunucu Hatası', 'Giriş sırasında bir hata oluştu.');
    }
  };

  const handleRegister = async () => {
    try {
      const res = await registerUser('Mobil Kullanıcı', email, password);
      if (res.message === 'Kayıt başarılı!') {
        console.log('Kayıt başarılı:', res);
        Alert.alert('Kayıt Başarılı', 'Artık giriş yapabilirsiniz.');
        setIsRegistered(true);
      } else {
        Alert.alert('Kayıt Başarısız', res.message || 'Hata oluştu.');
      }
    } catch (err) {
      console.error('Register error:', err);
      Alert.alert('Sunucu Hatası', 'Kayıt sırasında bir hata oluştu.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isRegistered ? 'Giriş Yap' : 'Kayıt Ol'}</Text>
      <TextInput
        placeholder="E-posta"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Şifre"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        style={styles.input}
      />

      {isRegistered ? (
        <>
          <View style={styles.buttonContainer}>
            <Button title="Giriş Yap" color="#225B38" onPress={handleLogin} />
          </View>
          <Text style={styles.switchText}>
            Hesabınız yok mu?{' '}
            <Text style={styles.link} onPress={() => setIsRegistered(false)}>
              Kayıt Ol
            </Text>
          </Text>
        </>
      ) : (
        <>
          <View style={styles.buttonContainer}>
            <Button title="Kayıt Ol" color="#225B38" onPress={handleRegister} />
          </View>
          <Text style={styles.switchText}>
            Zaten hesabınız var mı?{' '}
            <Text style={styles.link} onPress={() => setIsRegistered(true)}>
              Giriş Yap
            </Text>
          </Text>
        </>
      )}

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center', color: '#225B38' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
  },
  buttonContainer: {
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 12,
  },
  switchText: { textAlign: 'center', marginTop: 12 },
  link: { color: '#225B38', fontWeight: 'bold' },
  demoHint: { marginTop: 20, fontStyle: 'italic', textAlign: 'center', color: 'gray' },
});
