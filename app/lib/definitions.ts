import * as z from 'zod'
export const SignUpFormSchema = z.object({
    name: z
        .string()
        .min(2, { error: 'Name must be at least 2 characters long.' })
        .trim(),
    email: z.email({ error: 'Please enter a valid email address' }).trim(),
    password: z
        .string()
        .min(6, { error: 'Password must be at least 6 characters long.' })
        .regex(/[a-zA-Z]/, { error: "Contain at least one letter" })
        .regex(/[0-9]/, { error: 'Contain at least a number' })
        .regex(/[^a-zA-Z0-9]/, { error: 'Contain at least one special character' })
        .trim()
})

export type FormState =
    | {
        errors?: {
            name?: string[]
            email?: string[]
            password?: string[]
        }
        message?:string
    }
    | undefined