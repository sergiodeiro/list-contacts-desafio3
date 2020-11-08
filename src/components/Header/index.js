import * as React from 'react';
import { Header } from 'react-native-elements'
import theme  from '../../resources/theme'


export default (props) => {
	return (
		<Header
			statusBarProps={{ backgroundColor: props.backgroundColor || theme.primaryColor }}
			centerComponent={
				{
					text: props.title,
					style: {
						color: props.color || theme.secondColor,
						textTransform: 'uppercase',
					}
				}
			}
			backgroundColor={props.backgroundColor || theme.primaryColor }
		/>
	)
}