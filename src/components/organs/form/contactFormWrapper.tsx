import { sendContactAction } from "@/action/contact";
import ContactForm from "@/components/molleculs/form/contactForm";

export interface ContactFormWrapperProps {
  text: string;
}

export default function ContactFormWrapper({ text }: ContactFormWrapperProps) {
  return (
    <div className="flex flex-col space-y-4 mt-12">
      <hgroup className="flex flex-col items-center">
        <h2>{text}</h2>
      </hgroup>
      <form
        className="flex flex-col space-y-4 transition-all duration-300"
        action={sendContactAction}
      >
        <ContactForm />
      </form>
    </div>
  );
}
