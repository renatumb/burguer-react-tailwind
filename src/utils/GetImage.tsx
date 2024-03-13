import about from './../assets/img/about.jpg'
import beverage1 from './../assets/img/beverage-1.png'
import beverage2 from './../assets/img/beverage-2.png'
import beverage3 from './../assets/img/beverage-3.png'
import beverage4 from './../assets/img/beverage-4.png'
import beverage5 from './../assets/img/beverage-5.png'
import burger1   from './../assets/img/burger-1.png'
import burger2   from './../assets/img/burger-2.png'
import burger3   from './../assets/img/burger-3.png'
import burger4   from './../assets/img/burger-4.png'
import burger5   from './../assets/img/burger-5.png'
import burger6   from './../assets/img/burger-6.png'
import favicon   from './../assets/img/favicon.png'
import homeImage from './../assets/img/home-image.png'
import promo1    from './../assets/img/promo-1.png'
import promo2    from './../assets/img/promo-2.png'
import review1   from './../assets/img/review-1.jpg'
import review2   from './../assets/img/review-2.jpg'
import review3   from './../assets/img/review-3.jpg'
import review4   from './../assets/img/review-4.jpg'
import review5   from './../assets/img/review-5.jpg'
import snack1    from './../assets/img/snack-1.png'
import snack2    from './../assets/img/snack-2.png'
import snack3    from './../assets/img/snack-3.png'
import snack4    from './../assets/img/snack-4.png'
import snack5    from './../assets/img/snack-5.png'
import snack6    from './../assets/img/snack-6.png'

const images : Map<string, any> = new Map()

images.set('about.jpg',about )
images.set('beverage-1.png',beverage1)
images.set('beverage-2.png',beverage2)
images.set('beverage-3.png',beverage3)
images.set('beverage-4.png',beverage4)
images.set('beverage-5.png',beverage5)
images.set('burger-1.png',burger1  )
images.set('burger-2.png',burger2  )
images.set('burger-3.png',burger3  )
images.set('burger-4.png',burger4  )
images.set('burger-5.png',burger5  )
images.set('burger-6.png',burger6  )
images.set('favicon.png',favicon  )
images.set('home-image.png',homeImage)
images.set('promo-1.png',promo1   )
images.set('promo-2.png',promo2   )
images.set('review-1.jpg',review1  )
images.set('review-2.jpg',review2  )
images.set('review-3.jpg',review3  )
images.set('review-4.jpg',review4  )
images.set('review-5.jpg',review5  )
images.set('snack-1.png',snack1   )
images.set('snack-2.png',snack2   )
images.set('snack-3.png',snack3   )
images.set('snack-4.png',snack4   )
images.set('snack-5.png',snack5   )
images.set('snack-6.png',snack6   )

export function GetImage(imageName: string)  {
    return images.get(imageName)
}
