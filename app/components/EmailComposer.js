import React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { MailComposer, FileSystem, } from 'expo';

export default class EmailComposer extends React.Component {
	componentDidMount() {
		FileSystem.makeDirectoryAsync(FileSystem.cacheDirectory + `myattachments`).catch(e => {
			console.log(e, 'Directory exists');
		});
	}

	openEmail = () => {
		MailComposer.composeAsync({
			recipients: ['jcolequotesandlyricsgame@gmail.com'],
			subject: 'J Cole Lyrics and Game App',
			body: 'Hello there, ',
		});
	};

	render() {
		return (
			<View>
				<Image
					source={require('../../assets/images/contactus.png')}
					style={{
						width: 390,
						height: 100,
						justifyContent: 'center',
						alignItems: 'center',
						paddingTop: 200,
						paddingLeft: 5,
						paddingRight: 5,
					}}
				/>

				<TouchableOpacity
					style={{
						backgroundColor: '#1DA1F2',
						padding: 10,
						margin: 10,
						block: true,
					}}
					onPress={this.openEmail}
				>
					<Text
						style={{
							padding: 10,
							margin: 10,
							marginLeft: 20,
							marginBottom: 20,
							marginTop: 20,
							fontWeight: 'bold',
							color: 'white',
							alignSelf: 'center',
						}}
					>
						Send Us a Mail
					</Text>
				</TouchableOpacity>
				<View style={styles.container} />
				
			</View>
		);
	}
}

const styles = StyleSheet.create({
	bottomBanner: {
		position: 'absolute',
		bottom: 0,
		top: 525,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
