import React, {useState} from 'react'

export default function About() {
    const [mystyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white',
        borderColor: 'black'
    });
    const [btn, setBtn] = useState("Enable Dark Mode");
    const handleClick = (e) => {
        if(mystyle.color === 'black'){
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                borderColor: 'white'
            });
            setBtn("Enable Light Mode");
        }
        else{
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtn("Enable Dark Mode");
        }
    }

  return (
    <>
    <div className='container flex flex-col space-y-5 outline-slate-900 border w-96 px-9 py-8 border-black ml-[35rem] mt-10' style={mystyle}>
        <div className='border border-black p-4' style={mystyle}>
            <details className="">   
                <summary><span>Lorem ipsum dolor sit amet</span></summary>
                <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat tellus, tristique non tincidunt ac, mollis ut mi. Aenean id accumsan est. Nullam pulvinar fermentum ipsum. Mauris ac eleifend quam, sit amet consequat ligula.</p>
                </div>   
            </details>
        </div>
        <div className='border border-black p-4' style={mystyle}>
            <details>
                <summary><span>Lorem ipsum dolor sit amet</span></summary>
                <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat tellus, tristique non tincidunt ac, mollis ut mi. Aenean id accumsan est. Nullam pulvinar fermentum ipsum. Mauris ac eleifend quam, sit amet consequat ligula.</p>
                </div>
            </details>
        </div>
        <div className='border border-black p-4' style={mystyle}>
            <details>
                <summary><span>Lorem ipsum dolor sit amet</span></summary>
                <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat tellus, tristique non tincidunt ac, mollis ut mi. Aenean id accumsan est. Nullam pulvinar fermentum ipsum. Mauris ac eleifend quam, sit amet consequat ligula.</p>
                </div>
            </details>
        </div>
        <div className='border border-black p-4' style={mystyle}>
            <details>
                <summary><span>Lorem ipsum dolor sit amet</span></summary>
                <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat tellus, tristique non tincidunt ac, mollis ut mi. Aenean id accumsan est. Nullam pulvinar fermentum ipsum. Mauris ac eleifend quam, sit amet consequat ligula.</p>
                </div>
            </details>
        </div>
        <div className='border border-black p-4' style={mystyle}>
            <details>
                <summary><span>Lorem ipsum dolor sit amet</span></summary>
                <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat tellus, tristique non tincidunt ac, mollis ut mi. Aenean id accumsan est. Nullam pulvinar fermentum ipsum. Mauris ac eleifend quam, sit amet consequat ligula.</p>
                </div>
            </details>
        </div>
    </div>
    <div className='ml-[33.8rem] mt-8'>
        <button className="btn outline-slate-900 border p-2 bg-green-400 rounded border-black m-5" onClick={handleClick}>{btn}</button>
    </div>
    </>
  )
}
