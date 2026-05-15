import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Platform } from "@/sections/Platform";
import { Endorsements } from "@/sections/Endorsements";
import { GetInvolved } from "@/sections/GetInvolved";
import { Newsletter } from "@/sections/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Platform />
      <Endorsements />
      <GetInvolved />
      <Newsletter />
    </>
  );
}
