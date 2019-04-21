import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Share } from 'react-native';
import { MailComposer, FileSystem } from 'expo';

class SideMenu extends Component {
	componentDidMount() {
		FileSystem.makeDirectoryAsync(FileSystem.cacheDirectory + `myattachments`).catch(e => {
			console.log(e, 'Directory exists');
		});
	}

	openEmail = () => {
		MailComposer.composeAsync({
			recipients: ['jcolequotesandlyricsgame@gmail.com'],
			subject: 'Cole Lyrics Quiz',
			body: 'Hello there, ',
		});
	};

	
	openShare = () => {
		Share.share(
			{
				message:
					"Hey, Check Out this J Cole Quotes and Lyrics Quiz, it contains over 200 J Cole lyrics, you can download it online. ",
				url: '...',
				title: '',
			},
			{
				// Android only:
				dialogTitle: 'Cole Quotes and Lyrics App',
				// iOS only:
				excludedActivityTypes: ['com.apple.UIKit.activity.PostToTwitter'],
			}
		);
	};

	navigate(route) {
		this.props.navigation.navigate(route);
	}

	render() {
		const routes = [
			{
				title: 'Main Menu',
				route: 'Menu',
			},
			{
				title: 'Bio',
				route: 'Biography',
			},
			{
				title: 'Credits',
				route: 'Credits',
			},
		];
		return (
			<View>
				<View>
					<Text>{``}</Text>
				</View>
				<View>
					{routes.map((e,i) => (
						<TouchableOpacity style={styles.link} key = {i} onPress={_ => this.props.navigation.navigate(e.route)}>
							<Text>{e.title}</Text>
						</TouchableOpacity>
					))}
					<TouchableOpacity style={styles.link} onPress={this.openEmail}>
						<Text>Contact the Author</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.link} onPress={this.openShare}>
						<Text>Tell a fan</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	link: {
		padding: 15,
		borderBottomWidth: 2,
		borderBottomColor: '#eee',
	},
});
// const AppSwitchNavigator = createSwitchNavigator({
//   Dashboard: { screen: AppDrawerNavigator },

// });

export default SideMenu;
