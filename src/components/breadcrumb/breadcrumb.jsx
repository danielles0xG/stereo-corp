import Link from 'next/link'
import React from 'react'

export default function Breadcrumb({ title, subtitle }) {
  return (
    <section className="page-banner bgs-cover overlay pt-50" style={{backgroundImage:`url(/assets/images/banner.jpg)`}}>
      <div className="container">
        <div className="banner-inner">
          <h1 className="page-title">{title}</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/">
                  <a>Restly</a>
                </Link>
              </li>
              <li className="breadcrumb-item active">{subtitle}</li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  )
}
