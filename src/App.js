import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/blogs/Blog";
import Land from "./pages/landing-page/Land";
import About from "./pages/about/About";
import Event from "./pages/events/Event";
import ContentTeam from "./pages/contentTeam/ContentTeam";
import DesignTeam from "./pages/designTeam/DesignTeam";
import DocumentationTeam from "./pages/docTeam/DocumentationTeam";
import PublicityTeam from "./pages/publicityTeam/PublicityTeam";
import SocialTeam from "./pages/socialMediaTeam/SocialTeam";
import WebTeam from "./pages/webTeam/WebTeam";
import Cod from "./pages/concept-of-day/Cod";
import SuccessBlog from "./pages/blogs/all-written-blogs/SuccessBlog";
import TwitterBlog from "./pages/blogs/all-written-blogs/TwitterBlog";
import DislikedBlog from "./pages/blogs/all-written-blogs/DislikedBlog";
import GenderBlog from "./pages/blogs/all-written-blogs/GenderBlog";
import IndiaBlog from "./pages/blogs/all-written-blogs/IndiaBlog";
import LoveBlog from "./pages/blogs/all-written-blogs/LoveBlog";
function App(){
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Land/>}></Route>
          <Route path="/blogs" element={<Blog/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/events" element={<Event/>}></Route>
          <Route path="/content-team" element={<ContentTeam/>}></Route>
          <Route path="/design-team" element={<DesignTeam/>}></Route>
          <Route path="/documentation-team" element={<DocumentationTeam/>}></Route>
          <Route path="/publicity-team" element={<PublicityTeam/>}></Route>
          <Route path="/social-team" element={<SocialTeam/>}></Route>
          <Route path="/web-team" element={<WebTeam/>}></Route>
          <Route path="/concept-of-day" element={<Cod/>}></Route>
          <Route path="/success-blog" element={<SuccessBlog/>}></Route>
          <Route path="/twitter-blog" element={<TwitterBlog/>}></Route>
          <Route path="/disliked-blog" element={<DislikedBlog/>}></Route>
          <Route path="/gender-blog" element={<GenderBlog/>}></Route>
          <Route path="/india-blog" element={<IndiaBlog/>}></Route>
          <Route path="/love-blog" element={<LoveBlog/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
