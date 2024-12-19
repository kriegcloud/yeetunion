'use client'

import { Button } from '@dank/ui/button'
import { useToast } from '@dank/ui/toast'

export const ShowToast = () => {
  const { toast } = useToast()

  return (
    <Button
      variant='outline'
      onClick={() => {
        toast({
          title: 'Hello, World!',
          description: 'This is a toast message.',
        })
      }}
    >
      Show Toast
    </Button>
  )
}
