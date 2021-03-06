import AuthComponent from '../component';
import { connect } from 'react-redux';
import { mapDispatchToProps } from 'helpers/redux';

import Form from './form';

class Register extends AuthComponent {
    getForm(events) {
        return Form(events);
    }
}

export default connect(null, mapDispatchToProps)(Register);
