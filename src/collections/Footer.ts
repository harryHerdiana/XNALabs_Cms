import {CollectionConfig} from 'payload/types'

const Footer: CollectionConfig = {
  slug: 'footer',
  admin: {
    useAsTitle: 'Title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'Title',
      type: 'text',
    },
    {
      name: 'Copyrights',
      type: 'text',
    },
    {
      name: 'column',
      type: 'relationship',
      relationTo: 'column',
      hasMany: true,
    },
    {
      name:'image',
      type:'upload',
      relationTo:'media'
    }
  ],
}

export default Footer
