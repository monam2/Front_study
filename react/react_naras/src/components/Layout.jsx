import React from 'react'
import style from './Layout.module.css'
import { useNavigate } from "react-router-dom"

const Layout = ({children}) => {

    const router = useNavigate();
    const onClickHeader = ()=> {
        router('/')
    }
  return (
    <div>
        <header className={style.header} onClick={onClickHeader}>
            <div>🌎 Naras</div>
        </header>
        <main className={style.main}>{children}</main>
    </div>
  )
}

export default Layout