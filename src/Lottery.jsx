import { useState } from "react";
import "./Lottery.css"
import {genTicket, sum} from "./helper"
import Ticket from "./Ticket"
import Button from './Button'
export default function Lottery({ n, winCondition }){
   let [ticket,setTicket] = useState(genTicket(n));
   let isWinning  = winCondition(ticket);

   let buyTicket = () =>{
setTicket(genTicket(n))

   }
   return(
      <div> 
         <h1 className="vintage-lottery">Lottery Game</h1>
         <div className="ticket"> 
          <Ticket ticket = {ticket }/>
           
         </div> 
         <Button action = {buyTicket}/>
         <h3>{isWinning && "Congratulation! you won!"}</h3>
      </div>
   );
}