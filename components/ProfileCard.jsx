import { useState } from "react"
import * as Icon from "@phosphor-icons/react";

export function ProfileCard () {
    const [contact, setContact] = useState({
        firstName:"Eren",
        lastName:"Yaeger",
        address:"Paradis Island",
        hobby:"Killing Titans, FREEDOM",
        isFav:true
    })

    function toggleFav () {
        setContact(prevContact => {
            return {
                ...prevContact,
                isFav: !prevContact.isFav
            }
        })
    }

    return (
        <main>
            <article>

                <button onClick={toggleFav}
                 aria-label={contact.isFav ?  "remove from fav" : "add to fav"}
                    aria-pressed={contact.isFav ? "Fav": "empty"}
                >
                   
                     {contact.isFav ? 
                     <Icon.Star size={32} weight="fill" /> : 
                     <Icon.Star size={32} />}

                </button>

                <div>
                    <h2>
                        Name : {contact.firstName} {contact.lastName}
                    </h2>
                    <h5>
                        address : {contact.address}
                    </h5>
                    <h5>
                        hobby : {contact.hobby}
                    </h5>


                </div>
            </article>
        </main>
    )
}