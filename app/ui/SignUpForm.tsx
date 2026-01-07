import { signUp } from "../actions/auth";

export const SignUpForm =()=>{
    return(
        <form action={signUp}>
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" name="name"  />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
            </div>
            <button type="submit">Sign Up</button>
        </form>
    );
}