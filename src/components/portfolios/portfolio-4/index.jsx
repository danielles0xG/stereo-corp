import FooterTwo from "../../../layout/footers/footer-2";
import HeaderThree from "../../../layout/headers/header-3";
import Breadcrumb from "../../breadcrumb/breadcrumb";
import BackToTopCom from "../../common/back-to-top-com";
import GallerySection from "../../homes/multipage/home-4/gallery-section";


export default function index() {
  return (
    <div className='page-wrapper'>
    <HeaderThree />
    <Breadcrumb title={'Portfolio Three'} subtitle={'Portfolio Three'} />
    <GallerySection/>
    <FooterTwo/>
    <BackToTopCom/>
  </div>
  )
}
