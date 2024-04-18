// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import Spinner from './Spinner'
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import React from 'react'

describe('Spinner component', ()=>{
  test('renders onscreen without error when on prop is true', ()=>{
    render(<Spinner on={true}/>)
    const spinnerMsg = screen.queryByText('Please wait...')
    expect(spinnerMsg).toBeInTheDocument()
  })
  test('does not render onscreen when on prop is false', ()=>{
    render(<Spinner on={false}/>)
    const spinnerMsg = screen.queryByText('Please wait...')
    expect(spinnerMsg).not.toBeInTheDocument()
  })  
})