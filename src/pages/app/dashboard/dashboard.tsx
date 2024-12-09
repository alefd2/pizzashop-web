import { Helmet } from "react-helmet-async";

export const Dashboard = () => {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      </div>
    </>
  );
};
