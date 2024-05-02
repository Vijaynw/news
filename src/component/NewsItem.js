import React from 'react'
import { Link } from 'react-router-dom'

const NewsItem = ({ title, description, imageUrl, newsUrl }) => {
  console.log(newsUrl)
  return (
  
    <div className=' m-2 w-2/12'>

    <div className=" shadow-2xl w-12/12 h-[550px]" >
      <img className='p-2 m-2'
        src={
          !imageUrl
          ? "https://cdndh.darkhorizons.com/wp-content/uploads/2023/02/amazon-content-spending-hits-16-billion.jpg"
          : imageUrl
        }
        
        alt="..."
        />
      <div className="p-2">
        <h5 className="">{title}</h5>
        <p className="">{description}</p>
      </div>
      <div className='bg-black absolute '>

        <Link href={newsUrl} target="_blank" className="btn btn-dark btn-sm">
          Read More
        </Link>
      </div>
    </div>

        </div>
  
  )
}

export default NewsItem