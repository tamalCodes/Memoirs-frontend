import React from 'react'
import Banner from './Banner'
import Categories from './Categories'
import Posts from './Posts'

const Home = () => {
    return (
        <>
            <Banner />
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-2 col-sm-2 col-xs-12">
                        <Categories />
                    </div>

                    <div class=" col-lg-10 col-sm-10 col-xs-12">
                        <Posts />
                    </div>
                </div>
            </div>


        </>
    )
}

export default Home
