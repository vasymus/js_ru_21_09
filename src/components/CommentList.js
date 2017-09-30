import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Comment from './Comment';

class CommentList extends Component {
    static defaultProps = {
        comments : []
    }
    static propTypes = {
        comments : PropTypes.array.isRequired
    }
    render() {
        if (!this.props.comments.length) return <div>No comments was added.</div>
        return (
            <ul>
                {
                this.props.comments.map((comment) => (
                    <li key={comment.id}>
                        <Comment comment={comment} />
                    </li>
                ))
                }
            </ul>
        )
    }
}

export default CommentList;