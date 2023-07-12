export interface SentimentsResponse {
    data: Predictions
}

export interface Predictions {
    rnn?: number;
    naive: number;
    vader?: number;
    average_verdict?: number;
}