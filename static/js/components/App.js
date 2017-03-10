import React from 'react';

class App extends React.Component {
	render(name) {
		return <h1>Hello, {this.props.name}.</h1>
	}
}
export default App