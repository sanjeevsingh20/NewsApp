// import React, { useEffect, useState } from 'react'
// import News from './News'
// import Spinner from './Spinner'
// export default function NewsBox() {
//   const [article , setArticle] = useState([])
//   const [page , setPage] = useState(1)
//   const [totalresult , setTotalResult] = useState(1)
  
//   // const [Newspage , setNewsPage] = useState(1)
//   // const [PostPage ] = useState(12)
//   const pageSize =12
//   const[loading , setLoading] =useState(false)
// const GetNext=()=>{
//     setPage(page+1)
// }
// const GetPrev=()=>{
//     setPage(page-1)
// }
//   // const GetNext=()=>{
//   //     console.log(article.length)
//   //     if(IndexOflastPost>article.length-1){

//   //       setLoading(true)
        
//   //       setPage(page+1);
//   //       setNewsPage(1)
//   //       setLoading(false)
//   //     }
//   //     else{
        
//   //       setLoading(true)
//   //       setNewsPage(Newspage+1);
//   //       setLoading(false)
//   //     }
//   // }
//   // const GetPrev=()=>{
//   //   if(Newspage<=1){
//   //     setPage(page-1)
//   //     setNewsPage(Math.ceil(article.length/pageSize))
//   //   }
//   //   else{
//   //     setNewsPage(Newspage-1)
//   //   }
//   // }

//   useEffect(()=>{
//     // const url = "https://newsapi.org/v2/everything?q=apple&from=2023-07-07&to=2023-07-07&sortBy=popularity&apiKey=9ca538b196a74eb79ffb7371e20e1bd2"
//     const url = `https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=9ca538b196a74eb79ffb7371e20e1bd2&pageSize=${pageSize}&page=${page}`
//     console.log(page)
//     setLoading(true)
//     fetch(url).then((response)=>{
//       console.log(response)
//       return response.json()
//     }).then((data)=>{
//       setLoading(false)
//       return [setArticle(data["articles"]),setTotalResult(data["totalResults"])]
//     }).catch(err=> console.log(err))
//   },[page,pageSize])

//   // let IndexOflastPost = Newspage * PostPage
//   // let IndexOffirstPost = IndexOflastPost - PostPage

 
//   // const currentPage = article.slice(IndexOffirstPost,IndexOflastPost)

//   return (
//     <div className="row mx-1 " id="bhai">
//       <h1 className="container col-blue  my-5">Top Headlines</h1>
//       {loading && <Spinner/>}
//       {
//         !loading && article.map((list,index)=>{
          
//           return <div className="col-md-4" key={index}>
//             <News title={list["title"]?list["title"]:""} descrip={list["description"]?list["description"].slice(0,100):"Description"} imageUrl={list["urlToImage"]?list["urlToImage"]:"https://cdn.arstechnica.net/wp-content/uploads/2023/07/Amazon-EDV7-760x380.jpg"} san={list["url"]}/>
//           </div>
          
//         })
//       }
//       <div class="d-flex justify-content-between my-5">
//         <button disabled={page<=1} type="button" class="btn btn-success" onClick={GetPrev}>&larr; Previous</button>
//         <button disabled={page+1 > Math.ceil(totalresult/pageSize)} type="button" class="btn btn-success" onClick={GetNext}>Next &rarr;</button>
//       </div>
      
//     </div >

//   )
// }


