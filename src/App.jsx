import { useState } from "react"
import ArticleSection from "./components/ArticleSection"
import BreakingNews from "./components/BreakingNews"
import Header from "./components/Header"
import Navigation from "./components/Navigation"
import { articlesByCategory, breakingNewsArticles, drilling, randomArticles, reservedStories, uniqueCategories } from "./data/data"
import MainSection from "./components/MainSection"
import CategoryBlock from "./components/CategoryBlock"
import DisplayArticle from "./components/DisplayArticle"

function App() {
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentArticle, setCurrentArticle] = useState(null);

  drilling.set('current',currentCategory);
  drilling.set('currentArticle', currentArticle);

  const handleCurrentCategory = (category = null) => {
    randomArticles();
    currentArticle && setCurrentArticle(null);
    setCurrentCategory(category)
  }

  const handleCurrentArticle = (article) => {
    setCurrentArticle(article);
  }

  drilling.set('updateArticle', handleCurrentArticle);

  return (
    <>
      <Header />
      <Navigation onCurrentCategory={handleCurrentCategory} uniqueCategories={uniqueCategories} />

      <div className="articleContainer">
        {!currentArticle ? <>

          {currentCategory === 'home' || currentCategory === null ? <>
            <BreakingNews articles={breakingNewsArticles} onCurrentArticle={handleCurrentArticle} />
            <MainSection articles={articlesByCategory.get(currentCategory ? currentCategory : 'home')} onCurrentArticle={handleCurrentArticle} />
          </> :
            <ArticleSection articles={articlesByCategory.get(drilling.get('current'))} onCurrentArticle={handleCurrentArticle} />}

          {uniqueCategories.map((unique, index) => currentCategory !== unique && <CategoryBlock key={index}  reservedStories={reservedStories.get(unique)} category={unique} onCurrentCategory={handleCurrentCategory} onCurrentArticle={handleCurrentArticle} />)}

        </> : <DisplayArticle />
        }
        
      </div>
    </>
  )
}

export default App  
