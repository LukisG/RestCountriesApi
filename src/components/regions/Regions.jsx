import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
const Regions = () => {
    const [countries, setcountries] = useState([])
    const [loading, setLoading] = useState(true);
    const fethcountrydata = async() => {
        const response = await fetch(`https://restcountries.com/v3.1/all`)
        const countries = await response.json()
        setcountries(countries)


        await new Promise((r) => setTimeout(r, 2000));
        setLoading((loading) => !loading);
        } 
        useEffect(() => {
        fethcountrydata()
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
        const allcontinents = countries
        //  console.log(allcontinents);
        const uniqueTags = [];
        
       
        
        allcontinents.map(img => {
        if (uniqueTags.indexOf(img.continents) === -1) {
            uniqueTags.push(img.continents)
        }
        });
        
            const arrays = []
            for (let i = 0; i < 249; i++){
                //console.log(uniqueTags[i]);
                
                if (uniqueTags[i] !== undefined) {
                    if (uniqueTags[i][0] === "Antarctica"){
                        uniqueTags[i][0] = "Antarctic"
                    }
                    arrays.push(uniqueTags[i][0])
                    //console.log(uniqueTags[i][0])
                }
            }
            
            const array = arrays.map(q => q);
    
            // console.log(
            //     array.filter((q, idx) => 
            //     array.indexOf(q) === idx)
            // )
            return (
                <>
               {array.filter((q, idx) => array.indexOf(q) === idx).map((item, index) => {return <Link to={"/region/"+item} className='btn btntop' key={index}>{item}</Link>})} 
            </>
            )


            }
   
}

export default Regions
