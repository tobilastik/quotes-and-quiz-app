import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { highScoreLife, highScoreTime } from '../redux/actions';

class QuizScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			ScoreLife: 0,
			ScoreTime: 0,
		};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.statusLife == 'done') {
			this.setState({
				ScoreLife: nextProps.ScoreLife,
			});
		}
		if (nextProps.statusTime == 'done') {
			this.setState({
				ScoreTime: nextProps.ScoreTime,
			});
		}
	}
	componentDidMount() {
		console.log('did mount');
		this.props.highScoreLife();
		this.props.highScoreTime();
	}

	render() {
		const { ScoreLife, ScoreTime } = this.state;

		return (
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<TouchableOpacity
					block={true}
					style={styles.button}
					onPress={() => this.props.navigation.navigate('MultipleChoice')}
				>
					<Text style={{ color: 'white' }}>Multiple Choice</Text>
				</TouchableOpacity>
				<View>
					<Text>High Score: {ScoreLife}</Text>
				</View>
				<TouchableOpacity
					block={true}
					style={[styles.button, { marginTop: 25 }]}
					onPress={() => this.props.navigation.navigate('TimeGame')}
				>
					<Text style={{ color: 'white' }}>Time Game</Text>
				</TouchableOpacity>
				<View>
					<Text>High Score: {ScoreTime}</Text>
				</View>
				<View>
					<Text style={{ position: 'relative', fontWeight: 'bold', marginTop: 50, color: 'red', padding: 10, }}>
						© All the lyrics and quotes we used in this quiz belongs to Jermaine Lamar Cole popularly known as J Cole
						and it's being used Under the U.S. Code, Title 17, Section 107 of the Copyright Act 1976.
					</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#1DA1F2',
		color: 'white',
		margin: 10,
		borderRadius: 8,
		alignItems: 'center',
		padding: 10,
		width: '80%',
	},
});

const mapStateToProps = state => {
	return {
		ScoreLife: state.highScoreLife,
		ScoreTime: state.highScoreTime,
		loader: state.loader,
		statusTime: state.statusTime,
		statusLife: state.statusLife,
	};
};

export default connect(
	mapStateToProps,
	{ highScoreLife, highScoreTime }
)(QuizScreen);
