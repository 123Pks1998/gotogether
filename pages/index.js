import Link from "next/link"

export default function Home() {
  return (
    <div>
      <div className=' lg:flex font-serif gap-2 py-2 px-1'>
        <div className='md:w-full lg:w-3/4 xl:w-3/4 mb-4 h-fit'>
          <h1 className='capitalize text-xl font-semibold py-1 underline'>latest posts</h1>
          <div className='md:w-full lg:w-full xl:w-full   px-4 rounded-md flex flex-col h-fit bg-neutral-300'>

            <div className=' flex flex-wrap md:w-full lg:w-full sm:w-full  xl:w-full md:justify-between lg:justify-between xl:justify-between sm:justify-between justify-center text-lg gap-2 h-fit py-4'>
              <Link href='/home/home ' className=" w-64">some links some links some links </Link>
              <Link href='/home/home ' className=" w-64">some links some links some links </Link>
              <Link href='/home/home ' className=" w-64">some links some links some links </Link>
              <Link href='/home/home ' className=" w-64">some links some links some links </Link>
              <Link href='/home/home ' className=" w-64">some links some links some links </Link>
              <Link href='/home/home ' className=" w-64">some links some links some links </Link>
              <Link href='/home/home ' className="  w-64">some links some links some links </Link>
              <Link href='/home/home ' className=" w-64">some links some links some links </Link>
              <Link href='/home/home ' className=" w-64">some links some links some links </Link>
              <Link href='/home/home ' className=" w-64">some links some links some links </Link>
              <Link href='/home/home ' className=" w-64">some links some links some links </Link>
              <Link href='/home/home ' className=" w-64">some links some links some links </Link>
            </div>
          </div>
        </div>

        <div className='md:w-full lg:w-2/4 w-full '>
          <h1 className='capitalize text-xl font-semibold '>video</h1>
          <div className="gap-2 flex flex-col py-2">
            <video src="/cb.mp4" controls={true} className="max-h-72 rounded-md"></video>
            <video src="/f.mp4" controls={true} className="max-h-72 rounded-md"></video>
          </div>
        </div>
      </div>


      <div className="clear-both">
        <h1 className='capitalize text-xl font-semibold font-serif p-1 underline'>new search</h1>
        <div className="container  mb-4  mx-auto">

          <div className="flex flex-wrap md:-mx-16 -mx-4">

            <div className="lg:w-1/4 xl:w-1/2 sm:w-1/2 md:w-1/2 p-2 font-serif">
              <Link href='/home/home '>
                <div className="bg-gray-100 p-1 rounded-lg">
                  <img className="h-44 rounded w-full object-cover object-center mb-2" src="/pks.png" alt="content" />
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-1">pradeep kumar</h2>
                  <p className="leading-relaxed text-base p-1">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                </div>
              </Link>
            </div>
            <div className="lg:w-1/4 xl:w-1/2 sm:w-1/2 md:w-1/2 p-2">
              <Link href='/home/home '>
                <div className="bg-gray-100 p-1 rounded-lg">
                  <img className="h-44 rounded w-full object-cover object-center mb-2" src="/pks.png" alt="content" />
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-1">pradeep kumar</h2>
                  <p className="leading-relaxed text-base p-1">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                </div>
              </Link>
            </div>
            <div className="lg:w-1/4 xl:w-1/2 sm:w-1/2 md:w-1/2 p-2">
              <Link href='/home/home '>
                <div className="bg-gray-100 p-1 rounded-lg">
                  <img className="h-44 rounded w-full object-cover object-center mb-2" src="/pks.png" alt="content" />
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-1">pradeep kumar</h2>
                  <p className="leading-relaxed text-base p-1">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                </div>
              </Link>
            </div>
            <div className="lg:w-1/4 xl:w-1/2 sm:w-1/2 md:w-1/2 p-2">
              <Link href='/home/home '>
                <div className="bg-gray-100 p-1 rounded-lg">
                  <img className="h-44 rounded w-full object-cover object-center mb-2" src="/pks.png" alt="content" />
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-1">pradeep kumar</h2>
                  <p className="leading-relaxed text-base p-1">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                </div>
              </Link>
            </div>
            <div className="lg:w-1/4 xl:w-1/2 sm:w-1/2 md:w-1/2 p-2">
              <Link href='/home/home '>
                <div className="bg-gray-100 p-1 rounded-lg">
                  <img className="h-44 rounded w-full object-cover object-center mb-2" src="/pks.png" alt="content" />
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-1">pradeep kumar</h2>
                  <p className="leading-relaxed text-base p-1">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                </div>
              </Link>
            </div>
            <div className="lg:w-1/4 xl:w-1/2 sm:w-1/2 md:w-1/2 p-2">
              <Link href='/home/home '>
                <div className="bg-gray-100 p-1 rounded-lg">
                  <img className="h-44 rounded w-full object-cover object-center mb-2" src="/pks.png" alt="content" />
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-1">pradeep kumar</h2>
                  <p className="leading-relaxed text-base p-1">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                </div>
              </Link>
            </div>
            <div className="lg:w-1/4 xl:w-1/2 sm:w-1/2 md:w-1/2 p-2">
              <Link href='/home/home '>
                <div className="bg-gray-100 p-1 rounded-lg">
                  <img className="h-44 rounded w-full object-cover object-center mb-2" src="/pks.png" alt="content" />
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-1">pradeep kumar</h2>
                  <p className="leading-relaxed text-base p-1">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

