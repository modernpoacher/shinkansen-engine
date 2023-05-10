export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  options: {
    storySort: {
      order: [
        'Stories',
        [
          'Engine',
          [
            'String',
            'Number',
            'Array',
            'Object',
            'Boolean',
            'Null'
          ],
          'Components',
          [
            'Cogs',
            'Sprockets',
            'Gears',
            'Pinion'
          ]
        ]
      ]
    }
  }
}
