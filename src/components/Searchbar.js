import React from "react";
import "../index.css";

function Searchbar(props) {
    
    const handleChange = props.handleChange

    
    return (
        <div className="Searchbar">
            <form className="form-searchbar">
                <input className="input-searchbar" type="text" placeholder="Filter something" onChange={handleChange} />
                
            </form>
        </div>);
}
export default Searchbar;



