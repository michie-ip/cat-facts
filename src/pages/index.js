import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import unsplashApi from "../services/unsplash_api"
import catfactsApi from "../services/cat_facts_api"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      image: "",
      fact: ""
    }
  }
  componentDidMount() {
    unsplashApi().then(image_urls => {
      this.setState({image: image_urls.regular})
    });

    const cat_facts_api = new catfactsApi();

    cat_facts_api.getFacts().then(facts => {
      this.setState({fact: facts[1].fact})
    })

  }
  render() {
    return index_page(this.state);
  }
}
const index_page = (state) => (
  <Layout>
    <SEO title="Home" />
    <h1>Random cat facts goes here</h1>
      <img src={state.image} class="background-image"/>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
