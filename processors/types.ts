export interface IPrice {
  id: string;
  symbol: string;
  data_timezone: string;
  data_timestamp: string;
  open_price?: number;
  high_price?: number;
  low_price?: number;
  close_price?: number;
  volume?: number;
}
