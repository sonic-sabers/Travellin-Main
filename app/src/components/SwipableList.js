import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, FlatList, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Octicons, Entypo, Ionicons } from '@expo/vector-icons';

import Constants from 'expo-constants';
import ViewTicket from './ViewTicket';
import TicketPopComponent from './TicketPopComponent';
import HStack from './moleclues/HStack';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    from: 'DEL',
    to: 'MAA',
    flightNumber: '1B 8BE1'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    from: 'NBA',
    to: 'ASE',
    flightNumber: '1V 8BE1'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    from: 'RFS',
    to: 'PLS',
    flightNumber: '2P 8BE1'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d71',
    title: 'Fourth Item',
    from: 'QSA',
    to: 'JHG',
    flightNumber: '0W 8BE1'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d70',
    title: 'Fifth Item',
    from: 'OUN',
    to: 'CHS',
    flightNumber: 'US 8BE1'
  },
];

export default function SwipableList() {
  const [listData, setListData] = useState(DATA);
  let row: Array<any> = [];
  let prevOpenedRow;

  /**
   *
   */
  const renderItem = ({ item, index }, onClick) => {

    const closeRow = (index) => {
      // console.log('closerpow');
      if (prevOpenedRow && prevOpenedRow !== row[index]) {
        prevOpenedRow.close();
      }
      prevOpenedRow = row[index];
    };

    const renderRightActions = (progress, dragX, onClick) => {
      return (
        <TouchableOpacity
          onPress={deleteItem}
          style={{
            justifyContent: 'center',
            width: 100,
            backgroundColor: '#161616',
            borderTopRightRadius: 12,
            borderBottomRightRadius: 12,
            alignItems: "center",
            height: 140,
          }}>
          <>
            <Ionicons name="add-circle-outline" size={24} color="white" />
            <Text style={{
              textAlign: 'center',
              color: '#A0A0A0',
              fontSize: 10,
              fontFamily: 'Inter_400Regular',
              lineHeight: 15,
              maxWidth: 70,
              marginTop: 10
            }}>Add ticketon 23rd Jan</Text>
          </>
        </TouchableOpacity>
      );
    };
    const renderLeftActions = (progress, dragX, onClick) => {
      return (
        <TouchableOpacity
          onPress={deleteItem}
          style={{
            justifyContent: 'center',
            width: 100,
            backgroundColor: '#161616',
            borderTopRightRadius: 12,
            borderBottomRightRadius: 12,
            alignItems: "center",
            height: 140,
          }}>
          <>
            <Ionicons name="add-circle-outline" size={24} color="white" />
            <Text style={{
              textAlign: 'center',
              color: '#A0A0A0',
              fontSize: 10,
              fontFamily: 'Inter_400Regular',
              lineHeight: 15,
              maxWidth: 70,
              marginTop: 10
            }}>Show QR code</Text>
          </>
        </TouchableOpacity>
      );
    };

    return (
      <View
        style={{
          // backgroundColor: "red",
          flex: 1,
          backgroundColor: '#161616',
          zIndex: 1,
          marginHorizontal: 16,
          borderRadius: 16,
          overflow: 'hidden'
        }}>
        <Swipeable
          renderRightActions={(progress, dragX) =>
            renderRightActions(progress, dragX, onClick)
          }
          renderLeftActions={(progress, dragX) =>
            renderLeftActions(progress, dragX, onClick)
          }
          containerStyle={{
            zIndex: 200
          }}
          childrenContainerStyle={{
            zIndex: 200,
            backgroundColor: "rgba(17,17,17,0.08)",
          }}
          onSwipeableOpen={() => closeRow(index)}
          ref={(ref) => (row[index] = ref)}
          rightOpenValue={-100}>
          <ViewTicket item={item} />

        </Swipeable>
      </View>
    );
  };

  const deleteItem = ({ item, index }) => {
    // console.log(item, index);
    let a = listData;
    a.splice(index, 1);
    // console.log(a);
    setListData([...a]);
  };

  const ListHeader = () => {
    return (
      <HStack
        alignItems='center'
        justifyContent='space-between'
        style={{
          marginBottom: 12,
          marginHorizontal: 20
        }}
      >
        <TouchableOpacity>
          <HStack
            alignItems='center'>
            <View
              style={{
                backgroundColor: '#D9D9D9',
                borderRadius: 4,
                height: 24,
                width: 24,
              }}
            />
            <Text style={{
              color: 'black',
              fontSize: 22,
              fontFamily: 'Inter_300Light',
              lineHeight: 33,
              marginLeft: 8
            }}>Ceed workation</Text>
          </HStack>
        </TouchableOpacity>
        <HStack>
          <TouchableOpacity>
            <Octicons name="filter" size={20} color="black" style={{ marginRight: 8 }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="dots-three-horizontal" size={24} color="black" />
          </TouchableOpacity>
        </HStack>
      </HStack>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={listData}
        renderItem={(v) =>
          renderItem(v, () => {
            deleteItem(v);
          })
        }
        ListHeaderComponent={ListHeader}
        ItemSeparatorComponent={() => (
          <View style={{
            marginBottom: 20,
          }} />
        )}
        style={{
          paddingTop: 30,

        }}
        contentContainerStyle={{ paddingBottom: 200, }}
        keyExtractor={(item) => item.id}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
// 