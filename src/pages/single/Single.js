import React , {useState , useEffect} from 'react'
import { useSelector , useDispatch } from 'react-redux'
import axios from "axios"
import "./single.scss"
import star from "../../assets/images/star.png"
import food  from "../../assets/images/category-1.svg.png"

import { IoIosStar } from "react-icons/io";
import {useParams} from "react-router-dom"
import { LuEye } from "react-icons/lu";

import { FaRegHeart , FaHeart } from "react-icons/fa";
import { toogleWishes } from '../../context/wishestSlice'
import { addCard } from '../../context/karzinkaSlice'



const API_URL = "https://fakestoreapi.com/products/"

function Single() {
    const dispatch = useDispatch()
    const {id} = useParams()
    const wishes = useSelector(state => state.wishlist.value)
    const karzinka = useSelector(state => state.karzinka.value)
    const [data , setData] = useState([])
    const [loading, setLoading] = useState(false)
    let [count , setCuont] = useState(1)

  window.scrollTo(0,0)

  useEffect(()=> {
    setLoading(true)
        axios
        .get(API_URL)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }, [])

    let findProduct = data.find(el => el.id === +id)


  return (
    <>
        <div id="single">
            <div className="container">
                <div className="single">
                    <div className="single__left">
                        <div className="single__home__left">
                            <div className="single__bg-img">
                                <img src={findProduct?.image} alt="" />
                            </div>
                            <div className='single__litle-img'>
                                <img src={findProduct?.image} alt="" />
                                <img src={findProduct?.image} alt="" />
                                <img src={findProduct?.image} alt="" />
                                <img src={findProduct?.image} alt="" />
                                <img src={findProduct?.image} alt="" />
                            </div>
                        </div>
                        <div className="single__home__right">
                            <p className='single__home__right__title'>Sale off</p>
                            <h2 className="single__home__right__text">
                                Seeds of Change Organic Quinoa, Brown
                            </h2>
                            <div className="rating">
                                <img src={star} alt="" />
                                <p>({findProduct?.rating.rate} reviews)</p>
                            </div>
                            <div className="single__home__right__price">
                                <div className="card__prices">
                                    <h6>${(findProduct?.price * count).toFixed(1)}</h6>
                                    <p>$534,33</p>
                                    <h4>24% Off</h4>
                                </div>
                            </div>
                            <p className="single__home__right__list">
                                {findProduct?.description}
                            </p>
                            <div className="single__inform__right__weight">
                                <h3>Size/Weight :</h3>
                                <span>50kg</span>
                                <span>80kg</span>
                                <span>120kg</span>
                                <span>200kg</span>
                            </div>
                            <div className="single__inform__right__buttons">
                                <div className="single__inform__right__buttons__start">
                                    <p>{count}</p>
                                    <div>
                                        <button onClick={() => setCuont(count+1)}>+</button>
                                        <button disabled={count === 1} onClick={() => setCuont(count-1)}>-</button>
                                    </div>
                                </div>
                                <button onClick={() => dispatch(addCard(findProduct))} className="single__inform__right__buttons__btn">
                                    Add To Cart
                                </button>
                                <button onClick={() => dispatch(toogleWishes(findProduct))}  className="single__inform__right__buttons__like__btn">
                                    {
                                        wishes.some(w => w.id === findProduct?.id) ? <FaHeart/> :
                                    <FaRegHeart/> 
                                    }
                                </button>
                                <button className="single__inform__right__buttons__like__btn">
                                    <LuEye />
                                </button>
                            </div>
                            <ul>
                                <li>Type: <span>Organic</span></li>
                                <li>MFG: <span>Jun 4.2022</span></li>
                                <li>LIFE: <span>70 days</span></li>
                                <li>SKU: <span>FWM15VKT</span></li>
                                <li>Tags: <span>Snack, Organic, Brown</span></li>
                                <li>Stock: <span>8 Items In Stock</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="single__right">
                        <div className="single__right__card">
                            <h2>Category</h2>
                            <div className='single__right__card__1 card__1'>
                                <div>
                                    <img src={food} alt="" />
                                    <h3>Milks & Dairies</h3>
                                </div>
                                <span>5</span>
                            </div>
                            <div className='single__right__card__1 '>
                                <div>
                                    <img src={food} alt="" />
                                    <h3>Clothing</h3>
                                </div>
                                <span>6</span>
                            </div>
                            <div className='single__right__card__1 '>
                                <div>
                                    <img src={food} alt="" />
                                    <h3>Pet Foods</h3>
                                </div>
                                <span>7</span>
                            </div>
                            <div className='single__right__card__1 '>
                                <div>
                                    <img src={food} alt="" />
                                    <h3>Baking material</h3>
                                </div>
                                <span>12</span>
                            </div>
                            <div className='single__right__card__1 '>
                                <div>
                                    <img src={food} alt="" />
                                    <h3>Fresh Fruit</h3>
                                </div>
                                <span>16</span>
                            </div>
                        </div>
                        <div className="heros__left">
                            <div className="heros__left__box">
                                <h3 className="heros__category">Fill by price</h3>
                                <div className="heros__box__row1">
                                    <div className="heros__box__inputs">
                                        <div className="heros__box__inputs__left">
                                            <input type="checkbox" />
                                            <p>Juice & Drinks</p>
                                        </div>
                                        <h6>[20]</h6>
                                    </div>
                                    <div className="heros__box__inputs">
                                        <div className="heros__box__inputs__left">
                                            <input type="checkbox" />
                                            <p>Dairy & Milk</p>
                                        </div>
                                        <h6>[20]</h6>
                                    </div>
                                    <div className="heros__box__inputs">
                                        <div className="heros__box__inputs__left">
                                            <input type="checkbox" />
                                            <p>Snack & Spice</p>
                                        </div>
                                        <h6>[20]</h6>
                                    </div>
                                </div>
                                <div className="heros__box__row2">
                                    <h2>Filter by Price</h2>
                                    <input type="range" />
                                    <h3>Price: <span>$20 - $250</span></h3>
                                    <button>Filter</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Single