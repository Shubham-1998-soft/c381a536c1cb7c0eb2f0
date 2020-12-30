import { StyleSheet, Dimensions, Platform } from 'react-native';
import scale , {verticalScale} from '../../utils/Scale';
import COLOR_CONST from '../../../app/theme/ColorConstants';
import * as CONST from '../../theme/StringConstants';

export default StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOR_CONST.lightWhite
    },

    testStyle: {
        fontSize: scale(30),
        fontWeight: 'bold',
        color: '#00a6a8'
    }
});
