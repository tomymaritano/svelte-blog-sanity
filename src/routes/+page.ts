import { client } from '$lib/sanityClient';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url }) => {
  const tag = url.searchParams.get('tag');

  const query = tag
    ? `*[_type == "post" && $tag in tags] | order(_createdAt desc) {
        title,
        "slug": slug.current,
        "imageUrl": mainImage.asset->url,
        _createdAt,
        "excerpt": pt::text(body[0])
      }`
    : `*[_type == "post"] | order(_createdAt desc) {
        title,
        "slug": slug.current,
        "imageUrl": mainImage.asset->url,
        _createdAt,
        "excerpt": pt::text(body[0])
      }`;

  // 👉 Forzamos el tipo de params cuando existe tag
  const posts = tag
    ? await client.fetch(query, { tag } as Record<string, unknown>)
    : await client.fetch(query);

  const formattedPosts = posts.map((post: any) => ({
    ...post,
    date: new Date(post._createdAt).toLocaleDateString('es-AR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
  }));

  return { posts: formattedPosts, tag };
};
