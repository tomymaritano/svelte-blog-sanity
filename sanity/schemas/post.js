export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Título' },
    { name: 'slug', type: 'slug', options: { source: 'title' }, title: 'Slug' },
    { name: 'mainImage', type: 'image', title: 'Imagen principal' },
    { name: 'body', type: 'array', of: [{ type: 'block' }], title: 'Contenido' },
  ],
};

