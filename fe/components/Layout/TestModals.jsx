import React, { useState } from "react";
import { AiFillFire } from "react-icons/ai";
import Tetris from "../../public/tetris.gif";
import Image from "next/image";
import Router, { useRouter } from 'next/router';

const TestModals = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex items-start justify-left mt-96 md:flex-row ">
      <div className="fixed flex gap-5">
        <button
          className="flex items-center justify-center h-48 gap-2 px-6 font-bold text-white rounded-md shadow outline-none bg-amber-500 active:bg-black hover:bg-black hover:shadow-lg focus:outline-none"
          type="button"
          onClick={() => setShowModal(true)}

        >
          게임을 시작해볼까? <AiFillFire className="text-xl" />
        </button>

      </div>
      {showModal ? (
        <div className="fixed flex flex-row items-center justify-center h-auto p-2 text-black rounded-lg shadow-xl ml-60 ">
          <Image src={Tetris} width={200} height={250} objectFit="high" />
          <h2 className="mx-4 mt-2 text-base font-semibold text-center --tw-text-opacity=2">
            신나는 테트리스 게임!!
          </h2>
          <div>
            <button
              className="h-10 my-5 rounded-md shadow text-Red bg-neutral-300 hover:shadow-lg"
              onClick={() => {
                setShowModal(false)
                window.open('http://localhost:3000/', 'popUpWindow', 'width=700, height=1000')
                
              }}
            >
              Start
            </button></div>

          <div>
            <button
              className="my-10 text-white rounded-md shadow h-11 bg-neutral-500 hover:shadow-lg"
              onClick={() => {
                setShowModal(false)
                Router.push("/")
              }}
            >
              Back
            </button>
          </div>
        </div>
      ) : null}

    </div>
  )
}

export default TestModals
