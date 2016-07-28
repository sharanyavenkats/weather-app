import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Main from '../containers/main'
import Foo from '../containers/foo'

const routes = (
    <Route path="/">
        <IndexRoute component={Main} />
        <Route path="foo" component={Foo} />
    </Route>
)

export default routes
