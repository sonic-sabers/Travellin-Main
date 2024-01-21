import * as React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Colors from '../../../constants/Colors';
import { SwipableList } from '../components';


function HomeScreen() {
  return (
    <View
      style={{ flex: 1, }}>
      <SwipableList />
    </View>
  );
}

function TravelScreen() {
  return (
    <View
      style={{ flex: 1 }}>
      <SwipableList />
    </View>
  );
}
function TravelScreen1() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Travel!Less Goo!!!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function RootNavigator() {
  const tabBarOptions = {
    tabBarScrollEnabled: true,
    tabBarItemStyle: {
      width: 'auto',
      alignItems: 'flex-start',
      borderBottomColor: '#00000010',
      borderBottomWidth: 2,
    },
    tabBarLabelStyle: {
      fontSize: 22,
      fontFamily: 'Inter_300Light',
      fontWeight: '300',
      height: 25,
    },
    tabBarGap: 0,
    tabBarBounces: true,
    animationEnabled: true,
    tabBarIndicatorStyle: {
      backgroundColor: Colors.light.text,
      height: 1,
      borderRadiusTopRight: 1,
      borderRadiusTopLeft: 1,
      maxWidth: '90%'
    },
    tabBarIndicatorContainerStyle: {
      height: '100%',
    }
  };
  return (
    <View style={{ flex: 1, backgroundColor: 'red' }} >
      < Tab.Navigator
        screenOptions={tabBarOptions}
        //         screenOptions={
        //           tabBarOptions,
        //           tabBarStyle: {
        //         backgroundColor: Colors.light.background,
        //       // fontSize: 32,
        //       // fontColor: 'pink',
        //   }
        // }
        sceneContainerStyle={{ backgroundColor: "white" }}
      >
        <Tab.Screen
          options={{

          }}
          name="Ongoing trip" component={HomeScreen} />
        <Tab.Screen name="Upcoming trip" component={TravelScreen} />
        <Tab.Screen name="Settings2" component={TravelScreen1} />
        <Tab.Screen name="Settings23" component={TravelScreen1} />
      </Tab.Navigator >
    </View >
  );
}
