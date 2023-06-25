/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      <h1>Oops! Algo deu errado.</h1>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Tentar Novamente</button>
    </div>
  );
};
