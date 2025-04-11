export default function Home() {
  return (
    <div
      className="w-full h-[300px] sm:h-[400px] md:h-[500px] bg-cover bg-center"
      style={{ backgroundImage: "url('/homepage.jpg')" }}
    >
      <div className="h-full backdrop-blur-xs bg-black/10">
        <div className="flex flex-col justify-center items-center h-full px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold drop-shadow-2xl text-white text-center">
            Welcome to Bookeria!
          </h1>
          <p className="text-white/80 text-base sm:text-lg md:text-xl lg:text-3xl mt-2 sm:mt-3 md:mt-4 lg:mt-5 text-center max-w-2xl">
            Discover timeless stories, bestsellers, and hidden gems—all in one place.
          </p>
        </div>
      </div>
    </div>
  );
}