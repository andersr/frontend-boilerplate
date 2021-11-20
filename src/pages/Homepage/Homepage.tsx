import React from 'react'
import { Link } from 'react-router-dom'

import { SamplePngFile } from '../../assets/images'
import { CurrentCount } from '../../components'
export const HOMEPAGE_TEST_ID = 'homepage'

export function Homepage() {
  return (
    <div data-testid={HOMEPAGE_TEST_ID}>
      <h1>Homepage</h1>
      <div>
        <Link to="/about">About Us</Link>
      </div>
      <CurrentCount />
      <img src={SamplePngFile} alt="Sample Image" />
    </div>
  )
}
