import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import dayjs from 'dayjs';
import { getCalendarEvents } from '../src/services/api';

type CalendarEvent = {
  plantId: string;
  userId: string;
  plantName: string; 
  title: 'Sulama' | 'Gübreleme' | 'Toprak Değişimi';
  date: string;
  size: string;
};

export default function CareCalendarPage() {
  const [eventsByDate, setEventsByDate] = useState<Record<string, CalendarEvent[]>>({});
  const [markedDates, setMarkedDates] = useState<Record<string, any>>({});
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const userId = '6810824bfa1e5b47f630c841'; // geçici sabit

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const rawEvents: CalendarEvent[] = await getCalendarEvents(userId);
        const eventsMap: Record<string, CalendarEvent[]> = {};
        const marks: Record<string, any> = {};

        rawEvents.forEach((event) => {
          const date = dayjs(event.date).format('YYYY-MM-DD');
          if (!eventsMap[date]) eventsMap[date] = [];
          eventsMap[date].push(event);

          const dotColor =
            event.title === 'Sulama'
              ? '#4CAF50'
              : event.title === 'Gübreleme'
              ? '#8B4513'
              : '#3F51B5';

          marks[date] = {
            marked: true,
            dotColor,
          };
        });

        setEventsByDate(eventsMap);
        setMarkedDates(marks);
      } catch (err) {
        console.error('Eventler alınırken hata:', err);
      }
    };

    fetchEvents();
  }, []);

  const handleDayPress = (day: { dateString: string }) => {
    setSelectedDate(day.dateString);
  };

  const selectedEvents = selectedDate ? eventsByDate[selectedDate] || [] : [];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bakım Takvimi</Text>
      <Calendar
        markedDates={{
          ...markedDates,
          ...(selectedDate && {
            [selectedDate]: {
              ...markedDates[selectedDate],
              selected: true,
              selectedColor: '#225B38',
            },
          }),
        }}
        onDayPress={handleDayPress}
        theme={{
          todayTextColor: '#225B38',
          arrowColor: '#225B38',
        }}
      />

      {selectedDate && (
        <View style={styles.details}>
          <Text style={styles.detailsTitle}>
            {dayjs(selectedDate).format('DD MMMM YYYY')} İçin Bakım Listesi:
          </Text>
          {selectedEvents.length > 0 ? (
            <ScrollView>
              {selectedEvents.map((event, index) => (
                <Text key={index} style={styles.eventText}>
                  🌿 {event.plantName} – {event.title}
                </Text>
              ))}
            </ScrollView>
          ) : (
            <Text style={{ marginTop: 10, fontStyle: 'italic' }}>Bu gün için bakım yok.</Text>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
  details: { marginTop: 20 },
  detailsTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  eventText: { fontSize: 16, marginBottom: 6 },
});
