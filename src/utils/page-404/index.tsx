import React from 'react'
import { useNavigate } from 'react-router-dom'
import { pageurl } from 'utils/constants';
import trafficlightimg from 'extras/images/404.jpg'
import { Button } from 'utils/button';

const Page404 = () => {

    const navigate = useNavigate();

    return(
        <div style={{width:"100%", height:"100vh", position: "relative", backgroundImage:`url(${trafficlightimg})`,backgroundSize:"contain"}}>
            
            <div style={{background:"#000", opacity:.8, width:"100%", height:"100%", position:"absolute", top:0, left:0, zIndex:1}}/>
            
            <div style={{width:"100%", height:"100%", display:"flex", flexDirection:"column",alignItems:"center", 
                justifyContent:"center", zIndex:2, position:"relative"}}>
                <h2 style={{fontSize:"5em", fontWeight:700, marginBottom:"25px"}}>
                    404
                </h2>
                <p>
                    Oops, looks like you're in the wrong place
                </p>
                <div style={{marginTop:'70px',width:"max-content",margin:"35px auto 0"}} >
                    <Button
                        onClick={() => navigate(pageurl.LANDING)}
                    >
                    Go To Home Page
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Page404;