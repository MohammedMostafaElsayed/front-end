import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function BasicExample({input, val, btn}) {
   
  
    return (
        <Form className='m-5 border border-secondary w-75 bg-secondary rounded'>
            <h1>TO-DO APP</h1>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>add your task</Form.Label>
                <Form.Control required value={val} onChange={(e) => input(e.target.value)} className="m-3 w-75" type="text"  placeholder="Enter task" />
            </Form.Group>

            
            <Button variant="primary"  onClick={()=>{btn()}}>
                Submit
            </Button>
        </Form>
    );
}

export default BasicExample;