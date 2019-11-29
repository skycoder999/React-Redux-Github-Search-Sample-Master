import { connect } from 'react-redux';
import { requestSearch, searchedModel } from '../../redux/actions';
import { gitHubSearched } from '../../selectors'
import Home from './home';

const mapStateToProps = (state, ownProps) => {
    return {
        result: gitHubSearched(state)
    }
}
const mapDispatchToProps = {
    requestSearch,
    searchedModel
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);