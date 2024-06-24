import type { CollectionEntry } from "astro:content";
import getSortedPosts from "./getSortedEvents";
import { slugifyAll } from "./slugify";

const getPostsByTag = (posts: CollectionEntry<"event">[], tag: string) =>
  getSortedPosts(
    posts.filter(post => slugifyAll(post.data.tags).includes(tag))
  );

export default getPostsByTag;
