import React, { useEffect, useState } from "react";
import { Autoplay, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export function BlockchainWhy() {
  const [slidesPerView, setSlidesPerView] = useState(3);
  function changeSlidesPerView() {
    if (window.innerWidth < 768) {
      setSlidesPerView(1.2);
    } else if (window.innerWidth < 1000) {
      setSlidesPerView(2.5);
    } else if (window.innerWidth < 1300) {
      setSlidesPerView(4);
    } else {
      setSlidesPerView(5.5);
    }
  }
  useEffect(() => {
    changeSlidesPerView();
    window.addEventListener("resize", changeSlidesPerView);
  }, []);
  const whyBlockchain = [
    {
      image: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.9274 11.9629H20.9365V26.9174H32.9001V23.9265H23.9274V11.9629Z"
            fill="#2ECC82"
          />
          <path
            d="M47.8544 20.9363V8.9727L44.5644 12.2627C40.6763 4.78544 32.8999 0 23.9272 0C10.7672 0 0 10.7672 0 23.9272C0 37.0872 10.7672 47.8544 23.9272 47.8544C31.1054 47.8544 37.6854 44.5644 41.8726 39.4799L37.3863 35.5917C34.0963 39.4799 29.3108 41.8726 23.9272 41.8726C14.0572 41.8726 5.9818 33.7972 5.9818 23.9272C5.9818 14.0572 14.0572 5.9818 23.9272 5.9818C31.1054 5.9818 37.3863 10.4682 40.3772 16.45L35.8908 20.9363H47.8544Z"
            fill="#2ECC82"
          />
        </svg>
      ),
      heading: "Save Time and Operational Costs",
      info: "Blockchain tech allows for allows for verification without having to be dependent on redundant processes and third parties.",
    },
    {
      image: (
        <svg
          width="79"
          height="58"
          viewBox="0 0 79 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M79.0002 48.359C72.4091 48.359 65.8364 48.359 59.1714 48.359C58.9683 40.9933 55.8666 35.3052 50.0693 31.0824C52.5802 25.722 56.6605 22.6176 62.31 21.7499C56.1251 20.5352 52.8203 15.0591 53.4295 9.69871C54.0942 3.79843 58.6729 -0.154372 64.4148 0.019166C69.3258 0.15414 73.7753 4.66612 74.1815 9.89153C74.6246 15.6954 70.9136 20.6123 65.0979 21.7114C65.5041 21.8271 65.6887 21.9042 65.8918 21.9235C72.5014 22.849 77.8925 28.4022 78.834 35.2473C78.8525 35.4208 78.9448 35.5944 78.9817 35.7679C79.0002 39.9907 79.0002 44.1749 79.0002 48.359Z"
            fill="#2ECC82"
          />
          <path
            d="M54.5199 58.0002C44.4763 58.0002 34.4881 58.0002 24.5367 58.0002C24.4998 57.923 24.4444 57.8845 24.4444 57.8459C24.5183 53.816 24.2598 49.7475 24.7583 45.7947C25.4783 39.9715 28.8754 35.9802 34.0634 33.7627C35.3927 33.1843 36.8698 32.9529 38.1252 32.6058C35.4112 32.1816 32.9741 30.8126 31.1833 28.3252C29.3924 25.8379 28.7278 23.0227 29.2262 19.9761C30.094 14.6543 34.7281 10.663 39.6761 10.8943C44.9564 11.145 49.2396 15.1942 49.8489 20.3232C50.4951 25.7029 47.2273 31.6224 40.5992 32.7022C44.6056 33.1072 47.9473 34.7847 50.6428 37.8505C53.2461 40.8392 54.5015 44.3871 54.5753 48.3977C54.6307 51.4829 54.5938 54.568 54.5938 57.6724C54.5753 57.7302 54.5384 57.8459 54.5199 58.0002Z"
            fill="#2ECC82"
          />
          <path
            d="M16.4686 21.7693C22.3213 22.637 26.383 25.7221 28.9309 31.0825C23.189 35.2667 20.0504 40.9163 19.8288 48.3013C13.2377 48.3013 6.66502 48.3013 0.0369612 48.3013C0.0184986 48.0506 0 47.7807 0 47.53C0 44.2328 0 40.9163 0 37.6191C0.0184626 29.6556 5.55726 23.0419 13.1269 21.9236C13.3115 21.9043 13.4962 21.8272 13.81 21.7308C7.44043 20.4774 4.26484 14.9628 4.83718 9.69882C5.46491 4.04921 9.87749 0 15.1947 0C20.5119 0 24.9429 4.06849 25.5522 9.69882C26.143 14.9821 22.9305 20.4967 16.4686 21.7693Z"
            fill="#2ECC82"
          />
        </svg>
      ),
      heading: "Eliminate the Middle Man",
      info: "Blockchain helps you take control of your transactions and saves you the hassle of employing a middle man.",
    },
    {
      image: (
        <svg
          width="55"
          height="55"
          viewBox="0 0 55 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.9197 0C19.9315 0.326389 20.9433 0.663658 21.9551 0.968288C26.9271 2.46968 31.8882 3.97107 36.8711 5.43982C37.2628 5.5595 37.3825 5.72269 37.3607 6.10348C37.3281 6.64746 37.3716 7.18056 37.3281 7.71367C37.3172 7.86598 37.1431 8.09445 37.0017 8.14885C35.8375 8.52964 34.6517 8.86691 33.3787 9.25858C33.5528 8.12709 32.813 7.87686 31.9862 7.64839C27.7431 6.46251 23.5109 5.23311 19.2678 4.04723C18.8871 3.93843 18.4084 3.94931 18.0276 4.07987C13.6431 5.62478 9.25858 7.20232 4.87408 8.76899C4.1125 9.04098 3.97107 9.25858 3.96019 10.0745C3.96019 12.566 3.94931 15.0465 3.97107 17.538C3.97107 17.9405 3.87315 18.1364 3.45973 18.256C2.32824 18.5607 1.20764 18.9197 0.0108796 19.2678C0.0108796 19.0394 0.0108796 18.8653 0.0108796 18.6912C0.0108796 14.5026 0.0217593 10.3139 0 6.13612C0.0108796 5.71181 0.119676 5.54862 0.522223 5.42894C6.41899 3.67732 12.3049 1.89306 18.2016 0.119676C18.2996 0.0979168 18.3975 0.0435186 18.4845 0C18.6368 0 18.7783 0 18.9197 0Z"
            fill="#2ECC82"
          />
          <path
            d="M55.0007 51.0037C53.706 51.0037 52.4004 51.0037 51.084 51.0037C51.084 45.7489 51.084 40.5593 51.084 35.3262C52.4113 35.3262 53.706 35.3262 55.0007 35.3262C55.0007 40.5484 55.0007 45.7815 55.0007 51.0037Z"
            fill="#2ECC82"
          />
          <path
            d="M54.9985 23.7279C54.3566 23.6952 53.7147 23.6517 53.0293 23.6082C53.0293 23.0098 53.0293 22.4332 53.0293 21.7369C53.6712 21.726 54.3349 21.7042 54.9985 21.6934C54.9985 22.3679 54.9985 23.0533 54.9985 23.7279Z"
            fill="#2ECC82"
          />
          <path
            d="M35.5361 54.9522C32.925 54.9522 30.3139 54.9631 27.7028 54.9522C26.3102 54.9413 25.4398 54.0056 25.5704 52.711C25.6574 51.8515 26.2667 51.2422 27.2567 51.0246C27.8986 50.8832 28.2468 50.5242 28.225 50.0019C28.2141 49.4797 27.8116 49.0989 27.235 49.0663C26.8651 49.0445 26.4734 49.0663 26.1144 48.9901C25.157 48.7834 24.5151 47.9566 24.5586 47.0209C24.6021 46.0526 25.3093 45.2693 26.2776 45.117C26.3646 45.1061 26.4516 45.1061 26.5496 45.0952C27.1262 45.0191 27.507 44.6165 27.4961 44.1052C27.4852 43.5721 27.0609 43.1804 26.4516 43.1586C26.1253 43.1478 25.8097 43.1586 25.4834 43.1478C24.4607 43.1042 23.6773 42.3536 23.5685 41.32C23.4706 40.3952 24.1343 39.5031 25.1026 39.2746C25.2766 39.2311 25.4507 39.2202 25.6357 39.1876C26.147 39.1005 26.5169 38.7306 26.4952 38.2519C26.4734 37.7515 26.2232 37.3924 25.7118 37.3163C25.3419 37.2619 24.9611 37.2728 24.5912 37.2619C23.5033 37.2401 22.6655 36.4785 22.5894 35.4232C22.5132 34.4223 23.253 33.5302 24.3084 33.367C24.5586 33.3234 24.8088 33.3234 25.059 33.3234C29.0301 33.3234 33.0012 33.3234 36.9723 33.3234C38.169 33.3234 38.5389 32.7577 38.082 31.6371C37.6359 30.5056 37.1354 29.3959 36.7438 28.2535C36.5153 27.5899 36.4065 26.8718 36.3304 26.1755C36.2651 25.4792 36.2977 24.7829 36.3195 24.0866C36.3521 22.6179 37.4292 21.5626 38.8327 21.5843C40.2144 21.6061 41.2262 22.6723 41.2371 24.1302C41.2371 24.1628 41.2371 24.2063 41.2371 24.2389C40.7584 27.3396 42.151 29.9834 43.2933 32.6816C43.4239 32.9971 43.8591 33.2691 44.2181 33.3996C45.6977 33.9327 47.1882 34.4223 48.6788 34.901C48.9834 34.9989 49.0922 35.1295 49.0922 35.4559C49.0813 40.6781 49.0922 45.9003 49.0704 51.1225C49.0704 51.3184 48.9072 51.5904 48.744 51.71C47.2426 52.7436 45.7304 53.7554 44.1963 54.7455C43.9787 54.8869 43.6741 54.9631 43.4021 54.9739C40.8019 54.9631 38.169 54.9522 35.5361 54.9522Z"
            fill="#2ECC82"
          />
          <path
            d="M7.22461 26.9925C15.3626 24.5554 23.3482 22.151 31.508 19.7031C31.2904 21.1936 31.1598 22.5753 30.8878 23.9244C30.3765 26.4485 29.4191 28.7985 28.1135 31.018C27.9503 31.2899 27.7763 31.377 27.4825 31.377C26.3619 31.3879 25.2304 31.3661 24.1098 31.4531C22.6302 31.5728 21.5857 32.4105 20.9982 33.7487C20.4216 35.0652 20.5739 36.3599 21.4117 37.5566C21.4987 37.6872 21.6075 37.8177 21.7598 38.0136C20.7806 38.6555 19.8232 39.2974 18.8549 39.9066C18.7679 39.961 18.5503 39.9066 18.4306 39.8413C14.601 37.5784 11.348 34.7062 9.12855 30.7786C8.43225 29.5818 7.86651 28.3089 7.22461 26.9925Z"
            fill="#2ECC82"
          />
          <path
            d="M21.7043 40.4066C21.465 42.2344 22.0851 43.5726 23.5212 44.5626C22.8902 45.3786 22.5856 46.2925 22.6182 47.3043C22.6182 47.424 22.4768 47.5872 22.368 47.6633C21.2365 48.3705 20.0941 49.0777 18.9409 49.7522C18.8103 49.8284 18.5601 49.8284 18.4187 49.7631C13.142 46.9779 8.85545 43.083 5.59156 38.0892C3.79642 35.3367 2.42558 32.3774 1.48993 29.2332C1.44641 29.1027 1.41377 28.9612 1.35938 28.7654C2.71933 28.352 4.05753 27.9494 5.41748 27.5469C5.82003 28.4499 6.16818 29.3203 6.5816 30.158C8.69225 34.5207 11.8474 37.9478 15.9055 40.5698C16.5365 40.9724 17.1893 41.3531 17.7985 41.7883C18.4295 42.2453 18.9844 42.2235 19.6045 41.7774C20.2356 41.2987 20.9319 40.8962 21.7043 40.4066Z"
            fill="#2ECC82"
          />
          <path
            d="M5.94475 17.4511C5.93387 17.2988 5.92299 17.1791 5.92299 17.0595C5.92299 15.0032 5.92299 12.947 5.91211 10.8907C5.91211 10.5752 5.99915 10.4229 6.30378 10.3141C10.3184 8.88886 14.333 7.45275 18.3584 6.02751C18.576 5.95136 18.848 5.94048 19.0765 6.00575C23.0584 7.12636 27.0404 8.26872 31.0114 9.41108C31.1746 9.4546 31.3052 9.60692 31.4575 9.70483C31.3052 9.79187 31.1746 9.91155 31.0223 9.96594C22.8082 12.4356 14.5941 14.9053 6.36905 17.3641C6.2385 17.4076 6.09706 17.4185 5.94475 17.4511Z"
            fill="#2ECC82"
          />
          <path
            d="M31.4524 11.8906C31.4524 12.4672 31.4959 12.9677 31.4306 13.4573C31.4089 13.6205 31.1586 13.8381 30.9628 13.8925C26.9047 15.1328 22.8357 16.3513 18.7667 17.5698C14.6107 18.8101 10.4656 20.0612 6.30953 21.3015C6.24425 21.3233 6.17898 21.3342 6.1137 21.3559C6.08106 21.3124 6.04842 21.2906 6.04842 21.2689C6.01578 20.714 5.76555 20.0286 6.0049 19.6478C6.23337 19.2888 6.96231 19.2126 7.48453 19.0603C15.2526 16.7212 23.0315 14.3929 30.7996 12.0538C30.9846 11.9994 31.1804 11.9559 31.4524 11.8906Z"
            fill="#2ECC82"
          />
          <path
            d="M31.4534 15.7871C31.4534 16.3964 31.486 16.9404 31.4316 17.4626C31.4208 17.5931 31.1705 17.7563 30.9965 17.8107C28.4071 18.6049 25.8069 19.3883 23.2175 20.1607C17.9082 21.7492 12.599 23.3376 7.27884 24.926C7.10476 24.9804 6.94157 25.0239 6.72397 25.0892C6.58254 24.5126 6.45198 23.9686 6.31055 23.3376C14.6879 20.8244 23.0326 18.3221 31.4534 15.7871Z"
            fill="#2ECC82"
          />
          <path
            d="M35.8714 31.3557C33.9348 31.3557 32.0962 31.3557 30.2031 31.3557C30.2902 31.1599 30.3554 31.0076 30.4316 30.8553C31.8786 28.1462 32.7598 25.2631 33.1733 22.2277C33.2929 21.3573 33.3147 20.487 33.3473 19.6057C33.3582 19.2358 33.5105 19.0944 33.8587 18.9965C34.9902 18.6809 36.1108 18.3328 37.3184 17.9629C37.3184 18.5939 37.3293 19.1705 37.3075 19.7472C37.3075 19.8451 37.1335 19.9539 37.0138 20.0083C35.4689 20.7481 34.555 21.9775 34.4353 23.6747C34.3047 25.6874 34.2177 27.711 35.1751 29.6041C35.4471 30.1481 35.6212 30.7247 35.8714 31.3557Z"
            fill="#2ECC82"
          />
          <path
            d="M48.0884 22.5211C47.4465 22.5211 46.8372 22.5211 46.1627 22.5211C46.0104 19.6489 44.5634 17.6579 41.8652 16.57C42.1046 15.9607 42.3331 15.395 42.5615 14.8184C45.4555 15.5799 48.2081 18.8547 48.0884 22.5211Z"
            fill="#2ECC82"
          />
          <path
            d="M37.3415 14.0352C37.3415 14.6444 37.3524 15.1775 37.3307 15.6997C37.3307 15.7977 37.2001 15.95 37.0913 15.9826C35.8837 16.3525 34.676 16.7115 33.4031 17.0923C33.4031 16.494 33.3922 15.95 33.414 15.3951C33.414 15.3081 33.4901 15.1775 33.5663 15.1558C34.7957 14.7859 36.036 14.4159 37.3415 14.0352Z"
            fill="#2ECC82"
          />
          <path
            d="M33.4795 13.1526C33.436 13.0547 33.4143 13.0438 33.4143 13.0329C33.4143 12.4781 33.2184 11.7927 33.4795 11.4119C33.7298 11.0528 34.4369 10.9876 34.9483 10.8244C35.6446 10.5959 36.3409 10.4001 37.0372 10.1933C37.1024 10.1716 37.1677 10.1607 37.3418 10.1172C37.3418 10.7047 37.3527 11.2595 37.3309 11.8253C37.3309 11.9123 37.2004 12.032 37.1024 12.0646C35.8948 12.4237 34.6872 12.7827 33.4795 13.1526Z"
            fill="#2ECC82"
          />
          <path
            d="M4.42923 23.9023C4.57066 24.5225 4.70122 25.0556 4.85354 25.6648C3.54798 26.0565 2.2533 26.4482 0.893345 26.8616C0.773669 26.2632 0.653993 25.6866 0.523438 25.0773C1.82899 24.6857 3.10191 24.3049 4.42923 23.9023Z"
            fill="#2ECC82"
          />
          <path
            d="M3.99536 20.1055C4.04976 20.7582 4.09328 21.3457 4.1368 21.955C2.84212 22.3467 1.59096 22.7166 0.263643 23.1191C0.209245 22.4772 0.165726 21.8897 0.111328 21.2696C1.40601 20.8779 2.65717 20.508 3.99536 20.1055Z"
            fill="#2ECC82"
          />
          <path
            d="M50.7227 14.8514C51.2666 14.5032 51.7889 14.1659 52.3872 13.7852C52.7354 14.3944 53.0618 14.971 53.4208 15.6129C52.8115 15.9067 52.2349 16.1787 51.6365 16.4724C51.3319 15.9284 51.049 15.4171 50.7227 14.8514Z"
            fill="#2ECC82"
          />
          <path
            d="M42.474 6.59375C43.1811 6.82222 43.8013 7.02894 44.4758 7.24653C44.2256 7.87755 43.9971 8.46505 43.7469 9.08519C43.1594 8.90023 42.6045 8.71528 41.9844 8.51945C42.1476 7.88843 42.2999 7.27917 42.474 6.59375Z"
            fill="#2ECC82"
          />
          <path
            d="M48.1312 9.25928C47.7178 9.81414 47.3587 10.3255 46.9671 10.8586C46.4557 10.5322 45.9444 10.2167 45.4004 9.86853C45.7159 9.29191 46.0205 8.73705 46.3469 8.13867C46.9453 8.50858 47.511 8.86761 48.1312 9.25928Z"
            fill="#2ECC82"
          />
          <path
            d="M49.644 13.3703C49.2088 12.9025 48.8172 12.489 48.3711 12.0103C48.8063 11.5425 49.2306 11.0856 49.7202 10.5742C50.1989 11.0856 50.6667 11.5643 51.1672 12.0974C50.6558 12.5326 50.1662 12.9351 49.644 13.3703Z"
            fill="#2ECC82"
          />
          <path
            d="M54.7169 19.5724C54.0424 19.703 53.4331 19.8227 52.7912 19.9532C52.628 19.3657 52.4757 18.7891 52.3125 18.1581C52.9435 17.9514 53.5419 17.7555 54.1947 17.5488C54.3688 18.2451 54.5319 18.8979 54.7169 19.5724Z"
            fill="#2ECC82"
          />
          <path
            d="M52.3672 27.2326C52.5195 26.6125 52.6501 26.0576 52.8024 25.4375C53.4225 25.5463 54.0427 25.666 54.7498 25.7857C54.5758 26.4819 54.4234 27.1347 54.2494 27.8201C53.5966 27.6243 53.0091 27.4394 52.3672 27.2326Z"
            fill="#2ECC82"
          />
          <path
            d="M52.9193 30.8771C52.3101 30.5399 51.7661 30.2352 51.1895 29.9197C51.3635 29.5825 51.505 29.2887 51.6899 28.9297C52.2992 29.2126 52.8649 29.4737 53.4851 29.7565C53.2892 30.1373 53.1152 30.4746 52.9193 30.8771Z"
            fill="#2ECC82"
          />
        </svg>
      ),
      heading: "Make your Data Secure",
      info: "The tech removes the risk of duplicate entry or fraud as multiple consensus protocols need to be fulfilled to validate an entry.",
    },
    {
      image: (
        <svg
          width="61"
          height="61"
          viewBox="0 0 61 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M56.8212 56.8209H41.6689V7.57617H56.8212V56.8209Z"
            fill="#2ECC82"
          />
          <path
            d="M37.8807 56.821H22.7285V22.7285H37.8807V56.821Z"
            fill="#2ECC82"
          />
          <path
            d="M18.9403 56.8201H3.78809V34.0918H18.9403V56.8201Z"
            fill="#2ECC82"
          />
        </svg>
      ),
      heading: "Ensure high Level of Transparency",
      info: "Transactions are recorded across every participating node in the Blockchain, which helps ensure transparency to each participant.",
    },
    {
      image: (
        <svg
          width="49"
          height="59"
          viewBox="0 0 49 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 7.30816C0 3.27198 3.27198 0 7.30816 0H40.9257C44.9618 0 48.2339 3.27198 48.2339 7.30816V48.9647C48.2339 50.1755 47.2522 51.1571 46.0414 51.1571H4.3849C4.3849 52.7716 5.6937 54.0804 7.30816 54.0804H46.0414C47.2522 54.0804 48.2339 55.062 48.2339 56.2728C48.2339 57.4837 47.2522 58.4653 46.0414 58.4653H7.30816C3.27198 58.4653 0 55.1933 0 51.1571V7.30816ZM24.1169 17.5396C25.7314 17.5396 27.0402 16.2308 27.0402 14.6163C27.0402 13.0019 25.7314 11.6931 24.1169 11.6931C22.5024 11.6931 21.1937 13.0019 21.1937 14.6163C21.1937 16.2308 22.5024 17.5396 24.1169 17.5396ZM21.9245 22.6553V37.2716C21.9245 38.4824 22.9061 39.4641 24.1169 39.4641C25.3277 39.4641 26.3094 38.4824 26.3094 37.2716V22.6553C26.3094 21.4445 25.3277 20.4628 24.1169 20.4628C22.9061 20.4628 21.9245 21.4445 21.9245 22.6553Z"
            fill="#2ECC82"
          />
        </svg>
      ),
      heading: "Take control of your Information",
      info: "Consent of all ledger participants is needed to add records to the chain, which means every stakeholder gets a say in major decisions.",
    },
    {
      image: (
        <svg
          width="55"
          height="55"
          viewBox="0 0 55 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.9197 0C19.9315 0.326389 20.9433 0.663658 21.9551 0.968288C26.9271 2.46968 31.8882 3.97107 36.8711 5.43982C37.2628 5.5595 37.3825 5.72269 37.3607 6.10348C37.3281 6.64746 37.3716 7.18056 37.3281 7.71367C37.3172 7.86598 37.1431 8.09445 37.0017 8.14885C35.8375 8.52964 34.6517 8.86691 33.3787 9.25858C33.5528 8.12709 32.813 7.87686 31.9862 7.64839C27.7431 6.46251 23.5109 5.23311 19.2678 4.04723C18.8871 3.93843 18.4084 3.94931 18.0276 4.07987C13.6431 5.62478 9.25858 7.20232 4.87408 8.76899C4.1125 9.04098 3.97107 9.25858 3.96019 10.0745C3.96019 12.566 3.94931 15.0465 3.97107 17.538C3.97107 17.9405 3.87315 18.1364 3.45973 18.256C2.32824 18.5607 1.20764 18.9197 0.0108796 19.2678C0.0108796 19.0394 0.0108796 18.8653 0.0108796 18.6912C0.0108796 14.5026 0.0217593 10.3139 0 6.13612C0.0108796 5.71181 0.119676 5.54862 0.522223 5.42894C6.41899 3.67732 12.3049 1.89306 18.2016 0.119676C18.2996 0.0979168 18.3975 0.0435186 18.4845 0C18.6368 0 18.7783 0 18.9197 0Z"
            fill="#2ECC82"
          />
          <path
            d="M55.0007 51.0037C53.706 51.0037 52.4004 51.0037 51.084 51.0037C51.084 45.7489 51.084 40.5593 51.084 35.3262C52.4113 35.3262 53.706 35.3262 55.0007 35.3262C55.0007 40.5484 55.0007 45.7815 55.0007 51.0037Z"
            fill="#2ECC82"
          />
          <path
            d="M54.9985 23.7279C54.3566 23.6952 53.7147 23.6517 53.0293 23.6082C53.0293 23.0098 53.0293 22.4332 53.0293 21.7369C53.6712 21.726 54.3349 21.7042 54.9985 21.6934C54.9985 22.3679 54.9985 23.0533 54.9985 23.7279Z"
            fill="#2ECC82"
          />
          <path
            d="M35.5361 54.9522C32.925 54.9522 30.3139 54.9631 27.7028 54.9522C26.3102 54.9413 25.4398 54.0056 25.5704 52.711C25.6574 51.8515 26.2667 51.2422 27.2567 51.0246C27.8986 50.8832 28.2468 50.5242 28.225 50.0019C28.2141 49.4797 27.8116 49.0989 27.235 49.0663C26.8651 49.0445 26.4734 49.0663 26.1144 48.9901C25.157 48.7834 24.5151 47.9566 24.5586 47.0209C24.6021 46.0526 25.3093 45.2693 26.2776 45.117C26.3646 45.1061 26.4516 45.1061 26.5496 45.0952C27.1262 45.0191 27.507 44.6165 27.4961 44.1052C27.4852 43.5721 27.0609 43.1804 26.4516 43.1586C26.1253 43.1478 25.8097 43.1586 25.4834 43.1478C24.4607 43.1042 23.6773 42.3536 23.5685 41.32C23.4706 40.3952 24.1343 39.5031 25.1026 39.2746C25.2766 39.2311 25.4507 39.2202 25.6357 39.1876C26.147 39.1005 26.5169 38.7306 26.4952 38.2519C26.4734 37.7515 26.2232 37.3924 25.7118 37.3163C25.3419 37.2619 24.9611 37.2728 24.5912 37.2619C23.5033 37.2401 22.6655 36.4785 22.5894 35.4232C22.5132 34.4223 23.253 33.5302 24.3084 33.367C24.5586 33.3234 24.8088 33.3234 25.059 33.3234C29.0301 33.3234 33.0012 33.3234 36.9723 33.3234C38.169 33.3234 38.5389 32.7577 38.082 31.6371C37.6359 30.5056 37.1354 29.3959 36.7438 28.2535C36.5153 27.5899 36.4065 26.8718 36.3304 26.1755C36.2651 25.4792 36.2977 24.7829 36.3195 24.0866C36.3521 22.6179 37.4292 21.5626 38.8327 21.5843C40.2144 21.6061 41.2262 22.6723 41.2371 24.1302C41.2371 24.1628 41.2371 24.2063 41.2371 24.2389C40.7584 27.3396 42.151 29.9834 43.2933 32.6816C43.4239 32.9971 43.8591 33.2691 44.2181 33.3996C45.6977 33.9327 47.1882 34.4223 48.6788 34.901C48.9834 34.9989 49.0922 35.1295 49.0922 35.4559C49.0813 40.6781 49.0922 45.9003 49.0704 51.1225C49.0704 51.3184 48.9072 51.5904 48.744 51.71C47.2426 52.7436 45.7304 53.7554 44.1963 54.7455C43.9787 54.8869 43.6741 54.9631 43.4021 54.9739C40.8019 54.9631 38.169 54.9522 35.5361 54.9522Z"
            fill="#2ECC82"
          />
          <path
            d="M7.22461 26.9925C15.3626 24.5554 23.3482 22.151 31.508 19.7031C31.2904 21.1936 31.1598 22.5753 30.8878 23.9244C30.3765 26.4485 29.4191 28.7985 28.1135 31.018C27.9503 31.2899 27.7763 31.377 27.4825 31.377C26.3619 31.3879 25.2304 31.3661 24.1098 31.4531C22.6302 31.5728 21.5857 32.4105 20.9982 33.7487C20.4216 35.0652 20.5739 36.3599 21.4117 37.5566C21.4987 37.6872 21.6075 37.8177 21.7598 38.0136C20.7806 38.6555 19.8232 39.2974 18.8549 39.9066C18.7679 39.961 18.5503 39.9066 18.4306 39.8413C14.601 37.5784 11.348 34.7062 9.12855 30.7786C8.43225 29.5818 7.86651 28.3089 7.22461 26.9925Z"
            fill="#2ECC82"
          />
          <path
            d="M21.7043 40.4066C21.465 42.2344 22.0851 43.5726 23.5212 44.5626C22.8902 45.3786 22.5856 46.2925 22.6182 47.3043C22.6182 47.424 22.4768 47.5872 22.368 47.6633C21.2365 48.3705 20.0941 49.0777 18.9409 49.7522C18.8103 49.8284 18.5601 49.8284 18.4187 49.7631C13.142 46.9779 8.85545 43.083 5.59156 38.0892C3.79642 35.3367 2.42558 32.3774 1.48993 29.2332C1.44641 29.1027 1.41377 28.9612 1.35938 28.7654C2.71933 28.352 4.05753 27.9494 5.41748 27.5469C5.82003 28.4499 6.16818 29.3203 6.5816 30.158C8.69225 34.5207 11.8474 37.9478 15.9055 40.5698C16.5365 40.9724 17.1893 41.3531 17.7985 41.7883C18.4295 42.2453 18.9844 42.2235 19.6045 41.7774C20.2356 41.2987 20.9319 40.8962 21.7043 40.4066Z"
            fill="#2ECC82"
          />
          <path
            d="M5.94475 17.4511C5.93387 17.2988 5.92299 17.1791 5.92299 17.0595C5.92299 15.0032 5.92299 12.947 5.91211 10.8907C5.91211 10.5752 5.99915 10.4229 6.30378 10.3141C10.3184 8.88886 14.333 7.45275 18.3584 6.02751C18.576 5.95136 18.848 5.94048 19.0765 6.00575C23.0584 7.12636 27.0404 8.26872 31.0114 9.41108C31.1746 9.4546 31.3052 9.60692 31.4575 9.70483C31.3052 9.79187 31.1746 9.91155 31.0223 9.96594C22.8082 12.4356 14.5941 14.9053 6.36905 17.3641C6.2385 17.4076 6.09706 17.4185 5.94475 17.4511Z"
            fill="#2ECC82"
          />
          <path
            d="M31.4524 11.8906C31.4524 12.4672 31.4959 12.9677 31.4306 13.4573C31.4089 13.6205 31.1586 13.8381 30.9628 13.8925C26.9047 15.1328 22.8357 16.3513 18.7667 17.5698C14.6107 18.8101 10.4656 20.0612 6.30953 21.3015C6.24425 21.3233 6.17898 21.3342 6.1137 21.3559C6.08106 21.3124 6.04842 21.2906 6.04842 21.2689C6.01578 20.714 5.76555 20.0286 6.0049 19.6478C6.23337 19.2888 6.96231 19.2126 7.48453 19.0603C15.2526 16.7212 23.0315 14.3929 30.7996 12.0538C30.9846 11.9994 31.1804 11.9559 31.4524 11.8906Z"
            fill="#2ECC82"
          />
          <path
            d="M31.4534 15.7871C31.4534 16.3964 31.486 16.9404 31.4316 17.4626C31.4208 17.5931 31.1705 17.7563 30.9965 17.8107C28.4071 18.6049 25.8069 19.3883 23.2175 20.1607C17.9082 21.7492 12.599 23.3376 7.27884 24.926C7.10476 24.9804 6.94157 25.0239 6.72397 25.0892C6.58254 24.5126 6.45198 23.9686 6.31055 23.3376C14.6879 20.8244 23.0326 18.3221 31.4534 15.7871Z"
            fill="#2ECC82"
          />
          <path
            d="M35.8714 31.3557C33.9348 31.3557 32.0962 31.3557 30.2031 31.3557C30.2902 31.1599 30.3554 31.0076 30.4316 30.8553C31.8786 28.1462 32.7598 25.2631 33.1733 22.2277C33.2929 21.3573 33.3147 20.487 33.3473 19.6057C33.3582 19.2358 33.5105 19.0944 33.8587 18.9965C34.9902 18.6809 36.1108 18.3328 37.3184 17.9629C37.3184 18.5939 37.3293 19.1705 37.3075 19.7472C37.3075 19.8451 37.1335 19.9539 37.0138 20.0083C35.4689 20.7481 34.555 21.9775 34.4353 23.6747C34.3047 25.6874 34.2177 27.711 35.1751 29.6041C35.4471 30.1481 35.6212 30.7247 35.8714 31.3557Z"
            fill="#2ECC82"
          />
          <path
            d="M48.0884 22.5211C47.4465 22.5211 46.8372 22.5211 46.1627 22.5211C46.0104 19.6489 44.5634 17.6579 41.8652 16.57C42.1046 15.9607 42.3331 15.395 42.5615 14.8184C45.4555 15.5799 48.2081 18.8547 48.0884 22.5211Z"
            fill="#2ECC82"
          />
          <path
            d="M37.3415 14.0352C37.3415 14.6444 37.3524 15.1775 37.3307 15.6997C37.3307 15.7977 37.2001 15.95 37.0913 15.9826C35.8837 16.3525 34.676 16.7115 33.4031 17.0923C33.4031 16.494 33.3922 15.95 33.414 15.3951C33.414 15.3081 33.4901 15.1775 33.5663 15.1558C34.7957 14.7859 36.036 14.4159 37.3415 14.0352Z"
            fill="#2ECC82"
          />
          <path
            d="M33.4795 13.1526C33.436 13.0547 33.4143 13.0438 33.4143 13.0329C33.4143 12.4781 33.2184 11.7927 33.4795 11.4119C33.7298 11.0528 34.4369 10.9876 34.9483 10.8244C35.6446 10.5959 36.3409 10.4001 37.0372 10.1933C37.1024 10.1716 37.1677 10.1607 37.3418 10.1172C37.3418 10.7047 37.3527 11.2595 37.3309 11.8253C37.3309 11.9123 37.2004 12.032 37.1024 12.0646C35.8948 12.4237 34.6872 12.7827 33.4795 13.1526Z"
            fill="#2ECC82"
          />
          <path
            d="M4.42923 23.9023C4.57066 24.5225 4.70122 25.0556 4.85354 25.6648C3.54798 26.0565 2.2533 26.4482 0.893345 26.8616C0.773669 26.2632 0.653993 25.6866 0.523438 25.0773C1.82899 24.6857 3.10191 24.3049 4.42923 23.9023Z"
            fill="#2ECC82"
          />
          <path
            d="M3.99536 20.1055C4.04976 20.7582 4.09328 21.3457 4.1368 21.955C2.84212 22.3467 1.59096 22.7166 0.263643 23.1191C0.209245 22.4772 0.165726 21.8897 0.111328 21.2696C1.40601 20.8779 2.65717 20.508 3.99536 20.1055Z"
            fill="#2ECC82"
          />
          <path
            d="M50.7227 14.8514C51.2666 14.5032 51.7889 14.1659 52.3872 13.7852C52.7354 14.3944 53.0618 14.971 53.4208 15.6129C52.8115 15.9067 52.2349 16.1787 51.6365 16.4724C51.3319 15.9284 51.049 15.4171 50.7227 14.8514Z"
            fill="#2ECC82"
          />
          <path
            d="M42.474 6.59375C43.1811 6.82222 43.8013 7.02894 44.4758 7.24653C44.2256 7.87755 43.9971 8.46505 43.7469 9.08519C43.1594 8.90023 42.6045 8.71528 41.9844 8.51945C42.1476 7.88843 42.2999 7.27917 42.474 6.59375Z"
            fill="#2ECC82"
          />
          <path
            d="M48.1312 9.25928C47.7178 9.81414 47.3587 10.3255 46.9671 10.8586C46.4557 10.5322 45.9444 10.2167 45.4004 9.86853C45.7159 9.29191 46.0205 8.73705 46.3469 8.13867C46.9453 8.50858 47.511 8.86761 48.1312 9.25928Z"
            fill="#2ECC82"
          />
          <path
            d="M49.644 13.3703C49.2088 12.9025 48.8172 12.489 48.3711 12.0103C48.8063 11.5425 49.2306 11.0856 49.7202 10.5742C50.1989 11.0856 50.6667 11.5643 51.1672 12.0974C50.6558 12.5326 50.1662 12.9351 49.644 13.3703Z"
            fill="#2ECC82"
          />
          <path
            d="M54.7169 19.5724C54.0424 19.703 53.4331 19.8227 52.7912 19.9532C52.628 19.3657 52.4757 18.7891 52.3125 18.1581C52.9435 17.9514 53.5419 17.7555 54.1947 17.5488C54.3688 18.2451 54.5319 18.8979 54.7169 19.5724Z"
            fill="#2ECC82"
          />
          <path
            d="M52.3672 27.2326C52.5195 26.6125 52.6501 26.0576 52.8024 25.4375C53.4225 25.5463 54.0427 25.666 54.7498 25.7857C54.5758 26.4819 54.4234 27.1347 54.2494 27.8201C53.5966 27.6243 53.0091 27.4394 52.3672 27.2326Z"
            fill="#2ECC82"
          />
          <path
            d="M52.9193 30.8771C52.3101 30.5399 51.7661 30.2352 51.1895 29.9197C51.3635 29.5825 51.505 29.2887 51.6899 28.9297C52.2992 29.2126 52.8649 29.4737 53.4851 29.7565C53.2892 30.1373 53.1152 30.4746 52.9193 30.8771Z"
            fill="#2ECC82"
          />
        </svg>
      ),
      heading: "Ensure Completeness of Data",
      info: "Blockchain's append only property makes data alteration or deletion impossible, helping you maintain its accuracy at all times.",
    },
  ];
  return (
    <div className="blockchain__why">
      <div className="blockchain__why__heading heading">Why Blockchain?</div>
      <div className="blockchain__why__content">
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          style={{
            marginTop: "2em",
          }}
          loop
          modules={[Autoplay, FreeMode]}
          freeMode={true}
          speed={2500}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        >
          {whyBlockchain.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="blockchain__why__content__entry">
                <div className="blockchain__why__content__entry__icon">
                  {item.image}
                </div>
                <div className="blockchain__why__content__entry__heading heading">
                  {item.heading}
                </div>
                <div className="blockchain__why__content__entry__info">
                  {item.info}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}