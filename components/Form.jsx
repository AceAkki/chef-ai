
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
        const email = formData.get("email");
        const password = formData.get("password");
        console.log(formData, email, password)
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
                    id="email" type="email" name="email" placeholder="email@mail.com" 
                    />
                <br />
                <label
                 htmlFor="password"
                 >
                   Password
                </label>
                <input 
                    id="password" type="password" name="password" placeholder="type strong password"
                    />
                <button>Submit</button>
            </form>
        </section>
    )
}