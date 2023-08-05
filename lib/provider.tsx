"use client"

import React from "react"
import { QueryClient, QueryClientProvider } from "react-query"

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      {children}
    </QueryClientProvider>
  )
}

export default Provider
