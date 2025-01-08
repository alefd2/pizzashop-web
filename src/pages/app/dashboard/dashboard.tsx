import { Helmet } from "react-helmet-async";
import { MonthRevenueCard } from "./components/month-revenue";
import { MonthOrderAmountCard } from "./components/month-order-amount-card";
import { DayOrderAmountCard } from "./components/day-order-amount-card";
import { MonthCanceledOrderAmountCard } from "./components/month-canceled-order-amount-card";
import { RevenueChart } from "./components/revenue-chart";
import { PopularProductsChart } from "./components/popular-products-chart";

export const Dashboard = () => {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrderAmountCard />
          <DayOrderAmountCard />
          <MonthCanceledOrderAmountCard />
        </div>
        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularProductsChart />
          <span></span>
        </div>
      </div>
    </>
  );
};
