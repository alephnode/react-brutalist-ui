import { addDecorator, configure } from '@storybook/react'
import { withOptions } from '@storybook/addon-options'
import { themes } from '@storybook/components'

addDecorator(
  withOptions({
    name: 'Theme',
    theme: {},
  })
)

// automatically import all files ending in *.stories.js
const req = require.context('../src/stories', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
