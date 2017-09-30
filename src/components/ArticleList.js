import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types';

class ArticleList extends Component {
    state = {
        openArticleId : null
    }
    static defaultProps = {
        articles : []
    }
    static propTypes = {
        articles : PropTypes.array.isRequired
    }

    /*toggleArticle = (openArticleId) => () => {
        console.log('---', openArticleId)
    }*/

    toggleArticle = (openArticleId) => () => {
        if (openArticleId !== this.state.openArticleId) {
            this.setState({openArticleId})
        } else {
            this.setState({openArticleId:null})
        }
    }

    render() {
        const {articles} = this.props;
        if (!articles.length) return <h3>No Articles</h3>;
        const articleElements = articles.map(article => (
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === this.state.openArticleId}
                    onClick={this.toggleArticle(article.id)}
                />
            </li>
        ))
        return (
            <ul>
                {articleElements}
            </ul>
        );
    }
}

export default ArticleList;