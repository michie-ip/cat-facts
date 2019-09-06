import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import unsplashApi from "../services/unsplash_api"
import componentStyle from "../components/style.module.scss"

class AdoptionPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cats: []
    }
  }

  componentDidMount() {
    unsplashApi.getCatList().then(cats => {
      this.setState({cats})
      cats.forEach(function(i) {
        let catDescription = i.description;
        let catThumb = i.urls.thumb;
      })
    });
  }
  render() {
    return adoption_page(this.state);
  }
}
const CatLists = ({cats}) => {
  return cats.map(function(value, index){
    return (
      <CatProfileComponent cat={value} key={index}/>
    )
  })
}

const CatProfileComponent = ({cat}) => {
  return (
    <div>
      <Link to="/">
        <img src={cat.urls.thumb} />
        <p>{cat.description ? cat.description : cat.alt_description}</p>
      </Link>
    </div>
  )
}




const adoption_page = (state) => (
  <Layout>
    <SEO title="Adoption" />
    <h1>Adopt Us</h1>
    <div className={componentStyle.catList}>
      <CatLists cats={state.cats}/>
    </div>
    <Link to="/" className={`${componentStyle.btn} ${componentStyle.btnPrimary}`}>More Cat Facts</Link>
  </Layout>
)

export default AdoptionPage
