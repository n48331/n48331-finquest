import { useState, useEffect } from 'react'
import { ContextProviderComponent, SiteContext } from '../../context/mainContext'
import { FaShoppingCart, FaCircle } from 'react-icons/fa';
import Link from "next/link"
import { colors } from '../../theme'
import styles from './cart.module.css'

const { primary } = colors

function CartLink(props) {
  const [renderClientSideComponent, setRenderClientSideComponent] = useState(false)
  useEffect(() => {
    setRenderClientSideComponent(true)
  }, [])
  let { context: { numberOfItemsInCart = 0 } } = props
  return (
    <div>
      <div className={styles['circle']}>
        <div className={styles['cart']}>
          <Link href="/shop/cart">
            <a aria-label="Cart">
              <FaShoppingCart />
            </a>
          </Link>


          {
            renderClientSideComponent && numberOfItemsInCart > Number(0) && (
              <FaCircle color={primary} size={12} suppressHydrationWarning />
            )
          }
        </div>
      </div>
    </div>
  )
}

function CartLinkWithContext(props) {
  return (
    <ContextProviderComponent>
      <SiteContext.Consumer>
        {
          context => <CartLink {...props} context={context} />
        }
      </SiteContext.Consumer>
    </ContextProviderComponent>
  )
}

export default CartLinkWithContext