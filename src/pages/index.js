import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import unsplashApi from "../services/unsplash_api"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      image: "",
      fact: ""
    }
  }
  componentDidMount() {
    return unsplashApi().then(image_urls => {
      this.setState({image: image_urls.regular})
    });

  }
  render() {
    return index_page(this.state);
  }
}
const index_page = (state) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img src={state.image} />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
