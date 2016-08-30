import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Main from '../containers/main'
import HomeContainer from '../containers/home-container'

const routes = (
    <Route path='/' component={Main} >
        <IndexRoute component={HomeContainer} />
    </Route>
)

export default routes
