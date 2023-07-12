export interface SentimentsResponse {
    data: Predictions
}

export type ModelPrediction = number | 'N/A';

export interface Predictions {
    rnn?: ModelPrediction;
    naive: ModelPrediction;
    vader?: ModelPrediction;
    average_verdict?: number;
}