import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import logoSearch from "../files/search_white_24dp.svg"
import '../cssFiles/style_main.css';
import Cards from "../components/Cards.js";
import React from "react";
import axios from "axios";
import { Hosting } from '../components/Hosting.ts';

function Main() {
    // let obj = {"total":0,"totalHits":0,"hits":[]};
    // let obj2 = {"total":1954,"totalHits":500,"hits":[{"id":3386356,"pageURL":"https://pixabay.com/photos/piglet-mammal-species-fauna-3386356/","type":"photo","tags":"piglet, mammal, species","previewURL":"https://cdn.pixabay.com/photo/2018/05/09/22/44/piglet-3386356_150.jpg","previewWidth":150,"previewHeight":99,"webformatURL":"https://pixabay.com/get/g559a0719535d311c566d451e688a266be9cd5eb79181f69ae9b8a23980fa65b85791056a7ba710f07af034e8cabbd60a7bcac780e5dec332b502dad8f69197e1_640.jpg","webformatWidth":640,"webformatHeight":426,"largeImageURL":"https://pixabay.com/get/g7cc7554c615e04109808008e4e4020b9ecae94aa679adff08908b38c942e488c9946e6e4c8f58d9674ab059276fe072e19f63bf79af2aa375d7ef278d2b34475_1280.jpg","imageWidth":4851,"imageHeight":3234,"imageSize":3682743,"views":131796,"downloads":70377,"collections":398,"likes":439,"comments":123,"user_id":3128024,"user":"RoyBuri","userImageURL":"https://cdn.pixabay.com/user/2017/10/30/22-28-19-779_250x250.png"},{"id":242520,"pageURL":"https://pixabay.com/photos/guinea-pig-cavy-pet-guinea-rodent-242520/","type":"photo","tags":"guinea pig, cavy, pet","previewURL":"https://cdn.pixabay.com/photo/2014/01/11/23/40/guinea-pig-242520_150.jpg","previewWidth":150,"previewHeight":99,"webformatURL":"https://pixabay.com/get/g7a4ff5aa08099c4f7c6810f650d33cc9dec0298174f5c8260e0b13a7f9e1cc6f113f41584fd2a2b87eca50bbb9c90235_640.jpg","webformatWidth":640,"webformatHeight":425,"largeImageURL":"https://pixabay.com/get/g760a5346b7b469bbf8a4de22c5ed342e1f9a5ee10d92f1357620b558a312e3cee350bea4e02b4bcf1cec2dba388cde8c10f26361c2ce48da33ab3c7ab4bfacfd_1280.jpg","imageWidth":3008,"imageHeight":2000,"imageSize":966620,"views":105128,"downloads":37314,"collections":268,"likes":226,"comments":34,"user_id":55562,"user":"vantagepointfl","userImageURL":""},{"id":3741880,"pageURL":"https://pixabay.com/photos/piglets-animal-habitat-species-pig-3741880/","type":"photo","tags":"piglets, animal, habitat","previewURL":"https://cdn.pixabay.com/photo/2018/10/12/10/31/piglets-3741880_150.jpg","previewWidth":150,"previewHeight":100,"webformatURL":"https://pixabay.com/get/g0091f2412c34d3448814ea253e4d34dbf55a1fc7707b4c8731cc387d062302bd9aa0dc11d12811708947ea52e3b453d37de7b2639ec3f9d7a67a886771df28d0_640.jpg","webformatWidth":640,"webformatHeight":427,"largeImageURL":"https://pixabay.com/get/g3351f0555bd27475f474dd9d49bd240b53fce39518b354ba104e105db601fb9b181749ecc2c8757c525613185245d192742a06b04352cd2dbe752e5cf6059017_1280.jpg","imageWidth":4900,"imageHeight":3271,"imageSize":4369135,"views":62223,"downloads":50052,"collections":276,"likes":142,"comments":77,"user_id":1377835,"user":"MabelAmber","userImageURL":"https://cdn.pixabay.com/user/2023/04/19/11-42-04-154_250x250.jpg"}]};
    const [host] = useState(new Hosting());
    const [search, setSearch] = useState("");
    const [pix, setPix] = useState([]);
    const [isHiddenPicture, setHiddenPicture] = useState("none");
    const [isHiddenCards, setHiddenCards] = useState("none");
    const [numberOfPaage,setNumberOfPaage] = useState(2);
    const[pictures,setPictures] = useState([]);
    const [tempPicture,setTempPicture] = useState([]);
    // const [end,setEnd] = useState(false)
    function getPixByName(name) {
        // setPix(obj2.hits.map((item, index) => (item.largeImageURL)));
        // return;
        if (name != "") {
            axios({
                method: 'get',
                url: `https://pixabay.com/api/?key=29800629-4ce57f3dcb86337a1cd80b83b&q=${name}&image_type=photo&per_page=3`,
                // url: `https://${host.getHost()}/getImages?text=${name}`,
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json'
                }
            })
                .then(data => {
                    if (data.data.total == 0) {
                        setHiddenCards("none");
                        setHiddenPicture("flex");
                    }
                    else {
                        setPix(data.data.hits.map((item, index) => (item.largeImageURL)));
                        setNumberOfPaage(2);
                        setCache(name);
                        setHiddenCards("flex");
                        setHiddenPicture("none");

                    }
                });
        }
        else {

            setHiddenCards("none");
            setHiddenPicture("flex");
        }
    }
    function setCache(text){
        axios({
            method: 'get',
            url: `https://pixabay.com/api/?key=29800629-4ce57f3dcb86337a1cd80b83b&q=${text}&image_type=photo&per_page=3&page=${numberOfPaage}"`,
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
            }
        }).then(res => {
            setPictures(res.data.hits);
            console.log(pictures);
        })
        axios({
            method: 'get',
            url: `https://pixabay.com/api/?key=29800629-4ce57f3dcb86337a1cd80b83b&q=${text}&image_type=photo&per_page=100`,
            // url: `https://${host.getHost()}/getImages?text=${name}`,
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
            }
        })
        .then(result=>{
            setTempPicture(result.data.hits)
            console.log(tempPicture);
        })
    }
    function deleteCard(event){
        var mas = [];
        let end = false
        for(let i =0; i< pix.length; i ++){
            if(i != event.target.id){
                mas.push(pix[i])
            }
            else{
                do{
                    const ind = Math.round(Math.random() * (98 - 3))
                    console.log(tempPicture[ind]['previewURL']);
                    const flag = 0;
                    for(let x =0; x< pix.length; x++){
                        if(pix[x] == tempPicture[ind]['previewURL']){
                            flag = flag + 1;
                        }
                    }
                    if(flag == 0){
                        console.log("flag");
                        mas.push(tempPicture[ind]['previewURL'])
                        console.log(mas);
                        end = true
                        break
                        // setEnd(true)
                        // return
                    }
                }
                while(!end)
                console.log("end do while");
            }
        }
        setPix(mas)
        console.log(pix);
    }
    return (
        <div>
            <div id="form-search" action="">
                <label id="labelForSearch" className="font" form="input-form-search">Search pix</label>
                <input id="input-form-search" className="font" type="search" required value={search} onChange={(e) => { setSearch(e.target.value) }}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            getPixByName(search)
                        }
                    }}
                ></input>
                <button id="btn-search" onClick={() => getPixByName(search)}>
                    <img id="logo-search" style={{ width: '40px', height: '40px' }} src={logoSearch}></img>
                </button>
            </div>
            <br></br>
            <div id="form-pix" style={{ display: isHiddenCards }}>
                <Cards
                    deleteCard={deleteCard}
                    pix={pix}
                ></Cards>
            </div>
            <div className="pictureNotFound" style={{ display: isHiddenPicture }}>
                <img src='data:image/png;base64,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'></img>
            </div>
        </div>
    );
} export default Main;