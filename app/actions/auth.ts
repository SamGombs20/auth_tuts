'use server'
import { FormState, SignUpFormSchema } from "../lib/definitions";
import bcrypt from 'bcrypt'

export const signUp = async(formState:FormState,formData:FormData):Promise<FormState|undefined>=>{
    //Validate the form data
    const validatedFields = SignUpFormSchema.safeParse({
        name:formData.get("name"),
        email:formData.get('email'),
        password:formData.get('password')
    })

    // Prepare data for insertion into db
    const {name,email,password} = validatedFields.success ? validatedFields.data : {name:"",email:"",password:""};

    const hashedPassword = await bcrypt.hash(password, 10)
    if(!validatedFields.success){
        return {
            errors:validatedFields.error.flatten().fieldErrors
        }
    }
    else{
        console.log(
            "User Data:",{
                name,
                email,
                hashedPassword
            }
        )
    }
}