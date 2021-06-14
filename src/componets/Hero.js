import CommentCard from "./CommentCard";
const Hero = () => {
    return ( 
        <div id="hero">
            <h1>Welcome</h1>
            <div className="comments">
     <CommentCard/>
     <CommentCard/>
     <CommentCard/>
   </div>
        </div>
     );
}
 
export default Hero;