import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

function Contact() {
  return (
    <section id="contact" className="py-20 bgmuted/50">
      <div className="containe-r">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Contact Me</CardTitle>
            <CardDescription>
              Fill out the form below to send me a message.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Textarea placeholder="Your Message" />
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default Contact;
