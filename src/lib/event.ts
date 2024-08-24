import { Event } from "../types";
import EVENTS from "../data/events.json"

const _getNearestEvent = (events: Event[], date: Date): Event | null  => {
    if (events.length === 0) {
      return null;
    }
  
    let nearestEvent: Event | null = null;
    let nearestDistance = Infinity;
  
    for (const event of events) {
      const evtTime = new Date(event.time)
      const distance = Math.abs(evtTime.getTime() - date.getTime());
      if (distance < nearestDistance) {
        nearestEvent = event;
        nearestDistance = distance;
      }
    }
  
    return nearestEvent;
  }
  
const printLnEvtLocation = (evt: Event) => {
  if(evt.location.type === "Offline"){
    return (
      `place: {
          name: "Borneo Dev Center",
          pin: "https://goo.gl/maps/examplePin2"
        }
      },`
    )
  }

  return (
    `place: {
        online: ${evt.location.online}
      },`
  )
}
const printLn = (event: Event) => {
return( 
`id: "${event.id}",
    theme: "${event.theme}",
    time: new Date("${event.time}"),
    location: {
      type: ${event.location.type},
      ${printLnEvtLocation(event)}
      speaker: {                       
        name: "${event.speaker.name}",
        jobRole: "${event.speaker.jobRole}"                   
    },
    pitchDeck: {
      targetAudience: "${event.pitchDeck.targetAudience}",
      contentLinks: {
        slideDeck: "${event.pitchDeck.contentLinks.slideDeck}",
        github: "${event.pitchDeck.contentLinks.github}",
      }
    }`
)
}

export const getDescNearestEvent = () => {
   const event = _getNearestEvent(EVENTS as Event[], new Date());

   if(event){
    return (
`const UPCOMING_EVENT = {
    ${printLn(event)}
}`
)}
          
   return null
}

export const getAllEvents = () => {
  return (
`const ALL_EVENT = [
${EVENTS.map((evt) => (
`{
    ${printLn(evt)}
}`)
  )},
]`
  )
}