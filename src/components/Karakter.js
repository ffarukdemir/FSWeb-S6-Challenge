// Karakter bileşeniniz buraya gelecek

import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import styled from 'styled-components';
import Filmler from "./Filmler.js";

export const ContainerKarakterler = styled.div`
  width: 40vw;
  margin-left: auto;
  margin-right: auto;
  font-family: "Londrina Sketch";
  font-size: 1rem;
`;

const KarakterBilgileri = styled.div`
  border: 2px solid white;
  background-color: rgb(114, 190, 218, 0.5);
  padding: 15px;
  border-radius: 10px;
`;



export default function Karakter(props){
  const [karakterler, setKarakterler]=useState([]);
  const [selectedKarakter, setSelectedKarakter]=useState(null);

  useEffect(()=>{
    axios
    .get("https://swapi.dev/api/people")
    .then((response)=>{
      console.log(response.data);
      setKarakterler(response.data.results);
    })
    .catch((error)=>{
      console.log("Error!"+error);
    });
  }, []);

  function handleAccordingClick(karakter){
    setSelectedKarakter(selectedKarakter===karakter ? null : karakter);
    }

    return (
      <ContainerKarakterler>
{karakterler?(
  karakterler.map((karakter)=>(
    <KarakterBilgileri>
      <button onClick= {()=> handleAccordingClick(karakter)}>
        {karakter.name}
      </button>
      {selectedKarakter===karakter&& (
        <div>
          <p>height: {karakter.height}</p>
          <p>mass: {karakter.mass}</p>
          <p>hair_color: {karakter.hair_color}</p>
          <p>skin_color: {karakter.skin_color}</p>
          <p>eye_color: {karakter.eye_color}</p>
          <p>birth_year: {karakter.birth_year}</p>
          <p>gender: {karakter.gender}</p>
          <p>homeworld: {karakter.homeworld}</p>
          <Filmler filmler={karakter.films}/>
        </div>
      )}
    </KarakterBilgileri>
  ))
): (
  <h3>Yükleniyor...</h3>
)}

      </ContainerKarakterler>
    );
}