import { useFont } from '@shopify/react-native-skia';
import { format } from 'date-fns';
import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { CartesianChart, Line } from 'victory-native';
import { useNavigation } from '@react-navigation/native';

export default function Graphic() {
  const data = [
    { date: new Date('2024-01-01'), hours: 12 },
    { date: new Date('2024-01-16'), hours: 14 },
    { date: new Date('2024-02-01'), hours: 10 },
    { date: new Date('2024-02-16'), hours: 8 },
    { date: new Date('2024-03-01'), hours: 15 },
    { date: new Date('2024-03-16'), hours: 13 },
    { date: new Date('2024-04-01'), hours: 11 },
    { date: new Date('2024-04-16'), hours: 9 },
    { date: new Date('2024-05-01'), hours: 16 },
    { date: new Date('2024-05-16'), hours: 14 },
    { date: new Date('2024-06-01'), hours: 13 },
    { date: new Date('2024-06-16'), hours: 12 },
    { date: new Date('2024-07-01'), hours: 10 },
    { date: new Date('2024-07-16'), hours: 9 },
    { date: new Date('2024-08-01'), hours: 8 },
    { date: new Date('2024-08-16'), hours: 7 },
    { date: new Date('2024-09-01'), hours: 14 },
    { date: new Date('2024-09-16'), hours: 15 },
    { date: new Date('2024-10-01'), hours: 12 },
    { date: new Date('2024-10-16'), hours: 11 },
    { date: new Date('2024-11-01'), hours: 13 },
    { date: new Date('2024-11-16'), hours: 10 },
    { date: new Date('2024-12-01'), hours: 14 },
    { date: new Date('2024-12-16'), hours: 16 },
  ];

  const navigation = useNavigation();

  const [filteredData, seteFilteredData] = useState(data);

  const font = useFont(require('../../assets/SpaceMono-Regular.ttf'), 12);

  const filterMonths = (month: number) => {
    const currentDate = new Date();
    const startDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - month,
      1
    );

    return data.filter((item) => item.date >= startDate);
  };

  const onClickFilterMonths = (months: number) => {
    const newData = filterMonths(months);
    seteFilteredData(newData);
  };

  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate('MenuRotinas')} />
        <Appbar.Content
          style={{ left: 30 }}
          title="3 Meses"
          onPress={() => onClickFilterMonths(3)}
        />
        <Appbar.Content
          title="6 Meses"
          onPress={() => onClickFilterMonths(6)}
        />
      </Appbar.Header>

      <View style={styles.container}>
        <View style={{ width: '100%', height: 350 }}>
          <CartesianChart
            domainPadding={{ right: -10, bottom: 10 }}
            data={filteredData}
            xKey="date"
            yKeys={['hours']}
            axisOptions={{
              font: font,
              tickCount: 5,
              labelPosition: 'outset',
              formatXLabel: (value: any) => format(new Date(), 'MM/yy'),
              formatYLabel: (value: any) => `${value}`,
            }}>
            {({ points }) => (
              <Line points={points.hours} color="blue" strokeWidth={4} />
            )}
          </CartesianChart>
        <Button title="remover filtro" onPress={() => seteFilteredData(data)} />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    display: 'flex',
    top: 300,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
