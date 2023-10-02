import { useState } from "react";

export default function RegesterForm() {
    const[formInput, setFormInput] = useState({
        fname: "mohammed",
        lname: "mostafa",
        email: "a@g.com",
        userName: "mmm",
        password : '',
        confirmPassword: '',
        checked : false,

    })
    const[err, seterr] = useState({
        fname: null,
        lname: null,
        email: null,
        userName: null,
        password : null,
        confirmPassword: null,
        checked : null,

    })
    const handeler = (e)=>{
        if(e.target.name === 'lname'){
         setFormInput({...formInput,lname : e.target.value});
         seterr({...err,fname: e.target.value.length < 5 ? " shoud be more" : null})
        }
        if(e.target.name === 'fname'){
            setFormInput({...formInput,fname: e.target.value});
        }
        if(e.target.name === 'password'){
            setFormInput({...formInput,password : e.target.value});
            seterr({...err,password : e.target.value.length < 8 ? "length should be 8 or more" : null });
        }
        if(e.target.name === 'confirm'){
            setFormInput({...formInput,confirmPassword : e.target.value});
            seterr({...err,confirmPassword : e.target.value.length !== formInput.confirmPassword ? "password dont match" : null });
        }

    }
    const submited = (e)=>{
        e.preventDefault();
        console.log(formInput);
    }
    return (
        <form className=" g-3 m-3 p-5" onSubmit={submited}>
            <div className="col-md-4">
                <label for="validationDefault01" className="form-label">First name</label>
                <input value={formInput.fname} onChange={handeler} name='fname' type="text" pattern="[a-zA-Z]+" className="form-control" id="validationDefault01" required/>
            </div>
            <div className="col-md-4">
                <label for="validationDefault02" className="form-label">Last name</label>
                <input value={formInput.lname} name="lname" onChange={handeler} type="text" pattern="[a-zA-Z]+"  className="form-control" id="validationDefault02" required />
            </div>
            {err.fname && (<h6 className="form-text text-danger">{err.fname}</h6>)}

            <div className="col-md-4">
                <label for="validationDefault02" className="form-label">email</label>
                <input type="email" pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}" className="form-control" id="validationDefault02" required />
            </div>
            <div className="col-md-4">
                <label for="validationDefaultUsername" className="form-label">Username</label>
                <div className="input-group">
                    <span className="input-group-text" id="inputGroupPrepend2">@</span>
                    <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
                </div>
            </div>
            <div className="col-md-4">
                <label for="inputPassword6" className="col-form-label" >Password</label>
            </div>
            <div class="col-md-4">
                <input onChange={handeler} type="password" id="inputPassword6" name='password' className="form-control" aria-describedby="passwordHelpInline" />
            </div>
            {err.password && (<h6 id="passwordHelp" className="form-text text-danger">{err.password}</h6>)}

            
            
            <div className="col-md-4">
                <label for="validationDefault02" className="form-label">confirm passwrd</label>
                <input onChange={handeler} name='confirm' type="password" className="form-control" id="validationDefault02" required />
            </div>
            {err.confirmPassword && (<h6 className="form-text text-danger">{err.confirmPassword}</h6>)}
            <div className="col-12">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                    <label className="form-check-label" for="invalidCheck2">
                        Agree to terms and conditions
                    </label>
                </div>
            </div>
            <div className="col-12">
                <button className="btn btn-primary" type="submit">Sign Up</button>
            </div>
           
        </form>
    );
}