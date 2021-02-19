import Head from 'next/head'
import { useState } from 'react'
import Todos from '../components/Todos'
import TodosList from '../components/TodosList'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Todos />
    </>
  )
}
