import React from 'react'
import { Link } from 'react-router-dom'
import { ClearTextInput } from '../../components'
import { SamplePngFile } from '../../assets/images'
export const HOMEPAGE_TEST_ID = 'homepage'

export function Homepage () {
    return (
        <div data-testid={HOMEPAGE_TEST_ID}><h1>Homepage</h1>
            <div>
                <Link to="/about">About Us</Link>
            </div>
            <ClearTextInput />
            <img src={SamplePngFile} alt="Sample Image" />
        </div>
    )
}
