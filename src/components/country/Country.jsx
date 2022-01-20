import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
const Country = () => {
    const [country, setCountry] = useState([])
    const {name} = useParams()
    const [loading, setLoading] = useState(true);
    //const {regionname} = useParams()
    useEffect(()=> {
        const fethcountrydata = async() => {
            const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
            const country = await response.json()
            setCountry(country)

            await new Promise((r) => setTimeout(r, 1000));
            setLoading((loading) => !loading);
        }
        fethcountrydata()
        //console.log(name)
    }, [])

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
        <div className='countrydata'>
        <Link to={"/"} className='btn backbtn'>Back</Link>
        
        <section>
        {country.filter((country) =>{
            if (name == ""){
                return country;
            }else if (country.name.common.toLowerCase()===(name.toLowerCase())){
                //console.log(country.name.common.toLowerCase().includes(name.toLowerCase()))
                return country;
            }
        }).map((c, index) => {
                const {name, population, area, flags, currencies, langueges, borders} = c

                return(
                    <article key={index} >
                        <div className='titlename'><h2>{name.common}</h2></div>
                        <div className='flag'>
                            <img src={flags.png} alt={name.common} />
                        </div>
                        <div className='country-details'>
                            
                            <h5>Population: <span>{population}</span></h5>
                            <h5>Area: <span>{area} km<sup>2</sup></span></h5>
                            <h5>Currencie(s): <span>{
                                // console.log(country[0].currencies),
                                // console.log(country[index].currencies),
                                country[index].currencies ? Object.keys(country[0].currencies).map((key)=>{
                                return (
                                    // console.log(key, country[0].currencies[key].name),
                                    <span>{country[0].currencies[key].name} </span>
                                )
                            }): "no data" 
                            
                            }</span>
                            </h5>

                            <h5>Languege(s): <span>{
                            country[0].languages ? Object.keys(country[0].languages).map((key)=>{
                                return(
                                    
                                    // console.log(key, country[0].languages[key]),
                                    country[0].languages[key]+" "
                                )
                            }): "no data"
                            }</span>
                            </h5>
                            <h5>Borders: <span>{
                                //console.log(country[1]),
                                country[0].borders ? Object.keys(c.borders).map((key)=>{
                                    //console.log(c)
                                    return(
                                        
                                        //console.log(key, country[0].borders[key]),
                                        c.borders[key]+" "
                                        
                                    )
                                }): "no data"
                                }</span></h5>
                        </div>
                    </article>
                )
            })}
        </section>
        </div>
    )
        }
}

export default Country
// JSON.stringify(currencies)