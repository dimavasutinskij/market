// schema.js

const product = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
      validation: (Rule) => Rule.required().max(500),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'benifits',
      title: 'Nutritional Benefits',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'versatility',
      title: 'Versatility',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'storage',
      title: 'Storage Tips',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    },
    {
      name: 'discount',
      title: 'Discount',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule) => Rule.required().min(0).max(5),
      options: {
        list: [
          { title: '0', value: 0 },
          { title: '1', value: 1 },
          { title: '2', value: 2 },
          { title: '3', value: 3 },
          { title: '4', value: 4 },
          { title: '5', value: 5 },
        ],
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          "vegetables", "fruits", "millets", "health", "nuts", "juice"
        ],
      },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
};

export default product