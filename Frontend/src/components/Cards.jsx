import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-5 my-4 p-3">
        <div className="card bg-base-100 w-90 shadow-xl hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline text-black bg-blue-200">
                ₹{item.price}
              </div>
              <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-400 hover:text-white duration-200">
                View Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
