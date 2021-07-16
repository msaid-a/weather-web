import React from 'react'
import {Loading, ErrorBoundary} from '..'
interface AsyncPageProps {
  page: string
  fallback?: JSX.Element
}

const AsyncPage: React.FC<AsyncPageProps> = props => {
  const Component = React.lazy(() => import(`../../View/${props.page}`))

  const fallback = (
    <Loading />
  )

  return (
    <ErrorBoundary>
      <React.Suspense fallback={fallback}>
        <Component />
      </React.Suspense>
    </ErrorBoundary>
  )
}

export default AsyncPage