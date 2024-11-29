 <div className="w-full h-screen flex items-center">
        <div className="w-1/3">
          <Iphone />
        </div>
        <section className="w-2/3 flex items-center h-screen relative ml-10">
          {/* Gradient Blur */}
          <div className="absolute top-0 w-full h-[220px] inset-x-0 bg-gradient-to-r from-violet-600/70 via-blue-400/70 to-violet-600/70 blur-[130px] rounded-b-full"></div>

          {/* Hero Portfolio */}
          <div className="w-full h-screen flex flex-col justify-center items-start text-white">
            <HeroPortfolio />
          </div>

          {/* Spline 3D Model */}
          <div className="flex justify-center items-center h-screen min-w-[600px]">
            <Spline
              scene="https://prod.spline.design/DVe8fLgj4Kw25-rZ/scene.splinecode"
              className="w-full h-full"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-full h-16 bg-black z-10"></div>
        </section>
      </div>

{/_ About Section _/}

<section className="h-screen flex items-center justify-center relative overflow-hidden">
<About />

          {/* Large Gradient Bottom-Left */}
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-gradient-to-br from-violet-400 via-blue-400 to-transparent opacity-50 blur-[120px] rounded-full"></div>

          {/* Large Gradient Bottom-Right */}
          <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-gradient-to-bl from-blue-400 via-violet-400 to-transparent opacity-50 blur-[120px] rounded-full"></div>
        </section>
