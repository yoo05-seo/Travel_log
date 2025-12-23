import React from 'react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './CityPage.css'

const CityPage = () => {
  return (
    <>
      {/* 상단 메인 슬라이드 */}
      <Swiper
        modules={[Autoplay]}
        className="swiper citySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        <div className="slide-title">Pyeongchang</div>

        <SwiperSlide>
          <img src="/images/city/pyeongchang_slide1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/city/pyeongchang_slide2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/city/pyeongchang_slide3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/city/pyeongchang_slide4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/city/pyeongchang_slide5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/city/pyeongchang_slide6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/city/pyeongchang_slide7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/city/pyeongchang_slide8.jpg" />
        </SwiperSlide>
      </Swiper>

      {/* Destination */}
      <section className="destination-section">
        <div className="section-header">
          <h2 className="destination-section-title">Destination</h2>
          <a href="#" className="more-btn">
            <img src="/images/common/p.png" alt="더보기" />
          </a>
        </div>

        <div className="destination-card-row">
          <div className="destination-card">
            <img src="/images/city/pyeongchang_destination1.jpg" />
            <p className="destination-name">월정사·전나무숲</p>
          </div>
          <div className="destination-card">
            <img src="/images/city/pyeongchang_destination2.jpg" />
            <p className="destination-name">이효석 문화마을</p>
          </div>
          <div className="destination-card">
            <img src="/images/city/pyeongchang_destination3.jpg" />
            <p className="destination-name">오대산 국립공원</p>
          </div>
        </div>
      </section>

      {/* Activity */}
      <section className="activity-section">
        <div className="section-header">
          <h2 className="activity-section-title">Activity</h2>
          <a href="#" className="more-btn">
            <img src="/images/common/p.png" alt="더보기" />
          </a>
        </div>

        <div className="activity-item">
          <img src="/images/city/pyeongchang_activity1.jpg" />
          <div className="activity-text">
            <h3>대관령 양떼목장</h3>
            <p>
              한국의 알프스로 불리는 대관령 양떼목장은 푸른 풀밭과 상쾌한
              자연 풍경을 즐길 수 있는 명소이다.
            </p>
          </div>
        </div>

        <div className="activity-item reverse">
          <img src="/images/city/pyeongchang_activity2.png" />
          <div className="activity-text">
            <h3>발왕산 케이블카</h3>
            <p>
              국내 최장 길이의 케이블카로 발왕산 정상까지 하늘을 나는
              듯한 경험을 선사한다.
            </p>
          </div>
        </div>

        <div className="activity-item">
          <img src="/images/city/pyeongchang_activity3.jpg" />
          <div className="activity-text">
            <h3>허브나라 농원</h3>
            <p>
              자연과 사람이 어우러진 힐링 가든으로 사계절 모두 사랑받는
              평창의 대표 관광지이다.
            </p>
          </div>
        </div>
      </section>

      {/* Festival */}
      <section className="festival-section">
        <div className="section-header">
          <h2 className="festival-section-title">Festival</h2>
          <a href="#" className="more-btn">
            <img src="/images/common/p.png" alt="더보기" />
          </a>
        </div>

        <div className="festival-container">
          <Swiper
            modules={[Navigation]}
            className="festivalSwiper"
            slidesPerView={1}
            centeredSlides={true}
            speed={500}
            navigation={true}
            breakpoints={{
              768: {
                slidesPerView: 'auto',
              },
            }}
          >
            <SwiperSlide>
              <img src="/images/city/pyeongchang_festival1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/city/pyeongchang_festival2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/city/pyeongchang_festival3.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default CityPage
