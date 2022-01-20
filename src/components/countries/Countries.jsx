import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
const Countries = () => {
    const [resourcetype, setResourcetype] = useState("all")
    const [countries, setcountries] = useState([])
    const [loading, setLoading] = useState(true);
    const fethcountrydata = async() => {
        const response = await fetch(`https://restcountries.com/v3.1/${resourcetype}`)
        const countries = await response.json()
        setcountries(countries)

        
        await new Promise((r) => setTimeout(r, 2000));
        setLoading((loading) => !loading);
    } 
    useEffect(() => {
        fethcountrydata()

    }, [])
    
    const makeidpretty = (name) => {
        
            const res = name.replace(/ /g,"");
            //console.log(res);
            return(
                res
            )
    }
    // console.log(item);
    const [input, setInput] = useState('');
    //console.log(input)
    if (loading){
        return (
        <div id="load">
        <div>G</div>
        <div>N</div>
        <div>I</div>
        <div>D</div>
        <div>A</div>
        <div>O</div>
        <div>L</div>
      </div>
      )
    }else{
    return (
        <>
        <section className='filter'>
        <form className="form-controll">
        <input type="search" name="search" id="search" placeholder='Search for a country' onInput={e => setInput(e.target.value)}/>
                
        </form>
        </section>
        <section className="grid">
        {countries.filter(country =>{
            if (input === ""){
                return country;
            }else if (country.name.common.toLowerCase().includes(input.toLowerCase())){
                return country;
            }
        }).map( (country, index)=> {

            const { name, flags} = country
            
            return(
                <article key={index} id={makeidpretty(name.common)}>
                    <div>
                        <div className='details'>
                        <h3 className='country-name'>{name.common}</h3>
                        <img src={flags.svg} alt={name.common} /><br />
                        <div className="buttons">
                        <Link to={`/countries/${name.common}`} className='btn'>Learn more</Link>
                        
                        </div>
                        </div>
                        
                    </div>
                </article>
            )
        })}
        </section>
        
        </>
    )
}
}

export default Countries