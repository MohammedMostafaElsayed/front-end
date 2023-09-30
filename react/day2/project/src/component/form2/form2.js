import Button from 'react-bootstrap/Button';


function Form2({msg, del}) {
    
    return (
        <div className='m-5 border border-secondary w-75 bg-secondary rounded'>
            <h1 className='m-5'>let get some work done</h1>
            {msg.map((f, i) => {
                return (
                    <div className='bg-secondary-subtle w-75 p-2 m-3 d-flex' key={i}>
                        <Button className="m-2" variant="danger" onClick={()=>{del(i)}}>Delete</Button>
                        <div className='m-3'>{f}</div>
                        <div></div>
                    </div>
                );
            })}
        </div>

    );
}

export default Form2;