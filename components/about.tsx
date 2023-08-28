import React from "react";
import Image from "next/image";
import banner from "../images/banner.png";

function about() {
  return (
    <section className="bg-gradient-to-r from-[#8D4DF4]">
      <div className="grid grid-cols-3 gap-4">
        <div className="px-12 col-span-2">
          <div>
            <h1 className="text-left pb-4 font-extrabold">Adopt, don't Shop</h1>
          </div>
          <div className="text-justify">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              fermentum mattis sapien, tempus tempor quam. Sed congue velit
              imperdiet mi scelerisque dictum. Fusce in mi magna. In molestie
              eros urna, a accumsan nibh lacinia in. Mauris ex sapien, pulvinar
              sit amet urna ac, feugiat scelerisque libero. Sed lobortis eros
              sit amet ante finibus, a dictum nulla fermentum. Nam sit amet
              dapibus est. Vestibulum vel condimentum mauris. Proin elementum
              eleifend lectus, ac luctus neque faucibus vitae. Curabitur dictum
              eleifend lorem nec euismod. Ut metus nisi, ullamcorper sed felis
              vel, eleifend accumsan dolor. Mauris tristique, ante ac sodales
              suscipit, ex enim pretium ipsum, vel blandit quam mi eu erat.
              Donec maximus at orci sit amet sodales.
            </p>
            <p>
              In interdum nibh ac ante mattis, sed scelerisque erat interdum.
              Curabitur suscipit finibus nulla, ac posuere ex tempor vel.
              Maecenas iaculis turpis sit amet est mollis cursus eu euismod
              tellus. Cras ac magna fringilla, vestibulum orci et, faucibus
              sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec dapibus eu urna eu sodales. Donec tincidunt consequat
              feugiat. Etiam gravida feugiat magna, eu placerat augue tristique
              eu. Nam vitae eros nisi. Praesent ac nibh nisi. Cras id ante non
              nisl lobortis maximus. Proin rutrum lobortis malesuada. Ut dictum
              lorem id euismod rhoncus.
            </p>
          </div>
        </div>
        <div>
          <Image
            alt="poodles banner"
            src={banner}
            width={300}
            height={300}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default about;
