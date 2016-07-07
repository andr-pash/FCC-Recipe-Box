import React from 'react'
import RecipeHeader from './RecipeHeader.js'
import RecipeDetail from './RecipeDetail.js'


class Recipe extends React.Component {

	constructor(){
		super()
	}


	render(){
		return(
			<div className="recipe" >
				<RecipeHeader 
					name={this.props.name}
					ingredients={this.props.ingredients}
					openRecipe={this.props.openRecipe} 
					index={this.props.index}
				/>
				<RecipeDetail
				ingredients={this.props.ingredients}
				open={this.props.open}
				edit={this.props.edit}
				index={this.props.index}
				editRecipe={this.props.editRecipe}
				deleteRecipe={this.props.deleteRecipe}
				addIngredient={this.props.addIngredient}
				deleteIngredient={this.props.deleteIngredient}
				/>
			</div>
			)
	}
}

export default Recipe