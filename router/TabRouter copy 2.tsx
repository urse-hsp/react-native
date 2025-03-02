import { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, ListScreen, DetailsScreen } from './index';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const ListStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ListStackScreen() {
  return (
    <ListStack.Navigator>
      <ListStack.Screen
        name="List"
        component={ListScreen} />
      <ListStack.Screen
        name="Details"
        component={DetailsScreen} />
    </ListStack.Navigator>
  );
}

class TabRouter extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={({ route }: any) => ({
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarShowLabel: false, // 只需要展示图标，而不要label，将tabBarShowLabel选项置为false即可。
          // tabBarIcon: ({ focused, color, size }) => {
          //   let iconName;
          //   if (route.name === 'Home') {
          //     iconName = focused ? 'home' : 'home-outline';
          //   }
          //   if (route.name === 'List') {
          //     iconName = focused ? 'list-circle' : 'list-circle-outline';
          //   }
          //   return <Ionicons name={iconName} size={size} color={color} />;
          // },
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen
          name="ListStack"
          component={ListStackScreen} options={{
            // 将ListStack的headerShown置为false即可将它的导航栏隐藏：
            headerShown: false,
          }} />
      </Tab.Navigator>
    );
  }
}

export default TabRouter;
