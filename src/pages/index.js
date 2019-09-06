import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import unsplashApi from "../services/unsplash_api"
import catfactsApi from "../services/cat_facts_api"

import componentStyle from "../components/style.module.scss"

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
      this.setState({fact: facts[0].fact})
    })
  }
  render() {
    return index_page(this.state);
  }

}
const index_page = (state) => (
  <Layout>
    <SEO title="Home" />
    <div className={componentStyle.catImage}  style={{ backgroundImage:`url(${state.image})`, height: `100vh` }}>
      <div className={componentStyle.catFact}>
        <h1>{state.fact}</h1>
        <Link to="/adoption/" className={btn}>Refresh</Link>
        <Link to="/adoption/">Adopt Us</Link>
      </div>
    </div>
      {/* <img src={state.image} class="background-image"/> */}
  </Layout>
)

export default IndexPage
