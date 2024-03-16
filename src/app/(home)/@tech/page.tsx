import TechStackList from "@/components/organs/content/techList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "our tech list golang, postgresql, python, astro, redux bootstrap, cassandra, css, express, html, firebase, graphql, heroku, mongodb, mongoose, mysql, nestjs, netlify, nextjs, nodejs rabbitmq, tailwind, typescript, vercel, socketio, react, vue, redis",
};

export default function TechSection() {
  return <TechStackList />;
}
