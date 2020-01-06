# colors:

https://facebook.github.io/react-native/docs/colors

# styles:

https://facebook.github.io/react-native/docs/flexbox
https://facebook.github.io/react-native/docs/view-style-props

# components

Text
View
FlatList
Touchable
ScrollView
TouchableHignlight
TouchableOpacity / underlayColor={red}
TouchableNativeFeedback / only android
TouchableWithoutFeedback / to toggle keyboard
Modal / animationType:slide

# debug

command d
command m /android simulator
shake / expo client
https://github.com/jhen0409/react-native-debugger //download
from release page // react-native-debugger_0.10.5.dmg

# styling

elevation // to show card shadow on android
contentContainerStyle used with ScrollView and FlatList

# tricks

- const numberInputHandler = inputText => {
  setEnteredValue(inputText.replace(/[^0-9]/, ""));
  }; // prevent . on android
- touchablewithoutfeedback // toggle keyboard
- Alert.alert("Invalid-number", "Number has to be between 1 and 99", [
  { text: "Okay", style: "destructive", onPress: resetInputHandler }
  ]);
- flexgrow to move lists down

# icons

https://expo.github.io/vector-icons/

# fonts

- expo install expo-font
- import \* as Font from "expo-font"
- const fetchFonts = () => {
  return Font.loadAsync({
  'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
  };

adb shell pm reset-permissions
ngrok http 3000

# download

- npx expo-cli init tracks
- expo install react-navigation
- npx expo-cli install react-native-maps
- npx expo-cli install react-native-gesture-handler react-native-reanimated react-navigation-stack react-navigation-tabs
- import { createAppContainer, createSwitchNavigator } from 'react-navigation';
  import { createStackNavigator } from 'react-navigation-stack';
  import { createBottomTabNavigator } from 'react-navigation-tabs';
