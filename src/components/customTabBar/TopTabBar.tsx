import {useState} from 'react';
import { Tab, Text, TabView } from '@rneui/themed';
import LoginScreen from '../../screens/authscreens/LoginScreen';
import SignUpScreen from '../../screens/authscreens/SignUp';
import { TopTabBarParams } from '../../models/customTabBarProps';
import { appThemeColour } from '../../constants';
import { widthPercentageToDP as wp } from '../common/ResponsiveScreen';
import { getScaledFont } from '../common/FontSize';

export default ({
    conatinerStyle
} : TopTabBarParams) => {
const [index, setIndex] = useState(0);
return (
  <>
    <Tab
      value={index}
      onChange={(e) => setIndex(e)}
      indicatorStyle={{
        backgroundColor: appThemeColour,
        height: 3,
        width : '20%',
        marginLeft : `${11 + (index * 9)}%`
      }}
      style={{
        backgroundColor : '#FFFFFF',
        borderBottomLeftRadius: wp('10%'), 
        borderBottomRightRadius: wp('10%'),
      }}
      buttonStyle={{
        width : '75%',
        marginLeft : '12.5%'
      }}
      variant="default"
    >
      <Tab.Item
        title="Login"
        titleStyle={{color : '#000000',fontSize : getScaledFont(16), fontWeight : 'bold'}}
      />
      <Tab.Item
        style={{width : '50%'}}
        title="SignUp"
        titleStyle={{color : '#000000',fontSize : getScaledFont(16), fontWeight : 'bold'}}
      />
    </Tab>

    <TabView value={index} onChange={setIndex} animationType="spring">
      <TabView.Item>
        <LoginScreen/>
      </TabView.Item>
      <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
       <SignUpScreen/>
      </TabView.Item>
    </TabView>
  </>
);
};