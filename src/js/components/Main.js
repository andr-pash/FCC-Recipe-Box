import React from "react";
import RecipeList from "./RecipeList"
import AddRecipe from "./AddRecipe.js"


var data = [
  {name: "Falafel", 
   ingredients: [ 
    { ingredient: "Dried Chickpeas", quty: "1 Cup"},
    { ingredient: "Large Onion, roughly chopped", quty: "1/2"},
    { ingredient: "Finely chopped parsley", quty: "2 Tbsp"},
    { ingredient: "Garlic", quty: "4 cloves"},
    { ingredient: "Cumin", quty: "1 Tbsp"},
    { ingredient: "etc", quty: "a lot more"}
  ],
   open: false,
   edit: true
  },
  {name: "Bifteki", 
   ingredients: [ 
    { ingredient: "Ground Beef", quty: "1 1/3 pounds"},
    { ingredient: "Plain Yogurt", quty: "1 Tbsp"},
    { ingredient: "Dried Thyme", quty: "2 Tsp"},
    { ingredient: "Feta Cheese", quty: "4 Ounces"},
    { ingredient: "Salt and Pepper", quty: ""}
  ],
   open: false,
   edit: true   
  },
  {name: "Moussaka", 
   ingredients: [ 
    { ingredient: "Eggplants", quty: "3"},
    { ingredient: "Olive Oil", quty: "1/4 cup"},
    { ingredient: "Butter", quty: "1 Tbsp"},
    { ingredient: "Lean Ground Beef", quty: "500g"},
    { ingredient: "Onions", quty: "2"},
    { ingredient: "Tomato Sauce", quty: "1 can"},
    { ingredient: "Milk", quty: "4 cups"},
    { ingredient: "Garlic", quty: "1 clove"},
    { ingredient: "etc", quty: "a lot more"}

  ],
   open: false,
   edit: true   
  },    
]



class Main extends React.Component {
  
  constructor(props){
    super(props)

    let inStorage = window.localStorage.getItem('_andr-pash_recipes')

    if(inStorage){
      this.state = {data: JSON.parse(inStorage)}
    }else {
      this.state = {data: data}
    }

    this.openRecipe = this.openRecipe.bind(this)
    this.editRecipe = this.editRecipe.bind(this)
    this.deleteRecipe = this.deleteRecipe.bind(this)
    this.addIngredient = this.addIngredient.bind(this)
    this.deleteIngredient = this.deleteIngredient.bind(this)
    this.addRecipe = this.addRecipe.bind(this)
  }

  componentDidUpdate(){
    window.localStorage.setItem("_andr-pash_recipes", JSON.stringify(this.state.data))
  }

  openRecipe(index){
    let newData = this.state.data
    if(newData[index].open){
      newData[index].open = false
    } else {
      newData[index].open = true
    }
    this.setState({data: newData})

  }

  editRecipe(index){

    let newData = this.state.data

    if(newData[index].edit){
      newData[index].edit = false
    }else{
      newData[index].edit = true
    }

    this.setState({data: newData})
  }


  deleteRecipe(index){
    let newData = this.state.data.splice(index, 1)
    this.setState(newData)
  }

  addIngredient(index, obj){

    let newIngredient = { ingredient: obj.newIngredient, quty: obj.newAmount }

    let newData = this.state.data
    newData[index].ingredients.push(newIngredient)

    this.setState(newData)
  }


  deleteIngredient(indexRecipe, indexIngr){
    let newData = this.state.data
    newData[indexRecipe].ingredients.splice(indexIngr, 1)
    this.setState({data: newData})
  }

  addRecipe(recipe) {
        let newData = this.state.data
        let obj = {
            name: recipe,
            ingredients: [],
            open: false,
            edit: true
        }

        newData.push(obj)

        this.setState({data: newData})

  }

  
  render(){
    return(
      <div className="app-shell">
        <header>
          <h1>Recipe Box</h1>
        </header>
        <RecipeList 
          recipes={this.state.data} 
          openRecipe={this.openRecipe}
          editRecipe={this.editRecipe}
          deleteRecipe={this.deleteRecipe}
          addIngredient={this.addIngredient}
          deleteIngredient={this.deleteIngredient}
        />
        <AddRecipe addRecipe={this.addRecipe}/>
      </div>
    )
  }
}


export default Main