
import { sum } from './helper'
import Lottery from './Lottery'
import Ticket from './Ticket'


// import TicketNum from './TicketNum' // Remove the unused import statement
function App() {
  

let winCondition = (ticket) =>{
return ticket.every((num) => num===ticket[0])

}

  return (
    <>
      <Lottery n={3} winCondition = {winCondition}/>
   
      </>
  )
}

export default App
