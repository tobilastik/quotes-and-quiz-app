import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Credits extends Component {
	render() {
		return (
			<View>
				<Text style={{ fontSize: 24, fontWeight: 'bold', paddingTop: 20, alignSelf: 'center',}}>COPYRIGHTS</Text>

				<Text style={{ fontSize: 20, padding: 5, }}>
                    {`All the lyrics and quotes we used in this app belongs to Jermaine Lamar Cole popularly known as J Cole, and it's being used Under the U.S. Code, Title 17, Section 107 of the Copyright Act 1976. 
This is not an avenue to copy or claim his lyrics. We give him credits for all the quotes we have extracted from his songs. `}
				</Text>

				<Text>
					{`
						`}
				</Text>
			</View>
		);
	}
}
