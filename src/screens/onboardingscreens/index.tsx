import {
    Image,
    View
} from 'react-native';
import { styles } from './Styles';
import { Text } from 'react-native';

const AppLogo = require('../../assets/AppLogo.png')

import { heightPercentageToDP as hp , widthPercentageToDP as wp } from '../../components/ResponsiveScreen';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { PersistStore } from '../../stores/PersistStore';

const OnBoardingScreen = () => {

    const setOnboardingStatus = PersistStore((state : any) => state.setOnboardingStatus);

    return (
        <View style={styles.container}>
            <View style={{flex : 1, rowGap : 15}}>
                <View style={{ backgroundColor: '#FFFFFF', width: '25%', height: undefined, aspectRatio: 1, borderRadius: wp('25%'), marginTop: '5%', marginLeft: '0%', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width: '70%', height: undefined, aspectRatio: 1 }} source={AppLogo} />
                </View>
                <Text style={{color : '#FFFFFF', fontWeight : 'bold', fontSize : hp('8%')}}>Food for Everyone</Text>
            </View>
            <Button containerStyle={styles.button} onPress={()=>{
                setOnboardingStatus(true)
            }}>
                <Text>Get Started</Text>
            </Button>
        </View>
    )
}
export default OnBoardingScreen;