export interface Data {
    name : string;
    count : string;
    change: string;
    percentile: string;
}

export interface CardsState {
    currentCards: DataArray,
    defaultCards: DataArray,
    loading: boolean,
}

export type DataArray = Data[]
  