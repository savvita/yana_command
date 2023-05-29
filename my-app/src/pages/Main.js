import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import logoSearch from "../files/search_white_24dp.svg"
import '../cssFiles/style_main.css';
import Cards from "../components/Cards.js";
import React from "react";
import axios from "axios";
import { Hosting } from '../components/Hosting.ts';

function Main(){

    const [host] = useState(new Hosting());
    const [search, setSearch] = useState("");
    const [pix, setPix] = useState([]);

    function getPixByName(name){
        if(name!="")
        {
            axios({
                method:'get',
                url: `https://${host.getHost()}/api?text=${name}`,
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json'
                }
            })
            .then(data=>
            {
                setPix(data.data.hits.map((item, index)=>(item.largeImageURL)));
            });
        }
        
    }
    return(
        <div>
            <div id="form-search" action="">
                    <label id="labelForSearch" className="font" form="input-form-search">Search pix</label>
                    <input id="input-form-search" className="font" type="search" required value={search} onChange={(e)=>{setSearch(e.target.value)}}
                        onKeyDown={(event) =>
                            {
                                if (event.key === 'Enter') {
                                    getPixByName(search)
                                }
                            }}
                        ></input>
                        <button id="btn-search" onClick={()=>getPixByName(search)}>
                            <img id="logo-search" style={{width: '40px', height: '40px' }} src={logoSearch}></img>
                        </button>
            </div>
            <br></br>      
            <div id="form-pix">
                    <Cards
                        pix={pix}
                    ></Cards>
            </div>         
        </div>
    );
}export default Main;