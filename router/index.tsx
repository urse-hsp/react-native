// StackRouter.js
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Text,
  View, Button,
} from 'react-native';
import Appbar from '../pages/Appbar';

const Stack = createNativeStackNavigator();

export function HomeScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Appbar />
      <Text>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('List')}
        title="去列表页" />
    </View>
  );
}

export function ListScreen({ navigation }: any) {

  navigation.addListener('focus', () => {
    console.log('页面进入');
  });
  navigation.addListener('blur', () => {
    console.log('页面离开');
  });

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>List Screen</Text>
      {/* <Button
        onPress={() => navigation.push('List')}
        title="Push List">
      </Button> */}
      {/* <Button
        onPress={() => navigation.navigate('Home')}
        title="Go Home">
      </Button> */}
      <Button onPress={() => navigation.popToTop()} title="Popup 返回" />

      <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate('Details', {
            id: 86,
            otherParam: 'anything you want here',

            user: {
              id: '18',
              firstName: 'Jane',
              lastName: 'Done',
              age: 25,
            },
          });
        }}
      />

    </View>
  );
}

export function DetailsScreen({ route, navigation }: any) {
  const { id, otherParam, user } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>DetailScreen</Text>

      <Text>Details Screen</Text>
      <Text>id: {id}</Text>
      <Text>otherParam: {otherParam}</Text>

      <Text>user: {user?.lastName}</Text>


      <Button
        title="更新参数"
        onPress={() => {
          navigation.setParams({
            otherParam: 'someText',
          });
        }}
      />
    </View>
  );
}
export default function StackRouter() {
  return (
    <Stack.Navigator initialRouteName="Home">
      {/* <Stack.Screen
        name="Home"
        component={HomeScreen}
        // options配置不同参数，比如标题、导航栏颜色等：
        options={{
          title: '首页',
          headerStyle: {
            height: 80,
            backgroundColor: '#2196F3',
          },
        }}
      /> */}

      {/* headerStyle：整个标题的样式，可以设置backgroundColor背景颜色。
        headerTintColor：返回按钮和标题文字的颜色。
        headerTitleStyle：标题文字的样式，可以设置fontFamily和fontWeight */}

      <Stack.Screen name="Home">
        {(props) => <HomeScreen {...props} extraData={{ someData: '123' }} />}
      </Stack.Screen>

      <Stack.Screen
        name="List"
        component={ListScreen}
      />

      <Stack.Screen
        name="Details"
        component={DetailsScreen}
      />
    </Stack.Navigator>
  );
}
