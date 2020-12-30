import { StyleSheet, Dimensions, Platform } from 'react-native';
import scale , {verticalScale} from '../../utils/Scale';
import COLOR_CONST from '../../../app/theme/ColorConstants';
import * as CONST from '../../theme/StringConstants';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderTopLeftRadius: scale(16),
        borderTopRightRadius: scale(16),
        backgroundColor: COLOR_CONST.darkTitle,
    },

    outerContainer: { 
        flex: 1, 
        paddingHorizontal: scale(16),
        paddingVertical: scale(16),
    },

    tabContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: scale(64),
        borderRadius: scale(16),
        backgroundColor: COLOR_CONST.inActiveDotLightGrey,
    },

    labelStyle: {
        fontSize: scale(12),
        lineHeight: scale(16),
        color: COLOR_CONST.tabsLabelColor,
        marginTop: verticalScale(4),
    },

    homeIcons: {
        width: scale(18),
        height: scale(17.3),
    },

    cartIcons: {
        width: scale(15),
        height: scale(17),
    },

    searchIcons: {
        width: scale(24),
        height: scale(24),
    },

    calculatorIcons: {
        width: scale(24),
        height: scale(24),
    },
});
