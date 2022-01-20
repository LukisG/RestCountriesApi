import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
const Filterbyregion = () => {
    
    const [country, setCountry] = useState([])
    const {regionname} = useParams()
    // const [serverresponse, setServerresponse] = useState ()
    // const [region, setRegion] = useState("")
    useEffect(()=> {
        const fethcountrydata = async() => {

            const response = await fetch(`https://restcountries.com/v3.1/region/${regionname}`)
            const country = await response.json()
            setCountry(country)
            // setServerresponse(response)
        }
        fethcountrydata()
        //console.log(regionname)
        
    }, [])
    //console.log(country)
    //console.log(serverresponse)
    if (country.status === 404){
        return (
            <>
            <Link to="/" className='btn'>Back to All</Link>
            <h1 className='error'>Not Found Error code: {country.status}</h1>
            </>
        )
    }else{
    return (
        <>
        {/* <Filter /> */}
        
        <Link to="/" className='btn'>Back to All</Link>
        <h1 className='currentregion'>{regionname}</h1>
        <section className="grid">
            
        {country ? country.map((country, index)=> {
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
        }): 'no data'}
        </section>
        
        </>
    )
}
}

export default Filterbyregion
