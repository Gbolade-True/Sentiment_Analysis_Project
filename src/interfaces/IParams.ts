export type ModelSelectionType = 'all' | 'rnn' | 'vader' | 'naive'

export interface IParams {
    model?: ModelSelectionType;
    userText?: string;
};