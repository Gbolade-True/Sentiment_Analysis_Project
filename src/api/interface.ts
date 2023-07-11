import { Method as AxiosMethod } from 'axios';

export type BaseKey = string | number;

export interface RequestFactoryParams {
    url: string;
    method: AxiosMethod;
    configuration: any;
    params?: any;
    data?: any;
    headers?: any;
    baseUrl?: string;
};

export type PaginationResponse = {
    pageCount: number;
    currentPage: number;
    totalPages: number;
    hasNext: boolean;
    hasPrevious: boolean;
};