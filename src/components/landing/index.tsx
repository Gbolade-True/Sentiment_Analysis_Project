import { Link } from 'react-router-dom';
import './index.scss';
import s_a_svg from 'extras/images/sentiment_analysis.svg'
import { pageurl } from 'utils/constants';
import { ModelTabs } from './model_tabs';
import { useState } from 'react';
import { ModelType } from './modelInfo';
import { Textarea } from 'utils/textarea';
import { Button } from 'utils/button';
import api from 'api';
import { Predictions } from 'interfaces/IResponse';
import Modal from 'utils/modal';
import { Results } from './results';
import Footer from 'components/navigations/footer';

const Landing = () => {
    const [modelType, setModelType] = useState<ModelType>('vader');
    const [userText, setUserText] = useState('');
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [predictions, setPredictions] = useState<Predictions>();
    
    const getPredictions = () => {
        setLoading(true)
        setShowModal(true)
        api.GetPredictions({
            model: 'all',
            userText
        })
        .then((res) => {
            setPredictions(res.data.data)
        })
        .finally(() => {
            setLoading(false)
        })
    }

    return (
        <div className='landing_page'>
            <div className='search_area'>
                <div className='s_a_image'>
                    <img src={s_a_svg} alt='sentiment_analysis' />
                </div>
                <h1 className='try_it_out'>
                    Check sentiments in text
                </h1>
                <Textarea
                    placeholder='Place your text in here...'
                    style={{ maxWidth: '500px' }}
                    value={userText}
                    onChange={(e) => setUserText(e.target.value)}
                    helperText={!userText ? 'This cannot be empty...' : undefined}
                />
                <Button
                    onClick={getPredictions}
                    disabled={!userText}
                    loading={loading}
                >
                    Enter
                </Button>
            </div>

            <div className='model_action'>
                <div className='info_left'>
                    <h1>Sentiment Analysis</h1>
                    <p className='s_a_desc'>
                        Also known as opinion mining, this is a computational technique used to determine and analyse
                        the sentiment expressed in a piece of text, such as reviews, social media posts, or customer feedback. 
                        It involves identifying and classifying the emotions, opinions, or attitudes conveyed by the text as 
                        positive, negative, or neutral. 
                    </p>
                    <Link 
                        to={pageurl.GITHUB_PROJECT}
                        className='github_link'
                        target="_blank" rel="noopener noreferrer"
                    >
                        View my project on Github
                        <i className="fas fa-arrow-right" style={{ marginLeft: '8px', fontSize: '18px' }} />
                    </Link>
                </div>
                <div className='divider' />
                <div className='model_tabs_container'>
                    <ModelTabs
                        selectedModel={modelType}
                        setModelType={setModelType}
                    />
                </div>
            </div>

            <Modal show={showModal} handleClose={() => setShowModal(false)}>
                <Results
                    loading={loading}
                    predictions={predictions}
                />
            </Modal>
            <Footer />
        </div>
    )
}

export default Landing;