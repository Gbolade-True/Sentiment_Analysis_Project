import { Copyright } from 'utils/copyright'
import { Link } from 'react-router-dom';
import kclLogo from 'extras/images/kcl_logo.png';
import { pageurl } from 'utils/constants';
import './footer.scss'


const Footer = () => {

    return(
        <div className="footer-main">
            <div className='kcl_logo'>
                <img src={kclLogo} alt="kcl_logo" />
            </div>
            <div className="footer-content">
                <p>Created By: Ibukunoluwa Gbolade Popoola</p>
                <div className='socials'>
                    <Link 
                        style={{ color: "#ffffff", cursor: 'pointer' }} 
                        to=''
                        onClick={() => {
                            window.open(pageurl.GITHUB, '', 'width=1024, height=786');
                        }}
                    >
                        Github
                    </Link>
                    <Link 
                        style={{ color: "#ffffff", cursor: 'pointer' }} 
                        to=''
                        onClick={() => {
                            window.open(pageurl.LINKED_IN, '', 'width=1024, height=786');
                        }}
                    >
                        LinkedIn
                    </Link>
                    <Link 
                        style={{ color: "#ffffff", cursor: 'pointer' }} 
                        to='mailto: ibukunoluwa.g.popoola@gmail.com?subject=Sentiment%Analysis'
                        onClick={() => {
                            window.open(pageurl.LINKED_IN, '', 'width=1024, height=786');
                        }}
                    >
                        Email
                    </Link>
                </div>
                <Copyright />
            </div> 
        </div>
    )
}

export default Footer;
