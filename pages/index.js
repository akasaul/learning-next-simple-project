import { getFeaturedEvents } from "@/dummy-data"
import EventList from "@/components/events/events-list";

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  )
}
