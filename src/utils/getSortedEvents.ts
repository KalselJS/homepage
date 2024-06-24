import type { CollectionEntry } from "astro:content";
import postFilter from "./postFilter";

const getSortedEvents = (events: CollectionEntry<"event">[]) => {
  return events
    .filter(postFilter)
    .sort(
      (a, b) =>
        Math.floor(
          new Date(b.data.modDatetime ?? b.data.pubDatetime).getTime() / 1000
        ) -
        Math.floor(
          new Date(a.data.modDatetime ?? a.data.pubDatetime).getTime() / 1000
        )
    );
};

export default getSortedEvents;
