import { field, group } from '@nuxthq/studio/theme'

export default defineNuxtSchema({
  appConfig: {
    seo: group({
      title: 'SEO',
      description: 'SEO configuration',
      icon: 'i-lucide-search',
      fields: {
        title: field({
          type: 'string',
          title: 'Title',
          description: 'Title of your website.',
          icon: 'i-lucide-title',
          default: 'My website'
        }),
        description: field({
          type: 'string',
          title: 'Description',
          description: 'Description of your website.',
          icon: 'i-lucide-description',
          default: 'My website description'
        }),
        url: field({
          type: 'string',
          title: 'URL',
          description: 'URL of your website.',
          icon: 'i-lucide-link',
          default: 'https://mywebsite.com'
        }),
        image: field({
          type: 'string',
          title: 'Image',
          description: 'Image of your website.',
          icon: 'i-lucide-image',
          default: 'https://mywebsite.com/image.jpg'
        })
      }
    }),
    socials: group({
      title: 'Socials',
      description: 'Socials configuration',
      icon: 'i-lucide-link',
      fields: {
        github: field({
          type: 'string',
          title: 'Github',
          description: 'Your Github account.',
          icon: 'i-lucide-github',
          default: 'https://github.com/myusername'
        }),
        twitter: field({
          type: 'string',
          title: 'Twitter',
          description: 'Your Twitter account.',
          icon: 'i-lucide-twitter',
          default: 'https://twitter.com/myusername'
        }),
        linkedin: field({
          type: 'string',
          title: 'Linkedin',
          description: 'Your Linkedin account.',
          icon: 'i-lucide-linkedin',
          default: 'https://www.linkedin.com/in/myusername'
        }),
        instagram: field({
          type: 'string',
          title: 'Instagram',
          description: 'Your Instagram account.',
          icon: 'i-lucide-instagram',
          default: 'https://www.instagram.com/myusername'
        }),
      }
    })
  }
})
