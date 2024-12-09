import React, { useState, useEffect } from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const handleErrors = (event: ErrorEvent) => {
      const error = event.error;
      setHasError(true);
      setError(error);
    };
    window.addEventListener("error", handleErrors);
    return () => {
      window.removeEventListener("error", handleErrors);
    };
  }, []);

  if (hasError) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="max-w-md rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-lg font-bold">Erro</h2>
          <p className="mb-4 text-gray-600">{error?.message}</p>
          <p className="mb-4 text-gray-600">{error?.stack}</p>
          <button
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            onClick={() => window.location.reload()}
          >
            Recarregar página
          </button>
        </div>
      </div>
    );
  }
  return children;
};

export default ErrorBoundary;
