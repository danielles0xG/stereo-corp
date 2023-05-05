import FooterTwo from "../../../layout/footers/footer-2";
import HeaderThree from "../../../layout/headers/header-3";
import Breadcrumb from "../../breadcrumb/breadcrumb";
import BackToTopCom from "../../common/back-to-top-com";
import BlogArea from "./blog-area";

export default function index() {
  return (
    <div className='page-wrapper'>
    <HeaderThree />
    <Breadcrumb title={'Blog Standard'} subtitle={'Blog Standard'} />
    <BlogArea/>
    <FooterTwo/>
    <BackToTopCom/>
  </div>
  )
}
