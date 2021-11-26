import './App.css';
import Expenses from "./components/Expenses";

function App() {
  const expenses= [
    {id:'e1',title:'Car Insurance',amount:294.67,date:new Date(2021,2,12)},
    {id:'e2',title:'TV',amount:'799.49',date:new Date(2021,2,14)},
    {id:'e3',title:'Toilet Paper',amount:'94.12',date:new Date(2021,2,28)},
    {id:'e4',title:'New Desk',amount:'450',date:new Date(2021,5,14)},
];
  return (
    <Expenses items={expenses}></Expenses>
  );
}

export default App;
