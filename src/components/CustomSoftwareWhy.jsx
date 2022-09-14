import React from "react";
import { HomeServicesCard } from "../components/HomeServicesCard";

export function CustomSoftwareWhy({}) {
  return (
    <section
      className="home__services"
      style={{
        marginTop: "-7em",
        marginBottom: "-7em",
      }}
    >
      <svg
        width="150"
        height="150"
        style={{
          marginBottom: "1em",
        }}
        viewBox="0 0 150 177"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.8497 154.045C16.7711 144.044 15.4289 133.153 19.6806 121.243C23.082 111.672 28.7592 103.505 35.4369 96.0786C51.5601 78.164 70.7261 64.909 93.8938 57.945C95.1461 57.4733 96.4507 57.157 97.7787 57.003C99.0781 56.8834 100.382 57.1714 101.513 57.8277C102.644 58.4841 103.547 59.4767 104.098 60.67C105.465 63.4792 104.932 66.1537 103.064 68.5507C101.472 70.6282 99.1042 71.4187 96.77 72.285C73.0938 81.1414 52.9857 94.9935 38.138 115.835C30.3516 126.769 25.1828 138.771 26.1248 152.699C26.0694 153.154 25.9773 153.604 25.8497 154.045Z"
          fill="#2ECC82"
        />
        <path
          d="M49.0563 169.479C38.0019 162.751 34.6089 150.589 40.1194 137.855C44.6379 127.418 52.0992 119.268 60.4693 111.917C76.5841 97.7788 94.7081 87.3664 115.608 82.2696C118.993 81.4285 122.277 82.8752 123.361 85.6338C124.445 88.3925 123.286 91.6642 119.751 93.2034C115.725 94.936 111.415 95.9874 107.321 97.5854C86.7298 105.592 68.9727 117.552 55.9925 135.896C50.7403 143.331 46.9888 151.455 47.1556 160.934C47.2056 163.861 48.2227 166.544 49.0563 169.479Z"
          fill="#1E1E1E"
        />
        <path
          d="M6.70991 125.272C2.59158 114.506 3.29187 104.54 7.61862 94.7331C12.729 83.1265 21.1907 74.2196 30.5278 66.0529C36.1132 61.2751 41.9971 56.8645 48.1433 52.8483C50.4186 51.1916 53.1857 50.3669 55.9881 50.5101C56.8695 50.5237 57.7323 50.7679 58.4921 51.2187C59.2519 51.6695 59.8828 52.3115 60.323 53.0819C60.7633 53.8524 60.9978 54.7249 61.0036 55.6142C61.0095 56.5034 60.7865 57.3791 60.3565 58.1554C59.3228 60.3169 57.5054 61.6457 55.5796 62.9073C41.2405 72.2683 28.6104 83.4797 18.8982 97.7525C13.5377 105.6 9.26094 113.968 7.48523 123.464C7.27093 124.085 7.01179 124.689 6.70991 125.272Z"
          fill="#1E1E1E"
        />
        <path
          d="M99.8978 175.171C95.0375 176.55 90.1855 176.988 85.3502 175.297C80.1898 173.489 78.0223 169.67 79.2561 164.363C81.0068 156.794 85.9922 151.301 91.461 146.364C102.074 136.802 114.245 129.972 128.184 126.658C133.228 125.456 138.338 124.917 143.465 126.238C144.172 126.367 144.857 126.596 145.499 126.919C147.567 128.164 149.818 129.552 149.093 132.428C148.392 135.162 146.016 136.137 143.482 135.725C136.777 134.513 129.874 135.114 123.474 137.466C110.969 142.168 99.8894 148.888 91.7945 159.872C91.0088 160.962 90.3435 162.135 89.8104 163.371C86.9509 169.864 89.4436 174.212 96.4297 174.977C97.5468 175.112 98.7306 175.112 99.8978 175.171Z"
          fill="#2ECC82"
        />
        <path
          d="M76.9164 176.952C73.1968 177.11 69.4767 176.653 65.9036 175.598C61.085 174.177 58.534 170.552 58.1672 165.455C57.7337 159.416 59.4844 153.949 62.3355 148.785C69.1049 136.548 79.1756 127.59 90.6386 120.097C94.065 117.851 97.383 118.414 99.1254 121.106C100.868 123.797 100.042 127.448 96.7077 129.685C88.1459 135.446 80.3095 141.956 74.2904 150.493C72.4673 153.013 70.9869 155.768 69.8886 158.684C66.804 167.078 68.6714 172.301 76.9164 176.952Z"
          fill="#2ECC82"
        />
        <path
          d="M101.923 161.504C101.589 165.062 103.732 165.272 106.158 165.037C109.112 164.656 111.98 163.766 114.636 162.404C120.713 159.528 126.491 156.147 130.918 150.882C133.677 147.602 133.243 146.281 128.8 145.238C131.151 145.079 132.968 144.515 134.952 144.86C138.187 145.432 139.121 147.063 137.77 150.158C136.42 153.254 134.152 155.466 131.71 157.526C124.29 163.775 116.078 168.519 106.458 170.386C105.856 170.525 105.246 170.623 104.632 170.68C102.74 170.756 100.797 170.68 99.6299 168.939C98.3544 167.055 99.6299 165.39 100.464 163.775C100.914 162.985 101.456 162.253 101.923 161.504Z"
          fill="#1E1E1E"
        />
        <path
          d="M17.7227 45.6327C23.1948 37.2992 30.433 30.2956 38.9145 25.1276C39.5423 24.7758 40.2199 24.5233 40.9237 24.3791C41.5072 24.2445 42.2575 24.1267 42.6577 24.665C42.8613 24.9705 42.9411 25.3431 42.8806 25.7061C42.8201 26.0691 42.624 26.3948 42.3326 26.6163C41.5137 27.5481 40.6031 28.3935 39.6148 29.1395C32.218 33.8381 25.2216 39.1495 18.698 45.0187C18.3924 45.2534 18.0659 45.4589 17.7227 45.6327Z"
          fill="#1E1E1E"
        />
        <path
          d="M1 93.7234C1.49186 91.5534 3.85948 84.825 15.3391 71.4942C17.6734 68.6907 20.1049 66.0133 22.6337 63.462C34.3634 51.6872 48.1273 42.5281 63.2584 35.1099C64.7871 34.4986 66.1979 33.6218 67.4267 32.5194C69.4025 30.4756 70.3112 28.1627 68.8773 25.4797C67.5935 23.0491 64.9841 22.2585 61.8578 23.7135C44.4508 31.7877 27.9275 41.2917 14.9806 55.9262C8.40298 63.3527 3.92618 71.9063 2.27551 81.7298C2.09211 83.0335 1.44184 87.9369 1.12505 91.5451C1.12159 92.2729 1.07985 93 1 93.7234Z"
          fill="#2ECC82"
        />
        <path
          d="M0 71.5556C0.0500201 71.2976 0.0917112 71.037 0.125058 70.7734C0.0622759 71.0303 0.020445 71.2918 0 71.5556Z"
          fill="white"
        />
      </svg>

      <div className="home__services__heading heading">
        Why Work with DSME Global Links?
      </div>
      <div className="home__services__info">
        Get access to the top talent of experienced product managers, smartest
        designers, and engineers.
      </div>
      <div className="home__services__content">
        <HomeServicesCard
          svg={
            <svg
              width="63"
              height="60"
              viewBox="0 0 63 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.7757 52.2102C45.5371 52.2102 53.2841 52.2102 61.0167 52.2102C61.5342 55.7891 59.3351 58.9511 56.0724 59.7704C55.4257 59.9285 54.7358 59.986 54.0746 59.986C40.061 60.0004 26.0474 60.0004 12.0194 60.0004C10.0934 60.0004 8.9292 59.1667 8.3974 57.3701C5.65217 48.2577 2.9213 39.1452 0.176073 30.0328C-0.427591 28.0206 0.564143 26.1521 2.49012 25.649C2.87819 25.5484 3.30937 25.5484 3.71182 25.5484C11.4732 25.5484 19.249 25.5772 27.0104 25.5197C29.0226 25.5053 30.3018 26.5833 30.8048 28.3655C33.0326 36.0982 35.3035 43.8164 37.5601 51.5347C37.632 51.7647 37.7038 51.9659 37.7757 52.2102ZM6.62952 29.4435C6.62952 28.538 5.8965 27.7906 4.99101 27.7906C4.09988 27.7906 3.35249 28.538 3.35249 29.4435C3.35249 30.3777 4.05677 31.082 4.99101 31.082C5.91087 31.0676 6.62952 30.3634 6.62952 29.4435ZM8.84296 35.0058C8.85733 34.0716 8.15306 33.3673 7.21882 33.3529C6.29895 33.3529 5.56593 34.0572 5.56593 34.9771C5.56593 35.8826 6.28457 36.63 7.19006 36.6443C8.09556 36.6443 8.82858 35.9257 8.84296 35.0058Z"
                fill="#2ECC82"
              />
              <path
                d="M48.7722 24.5562C46.76 24.0387 45.1503 24.8293 43.5549 25.9216C41.6289 27.2295 39.5879 28.3937 37.6045 29.6442C37.1014 29.9604 36.5984 30.176 36.0378 29.8167C35.4773 29.443 35.4917 28.8968 35.5779 28.3075C35.7935 26.6546 35.966 25.0017 36.1816 23.3345C36.2247 22.9751 36.0809 22.8027 35.7935 22.6158C32.6171 20.6036 30.7198 17.7147 30.1018 14.0064C29.0813 7.91231 33.2926 1.70319 39.3723 0.352137C40.1916 0.165289 41.0396 0.0359322 41.8732 0.0359322C44.9059 0.00718633 47.953 -0.0503052 50.9857 0.0934243C56.2462 0.352137 60.8886 4.4628 61.9379 9.63706C63.3895 16.7517 58.7183 23.3776 51.5462 24.3693C50.6264 24.4987 49.6921 24.3837 48.7579 24.3837C48.7579 24.4268 48.7579 24.4843 48.7722 24.5562ZM48.8297 5.74199C48.8297 4.9946 48.5279 4.63527 47.9817 4.49154C47.4499 4.34781 46.9325 4.64965 46.7313 5.16707C46.6738 5.3108 46.6307 5.45453 46.6019 5.59826C45.5527 9.83828 44.4891 14.0783 43.4399 18.3183C43.2243 19.1807 43.483 19.7556 44.1585 19.9425C44.8197 20.1149 45.3515 19.6981 45.5671 18.8645C46.4295 15.4437 47.2918 12.023 48.1398 8.60221C48.3842 7.5961 48.6285 6.58999 48.8297 5.74199ZM53.6878 12.2242C52.5667 13.0578 51.5031 13.8483 50.4683 14.6532C49.9221 15.0844 49.8358 15.6881 50.2095 16.2055C50.5545 16.6654 51.2156 16.8092 51.7187 16.4355C53.2279 15.3287 54.7226 14.222 56.1887 13.0722C56.7923 12.5979 56.8067 11.8505 56.2174 11.3906C54.737 10.2263 53.2278 9.09089 51.6899 7.99854C51.0144 7.50986 50.0371 7.94105 50.0227 8.73156C50.0083 9.10526 50.2958 9.60831 50.5976 9.85265C51.575 10.6863 52.6242 11.4193 53.6878 12.2242ZM38.4812 12.2242C39.5592 11.4193 40.5653 10.6719 41.5714 9.91014C42.2182 9.42146 42.3619 8.76031 41.9595 8.22851C41.557 7.69671 40.8959 7.66796 40.2347 8.15664C38.898 9.14838 37.5613 10.1545 36.239 11.1606C35.3192 11.8649 35.3192 12.5979 36.2534 13.3022C37.547 14.2795 38.8549 15.2425 40.1485 16.2199C40.8815 16.766 41.557 16.7517 41.9738 16.1911C42.3907 15.6306 42.1894 14.9982 41.4564 14.4376C40.4791 13.719 39.5161 12.986 38.4812 12.2242Z"
                fill="#2ECC82"
              />
              <path
                d="M17.7539 5.0807C17.7539 4.2327 18.2857 3.55717 19.0762 3.35595C19.8092 3.18347 20.5997 3.55717 20.9303 4.31893C21.4046 5.41128 21.8214 6.51799 22.267 7.62471C22.5688 8.38648 22.8994 9.14824 23.1725 9.91001C23.5031 10.8299 23.115 11.7354 22.2814 12.0803C21.419 12.4396 20.456 12.0803 20.0823 11.1605C19.3206 9.32072 18.6019 7.46661 17.8689 5.62687C17.797 5.44002 17.7827 5.21006 17.7539 5.0807Z"
                fill="#2ECC82"
              />
              <path
                d="M16.6323 17.24C16.6179 18.3467 15.5831 19.1947 14.5482 18.8067C12.5647 18.0737 10.5956 17.2831 8.64093 16.4495C7.82167 16.1046 7.54859 15.1416 7.87916 14.3511C8.22412 13.5462 9.08649 13.1006 9.90574 13.4168C11.8461 14.1498 13.7721 14.926 15.6837 15.7165C16.3305 15.9896 16.6323 16.5358 16.6323 17.24Z"
                fill="#2ECC82"
              />
            </svg>
          }
          title="Worry-free software development"
          description="We have a standardized development process derived from industry best practices and our learnings across projects. Helps you save time, money, and energy."
        />
        <HomeServicesCard
          svg={
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.50702e-06 22.8809C-0.00999049 11.5209 7.87001 2.13086 18.47 0.330859C29.56 -1.54914 40.03 4.73086 43.63 15.4009C43.72 15.6709 44.01 15.9909 44.27 16.0809C52.74 19.1609 57.86 25.1309 59.35 33.9909C61.29 45.5409 53.33 56.8009 41.82 59.1009C30.62 61.3409 19.8 55.0809 16.13 44.2609C16.04 43.9909 15.74 43.6909 15.47 43.6009C7.04001 40.5409 1.97001 34.6209 0.30001 25.8209C0.0800095 24.6709 0.0600095 23.5009 9.50702e-06 22.8809ZM22.87 44.8309C25.56 50.3709 32.23 54.6709 40.1 53.3509C47.24 52.1509 52.91 46.0309 53.56 38.9909C54.32 30.7109 49.21 24.8109 44.87 22.8509C43.32 35.9509 36.01 43.2609 22.87 44.8309ZM35.77 18.4109C35.78 16.5209 34.03 15.0409 32.19 15.5309C23.43 17.8509 17.88 23.4209 15.56 32.1709C15.06 34.0509 16.66 35.8309 18.61 35.7109C20.04 35.6209 21 34.7509 21.44 33.0709C22.12 30.4809 23.36 28.2009 25.15 26.2209C27.42 23.7209 30.22 22.1209 33.48 21.2809C34.9 20.9109 35.76 19.7809 35.77 18.4109Z"
                fill="#2ECC82"
              />
            </svg>
          }
          title="Complete Transparency"
          description="Agile-based project management, with 100% online cloud-based tools to ensure round-the-clock visibility & delivery."
        />
        <HomeServicesCard
          svg={
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
                d="M55.0002 51.0037C53.7055 51.0037 52.3999 51.0037 51.0835 51.0037C51.0835 45.7489 51.0835 40.5593 51.0835 35.3262C52.4108 35.3262 53.7055 35.3262 55.0002 35.3262C55.0002 40.5484 55.0002 45.7815 55.0002 51.0037Z"
                fill="#2ECC82"
              />
              <path
                d="M54.999 23.7279C54.3571 23.6952 53.7152 23.6517 53.0298 23.6082C53.0298 23.0098 53.0298 22.4332 53.0298 21.7369C53.6717 21.726 54.3353 21.7042 54.999 21.6934C54.999 22.3679 54.999 23.0533 54.999 23.7279Z"
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
                d="M21.7048 40.4066C21.4654 42.2344 22.0856 43.5726 23.5217 44.5626C22.8907 45.3786 22.586 46.2925 22.6187 47.3043C22.6187 47.424 22.4772 47.5872 22.3685 47.6633C21.237 48.3705 20.0946 49.0777 18.9414 49.7522C18.8108 49.8284 18.5606 49.8284 18.4191 49.7631C13.1425 46.9779 8.85594 43.083 5.59204 38.0892C3.7969 35.3367 2.42607 32.3774 1.49042 29.2332C1.4469 29.1027 1.41426 28.9612 1.35986 28.7654C2.71982 28.352 4.05801 27.9494 5.41797 27.5469C5.82052 28.4499 6.16867 29.3203 6.58209 30.158C8.69274 34.5207 11.8478 37.9478 15.9059 40.5698C16.537 40.9724 17.1897 41.3531 17.799 41.7883C18.43 42.2453 18.9849 42.2235 19.605 41.7774C20.236 41.2987 20.9323 40.8962 21.7048 40.4066Z"
                fill="#2ECC82"
              />
              <path
                d="M5.94426 17.4511C5.93338 17.2988 5.9225 17.1791 5.9225 17.0595C5.9225 15.0032 5.9225 12.947 5.91162 10.8907C5.91162 10.5752 5.99866 10.4229 6.30329 10.3141C10.3179 8.88886 14.3325 7.45275 18.3579 6.02751C18.5755 5.95136 18.8475 5.94048 19.076 6.00575C23.0579 7.12636 27.0399 8.26872 31.011 9.41108C31.1742 9.4546 31.3047 9.60692 31.457 9.70483C31.3047 9.79187 31.1742 9.91155 31.0218 9.96594C22.8077 12.4356 14.5936 14.9053 6.36857 17.3641C6.23801 17.4076 6.09657 17.4185 5.94426 17.4511Z"
                fill="#2ECC82"
              />
              <path
                d="M31.4529 11.8906C31.4529 12.4672 31.4964 12.9677 31.4311 13.4573C31.4094 13.6205 31.1591 13.8381 30.9633 13.8925C26.9052 15.1328 22.8362 16.3513 18.7672 17.5698C14.6112 18.8101 10.466 20.0612 6.31002 21.3015C6.24474 21.3233 6.17946 21.3342 6.11419 21.3559C6.08155 21.3124 6.04891 21.2906 6.04891 21.2689C6.01627 20.714 5.76604 20.0286 6.00539 19.6478C6.23386 19.2888 6.9628 19.2126 7.48502 19.0603C15.2531 16.7212 23.032 14.3929 30.8001 12.0538C30.985 11.9994 31.1809 11.9559 31.4529 11.8906Z"
                fill="#2ECC82"
              />
              <path
                d="M31.4539 15.7871C31.4539 16.3964 31.4865 16.9404 31.4321 17.4626C31.4213 17.5931 31.171 17.7563 30.9969 17.8107C28.4076 18.6049 25.8074 19.3883 23.218 20.1607C17.9087 21.7492 12.5995 23.3376 7.27932 24.926C7.10525 24.9804 6.94205 25.0239 6.72446 25.0892C6.58303 24.5126 6.45247 23.9686 6.31104 23.3376C14.6884 20.8244 23.033 18.3221 31.4539 15.7871Z"
                fill="#2ECC82"
              />
              <path
                d="M35.8719 31.3557C33.9353 31.3557 32.0967 31.3557 30.2036 31.3557C30.2907 31.1599 30.3559 31.0076 30.4321 30.8553C31.8791 28.1462 32.7603 25.2631 33.1738 22.2277C33.2934 21.3573 33.3152 20.487 33.3478 19.6057C33.3587 19.2358 33.511 19.0944 33.8592 18.9965C34.9907 18.6809 36.1113 18.3328 37.3189 17.9629C37.3189 18.5939 37.3298 19.1705 37.308 19.7472C37.308 19.8451 37.1339 19.9539 37.0143 20.0083C35.4694 20.7481 34.5555 21.9775 34.4358 23.6747C34.3052 25.6874 34.2182 27.711 35.1756 29.6041C35.4476 30.1481 35.6217 30.7247 35.8719 31.3557Z"
                fill="#2ECC82"
              />
              <path
                d="M48.0884 22.5211C47.4465 22.5211 46.8372 22.5211 46.1627 22.5211C46.0104 19.6489 44.5634 17.6579 41.8652 16.57C42.1046 15.9607 42.3331 15.395 42.5615 14.8184C45.4555 15.5799 48.2081 18.8547 48.0884 22.5211Z"
                fill="#2ECC82"
              />
              <path
                d="M37.3406 14.0352C37.3406 14.6444 37.3514 15.1775 37.3297 15.6997C37.3297 15.7977 37.1991 15.95 37.0903 15.9826C35.8827 16.3525 34.6751 16.7115 33.4021 17.0923C33.4021 16.494 33.3913 15.95 33.413 15.3951C33.413 15.3081 33.4892 15.1775 33.5653 15.1558C34.7947 14.7859 36.035 14.4159 37.3406 14.0352Z"
                fill="#2ECC82"
              />
              <path
                d="M33.48 13.1526C33.4365 13.0547 33.4147 13.0438 33.4147 13.0329C33.4147 12.4781 33.2189 11.7927 33.48 11.4119C33.7302 11.0528 34.4374 10.9876 34.9488 10.8244C35.6451 10.5959 36.3414 10.4001 37.0377 10.1933C37.1029 10.1716 37.1682 10.1607 37.3423 10.1172C37.3423 10.7047 37.3532 11.2595 37.3314 11.8253C37.3314 11.9123 37.2009 12.032 37.1029 12.0646C35.8953 12.4237 34.6877 12.7827 33.48 13.1526Z"
                fill="#2ECC82"
              />
              <path
                d="M4.42874 23.9023C4.57018 24.5225 4.70073 25.0556 4.85305 25.6648C3.54749 26.0565 2.25281 26.4482 0.892857 26.8616C0.773181 26.2632 0.653505 25.6866 0.522949 25.0773C1.82851 24.6857 3.10142 24.3049 4.42874 23.9023Z"
                fill="#2ECC82"
              />
              <path
                d="M3.99438 20.1055C4.04878 20.7582 4.0923 21.3457 4.13582 21.955C2.84114 22.3467 1.58998 22.7166 0.262667 23.1191C0.208268 22.4772 0.16475 21.8897 0.110352 21.2696C1.40503 20.8779 2.65619 20.508 3.99438 20.1055Z"
                fill="#2ECC82"
              />
              <path
                d="M50.7222 14.8514C51.2662 14.5032 51.7884 14.1659 52.3868 13.7852C52.7349 14.3944 53.0613 14.971 53.4203 15.6129C52.8111 15.9067 52.2344 16.1787 51.6361 16.4724C51.3314 15.9284 51.0486 15.4171 50.7222 14.8514Z"
                fill="#2ECC82"
              />
              <path
                d="M42.474 6.59375C43.1811 6.82222 43.8013 7.02894 44.4758 7.24653C44.2256 7.87755 43.9971 8.46505 43.7469 9.08519C43.1594 8.90023 42.6045 8.71528 41.9844 8.51945C42.1476 7.88843 42.2999 7.27917 42.474 6.59375Z"
                fill="#2ECC82"
              />
              <path
                d="M48.1322 9.25928C47.7187 9.81414 47.3597 10.3255 46.968 10.8586C46.4567 10.5322 45.9453 10.2167 45.4014 9.86853C45.7169 9.29191 46.0215 8.73705 46.3479 8.13867C46.9463 8.50858 47.512 8.86761 48.1322 9.25928Z"
                fill="#2ECC82"
              />
              <path
                d="M49.645 13.3703C49.2098 12.9025 48.8181 12.489 48.3721 12.0103C48.8073 11.5425 49.2316 11.0856 49.7211 10.5742C50.1998 11.0856 50.6677 11.5643 51.1681 12.0974C50.6568 12.5326 50.1672 12.9351 49.645 13.3703Z"
                fill="#2ECC82"
              />
              <path
                d="M54.7159 19.5724C54.0414 19.703 53.4321 19.8227 52.7902 19.9532C52.627 19.3657 52.4747 18.7891 52.3115 18.1581C52.9425 17.9514 53.5409 17.7555 54.1937 17.5488C54.3678 18.2451 54.531 18.8979 54.7159 19.5724Z"
                fill="#2ECC82"
              />
              <path
                d="M52.3667 27.2326C52.519 26.6125 52.6496 26.0576 52.8019 25.4375C53.422 25.5463 54.0422 25.666 54.7493 25.7857C54.5753 26.4819 54.423 27.1347 54.2489 27.8201C53.5961 27.6243 53.0086 27.4394 52.3667 27.2326Z"
                fill="#2ECC82"
              />
              <path
                d="M52.9193 30.8771C52.3101 30.5399 51.7661 30.2352 51.1895 29.9197C51.3635 29.5825 51.505 29.2887 51.6899 28.9297C52.2992 29.2126 52.8649 29.4737 53.4851 29.7565C53.2892 30.1373 53.1152 30.4746 52.9193 30.8771Z"
                fill="#2ECC82"
              />
            </svg>
          }
          title="Fair agreements & Strong IP Protection"
          description="Standard ‘work for hire’ contracts but flexible enough to allow for quick team size adjustments, scope changes in fixed-price projects, and pay only for work delivered."
        />
        <HomeServicesCard
          svg={
            <svg
              width="78"
              height="56"
              viewBox="0 0 78 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M54.2805 11.2427C54.6288 11.2427 54.9523 11.2427 55.2633 11.2427C59.7792 11.2427 64.2952 11.2552 68.8111 11.2302C70.2667 11.2176 71.2122 11.8569 71.7845 13.1729C73.7376 17.6474 75.6784 22.1219 77.6813 26.5714C78.2536 27.8248 77.9053 29.0405 77.7809 30.2563C77.3081 34.8938 76.7856 39.5187 76.2755 44.1436C76.1263 45.4722 76.0143 46.8133 75.7779 48.1293C75.5291 49.5582 74.4716 50.3854 73.0161 50.3979C71.4237 50.4105 69.8313 50.423 68.2389 50.3854C67.6915 50.3729 67.4427 50.5483 67.2063 51.0497C65.4895 54.6092 61.6329 56.6272 58.0624 55.825C55.5245 55.2485 53.8326 53.6692 52.8622 51.2627C52.8125 51.1249 52.7627 50.987 52.7129 50.8491C52.6632 50.7113 52.6259 50.5859 52.5637 50.3979C52.2278 50.3979 51.9167 50.3979 51.5933 50.3979C45.1739 50.3979 38.7421 50.4105 32.3227 50.3854C31.6758 50.3854 31.3275 50.5233 31.0164 51.175C29.2001 54.8975 24.9454 56.8402 21.3003 55.6495C18.7624 54.8223 17.2322 52.9924 16.436 50.3979C13.9479 50.3979 11.4722 50.3979 8.98405 50.3979C8.63571 50.3979 8.28737 50.423 7.95147 50.3478C6.583 50.0595 5.67483 48.7435 5.7868 47.2896C5.89877 45.9359 7.08063 44.8455 8.47399 44.8079C9.39459 44.7828 10.3276 44.8204 11.2482 44.7954C12.878 44.7452 14.1096 43.5295 14.1096 42.0004C14.1096 40.4712 12.878 39.2304 11.2482 39.2053C9.45679 39.1803 7.66534 39.2053 5.86144 39.1928C4.18195 39.1803 2.98766 37.977 3.0001 36.3477C3.01254 34.7684 4.21927 33.6028 5.86144 33.6028C13.1268 33.6028 20.3921 33.6028 27.645 33.6028C29.0757 33.6028 30.1207 32.951 30.5686 31.823C31.3026 29.9304 29.9465 28.0128 27.8192 28.0002C24.1741 27.9752 20.529 28.0002 16.8839 27.9877C15.5154 27.9877 14.3211 26.9725 14.122 25.6815C13.8981 24.2527 14.7316 22.899 16.1125 22.5105C16.4609 22.4102 16.859 22.4102 17.2322 22.4102C23.4774 22.4102 29.7351 22.4102 35.9803 22.4102C37.4109 22.4102 38.456 21.7585 38.9038 20.6304C39.5881 18.8757 38.4186 17.0082 36.5028 16.8202C36.2166 16.7951 35.9305 16.8077 35.6319 16.8077C26.6373 16.8077 17.6303 16.8077 8.63571 16.8077C7.29212 16.8077 6.27199 16.0556 5.88633 14.8273C5.52555 13.6868 5.91121 12.3833 6.94378 11.7566C7.47873 11.4307 8.17541 11.2427 8.80988 11.2302C15.0924 11.1926 21.3625 11.2051 27.645 11.2051C29.113 11.2051 30.1705 10.5283 30.5935 9.35012C31.2777 7.43247 29.9092 5.61509 27.7446 5.60255C23.3406 5.59002 18.949 5.60255 14.545 5.59002C14.122 5.59002 13.6617 5.57749 13.2636 5.45215C11.92 5.03854 11.1363 3.7225 11.3478 2.31873C11.5468 0.990161 12.7287 0 14.1842 0C22.7434 0 31.315 0 39.8742 0C43.9547 0 48.0353 0 52.1158 0C54.0938 0 55.2508 1.21577 55.0767 3.22116C54.8776 5.90336 54.5666 8.53543 54.2805 11.2427ZM72.307 30.8328C72.307 29.9054 72.5682 28.9152 72.2572 28.1632C70.7395 24.5159 69.0848 20.9438 67.4551 17.3466C67.3556 17.1335 67.057 16.8829 66.858 16.8703C64.8053 16.8453 62.7525 16.8077 60.6998 16.8829C59.2567 16.9455 58.2242 17.8981 58.0624 19.2141C57.7265 22.0091 57.4155 24.8167 57.1667 27.6242C56.9925 29.5544 58.1744 30.7953 60.0903 30.8078C63.188 30.8203 66.2733 30.8078 69.371 30.8078C70.2667 30.8329 71.1624 30.8328 72.307 30.8328ZM26.488 47.4024C26.5378 45.6602 25.667 44.67 24.5722 44.858C22.9051 45.1463 21.6238 46.8133 21.7606 48.5179C21.885 50.0595 23.0295 50.7614 24.4353 50.1347C25.754 49.5582 26.4258 48.5179 26.488 47.4024ZM62.6157 47.3021C62.6406 45.6602 61.7822 44.6826 60.7247 44.858C59.0577 45.1212 57.7638 46.7882 57.8882 48.4928C58.0002 50.047 59.1323 50.7614 60.5381 50.1472C61.8817 49.5582 62.5535 48.4928 62.6157 47.3021Z"
                fill="#2ECC82"
              />
              <path
                d="M4.02989 22.006C4.47234 22.006 4.9148 21.9925 5.36921 22.006C6.86398 22.0463 8 23.3372 8 24.9912C8 26.6587 6.87594 27.963 5.38117 27.9899C4.46039 28.0034 3.53961 28.0034 2.63079 27.9899C1.13602 27.963 0 26.6587 0 25.0047C0 23.3372 1.12406 22.0463 2.61883 22.006C3.0852 22.006 3.56352 22.006 4.02989 22.006Z"
                fill="#2ECC82"
              />
            </svg>
          }
          title="Strong commitment to delivery"
          description="Every project comes with a delivery commitment. We make sure that we deliver the project as promised, no matter what happens."
        />
      </div>
    </section>
  );
}
