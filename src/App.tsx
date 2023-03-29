import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import NoteList from './components/NoteList';
import { VehicleEntry } from './models/vehicleEntryModel';

function App() {
  const [vehicles, setVehicles] = useState<VehicleEntry[]>([{
    id: "NCCBB1334",
    make: "Nissan",
    year: "2022",
    color: "#dfdfdf",
    date: (new Date).toString()
  }]);

  return (
    <>
    <Header/>
    <NoteList vehicles={vehicles} setVehicles={setVehicles}/>
    </>
  );
}

export default App;
