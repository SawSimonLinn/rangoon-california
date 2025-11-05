
"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

export type ContactFormState = {
  message: string;
  status: "success" | "error";
} | {
  message: null;
  status: null;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  try {
    const validatedFields = contactSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    });

    if (!validatedFields.success) {
      return {
        status: "error",
        message: "Please correct the errors in the form.",
      };
    }

    // In a real app, you would send an email here using a service like Resend.
    console.log("Contact form data:", validatedFields.data);

    return {
      status: "success",
      message: "Thank you for your message! We will get back to you shortly.",
    };
  } catch (error) {
    console.error(error);
    return {
      status: "error",
      message: "An unexpected error occurred. Please try again.",
    };
  }
}
