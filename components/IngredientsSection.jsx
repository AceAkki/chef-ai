export default function IngredientsSection (props) {
     function loadPrompt() {
    return (props.list.length >= 4) ? <div className="get-recipe-container">
            <div>
              <h3>
                Ready for a Recipe ?
              </h3>
              <p>Generate recipe based on the ingredients.</p>
            </div>
            <button onClick={props.func}>
              Get a recipe !
            </button>

          </div> : null
  }
    
    return (
        <section>
          <h2 className="ingre-title">ingredients on hand</h2>
          <ul>{props.list}</ul>
          {loadPrompt()}

        </section>
    )
}

