import React, { useState } from 'react'
// import Typed from 'typed.js'

export default function Taskform(props) {
   
    const [text, setText] = useState("")
   
    const [color , setColor]=useState("red")
    const [prev , newprev] = useState("")
    // const [Mode, setMode]=useState("Enable Dark Mode")
    const CopyIt =()=>{
        navigator.clipboard.writeText(text)
    }
   
    const upperIt = () => {
        if(text === text.toLowerCase()){

            setText(text.toUpperCase())
            // setText(Date())
        }
        else{

            setText(text.toLowerCase())
        }    
    }
    const changeColor=(event)=>{
        let newcolor = event.target.value
        setColor(newcolor)
    }
    const handleIt = (event) => {

        setText(event.target.value)
    }
    const preview=()=>{
        newprev(text)
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        msg.lang="Hindi"
        window.speechSynthesis.speak(msg);
      }
      const ClearIt=()=>{
        setText("")
      }
    //   behen chooud . AI ki aesi ki tesi. Maharaja Agrasen k students chutiyaa hai 
    //style={style} we can use it on attribute to style 
    return (
        <div  id="bhai"> 
            
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={handleIt}></textarea>
            </div>

            <button className="btn btn-primary my-5" onClick={upperIt}>
                Convert It
            </button>

            <button className="btn btn-primary my-5 mx-2" onClick={CopyIt}>
                Copy text
            </button>
            <button className="btn btn-primary my-5 mx-2" onClick={ClearIt}>
                Clear
            </button>

        
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{
                return element.length !== 0;
            }).length} words and {text.length} Characters in your text</p>
            <button className="btn btn-primary my-5" onClick={preview}>
                Preview my text
            </button>


            <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
            <p >{prev}</p>
        

            <h4 className='my-5'>Now We can Check another Type</h4>
            <h1>My favourite color is {color}! What about you Tell me by clicking Following Color</h1>
            <button className="btn btn-secondary mx-5" onClick={changeColor} value={"Blue"}>Blue</button>
            <button className="btn btn-secondary mx-5" onClick={changeColor} value={"Red"}>Red</button>
            <button className="btn btn-secondary mx-5" onClick={changeColor} value={"Green"}>Green</button>
            <button className="btn btn-secondary mx-5" onClick={changeColor} value={"Orange"}>Orange</button>
            <button className="btn btn-secondary mx-5" onClick={changeColor} value={"Yellow"}>Yellow</button>
            

        </div>
    )
}
