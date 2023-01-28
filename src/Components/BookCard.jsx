import React from 'react'

export const BookCard = ({bookData}) => {

  return (
    <div>
        <div>
            <img src="https://cdn.pixabay.com/photo/2015/10/05/17/09/minion-972908_960_720.jpg" alt="minions" width="100px"/>
            <div>{bookData.book_name}</div>
            <div>{bookData.category}</div>
            <div>{bookData.release_year}</div>
        </div>
    </div>
  )
}
