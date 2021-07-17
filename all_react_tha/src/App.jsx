import React,{useEffect,useState} from 'react'
import {Meme} from '../src/components/Meme'
import './App.css'
export const App = () => {
    const [Load, setLoad] = useState(false)
    const [useUrl, setUseUrl] = useState([])
    const fetchapi=async()=>{
        const res=await fetch("https://api.imgflip.com/get_memes")
        const data= await res.json()
        const dataUrl= data.data.memes;
        setUseUrl(dataUrl)
        setLoad(false)

    }
    
    useEffect(() => {
        setLoad(true)
        fetchapi();
    }, [])
    if(Load){
        return <h1>loading...</h1>
    }
    return (
        <main>
            <section>
                <h1 style={{color:'whitesmoke'}}>Meme Generator</h1>
            {
                useUrl.map((urlIs)=>{
                   return <Meme key={urlIs.id} urlIs={urlIs} setUseUrl={setUseUrl} fetchapi={fetchapi}/>
                })
            }
            </section>
        </main>
    )
}