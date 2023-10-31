

import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {

  const text = 'Hello World'

  return (
    <main className={styles.main}>
      //pass 
   <Link href="/child1" > Child1</Link>
   <Link href="/users"> users</Link>
      <div className={styles.center}>
        <h1>API Image</h1>
        <br/>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      <ProductCard />
      </div>

     
    </main>
  )
}
