import {
    View,
    Image,
    Text
} from 'react-native';
import { widthPercentageToDP as wp } from '../ResponsiveScreen';
import { getScaledFont } from '../FontSize';
import React from 'react';
import { AirbnbRating } from '@rneui/themed';
import { appThemeColour } from '../../../constants';
import { MenuCardParams } from '../../../models/commonModels';


const MenueItemCard: React.FC<MenuCardParams> = ({ title, price, imageUrl, rating }: MenuCardParams) => {
    const ratingCompleted = (rating: number) => {
        console.log('Rating is: ' + rating);
    };
    console.log('image url-->', imageUrl)
    return (
        <View style={{ width: '100%', height: 300, alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 25, marginTop: 20 }}>
            <Image source={imageUrl ? { uri: imageUrl } : require('../../../assets/Images/food.jpg')} style={{ width: '100%', height: undefined, aspectRatio: 2, borderTopLeftRadius: wp('5%'), borderTopRightRadius: wp('5%') }} />
            <View style={{ width: '100%', padding: 10, paddingLeft: 15, rowGap: 10 }}>
                <Text style={{ width: '100%', textAlign: 'left', fontSize: getScaledFont(18), fontWeight: '600', color: '#000000' }}>{title}</Text>
                <Text style={{ fontSize: getScaledFont(14), color: '#000000', fontWeight: '600' }}>Price {price}</Text>
                <AirbnbRating
                    count={5}
                    reviews={[
                        'Bad',
                        'OK',
                        'Good',
                        'Very Good',
                    ]}
                    defaultRating={rating ?? 2.5}
                    size={15}
                    showRating
                    ratingContainerStyle={{ width: '30%', height: '15%' }}
                />
            </View>
        </View>
    )
}

export default MenueItemCard;