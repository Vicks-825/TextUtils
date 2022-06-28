//import PreviousMap from 'postcss/lib/previous-map'
import React, {useState} from 'react'

export default function TextForm(props) {
    const handleupClick = (e) =>{
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const handleloClick = (e) =>{
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const handleChange = (e) => {
        //console.log("On change");
        setText(e.target.value);
    }
    const speak = (e) => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    const handleClear = (e) => {
        setText('');
    }
    let light = {
        backgroundColor: 'white'
      }
    let dark = {
        backgroundColor: 'rgb(79 63 83)'
      }

    const [text, setText] = useState('Enter text here');
  return (
    <>
    <div style={props.mode}>
    <div className='flex space-x-4 flex-col justify-center items-center p-5'>
        <h1 className='text-lg font-bold'>{props.heading}</h1>
        <div className='flex space-x-4 pt-4'>
            <label htmlFor="">Example Textarea</label>
            <textarea className='outline p-2' name="" value={text} onChange={handleChange} id="textbox" cols="100" rows="8" style={props.mode.color === "white"?dark:light}></textarea>
        </div>
        <div className="flex justify-start pl-2 space-x-3">
            <button className="btn outline mt-3 p-2 bg-green-500 rounded-md" onClick={handleupClick}>convert to UpperCase</button>
            <button className="btn outline mt-3 p-2 bg-green-500 rounded-md" onClick={handleloClick}>convert to LowerCase</button>
            <button className="btn outline mt-3 p-2 bg-green-500 rounded-md" onClick={speak}>Speak</button>
            <button className="btn outline mt-3 p-2 bg-green-500 rounded-md" onClick={handleClear}>Clear</button>
            <button className="btnl outline mt-3 p-2 bg-green-500 rounded-md" onClick={props.toggleMode}>Enable Dark Mode</button>
        </div>
        <h1 className='text-lg font-bold'>Change Theme</h1>
        <div className="theme flex justify-start space-x-3">
            <button className="theme1 text-white w-16 rounded bg-[#521010]" onClick={()=>props.changeTheme('#521010')}>Red</button>
            <button className="theme1 text-white w-16 rounded bg-[#10521e]" onClick={()=>props.changeTheme("#10521e")}>Green</button>
            <button className="theme1 text-white w-16 rounded bg-[#101352]" onClick={()=>props.changeTheme("#101352")}>Blue</button>
            <button className="theme1 text-white w-16 rounded bg-[#521051]" onClick={()=>props.changeTheme("#521051")}>Purple</button>
            <button className="theme1 text-white w-16 rounded bg-[#4b5210]" onClick={()=>props.changeTheme("#4b5210")}>Yellow</button>
        </div>
    </div>
    
    <div className='flex space-x-4 flex-col justify-center items-center p-5'>
        <h1 className='text-lg font-bold'>Paragraph Summery</h1>
        <h2 className='text-sm'>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words</h2>
        <h2 className='text-sm'>{text.length} Characters</h2>
    </div>
    </div>
    </>
  )
}
