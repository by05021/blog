import React, {PureComponent} from 'react';
import {Footers} from './style';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class Footer extends PureComponent {
    render() {
        const {copyright, domain, icp, title} = this.props.confing.toJS();
        return (
            <Footers>
                <div className='site-info'>
                    <div className='footertext'>
                        <p className='foo-logo'/>
                        <p className='name'>
                            <span>
                                <a href={domain} target={'_blank'}>{copyright}</a>
                            </span>
                        </p>
                        <p>© 2019 {title} {icp}</p>
                    </div>
                </div>
            </Footers>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        confing: state.getIn(['header', 'confing']),
    }
};

export default connect(mapStateToProps)(withRouter(Footer));
