import React , {useEffect , useState} from 'react'
import "./card.scss"

import axios from "axios"
import Skeleton from '../skeleton/Skeleton'
import Loading from '../loading/Loading'
import { FaRegHeart , FaHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";


import rate from "../../assets/images/rate.png"
import { Link } from 'react-router-dom'



import { useDispatch , useSelector } from 'react-redux'
import { toogleWishes } from '../../context/wishestSlice'
import { addCard } from '../../context/karzinkaSlice'



const API_URL = "https://fakestoreapi.com/products/"

function Card() {
    const dispatch = useDispatch()
    const [data , setData] = useState([])
    const [count , setCount] = useState(8)
    const [categories , SetCategories] = useState([])
    const [categoryValue , setCategoryValue] = useState("")
    const [loading, setLoading] = useState(false)

    const wishes = useSelector(state => state.wishlist.value)
        const karzinka = useSelector(state => state.karzinka.value)


useEffect(()=> {
        axios
        .get(`${API_URL}/categories`)
        .then(res => SetCategories(res.data))
        .catch(err => console.log(err))
    }, [])

    useEffect(()=> {
      setLoading(true)
      let url = categoryValue === "" ? `${API_URL}?limit=${count}` : `${API_URL}/category/${categoryValue}?limit=${count}`
        axios
        .get(url)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }, [count ,categoryValue])

    const getCategory = (text)=>{
      setCategoryValue(text)
      setData([])
    }

    let products = data?.map(el=> (
        <div key={el.id} className="card">
            <div className="card__img">
                <Link to={`/single/${el.id}`}>
                  <img src={el.image} alt="" />
                </Link>
            </div>
            <button onClick={() => dispatch(toogleWishes(el))} className='card__like'>
                {
                    wishes.some(w => w.id === el.id) ? <FaHeart/> :
                <FaRegHeart/> 
                }
            </button>
            <button onClick={() => dispatch(addCard(el))} className='card__cart'>
                {
                    karzinka.some(w => w.id === el.id) ? < FaShoppingCart /> :
                <IoCartOutline/> 
                }
            </button>
            <div className="card__body">
                <h2 className="card__title">
                    {el.title}
                </h2>
                <img src={rate} alt="" />
                <div className="card__prices">
                    <h3>${el.price}</h3>
                    <p>$534,33</p>
                    <h4>24% Off</h4>
                </div>
            </div>
        </div>
    ))

    // let categoriesItem = categories?.map((el , inx) => <option key={inx} value={el}>{el}</option>)
    let categoriesItem = categories?.map((el , inx) => <li onClick={e => getCategory(e.target.innerHTML)} className='filter__item' key={inx} >{el}</li>)
    return (
    <section>
        <div className="container">
          {/* <select onChange={e => setCategoryValue(e.target.value)} name="" id="">
            {
              categoriesItem
            }
          </select> */}
          <div className="filter">
            <h2 className="filter__title">
              BEST SELLER
            </h2>
            <ul className="filter__list">
              <li onClick={()=> getCategory("")} className='filter__item items'>All</li>
              {categoriesItem}
            </ul>
          </div>
          { loading && <Skeleton count={10}/> }
          { loading && <Loading count={4}/> }
          <div className="row">
            {products}
          </div>
            <button onClick={()=>setCount(p => p + 4)} className='card__buttons'>See More</button>
        </div>
      </section>
  )
}

export default Card

