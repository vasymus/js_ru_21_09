import React, {Component} from 'react'
import PropTypes from 'prop-types';
import CommentList from './CommentList';

class Article extends Component {
    state = {
        isCommentsShown : false
    }
    static PropTypes = {
        article : PropTypes.shape({
            title : PropTypes.string.isRequired,
            text : PropTypes.string,
            date : PropTypes.string.isRequired,
            comments : PropTypes.array.isRequired
        }).isRequired,
        isOpen : PropTypes.bool,
        onClick : PropTypes.func
    }

    render() {
        const {article, isOpen, onClick} = this.props;
        let {isCommentsShown} = this.state;
        const body = isOpen && <section>{article.text}</section>
        return (
            <div>
                <h2>
                    {article.title}
                    <button onClick={onClick}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                </h2>
                {body}
                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
                <h4>
                    Comments
                    <button
                        onClick={()=>{this.setState({isCommentsShown:!this.state.isCommentsShown})}}
                    >{isCommentsShown ? "hide" : "show"}</button>
                </h4>
                {isCommentsShown && <CommentList comments={article.comments} />}
            </div>
        )
    }
}


export default Article