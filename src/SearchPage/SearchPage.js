import TuneOutlinedIcon  from '@material-ui/icons/TuneOutlined'
import React from 'react'
import "./SearchPage.css"
import ChannelRow from '../ChannelRow/ChannelRow'

function SearchPage() {
  return (
    <div className='searchPage'>
        <div className="searchPage__filter">
            <TuneOutlinedIcon/>
            <h2>FILTER</h2>
        </div>
        
        <ChannelRow
        image="https://i.pinimg.com/originals/8d/d0/6d/8dd06d6ebfc449428766b1ec7e52c441.jpg"
        channel="skincare pro"
        verified
        subs="300K"
        noOfVideos={200}
        description="awesome videos about skin care"/>
        <hr/>
        
       
    </div>
  )
}

export default SearchPage