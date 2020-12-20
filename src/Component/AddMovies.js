import React,{useState} from 'react';
import {Modal,Button,Form,Col} from 'react-bootstrap';
import './Moviecard.css'


function AddMovies ({addMovie}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const [input, setInput] = useState({
        Title:"",
        Description:"",
        PosterUrl:"" ,
        rate:0,
        edit:false
        
      }
    );
    const handleChange=(e)=>{
      setInput({...input,[e.target.name]:e.target.value});
       };
    return (

      <div>
        <Button style={{backgroundColor:'black'}} variant="primary" onClick={handleShow}>
           Click here to add movie !
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Please enter informations about movie</Modal.Title>
          </Modal.Header>
          <Modal.Body> 
            <Form.Row>
            <Form.Label column lg={2}>PosterUrl</Form.Label>
            <Col>
            <Form.Control type="text" placeholder="PosterUrl..." name="PosterUrl" onChange={handleChange} value={input.PosterUrl} />
            </Col>
            </Form.Row><br/>
            <Form.Row>
            <Form.Label column lg={2}>Title</Form.Label>
            <Col>
            <Form.Control type="text" placeholder="title..." name="Title" onChange={handleChange} value={input.Title} />
            </Col>
            </Form.Row><br/>
            <Form.Row>
            <Form.Label column lg={2}>Description</Form.Label>
            <Col>
            <Form.Control type="text" placeholder="description..." name="Description" onChange={handleChange} value={input.Description} />
            </Col>
            </Form.Row><br/>
            <Form.Row>
            <Form.Label column lg={2}>rate</Form.Label>
            <Col>
            <Form.Control as="select" name="rate" onChange={handleChange} value={input.rate} custom >
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
            </Col>
            </Form.Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={
              ()=>{addMovie(input);
                handleClose();
                setInput({
                  Title:"",
                  Description:"",
                  PosterUrl:"" ,
                  rate:{
                    value:0,
                    edit:false
                  },
                })
              }
            }>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        </div>
    );
  }

export default AddMovies