import { useState } from "react";

export function Section() {
  const [ingredients, setIngredients] = useState(["tomato", "apple", "peach", "oregano"]);
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

  const [recipeShown, setRecipeShown] = useState(false);

  function showRecipe() {
    setRecipeShown(prev => !prev);
  }

  function loadSection() {
    return (ingredientsList.length > 0) ? (<section>
          <h2 className="ingre-title">ingredients on hand</h2>
          <ul>{ingredientsList}</ul>
          {loadPrompt()}

        </section>) : null
  }

  function loadPrompt() {
    return (ingredientsList.length >= 4) ? <div className="get-recipe-container">
            <div>
              <h3>
                Ready for a Recipe ?
              </h3>
              <p>Generate recipe based on the ingredients.</p>
            </div>
            <button onClick={showRecipe}>
              Get a recipe !
            </button>

          </div> : null
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

        {loadSection()}
      </section>

      {
        (recipeShown) ? <section>
        <h2>
          Chef AI recommends:
        </h2>
        <article>
          <p>
            based on available ingredients following is the 
          </p>
          <h3>recipe name</h3>
          <strong>ingredients</strong>
          <ul>
            <li>one</li>
            <li>one</li>
            <li>one</li>
            <li>one</li>
            <li>one</li>
            <li>one</li>
          </ul>

          <strong>instructions</strong>
          <ol>
            <li>one</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, provident dolorem et accusantium possimus, numquam veniam autem nobis, voluptatibus facilis esse placeat ullam necessitatibus ea voluptates exercitationem perferendis quaerat amet.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, provident dolorem et accusantium possimus, numquam veniam autem nobis, voluptatibus facilis esse placeat ullam necessitatibus ea voluptates exercitationem perferendis quaerat amet.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, provident dolorem et accusantium possimus, numquam veniam autem nobis, voluptatibus facilis esse placeat ullam necessitatibus ea voluptates exercitationem perferendis quaerat amet.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, provident dolorem et accusantium possimus, numquam veniam autem nobis, voluptatibus facilis esse placeat ullam necessitatibus ea voluptates exercitationem perferendis quaerat amet.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, provident dolorem et accusantium possimus, numquam veniam autem nobis, voluptatibus facilis esse placeat ullam necessitatibus ea voluptates exercitationem perferendis quaerat amet.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, provident dolorem et accusantium possimus, numquam veniam autem nobis, voluptatibus facilis esse placeat ullam necessitatibus ea voluptates exercitationem perferendis quaerat amet.</li>
          </ol>
        </article>
      </section> : null 
      }
     
    </main>
  );
}


function hover() {
  console.log("you just hovered!");
}
