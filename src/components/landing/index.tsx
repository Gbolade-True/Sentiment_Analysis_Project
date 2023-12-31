import api from 'api';
import { Link } from 'react-router-dom';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { BOOT_MODEL_TIMEOUT, pageurl } from 'utils/constants';
import { ModelTabs } from './model_tabs';
import { useState } from 'react';
import { ModelType } from './modelInfo';
import { Textarea } from 'utils/textarea';
import { Button } from 'utils/button';
import { Predictions } from 'interfaces/IResponse';
import Modal from 'utils/modal';
import { Results } from './results';
import Footer from 'components/navigations/footer';
import './index.scss';

const Landing = () => {
    const [modelType, setModelType] = useState<ModelType>('vader');
    const [userText, setUserText] = useState('');
    const [loading, setLoading] = useState(false);
    const [bootModel, setBootModel] = useState(false);
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
            setBootModel(true)
            setTimeout(() => {
                setBootModel(false)
            }, BOOT_MODEL_TIMEOUT)
        })
    }

    const getPredictionsOnEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (!userText) return;

		if (e.key === 'Enter') {
			e.preventDefault();
			e.stopPropagation();
			getPredictions();
		}
	};

    return (
        <div className='landing_page'>
            <div className='search_area'>
                <Player
                    autoplay
                    loop
                    src="https://lottie.host/6c7accfa-c423-4548-80d5-fe4a728fc95e/NM981LCdj6.json"
                    style={{ height: '300px', width: '300px' }}
                    >
                    <Controls visible={false} buttons={[]} />
                </Player>
                <h1 className='try_it_out'>
                    Check sentiments in text
                </h1>
                <div
                    onKeyDown={e => getPredictionsOnEnter(e)}
                    className='form'
                >
                    <Textarea
                        placeholder='Place your text in here...'
                        style={{ maxWidth: '500px' }}
                        value={userText}
                        onChange={(e) => setUserText(e.target.value)}
                        helperText={!userText ? 'This cannot be empty...' : undefined}
                    />
                    <Button
                        onClick={getPredictions}
                        disabled={!userText || loading || bootModel}
                        loading={loading}
                        title={bootModel ? 'Model Booting' : (loading ? 'Loading' : 'Enter') }
                    >
                        Enter
                    </Button>
                </div>
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