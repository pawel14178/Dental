
import React from 'react'
import './open.scss';
import Card from './card/card';
import {OpenOpole} from "./../../data/OpenOpole";
import {OpenKato} from "./../../data/OpenKato";


const Open = () => (
    <div className="Open"> 
        <h1 className="Open__text">Zapraszam do moich gabinetów</h1>       
        <Card  city={"Opole"} street={"Katowicka 1"} tab={OpenOpole}/>
        <Card  city={"Katowice"} street={"Opolska 1"} tab={OpenKato}/>
    </div>
)

export default Open;