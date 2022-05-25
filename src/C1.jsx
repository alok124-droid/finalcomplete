import React from 'react'

const C1 = (props) => {
    let myFun=()=>{
        props.data1(props.value+1)
    }
    let myFun2=()=>{

        props.data1(props.value-1)
    }
    let double=()=>{
        props.data1(props.value*2)
    }
    let a=<div className='a'><h1> value :- {props.value}</h1></div>
    let b=<div className='b'><h1> value :- {props.value}</h1></div>
    if(props.value%2==0){
       
        return (
            <div>
                {a}
                <button onClick={myFun}>Increment</button>
                <br />
                <br />
                <button onClick={myFun2}>Decrement</button>
                <br />
                <br />
                <button onClick={double}>Double</button>
            </div>
          )
    }
    else{
        
        return (
        <div>
        {b}
        <button onClick={myFun}>Increment</button>
        <br />
        <br />
        <button onClick={myFun2}>Decrement</button>
        <br />
        <br />
        <button onClick={double}>Double</button>
    </div>
  )

    }

}

export default C1