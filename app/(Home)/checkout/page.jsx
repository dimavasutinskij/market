
import Banner from '@/components/Banner'
import React from 'react'
import CheckOut from './_components/CheckOut'

export default function page() {


  return (
    <main className="overflow-hidden">
      <Banner title="checkout" bgUrl="/checkout-bg.png" />
      <section className="paddings w-full">
        <CheckOut />
      </section>
    </main>
  )
}
