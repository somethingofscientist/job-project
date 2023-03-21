import "./header.css";

export default function Header() {
  return (
    
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">HOMEPAGE</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://r4.wallpaperflare.com/wallpaper/53/116/913/harry-potter-harry-potter-and-the-prisoner-of-azkaban-ron-weasley-wallpaper-e38a037aa8a52c4dc852bed3a1189211.jpg"
        alt="harry-potter-book-wallpaper"
      />
    </div>
  );
}
