import { useState } from "react";

import { AIRecipe } from "./AIRecipe";
import IngredientsSection from "./IngredientsSection";

export function Section() {
  const [ingredients, setIngredients] = useState([]);
  //let ingredients = ["tomato", "apple", "peach", "carrot"];
 
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   let formData = new FormData(event.currentTarget);
  //   let newIngredient = formData.get("ingredient");
  //   setIngredients(oldIngredients => [...oldIngredients, newIngredient])
  //   // ingredients.push(newIngredient);
  //   // console.log("form submitted", ingredients);
  // }
  
  function getIngredients(formData) {
    const newIngredient = formData.get("ingredient");
    console.log(newIngredient)
    setIngredients(oldIngredients => [...oldIngredients, newIngredient])
  }

  const [recipeShown, setRecipeShown] = useState(false);

  function showRecipe() {
    setRecipeShown(prev => !prev);
  }


  return (
    <main>
      <section className="image-section" onMouseOver={hover}>
        <img
          src="https://cdn.pixabay.com/photo/2021/11/03/00/56/pizza-6764430_1280.jpg"
          className="chef-img"
        />
      </section>

      <section className="main-section">
        <form className="add-ingredient-form" action={getIngredients}>
        {/* <form className="add-ingredient-form" onSubmit={handleSubmit}> */}
          <input
            type="text"
            placeholder="eg. oregano"
            aria-label="Add Ingredient"
            name="ingredient"
          />
          <button> Add Ingredient </button>
        </form>

        { <IngredientsSection ingredients={ingredients} showRecipe={showRecipe}/>}
      </section>

      {(recipeShown) ? <AIRecipe /> : null }
     
    </main>
  );
}


function hover() {
  console.log("you just hovered!");
}
