import React from 'react'
import {Whetherdata} from './Whetherdata'
import {useSelector} from 'react-redux'
export const Footer = () => {
  const {isWhetherSet} = useSelector(state => state.setInitial)
    return (
        <>
            <footer>
            {isWhetherSet ? (
              <Whetherdata/>
            ) : (
              <h3>No Data Available</h3>
            )}
          </footer>
        </>
    )
}