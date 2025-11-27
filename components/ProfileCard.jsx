import { useState } from "react"
import { ProfileBtn } from "./ProfileBtn"

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

                <ProfileBtn 
                    data={contact}
                    fn={toggleFav}/>

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