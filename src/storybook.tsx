import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Dashboard } from './task-look-and-feel/Dashboard'
import { UserTable } from './task-react-hooks/UserTable'

storiesOf('Tasks', module)
  .add('task-react-hooks', () => <UserTable />)
  .add('task-look-and-feel', () => <Dashboard />)
