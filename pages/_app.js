import '../assets/fonts/gilroy/stylesheet.css'
import '../styles/variables.css'
import '../styles/global.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<Navbar />
			<Component {...pageProps} />
			<Footer />

		</div>
	)
}

export default MyApp
