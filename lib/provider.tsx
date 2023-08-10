"use client"

import React from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { NextUIProvider } from "@nextui-org/react"

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <NextUIProvider>{children}</NextUIProvider>
    </QueryClientProvider>
  )
}

export default Provider
