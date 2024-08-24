/* eslint-disable no-useless-escape */
import React from "react";
import CodeEditor from '@uiw/react-textarea-code-editor';
import { getAllEvents } from "../lib/event"

export function Event() {
  return (
    <CodeEditor
      value={`
/**
 * 

█▀▀ █░█ █▀▀ █▄░█ ▀█▀ █▀
██▄ ▀▄▀ ██▄ █░▀█ ░█░ ▄█
"List all curated events, from upcoming to past"
 * 
 **/ 

import { Event } from "@kalseljs/shared-types";

// Extended Event type with content links
interface ExtendedEvent extends Event {
  pitchDeck: {
    targetAudience: string;
    prerequisites?: string[];
    contentLinks: {
      slideDeck?: string;
      github?: string;
      additionalResources?: string[];
    };
  };
}

// All Events
${getAllEvents()}

// Function to structure a single event
function structureEvent(event: ExtendedEvent) {
  return {
    type: "event",
    data: {
      id: event.id,
      theme: event.theme,
      date: event.time.toLocaleDateString(),
      time: event.time.toLocaleTimeString(),
      locationType: event.location.type,
      locationName: event.location.type === "Online" ? "Online" : event.location.place.name,
      speakerName: event.speaker.name,
      speakerRole: event.speaker.jobRole,
      pitchDeck: {
        targetAudience: event.pitchDeck.targetAudience,
        prerequisites: event.pitchDeck.prerequisites || [],
        contentLinks: event.pitchDeck.contentLinks
      }
    }
  };
}

// Function to structure the events list page
function structureEventsListPage() {
  return {
    type: "eventsListPage",
    data: {
      title: "Upcoming KalselJS Events",
      description: "Join us for these exciting JavaScript events in South Borneo!",
      events: ALL_EVENTS.map(structureEvent)
    }
  };
}

// Generate the events list page structure
const eventsListPageStructure = structureEventsListPage();

// Export the structure for use in rendering
export default eventsListPageStructure;
      `}
      language="js"
      placeholder="Please enter JS code."
      padding={15}
      style={{
        backgroundColor: "#FDE9E4",
        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
      }}
    />
  );
}