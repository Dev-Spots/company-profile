import { contactHandler } from "@/action/contact";
import ContactForm from "@/components/molleculs/form/contactForm";

export default function ContactFormWrapper() {
  return (
    <section
      className="flex flex-col space-y-4 m-[2rem] rounded-lg"
      id="contact"
    >
      <h2 className="text-cyan-200 p-1">Contact Us</h2>
      <form
        className="flex flex-col space-y-4 transition-all duration-300"
        action={contactHandler}
      >
        <ContactForm />
      </form>
    </section>
  );
}
