import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: {
      owner: 'aastarbuck',
      name: 'ascension',
    },
  },
  collections: {
    posts: collection({
      label: 'Saga Entries',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title of Entry' } }),
        content: fields.document({
          label: 'The Story',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'src/assets/images',
            publicPath: '../../assets/images/',
          },
        }),
      },
    }),
  },
});