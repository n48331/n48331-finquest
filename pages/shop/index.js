import Hero from "../../components/shop/Hero";
import Layout from "../../components/shop/layout";

import styles from "./shop.module.css"
import { titleIfy, slugify } from '../../utils/helpers'
import { fetchInventory } from '../../utils/inventoryProvider'
import CartLink from '../../components/shop/CartLink'
import ProductLeft from "../../components/shop/ProductLeft";
import ProductRight from "../../components/shop/ProductRight";
import Head from 'next/head'
import Features from "../../components/shop/Features";

const Home = ({ inventoryData = [] }) => {
    const inventory = inventoryData.slice(0, 4)

    return (
        <Layout>
            <Head>
                <title>Finquest - Start learning how to invest &amp; trade in stock market easily.</title>
                <link rel='icon' type='image/png' href='/favicon.png'></link>
            </Head>
            <Hero />
            <div className='section-spacer'></div>

            <Features />

            <CartLink />
            <div id='about' className='margin'>
                <div id="journals">
                    <ProductRight
                        imageSrc={inventory[0].image}
                        title={inventory[0].name}
                        desc={inventory[0].description}
                        link={`/product/${slugify(inventory[0].name)}`}
                        price={inventory[0].price}

                    />

                    <ProductLeft
                        imageSrc={inventory[1].image}
                        title={inventory[1].name}
                        desc={inventory[1].description}
                        link={`/product/${slugify(inventory[1].name)}`}
                        price={inventory[1].price}
                    />
                </div>
                <div id="tshirt">
                    <ProductRight
                        imageSrc={inventory[2].image}
                        title={inventory[2].name}
                        desc={inventory[2].description}
                        link={`/product/${slugify(inventory[2].name)}`}
                        price={inventory[2].price}
                    />
                    <ProductLeft
                        imageSrc={inventory[3].image}
                        title={inventory[3].name}
                        desc={inventory[3].description}
                        link={`/product/${slugify(inventory[3].name)}`}
                        price={inventory[3].price}
                    />
                </div>

            </div>
        </Layout>
    )
}
export async function getStaticProps() {
    const inventory = await fetchInventory()
    return {
        props: {
            inventoryData: inventory,
        }
    }
}

export default Home