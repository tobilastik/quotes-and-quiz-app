import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AdMobBanner, AdMobInterstitial, AdMobRewarded } from 'expo-ads-admob';

export default class Credits extends Component {
	render() {
		return (
			<View>
				<Text style={{ fontSize: 24, fontWeight: 'bold', paddingTop: 20, alignSelf: 'center' }}>
					COPYRIGHTS
				</Text>

				<Text style={{ fontSize: 20, padding: 5 }}>
					{`All the lyrics and quotes we used in this app belongs to Jermaine Lamar Cole popularly known as J Cole, and it's being used Under the U.S. Code, Title 17, Section 107 of the Copyright Act 1976. 
This is not an avenue to copy or claim his lyrics. We give him credits for all the quotes we have extracted from his songs. `}
				</Text>

				<Text>
					{`
						`}
				</Text>
				<View style={{ height: 10 }} />
				<AdMobBanner
					style={styles.bottomBanner}
					bannerSize="fullBanner"
					adUnitID="ca-app-pub-1217536501250691/3616143081"
					// Test ID, Replace with your-admob-unit-id
					testDeviceID="EMULATOR"
					didFailToReceiveAdWithError={this.bannerError}
				/>
				<View style={{ height: 50 }} />
				<AdMobBanner
					style={styles.bottomBanner}
					bannerSize="fullBanner"
					adUnitID="ca-app-pub-1217536501250691/6872861818"
					// Test ID, Replace with your-admob-unit-id
					testDeviceID="EMULATOR"
					didFailToReceiveAdWithError={this.bannerError}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	bottomBanner: {
		position: 'relative',
		bottom: 0,
	},
});
