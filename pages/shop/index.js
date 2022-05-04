import Hero from "../../components/shop/Hero";
import Layout from "../../components/shop/layout";

import styles from "./shop.module.css"
import { titleIfy, slugify } from '../../utils/helpers'
import { fetchInventory } from '../../utils/inventoryProvider'
import CartLink from '../../components/shop/CartLink'
import ProductLeft from "../../components/shop/ProductLeft";
import ProductRight from "../../components/shop/ProductRight";
import Head from 'next/head'

const Home = ({ inventoryData = [] }) => {
    const inventory = inventoryData.slice(0, 4)

    return (
        <Layout>
            <Head>
                <title>Finquest - Start learning how to invest &amp; trade in stock market easily.</title>
                <link rel='icon' type='image/png' href='/favicon.png'></link>
            </Head>
            <Hero />
            <CartLink />
            <div id='about' className='margin'>
                <ProductRight
                    imageSrc={inventory[0].image}
                    title={inventory[0].name}
                    desc={inventory[0].description}
                    link={`/product/${slugify(inventory[0].name)}`}
                />

                <ProductLeft
                    imageSrc={inventory[0].image}
                    title={inventory[0].name}
                    desc={inventory[0].description}
                    link={`/product/${slugify(inventory[1].name)}`}
                />
                <ProductRight
                    imageSrc={inventory[0].image}
                    title={inventory[0].name}
                    desc={inventory[0].description}
                    link={`/product/${slugify(inventory[0].name)}`}
                />
                <ProductLeft
                    imageSrc={inventory[0].image}
                    title={inventory[0].name}
                    desc={inventory[0].description}
                    link={`/product/${slugify(inventory[0].name)}`}
                />
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