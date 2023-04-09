import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { foto } from './foto';

function Photos() {
    const url = 'http://localhost:3000/photos';
    const [photos, setPhotos] = useState<foto[]>([]);

    const getDataPhotos = async ()=> {
        const response =  await fetch(url);
        const dataPhotos = await response.json();
        setPhotos(dataPhotos);
        console.log(photos); 
    }

    useEffect( ()=> {
        getDataPhotos();
    })

    return (
        <div className="container">
            <div className="row">
                    <h1>Tampilkan Foto</h1>
                    { photos.map( (foto)=> {
                    return (
                        <div className="col-3">
                            <CardPhotos 
                            key={foto.id} 
                            title={foto.title} 
                            image={foto.image} 
                            />
                        </div> ) }
                    )}     
            </div>
        </div>
    )
}

function CardPhotos(props) {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.image} style={{ height : '100px' }} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            test
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }

export default Photos;