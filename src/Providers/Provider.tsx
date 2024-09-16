import React, { useEffect, useState } from 'react'
import { ThemeProvider } from "next-themes"
import { type ThemeProviderProps } from 'next-themes/dist/types'
import { SessionProvider } from "next-auth/react"
import { Toaster } from "react-hot-toast"

const Provider = ({ children, ...props }: ThemeProviderProps) => {
    const [isMounted, setIsMounted] = useState<boolean>(false)

    useEffect(() => {
        if (typeof window !== 'undefined') setIsMounted(true)
    }, [])


    if (isMounted)
        return (
            <ThemeProvider {...props}>
                <SessionProvider>
                    {children}
                </SessionProvider>

                <Toaster position='bottom-right' />
            </ThemeProvider>
        )
}

export default Provider