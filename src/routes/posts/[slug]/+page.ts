import { client } from '$lib/sanityClient';

type PostMeta = {
	title: string;
	slug: string;
};

type Post = {
	title: string;
	imageUrl?: string;
	body: any;
};

export async function load({ params }: { params: { slug: string } }) {
	const slug = params.slug;

	// 1. Obtener el post actual
	const post: Post = await client.fetch(
		`*[_type == "post" && slug.current == $slug][0]{
			title,
			"imageUrl": mainImage.asset->url,
			body
		}`,
		{ slug }
	);

	if (!post) {
		throw new Error('Post no encontrado');
	}

	// 2. Obtener todos los slugs para determinar prev y next
	const allPosts: PostMeta[] = await client.fetch(
		`*[_type == "post"] | order(_createdAt asc){
			title,
			"slug": slug.current
		}`
	);

	const currentIndex = allPosts.findIndex((p) => p.slug === slug);
	const prev = allPosts[currentIndex - 1] || null;
	const next = allPosts[currentIndex + 1] || null;

	return {
		post,
		prev,
		next
	};
}
