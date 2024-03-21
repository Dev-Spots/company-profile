import { Typography } from "@/components/atoms/typography/material-tailwind";

export default function Footer() {
  return (
    <footer className="w-full h-[5%] m-2">
      <Typography
        color="blue-gray"
        className="text-center text-lg text-gray-50"
      >
        &copy; {new Date().getFullYear()} Balkan Dreams
      </Typography>
    </footer>
  );
}
