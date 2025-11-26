import { useState } from "react";

export function Section() {
  const [ingredients, setIngredients] = useState([]);
  //let ingredients = ["tomato", "apple", "peach"];
 
  let ingredientsList = ingredients.map((ingre) => {
    return <li key={ingre}>{ingre}</li>;
  });


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

        <section>
          <h2 className="ingre-title">ingredients on hand</h2>
          <ul>{ingredientsList}</ul>

          <div className="get-recipe-container">
            <div>
              <h3>
                Ready for a Recipe ?
              </h3>
              <p>Generate recipe based on the ingredients.</p>
            </div>
            <button>
              Get a recipe !
            </button>

          </div>
        </section>
      </section>
     
    </main>
  );
}


function hover() {
  console.log("you just hovered!");
}
