import React from 'react'
import Home from '../page'
import { cookies } from 'next/headers'

const FirstHome = async ({ params }) => {
    const c = await cookies()
    console.log(c.get("systemLang"))
    return <Home />
}

export default FirstHome;

