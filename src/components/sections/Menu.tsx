import {SyntheticEvent, useState} from "react";
import {GetImage} from "../../utils/GetImage.tsx";

export default function Menu() {

    enum CATEGORY {
        ALL = 'ALL' ,
        FOOD = 'FOOD',
        SNACK = 'SNACK',
        BEVERAGE = 'BEVERAGE'
    }

    type singleItem = {
        id: number,
        imageUrl: string
        title: string
        description: string
        price: number,
        hidden: string,
        category: CATEGORY
    }

    const menuItems: singleItem [] = [
        {id: 1, category: CATEGORY.FOOD     , imageUrl: 'burger-1.png', title: 'Delicious Burguer', price: 9.16, description: 'The best burguer in town', hidden: ''},
        {id: 2, category: CATEGORY.FOOD     , imageUrl: 'burger-2.png', title: 'Burguer of God', price: 11.25, description: 'The best burguer in town', hidden: ''},
        {id: 3, category: CATEGORY.FOOD     , imageUrl: 'burger-3.png', title: 'Default Burguer', price: 13.34, description: 'The best burguer in town', hidden: ''},
        {id: 4, category: CATEGORY.FOOD     , imageUrl: 'burger-4.png', title: 'Marvelous Burguer', price: 15.43, description: 'The best burguer in town', hidden: ''},
        {id: 5, category: CATEGORY.FOOD     , imageUrl: 'burger-5.png', title: 'Never Again Burguer', price: 17.52, description: 'The best burguer in town', hidden: ''},
        {id: 6, category: CATEGORY.FOOD     , imageUrl: 'burger-6.png', title: 'Hunger Killer', price: 19.61, description: 'The best burguer in town', hidden: ''},
        {id: 17, category: CATEGORY.BEVERAGE,  imageUrl:'beverage-1.png', title: 'Sunny Refresher ', price: 1.11, description: 'The best burguer in town', hidden: ''},
        {id: 7, category:  CATEGORY.BEVERAGE, imageUrl: 'beverage-2.png', title: 'Refresh ', price: 1.11, description: 'The best burguer in town', hidden: ''},
        {id: 8, category:  CATEGORY.BEVERAGE, imageUrl: 'beverage-3.png', title: 'Quench killer', price: 3.33, description: 'The best burguer in town', hidden: ''},
        {id: 9, category:  CATEGORY.BEVERAGE, imageUrl: 'beverage-4.png', title: 'Irresistible Sips', price: 5.45, description: 'The best burguer in town', hidden: ''},
        {id: 10, category: CATEGORY.BEVERAGE,  imageUrl:'beverage-5.png', title: 'Single shot', price: 7.51, description: 'The best burguer in town', hidden: ''},
        {id: 11, category: CATEGORY.SNACK   ,imageUrl: 'snack-1.png', title: 'Just Fries', price: 2.21, description: 'The best burguer in town', hidden: ''},
        {id: 12, category: CATEGORY.SNACK   ,imageUrl: 'snack-2.png', title: 'double French', price: 8.62, description: 'The best burguer in town', hidden: ''},
        {id: 13, category: CATEGORY.SNACK   ,imageUrl: 'snack-3.png', title: 'Smash sandwich', price: 16.42, description: 'The best burguer in town', hidden: ''},
        {id: 14, category: CATEGORY.SNACK   ,imageUrl: 'snack-4.png', title: 'English Chips', price: 10.71, description: 'The best burguer in town', hidden: ''},
        {id: 15, category: CATEGORY.SNACK   ,imageUrl: 'snack-5.png', title: 'More fries', price: 12.13, description: 'The best burguer in town', hidden: ''},
        {id: 16, category: CATEGORY.SNACK   ,imageUrl: 'snack-6.png', title: 'Popcorn', price: 8.21, description: 'The best burguer in town', hidden: ''},
    ]

    const [allItems, setAllItems] = useState(menuItems)

    const clickMenu = (e: SyntheticEvent): void => {
        const itemsMenu = document.getElementById('items_menu')
        const categoryClicked: CATEGORY = e.currentTarget.getAttribute('data-category') as CATEGORY

        if (!itemsMenu || !itemsMenu.children.length) {
            return;
        }

        for (const child of itemsMenu.children) {
            child.classList.remove('active')
        }

        e.currentTarget.classList.add('active')

        setAllItems(prevState => {
                return prevState.map((el) => {

                        const hideElement: string = categoryClicked === el.category || categoryClicked === CATEGORY.ALL ? '' : 'hidden'

                        return {
                            ...el,
                            ...{hidden: hideElement}
                        }
                    }
                )
            }
        )
    }

    return (
        <section id="menu">
            <div className="container">
                <div className="max-w-md mx-auto text-center">
                    <h2 className="section__title">OUR BEST MENU</h2>
                    <div className="separator mx-auto"></div>
                    <p className="paragraph">
                        Experience culinary perfection with our diverse menu. Elevate your dining at its finest!
                    </p>

                    <ul id="items_menu" className="flex flex-row flex-wrap justify-center gap-3 py-10">
                        <li onClick={clickMenu} className="btn bg-primaryColorLight dark:bg-darkColorLight hover_active active" data-category={CATEGORY.ALL}>All</li>
                        <li onClick={clickMenu} className="btn bg-primaryColorLight dark:bg-darkColorLight hover_active"        data-category={CATEGORY.FOOD}>Food</li>
                        <li onClick={clickMenu} className="btn bg-primaryColorLight dark:bg-darkColorLight hover_active"        data-category={CATEGORY.SNACK}>Snack</li>
                        <li onClick={clickMenu} className="btn bg-primaryColorLight dark:bg-darkColorLight hover_active"        data-category={CATEGORY.BEVERAGE}>Beverage</li>
                    </ul>
                </div>
                <div>
                    <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">

                        {allItems &&
                            allItems.map((menuItem) => (
                                <li className={menuItem.hidden} key={menuItem.id}>
                                    <div className="h-56 grid place-items-center bg-primaryColorLight dark:bg-darkColorLight rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40">
                                        <img src={GetImage(menuItem.imageUrl)} className=" w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"/>
                                    </div>

                                    <div className="pt-5">
                                        <div className="mb-2 text-wrap text-center">
                                            <h4 className="card__title">{menuItem.title}</h4>
                                            <p className="paragraph ">{menuItem.description}</p>
                                            <p className="text-secondaryColor">${menuItem.price}</p>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}
