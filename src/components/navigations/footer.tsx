import { Copyright } from 'utils/copyright'
import { Link } from 'react-router-dom';
import kclLogo from 'extras/images/kcl_logo.png';
import { pageurl } from 'utils/constants';
import './footer.scss'


const Footer = () => {

    return(
        <div className="footer-main">
            <div className="footer-content">
                <p>Created By: Ibukunoluwa Gbolade Popoola</p>
                <div className='socials'>
                    <Link 
                        style={{ color: "#ffffff", cursor: 'pointer' }} 
                        to={pageurl.GITHUB}
                        target="_blank" rel="noopener noreferrer"
                    >
                        Github
                    </Link>
                    <Link 
                        style={{ color: "#ffffff", cursor: 'pointer' }} 
                        to={pageurl.LINKED_IN}
                        target="_blank" rel="noopener noreferrer"
                    >
                        LinkedIn
                    </Link>
                    <Link 
                        style={{ color: "#ffffff", cursor: 'pointer' }} 
                        to='mailto: ibukunoluwa.g.popoola@gmail.com?subject=Sentiment%Analysis'
                    >
                        Email
                    </Link>
                </div>
                <Copyright />
            </div> 
            <div className='kcl_logo'>
                <img src={kclLogo} alt="kcl_logo" />
            </div>
        </div>
    )
}

export default Footer;
