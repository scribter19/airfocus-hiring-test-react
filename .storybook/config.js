import { configure } from '@storybook/react'
import './globalStyles'

const req = require.context('../src', true, /storybook\.tsx$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
