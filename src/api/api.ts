import { SentimentsResponse } from "interfaces/IResponse";
import { RequestFactoryParams } from "./interface";
import { AxiosResponse } from 'axios';
import { IParams } from "interfaces/IParams";

export type RequestFactoryType = (requestFactory: RequestFactoryParams) => Promise<AxiosResponse<any>>;

export class API<T extends {} = {}> {
    protected configuration: T;

    protected requestFactory: RequestFactoryType;

    constructor(configuration: T, requestFactory: RequestFactoryType) {
        this.configuration = configuration;
        this.requestFactory = requestFactory;
    };

    GetPredictions(data: IParams): Promise<AxiosResponse<SentimentsResponse>> {
        const url = `/predictions`;
        return this.requestFactory({
            url, 
            method: 'POST',
            data,
            configuration: this.configuration
        })
    };
};
