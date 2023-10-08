import React from 'react';
import type { PropsWithChildren } from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView
} from 'react-native';
import { appBgColour, menuDummyData } from '../../constants';
import MenueItemCard from '../../components/common/foodCards/MenuItemCard';
import InputField from '../../components/common/InputField';
import { getScaledFont } from '../../components/common/FontSize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../components/common/ResponsiveScreen';


type SectionProps = PropsWithChildren<{
    navigation: any;
}>;

const MenuScreen = ({ navigation }: SectionProps) => {
    return (
        <View style={{ backgroundColor: appBgColour, flex: 1, alignItems: 'center',rowGap : 20, paddingVertical : 10 }}>
            <InputField disabledLabel inputStyles={{ height: '100%', width: '90%', fontSize: getScaledFont(20), fontWeight: '400' }} placeholder='Search' containerStyle={styles.searchField} />
            <ScrollView showsVerticalScrollIndicator={false} style={{maxHeight : hp('80%'), width : '90%'}}>
            {
                menuDummyData.map(val => (
                    <>
                    <Text style={{width : '88%', fontSize : getScaledFont(18),fontWeight : '600', color : '#000000', marginVertical : 10}}>{val.category}</Text>
                    {val.data.map(value => (
                        <MenueItemCard {...value}/>
                    ))}
                    </>
                ))
            }
            </ScrollView>
        </View>
    );
};

export default MenuScreen;

const styles = StyleSheet.create({
    searchField: {
        borderWidth: 0,
        borderRadius: wp('10%'),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '5%',
        columnGap: 10,
        height: hp('7%'),
        width: '90%',
        backgroundColor: '#EFEEEE'
    }
})