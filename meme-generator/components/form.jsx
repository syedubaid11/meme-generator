export default function Form(){
    return(
        <div className="form-container">
            <form className="form">
                <label>
                    <div className="first-Element">
                        Enter Top Text: 
                        <input type="text" name="name" className="first"/>

                        Enter Bottom Text:
                        <input type="text" name="name"className="second" />
                        
                        <input type="submit" value="Generate" className="submit"/>

                   </div>
                </label>
            </form>
        </div>
    )
}