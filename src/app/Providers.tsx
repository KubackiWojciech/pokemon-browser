import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient();

interface ProvidersProps {
  readonly children: React.ReactNode
}

export default function Providers({children}: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
  )
}
