import { contactHandler } from "@/action/contact";
import ContactForm from "@/components/molleculs/form/contactForm";

export default function ContactFormWrapper() {
  return (
    <section
      className="flex flex-col space-y-4 m-[2rem] rounded-lg max-w-screen-xl mx-auto"
      id="contact"
    >
      <h2 className="text-cyan-200 p-1 sm:ml-12">Contact Us</h2>
      <form
        className="flex flex-col space-y-4 transition-all duration-300 sm:m-12"
        action={contactHandler}
      >
        <ContactForm />
      </form>
    </section>
  );
}
