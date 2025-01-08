import { Link } from "react-router";

export const NotFoundPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1>Página não encontrada</h1>
      <p className="text-accent-foreground">
        Voltar para o{" "}
        <Link to="/" className="text-sky-500 dark:text-sky-400">
          Dashboard
        </Link>
      </p>
    </div>
  );
};
