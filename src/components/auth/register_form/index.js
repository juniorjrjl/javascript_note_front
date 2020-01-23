import React, {Fragment, useState} from 'react';
import { Button, Field, Control, Input, Column, Help, Label } from 'rbx';
import { Redirect } from "react-router-dom";
import UserService from '../../../services/users';

function RegisterForm (){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirectToLogin, setRedirectToLogin] = useState(false);
    const [error, setError] = useState(false);

    const HandleSubmit = async (evt) =>{
        evt.preventDefault();
        try {
            await UserService.register({name: name, email: email, password: password});
            setRedirectToLogin(true);
        } catch (error){
            setError(true)
        }
    }

    if (redirectToLogin){
        return <Redirect to={{pathname: "login"}} />
    }

    return(
        <Fragment>
            <Column.Group centered>
                <form onSubmit={HandleSubmit}>
                    <Column size={12}>
                        <Field>
                            <Label size="small">Name:</Label>
                            <Control>
                                <Input type="name" required name="name" 
                                       onChange={e => setName(e.target.value)}
                                       value={name}/>
                            </Control>
                        </Field>
                        <Field>
                            <Label size="small">Email:</Label>
                            <Control>
                                <Input type="email" required name="email"
                                       onChange={e => setEmail(e.target.value)}
                                       value={email}/>
                            </Control>
                        </Field>
                        <Field>
                            <Label size="small">Password:</Label>
                            <Control>
                                <Input type="password" required name="password" 
                                       onChange={e => setPassword(e.target.value)}
                                       value={password}/>
                            </Control>
                        </Field>
                        <Field>
                            <Control>
                                <Column.Group>
                                    <Column>
                                        <a href="/" onClick={e => setRedirectToLogin(true)} className="button is-white has-text-custom-purple">Login</a>
                                    </Column>
                                    <Column>
                                        <Label className="padding-label has-text-custom-purple is-outlined">or</Label>
                                    </Column>
                                    <Column>
                                        <Button color="custom-purple" outlined>Register</Button>
                                    </Column>
                                </Column.Group>
                            </Control>
                        </Field>
                        {error && <Help color="danger" >Email or Password invalid</Help>}
                    </Column>
                </form>
            </Column.Group>
        </Fragment>
    )
}

export default RegisterForm;