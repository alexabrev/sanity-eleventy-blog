export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6123d19cd1217b1c1bc73fdf',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-2zorsdrs',
                  apiId: '41467c9e-a53c-45a5-b574-849e84b72a78'
                },
                {
                  buildHookId: '6123d19ced6cb722edaa92ab',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-tkeszrgu',
                  apiId: 'fa76e1dc-da33-4149-9fc6-7545f0968abc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alxabrper/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-tkeszrgu.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
