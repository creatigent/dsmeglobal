import React from "react";
import { HomeJumbotron } from "../components/HomeJumbotron";
import design from "../assets/design.svg";
import pencilpic from "../assets/pencil-sketch.png";
import imagepng2 from "../assets/high-fidelity-wireframes.png";
import { BlockchainServices } from "../components/BlockchainServicesUiux";
import imagepng3 from "../assets/pixel-perfect-mockups.jpg";
import EcomereceProjectsCard from "../components/EcomereceProjectsCard";
import { Link } from "react-router-dom";

export default function ServiceUIUX() {
  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="User Experience & Design Solutions"
          info="We design and launch digital products that deliver great user experiences. Good user experiences are very important to us for every software we create. By basing our software on human-centered design principles, we ensure your users get the best experience, and you get the best return on investment.."
          img={design}
          talk={true}
        />
      </div>
      <div className="june_main_container">
        <div className="june_main_container_first_container">
          <div className="june_main_container_first_container_title">
            Our Design capabilites
          </div>
          <div className="june_main_container_para">
            <p className="june_main_container_first_container_para">
              Creating a beautiful UI/UX is easy but carefully designing a
              visually appealing, exceptionally engaging and consumer
              decision-impulsive site is the real game - that's what we do best.
            </p>
          </div>
        </div>
        <div className="june_second_container_main">
          <div className="june_second_container">
            <div className="june_second_container_svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 200.812 200.872"
              >
                <path
                  id="Union_9"
                  data-name="Union 9"
                  d="M84.879,368.878h-1q-4.513,0-9.026,0H74.7l-12.986,0q-10.5,0-20.992-.007c-2.219,0-3.622-.347-4.288-1.052s-.925-2.114-.8-4.32c.377-6.814,3.11-12.786,8.356-18.257a8.978,8.978,0,0,0,2.22-6.809c-2.146-15.029-8.807-28.8-19.8-40.926-3.7-4.077-3.72-4.416-.613-9.079q22.363-33.556,44.731-67.1c2.263-3.393,3.724-3.9,4.395-3.9s2.147.513,4.436,3.944q22.371,33.549,44.729,67.106c3.078,4.619,3.053,4.958-.677,9.076-10.985,12.132-17.636,25.906-19.771,40.939a8.973,8.973,0,0,0,2.269,6.794c5.408,5.622,8.143,11.84,8.361,19.007a3.667,3.667,0,0,1-4.4,4.571c-5.1.019-10.208.025-15.252.025C91.345,368.882,88.09,368.88,84.879,368.878ZM61.028,344.831c-7.782.367-13.585,4.846-17.245,13.31l-1.526,3.533h65.371l-1.542-3.54c-3.689-8.472-9.5-12.95-17.284-13.309-4.624-.212-9.262-.319-13.883-.319C70.26,344.507,65.618,344.615,61.028,344.831ZM67,239.792c-.392.454-.691.79-.926,1.055l-.1.107A10.68,10.68,0,0,0,65,242.145q-4,5.993-7.994,11.992l-.41.617c-7.393,11.1-15.038,22.574-22.685,33.834-2.619,3.857-.452,6.457.841,8.007l.127.153a82.041,82.041,0,0,1,16.179,30.978c.515,1.881,1.013,3.768,1.5,5.607l1.191,4.492H95.7l.671-1.5c.019-.042.045-.088.079-.152l.033-.061a6.76,6.76,0,0,0,.745-1.905,81.878,81.878,0,0,1,18.227-37.945c3.115-3.652,1.2-6.509.056-8.217-6.377-9.517-12.951-19.382-18.75-28.086l-1.093-1.64q-5.037-7.557-10.076-15.113a19.328,19.328,0,0,0-1.427-1.82c-.211-.248-.429-.5-.65-.775l-2.4-2.957-1.8,3.36c-.079.148-.151.264-.218.371a3.364,3.364,0,0,0-.609,1.827q-.018,4.112-.018,8.226v1.009c-.008,6.394-.014,13-.127,19.52a8.033,8.033,0,0,0,4.4,7.883,15.254,15.254,0,0,1,.05,26.337,15.4,15.4,0,0,1-15.776-26.461c1.572-.984,4.218-3.015,4.278-5.57.187-8.1.17-16.187.152-24.755-.005-2.6-.012-5.249-.012-7.959v-6.8Zm7.665,44.8a8.156,8.156,0,0,0-8.131,8.394,8.23,8.23,0,0,0,8.4,8.406c.09,0,.18,0,.272,0a8.157,8.157,0,0,0,8.132-8.393,8.233,8.233,0,0,0-8.4-8.407C74.841,284.588,74.752,284.589,74.663,284.592Zm57.59-11.166a14.973,14.973,0,0,1,6.961-17.663c3.157-1.808,4.342-4.254,3.73-7.7-5.018-28.271-21.012-47.4-47.537-56.858a8.816,8.816,0,0,0-2.953-.582c-2.034,0-3.64.939-5.207,3.045a15.029,15.029,0,0,1-24.624.011c-2.222-2.982-4.662-3.722-8.155-2.479-26.515,9.455-42.517,28.58-47.563,56.846-.788,4.415,1.75,6.538,4.05,7.893a15,15,0,0,1,6.808,17.167,15.275,15.275,0,0,1-14.71,11.226l-.169,0a15.271,15.271,0,0,1-14.7-10.971c-2.012-6.7.675-13.943,6.385-17.211,3.39-1.939,4.937-4.324,5.514-8.5,3.082-22.263,13.815-40.142,31.9-53.136.343-.247.68-.5,1.2-.893l7.273-5.431H5.963v2.53c0,.653.008,1.288.016,1.91.017,1.266.033,2.464-.03,3.626-.13,2.428-1.318,3.677-3.532,3.712-8.188.129-16.236.128-23.919-.005-2.787-.048-3.4-2.04-3.42-3.7-.108-8.311-.105-16.009.007-23.532.034-2.312,1.256-3.554,3.535-3.59,7.349-.117,15.046-.122,23.531-.013,2.5.032,3.677,1.216,3.8,3.84.053,1.1.04,2.231.025,3.424l0,.193c-.005.522-.012,1.055-.012,1.6v2.106l2.071.382c.208.038.4.083.631.135a8.041,8.041,0,0,0,1.849.266l5.706.009C29,181.1,42.2,181.127,55.352,181a7.368,7.368,0,0,0,5.705-3.381c3.2-5.451,8.251-8.579,13.847-8.579,5.611.006,10.674,3.164,13.891,8.664.2.335,1.989,3.275,4.595,3.294,13.132.1,26.406.1,39.237.092l10.229,0,.522-1.835c.049-.169.1-.312.154-.466a4.2,4.2,0,0,0,.316-1.8c-.255-3.587.085-5.89,1.009-6.841,1.152-1.187,4.288-1.224,7.195-1.107,3.883.158,7.783.121,11.557.085l.229,0c1.728-.017,3.877-.038,5.909-.03,4.1.019,5.048.931,5.067,4.88.034,7.139.034,14.264,0,21.179-.02,3.934-.97,4.842-5.087,4.858-5.809.022-11.83.014-17.138.008l-2.853,0c-5.15-.006-5.8-.647-5.84-5.716-.005-.644,0-1.288,0-2.066l0-4.221H111.519l4.594,4.363c1.781,1.692,3.565,3.312,5.291,4.882a138.294,138.294,0,0,1,10.66,10.4,71.684,71.684,0,0,1,17.852,41.854c.341,3.673,2.678,4.978,4.245,5.854.157.087.317.176.477.269a15.5,15.5,0,0,1,7.2,17.413,15.274,15.274,0,0,1-14.67,11.283l-.247,0A15.265,15.265,0,0,1,132.253,273.425Zm8.889-10.608a8.353,8.353,0,0,0-2.588,6.017,8.253,8.253,0,0,0,7.982,8.546c.14.006.281.009.421.009a8.238,8.238,0,0,0,8.4-8.258h0a8.251,8.251,0,0,0-7.98-8.545q-.218-.01-.433-.01A8.376,8.376,0,0,0,141.143,262.817ZM-5.489,268.732A8.409,8.409,0,0,0-3.153,274.9a8.4,8.4,0,0,0,6.084,2.479A8.367,8.367,0,0,0,9,274.874a8.418,8.418,0,0,0,2.311-6.185h0a8.171,8.171,0,0,0-8.421-8.105A8.158,8.158,0,0,0-5.489,268.732ZM66.565,183.85a8.58,8.58,0,0,0,2.088,6.368,8.3,8.3,0,0,0,5.825,2.849c.155.009.308.014.46.014a8.472,8.472,0,0,0,8.361-7.817,8.576,8.576,0,0,0-2.089-6.368,8.293,8.293,0,0,0-5.825-2.848q-.229-.013-.455-.013A8.484,8.484,0,0,0,66.565,183.85Zm84.555,9.163h16.445V176.285H151.12Zm-168.885-.22H-1.038V176.35H-17.765Z"
                  transform="translate(25.499 -168.51)"
                  stroke-miterlimit="10"
                  strokeWidth="1"
                />
              </svg>
            </div>
            <div className="june_second_container_box_title_one">
              Product Design Workshop
            </div>
            <div className="june_second_container_title_two">
              The fastest way to gather & analyse your requirements and take
              your product from concept to the actual design.
            </div>
          </div>
          <div className="june_second_container">
            <div className="june_second_container_svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 224.441 224.564"
              >
                <path
                  id="Union_10"
                  data-name="Union 10"
                  d="M5.745,388.56c-.154-3.107,2.395-3.5,4.886-3.5q14.982,0,29.964-.008c10.493-.019,14.009-4.108,12.578-15.016H-17.739c-2.26,9.093,1.2,14.162,10.166,15.009,2.318.219,4.87.588,4.137,3.513-.32,1.279-2.751,2.789-4.3,2.875-9.68.544-17.212-6.729-17.227-16.524q-.08-53.213,0-106.428c.013-9.744,6.98-16.735,16.666-16.769q25.839-.09,51.678,0c9.7.032,16.672,7,16.717,16.72.069,14.769.019,29.54.019,44.309v4.637C72.9,320.66,82.839,309.9,82.749,299.765c-.109-12.452.454-24.927-.148-37.352-.678-14.008,9.212-28.22,27.024-27.688,1,.031,2-.13,3.5-.237V223.254c0-12.308-.032-24.616.01-36.924.035-10.28,6.891-17.109,17.149-17.177,1.882-.012,3.893-.409,5.606.128,1.489.466,2.642,2,3.944,3.067-1.3,1.091-2.444,2.656-3.941,3.146a10.093,10.093,0,0,1-3.644.228c-.657-.036-1.317-.071-1.958-.046-6.883.27-10.337,3.676-10.6,10.506-.1,2.429-.016,4.865-.016,7.6h70.762c0-3.78.415-7.407-.1-10.9-.665-4.476-4.527-7.09-10.005-7.178-5.682-.092-11.364-.077-17.047-.062q-3.853.009-7.706.011c-.339,0-.7.028-1.053.057a4.5,4.5,0,0,1-2.373-.2,18.561,18.561,0,0,1-3.451-3.047c1.236-1.1,2.414-3.066,3.716-3.152,5.477-.357,10.991-.156,16.492-.156,4.2,0,8.4-.091,12.593.023a16.125,16.125,0,0,1,15.809,15.854c.131,23.891.043,47.783.061,71.675,0,2.38-.373,4.533-3.327,4.536-3.109,0-3.184-2.447-3.189-4.659q-.049-25.411-.024-50.824v-5.02H120v33.62H146.65c-2.013-2.062-3.937-3.439-4.986-5.308-.722-1.287-.231-3.254-.284-4.918a14.26,14.26,0,0,0,1.584-.046c1.187-.078,2.375-.156,3.007.4a104.666,104.666,0,0,1,11.005,11.07c.832.986.625,4.006-.291,5.095a92.31,92.31,0,0,1-10.408,10.44c-1.051.908-3.7,1.264-4.776.569-2.226-1.436-1.279-3.558.442-5.055,1.612-1.4,3.388-2.615,5.092-3.911l-.895-1.17H120.035v39.621H190.88c0-2.569-.362-5.069.138-7.383.292-1.354,1.958-2.41,3.007-3.6,1.108,1.255,3.118,2.473,3.174,3.774a211.77,211.77,0,0,1,.031,21.273,15.927,15.927,0,0,1-15.636,14.63q-26.27.209-52.545,0c-9.013-.072-15.862-7.354-15.9-16.642-.067-15.637-.019-31.277-.02-46.915V241.7c-14.607-1.993-23.746,5.783-23.852,19.975-.082,10.859-.537,21.75.094,32.573,1.182,20.31-12.061,31.557-29.256,30.539V329.4c0,14.915.023,29.83-.008,44.744-.023,10.57-6.822,17.383-17.353,17.413q-6.886.018-13.773.005c-6.121,0-12.242-.007-18.363.025h-.147C8.15,391.586,5.878,391.252,5.745,388.56Zm-23.784-25.5H53.328v-38.4c-4.406,0-8.575.126-12.732-.047-2.547-.105-3.942.565-5.42,2.964-1.355,2.2-4.22,4.631-6.594,4.826a130.728,130.728,0,0,1-22.477.058c-6.277-.571-9.24-6.936-7.73-14.551a10.124,10.124,0,0,1,12.072-7.856c1.154.269,2.72,1.973,2.731,3.031.011,1.042-1.622,2.212-2.716,3.1a2.125,2.125,0,0,1-1.326.222,5.33,5.33,0,0,0-.792.02c-3.428.438-3.969,2.791-3.828,5.682.135,2.789,1.449,4.3,4.3,4.307q3.225.005,6.453,0c3.49,0,6.981-.008,10.472.018,2.892.022,4.211-1.492,4.416-4.214.251-3.316-.694-5.477-4.512-6.072-1.3-.2-2.3-2.271-3.445-3.487,1.424-.915,2.791-2.492,4.283-2.62,4.139-.356,6.995,2,9.154,5.421.675,1.07,1.861,2.5,2.88,2.551,4.849.268,9.722.121,14.82.121v-34.9H-18.04Zm150.773-59.684q22.537.023,45.071,0c10.508-.012,13.819-3.816,12.715-14.875H119.958C118.911,299.636,122.184,303.366,132.733,303.376ZM-9.686,258.412a7.986,7.986,0,0,0-8.03,6.193c-.884,3.635-.591,7.556-.822,11.441H53.474c0-3.242.184-6-.039-8.717-.428-5.234-3.648-8.862-8.857-8.923q-11.952-.137-23.906-.127Q5.494,258.279-9.686,258.412ZM6.837,269.748c-1.372-.188-2.51-2.086-3.755-3.206,1.187-1.052,2.343-2.968,3.569-3.016,7.213-.275,14.449-.257,21.661.046,1.111.047,2.138,2.079,3.2,3.194-1.153,1.044-2.219,2.843-3.474,2.988a57.6,57.6,0,0,1-7.731.186c-1.031-.021-2.062-.041-3.091-.04-1.988,0-3.991.1-5.98.1A32.376,32.376,0,0,1,6.837,269.748ZM154.981,187.37c-1,0-2,.024-3,.049a46.017,46.017,0,0,1-7.373-.207c-1.34-.183-2.443-2.1-3.653-3.225,1.183-1,2.334-2.811,3.554-2.858,7.06-.272,14.142-.274,21.2.017,1.2.049,2.315,1.967,3.469,3.021-1.27,1.067-2.443,2.876-3.829,3.057a33.65,33.65,0,0,1-4.393.246C158.971,187.471,156.97,187.371,154.981,187.37Z"
                  transform="translate(25.965 -168.021)"
                  stroke-miterlimit="10"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="june_second_container_box_title_one">
              Rapid Prototyping
            </div>
            <div className="june_second_container_title_two">
              Reduce your time to market by swiftly moving your product design
              from pencil sketches to high-fidelity wireframes and mockups.
            </div>
          </div>
          <div className="june_second_container">
            <div className="june_second_container_svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 185.914 205.285"
              >
                <g
                  id="Group_32"
                  data-name="Group 32"
                  transform="translate(-527.798 -1873.805)"
                >
                  <path
                    id="Path_96"
                    data-name="Path 96"
                    d="M1700.672,210.758c1.588-6.692,3.109-13.1,4.723-19.9h-18.31q-21.136,0-42.271-.006c-11.418-.02-18.135-6.678-18.142-18.039q-.035-49.649,0-99.3c.007-11.379,6.7-18.054,18.122-18.062q51.045-.036,102.089.057c2.986.01,4.849-.743,6.448-3.384,3.16-5.218,6.649-10.244,10.147-15.248,4.332-6.2,11.341-9.065,17.974-7.556,7.591,1.726,12.96,7.192,13.816,15.079.372,3.419-.685,6.993-1.149,10.973-.389-.369-.231-.083-.044-.061,12.511,1.449,17.489,7.021,17.49,19.624q0,48.453,0,96.906,0,19.034-19.171,19.014-27.316.008-54.634,0h-4.916c1.621,6.818,3.156,13.278,4.725,19.883,2.763,0,5.162.183,7.524-.033,9.124-.834,14.966,4.69,14.825,14.515,3.785,0,7.587.065,11.384-.022,2.828-.065,4.91,1.094,4.957,3.928s-1.967,4.062-4.819,4.059q-52.241-.037-104.482.007c-2.817,0-4.95-1.07-4.986-3.9-.041-3.091,2.217-4.181,5.182-4.1,3.573.1,7.151.024,11.008.024.111-1.187.213-2.185.3-3.184a11.8,11.8,0,0,1,11.714-11.263C1693.485,210.675,1696.8,210.758,1700.672,210.758Zm-66.031-54.878c0,5.51,0,10.409,0,15.307,0,9.105,2.55,11.7,11.525,11.7q72.982,0,145.962,0a29.344,29.344,0,0,0,3.585-.058c3.963-.491,7.177-2.588,7.476-6.558.5-6.671.137-13.407.137-20.385h-5.121q-58.425,0-116.85,0c-1.2,0-2.641.4-3.531-.132-1.406-.834-3.317-2.245-3.388-3.5-.075-1.323,1.508-3.146,2.844-4.016,1.053-.685,2.833-.313,4.289-.313q58.625-.016,117.249-.009h4.769v-3.837c0-24.062.032-48.123-.054-72.184-.014-3.752-1.788-7.06-5.63-7.75-4.331-.777-9.3-2.851-12.947,1.527q-16.844,20.2-33.356,40.683a5.908,5.908,0,0,0-.787,4.248c2.537,14.477-6.768,25.524-20.47,24.716-2.785-.164-5.58-.192-8.371-.211A18.381,18.381,0,0,0,1709.8,139.2c-3.356,2.73-6.369,1.721-7.309-2.551a94.824,94.824,0,0,1-2.347-14.108c-1.112-17.129,7.229-30.2,25.481-31.424,1.039-.069,2.276-1.219,2.941-2.193,5.242-7.673,10.375-15.419,15.51-23.163a12.006,12.006,0,0,0,.873-2.186c-.844-.07-1.364-.151-1.884-.151q-49.451-.011-98.9.013c-6.3.008-9.494,3.313-9.5,9.694q-.049,35.893,0,71.785c0,.889.179,1.778.308,2.989,3.489,0,6.787-.021,10.086.006,2.687.023,4.846.931,4.87,4.007s-1.985,4.027-4.783,3.972C1641.836,155.83,1638.534,155.88,1634.641,155.88Zm123.945-70.8c8.2-9.976,16.13-19.611,24.051-29.251,1.011-1.231,2.389-2.34,2.907-3.758.874-2.39,1.845-5.046,1.6-7.473-.406-4.079-3.352-6.622-7.3-7.441-4.2-.869-7.539.87-9.905,4.4Q1760.4,55.763,1750.9,70l-4.19,6.265Zm-49.416,44.47c2.546-.657,4.677-1.553,6.858-1.7,5.8-.4,11.628-.38,17.434-.714a10.486,10.486,0,0,0,9.394-7.885c1.316-4.857.1-8.814-3.584-11.558-3.185-2.375-6.338-4.8-9.6-7.066a7.247,7.247,0,0,0-3.536-1.39,16.838,16.838,0,0,0-16.723,11.594C1707.341,116.933,1707.813,123.064,1709.17,129.548Zm42.476,95.555c.176-5.071-.817-6.357-5.057-6.366q-27.475-.059-54.95,0c-4.4.01-5.557,1.646-4.715,6.365ZM1713.6,190.942c-1.53,6.55-3.018,12.923-4.54,19.441h20.168c-1.624-6.791-3.142-13.133-4.651-19.441Zm21.062-96.669,10.179,7.561,8.663-10.546-11.261-8.352Z"
                    transform="translate(-1098.355 1845.393)"
                    strokeWidth="1"
                  />
                  <path
                    id="Path_97"
                    data-name="Path 97"
                    d="M1671.017,177.451c1,1.574,2.816,3.183,2.749,4.71-.056,1.3-2.276,3.452-3.562,3.469s-3.541-2.1-3.625-3.395c-.1-1.524,1.68-3.17,2.645-4.764Z"
                    transform="translate(-1106.433 1815.341)"
                    strokeWidth="1"
                  />
                </g>
              </svg>
            </div>
            <div className="june_second_container_box_title_one">
              UI/UX Design
            </div>
            <div className="june_second_container_title_two">
              We leverage our past UI/UX experience to bring simplicity to
              highly complex designs for user-friendliness and consumer
              engagement.
            </div>
          </div>
          <div className="june_second_container">
            <div className="june_second_container_svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 219.301 219.674"
              >
                <g
                  id="Group_31"
                  data-name="Group 31"
                  transform="translate(-885.634 -3575.491)"
                >
                  <path
                    id="Path_113"
                    data-name="Path 113"
                    d="M1570.994,102.014q2.916-6.143,5.843-12.28c4.373-9.18,8.9-18.673,13.272-28.042,3.711-7.947,2.086-15.69-4.24-20.207a14.945,14.945,0,0,0-12.816-2.5,15.571,15.571,0,0,0-10.088,9.108c-3.308,7.523-6.4,14.969-9.68,22.853q-2.134,5.132-4.323,10.358l-.233.554-.462-.384a24.892,24.892,0,0,0-16.666-6.2h-.058c-23.155.044-46.694.042-69.465.04q-32.818,0-65.634.034c-14.374.024-23.663,9.4-23.666,23.874q-.015,67.133,0,134.268c0,15.076,9.39,24.442,24.5,24.445q18.87,0,37.748-.051c11.917-.025,23.991-.051,36.128-.051,19.5,0,39.174.066,58.645.3l.354,0a26.086,26.086,0,0,0,18.539-7.34c4.624-4.663,6.986-11,6.834-18.326-.5-24.026-.358-48.462-.222-72.1q.063-10.648.107-21.3a18.86,18.86,0,0,1,1.676-7.565c3.333-7.337,6.862-14.732,10.277-21.883Q1569.181,105.828,1570.994,102.014Zm-23.78,132.4c-.056,9.452-5.784,15.1-15.319,15.115-22.6.028-45.331.041-68.031.041-22.578,0-45.126-.013-67.488-.041-9.636-.012-15.17-5.507-15.182-15.077-.054-43.361-.055-88.966,0-135.547.01-9.8,5.633-15.431,15.425-15.45,40.954-.08,85.142-.072,135.089.024a18.55,18.55,0,0,1,7.226,1.558c5.459,2.387,6.46,4.941,4.124,10.511-4.36,10.4-8.87,21.156-14.413,31.864l-.841,1.625,0-6.988q0-6.018-.005-12.035c-.015-6.67-.491-7.138-7.25-7.139q-56.576-.011-113.147,0c-6.287,0-7.082.782-7.086,6.957q-.012,15.706,0,31.411c.009,5.43,1.137,6.528,6.707,6.529q40.858.011,81.717.005h32.392l-.256.617c-.346.83-.653,1.641-.951,2.428a28.6,28.6,0,0,1-2.362,5.182c-.72,1.137-2.732,1.859-4.184,1.877-7.237.085-14.6.083-21.71.077q-5.711,0-11.42.007c-5.434.015-6.611,1.2-6.623,6.672q-.009,5.253-.033,10.506c-.046,12.211-.094,24.836.142,37.246.083,4.4-1.429,7.106-5.218,9.337-2.585,1.523-3.891,2.949-3.994,4.355-.1,1.432,1.027,3.079,3.46,5.036,9.315,7.5,22.786,9.529,35.159,5.3,11.825-4.041,20.431-12.931,23.022-23.781a32.036,32.036,0,0,0,.552-7.428c0-1.45-.008-2.95.1-4.413.039-.524.065-1.057.092-1.594a17.112,17.112,0,0,1,1.061-6.178c3.831-8.456,7.913-16.967,11.861-25.2q1.959-4.084,3.911-8.169c.4-.845.831-1.677,1.26-2.509l.765-1.5,1.5.579v.306q0,11,.016,22.007C1547.306,196.852,1547.327,215.786,1547.214,234.409ZM1489.2,206.752a28.242,28.242,0,0,1,6.549-10.523c4.63-4.769,11.161-5.486,17.041-1.879,5.583,3.427,7.361,8.137,5.762,15.273-2.788,12.448-10.118,18.787-23.066,19.951-2.151.193-4.047.3-5.762.3a23.391,23.391,0,0,1-12.89-3.307l-.609-.353.581-.4C1483.476,221.222,1486.582,214.873,1489.2,206.752Zm-6.985-6.474V166.367h31.143l-1.813,4.39c-1.6,3.881-3.112,7.547-4.694,11.2-.327.754-1.239,1.827-2.1,1.882-8.991.573-15.887,5.357-21.706,15.055Zm32.116-14.633,12.616-30.118,7.77,3.681-14.286,30.2Zm5.389-53.918q.017,3.454.022,7v.445h-110.77V111.481l.382-.055c.291-.042.6-.1.918-.159a13.446,13.446,0,0,1,2.427-.295q17.63-.013,35.263-.013c22.1,0,44.943-.007,67.414-.06,1.8.016,2.861.279,3.543.977a4.3,4.3,0,0,1,.889,3.29C1519.661,120.628,1519.688,126.02,1519.715,131.728Zm25.891,4.374-6.724,14.165a2.053,2.053,0,0,1-.487.592c-.1.1-.222.212-.359.358l-.224.24-7.388-3.579.132-.375c.175-.5.338-.991.5-1.472.339-1.021.659-1.986,1.057-2.937q17.63-42.2,35.293-84.389l1.893-4.524c.4-.959.726-1.69,1.05-2.368,2.114-4.428,5.786-6.067,9.588-4.274a6.6,6.6,0,0,1,3.519,4,7.971,7.971,0,0,1-.525,5.8C1570.529,83.615,1557.859,110.3,1545.606,136.1Z"
                    transform="translate(-487.138 3537.019)"
                  />
                  <path
                    id="Path_114"
                    data-name="Path 114"
                    d="M1403.7,239.194c.017,4.395,1.394,5.809,5.669,5.823,13.077.038,27,.039,42.561,0,4.63-.011,5.9-1.3,5.9-6.018.025-21.76.024-41.593,0-60.633-.006-4.506-1.224-5.744-5.666-5.762-13.474-.052-27.394-.053-42.561,0-4.731.016-5.891,1.186-5.907,5.96q-.034,10.5-.012,21l0,8.668,0,9.26Q1403.672,228.343,1403.7,239.194Zm8.744-58.249h36.714v55.518h-36.714Z"
                    transform="translate(-490.51 3522.388)"
                  />
                </g>
              </svg>
            </div>
            <div className="june_second_container_box_title_one">
              Web & Mobile Design
            </div>
            <div className="june_second_container_title_two">
              We have designed amazing experiences for websites and web
              applications across all platforms (desktop, mobile & tablets)..
            </div>
          </div>
        </div>
        <BlockchainServices />
        <div className="june_second_main_container">
          <div className="june_second_main_all_container">
            <div className="june_third_container">
              <div className="june_third_container_title">
                Execution Process
              </div>
              <div className="june_third_container_para">
                We work with you to make appealing sites, impactful
                applications, and modern enterprise systems individuals love.
                Through your vision and our expertise, our team of business
                analysts, designers, and developers will build experiences that
                keep your customers coming back.
              </div>
            </div>
            <div className="june_third_container_first_box">
              <div className="june_third_container_first_box__colomns">
                <div className="june_third_container_first_box__colomns__heading">
                  <div className="june_third_container_first_box__colomns__heading__svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      width="40"
                      height="40"
                      className="feather feather-file-text"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                  <div className="june_third_container_first_box__colomns__heading__text">
                    Discovery
                  </div>
                </div>

                <div className="june_third_container_first_box__colomns__contents">
                  <div className="june_third_container_first_box__colomns__contents__svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-check-circle"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div className="june_third_container_first_box__colomns__contents__text">
                    Understand business pain points
                  </div>
                </div>
                <div className="june_third_container_first_box__colomns__contents">
                  <div className="june_third_container_first_box__colomns__contents__svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-check-circle"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div className="june_third_container_first_box__colomns__contents__text">
                    Interviews & observations
                  </div>
                </div>
                <div className="june_third_container_first_box__colomns__contents">
                  <div className="june_third_container_first_box__colomns__contents__svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-check-circle"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div className="june_third_container_first_box__colomns__contents__text">
                    Functional requirements
                  </div>
                </div>
              </div>
              <div className="june_third_container_first_box__colomns">
                <div className="june_third_container_first_box__colomns__heading">
                  <div className="june_third_container_first_box__colomns__heading__svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-box"
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                      <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg>
                  </div>
                  <div className="june_third_container_first_box__colomns__heading__text">
                    Wireframes
                  </div>
                </div>

                <div className="june_third_container_first_box__colomns__contents">
                  <div className="june_third_container_first_box__colomns__contents__svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-check-circle"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div className="june_third_container_first_box__colomns__contents__text">
                    Concept sketching
                  </div>
                </div>
                <div className="june_third_container_first_box__colomns__contents">
                  <div className="june_third_container_first_box__colomns__contents__svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-check-circle"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div className="june_third_container_first_box__colomns__contents__text">
                    System/Process flow
                  </div>
                </div>
                <div className="june_third_container_first_box__colomns__contents">
                  <div className="june_third_container_first_box__colomns__contents__svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-check-circle"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div className="june_third_container_first_box__colomns__contents__text">
                    Information architecture
                  </div>
                </div>
              </div>
              <div className="june_third_container_first_box__colomns">
                <div className="june_third_container_first_box__colomns__heading">
                  <div className="june_third_container_first_box__colomns__heading__svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-layout"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="3" y1="9" x2="21" y2="9"></line>
                      <line x1="9" y1="21" x2="9" y2="9"></line>
                    </svg>
                  </div>
                  <div className="june_third_container_first_box__colomns__heading__text">
                    Build & Iterate
                  </div>
                </div>
                <div className="june_third_container_first_box__colomns__contents">
                  <div className="june_third_container_first_box__colomns__contents__svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-check-circle"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div className="june_third_container_first_box__colomns__contents__text">
                    Interaction design
                  </div>
                </div>
                <div className="june_third_container_first_box__colomns__contents">
                  <div className="june_third_container_first_box__colomns__contents__svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-check-circle"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div className="june_third_container_first_box__colomns__contents__text">
                    High-fidelity mockups
                  </div>
                </div>
                <div className="june_third_container_first_box__colomns__contents">
                  <div className="june_third_container_first_box__colomns__contents__svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-check-circle"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div className="june_third_container_first_box__colomns__contents__text">
                    Interactive prototypes
                  </div>
                </div>
                <div className="june_third_container_first_box__colomns__contents">
                  <div className="june_third_container_first_box__colomns__contents__svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-check-circle"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div className="june_third_container_first_box__colomns__contents__text">
                    UI Style guide/brand identity
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="june_fourth_container_box">
          <div className="june_fourth_container_box_one">
            <div className="june_fourth_container_box_title">
              Talk to us about your <span>challenges</span> and{" "}
              <span>we will bring an</span> incredible team.
            </div>
          </div>
          <div className="june_fourth_container_box_button_cotainer">
            <Link to="/contact-us" className="june_fourth_container_box_button">
              Let's Talk
            </Link>
          </div>
        </div>
        <div className="june_main_container_images">
          <div className="june_first_container_images">
            <img
              className="june_first_container_images_one"
              src={pencilpic}
              alt="s"
            />
            <div className="june_main_container_images_content_main">
              <div className="june_second_container_images_one_content_container">
                <div className="june_main_container_images_content_One">
                  Pencil sketch
                </div>
                <div className="june_main_container_images_content_two">
                  Back of the napkin designs
                </div>
              </div>
            </div>
          </div>
          <div className="june_first_container_images">
            <img
              className="june_first_container_images_one"
              src={imagepng2}
              alt="s"
            />
            <div className="june_main_container_images_content_main">
              <div className="june_second_container_images_one_content_container">
                <div className="june_main_container_images_content_One">
                  High Fidelity Wireframes
                </div>
                <div className="june_main_container_images_content_two">
                  More realistic content closer to the end result.
                </div>
              </div>
            </div>
          </div>
          <div className="june_first_container_images">
            <img
              className="june_first_container_images_one"
              src={imagepng3}
              alt="s"
            />
            <div className="june_main_container_images_content_main">
              <div className="june_second_container_images_one_content_container">
                <div className="june_main_container_images_content_One">
                  Pixel Perfect Mockups
                </div>
                <div className="june_main_container_images_content_two">
                  Fully visualize the look and feel of your final product.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="june_main_container_first_container">
          <div className="june_main_container_first_container_title">
            Design Work
          </div>
          <div className="june_main_container_para">
            <p className="june_main_container_first_container_para">
              You can now bring your apps to life with our intuitive and
              intricate designs, just like some of our below clients.
            </p>
          </div>
        </div>
        <div className="ecommerce__screen__container__recent__work">
          <div className="ecommerce__screen__container__recent__work__content">
            <div className="ecommerce__screen__container__recent__work__content___row">
              <EcomereceProjectsCard image="https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
              <EcomereceProjectsCard image="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            </div>
            <div className="ecommerce__screen__container__recent__work__content___row ecommerce__screen__container__recent__work__content___row__reverse">
              <EcomereceProjectsCard image="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80" />
              <EcomereceProjectsCard image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80" />
            </div>
            <div className="ecommerce__screen__container__recent__work__content___row">
              <EcomereceProjectsCard image="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
              <EcomereceProjectsCard image="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            </div>
            <div className="ecommerce__screen__container__recent__work__content___row ecommerce__screen__container__recent__work__content___row__reverse">
              <EcomereceProjectsCard image="https://images.unsplash.com/photo-1519222970733-f546218fa6d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
              <EcomereceProjectsCard image="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
