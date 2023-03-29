import * as React from 'react';
import { VehicleEntry } from '../models/vehicleEntryModel';
import Vehicles from './Vehicles';

interface INoteListProps {
    vehicles: VehicleEntry[],
    setVehicles: React.Dispatch<React.SetStateAction<VehicleEntry[]>>,
}

const NoteList: React.FunctionComponent<INoteListProps> = ({vehicles, setVehicles}) => {
    const handleDelete = (id:string) => {
        console.log(id);
        setVehicles(vehicles.filter(vehicles => vehicles.id !== id));
    }

    const renderNotes = ():JSX.Element[] => {
        return vehicles.map(vehicle=>{
           return <Vehicles key={vehicle.id} vehicle={vehicle} handleDelete={handleDelete}/>
        })
    }
  return (
  <>
    <h2>Notes</h2>
    <div>{ renderNotes() }</div>
  </>
  );
};

export default NoteList;
