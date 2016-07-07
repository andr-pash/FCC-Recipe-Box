import React from 'react'
import Recipe from './Recipe'


class RecipeList extends React.Component{
  constructor(props){
    super(props)
  }
  
  render(){

    this.recipeNodes = this.props.recipes.map((recipe, i) => {
      return(
        <Recipe 
          name={recipe.name}
          ingredients={recipe.ingredients}  
          index={i}
          open={recipe.open}
          edit={recipe.edit}
          openRecipe={this.props.openRecipe}
          editRecipe={this.props.editRecipe}
          deleteRecipe={this.props.deleteRecipe}
          addIngredient={this.props.addIngredient}
          deleteIngredient={this.props.deleteIngredient}
          key={i}
        />
      )
    })

    return (
      <div className="recipe-container">
        {this.recipeNodes}
      </div>
    )
  }
}


export default RecipeList