import React from 'react'

class RecipeDetail extends React.Component {

    constructor(props) {
        super(props)

        this.state = {newIngredient: '', newAmount: ''}
        this.handleChangeIngr = this.handleChangeIngr.bind(this)
        this.handleChangeAmount = this.handleChangeAmount.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChangeIngr(event){
    	this.setState({newIngredient: event.target.value})
    }   

    handleChangeAmount(event){
    	this.setState({newAmount: event.target.value})
    }

    handleSubmit(){
    	this.props.addIngredient(this.props.index, this.state)
    	this.setState({newIngredient: '', newAmount: ''})
    }

    render() {

        if (this.props.open) {
            this.openClass = ''
        } else {
            this.openClass = 'hidden'
        }


        if(this.props.edit){
        	this.editClass = 'edit'
        } else {
        	this.editClass = ''
        }

        let ingredientNames = this.props.ingredients.map((ingr, i) => {
  		    return (
        		<li key={i}>
        			<span className="ingredient-name">{ingr.ingredient}</span>
        			<span className="ingredient-quantity">{ingr.quty}</span> 
        			<img 
        				src="../../img/delete.svg" 
        				alt="delete" 
        				className={"delete-icon " + this.editClass} 
        				onClick={()=>this.props.deleteIngredient(index, i)}/>
        		</li>
      			)
    		})    	


        let index = this.props.index

        return ( 
        	<div className={"recipe__detail " + this.openClass} >

		        <ul className="ingredient-container">
		          {ingredientNames}
		        </ul>

		        <form action={this.handleSubmit} className={"ingredient-form " + this.editClass}>
		        	<input 
		        		type="text"
		        		placeholder="Ingredient"
		        		value={this.state.newIngredient}
		        		onChange={this.handleChangeIngr}
		        	/>
		        	<input 
		        		type="text"
		        		placeholder="Quantity"
		        		value={this.state.newAmount}
		        		onChange={this.handleChangeAmount}
		        	/>
		        </form>

		        <div className="btn btn--delete" onClick={()=>this.props.deleteRecipe(index)}>Delete</div>
		       	<div className="btn ingredient-form__btn" onClick={this.handleSubmit}>Add</div>


        	</div>
        	)
    }
}

export default RecipeDetail
