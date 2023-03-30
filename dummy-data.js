import EventDetailPage from "./pages/events/[eventId]";

const DUMMY_EVENTS = [
  {
    id: 'e1', 
    title: 'Programming for everyone',
    description: 'Everyone can learn to code! Yes, everyone! In this live event we are going to',
    location: 'Somestreet 25, 12345 San Somewhere',
    date: '2021-05-12', 
    image: 'images/proxy.jpeg',
    isFeatured: true
  },

  {
    id: 'e2', 
    title: 'Networking for introverts',
    description: 'We know: Netwworking is not fun if you are an interovert person. Yes, everyone! In this live event we are going to',
    location: 'Somestreet 25, 12345 San Somewhere',
    date: '2021-05-12', 
    image: 'images/proxy1.jpeg',
    isFeatured: true
  },

  {
    id: 'e3', 
    title: 'Networking for introverts',
    description: 'We know: Netwworking is not fun if you are an interovert person. Yes, everyone! In this live event we are going to',
    location: 'Somestreet 25, 12345 San Somewhere',
    date: '2021-05-12', 
    image: 'images/proxy1.jpeg',
    isFeatured: true
  }
  
]


export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter(event => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilterdedEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  })

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find(event => event.id === id);
}