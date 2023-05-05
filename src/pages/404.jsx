import Link from 'next/link';
import Breadcrumb from '../components/breadcrumb/breadcrumb';
import SEO from '../components/seo';
import FooterTwo from '../layout/footers/footer-2';
import HeaderThree from '../layout/headers/header-3';
import Wrapper from '../layout/wrapper';

export default function ErrorPage() {
  return (
    <Wrapper>
      <SEO pageTitle={'Not Found'} />
      <div className='page-wrapper'>
        <HeaderThree />
        <Breadcrumb title={'Page Not Found'} subtitle={'404 Error'} />
        {/* error area start*/}
        <section className="error-page text-center py-120 rpy-100">
          <div className="container">
            <div className="error-content">
              <img src="/assets/images/404.png" alt="404 Error" />
              <h2>Oops! page not found.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
              <Link href="/">
                <a className="theme-btn mt-30">go back</a>
              </Link>
            </div>
          </div>
        </section>
        {/* error area end*/}
        <FooterTwo />
      </div>
    </Wrapper>
  )
}
