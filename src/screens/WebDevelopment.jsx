import React from "react";
import { homeBannerImage1 } from "../assets";
import { Jumbotron } from "../components/Jumbotron";
import { ServicesExperties } from "../components/ServicesExperties";
import { ServicesExpertiesEntry } from "../components/ServicesExpertiesEntry";
import { ServicesHowWeDoIt } from "../components/ServicesHowWeDoIt";
import { WebDevelopmentWhy } from "../components/WebDevelopmentWhy";
import { ServicesExperiace } from "../components/ServicesExperiace";
import { ServicesMVP } from "../components/ServicesMVP";

export default function WebDevelopment() {
  return (
    <>
      <Jumbotron heading="Web Application Development" />
      <ServicesExperties
        description="Custom-built web applications with amazing user experiences & latest web technologies that help support your business goals."
        image={homeBannerImage1}
      >
        <ServicesExpertiesEntry
          icon={
            <svg
              width="43"
              height="44"
              viewBox="0 0 43 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.2408 12.6992C18.6819 11.213 14.5297 14.4917 13.089 17.793C11.444 21.5594 12.4877 26.0065 15.6302 28.6158C18.784 31.2251 23.7643 31.6902 27.6215 28.4343C27.6329 28.6045 27.6556 28.7293 27.6556 28.8654C27.6556 31.3953 27.6556 33.9251 27.6669 36.4437C27.6669 36.7613 27.5988 36.9315 27.2698 37.0222C26.7366 37.1697 26.2148 37.3966 25.6702 37.5214C25.3412 37.6008 25.2391 37.737 25.2165 38.066C25.1484 39.155 25.0576 40.2328 24.9669 41.3219C24.9442 41.5942 24.9328 41.8664 24.8875 42.1274C24.7967 42.6719 24.411 43.0236 23.8664 43.0236C22.3009 43.0349 20.7353 43.0349 19.1584 43.0236C18.6252 43.0236 18.2168 42.6606 18.16 42.116C18.0466 41.0042 17.9558 39.8925 17.8878 38.7693C17.8197 37.6689 17.8197 37.737 16.81 37.3512C15.5621 36.8861 14.3482 36.3075 13.1343 35.7516C12.8734 35.6268 12.7032 35.5928 12.465 35.8084C11.5347 36.6365 10.5818 37.442 9.62882 38.2475C8.91411 38.8601 8.42628 38.8487 7.75695 38.1794C6.7813 37.2038 5.80566 36.2395 4.84136 35.2638C4.20605 34.6172 4.18336 34.1293 4.78463 33.426C5.60145 32.4617 6.41827 31.4974 7.25778 30.5558C7.43929 30.3516 7.46198 30.2154 7.3145 29.9772C6.48634 28.6045 5.86238 27.141 5.488 25.5754C5.43128 25.3145 5.29515 25.2578 5.05691 25.2464C3.95647 25.167 2.85603 25.0763 1.75559 24.9855C1.47198 24.9628 1.17701 24.9515 0.893394 24.8947C0.360193 24.804 0.00850853 24.4069 0.00850853 23.8624C-0.00283618 22.3082 -0.00283618 20.7539 0.00850853 19.211C0.00850853 18.6438 0.360194 18.2354 0.938774 18.1673C2.08459 18.0539 3.2304 17.9631 4.37622 17.8951C5.35186 17.827 5.29514 17.827 5.63548 16.9421C6.13465 15.6488 6.71323 14.3895 7.29181 13.1303C7.4166 12.858 7.42795 12.6992 7.22374 12.4609C6.39558 11.5307 5.5901 10.5777 4.78463 9.62477C4.18336 8.9214 4.19471 8.43358 4.83001 7.78693C5.80565 6.79994 6.79264 5.81295 7.77963 4.8373C8.40359 4.21335 8.90275 4.202 9.58344 4.76924C10.5364 5.57471 11.4893 6.38018 12.4196 7.20835C12.6579 7.4239 12.828 7.46928 13.123 7.28776C14.4503 6.47094 15.8798 5.89236 17.3886 5.50664C17.6609 5.43857 17.7857 5.34782 17.8083 5.04151C17.8764 3.92973 17.9785 2.8066 18.0693 1.69482C18.092 1.4112 18.1033 1.11624 18.16 0.832622C18.2508 0.378833 18.6365 0.0158025 19.1016 0.0158025C20.7126 0.00445782 22.3349 -0.0182313 23.9458 0.0271475C24.6946 0.0384922 25.1257 0.912035 24.7513 1.53599C22.6979 5.05285 22.4937 8.68316 24.1387 12.4042C24.1727 12.495 24.1954 12.5744 24.2408 12.6992Z"
                fill="#2ECC82"
              />
              <path
                d="M30.7277 4.7344C30.7277 6.10711 30.739 7.47982 30.7164 8.86387C30.7164 9.14749 30.8071 9.28363 31.068 9.38573C32.1344 9.79414 33.2008 10.2479 34.2673 10.6563C34.4374 10.7244 34.6757 10.7244 34.8458 10.6563C35.9009 10.2479 36.9446 9.80549 38.011 9.40842C38.3173 9.29497 38.4081 9.14749 38.4081 8.8185C38.3967 6.09577 38.3967 3.38438 38.4081 0.661651C38.4081 0.502825 38.4875 0.343999 38.5215 0.185173C38.669 0.241897 38.8165 0.275931 38.9526 0.355344C44.3867 3.59993 44.3414 11.5979 38.8619 14.8085C38.4761 15.0354 38.3854 15.2736 38.3854 15.6707C38.3967 23.5099 38.3967 31.3491 38.3967 39.1769C38.3967 41.0261 37.1601 42.5577 35.3904 42.9434C32.9853 43.4652 30.7277 41.6728 30.7277 39.211C30.7163 31.3604 30.7277 23.5099 30.739 15.648C30.739 15.2396 30.6369 15.0127 30.2626 14.7858C24.8058 11.6093 24.749 3.62262 30.1378 0.355344C30.2853 0.264586 30.4554 0.230552 30.6143 0.173828C30.6483 0.355343 30.7277 0.525514 30.7277 0.70703C30.7277 2.04571 30.7277 3.38438 30.7277 4.7344Z"
                fill="#2ECC82"
              />
            </svg>
          }
          title="Massively Customized Web Apps"
          description="Tailor your web apps exactly the way your business works. Build one from scratch, migrate your legacy back-end or upgrade existing front-end functionality."
        />
        <ServicesExpertiesEntry
          icon={
            <svg
              width="44"
              height="41"
              viewBox="0 0 44 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.6964 30.0668C15.4094 30.0668 9.12615 30.0668 2.83916 30.0668C0.990494 30.0668 0 29.0754 0 27.2143C0 19.0934 0 10.9725 0 2.85161C0 0.979026 0.967811 0.00284876 2.83916 0.00284876C15.4434 -0.000949588 28.0476 -0.000949588 40.6556 0.00284876C42.5232 0.00284876 43.4948 0.982824 43.4948 2.85161C43.4948 10.9725 43.4948 19.0934 43.4948 27.2143C43.4948 29.0716 42.5005 30.0668 40.6556 30.0668C34.3346 30.0668 28.0174 30.0668 21.6964 30.0668ZM21.7417 28.5931C28.0249 28.5931 34.3119 28.5931 40.5951 28.5931C41.7293 28.5931 42.0393 28.2854 42.0393 27.1573C42.0393 19.0706 42.0393 10.9877 42.0393 2.90099C42.0393 1.80327 41.7104 1.46901 40.6367 1.46901C28.0514 1.46901 15.4661 1.46901 2.88075 1.46901C1.79196 1.46901 1.46306 1.79947 1.46306 2.8858C1.46306 10.9877 1.46306 19.0896 1.46306 27.1915C1.46306 28.2702 1.78062 28.5931 2.84294 28.5931C9.1375 28.5931 15.4396 28.5931 21.7417 28.5931Z"
                fill="#181818"
              />
              <path
                d="M19.5645 31.1113C21.0162 31.1113 22.4452 31.1113 23.9234 31.1113C23.9234 33.5043 23.9234 35.8935 23.9234 38.3168C22.4868 38.3168 21.0464 38.3168 19.5645 38.3168C19.5645 35.9162 19.5645 33.5271 19.5645 31.1113Z"
                fill="#181818"
              />
              <path
                d="M25.0229 38.4941C25.0229 37.8142 25.0229 37.2027 25.0229 36.5C27.8697 37.3622 30.6748 38.213 33.5782 39.0905C33.1435 39.5994 32.7503 40.0742 32.342 40.53C32.2853 40.5946 32.1228 40.6136 32.032 40.5832C29.6957 39.8957 27.3669 39.1968 25.0229 38.4941Z"
                fill="#181818"
              />
              <path
                d="M18.4902 36.5C18.4902 37.1381 18.5016 37.7117 18.4789 38.2852C18.4751 38.3878 18.3314 38.5359 18.2256 38.5701C15.9913 39.25 13.7532 39.9185 11.5114 40.5756C11.398 40.6098 11.1976 40.5718 11.122 40.4921C10.7251 40.0553 10.3546 39.5957 9.93115 39.0943C12.8043 38.2244 15.6133 37.3736 18.4902 36.5Z"
                fill="#181818"
              />
              <path
                d="M40.9736 2.5332C40.9736 10.882 40.9736 19.208 40.9736 27.553C28.1463 27.553 15.3492 27.553 2.52197 27.553C2.52197 19.2042 2.52197 10.8782 2.52197 2.5332C15.353 2.5332 28.1501 2.5332 40.9736 2.5332ZM4.66552 13.7421C4.6504 13.7421 4.63528 13.7421 4.62394 13.7421C4.6693 14.7677 4.59747 15.8122 4.7865 16.8112C5.10784 18.5167 6.79773 19.6942 8.42335 19.5118C10.306 19.2991 11.6406 17.8558 11.6519 15.987C11.6632 14.4296 11.6519 12.8723 11.6557 11.315C11.6557 10.9428 11.6292 10.5781 11.1491 10.5667C10.6539 10.5553 10.635 10.9238 10.635 11.2922C10.6387 12.766 10.6425 14.2397 10.6312 15.7173C10.6274 16.0629 10.5971 16.4162 10.4989 16.7466C10.1548 17.9089 9.02067 18.6154 7.81847 18.4521C6.61249 18.2888 5.72785 17.3126 5.70894 16.0781C5.69004 14.4714 5.70138 12.8647 5.70138 11.258C5.70138 10.8972 5.62577 10.5705 5.18345 10.5667C4.72979 10.5629 4.6693 10.8972 4.6693 11.2542C4.66174 12.0861 4.66552 12.9141 4.66552 13.7421ZM32.3653 13.7763H32.3691C32.3691 12.8799 32.3729 11.9873 32.3691 11.0909C32.3691 10.7832 32.2217 10.5819 31.9003 10.5667C31.5563 10.5515 31.3937 10.7566 31.3559 11.0795C31.3446 11.1934 31.3522 11.3112 31.3522 11.4289C31.3522 12.9217 31.3559 14.4107 31.3484 15.9034C31.3484 16.1161 31.3408 16.3364 31.2954 16.5453C31.0157 17.7608 29.9004 18.5964 28.7209 18.4863C27.3977 18.3609 26.4413 17.3506 26.4224 16.0098C26.3997 14.4182 26.4148 12.8267 26.4186 11.239C26.4186 10.8896 26.3581 10.5895 25.9385 10.5743C25.4924 10.5629 25.4016 10.863 25.4054 11.239C25.4092 12.8647 25.3941 14.4866 25.413 16.1123C25.4319 17.9697 26.9857 19.5042 28.8419 19.5384C30.7019 19.5688 32.2935 18.0799 32.3616 16.2187C32.388 15.402 32.3653 14.5892 32.3653 13.7763ZM15.7991 14.027C15.6933 13.8599 15.6366 13.7801 15.5874 13.6966C15.0317 12.7774 14.4722 11.862 13.9202 10.9428C13.7388 10.6389 13.4892 10.4376 13.149 10.6199C12.7747 10.825 12.8352 11.1479 13.0318 11.4707C13.6783 12.5267 14.302 13.5978 14.9674 14.6424C15.1564 14.9424 15.1375 15.1475 14.9561 15.4362C14.4041 16.2984 13.8862 17.1834 13.3569 18.0571C13.2133 18.2964 13.0091 18.5281 12.9524 18.7864C12.9108 18.9801 12.994 19.3143 13.1339 19.4055C13.2737 19.4966 13.5724 19.3941 13.7728 19.3067C13.8862 19.2574 13.9429 19.0712 14.0185 18.9459C14.5969 17.9925 15.1753 17.0429 15.7916 16.0288C16.4418 17.0923 17.0467 18.0913 17.6554 19.0902C17.8406 19.3941 18.0523 19.6676 18.4417 19.4359C18.8462 19.1928 18.7177 18.8585 18.5211 18.5395C17.92 17.5519 17.3416 16.5491 16.7102 15.5843C16.4494 15.1855 16.438 14.8968 16.7065 14.4904C17.3605 13.499 17.9502 12.4659 18.5665 11.4479C18.7517 11.1441 18.7971 10.825 18.453 10.6275C18.1241 10.4414 17.8519 10.5933 17.6818 10.9238C17.6138 11.0567 17.5306 11.1783 17.455 11.3074C16.9144 12.1924 16.3776 13.0774 15.7991 14.027ZM35.7754 11.5847C35.7754 13.9207 35.7754 16.1959 35.7754 18.5129C35.3141 18.5129 34.8869 18.5205 34.4635 18.5129C34.1195 18.5053 33.8511 18.6382 33.8435 18.9991C33.836 19.3827 34.1119 19.5422 34.4711 19.5422C35.7073 19.5422 36.9435 19.5422 38.1835 19.5422C38.5389 19.5422 38.8187 19.4093 38.8111 19.0067C38.8035 18.5926 38.5087 18.5053 38.1571 18.5129C37.7337 18.5205 37.314 18.5129 36.8793 18.5129C36.8793 16.1617 36.8793 13.8865 36.8793 11.5847C37.3443 11.5847 37.7752 11.5885 38.2024 11.5847C38.5616 11.5809 38.83 11.4327 38.8149 11.0339C38.7998 10.6541 38.5313 10.5553 38.1949 10.5553C36.9587 10.5591 35.7224 10.5591 34.4824 10.5553C34.1195 10.5553 33.836 10.6769 33.8473 11.0719C33.8586 11.4555 34.1497 11.5885 34.5051 11.5847C34.9134 11.5809 35.3255 11.5847 35.7754 11.5847ZM24.0406 8.38647C23.9235 8.28011 23.7798 8.0674 23.587 8.00283C23.2959 7.90407 23.0804 8.0788 23.001 8.38266C22.7969 9.13094 22.5965 9.87921 22.3961 10.6313C21.4472 14.1865 20.5021 17.7456 19.5494 21.2971C19.4624 21.6237 19.4624 21.8896 19.7914 22.0567C20.1392 22.2353 20.4151 22.0263 20.5626 21.487C21.6816 17.2936 22.8006 13.1002 23.9197 8.91063C23.9537 8.77389 23.9802 8.64475 24.0406 8.38647Z"
                fill="#2ECC82"
              />
            </svg>
          }
          title="Amazing UI/UX Design"
          description="We get the most appealing User Interface design for your web app that provides an overwhelmingly refreshing and friendly experience for your customers."
        />
        <ServicesExpertiesEntry
          icon={
            <svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.4908 37.08C12.6387 37.08 6.78652 37.08 0.934375 37.08C0.196709 37.08 0 36.8833 0 36.1456C0 24.3922 0 12.6633 0 0.909788C0 0.196711 0.196708 0 0.909785 0C12.6633 0 24.3921 0 36.1456 0C36.8587 0 37.0554 0.196711 37.0554 0.909788C37.0554 12.6633 37.0554 24.3922 37.0554 36.1456C37.0554 36.8833 36.8587 37.08 36.121 37.08C30.2689 37.08 24.3921 37.08 18.4908 37.08ZM35.6784 35.6784C35.6784 24.22 35.6784 12.8108 35.6784 1.40157C24.22 1.40157 12.8108 1.40157 1.40156 1.40157C1.40156 6.88488 1.40156 12.3436 1.40156 17.8515C1.59828 17.8515 1.77039 17.8515 1.91793 17.8515C7.37665 17.8515 12.8108 17.8515 18.2695 17.8515C19.0318 17.8515 19.2285 18.0482 19.2285 18.8105C19.2285 24.2692 19.2285 29.7033 19.2285 35.1621C19.2285 35.3342 19.2285 35.5063 19.2285 35.6784C24.7364 35.6784 30.1951 35.6784 35.6784 35.6784Z"
                fill="#2ECC82"
              />
              <path
                d="M24.5636 9.71173C24.6619 9.5642 24.7357 9.41666 24.8586 9.29372C26.4569 7.67085 28.0798 6.07258 29.6781 4.4743C30.1698 3.98252 30.4895 3.98252 30.9813 4.4743C31.5222 5.01526 32.0878 5.55621 32.6287 6.12176C33.0959 6.58894 33.0959 6.9086 32.6041 7.40038C31.0059 8.99865 29.383 10.6215 27.7847 12.2198C27.6618 12.3181 27.5388 12.4165 27.3913 12.5394C28.1781 13.3263 28.9158 14.064 29.6535 14.8016C29.924 15.0721 30.1452 15.3426 29.9977 15.736C29.8502 16.1294 29.4813 16.1786 29.1125 16.2032C26.5553 16.3507 23.9734 16.4983 21.4162 16.6458C20.6048 16.695 20.4081 16.4737 20.4572 15.6868C20.5802 13.4246 20.7277 11.1379 20.8507 8.87571C20.8752 8.50688 20.8753 8.16263 20.8998 7.7938C20.9244 7.47414 21.0228 7.20367 21.3424 7.08072C21.6867 6.95778 21.9572 7.08072 22.1785 7.32661C22.9407 8.08886 23.7276 8.85112 24.5636 9.71173Z"
                fill="#2ECC82"
              />
            </svg>
          }
          title="Build a Minimum Viable Product"
          description="We always consider the bigger picture while scoping the minimum requirements for your product and build prototypes blazingly fast to reduce your time to market."
        />
        <ServicesExpertiesEntry
          icon={
            <svg
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.1322 36.8694C15.5132 36.7662 14.8736 36.6837 14.2547 36.5806C11.4899 36.106 8.99343 34.9919 6.76515 33.2588C3.34019 30.5972 1.09128 27.131 0.327886 22.8601C-0.827521 16.3403 1.07065 10.7902 6.02239 6.3543C8.53952 4.10538 11.5106 2.78492 14.853 2.31038C18.9794 1.73267 22.8583 2.5167 26.4277 4.70372C26.5308 4.76561 26.634 4.9513 26.634 5.05447C26.5927 6.25114 26.5102 7.42717 26.4483 8.60321C26.4277 8.76827 26.3452 8.95396 26.242 9.05712C25.8706 9.46977 25.458 9.86178 25.0453 10.2951C24.9215 10.2125 24.8184 10.13 24.7152 10.0681C22.7964 8.68574 20.7126 7.67476 18.3605 7.38591C15.472 7.03516 12.7898 7.67476 10.3964 9.30471C7.23969 11.4092 5.42405 14.3802 4.97014 18.1147C4.18612 24.5107 8.58079 30.4734 14.9355 31.732C21.6616 33.0731 28.3052 28.5959 29.5638 21.8698C30.2859 18.1353 29.3368 14.8548 26.8197 12.0075C26.7784 11.9456 26.7165 11.9044 26.6753 11.8425C26.6546 11.8218 26.6546 11.8012 26.634 11.7393C27.0467 11.3267 27.4593 10.8934 27.8926 10.4807C27.9545 10.4189 28.0989 10.3982 28.2021 10.3982C29.3987 10.3363 30.5954 10.2538 31.7921 10.2125C31.9159 10.2125 32.0809 10.3157 32.1428 10.4189C33.3601 12.3789 34.1441 14.504 34.4949 16.7736C34.9901 19.9303 34.7012 23.0458 33.4427 25.9756C31.0699 31.5875 26.8816 35.095 20.9395 36.4774C20.238 36.6424 19.5159 36.6837 18.8144 36.7869C18.7319 36.8075 18.6493 36.8281 18.5668 36.8694C17.7621 36.8694 16.9369 36.8694 16.1322 36.8694Z"
                fill="#2ECC82"
              />
              <path
                d="M36.8676 4.14708C35.671 5.34375 34.4743 6.54042 33.2776 7.7371C33.1538 7.86089 32.9475 7.96405 32.7618 7.98468C31.4001 8.06721 30.059 8.14974 28.6766 8.23227C28.656 8.12911 28.6354 8.04658 28.656 7.96405C28.7179 6.64359 28.8004 5.32312 28.883 4.02329C28.883 3.92013 28.9242 3.7757 29.0068 3.71381C30.2241 2.47587 31.462 1.25857 32.6999 0C32.8031 0.103161 32.9063 0.18569 32.9888 0.268219C34.1855 1.46489 35.3821 2.66156 36.5788 3.85823C36.6613 3.94076 36.7851 4.02329 36.8676 4.10582C36.8676 4.10582 36.8676 4.12645 36.8676 4.14708Z"
                fill="#2ECC82"
              />
              <path
                d="M23.4358 11.8029C22.3629 12.8758 21.3313 13.9074 20.2997 14.939C17.2667 13.1234 14.2338 14.5057 12.9133 16.4245C11.4278 18.5909 11.6754 21.4588 13.5323 23.3157C15.3685 25.1726 18.2777 25.4202 20.4234 23.9347C22.3422 22.6142 23.7246 19.5813 21.8883 16.5483C22.9612 15.4754 24.0341 14.4232 25.107 13.3297C26.1592 14.4438 26.9639 15.7437 27.3353 17.2704C28.1399 20.551 27.3765 23.522 25.2514 26.0804C23.0231 28.7626 20.0933 29.9799 16.6065 29.7736C11.923 29.5054 7.94093 25.8535 7.17754 21.2112C6.35224 16.0325 9.36455 11.2458 14.3369 9.8222C17.1429 9.01754 19.7632 9.59525 22.2391 11.0395C22.6517 11.2871 23.0231 11.5553 23.4358 11.8029Z"
                fill="#2ECC82"
              />
              <path
                d="M16.6066 18.6917C17.1431 19.2281 17.6382 19.7233 18.1334 20.2185C18.8143 19.5376 19.5158 18.8155 20.2173 18.114C20.8362 19.0424 20.7124 20.8787 19.4745 21.9516C18.2572 23.0038 16.4003 23.0244 15.2036 21.9516C13.9657 20.8168 13.7387 19.0012 14.6878 17.6394C15.5956 16.3396 17.3907 15.865 18.7524 16.6078C18.381 16.9586 18.0303 17.3093 17.6589 17.6601C17.3081 18.0108 16.9574 18.3409 16.6066 18.6917Z"
                fill="#2ECC82"
              />
            </svg>
          }
          title="Rescue Missions"
          description="Left stranded with a bad product that doesn’t work? We can pick up the pieces and get you up and running in no time."
        />
      </ServicesExperties>
      <ServicesExperiace />
      <ServicesMVP />
      <ServicesHowWeDoIt />
      <WebDevelopmentWhy />
    </>
  );
}