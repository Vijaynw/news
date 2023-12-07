import React, { useEffect, useRef, useState } from 'react'
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
const NewsPage = () => {

const [newsdata,setnew]=useState()
const [region,setRegion] = useState()
 const input =useRef(null)

const getNews = async () =>{
   if(!region) return <Spinner/>
  const data = await fetch("https://newsapi.org/v2/top-headlines?country="+region+"&apiKey=b2da89043bab4d25b3efff3f21101603")
  const json= await data.json()
  setnew(json.articles)
  console.log(newsdata)
  console.log(json?.totalResults,json?.articles,)
  
}
const handleRegion =() => {
  // console.log(seartext.current.value);
  setRegion(input.current.value);
}
// https://cdndh.darkhorizons.com/wp-content/uploads/2023/02/amazon-content-spending-hits-16-billion.jpg":imageUrl
  
  useEffect(()=>{

    getNews()
  },[region])

  return (

<> 
<input ref={input} type="text" onChange={((e)=>{
  console.log(e.target.value)

})}/>
<button onClick={handleRegion}>
  Search
  </button> 
    <div>

  { 
      
      newsdata?.map((news)=>{ 
        return(
          
          <NewsItem key={news.title} title={news.title} description={news.description} imageUrl={news.urlToImage} newsUrl={news.url}/>
          )
        })
      }  
    </div>
   
      </>
  )
}

export default NewsPage