import React from 'react';
import axios from 'axios';

class NewsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: []
    }
  }

  render() {
    return (
      <div>
        <table className="bordered highlight">
          <thead>
            <tr>
              <th>Author</th>
              <th>Title</th>
              <th>Description</th>
              <th>Url</th>
              <th>publishedAt</th>
            </tr>
          </thead>
          <tbody>

            {this.state.articles.map((article, idx) => {
              return <tr key={idx}>
                      <td>{article.author}</td>
                      <td>{article.title}</td>
                      <td>{article.description}</td>
                      <td><a target="_blank"rel="noopener noreferrer" href={article.url}>{article.url}</a></td>
                      <td>{article.publishedAt}</td>
                    </tr>
            })}
          </tbody>
          
        </table>
      </div>
      
    )
  }
  componentDidMount() {
    axios.get('https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=234b1f59513948499b5f8f009a8c22fb').then(res => {
      // console.log(res.data.articles)
      // this.state.articles = res.data.articles
      this.setState({
        articles: res.data.articles,
      })
      console.log(this.state.articles)
    })
  }
}

export default NewsList;