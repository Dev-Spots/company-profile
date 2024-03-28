import ContactFormWrapper from "@/components/organs/form/contactFormWrapper";
import { Suspense } from "react";

export default function ContactSection() {
  return (
    <Suspense>
      <ContactFormWrapper />
    </Suspense>
  );
}
