import React from 'react'
import s from './ErrorMessage.module.css'

type Props = {
  message: string
}

const ErrorMessage: React.FC<Props> = ({ message }) => (
  <div className={s.error}>Error: {message}</div>
)

export default ErrorMessage
