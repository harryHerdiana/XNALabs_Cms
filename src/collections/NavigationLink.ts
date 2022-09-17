import {CollectionConfig} from 'payload/types'

const NavigationLink: CollectionConfig = {
  slug: 'navigation-link',
  admin: {
    useAsTitle: 'Label',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'Label',
      type: 'text',
    },
    {
      name: 'Link',
      type: 'text',
    },
  ],
}

export default NavigationLink
