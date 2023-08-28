import React from "react";
import Image from "next/Image";
import indie1 from "../images/indie1.png";
import indie2 from "../images/indie2.png";
import indie3 from "../images/indie3.png";
import indie4 from "../images/indie4.png";
import indie5 from "../images/indie5.png";
import indie6 from "../images/indie6.png";

const data = [
  {
    id: 1,
    title: "Indie 1",
    img: (
      <Image
        alt="Indie 1"
        src={indie1}
        width={275}
        height={350}
        className="w-[275px] h-[350px] object-cover mx-auto rounded"
      />
    ),
  },
  {
    id: 2,
    title: "Indie 2",
    img: (
      <Image
        alt="Indie 2"
        src={indie2}
        width={275}
        height={350}
        className="w-[275px] h-[350px] object-cover mx-auto rounded"
      />
    ),
  },
  {
    id: 3,
    title: "Indie 3",
    img: (
      <Image
        alt="Indie 3"
        src={indie3}
        width={275}
        height={350}
        className="w-[275px] h-[350px] object-cover mx-auto rounded"
      />
    ),
  },
  {
    id: 4,
    title: "Indie 4",
    img: (
      <Image
        alt="Indie 4"
        src={indie4}
        width={275}
        height={350}
        className="w-[275px] h-[350px] object-cover mx-auto rounded"
      />
    ),
  },
  {
    id: 5,
    title: "Indie 5",
    img: (
      <Image
        alt="Indie 5"
        src={indie5}
        width={275}
        height={350}
        className="w-[275px] h-[350px] object-cover mx-auto rounded"
      />
    ),
  },
  {
    id: 6,
    title: "Indie 6",
    img: (
      <Image
        alt="Indie 6"
        src={indie6}
        width={275}
        height={350}
        className="w-[275px] h-[350px] object-cover mx-auto rounded"
      />
    ),
  },
];

function adopt() {
  return (
    <div className="bg-[#E5E5E5]">
      <div>
        <h2 className="font-semibold text-center p-4">
          Choose Your Paw Partner!
        </h2>
      </div>
      <div className="">
        <div className="p-8">
          <div className="grid grid-cols-4 gap-4 w-full">
            {data &&
              data.map((ele) => (
                <div
                  key={ele.id}
                  className="rounded-xl bg-white p-4 drop-shadow-xl hover:drop-shadow-none"
                >
                  <div className="">{ele.img}</div>
                  <div className="flex justify-between p-2">
                    <div>
                      <div>{ele.title}</div>
                    </div>
                    <div>
                      <div>
                        <button className="border border-[#8D4DF4] bg-[#8D4DF4] text-white hover:bg-white hover:text-[#8D4DF4] hover:border-[#8D4DF4] px-2 ease-in-out duration-300">
                          Adopt
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default adopt;
