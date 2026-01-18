import { createFileRoute,  } from '@tanstack/react-router'

export const Route = createFileRoute('/our-plans/')({
  component: RouteComponent,
})

function RouteComponent() {
  
  return <div>Hello "/our-plans"!</div>
}
