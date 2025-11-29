import * as Icon from "@phosphor-icons/react";

export function ProfileBtn (props) {
    let contact = props.data;
    let func = props.fn;
    // console.log(props)
    return (
         <button onClick={func}
                 aria-label={contact.isFav ?  "remove from fav" : "add to fav"}
                    aria-pressed={contact.isFav ? "Fav": "empty"}
                >
                   
                     {contact.isFav ? 
                     <Icon.Star size={32} weight="fill" /> : 
                     <Icon.Star size={32} />}

                </button>
    )
}