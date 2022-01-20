import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
const Filterbyregion = () => {
    
    const [country, setCountry] = useState([])
    const {regionname} = useParams()
    // const [serverresponse, setServerresponse] = useState ()
    // const [region, setRegion] = useState("")
    const [loading, setLoading] = useState(true);
    const [input, setInput] = useState('');
    useEffect(()=> {
        const fethcountrydata = async() => {

            const response = await fetch(`https://restcountries.com/v3.1/region/${regionname}`)
            const country = await response.json()
            setCountry(country)
            // setServerresponse(response)


            await new Promise((r) => setTimeout(r, 2000));
            setLoading((loading) => !loading);
        }
        fethcountrydata()
        //console.log(regionname)
        
    }, [])
    //console.log(country)
    //console.log(serverresponse)
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
        {/* <Filter /> */}
        
        <Link to="/" className='btn'>Back to All</Link>
        <section className='filter'>
        <form className="form-controll">
        <input type="search" name="search" id="search" placeholder='Search for a country' onInput={e => setInput(e.target.value)}/>
                
        </form>
        </section>
        <h1 className='currentregion'>{regionname}</h1>
        <section className="grid">
            
        {country.filter(country =>{
            if (input === ""){
                return country;
            }else if (country.name.common.toLowerCase().includes(input.toLowerCase())){
                return country;
            }
        }).map((country, index)=> {
            const { name, flags } = country
            
            return(
                <article key={index}>
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

export default Filterbyregion
