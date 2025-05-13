// app/_layout.tsx
import { Drawer } from 'expo-router/drawer';
import { MyPlantsProvider } from '../src/context/MyPlantsContext';
import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';

// 🔔 Bildirimlerin nasıl gösterileceğini tanımla (en başta olmalı)
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function Layout() {
  useEffect(() => {
    console.log('Bildirim kurulum başlatıldı');

    const setupNotification = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      console.log('Bildirim izni durumu:', status);

      if (status !== 'granted') {
        alert('Bildirim izni verilmedi.');
        return;
      }

      setTimeout(async () => {
        console.log('2 dakika doldu, bildirim gönderiliyor...');
        await Notifications.scheduleNotificationAsync({
          content: {
            title: '🌿 Bakım Zamanı!',
            body: 'Bitkilerin bakım zamanı gelmiş olabilir. Kontrol etmeyi unutma!',
            sound: 'default',
          },
          trigger: null,
        });
      }, 120000); // 2 dakika
    };

    setupNotification();
  }, []);

  return (
    <MyPlantsProvider>
      <Drawer
        screenOptions={{
          headerStyle: { backgroundColor: '#225B38' },
          headerTintColor: '#fff',
          drawerActiveBackgroundColor: '#225B38',
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#000',
        }}
      >
        <Drawer.Screen name="home" options={{ title: 'Anasayfa' }} />
        <Drawer.Screen name="my-plants" options={{ title: 'Bitkilerim' }} />
        <Drawer.Screen name="indoor-plants" options={{ title: 'İç Mekan Bitkileri' }} />
        <Drawer.Screen name="outdoor-plants" options={{ title: 'Dış Mekan Bitkileri' }} />
        <Drawer.Screen name="care-calendar" options={{ title: 'Bakım Takvimi' }} />
        <Drawer.Screen name="fertilizers" options={{ title: 'Gübreler' }} />
        <Drawer.Screen name="faq" options={{ title: 'Sıkça Sorulan Sorular' }} />
        <Drawer.Screen name="account" options={{ title: 'Hesabım' }} />

        {/* drawer'dan gizli detay sayfası */}
        <Drawer.Screen
          name="plant-details/[plant]"
          options={{
            drawerLabel: () => null,
            title: '',
            drawerItemStyle: { height: 0 },
          }}
        />
        <Drawer.Screen
          name="search"
          options={{
            drawerLabel: () => null,
            title: '',
            drawerItemStyle: { height: 0 },
          }}
        />
      </Drawer>
    </MyPlantsProvider>
  );
}
