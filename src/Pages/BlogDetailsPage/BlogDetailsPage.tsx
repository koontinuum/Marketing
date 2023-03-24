import BlogBigContent from "../../components/BlogBigContent/BlogBigContent";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { LatestPosts } from "../../components/LatestPosts/LatestPosts";
import PlaceMainText from "../../components/PlaceMainText/PlaceMainText";
import SeoAnalysis from "../../components/SeoAnalysis/SeoAnalysis";
import SocialPlace from "../../components/SocialPlace/SocialPlace";
import UpFooter from "../../components/UpFooter/UpFooter";

function BlogDetailsPage() {
  return (
    <>
      <Header />
      <BlogBigContent />
      <SocialPlace />
      <PlaceMainText />
      <hr />
      <LatestPosts />
      <SeoAnalysis />
      <UpFooter />
      <Footer />
    </>
  );
}

export default BlogDetailsPage;
