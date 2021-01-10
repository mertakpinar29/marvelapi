import React,{useState} from 'react'

//if there is a prop it needs to be passed down into const search
const Search = ({getQuery}) => {
    const [text,setText] = useState(' ')

    const onChange = (q)=>{
        setText(q)
        getQuery(q)
    }

    return (
        <section className='search'>
            <form>
                <input type='text' 
                className='form-control' 
                placeholder='Search characters' 
                autoFocus 
                onChange={(e)=>onChange(e.target.value)}
                value={text}/>
            </form>
        </section>
    )
}

export default Search
