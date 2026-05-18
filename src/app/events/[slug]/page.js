import { notFound } from "next/navigation";
import { EventDetailPage } from "@/sections/pages/EventDetail";
import { EVENTS, getEvent } from "@/data/events";

export async function generateStaticParams() {
  return EVENTS.map((e) => ({ slug: e.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) return { title: "Event not found — FreedomPulse" };
  return {
    title: `${event.title} — FreedomPulse`,
    description: event.body,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) notFound();
  return <EventDetailPage event={event} />;
}
