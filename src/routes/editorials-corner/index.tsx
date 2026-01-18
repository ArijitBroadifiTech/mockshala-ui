import { createFileRoute,  } from '@tanstack/react-router'

export const Route = createFileRoute('/editorials-corner/')({
  component: RouteComponent,
})

function RouteComponent() {
  
  return <div>Hello "/editorials-corner"!</div>
}
