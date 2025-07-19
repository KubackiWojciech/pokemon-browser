import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { type ReactNode } from 'react'

export const queryClient = new QueryClient(); 

interface ProvidersParams {
    children: ReactNode
}

export default function Providers({children}: Readonly<ProvidersParams>) {
  return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
  )
}
