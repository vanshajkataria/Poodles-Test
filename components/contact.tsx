import React from "react";

function contact() {
  return (
    <div className="bg-gradient-to-b from-[#8D4DF4]">
        <div className="text-center pb-2">
            <h2 className="font-semibold">Contact Us</h2>
            <p className="font-light">Adopt Don't Shop</p>
        </div>
      <div className="w-full">
        <div className="flex justify-center p-4">
          <form action="submit" method="get">
            <div className="flex gap-4">
              <div className="flex flex-col">
                <label htmlFor="name">Name</label>
                <input type="text" name="Name" id="name" className="border border-[#8D4DF4] rounded-xl px-4" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input type="email" name="Email" id="email" className="border border-[#8D4DF4] rounded-xl px-4" />
              </div>
            </div>
            <div className="flex justify-center p-4">
              <button type="submit" className="rounded-xl border border-[#8D4DF4] bg-[#8D4DF4] text-white hover:bg-white hover:text-[#8D4DF4] hover:border-[#8D4DF4] px-2 ease-in-out duration-300">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default contact;
