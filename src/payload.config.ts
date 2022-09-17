import {buildConfig} from 'payload/config'
import path from 'path'
import Categories from './collections/Categories'
import Posts from './collections/Posts'
import Tags from './collections/Tags'
import Users from './collections/Users'
import Footer from './collections/Footer'
import Column from './collections/Column'
import NavigationLink from './collections/NavigationLink'
import Media from './collections/Media'
import FormBuilder from '@payloadcms/plugin-form-builder'
import seo from '@payloadcms/plugin-seo'
import nestedDocs from '@payloadcms/plugin-nested-docs'

export default buildConfig({
  serverURL: 'http://localhost:3000',
  cors: '*',
  admin: {
    user: Users.slug,
  },
  collections: [Users, Footer, Column, NavigationLink, Media],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  // plugins:[
  //   FormBuilder({
  //     redirectRelationships: ['footer'],
  //   }),
  // ],
  routes: {
    api: '/api',
    admin: '/admin',
    graphQL: '/graphql',
    graphQLPlayground: '/graphql-playground',
  },

  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
})
