// //Note This App is only for 100 news as a testing app because the Free API allows only 100 records

// import React, { useEffect, useState } from 'react'
// import News from './News'
// import Spinner from './Spinner'
// export default function NewsBox(props) {
//   const [article, setArticle] = useState([])
//   const [page, setPage] = useState(1)
//   const [totalresult, setTotalResult] = useState(1)

//   const [loading, setLoading] = useState(false)
//   // const GetNext=()=>{
//   //     setPage(page+1)
//   // }
//   // const GetPrev=()=>{
//   //     setPage(page-1)
//   // }

//   // const getPost = async (category=props.category) => {
//   //   if (page + 1 < Math.ceil(totalresult / props.pageSize) || props.pageSize * page < 99) {
//   //     const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=f3447489de2940048eeb8668195a11ec&page=${page}&pageSize=${props.pageSize}`
//   //     console.log(page)
//   //     setLoading(true)
//   //     const response = await fetch(url)
//   //     const data = await response.json()
//   //     setArticle((prev) => [...prev, ...data["articles"]])
//   //     setLoading(false)

//   //     console.log(article)
//   //   }

//   // }


//   useEffect(() => {

//     // getPost()
//     if (page + 1 < Math.ceil(totalresult / props.pageSize) || props.pageSize * page < 99) {
//       const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=d2ff18385c104164b8330f32afe2e9f0&page=${page}&pageSize=${props.pageSize}`
//       setLoading(true)
//       fetch(url).then((response) => {
        
//         return response.json()
//       }).then((data) => {
//         setLoading(false)
//         return [setArticle((prev) => [...prev, ...data["articles"]]), setTotalResult(data["totalResults"])]
//       }).catch(err => console.log(err))
//     }


//   }, [page, props.pageSize, props.category])
//   const handleScroll = async () => {
//     try {
//       if (window.innerHeight + window.document.documentElement.scrollTop + 1 >= window.document.documentElement.scrollHeight) {

//         setPage(page + 1)
//       }

//     } catch (error) {
//       alert("Error aa rha hai bhai theek kr usko")
//     }
//   }
//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [article])

//   //  console.log(article)

//   return (
//     <div className="row mx-1 " id="bhai">
//       <h1 className="container col-blue  my-5">Top Headlines</h1>
//       {


//         article.map((list, index) => {

//           return <div className="col-md-4" key={index}>
//             <News title={list["title"] ? list["title"] : ""} descrip={list["description"] ? list["description"].slice(0, 100) : "Description"} imageUrl={list["urlToImage"] ? list["urlToImage"] : "https://cdn.arstechnica.net/wp-content/uploads/2023/07/Amazon-EDV7-760x380.jpg"} publishedAt={list["publishedAt"]} author={list["author"]} san={list["url"]} />
//           </div>


//         })

//       }
//       {loading && <Spinner />}
//       {/* <div class="d-flex justify-content-between my-5">
//         <button disabled={page<=1} type="button" class="btn btn-success" onClick={GetPrev}>&larr; Previous</button>
//         <button disabled={page+1 > Math.ceil(totalresult/props.pageSize) || props.pageSize * page >99} type="button" class="btn btn-success" onClick={GetNext}>Next &rarr;</button>
//       </div> */}

//     </div >

//   )
// }


//Note This App is only for 100 news as a testing app because the Free API allows only 100 records

import React, { useEffect, useState } from 'react'
import News from './News'
import Spinner from './Spinner'
import {withRouter} from 'react-router';
import InfiniteScroll from 'react-infinite-scroll-component'
export default function NewsBox(props) {
  const [article, setArticle] = useState([])
  const [page, setPage] = useState(1)
  const [totalresult, setTotalResult] = useState(1)
  
  const [loading, setLoading] = useState(false)
  // const GetNext=()=>{
    //     setPage(page+1)
    // }
    // const GetPrev=()=>{
      //     setPage(page-1)
      // }
      
      // const getPost = async () => {
        
        //     const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=f3447489de2940048eeb8668195a11ec&page=${page}&pageSize=${props.pageSize}`
        //     console.log(page)
        //     setLoading(true)
        //     const response = await fetch(url)
        //     const data = await response.json()
        //     setArticle( data["articles"])
        //     setTotalResult(data["totalResults"])
        //     setLoading(false)
        //   }

  
        
        
        useEffect(() => {
          const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=d2ff18385c104164b8330f32afe2e9f0&page=${page}&pageSize=${props.pageSize}`
          props.setProgress(10)
          setLoading(true)
          fetch(url).then((response) => {
            props.setProgress(30)
            
            return response.json()
          }).then((data) => {
            setLoading(false)
            props.setProgress(100)
            return [setArticle(data["articles"]), setTotalResult(data["totalResults"])]
            
          }).catch(err => console.log(err))
            
          
          
         
  }, [])

const fetchMoreData=async()=>{
  const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=f3447489de2940048eeb8668195a11ec&page=${page+1}&pageSize=${props.pageSize}`
  setPage(page+1)
      // console.log(page)
      setLoading(true)
      const response = await fetch(url)
      const data = await response.json()
      setArticle( (prev)=>[...prev, ...data["articles"]])
      setTotalResult(data["totalResults"])
      setLoading(false)
}
  return (
      <InfiniteScroll
          dataLength={article.length}
          next={fetchMoreData}
          hasMore={article.length !== totalresult}
          loader={<Spinner/>}
        >
    <div className="row mx-1 " id="bhai">
      <h1 className="container col-blue  my-5">Top Headlines</h1>
      
      {
        article.map((list, index) => {

          return <div className="col-md-4" key={index}>
            <News title={list["title"] ? list["title"] : ""} descrip={list["description"] ? list["description"].slice(0, 100) : "Description"} imageUrl={list["urlToImage"] ? list["urlToImage"] : "https://cdn.arstechnica.net/wp-content/uploads/2023/07/Amazon-EDV7-760x380.jpg"} publishedAt={list["publishedAt"]} author={list["author"]} san={list["url"]} />
          </div>


        })

      }

    </div >
     </InfiniteScroll>
  )
}
