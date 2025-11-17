import './App.css'
import Headers from './Layout/Header/Headers'
import Footer from './Layout/Footer/Footer'
import Home from './Pages/Home/Home'
import Phone from './Pages/Phone/Phone'
import Basket from './Pages/Basket/Basket'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import NotFound from './Pages/NotFound/NotFound'
import { useEffect } from 'react'

import { useDispatch } from 'react-redux'

import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import { fetchPhones } from './Redux/slices/phonesSlice'


function AppMain() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchPhones())
	}, [])

	return (
		<>
			<BrowserRouter>
				<ScrollToTop />

				<Routes>
					<Route element={<WithLayout />}>
						<Route path='/' element={<Home />} />
						<Route path='/phone/:id' element={<Phone />} />
						<Route path='/basket' element={<Basket />} />
					</Route>

					<Route element={<WithOutLayout />}>
						<Route path='*' element={<NotFound />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}

function WithLayout() {
	return (
		<>
			<Headers />
			<Outlet />
			<Footer />
		</>
	)
}

function WithOutLayout() {
	return <Outlet />
}

export default AppMain
