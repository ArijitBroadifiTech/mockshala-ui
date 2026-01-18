import { createFileRoute,  } from '@tanstack/react-router'

export const Route = createFileRoute('/free-mocks/')({
  component: RouteComponent,
})

function RouteComponent() {
  
  return <div>Hello "/free-mocks"!</div>
}