// // import React, { Component } from 'react'
// //class based component
// // export default class NewsBox extends Component {
// //    article = [
// //     {
// //       "source": {
// //         "id": null,
// //         "name": "NBCSports.com"
// //       },
// //       "author": "Charean Williams",
// //       "title": "Report: DeAndre Hopkins remains in contact with Titans, Patriots but signing not imminent - NBC Sports",
// //       "description": "The Cardinals released receiver DeAndre Hopkins on May 26, and he has remained a free agent since.",
// //       "url": "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/report-deandre-hopkins-remains-in-contact-with-titans-patriots-but-signing-not-imminent",
// //       "urlToImage": "https://nbcsports.brightspotcdn.com/dims4/default/7b5faaf/2147483647/strip/true/crop/5556x3125+0+375/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.amazonaws.com%2Fbrightspot%2F16%2Fed%2F524b0f4648e59c36fbf718c6cc07%2Fhttps-api-imagn.com%2Frest%2Fdownload%2FimageID%3D19680274",
// //       "publishedAt": "2023-07-07T02:06:06Z",
// //       "content": "The Cardinals released receiver DeAndre Hopkins on May 26, and he has remained a free agent since.\r\nHopkins visited the Patriots and Titans, and Tom Pelissero of NFL Media reports both teams remain i… [+663 chars]"
// //     },
// //     {
// //       "source": {
// //         "id": null,
// //         "name": "YouTube"
// //       },
// //       "author": null,
// //       "title": "See what Russian authorities found in Wagner chief Prigozhin's office - CNN",
// //       "description": null,
// //       "url": "https://www.youtube.com/watch?v=72WHRc-GMD8",
// //       "urlToImage": null,
// //       "publishedAt": "2023-07-07T02:00:02Z",
// //       "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
// //     },
// //     {
// //       "source": {
// //         "id": "the-washington-post",
// //         "name": "The Washington Post"
// //       },
// //       "author": "Ben Golliver",
// //       "title": "Victor Wembanyama, Britney Spears detail Las Vegas restaurant incident - The Washington Post",
// //       "description": "The one thing both sides agree on: The NBA rookie's security detail and the pop star were involved in some sort of incident Wednesday night on the Vegas strip.",
// //       "url": "https://www.washingtonpost.com/sports/2023/07/06/britney-spears-victor-wembanyama-vegas/",
// //       "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/WLDI7NOQPXDAFFOGOVCFPOLSHQ_size-normalized.jpg&w=1440",
// //       "publishedAt": "2023-07-07T01:39:27Z",
// //       "content": "Comment on this story\r\nComment\r\nLAS VEGAS Pop singer Britney Spears said Thursday that she was struck by a San Antonio Spurs security team member when she attempted to approach rookie forward Victor … [+2943 chars]"
// //     },
// //     {
// //       "source": {
// //         "id": null,
// //         "name": "Hollywood Reporter"
// //       },
// //       "author": "Katie Kilkenny",
// //       "title": "SAG-AFTRA Calls for Member Volunteers as Union Preps Potential Film/TV Strike - Hollywood Reporter",
// //       "description": "In the event of a work stoppage that would potentially require phone-banking and sign-making, \"we need as many volunteers as possible to be effective,\" the union told members on Thursday.",
// //       "url": "https://www.hollywoodreporter.com/business/business-news/sag-aftra-potential-strike-member-volunteers-1235530615/",
// //       "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2023/06/2023_06-SAG-01.jpg?w=1024",
// //       "publishedAt": "2023-07-07T01:27:50Z",
// //       "content": "Less than a week before the expiration of its current film and television deal, SAG-AFTRA is calling for members to step up and offer to volunteer in the event of an industry strike.\r\nIn a message se… [+4487 chars]"
// //     }]
// //   constructor(){
// //     super();
    
// //     this.state={
// //       articles : this.article
// //     }
// //   }
  
// //   //  fetchdata = async()=>{
// //   //   const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=9ca538b196a74eb79ffb7371e20e1bd2"
// //   //   const api = await fetch(url)
// //   //   const response = await api.json()

// //   //  }
// //   render() {
// //     return (
// //       <div className="row">
// //         {
// //           this.state.articles.map((data)=>{
// //             return <div className="col-md-3">
// //             <News title =  {data["title"]} descrip = {data["description"]} imageUrl = {data["urlToImage"]}/>
// //             </div>
// //           })
// //         }
       
// //       </div>

// //     )
// //   }
// // }

