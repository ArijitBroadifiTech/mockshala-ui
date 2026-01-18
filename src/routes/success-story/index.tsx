import { createFileRoute,  } from '@tanstack/react-router'

export const Route = createFileRoute('/success-story/')({
  component: RouteComponent,
})

function RouteComponent() {
  
  return <div>Hello "/success-story"!</div>
}
