import Markdown from 'react-markdown'

export function AIRecipe(props) {
  console.log(props.recipeData)
  return (
    <>
    <section className='recipe-container'>
     <h2>Chef AI recommends:</h2>
      <Markdown>{props.recipeData}</Markdown>

    </section>
      {/* <section>
        <h2>Chef AI recommends:</h2>
        <article>
          {props.recipeData}
        </article>
        <article>
          <p>
            Based on available ingredients, here is a delicious recipe
            suggestion:
          </p>
          <h3>Vegetable Stir-fry with Tofu</h3>

          <strong>Ingredients</strong>
          <ul>
            <li>1 block of firm tofu</li>
            <li>1 red bell pepper, sliced</li>
            <li>1 zucchini, sliced</li>
            <li>1 carrot, julienned</li>
            <li>2 tablespoons soy sauce</li>
            <li>1 tablespoon olive oil</li>
          </ul>

          <strong>Instructions</strong>
          <ol>
            <li>
              Press the tofu to remove excess moisture, then cut it into cubes.
            </li>
            <li>
              Heat olive oil in a large pan over medium heat. Add the tofu and
              sauté until golden brown and crispy on all sides, about 5-7
              minutes.
            </li>
            <li>
              Add the red bell pepper, zucchini, and carrot to the pan with the
              tofu. Stir-fry for 3-4 minutes until the vegetables begin to
              soften but still retain some crunch.
            </li>
            <li>
              Pour in the soy sauce and continue to stir-fry for another 2-3
              minutes, allowing the flavors to meld together.
            </li>
            <li>
              Once the vegetables are tender and the tofu is coated in the
              sauce, remove the stir-fry from the heat.
            </li>
            <li>
              Serve hot with a side of rice or noodles for a complete meal!
            </li>
          </ol>
        </article>
      </section> */}
    </>
  );
}
