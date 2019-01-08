import {Navigation} from "react-native-navigation";
import Welcome from "./src/Welcome";
import Home from "./src/home";


Navigation.registerComponent(`welcome`, () => Welcome);
Navigation.registerComponent(`home`, () => Home);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
           stack:{
               id:'AppStack',
               children: [
                   {
                       component:{
                           name:'welcome',
                           options: {
                               topBar: {
                                   title:
                                       {
                                           text: 'Welcome'
                                       }
                               }
                           }
                       }
                   }
               ]
           }
        }
    });
});