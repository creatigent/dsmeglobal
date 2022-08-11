import React, { useState } from "react";
import { WebdevArrEntry } from "../components/WebdevArrEntry";

export function EmergingTechnologiesWebDev() {
  const [selected, setSelected] = useState("AR VR");
  const array = [
    {
      label: "AR VR",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 166.185 103.878"
          fill="currentColor"
        >
          <g
            id="Group_40"
            data-name="Group 40"
            transform="translate(-100.084 -2458.504)"
          >
            <path
              id="Union_3"
              data-name="Union 3"
              d="M93.651,271.629q-3.1-.077-6.2-.147c-4.038-.084-7.8-1.884-11.512-5.5-1.726-1.683-3.453-3.421-5.125-5.1-1.619-1.628-3.293-3.313-4.964-4.946a11.8,11.8,0,0,0-8.234-3.725,11.768,11.768,0,0,0-8.212,3.713c-3.46,3.384-6.53,6.455-9.387,9.387-4.024,4.13-8.452,6.257-13.164,6.318q-2.087.027-4.175.059c-9.977.145-20.3.3-30.389-.332-9.479-.589-17.215-9.257-17.246-19.32-.062-20.452-.063-41.684,0-63.105A20.022,20.022,0,0,1-5.01,169.03c14.753-.04,29.752-.032,44.259-.023q9.149.005,18.3.006h.226l17.391,0q22.051,0,44.1,0c12.136.007,20.949,8.778,20.959,20.857q.022,30.421,0,60.842c-.005,11.78-7.45,20.146-18.526,20.82-4.255.258-8.554.349-12.848.349C103.746,271.882,98.652,271.755,93.651,271.629ZM-3.554,178.16c-7.795,0-12.268,4.487-12.272,12.3q-.019,29.935,0,59.869c0,7.764,4.36,12.266,11.954,12.352,3.854.042,7.74.057,11.607.057,3.249,0,6.484-.01,9.667-.019q3.441-.011,6.884-.017a12.5,12.5,0,0,0,9.438-4c2.887-3,6.1-6.219,9.83-9.836a19.905,19.905,0,0,1,28.168.017c2.9,2.813,6.313,6.155,9.593,9.612a13.145,13.145,0,0,0,10,4.216q5.4-.012,10.8,0c5.475.008,11.138.017,16.707-.028,7.781-.062,12.245-4.578,12.249-12.391q.016-29.773,0-59.546c0-8.234-4.369-12.588-12.629-12.591q-22.17-.008-44.341,0H22.347Q9.4,178.154-3.554,178.16Zm26.918,56.9A18.328,18.328,0,0,1,5.04,216.689a18.6,18.6,0,0,1,18.339-18.182A18.315,18.315,0,0,1,41.581,217,18.032,18.032,0,0,1,23.4,235.062Zm-9.636-18.189a9.578,9.578,0,0,0,9.594,9.5,9.326,9.326,0,0,0,9.566-9.413,9.554,9.554,0,0,0-9.325-9.758l-.223,0A9.9,9.9,0,0,0,13.728,216.873Zm74.606,18.188A18.035,18.035,0,0,1,70.26,216.855a18.318,18.318,0,0,1,18.062-18.347,18.585,18.585,0,0,1,18.48,18.326,18.331,18.331,0,0,1-18.363,18.228Zm.1-27.864a9.56,9.56,0,0,0-9.481,9.608,9.32,9.32,0,0,0,9.414,9.561,9.577,9.577,0,0,0,9.748-9.342,9.887,9.887,0,0,0-9.645-9.827Z"
              transform="translate(125.54 2290)"
              stroke="rgba(0,0,0,0)"
              strokeMiterlimit="10"
              strokeWidth="1"
            />
          </g>
        </svg>
      ),
      info: "We study changes in consumer perspective to build a cost-effective, robust and game-changing AR/VR solutions for a variety of products and services.",
    },
    {
      label: "Blockchain",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 163.531 163.412"
          fill="currentColor"
        >
          <path
            id="Union_2"
            data-name="Union 2"
            d="M108.59,331.09c-2.57-1.451-5.188-2.92-7.721-4.34-2.595-1.455-5.278-2.96-7.914-4.449a9.543,9.543,0,0,1-3.729-3.631A10.283,10.283,0,0,1,88,313.652c-.01-1.349-.007-2.7,0-4.137,0-.361,0-.727,0-1.1H25.538c0,.345,0,.687,0,1.022.005,1.489.011,2.894-.012,4.326a9.425,9.425,0,0,1-5.045,8.594l-.182.1c-4.975,2.795-10.12,5.684-15.167,8.546a9.918,9.918,0,0,1-4.9,1.4,9.584,9.584,0,0,1-4.75-1.337c-2.431-1.379-4.912-2.766-7.313-4.107-2.732-1.526-5.558-3.105-8.325-4.683a9.482,9.482,0,0,1-3.616-3.478,9.6,9.6,0,0,1-1.208-4.9c.023-5.906.04-12.245-.005-18.591a9.792,9.792,0,0,1,1.313-5.191,10.216,10.216,0,0,1,3.906-3.614c1.745-.968,3.514-1.966,5.224-2.933,3.053-1.724,6.21-3.508,9.362-5.188,1.361-.724,1.731-1.3,1.724-2.658-.078-15.625-.081-32.026-.008-50.139a2.285,2.285,0,0,0-1.512-2.464c-2.853-1.5-5.7-3.117-8.457-4.675-2.006-1.134-4.081-2.308-6.134-3.427A9.677,9.677,0,0,1-25,205.673c.091-5.682.07-11.283.011-17.946a9.22,9.22,0,0,1,4.933-8.644c2.114-1.2,4.269-2.4,6.352-3.571,2.954-1.655,6.008-3.366,8.995-5.075a9.959,9.959,0,0,1,4.965-1.421,10.04,10.04,0,0,1,4.976,1.418c4.868,2.767,9.853,5.558,14.818,8.294a9.875,9.875,0,0,1,5.492,9.349c-.02,1.266-.015,2.535-.01,3.878q0,.462,0,.94H87.994c0-.321,0-.64,0-.954-.005-1.417-.012-2.881.011-4.317a9.4,9.4,0,0,1,5.064-8.58c6.042-3.381,10.918-6.129,15.347-8.647a9.882,9.882,0,0,1,4.9-1.4,9.6,9.6,0,0,1,4.752,1.337c2.366,1.338,4.782,2.687,7.117,3.99,2.8,1.562,5.692,3.177,8.526,4.789a9.387,9.387,0,0,1,3.611,3.495,9.694,9.694,0,0,1,1.193,4.9c-.02,5.866-.032,12.179,0,18.592a9.227,9.227,0,0,1-4.955,8.631c-1.473.831-2.976,1.666-4.429,2.474-3.5,1.946-7.119,3.959-10.6,6.045a3.344,3.344,0,0,0-1.407,2.13c-.113,16.257-.114,33.33-.008,50.747a3.031,3.031,0,0,0,1.233,1.933c5.082,3.018,10.291,5.874,14.773,8.315a10.293,10.293,0,0,1,4.127,3.851,10.4,10.4,0,0,1,1.284,5.5c-.094,6.058-.058,12.188-.011,17.947a9.231,9.231,0,0,1-4.925,8.653c-3.2,1.814-6.471,3.643-9.63,5.412-1.972,1.1-4.01,2.245-6.013,3.371a9,9,0,0,1-9.361-.02ZM-17.553,302.747c-.024,3.908-.048,7.6.12,11.238a3.794,3.794,0,0,0,1.709,2.244c5.355,3.226,9.867,5.751,14.2,7.948a4.235,4.235,0,0,0,1.8.361,3.774,3.774,0,0,0,1.622-.314c5.107-2.586,10.161-5.529,14.5-8.084a3.332,3.332,0,0,0,1.477-1.7c.138-3.884.12-7.842.1-11.669,0-.916-.008-1.855-.011-2.791-.732.412-1.463.845-2.177,1.266a44.8,44.8,0,0,1-6.148,3.215c-4.94,1.966-6.633,4.713-5.662,9.189a2.326,2.326,0,0,1-.28,2.1c-.668.765-1.4,1.473-2.1,2.159-.251.244-.51.5-.761.744l-.761.755-.7-.81c-.238-.276-.534-.554-.846-.849a5.5,5.5,0,0,1-1.887-2.666,17.245,17.245,0,0,1-.193-4.074c.026-.815.05-1.585.007-2.345a2.46,2.46,0,0,0-.412-1.265c-3.669-2.094-7.41-4.126-11.37-6.277l-2.212-1.2Q-17.542,301.364-17.553,302.747ZM95.5,302.665c-.033,3.637-.065,7.071.131,10.472a4.728,4.728,0,0,0,1.809,3.128c4.424,2.782,9.1,5.41,13.885,7.811a4.822,4.822,0,0,0,2.05.418,3.928,3.928,0,0,0,1.664-.318c4.917-2.449,9.647-5.227,14.223-7.915a5.481,5.481,0,0,0,1.147-.911,1.634,1.634,0,0,0,.471-.71c.145-3.923.128-7.859.11-12.026,0-.863-.008-1.743-.01-2.636-.491.285-.97.57-1.441.849a42.171,42.171,0,0,1-5.881,3.09c-5.818,2.306-7.786,5.351-6.795,10.512a3.291,3.291,0,0,1-.715,2.284,4.751,4.751,0,0,1-2.6,2.053,3.832,3.832,0,0,1-.676.063c-1.993,0-3.3-1.7-3.343-4.321-.011-.714-.005-1.436,0-2.133.009-1.152.018-2.343-.047-3.495a3.515,3.515,0,0,0-.3-1.393c-3.739-2.148-7.531-4.215-11.545-6.4l-2.114-1.152Q95.517,301.324,95.5,302.665Zm16.91-18.277c-4.025,2.137-7.986,4.357-12.179,6.708l-2.621,1.468q1.412.794,2.771,1.563c3.8,2.146,7.386,4.173,11.03,6.076a4.876,4.876,0,0,0,2.09.5,1.9,1.9,0,0,0,.852-.151c3.927-2,7.762-4.145,11.821-6.419q1.378-.772,2.81-1.572l-2.659-1.5c-4.126-2.326-8.023-4.523-11.957-6.627a2.439,2.439,0,0,0-1.066-.213A2.052,2.052,0,0,0,112.414,284.387ZM-.4,284.252c-4.177,2.237-8.3,4.533-12.672,6.965l-2.395,1.332q1.435.8,2.82,1.583c3.918,2.2,7.619,4.286,11.408,6.211a3.325,3.325,0,0,0,1.424.271,4.174,4.174,0,0,0,1.8-.37c3.727-1.912,7.365-3.965,11.215-6.141.9-.508,1.817-1.026,2.749-1.55l-2.408-1.343c-4.32-2.411-8.4-4.688-12.551-6.922a1.756,1.756,0,0,0-.765-.148A1.454,1.454,0,0,0-.4,284.252Zm25.918-82.88c-.02,1.013-.036,1.887.032,2.745.427,5.351-1.76,9.147-6.69,11.6-4.81,2.4-9.452,5.143-13.358,7.512A3.4,3.4,0,0,0,4.1,225.4c-.112,16.264-.114,33.33-.007,50.722a3.045,3.045,0,0,0,1.232,1.956c3.982,2.361,8.11,4.64,12.1,6.845q1.473.813,2.944,1.627a9.57,9.57,0,0,1,5.165,8.863c.01,1.424.007,2.867,0,4.264,0,.307,0,.614,0,.922H88q.005-.285.011-.562c.019-1.023.037-1.989-.034-2.922a11.317,11.317,0,0,1,1.352-6.768,11.979,11.979,0,0,1,5.195-4.6c2.506-1.266,5-2.69,7.411-4.067,1.974-1.127,4.015-2.291,6.065-3.373a2.3,2.3,0,0,0,1.556-2.462c-.029-7.122-.035-14.361-.04-21.362-.007-9.524-.015-19.372-.081-29.055a3.365,3.365,0,0,0-1.372-2.187c-4.043-2.42-8.251-4.737-12.321-6.977q-1.22-.672-2.442-1.346a9.7,9.7,0,0,1-5.308-9.116c.007-1.343.005-2.673,0-4.081,0-.32,0-.644,0-.971H25.53C25.527,200.962,25.523,201.168,25.52,201.372Zm-43.078-6.341c-.023,3.894-.046,7.573.114,11.212a3.723,3.723,0,0,0,1.609,2.276c5.058,3.052,9.788,5.707,14.459,8.115a3.963,3.963,0,0,0,1.717.352,3.167,3.167,0,0,0,1.371-.262c4.464-2.295,9.147-4.921,14.738-8.265a3.365,3.365,0,0,0,1.45-2.032c.142-3.742.124-7.5.1-11.486,0-.875-.009-1.768-.012-2.674-.76.442-1.5.882-2.225,1.313a59.823,59.823,0,0,1-7.684,4.089c-3.472,1.431-4.636,3.4-4.15,7.024.218,1.621.516,3.84-.719,5.283a3.731,3.731,0,0,1-2.9,1.2c-.047,0-.094,0-.139,0a3.643,3.643,0,0,1-2.894-1.14c-1.237-1.422-.916-3.7-.7-5.215.52-3.707-.679-5.733-4.279-7.225a62.984,62.984,0,0,1-7.735-4.087c-.689-.4-1.392-.819-2.11-1.231Q-17.549,193.681-17.558,195.031Zm113.071.02c-.026,3.783-.05,7.355.117,10.893a3.949,3.949,0,0,0,1.606,2.59c4.674,2.854,9.536,5.583,14.452,8.111a3.873,3.873,0,0,0,1.672.339,3.252,3.252,0,0,0,1.415-.274c4.487-2.308,9.169-4.934,14.738-8.265a3.383,3.383,0,0,0,1.461-2.035c.143-3.739.124-7.489.1-11.459,0-.875-.009-1.768-.012-2.674l-14.041,7.754c.007.561.023,1.126.039,1.678a33.22,33.22,0,0,1-.174,5.746,4.855,4.855,0,0,1-1.905,2.673,11.17,11.17,0,0,0-.867.832l-.706.79-.748-.75c-.262-.262-.542-.516-.839-.783a10.1,10.1,0,0,1-2.057-2.281,5.118,5.118,0,0,1-.207-3.479c.68-3.54-.535-5.58-3.935-6.614a4.6,4.6,0,0,1-1.166-.6c-.14-.09-.272-.175-.4-.244l-8.073-4.455-.463-.255Q95.523,193.7,95.513,195.051Zm16.339-17.993c-3.809,1.972-7.543,4.071-11.5,6.294l-2.77,1.555,2.579,1.436c4.139,2.309,8.049,4.488,12.045,6.591a2.835,2.835,0,0,0,2.127,0c3.994-2.092,7.913-4.267,12.061-6.57l2.6-1.442q-1.411-.8-2.772-1.568c-3.965-2.245-7.711-4.367-11.525-6.348a3.018,3.018,0,0,0-1.322-.257A3.524,3.524,0,0,0,111.851,177.058ZM-1.308,177.1c-3.723,1.91-7.386,3.982-11.264,6.177q-1.395.79-2.849,1.609l1.487.849c2.012,1.15,3.913,2.236,5.816,3.281,1.276.7,2.336,1.3,3.271,1.838,2.651,1.513,3.982,2.272,5.111,2.273s2.417-.742,5.008-2.219c.957-.545,2.042-1.165,3.361-1.885,1.918-1.048,3.81-2.146,5.814-3.309l1.442-.836q-1.438-.81-2.822-1.6c-3.866-2.188-7.516-4.254-11.24-6.167A3.69,3.69,0,0,0,.235,176.8,3.6,3.6,0,0,0-1.308,177.1ZM62.775,284.578A127.406,127.406,0,0,1,49.581,271.3a17,17,0,0,1-2.49-4.549,13.368,13.368,0,0,0-2.412-4.266,12.223,12.223,0,0,0-4.138-2.289,15.9,15.9,0,0,1-4.452-2.378,136.257,136.257,0,0,1-13.072-12.937,19.779,19.779,0,0,1,28.018-27.869,138.379,138.379,0,0,1,12.722,12.839,17.058,17.058,0,0,1,2.467,4.544,13.165,13.165,0,0,0,2.412,4.281,13.145,13.145,0,0,0,4.277,2.417,17.029,17.029,0,0,1,4.54,2.47,162.758,162.758,0,0,1,13.02,12.855l.051.054c3.463,3.686,5.09,8.224,5.118,14.281v.036l0,.035a20.074,20.074,0,0,1-3.126,9.78,19.566,19.566,0,0,1-8.439,7.058,20.685,20.685,0,0,1-8.62,2A19.017,19.017,0,0,1,62.775,284.578Zm-18.2-58.9c2.73,2.624,5.431,5.358,8.044,8l1.792,1.812c2.529,2.551,3.757,4.8,3.866,7.082s-.9,4.642-3.162,7.451c-4.463,5.534-4.235,12.135.6,17.226,3.5,3.685,7.235,7.422,11.11,11.106a13.265,13.265,0,0,0,9.122,3.783,12.159,12.159,0,0,0,8.707-3.684c4.809-4.878,4.749-12.449-.138-17.611-4.014-4.24-7.725-7.934-11.345-11.294a19.768,19.768,0,0,0-3.6-2.422c-.3-.171-.6-.345-.9-.524l-.695,2.681c1.382,1.354,2.743,2.683,4.064,3.971,3.324,3.243,6.464,6.305,9.574,9.452a10.558,10.558,0,0,1,3.3,6.842,8.227,8.227,0,0,1-.58,3.492,9.283,9.283,0,0,1-2.06,3.094,8.607,8.607,0,0,1-6.2,2.7,10.45,10.45,0,0,1-7.234-3.239c-3-2.894-5.97-5.9-8.846-8.813l-.988-1c-2.451-2.478-3.643-4.7-3.753-6.982s.862-4.6,3.056-7.313c4.622-5.7,4.4-12.232-.6-17.462-3.335-3.491-6.9-7.054-10.891-10.892a13.365,13.365,0,0,0-9.245-3.869,12.153,12.153,0,0,0-8.594,3.571c-4.955,4.909-4.9,12.574.137,17.831,4.371,4.568,7.8,7.981,11.132,11.071a21.324,21.324,0,0,0,3.63,2.507c.312.187.629.377.951.573l.685-2.751c-1.41-1.385-2.8-2.736-4.139-4.046-3.328-3.247-6.473-6.315-9.572-9.462a10.267,10.267,0,0,1-3.2-7.234A9.177,9.177,0,0,1,37.5,222.54,10.238,10.238,0,0,1,44.579,225.674Zm19.4,31.126a5.436,5.436,0,0,0-.919.7,3.576,3.576,0,0,0,.668,2.444c2.241,2.409,4.627,4.774,6.935,7.06,1.049,1.039,2.135,2.115,3.194,3.182a3.17,3.17,0,0,0,1.957,1.149,1.477,1.477,0,0,0,1.016-.5,1.587,1.587,0,0,0,.587-1.1,3.384,3.384,0,0,0-1.252-2.074c-1.268-1.258-2.551-2.543-3.791-3.786-1.956-1.96-3.979-3.988-5.991-5.954a9.925,9.925,0,0,0-1.526-1.122q-.22-.142-.448-.292C64.257,256.612,64.112,256.709,63.976,256.8Zm-27.1-26.292a3.331,3.331,0,0,0-.4,1.969c4.569,4.91,8.418,8.751,12.108,12.085a.9.9,0,0,0,.623.257,1.394,1.394,0,0,0,.969-.478,2.154,2.154,0,0,0,.573-1.514c-.009-.046-.017-.092-.024-.136a2.079,2.079,0,0,0-.054-.254l-1.6-1.631c-3.41-3.469-6.935-7.057-10.535-10.434a1.825,1.825,0,0,0-.564-.069A2.59,2.59,0,0,0,36.874,230.508Z"
            transform="translate(25 -169)"
          />
        </svg>
      ),
      info: "We provide blockchain consulting services and customized solutions for businesses, startups and enterprises to transform the way they operate.",
    },
    {
      label: "Internet of things",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 143.757 144.452"
          fill="currentColor"
        >
          <g id="Group_21" data-name="Group 21" transform="translate(0)">
            <path
              id="Path_76"
              data-name="Path 76"
              d="M1776.94,146.931c-5.021,0-9.888.006-14.755,0-13.592-.018-25.21-9.7-26.97-22.481-1.942-14.09,6.162-26.49,19.855-30.2,1.732-.469,2.52-1.02,2.869-2.993,3.39-19.155,16.036-32.611,34.731-36.466,13.571-2.8,25.806.606,36.605,9.337a6.04,6.04,0,0,0,4.169,1.346c17.873-2.86,34.425,11.68,33.818,29.942a4.609,4.609,0,0,0,1.789,4.262,26.738,26.738,0,0,1-17.583,47.255c-4.872.007-9.745,0-14.808,0a20.937,20.937,0,0,0-.267,2.278c-.02,5.92-.12,11.842.074,17.755.041,1.251,1.056,2.559,1.862,3.665.525.719,1.551,1.049,2.237,1.678,2.272,2.082,4.351,2.718,7.6,1.309,5.091-2.2,10.926.149,14.091,4.718a12.763,12.763,0,0,1-.531,15.207,12.583,12.583,0,0,1-14.471,3.8,12.209,12.209,0,0,1-7.9-12.658c.213-2.074-.263-3.314-2.029-4.374-1.924-1.155-3.575-2.784-5.534-3.861-3.142-1.727-4.028-4.251-3.935-7.692.193-7.13.058-14.268.058-21.616H1811.01v17.762c0,1.128.083,2.263-.016,3.381-.287,3.231.249,5.573,3.589,7.517,4.528,2.635,5.928,8.988,4.091,14.057a12.63,12.63,0,0,1-23.942-.447c-1.663-5.128.021-11.212,4.6-13.926,2.836-1.68,3.354-3.605,3.277-6.545-.187-7.217-.061-14.442-.061-21.837h-16.914v5.214c0,6.013-.042,12.027.016,18.04a5.663,5.663,0,0,1-2.671,5.218c-2.424,1.605-4.7,3.443-7.139,5.017a3.414,3.414,0,0,0-1.674,3.719,12.524,12.524,0,0,1-11.028,13.886c-6.567.774-12.969-4.019-13.9-10.406-1.052-7.212,3.216-13.624,10.3-14.637,2.528-.362,5.255.767,7.905,1.106a4.794,4.794,0,0,0,2.9-.187c6.861-4.437,6.84-4.473,6.836-12.654q0-6.624-.033-13.247A10.583,10.583,0,0,0,1776.94,146.931Zm45.265-77.6c-8.908-6.26-18.406-8.515-28.76-6.084-21,4.929-32.361,25.8-25.431,46.435,1.138,3.388.387,5.66-2.173,6.583-2.441.88-4.731-.515-5.78-3.837-1.033-3.273-1.8-6.63-2.679-9.95-9.248,2.14-14.873,10.41-13.793,20.265.957,8.737,8.881,15.719,18.068,15.73q45.075.057,90.151,0a18.16,18.16,0,0,0,18.337-17.88,16.828,16.828,0,0,0-5.107-13.058c-2.268,2.907-4.128,5.765-6.5,8.1a4.909,4.909,0,0,1-4.479.7,5.509,5.509,0,0,1-2.391-3.927c-.123-1.1,1.049-2.515,1.935-3.539,9.373-10.842,5.876-27.634-7.185-33.354-8.484-3.716-16.3-2.067-23.231,3.993-2.25,1.966-4.8,1.993-6.476.1-1.57-1.774-1.338-4.282.717-6.229C1818.845,72.034,1820.41,70.841,1822.206,69.332Zm-56.373,116.145a4.162,4.162,0,1,0-4.208,4.319A4.237,4.237,0,0,0,1765.832,185.477Zm40.923,4.319a4.228,4.228,0,1,0-4.133-4.392A4.221,4.221,0,0,0,1806.756,189.8Zm49.293-4.267a4.167,4.167,0,1,0-4.265,4.267A4.25,4.25,0,0,0,1856.049,185.529Z"
              transform="translate(-1734.929 -53.831)"
            />
            <path
              id="Path_77"
              data-name="Path 77"
              d="M1840.492,115.043c10.046.3,18.907,3.546,26.244,10.555,2.4,2.292,2.632,4.729.748,6.632-1.831,1.848-4.1,1.691-6.476-.447-12.179-10.979-28.757-11.02-40.77-.1-2.49,2.264-4.856,2.426-6.68.456-1.809-1.953-1.518-4.3.939-6.629C1821.78,118.606,1830.558,115.385,1840.492,115.043Z"
              transform="translate(-1768.718 -80.53)"
            />
            <path
              id="Path_78"
              data-name="Path 78"
              d="M1849.841,145.059a21.939,21.939,0,0,1,14.189,5.537c2.277,2.038,2.621,4.482.979,6.451-1.62,1.944-4,1.947-6.464.008-5.917-4.664-11.51-4.68-17.371-.051-2.491,1.967-4.823,2-6.47.1-1.74-2.011-1.344-4.507,1.086-6.641A21.849,21.849,0,0,1,1849.841,145.059Z"
              transform="translate(-1777.982 -93.622)"
            />
            <path
              id="Path_79"
              data-name="Path 79"
              d="M1863.309,179.268a4.158,4.158,0,0,1-8.312.246,4.159,4.159,0,1,1,8.312-.246Z"
              transform="translate(-1787.299 -106.74)"
            />
          </g>
        </svg>
      ),
      info: "Our team of engineers can help you build fully customized products/apps with interconnectivity between all known tech and non-tech devices.      ",
    },
    {
      label: "Artificial intelligence",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 148.214 148.413"
          fill="currentColor"
        >
          <path
            id="Path_103"
            data-name="Path 103"
            d="M770.949,183.916c-8.4,10.61-18.833,14.869-31.791,10.871-11.733-3.621-17.921-13.026-18.948-27.98a29.313,29.313,0,0,1-14.7-7.322,27.28,27.28,0,0,1-3.926-35.32c.89-1.332,1.28-2.2.242-3.774-11-16.651-2.919-37.352,16.453-42.389.649-.169,1.279-.407,1.981-.633.022-13.109,5.613-22.894,18.036-27.48,13.209-4.878,24.058-.378,32.663,10.446,8.827-11.052,19.9-15.447,33.252-10.234,11.953,4.667,17.392,14.286,17.433,27.291,1.2.323,2.474.637,3.731,1.011A27.464,27.464,0,0,1,840.4,119.967c-1.065,1.609-1.183,2.572-.056,4.262a27.379,27.379,0,0,1-16.276,41.952c-.821.206-1.619.5-2.391.748-.153,13.328-5.813,23.116-18.463,27.6C790.141,199.155,779.515,194.612,770.949,183.916Zm-4.33-61.688c0-5.5.019-10.995,0-16.493-.045-10.7.23-21.423-.273-32.105-.469-9.964-9.368-17.295-19.512-16.9a18.914,18.914,0,0,0-17.823,18.551c-.009,1.694.476,2.531,2.3,2.958a24.368,24.368,0,0,1,11.951,6.667c.762.77,1.712,2.032,1.557,2.882a7.183,7.183,0,0,1-2.13,4.268c-1.951,1.466-3.9.386-5.656-1.15-7.926-6.919-19.228-6.484-26.306.923s-6.9,18.775.422,26.32c2.983,3.074,2.924,4.873-.064,8.058-5.17,5.51-6.915,11.919-4.536,19.182,4.259,13,19.976,17.044,30.582,7.929,2.534-2.177,5.109-2.276,6.851-.262a4.238,4.238,0,0,1-1.03,6.528,82.589,82.589,0,0,1-11.776,6.43c-1.476.676-2.147,1.2-2.172,2.792-.155,9.724,8.12,18.4,17.933,18.741,11.116.384,19.579-7.948,19.655-19.6C766.692,152.706,766.617,137.466,766.619,122.228Zm8.431-33.374c2.427,0,4.068-.11,5.688.025,2.476.207,4.033-.365,5.532-2.812,4.912-8.019,16.835-7.722,21.775.278A13,13,0,1,1,785.861,99.9c-.556-.9-1.415-2.14-2.243-2.23a75.839,75.839,0,0,0-8.123-.107V117.8c6.04,0,11.9-.1,17.746.051a4.153,4.153,0,0,0,4.307-2.414A12.762,12.762,0,0,1,812,109.549a13.092,13.092,0,0,1,9.535,12.069,12.814,12.814,0,0,1-8.837,12.83c-5.338,1.806-11.636.1-14.525-4.769-1.7-2.871-3.64-3.339-6.494-3.239-4.431.155-8.871.031-13.307.049-.929,0-1.857.113-2.853.178v20.072c2.011,0,3.834-.139,5.627.035,2.355.228,3.742-.482,5.012-2.694,2.967-5.164,9.505-7.231,15.126-5.247a12.807,12.807,0,0,1,8.683,12.653,12.97,12.97,0,0,1-24.019,6.446c-.578-.91-1.355-2.269-2.156-2.356a72.524,72.524,0,0,0-7.961-.113c0,6.211-.829,12.117.183,17.689,1.774,9.762,11.985,16.045,21.334,14.1,10.617-2.2,16.916-11.269,15.268-21.976-.835-5.428.16-6.669,5.627-7.021,8.1-.52,13.9-4.533,16.824-12.032,2.943-7.542,1.164-14.375-4.4-20.209-2.81-2.944-2.826-4.869.1-7.842a18.542,18.542,0,0,0,5.6-12.636c.393-10.668-7.52-18.962-18.525-19.55-4.823-.258-6.151-1.9-5.28-6.548a18.824,18.824,0,0,0-14.2-22.185c-10.058-2.289-20.23,3.574-22.306,13.709C774.885,76.617,775.341,82.6,775.05,88.854ZM797.1,97.462a4.269,4.269,0,1,0-4.36-4.031A4.206,4.206,0,0,0,797.1,97.462ZM808.574,126.4a4.267,4.267,0,1,0-4.256-4.422A4.186,4.186,0,0,0,808.574,126.4Zm-7.3,24.627a4.266,4.266,0,1,0-4.359,4.316A4.187,4.187,0,0,0,801.273,151.031Z"
            transform="translate(-696.839 -47.917)"
          />
        </svg>
      ),
      info: "Owing to the growing demand for intelligent applications, systems and products our engineers are experienced enough to construct robust artificial intelligent solutions.      ",
    },
    {
      label: "Machine learning",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 148.361 148.413"
          fill="currentColor"
        >
          <g
            id="Group_22"
            data-name="Group 22"
            transform="translate(-795.794 -72.947)"
          >
            <path
              id="Path_104"
              data-name="Path 104"
              d="M865.509,215.163c-4.947,3.888-10.1,6.157-16,6.2-10.12.068-17.686-4.447-22.995-13.017a5.51,5.51,0,0,0-3.1-2.448c-12.547-2.374-21.365-12.748-21.267-25.464a9.837,9.837,0,0,0-1.8-6.111,25.723,25.723,0,0,1,3.681-33.463c.7-.658,1.424-1.288,2.282-2.062a27.678,27.678,0,0,1-3.087-15.024,25.535,25.535,0,0,1,17.484-22.3c1.409-.465,2.445-.716,2.521-2.74.39-10.372,5.041-18.375,14.423-23,9.3-4.582,18.311-3.393,26.68,2.7.3.218.642.378,1.233.72.829-3.388,3.235-3.932,6.183-3.847,4.533.129,9.072,0,13.608.05,3.19.036,4.692,1.567,4.892,4.795.268,4.332.573,8.663.79,13,.082,1.623.943,2.285,2.278,3.17,4.481,2.973,8.051,2.574,11.422-1.728a34.239,34.239,0,0,1,5.373-4.829c2.641-2.184,4.5-2.2,6.852.138q6.579,6.523,12.98,13.225c2.028,2.119,1.991,4.1.028,6.428-2.549,3.024-5.106,6.047-7.79,8.95-1.211,1.31-1.614,2.411-.631,4.053a13.441,13.441,0,0,1,2.084,4.731c.6,4.352,3.228,5.431,7.121,5.374a82.024,82.024,0,0,1,8.947.577c2.961.282,4.384,1.76,4.41,4.646q.084,9.41,0,18.821c-.027,2.712-1.479,4.3-4.242,4.522-4.229.346-8.471.582-12.683,1.075a3.528,3.528,0,0,0-2.305,1.771,67.462,67.462,0,0,0-3.371,8.27,3.986,3.986,0,0,0,.465,3.207c2.5,3.181,5.267,6.155,7.889,9.244,2.172,2.559,2.134,4.433-.2,6.852q-6.134,6.353-12.371,12.606c-2.643,2.651-4.462,2.758-7.275.362-3.085-2.627-6.006-5.449-9.137-8.016a3.841,3.841,0,0,0-2.907-.453c-5.758,1.308-8.021,4.907-7.265,10.812.324,2.532-.254,5.187-.476,7.782-.243,2.831-1.818,4.333-4.717,4.369-4.729.058-9.462-.078-14.188.056C868.483,219.243,866.435,218.4,865.509,215.163ZM811.38,183.655c.745,7.235,7.4,13.527,15.086,13.781,3.847.127,5.583,1.576,6.995,4.995a16.405,16.405,0,0,0,26.4,5.93c1.961-1.775,3.275-4.264,5-6.578-1.5-.736-2.29-1.086-3.042-1.5a16.387,16.387,0,0,1-8.4-10.887,6.952,6.952,0,0,1,.665-4.882,4.391,4.391,0,0,1,3.919-1.464c1.389.428,2.611,1.971,3.5,3.3a52.46,52.46,0,0,1,2.958,5.726l.924-.389a8.225,8.225,0,0,0,.218-1.331c.016-8.3.074-16.607-.069-24.907a3.672,3.672,0,0,0-1.913-2.577c-5.143-2.351-8.679-6.075-10.113-11.545a6.682,6.682,0,0,1,.248-4.665,4.871,4.871,0,0,1,3.96-2.049c1.377.236,2.777,1.777,3.665,3.09a49,49,0,0,1,3.055,6.071l.944-.4V109.722a12.8,12.8,0,0,0-8.155,9.409c-.5,2.094-1.249,3.894-3.619,4.346-3.59.684-5.946-2.293-4.877-6.358,2.089-7.949,7-13.4,14.851-15.99,1.391-.459,2.072-.921,2.046-2.52a17.137,17.137,0,0,0-12.8-16.3A16.615,16.615,0,0,0,834,90.7a17.461,17.461,0,0,0,4.519,21.9c2.333,1.873,2.553,4.428.973,6.342-1.713,2.074-4.4,2.332-6.595.121a53.626,53.626,0,0,1-6.549-8c-1.044-1.565-1.824-1.776-3.44-1.183a17.363,17.363,0,0,0-9.695,23.149,2.26,2.26,0,0,0,2.829,1.552,43.435,43.435,0,0,1,9.17-.224c2.826.272,4.107,2.285,3.772,4.827-.324,2.45-2.125,3.623-5.045,3.6a28.521,28.521,0,0,0-6.869.461c-9.063,2.2-14.477,12.036-11.912,21.308a16.811,16.811,0,0,0,20.315,11.788c1.94-.524,2.4-1.344,2.1-3.226A13.128,13.128,0,0,1,830.3,162.8c2.058-2.7,4.508-3.3,6.711-1.751,2.143,1.511,2.263,4.015.329,6.863-1.832,2.7-1.638,6.044.718,7.771a9.3,9.3,0,0,0,3.723,1.278c3.047.576,4.61,2.147,4.44,4.705-.172,2.61-2.173,4.278-5.348,3.888-2.239-.275-4.388-1.243-6.6-1.832-.863-.23-1.936-.643-2.643-.34A26.019,26.019,0,0,1,811.38,183.655Zm109.709,4.313c-2.82-3.3-5.486-6.593-8.344-9.71-2.084-2.273-2.064-4.353-.708-7.066a101.956,101.956,0,0,0,5.2-12.483c1.392-4.058,2.163-4.874,6.5-5.086,3.827-.187,7.65-.476,11.484-.72V141.525c-4.279-.254-8.322-.509-12.367-.728-2.948-.159-4.561-1.5-5.516-4.488a112.036,112.036,0,0,0-5.457-13.3c-1.169-2.5-1.206-4.5.684-6.6,2.892-3.217,5.654-6.551,8.354-9.7l-7.9-7.909c-3.137,2.764-6.371,5.519-9.492,8.4-2.073,1.911-4.041,2.037-6.54.69a101.724,101.724,0,0,0-10.461-4.811,5.407,5.407,0,0,1-3.859-5.417c-.147-4.491-.594-8.973-.912-13.435h-7.206v26.94c23.117,2.381,33.67,20.186,33.952,34.922a35.722,35.722,0,0,1-6.473,21.784c-6.69,9.528-16.1,14.307-27.457,15.354V210.23h7.205c.319-4.509.782-8.826.875-13.152.065-3.052,1.326-4.728,4.163-5.793a70.338,70.338,0,0,0,9.935-4.574c2.7-1.531,4.78-1.346,7.015.753,3.059,2.874,6.283,5.571,9.286,8.212ZM874.753,120.2v54.124a26.927,26.927,0,0,0,25.056-27.552C899.511,132.355,888.787,121.1,874.753,120.2Z"
              transform="translate(0)"
            />
          </g>
        </svg>
      ),
      info: "Incorporate machine learning into your current or planned product development initiatives for better user experience, decision making and consumer retention and loyalty.      ",
    },
    {
      label: "Big data",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 150.275 150.286"
          fill="currentColor"
        >
          <path
            id="Union_4"
            data-name="Union 4"
            d="M37.277,318.423a80.606,80.606,0,0,1-12.343-2.754,44.722,44.722,0,0,1-5.4-2.2l-.056-.026a15.37,15.37,0,0,1-6.75-5.415,14.4,14.4,0,0,1-2.129-8.655c.266-8,.206-16.16.148-24.05-.023-3.2-.049-6.517-.05-9.777,0-.539-.035-1.09-.072-1.671-1.411-.054-2.812-.081-4.172-.106a75.01,75.01,0,0,1-10.658-.7,23.842,23.842,0,0,1-13.6-7.078,27.161,27.161,0,0,1-6.877-14.154c-1.709-9.736,3.559-20.437,12.526-25.444,1.443-.806,1.724-1.533,1.79-3.175a33.376,33.376,0,0,1,1.3-8.472,4.2,4.2,0,0,1,1.713-2,4.936,4.936,0,0,1,2.472-.883c.054,0,.109,0,.161.005a3.178,3.178,0,0,1,2.355,1.166,4.681,4.681,0,0,1,.712,3.686c-.088.555-.186,1.12-.281,1.665a26.276,26.276,0,0,0-.595,6.641,7.492,7.492,0,0,1-.736,4.625,7.377,7.377,0,0,1-3.784,2.918,16.969,16.969,0,0,0-10.032,17.239c.582,7.291,5.961,13.829,12.512,15.209A63.147,63.147,0,0,0,6.36,256c1.415.046,2.868.094,4.344.175.009-1.212.033-2.392.056-3.541a86.778,86.778,0,0,0-.126-9.06,15.609,15.609,0,0,1,.294-4.86,11.945,11.945,0,0,1,1.725-3.983,16.538,16.538,0,0,1,6.935-5.512,54.018,54.018,0,0,1,13.022-4.16,92.068,92.068,0,0,1,13.455-1.472c1.658-.076,3.3-.114,4.892-.114a76.656,76.656,0,0,1,25.674,4.052,41.057,41.057,0,0,1,5.927,2.659,13.881,13.881,0,0,1,5.524,5,12.736,12.736,0,0,1,1.654,7.43c-.179,3.145-.137,6.272-.093,9.584.016,1.174.032,2.38.038,3.6.762.059,1.517.088,2.254.088a24.551,24.551,0,0,0,15.449-5.275,25.56,25.56,0,0,0-13.774-45.856,5.856,5.856,0,0,1-3.78-1.344,6.381,6.381,0,0,1-1.744-3.421c-2.945-12.335-10.566-19.886-22.653-22.446a33.358,33.358,0,0,0-6.885-.751c-9.092,0-16.87,4.165-23.119,12.379-1,1.315-2.3,2.66-4.383,2.66a6.718,6.718,0,0,1-2.354-.483,21.754,21.754,0,0,0-7.661-1.384,25.43,25.43,0,0,0-6.773.96,7.943,7.943,0,0,1-2.092.332,3.4,3.4,0,0,1-3.5-2.887,3.529,3.529,0,0,1,.733-3.473A6.067,6.067,0,0,1,12.3,183.37a31.1,31.1,0,0,1,16.218-.205,3.392,3.392,0,0,0,.819.121c.548,0,.916-.229,1.573-.977a40.523,40.523,0,0,1,12.684-9.919A34.053,34.053,0,0,1,58.566,169a41.4,41.4,0,0,1,8.346.885,36.467,36.467,0,0,1,17.7,8.787,39.2,39.2,0,0,1,10.42,16.91,2.208,2.208,0,0,0,2.2,1.8,33.22,33.22,0,0,1,28.041,32.559,34.029,34.029,0,0,1-2.055,11.827,33.169,33.169,0,0,1-5.8,10.021,32.831,32.831,0,0,1-8.871,7.4,33.256,33.256,0,0,1-11.263,3.954c-1.822.293-3.661.422-5.608.56-.648.045-1.311.092-1.993.147v2.37c0,3.3-.017,6.662-.033,9.909-.039,7.847-.079,15.962.113,23.929a13.514,13.514,0,0,1-1.858,7.647,14.68,14.68,0,0,1-5.726,5.114,43.558,43.558,0,0,1-9.327,3.706,69.3,69.3,0,0,1-9.746,1.886,105.865,105.865,0,0,1-13.365.882A88.685,88.685,0,0,1,37.277,318.423ZM18.491,298.145c0,6.1.461,6.786,6.164,9.155.737.307,1.507.557,2.363.83a73.772,73.772,0,0,0,22.405,3.443,83.45,83.45,0,0,0,13.382-1.11,83.538,83.538,0,0,0,14.822-4.393l1.171-.426a5.037,5.037,0,0,0,2.828-2.993,55.9,55.9,0,0,0,.209-8.188c-.014-.625-.029-1.262-.04-1.9a96,96,0,0,1-15.12,4.335,84.158,84.158,0,0,1-32.956-.013A96.454,96.454,0,0,1,18.491,292.5Zm0-21.043c0,3.182.152,5.019.983,6.238s2.508,2.056,5.5,3.259c.522.21,1.1.416,1.831.649a73.921,73.921,0,0,0,22.623,3.494,84.8,84.8,0,0,0,13.451-1.1,81.207,81.207,0,0,0,14.434-4.245l1.294-.468c1.3-.468,2.849-1.978,2.964-2.885a57,57,0,0,0,.216-8.368c-.014-.634-.03-1.28-.04-1.927a95.658,95.658,0,0,1-15.1,4.337,84.071,84.071,0,0,1-32.939-.018,96.487,96.487,0,0,1-15.218-4.379Zm.06-25.376a26.31,26.31,0,0,1-.135,5.13c-.676,4.26,1.028,6.762,5.882,8.636.86.331,1.75.674,2.65.965a73.054,73.054,0,0,0,22.449,3.45,88.439,88.439,0,0,0,13.633-1.1c5.295-.83,10.561-2.768,15.207-4.478,1.471-.541,3.195-2.229,3.354-3.284a45.884,45.884,0,0,0,.242-8.164c-.018-.649-.037-1.31-.049-1.975a95.276,95.276,0,0,1-15.08,4.34,84.175,84.175,0,0,1-32.951-.009,97.212,97.212,0,0,1-15.235-4.361C18.528,251.162,18.539,251.446,18.551,251.726Zm13.055-18.32a43.975,43.975,0,0,0-11.15,4.494c-1.223.67-1.917,1.409-1.953,2.081-.038.715.629,1.588,1.879,2.456A23.9,23.9,0,0,0,25.263,245c7.659,3.014,15.6,3.9,25.148,4.289,1.539-.157,3.1-.274,4.621-.385a68.994,68.994,0,0,0,10.364-1.29,71.507,71.507,0,0,0,14.6-5.242c1.171-.56,1.842-1.252,1.891-1.949.055-.775-.633-1.7-1.886-2.526a25.939,25.939,0,0,0-6.429-3.181,76.49,76.49,0,0,0-22.99-3.532A84.754,84.754,0,0,0,31.605,233.405Z"
            transform="translate(25 -169)"
          />
        </svg>
      ),
      info: "Make better and faster data driven decisions to help support your businesses with our capability of building products/applications that rely on big data analytics.      ",
    },
  ];
  return (
    <div style={{ backgroundcolor: "#242424", width: "100%" }}>
      <div className="container__emerging__technologies">
        <div className="container__emerging__technologies__heading__main">
          Emerging<span> Technologies</span>
        </div>
        <div className="container__emerging__technologies__text__main">
          We constantly push our limits and explore emerging technologies to
          build a solution that you help our clients stay ahead of the game.
        </div>
        <div className="container__emerging__technologies__section">
          {array?.map((item, i) => (
            <WebdevArrEntry
              label={item.label}
              svg={item.svg}
              selected={selected}
              setSelected={setSelected}
              key={i}
            />
          ))}
        </div>
        {array
          ?.filter((item) => item.label === selected)
          ?.map((item, i) => (
            <div
              className="container__emerging__technologies__section__entry__data"
              key={i}
            >
              <div className="container__emerging__technologies__section__entry__data___heading">
                {item.label}
              </div>
              <div className="container__emerging__technologies__section__entry__data__text">
                {item.info}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
