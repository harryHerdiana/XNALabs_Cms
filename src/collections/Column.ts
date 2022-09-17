import {CollectionConfig} from 'payload/types'

const Column: CollectionConfig = {
  slug: 'column',
  admin: {
    useAsTitle: 'Column_Headline',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'Column_Headline',
      type: 'text',
    },
    {
      name: 'Links',
      type: 'relationship',
      relationTo: 'navigation-link',
      hasMany: true,
    },
  ],
}

export default Column
