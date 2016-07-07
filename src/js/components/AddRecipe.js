import React from 'react'

class AddRecipe extends React.Component {

	constructor(){
		super()
		this.state = {open: false}
		this.handleClick = this.handleClick.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChangeRecipe = this.handleChangeRecipe.bind(this)
	}

	handleClick(){
		if(this.state.open){
			this.setState({ open: false })
		} else {
			this.setState({ open: true })
		}
	}

	handleChangeRecipe(event){
		this.setState({newRecipe: event.target.value})
	}

	handleSubmit(){
		this.props.addRecipe(this.state.newRecipe)
		this.setState({newRecipe: ''})
		this.handleClick()
	}



	render(){

		let openClass = this.state.open?'add-recipe__form--is-open':''

		return(
			<div className="add-recipe">
				<div className="add-recipe__open-btn" onClick={this.handleClick}>
					<span className="add-recipe__plus">+</span><br/>
					<span className="add-recipe__text">Add new</span>
				</div>
				<div className={"add-recipe__form " + openClass}>
					<input 
						type="text"
						value={this.state.newRecipe}
						onChange={this.handleChangeRecipe}
					/>
					<div 
						className="add-recipe__add-btn btn"
						onClick={this.handleSubmit}
					>Add</div>
					<div className="add-recipe__close-btn" onClick={this.handleClick}></div>
				</div>
			</div>

			)
	}
}

export default AddRecipe