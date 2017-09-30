import React, {Component} from 'react'
import PropTypes from 'prop-types';

class Comment extends Component {
    static propTypes = {
        comment : PropTypes.shape({
            user : PropTypes.string.isRequired,
            text : PropTypes.string.isRequired
        }).isRequired
    }

    render() {
        const {user, text} = this.props.comment;
        return (
            <div>
                <h5>{user}</h5>
                <p>{text}</p>
            </div>
        )
    }
}

export default Comment;