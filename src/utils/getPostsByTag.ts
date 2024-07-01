import type { CollectionEntry } from "astro:content";
import getSortedEvents from "./getSortedEvents";
import { slugifyAll } from "./slugify";

const getPostsByTag = (posts: CollectionEntry<"event">[], tag: string) =>
  getSortedEvents(
    posts.filter(post => slugifyAll(post.data.tags).includes(tag))
  );

export default getPostsByTag;
