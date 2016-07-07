import React from 'react'


class RecipeHeader extends React.Component {

	render(){
		return(
			<div className="recipe__header" onClick={()=>this.props.openRecipe(this.props.index)} >
				<h3>{this.props.name}</h3>
				<h5>Ingredients: {this.props.ingredients.length}</h5>
			</div>
			)
	}
}

export default RecipeHeader