import React from 'react'
import s from './LoadingSpinner.module.css'

const LoadingSpinner: React.FC = () => (
  <div className={s.loading}>
    <div className={s.spinner}></div>
  </div>
)

export default LoadingSpinner
