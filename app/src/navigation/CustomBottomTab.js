import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from '../screens/Homescreen';
import { TabBar } from '../components';
import RootNavigator from './RootNavigator';

const BottomTab = createBottomTabNavigator();
export default function CustomBottomTab() {
  return (
    <BottomTab.Navigator tabBar={TabBar} screenOptions={{
      headerShown: false
    }}>
      <BottomTab.Screen name="TICKETS" component={RootNavigator} />
      <BottomTab.Screen name="IDCARDS" component={Homescreen} />
      <BottomTab.Screen name="ROUTE" component={Homescreen} />
    </BottomTab.Navigator>
  );
}