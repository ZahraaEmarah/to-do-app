import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export const Loader = () => {
  return (
    <FontAwesomeIcon className='px-3' icon={faSpinner} spin />
  )
}
