import React from 'react';
import {Image} from 'react-native';
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import Icon from '@expo/vector-icons/Ionicons';
import QuoteScreen from './app/components/QuoteScreen';
import BioScreen from './app/components/BioScreen';
import Credits from './app/components/Credits';
import QuizScreen from './app/components/QuizScreen';
import MultipleChoice from './app/components/MultipleChoice';
import TimeGame from './app/components/TimeGame';
import SideMenu from './app/components/SideMenu';
import {Ionicons} from '@expo/vector-icons';
import store from './app/redux/store';
import {Provider} from 'react-redux';

openShare = () => {
  Share.share (
    {
      message: "Hey there! Check Out this Cole Quotes and Lyrics Game App, I promise you gon' love it, you can download it on Google Play Store. ",
      url: '...',
      title: '',
    },
    {
      // Android only:
      dialogTitle: 'J Cole Quotes and Lyrics App',
      // iOS only:
      excludedActivityTypes: ['com.apple.UIKit.activity.PostToTwitter'],
    }
  );
};

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
export default App;

const DashboardTabNavigator = createBottomTabNavigator (
  {
    Quotes: {
      screen: QuoteScreen,

      navigationOptions: {
        tabBarLabel: 'QUOTES',
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-quote" color={tintColor} size={24} />
        ),
      },
    },
    'Lyrics Game': {
      screen: QuizScreen,

      navigationOptions: {
        tabBarLabel: 'LYRICS GAME',
        tabBarIcon: ({tintColor}) => (
          <Image
            source={require ('./assets/images/lyrics.png')}
            style={{height: 24, width: 26, tintColor: tintColor}}
          />
        ),
      },
    },
  },
  {
    navigationOptions: ({navigation}) => {
      const {routeName} = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName,
      };
    },
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: '#1DA1F2',
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: {width: 5, height: 3},
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5,
      },
    },
  }
);

const DashboardStackNavigator = createStackNavigator (
  {
    DashboardTabNavigator: DashboardTabNavigator,
    MultipleChoice: {
      screen: MultipleChoice,
      navigationOptions: ({navigation}) => ({
        headerTitle: 'Multiple Choice',
        headerLeft: (
          <Icon
            onPress={() => navigation.goBack ()}
            name="md-arrow-round-back"
            style={{padding: 10, fontSize: 30}}
          />
        ),
      }),
    },
    TimeGame: {
      screen: TimeGame,
      navigationOptions: ({navigation}) => ({
        headerTitle: 'Time Game',
        headerLeft: (
          <Icon
            onPress={() => navigation.goBack ()}
            name="md-arrow-round-back"
            style={{padding: 10, fontSize: 30}}
          />
        ),
      }),
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        headerLeft: (
          <Icon
            style={{padding: 10}}
            onPress={() => navigation.openDrawer ()}
            name="md-menu"
            size={30}
          />
        ),
      };
    },
  }
);
const Menu = createStackNavigator ({
  'Main Menu': {
    screen: DashboardStackNavigator,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Main Menu',
      headerLeft: (
        <Icon
          onPress={() => navigation.openDrawer ()}
          name="md-menu"
          style={{padding: 10, fontSize: 30}}
        />
      ),
    }),
  },
});
const Credit = createStackNavigator ({
  Credits: {
    screen: Credits,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Credits',
      headerLeft: (
        <Icon
          onPress={() => navigation.openDrawer ()}
          name="md-menu"
          style={{padding: 10, fontSize: 30}}
        />
      ),
    }),
  },
});
const Biography = createStackNavigator ({
  Biography: {
    screen: BioScreen,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Biography',
      headerLeft: (
        <Icon
          onPress={() => navigation.openDrawer ()}
          name="md-menu"
          style={{padding: 10, fontSize: 30}}
        />
      ),
    }),
  },
});
const AppDrawerNavigator = createDrawerNavigator (
  {
    Menu: {
      screen: DashboardStackNavigator,
      navigationOptions: {
        drawerLabel: 'Main Menu',
        drawerIcon: ({tintColor, focused}) => (
          <Ionicons
            name={focused ? 'md-menu' : 'md-menu'}
            size={26}
            style={{color: tintColor}}
          />
        ),
      },
    },
    Bio: {
      screen: Biography,
      // navigationOptions: {
      //   drawerLabel: "Bio",
      //   drawerIcon: ({ tintColor, focused }) => (
      //     <Image
      //       source={require("./assets/images/about.png")}
      //       style={{ height: 24, width: 26, tintColor: tintColor }}
      //     />

      //   )
      // }
    },
    Credits: {
      screen: Credit,
      // navigationOptions: {
      //   drawerLabel: "Credits",
      //   drawerIcon: ({ tintColor, focused }) => (
      //     <FontAwesome
      //       name={focused ? "copyright" : "copyright"}
      //       size={26}
      //       style={{ color: tintColor }}
      //     />
      //   )
      // }
    },
  },
  ((defaultNavigationOptions = ({navigation}) => {
    return {
      headerLeft: (
        <Icon
          style={{padding: 10}}
          onPress={() => navigation.openDrawer ()}
          name="md-menu"
          size={30}
        />
      ),
    };
    // },{
    //   contentComponent: SideMenu,
    //   drawerWidth: 300
  }), {
    contentComponent: ({navigation}) => <SideMenu navigation={navigation} />,
  })
);

const AppSwitchNavigator = createSwitchNavigator ({
  Dashboard: {screen: AppDrawerNavigator},
});

const AppContainer = createAppContainer (AppSwitchNavigator);
