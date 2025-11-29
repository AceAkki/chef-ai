
export function Form () {

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     const formEl = event.currentTarget; // used currentTarget to avoid any errors
    //     const formData = new FormData(formEl);
    //     const email = formData.get("email");
    //     const password = formData.get("password");
    //     formEl.reset();        
    // }
    
    function signUp(formData) {
        const data = Object.fromEntries(formData);
        const moviesData = formData.getAll("movies")

        console.log(data, moviesData)
        const allData = {
            ...data,
            movies:moviesData
        }
        console.log(allData)
    }

    
    return (
        <section>
            <h1> Sign Up Form </h1>
            <form action={signUp}>
            {/* <form method="post" onSubmit={handleSubmit}> */}
                <label
                    htmlFor="email">
                    Email
                </label>
                <input 
                    id="email" type="email" defaultValue="email@mail.com" name="email" placeholder="email@mail.com" 
                    />
                <br />
                <label
                 htmlFor="password"
                 >
                   Password
                </label>
                <input 
                    id="password" type="password" defaultValue="2322323" name="password" placeholder="type strong password"
                    />

                <label htmlFor="desc">Text</label>
                <textarea id="desc" name="desc" defaultValue="desc"></textarea>

                <fieldset>
                    <legend>
                        Employment
                    </legend>
                    <label>
                        <input type="radio" name="employment" value="umemployed"/>
                        Unemployed
                    </label>
                    <label>
                        <input type="radio" name="employment" value="part"/>
                        Part-Time
                    </label>
                    <label>
                        <input type="radio" name="employment" value="full" defaultChecked={true}/>
                        Full-Time
                    </label>
                </fieldset>
                <fieldset>
                    <legend>
                        movies
                    </legend>
                    <label>
                        <input type="checkbox" name="movies" value="eng"/>
                        eng
                    </label>
                    <label>
                        <input type="checkbox" name="movies" value="espanol"/>
                        espanol
                    </label>
                    <label>
                        <input type="checkbox" name="movies" value="german" defaultChecked={true}/>
                        german
                    </label>
                </fieldset>

                <label htmlFor="favColor">Fav color</label>
                <select id="favColor" name="favColor" defaultValue="blue">
                    <option value="" disabled>Select Color</option>
                    <option value="red">red</option>
                    <option value="green">green</option>
                    <option value="blue">blue</option>
                </select>
                <button>Submit</button>
            </form>
        </section>
    )
}