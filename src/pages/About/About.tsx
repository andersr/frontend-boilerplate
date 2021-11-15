import React from 'react'

export const ABOUT_PAGE_TEST_ID = 'aboutpage'
// todo convert to templates instead of pages
export function AboutPage() {
  return (
    <div data-testid={ABOUT_PAGE_TEST_ID}>
      <h1>About Us</h1>
      <div>Home</div>
    </div>
  )
}
