import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
import { App } from './components'
import { AboutPage, Homepage } from './pages'

ReactDOM.render(<BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}>
            <Route index element={<Homepage />} />
            <Route path="about" element={<AboutPage />} />
            {/*
        <Route path=":teamId" element={<Team />} />
        <Route path="new" element={<NewTeamForm />} />
        <Route index element={<LeagueStandings />} />
      </Route> */}
        </Route>
    </Routes>
</BrowserRouter>, document.getElementById('root'))
