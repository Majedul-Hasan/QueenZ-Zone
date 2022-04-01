import React from "react";
import SingleProductHomePage from "./SingleProductHomePage";

export default function ShowProductCategory() {
  const allProductList = [
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      discount: "42",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "423",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "5"],
      reviewRate: "423",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "4", "5"],
      reviewRate: "423",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "4", "5"],
      reviewRate: "4",
    },
  ];

  return (
    <div>
      <div
        className="p-2"
        style={{
          width: "100%",

          display: "flex",
          overflow: "scroll",
        }}
      >
        {allProductList.map((dt) => (
          <SingleProductHomePage dt={dt}></SingleProductHomePage>
        ))}
      </div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi optio ab
      quibusdam totam rerum, provident voluptatum, illo mollitia obcaecati eius
      repudiandae architecto autem iusto incidunt, maxime unde nesciunt soluta
      molestiae doloribus illum blanditiis nulla voluptates alias. Commodi saepe
      eius dignissimos tempore nam excepturi quam tenetur aperiam, reiciendis,
      ipsam minima ex maxime tempora corporis omnis. Ratione possimus expedita
      voluptas ab iure exercitationem. Ad eos in alias doloremque beatae sit.
      Cum nostrum dolore consequatur, cupiditate, nemo nihil libero placeat
      voluptates vitae nobis quam, illo inventore doloribus distinctio sunt
      fugiat autem recusandae nisi sapiente totam esse aperiam quod nulla
      consectetur. Voluptatibus possimus fugiat iure porro magnam rem, iste aut
      hic ipsam perspiciatis ex praesentium quod non corporis neque! Et delectus
      qui odio itaque accusamus nulla consectetur laboriosam! Quasi, nemo
      mollitia alias ipsum atque voluptatum voluptas perferendis ea dolore a
      culpa repellendus eligendi similique tempora soluta fugiat eaque sequi
      dolorum quia voluptates unde veniam eius beatae. Quo, consectetur
      reiciendis aperiam dolor cupiditate eos nostrum accusantium, quos ut velit
      repellendus labore quia numquam incidunt. Rem debitis labore, praesentium
      reprehenderit sed iusto suscipit deleniti laudantium aut, molestiae
      voluptas, illo porro consectetur ducimus delectus dolore ullam modi ut
      libero harum distinctio. Nostrum nam reiciendis, eius corporis
      repellendus, ratione modi quo fugit repudiandae dicta nobis alias eos odit
      blanditiis perspiciatis? Tenetur perferendis vero porro dignissimos
      dolorem autem ab consequatur, amet ipsam repellendus adipisci obcaecati
      magni, facere placeat pariatur explicabo iusto error consectetur! Velit
      ducimus numquam repellat, pariatur cumque architecto, adipisci optio
      commodi dolor quos hic. Cumque laboriosam, autem voluptates aperiam velit
      suscipit necessitatibus eveniet recusandae molestiae, culpa assumenda
      perferendis. Dolorem deserunt dignissimos illo fugiat ratione tempore ut
      pariatur nulla nobis eaque reprehenderit maxime ab labore, optio beatae
      rerum. Dolores, rerum enim expedita distinctio aperiam cumque placeat
      animi assumenda laboriosam atque unde iusto nisi illo officiis facilis, ut
      eos neque fugit voluptates incidunt fugiat exercitationem modi eveniet.
      Excepturi, odio ratione dolore debitis, veritatis repellendus similique
      esse, id laboriosam deserunt error incidunt vero maxime ea accusamus.
      Ducimus expedita eaque laboriosam fugiat sequi natus! Assumenda veritatis
      unde repellat labore eaque magnam ipsam, architecto deleniti? Vel aut
      distinctio possimus placeat, illo blanditiis minus laboriosam commodi et
      cum consequatur impedit cumque nemo reiciendis totam, animi amet maxime
      nisi? Modi, natus consequuntur! Odit laudantium, minima tempora quisquam,
      repellendus, sit animi quia praesentium sequi veniam quas adipisci
      consequatur earum officia quaerat eligendi. Aliquid, nam commodi. Nesciunt
      exercitationem earum minus itaque inventore quam officiis, temporibus
      numquam dolores ea harum soluta? Quo amet corporis vel fuga, velit magni
      reprehenderit qui sequi architecto ex, eveniet animi? Eaque, dignissimos!
      Natus aliquam consequuntur ipsa alias nostrum cupiditate at velit, saepe
      quis enim quaerat ducimus. Doloribus voluptatibus, asperiores a accusamus,
      expedita nobis eos sunt, explicabo amet distinctio pariatur dignissimos
      mollitia totam blanditiis autem! Placeat aut labore corporis deleniti
      quidem numquam eos! Ad neque atque voluptate. Neque sit cumque repellat
      quibusdam reiciendis quos eius earum rem culpa est, rerum totam sed
      voluptatem repellendus. Maxime minus cumque ut laboriosam, quasi magnam
      consequatur molestiae ipsam dolore repellendus, vel veniam. Molestiae
      minima tempore itaque. Debitis!
    </div>
  );
}
