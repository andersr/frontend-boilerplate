import React from 'react'
import { Link } from 'react-router-dom'
export const HOMEPAGE_TEST_ID = 'homepage'

export function Homepage () {
  return (
    <div data-testid={HOMEPAGE_TEST_ID}><h1>Homepage</h1>
    <div>
    <Link to="/about">About Us</Link>
    </div>
    </div>
  )
}
