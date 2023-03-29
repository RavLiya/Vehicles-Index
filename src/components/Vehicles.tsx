import * as React from 'react';
import { Button, Card } from 'react-bootstrap';
import { VehicleEntry } from '../models/vehicleEntryModel';

interface IVehiclesProps {
  vehicle:VehicleEntry
  handleDelete: (id:string) => void
}

const Vehicles: React.FunctionComponent<IVehiclesProps> = ({vehicle, handleDelete}) => {
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>{vehicle.make}</Card.Title>
          <Card.Text>{vehicle.year}</Card.Text>
          <Card.Subtitle>{vehicle.date}</Card.Subtitle>
          <Button onClick={() => handleDelete(vehicle.id) }>Delete</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Vehicles;
