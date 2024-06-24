import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { generateOgImageForPost } from "@utils/generateOgImages";
import { slugifyStr } from "@utils/slugify";

export async function getStaticPaths() {
  const events = await getCollection("event").then(p =>
    p.filter(({ data }) => !data.draft && !data.ogImage)
  );

  return events.map(event => ({
    params: { slug: slugifyStr(event?.data.title) },
    props: event,
  }));
}

export const GET: APIRoute = async ({ props }) =>
  new Response(
    await generateOgImageForPost(props as CollectionEntry<"event">),
    {
      headers: { "Content-Type": "image/png" },
    }
  );
