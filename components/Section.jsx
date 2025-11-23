import { useState } from "react";

export function Section() {
  const [ingredients, setIngredients] = useState([]);
  //let ingredients = ["tomato", "apple", "peach"];
 
  let ingredientsList = ingredients.map((ingre) => {
    return <li key={ingre}>{ingre}</li>;
  });


  function handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    let newIngredient = formData.get("ingredient");
    setIngredients(oldIngredients => [...oldIngredients, newIngredient])
    // ingredients.push(newIngredient);
    // console.log("form submitted", ingredients);
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
        <form className="add-ingredient-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="eg. oregano"
            aria-label="Add Ingredient"
            name="ingredient"
          />
          <button> Add Ingredient </button>
        </form>

        <section>
          <h2 className="ingre-title"></h2>
          <ul>{ingredientsList}</ul>
        </section>
      </section>
     
    </main>
  );
}


function hover() {
  console.log("you just hovered!");
}
