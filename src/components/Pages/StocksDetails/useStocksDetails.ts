import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format, sub } from "date-fns";
import { API_KEY, BASE_API } from "../../../constants/api";

export interface CompanyProps {
  symbol: string;
  name: string;
  ceo?: string;
  hq_address: string;
  hq_country: string;
  hq_state: string;
  phone: string;
  industry: string;
  sector: string;
  employees: number;
  description: number;
  similar: string[];
  tags: string[];
}
export interface PriceProps {
  afterHours: number;
  close: number;
  from: string;
  high: number;
  low: number;
  open: number;
  preMarket: number;
  status: string;
  symbol: string;
  volume: number;
}
export interface BarProps {
    [key:string]: string;
}

const useStockDetails = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [company, setCompany] = useState<CompanyProps | null>();
  const [price, setPrice] = useState<PriceProps>();
  const [bars, setBars] = useState<BarProps[] | undefined>();
  const { ticker } = useParams<{ ticker: string }>();

  const fetchTicker = useCallback(async () => {
    if (ticker) {
      try {
        setLoading(true);

        const companyUrl = `${BASE_API}/v1/meta/symbols/${ticker}/company?apiKey=${API_KEY}`;
        const company = await fetch(companyUrl).then((response) =>
          response.json()
        );
        setCompany(company);

        const date = format(sub(new Date(), { days: 4 }), "yyyy-MM-dd");
        const priceUrl = `${BASE_API}/v1/open-close/${ticker}/${date}?apiKey=${API_KEY}`;
        const price = await fetch(priceUrl).then((response) => response.json());
        setPrice(price);
        
        const fromDate = format(sub(new Date(), { months: 12 }), "yyyy-MM-dd")
        const toDate = format(sub(new Date(), { days: 1 }), "yyyy-MM-dd")
        const barsUls = `${BASE_API}/v2/aggs/ticker/${ticker}/range/12/day/${fromDate}/${toDate}?apiKey=${API_KEY}`;
        const bars = await fetch(barsUls).then((response) => response.json());
        setBars(bars?.results || []);


        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
  }, [ticker]);

  useEffect(() => {
    if (ticker) {
      fetchTicker();
    }
  }, [fetchTicker, ticker]);

  return {
    loading,
    company,
    price,
    bars,
    error,
  };
};

export default useStockDetails;
