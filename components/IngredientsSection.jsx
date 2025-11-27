export default function IngredientsSection(props) {
  let ingredientsElem = props.ingredients.map((ingre) => {
    return <li key={ingre}>{ingre}</li>;
  });

  function loadPrompt() {
    return props.ingredients.length >= 4 ? (
      <div className="get-recipe-container">
        <div>
          <h3>Ready for a Recipe ?</h3>
          <p>Generate recipe based on the ingredients.</p>
        </div>
        <button onClick={props.showRecipe}>Get a recipe !</button>
      </div>
    ) : null;
  }

  function createSection () {
    return (
    <section>
      <h2 className="ingre-title">ingredients on hand</h2>
      <ul>{ingredientsElem}</ul>
      {loadPrompt()}
    </section>
  );
  }

   return (ingredientsElem.length > 0) ? (
      createSection()
    ) : null
}
