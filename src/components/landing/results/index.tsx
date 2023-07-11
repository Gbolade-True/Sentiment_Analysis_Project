import { Predictions } from "interfaces/IResponse";
import { ResultPieChart } from "utils/result_pie_chart";
import { isObjectFalsy } from "utils/helpers";
import { EmptyState } from "utils/empty-state";
import modelBooting from 'extras/images/model_booting.png'
import './index.scss';

interface ResultProps {
    loading: boolean;
    predictions: Predictions | undefined;
}

export const Results = ({ loading, predictions }: ResultProps) => {
    const { vader, naive, rnn } = predictions || {};

    const getVerdict = (score: number) => {
        if(score <= 0.35) return 'Negative'
        if(score <= 0.6) return 'Neutral'
        return 'Positive'
    }

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
                {
                    vader ?
                        <div className="result_item" data-testid="recharts" >
                            <ResultPieChart guage={vader} />
                            <div className="result_info">
                                <h2>VADER Lexicon</h2>
                                <p>Prediction: <b>{vader.toFixed(4)}</b></p>
                                <span>Verdict: <b>{getVerdict(vader)}</b></span>
                            </div>
                        </div>
                        : null    
                }
                {
                    naive ?
                        <div className="result_item">
                            <ResultPieChart guage={naive} />
                            <div className="result_info">
                                <h2>Multinomial Naive Bayes</h2>
                                <p>Prediction: <b>{naive.toFixed(4)}</b></p>
                                <span>Verdict: <b>{getVerdict(naive)}</b></span>
                            </div>
                        </div>
                        : null    
                }
                {
                    rnn ?
                        <div className="result_item">
                            <ResultPieChart guage={rnn} />
                            <div className="result_info">
                                <h2>RNN BiLSTM</h2>
                                <p>Prediction: <b>{rnn.toFixed(4)}</b></p>
                                <span>Verdict: <b>{getVerdict(rnn)}</b></span>
                            </div>
                        </div>
                        : null    
                }
            </>
        return ResultsDisplay
    }




    return(
        <div>
            <h1 style={{ textAlign: 'center', color: '#FF407B' }}>Results</h1>
            {renderView()}
        </div>
    )
}