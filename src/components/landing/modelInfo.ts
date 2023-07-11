export type ModelType = 'naive' | 'vader' | 'rnn'

interface ModelInfo {
    title: string;
    repr: ModelType;
    description: string;
}

export const ModelsInfo : ModelInfo[] = [
    {
        title: 'VADER Lexicon',
        repr: 'vader',
        description: 'The VADER lexicon is a pre-built sentiment lexicon specifically designed for sentiment analysis tasks, containing a comprehensive collection of words and their associated sentiment scores, allowing for the rapid classification of text based on sentiment polarity. It incorporates both unigram and lexical grammar rules to capture context-dependent sentiment, making it particularly suitable for analyzing sentiment in social media and informal text.'
    },
    {
        title: 'Multinomial Naive Bayes',
        repr: 'naive',
        description: "Multinomial Naive Bayes is a probabilistic classification algorithm commonly used for text classification tasks, including sentiment analysis. It is based on the principle of Bayes' theorem and assumes that the features are conditionally independent given the class. In sentiment analysis, Multinomial Naive Bayes learns the probabilities of different words occurring in positive, negative, or neutral sentiments and uses this knowledge to classify new text based on the presence and frequency of words. It is known for its simplicity, efficiency, and effectiveness, making it a popular choice for sentiment analysis tasks."
    },
    {
        title: 'RNN BiLSTM',
        repr: 'rnn',
        description: "Recurrent Neural Network (RNN) with Bidirectional Long Short-Term Memory (BiLSTM) is a powerful deep learning model widely used for sequence-based tasks, including sentiment analysis. RNNs, with their recurrent connections, can capture contextual information by considering the sequential nature of the input text. BiLSTMs, with forward and backward recurrent layers, allow the model to capture dependencies in both directions, enabling a more comprehensive understanding of the input. This architecture excels in capturing long-term dependencies and subtle contextual cues, making it effective for sentiment analysis tasks where the sentiment expression relies on the entire text rather than individual words or phrases."
    }
]