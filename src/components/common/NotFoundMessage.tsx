import React from 'react'
import s from './NotFoundMessage.module.css'

type Props = {
  message: string
}

const NotFoundMessage: React.FC<Props> = ({ message }) => (
  <div className={s.notFound}>{message}</div>
)

export default NotFoundMessage
