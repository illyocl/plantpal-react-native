import * as Notifications from 'expo-notifications';


export async function sendNotificationNow(title: string, body: string) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
      sound: true,
    },
    trigger: null, 
  });
}


export function sendNotificationAfterDelay(title: string, body: string, delayInSeconds: number) {
  setTimeout(() => {
    sendNotificationNow(title, body);
  }, delayInSeconds * 1000);
}
