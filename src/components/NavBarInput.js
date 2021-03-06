import React from 'react'
import { Icon, Input } from 'semantic-ui-react'



class InputForm extends React.Component{


	constructor(props) {
		super(props)

		this.onSubmit=this.onSubmit.bind(this)

		this.state = {
			name: ''
		}
	}

	onSubmit = (event) => {
		this.props.fetchBlogs(this.state.name)
	}

	handleChange = (e) => {
		this.setState({ name: e.target.value})
	}

	render(){
		return (
			<div>
			<Input onChange={this.handleChange}
			    icon={<Icon onClick={this.onSubmit} name='search' inverted circular link />}
			    placeholder='Search...'
			 />
			</div>
		)
	}
}



export default InputForm
