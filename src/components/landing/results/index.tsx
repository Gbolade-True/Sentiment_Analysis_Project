import { ModelPrediction, Predictions } from "interfaces/IResponse";
import { ResultPieChart } from "utils/result_pie_chart";
import { isObjectFalsy } from "utils/helpers";
import { EmptyState } from "utils/empty-state";
import modelBooting from 'extras/images/model_booting.png'
import { Table } from "utils/table";
import './index.scss';

interface ResultProps {
    loading: boolean;
    predictions: Predictions | undefined;
}

export const Results = ({ loading, predictions }: ResultProps) => {
    const { vader, naive, rnn, average_verdict } = predictions || {};

    const getVerdict = (score: ModelPrediction) => {
        if (score === 'N/A' )return 'N/A'
        if(score <= 0.35) return <p>Negative <i className="far fa-frown" style={{ color: '#ff0000' }}/></p>
        if(score <= 0.6) return <p>Neutral <i className="far fa-meh" style={{ color: '#5d5b5b' }}/></p>
        return <p>Positive <i className="far fa-smile" style={{ color: '#00ff00' }} /></p>
    }

    const headCells = [
        { id: 'id', label: 'ID' },
        { id: 'model', label: 'Model' },
        { id: 'prediction', label: 'Prediction' },
        { id: 'verdict', label: 'Verdict' },
    ];

    const rows = [
        { id: 1, a: 'VADER Lexicon', b: vader, c: getVerdict(vader!)},
        { id: 2, a: 'Multinomial Naive Bayes', b: naive, c: getVerdict(naive!)},
        { id: 3, a: 'RNN BiLSTM', b: rnn, c: getVerdict(rnn!)}
    ]

    const renderView = () => {
        let ResultsDisplay = null;
        if (loading) {
            ResultsDisplay = 
                <div className="full_page_loading">
                    <div className='loading-ring-css' style={{ transform: 'scale(0.79)' }}>
                    <div></div>
                    </div>
                </div> 
            return ResultsDisplay
        }
        if (!loading && isObjectFalsy(predictions)) {
            ResultsDisplay = 
                <EmptyState 
                    displayText="The models are busy now, please try again later..." 
                    imageSrc={modelBooting}
                />
            return ResultsDisplay
        }
        ResultsDisplay = 
            <>
                <h1 style={{ color: '#FF407B' }}>Results</h1>
                <Table rows={rows} headCells={headCells} />
                {average_verdict ?
                    <div className="final_verdict">
                        <div>
                            <h2>Overall Verdict: {getVerdict(average_verdict!)}</h2>
                            <p>Prediction: <b>{average_verdict}</b></p>
                        </div>
                        <ResultPieChart guage={average_verdict} />
                    </div>
                    : null 
                }
            </>
        return ResultsDisplay
    }

    return(
        <div>
            {renderView()}
        </div>
    )
}