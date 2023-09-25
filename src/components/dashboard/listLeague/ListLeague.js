import React, { useEffect, useLayoutEffect, useState } from 'react'
import { IoMdSwap } from "react-icons/io";
import "./ListLeague.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Leagues } from "./FakeData"
import { GetListClub } from '../../../redux/getListClub/GetListClub';
import { useDispatch, useSelector } from 'react-redux';
export default function MyWallet() {
  const dispatch = useDispatch()
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    className: "styleslistLeague"
  };
  const [id, setID] = useState(39)
  const year = new Date().getFullYear()
  useLayoutEffect(() => {
    dispatch(GetListClub({ url: `/teams?league=${id}&season=${year}` }))
  }, [])
  return (
    <div className='bg-white p-6 rounded-md w-full relative'>
      <div className='flex justify-between items-center'>
        <h1 className='text-xl-medium font-semibold'>List league</h1>
      </div>
      <div className='flex mt-10 max-w-full'>
        <Slider {...settings}>
          {Leagues.map((el) =>
            <div key={el.id} className='h-full pr w-3/12 cursor-pointer hover:text-primary wrapBorderLeague'>
              <div className='flex w-full'>
                <img className='h-20 w-full object-contain' src={el.img} />
              </div>
              <p className='text-20-medium font-semibold text-center mt-5'>{el.title}</p>
            </div>
          )}
        </Slider>
      </div>
    </div>
  )
}
