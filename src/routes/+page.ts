import { client } from '$lib/sanityClient';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url }) => {
  const tag = url.searchParams.get('tag') ?? undefined;

  const query = tag
    ? `*[_type == "post" && $tag in tags][] | order(_createdAt desc) {
        title,
        "slug": slug.current,
        "imageUrl": mainImage.asset->url,
        excerpt
      }`
    : `*[_type == "post"] | order(_createdAt desc) {
        title,
        "slug": slug.current,
        "imageUrl": mainImage.asset->url,
        excerpt
      }`;

  // 👇 Forzamos el tipo a evitar el error
  const posts = await client.fetch(query, tag ? { tag } as Record<string, unknown> : undefined);

  return { posts, tag };
};
