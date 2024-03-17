"use server";

import emailService from "@/lib/email";
import { redirect, RedirectType } from "next/navigation";

export const contactHandler = async (formdata: FormData) => {
  try {
    const email = formdata.get("email");
    const name = formdata.get("name");
    const message = formdata.get("message");

    if (!name || !email || !message) throw { message: "invalid input" };

    await emailService.sendEmail(
      email as string,
      message as string,
      `message from ${name}`
    );
  } catch (err) {
    redirect(
      `/?error-input-msg=${(err as Error)?.message || "unexpected error"}`,
      RedirectType.push
    );
  }
};
