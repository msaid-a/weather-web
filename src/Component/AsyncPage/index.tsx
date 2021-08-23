import React from "react";
import { Loading, ErrorBoundary } from "..";
import WheaterContex from "../../contex/wheateContex";
interface AsyncPageProps {
  page: string;
  fallback?: JSX.Element;
  location?: { latitude: number; longtitude: number };
}

const AsyncPage: React.FC<AsyncPageProps> = (props) => {
  const Component = React.lazy(() => import(`../../View/${props.page}`));

  const fallback = <Loading />;

  return (
    <ErrorBoundary>
      <React.Suspense fallback={fallback}>
        <WheaterContex location={props.location}>
          <Component />
        </WheaterContex>
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default AsyncPage;
