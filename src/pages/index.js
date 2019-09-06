import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import unsplashApi from "../services/unsplash_api"
import catfactsApi from "../services/cat_facts_api"

import componentStyle from "../components/style.module.scss"

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.refresh = this.refresh.bind(this);
    this.state = {
      image: "",
      fact: ""
    }
  }

  componentDidMount() {
    unsplashApi.getRandomCat().then(image_urls => {
      this.setState({image: image_urls.regular})
    });

    const cat_facts_api = new catfactsApi();

    cat_facts_api.getFact().then(fact => {
      this.setState({fact: fact.fact});
    });
  }

  refresh(e) {
    e.preventDefault();
    console.log('hello')
    this.componentDidMount();
  }

  render() {
    return index_page(this.state, this.refresh);
  }

}
const index_page = (state, refresh) => (
  <Layout>
    <SEO title="Home" />
    <div className={componentStyle.catImage}  style={{ backgroundImage:`url(${state.image})`, height: `100vh` }}>
      <div className={componentStyle.catFact}>
        <div className={componentStyle.row}>
          <div className={componentStyle.container}>
            <h2 className={componentStyle.fact}>{state.fact}</h2>
            <div className={componentStyle.buttonsWrapper}>
              <button onClick={refresh} className={componentStyle.btn}>Refresh</button>
              <Link to="/adoption/" className={`${componentStyle.btn} ${componentStyle.btnPrimary}`}>Adopt Us</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
