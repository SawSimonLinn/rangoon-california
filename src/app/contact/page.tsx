"use client";

import { useActionState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Image from "next/image";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { submitContactForm } from "./actions";
import { useToast } from "@/hooks/use-toast";
import { PlaceHolderImages } from "@/lib/placeholder-images";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export type ContactFormState =
  | {
      message: string;
      status: "success" | "error";
    }
  | {
      message: null;
      status: null;
    };

export default function ContactPage() {
  const { toast } = useToast();
  const mapImage = PlaceHolderImages.find((p) => p.id === "contact-map");

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const [state, formAction] = useActionState<ContactFormState, FormData>(
    submitContactForm,
    {
      status: null,
      message: null,
    }
  );

  useEffect(() => {
    if (state.status === "success") {
      toast({
        title: "Message Sent!",
        description: state.message,
      });
      form.reset();
    } else if (state.status === "error") {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: state.message,
      });
    }
  }, [state, toast, form]);

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We'd love to hear from you. Send us a message, or visit us at our
            location.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <InfoBlock
              icon={<MapPin className="h-6 w-6 text-primary" />}
              title="Our Location"
              lines={["123 Golden Gate Ave", "San Francisco, CA 94102"]}
            />
            <InfoBlock
              icon={<Clock className="h-6 w-6 text-primary" />}
              title="Opening Hours"
              lines={["Mon - Fri: 11am - 10pm", "Sat - Sun: 10am - 11pm"]}
            />
            <InfoBlock
              icon={<Phone className="h-6 w-6 text-primary" />}
              title="Call Us"
              lines={["(415) 123-4567"]}
            />
            <InfoBlock
              icon={<Mail className="h-6 w-6 text-primary" />}
              title="Email Us"
              lines={["hello@rangooncalifornia.com"]}
            />
          </div>

          <div className="lg:col-span-3">
            <Card className="border-bamboo/50 shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-3xl text-secondary">
                  Send a Message
                </CardTitle>
                <CardDescription>
                  Questions, feedback, or just want to say hello?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form action={formAction} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Full Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="you@example.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us what's on your mind..."
                              rows={6}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6"
                    >
                      Send Message
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>

        {mapImage && (
          <div className="mt-24 h-96 w-full rounded-lg overflow-hidden shadow-xl relative">
            <Image
              src={mapImage.imageUrl}
              alt={mapImage.description}
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
}

const InfoBlock = ({
  icon,
  title,
  lines,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
}) => (
  <div className="flex items-start gap-4">
    <div className="bg-primary/10 p-3 rounded-full">{icon}</div>
    <div>
      <h3 className="font-headline text-2xl text-secondary">{title}</h3>
      <div className="text-muted-foreground text-lg">
        {lines.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </div>
  </div>
);
