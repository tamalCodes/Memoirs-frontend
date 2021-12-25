import React from 'react'
import Header from './components/Header'
import Home from './components/home/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DetailView from './components/post/DetailView';
import CreateView from './components/post/CreateView';

const App = () => {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/details' element={<DetailView />} />
                    <Route exact path='/create' element={<CreateView />} />
                </Routes>
            </Router>


        </>
    )
}

export default App
