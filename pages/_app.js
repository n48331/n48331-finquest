import '../assets/fonts/gilroy/stylesheet.css'
import '../styles/variables.css'
import '../styles/global.css'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
	return (
		<div>

			<Component {...pageProps} />

			<Footer />

		</div>
	)
}

export default MyApp
