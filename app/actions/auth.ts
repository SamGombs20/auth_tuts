import { FormState, SignUpFormSchema } from "../lib/definitions";

export const signUp = async(formData:FormData, state:FormState)=>{
    const validatedFields = SignUpFormSchema.safeParse({
        name:formData.get("name"),
        email:formData.get('email'),
        password:formData.get('password')
    })
    if(!validatedFields.success){
        return {
            errors:validatedFields.error.flatten().fieldErrors
        }
    }
}