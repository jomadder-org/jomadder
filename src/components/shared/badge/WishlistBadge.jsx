// components/WishlistBadge.js
const WishlistBadge = ({ count, show }) => {
  if (!show || count <= 0) return null;
  console.log("cout the modal",count)
  return (
    <span
      className={`absolute md:-top-2 top-1 left-[26%] sm:left-[28%] md:left-[65%] text-white text-center h-4 font-medium bg-red-500 rounded-full px-1 text-xs ${
        count >= 10 ? "w-5" : "w-4"
      }`}
    >
      {count}
    </span>
  );
};

export default WishlistBadge;