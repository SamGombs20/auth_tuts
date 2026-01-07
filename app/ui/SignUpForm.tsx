"use client"
import { useActionState } from "react";
import { signUp } from "../actions/auth";

export const SignUpForm =()=>{
    const [state, action, pending] = useActionState(signUp, {errors:{}})
    return(
        <form action={action}>
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" name="name"  />
            </div>
            {state?.errors?.name && (<p>{state.errors.name}</p>)}
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" />
            </div>
            {state?.errors?.email && (<p>{state.errors.email}</p>)}
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
            </div>
            {state?.errors?.password && (
                <div>
                    <p>Password must:</p>
                    <ul>
                        {state.errors.password.map((err, i)=>(
                            <li key={i}>{err}</li>
                        ))}
                    </ul>
                </div>
            )}
            <button type="submit" disabled={pending}>Sign Up</button>
        </form>
    );
}