# ######## 路由
堆栈导航
堆栈导航是比较常见的导航方式，为应用程序在不同屏幕之间转换提供导航和管理的方式；其有些类似于web浏览器处理导航状态的方式。首先我们安装一些依赖：

# 安装导航的核心库
yarn add @react-navigation/native

# 安装导航的外部依赖库
yarn add react-native-screens react-native-safe-area-context

# 安装堆栈导航的主要库
yarn add @react-navigation/native-stack

# ###############选项卡导航
npm install @react-navigation/bottom-tabs
# 或者
yarn add @react-navigation/bottom-tabs
我们看下bottom-tabs的简单使用案例：

const Tab = createBottomTabNavigator();
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

class TabRouter extends Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="List" component={ListScreen} />
      </Tab.Navigator>
    )
  }
}





# ######### 安全区域
在iPhone X、iPhone XR等设备上，顶部的刘海设计和底部的小黑条都可能会遮住我们的App内容，因此需要进行适配；尽管RN提供了SafeAreaView，但它有一些问题，React Navigation提供了更好用的react-native-safe-area-context：

首先我们yarn安装，在iOS平台多一步pod安装：

yarn add react-native-safe-area-context

# iOS Platform
npx pod-install
首先在根组件使用SafeAreaProvider，这是一个提供者，本身不会对布局产生影响，只有在该组件包裹下的子组件才能使用react-native-safe-area-context提供的功能，因此我们通常把它包裹在App组件：

import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  return (<SafeAreaProvider initialMetrics={null}>
    <NavigationContainer>{/*(...) */}</NavigationContainer>
  </SafeAreaProvider>);
}
在我们要适配的页面引入SafeAreaView自动处理：

import { SafeAreaView } from 'react-native-safe-area-context';

function HomeScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}
    >
      <Text>This is Top Text.</Text>
      <Text>This is Bottom Text.</Text>
    </SafeAreaView>
  );
}

# 自定义开发
- 删除Appcopy.tsx
- 二选一router/