import { addDecorator, configure } from '@storybook/react'
import { withOptions } from '@storybook/addon-options'
import { themes } from '@storybook/components'
import '@storybook/addon-console'

addDecorator(
  withOptions({
    name: 'Brutalist UI',
    url: 'https://github.com/alephnode/react-brutalist-ui',
  })
)

// automatically import all files ending in *.stories.js
const req = require.context('../src/stories', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
