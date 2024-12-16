import React from "react";
import dynamic from "next/dynamic";

import {
  Menu,
  Card,
  Button,
  CardBody,
  MenuItem,
  MenuList,
  CardHeader,
  Typography,
  MenuHandler,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

// charts import
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface TransactionCardPropsType {
  img: string;
  name: string;
  price: string;
}

interface ChartCardPropsType {
  title: string;
  price: string[];
  market: string;
  marketPrice: string;
  volumePrice: string;
  volume: string;
  solana: boolean;
  chart: object;
}

// chart card
function ChartsCard({
  chart,
  title,
  price,
  market,
  volume,
  marketPrice,
  volumePrice,
  solana,
}: ChartCardPropsType) {
  return (
    <Card className="shadow-md border border-gray-200 w-full h-fit">
      <CardHeader
        shadow={false}
        floated={false}
        className="flex items-start justify-between rounded-none overflow-visible"
      >
        <div>
          <Typography
            variant="small"
            className="text-gray-600 font-medium mb-1"
          >
            {title}
          </Typography>
          <Typography variant="h3" color="blue-gray">
            {price[0]}{" "}
            {solana ? (
              <span className="text-gray-500">{price[1]}</span>
            ) : (
              <span className="text-gray-500 text-lg">{price[1]}</span>
            )}
          </Typography>
        </div>
        <Menu>
          <MenuHandler>
            <Button
              size="sm"
              color="gray"
              variant="outlined"
              className="flex items-center gap-1 !border-gray-300"
            >
              last 24h
              <ChevronDownIcon
                strokeWidth={4}
                className="w-3 h-3 text-gray-900"
              />
            </Button>
          </MenuHandler>
          <MenuList>
            <MenuItem>last 12h</MenuItem>
            <MenuItem>last 10h</MenuItem>
            <MenuItem>last 24h</MenuItem>
          </MenuList>
        </Menu>
      </CardHeader>
      <Chart {...chart} />
      <CardBody className="pt-4 flex flex-wrap gap-y-4 justify-between">
        <div>
          <Typography
            variant="small"
            className="text-gray-600 font-medium mb-1"
          >
            {market}
          </Typography>
          <Typography variant="h3" color="blue-gray">
            {marketPrice}
          </Typography>
        </div>
        <div>
          <Typography
            variant="small"
            className="text-gray-600 font-medium mb-1"
          >
            {volume}
          </Typography>
          <Typography variant="h3" color="blue-gray">
            {volumePrice}
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
}

// transaction card
function TransactionCard({ img, name, price }: TransactionCardPropsType) {
  return (
    <Card className="shadow-md border border-gray-200">
      <CardBody className="p-4">
        <img src={img} className="h-6 w-6 mb-5" alt={name} />
        <Typography
          variant="small"
          className="text-gray-600 font-medium mb-1"
        >
          {name}
        </Typography>
        <Typography variant="h3" color="blue-gray">
          {price}{" "}
          <span className="text-gray-500 text-lg uppercase">sol</span>
        </Typography>
      </CardBody>
    </Card>
  );
}

// charts config
const chartsConfig = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  title: {
    show: "",
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    labels: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  grid: {
    show: true,
    borderColor: "#EEEEEE",
    strokeDashArray: 5,
    xaxis: {
      lines: {
        show: false,
      },
    },
    padding: {
      top: 5,
      right: 20,
    },
  },
  fill: {
    opacity: 0.8,
  },
  tooltip: {
    theme: "light",
  },
};

const priceChart = {
  type: "area",
  height: 220,
  series: [
    {
      name: "2023 Sales",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#388e3c"],
    stroke: {
      lineCap: "round",
      width: 2,
    },
    fill: {
      opacity: 0,
      type: "outline",
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  },
};

const stakedChart = {
  type: "area",
  height: 220,
  series: [
    {
      name: "2023 Sales",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#2196F3"],
    stroke: {
      lineCap: "round",
      width: 2,
    },
    fill: {
      opacity: 0,
      type: "outline",
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  },
};

// charts data
const ChartsCardData = [
  {
    title: "Current Price",
    price: ["$156,091", "0.33"],
    market: "Market Cap",
    volume: "24h Volume",
    marketPrice: "$10,932.033",
    volumePrice: "$22,122,267",
    chart: priceChart,
    solana: true,
  },
  {
    title: "Total Staked",
    price: ["$156,091", "SOL"],
    market: "Users Staking",
    volume: "Average APR",
    marketPrice: "125,850",
    volumePrice: "8.35%",
    chart: stakedChart,
    solana: false,
  },
];

// transaction data
const TransactionCardData = [
  {
    img: "/img/logos/Trust.svg",
    name: "Trust Transaction",
    price: "16,545",
  },
  {
    img: "/img/logos/Metamask.svg",
    name: "Metamask Transactions",
    price: "47,720",
  },
  {
    img: "/img/logos/Coinbase.svg",
    name: "Coinbase Transactions",
    price: "47,720",
  },
];

function CryptoChart() {
  return (
    <section className="px-8 py-10">
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 grid-cols-1 lg:gap-x-5 gap-y-5">
        <div className="col-span-4 lg:grid grid-cols-2 lg:space-y-0 space-y-5 gap-5">
          {ChartsCardData.map((props, key) => (
            <ChartsCard key={key} {...props} />
          ))}
        </div>
        <div className="col-span-full xl:col-span-1 w-full grid-cols-1 md:grid grid-cols-3 xl:grid-cols-1 gap-5 space-y-5 md:space-y-0">
          {TransactionCardData.map((props, key) => (
            <TransactionCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default CryptoChart;