"use server";

import { z } from "zod";

export type ReservationFormState =
  | {
      message: string;
      status: "success" | "error";
    }
  | {
      message: null;
      status: null;
    };

export async function submitReservation(
  prevState: ReservationFormState,
  formData: FormData
): Promise<ReservationFormState> {
  // Define schema inside the function to avoid "use server" conflicts
  const reservationSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
      message: "Please enter a valid phone number.",
    }),
    date: z.date({ required_error: "Please select a date." }),
    time: z.string({ required_error: "Please select a time." }),
    guests: z.string().refine((val) => parseInt(val) > 0, {
      message: "Number of guests must be at least 1.",
    }),
  });

  // This is a simulation. In a real app, you would save this to a database.
  try {
    const validatedFields = reservationSchema.safeParse({
      name: formData.get("name"),
      phone: formData.get("phone"),
      date: new Date(formData.get("date") as string),
      time: formData.get("time"),
      guests: formData.get("guests"),
    });

    if (!validatedFields.success) {
      const errorMessages = validatedFields.error.errors
        .map((e) => e.message)
        .join("\n");
      return {
        status: "error",
        message: errorMessages,
      };
    }

    // Here you would typically:
    // 1. Save the data to Firestore.
    // 2. Send a confirmation email via Resend.
    console.log("Reservation data:", validatedFields.data);

    return {
      status: "success",
      message:
        "We've received your reservation request. We can't wait to welcome you!",
    };
  } catch (error) {
    console.error(error);
    return {
      status: "error",
      message: "Something went wrong. Please try again.",
    };
  }
}
