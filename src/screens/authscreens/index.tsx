import {
    View,
    Image
} from 'react-native';
import { styles } from './Styles';
import TopTabBar from '../../components/customTabBar/TopTabBar';


const AuthScreen = () => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 0.65, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ height: undefined, aspectRatio: 1, width: '30%' }} source={require('../../assets/AppLogo.png')} />

            </View>
            <TopTabBar />
        </View>
    )
}

export default AuthScreen;