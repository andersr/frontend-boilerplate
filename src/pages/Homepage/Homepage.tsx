import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CurrentCount } from '../../components'
import { SamplePngFile } from '../../assets/images'
export const HOMEPAGE_TEST_ID = 'homepage'

export function Homepage () {
    const [foo, setFoo] = useState('')
    useEffect(() => {
        if (foo === 'dasdsd') {
            console.warn('nad foo')
        }
    }, [foo])

    return (
        <div data-testid={HOMEPAGE_TEST_ID}><h1>Homepage</h1>
            <div>
                <Link to="/about">About Us</Link>
            </div>
            <CurrentCount />
            <img src={SamplePngFile} alt="Sample Image" />
            <button onClick={() => setFoo('bla')}>Set FOO</button>
        </div>
    )
}
