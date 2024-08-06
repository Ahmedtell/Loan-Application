import { useState } from "react";

export default function Header({isAdmin}) {
    const [name, setName] = useState("Abed");
    function changeToAhmed(name) {
        setName(name);
    }
    return(
        <div>
            <h1>{name}</h1>
            { isAdmin ? <button
            onClick={() => changeToAhmed("Ahmed")}
            >
                Change
            </button>
            : <div>not Admin</div>
            }
        </div>
    );
}