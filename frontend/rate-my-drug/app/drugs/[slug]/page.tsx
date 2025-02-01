import HeaderLayout from '@/components/header-layout'

export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const drug = (await params).slug
<<<<<<< Updated upstream
    

    // check if drug exists in database

    const drugInfo = {
      reviews: [
        {
          rating: 2,
          review: "This drug is okay. I don't feel any different.",
        },
        {
          rating: 1,
          review: "This drug is terrible. I feel like I'm going to die.",
        },
        {
          rating: 5,
          review: "This drug is the best thing that ever happened to me.",
        },
      ]
    }

    // how to sort reviews? recent first (for now)

    let avgRating : number = drugInfo.reviews.reduce((acc, review) => acc + review.rating, 0) / drugInfo.reviews.length
    avgRating = Math.round(avgRating * 10) / 10


    // TODO: change to grid

    return (
    <HeaderLayout>
        <div className='flex flex-col items-center pt-6 pb-10'>
            <div className='flex justify-center gap-10'>
              <div className='flex flex-col border-solid border border-black rounded-xl p-6 pl-8 pr-8'>
                <div className="flex items-center space-x-1">
                  <span className="text-8xl font-extrabold text-black">{avgRating}{Math.round(avgRating) == avgRating ? ".0" : ''}</span>
                  <span className="text-xl text-gray-400 mb-auto mt-3">/5</span>
                </div>
                <div className="text-md mt-2 font-bold">
                  From {drugInfo.reviews.length} rating{drugInfo.reviews.length > 1 ? 's' : ''}
                </div>
                <button className="bg-skyBlue hover:bg-midBlue text-white font-bold py-2 px-4 rounded mt-5">
                  Rate this drug
                </button>
              </div>
              
              <div className="flex flex-col ml-5 gap-5">
                <div className="text-8xl font-bold">{drug}</div>
                <div className="text-lg">
                  Used to treat:
                </div>
              </div>
            </div>

            <div className="mt-10 mb-10">
              <div className="text-2xl font-bold mb-5">Reviews</div>
              <div className="flex flex-col gap-10">
                {drugInfo.reviews.map((review, index) => (
                  <div key={index} className="flex gap-10 border-solid border border-black rounded-xl p-6 pl-8 pr-8">
                    <span className="text-2xl font-extrabold text-black">{review.rating}{Math.round(review.rating) == review.rating ? ".0" : ''}</span>
                    <div className="text-md mt-2">
                      {review.review}
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>
=======
    return (
    <HeaderLayout>
        <div>{drug}</div>
>>>>>>> Stashed changes
    </HeaderLayout>
    );
}