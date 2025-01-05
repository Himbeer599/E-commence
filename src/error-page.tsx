import React from 'react';
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

interface CustomError {
  statusText?: string;
  message?: string;
}

const ErrorPage: React.FC = () => {
  const error = useRouteError() as CustomError;
  console.error(error);

  const errorMessage = isRouteErrorResponse(error)
    ? error.statusText
    : error.message || 'Unknown error';

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {/* <p>
        <i>{errorMessage}</i>
      </p> */}
    </div>
  );
};

export default ErrorPage; 