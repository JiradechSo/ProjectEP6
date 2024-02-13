import axios from "axios";
import React from "react";

export default function WareHouseCard(props) {
  const { el, openModal, setTrigger } = props;

  const hdlDelete = async e => {
    try {
      e.stopPropagation()
      const token = localStorage.getItem('token')
      let rs = await axios.delete(`http://localhost:8889/ware/${el.id}`, {
        headers : { Authorization : `Bearer ${token}`}
      })
      setTrigger(prv=>!prv)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div
      className={`card bg-white shadow-xl mx-auto cursor-pointer
      active:shadow-none active:translate-x-2 active:translate-y-1`}
      // onClick={() => openModal(el.id)}
    >
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-name bg-blue-600 pr-10 pl-10 rounded-xl text-white items-center flex text-3xl font-bold">{el.name}</h2>
          <div className=" flex flex-col">
          <div className="badge bg-red-600 border-none text-base text-white font-bold ml-3 w-16 p-4  " onClick={hdlDelete}>ลบ</div>
          <div className="badge bg-yellow-400 border-none text-base font-bold text-white w-16 ml-3 mt-4 p-4" onClick={() => openModal(el.id)}>แก้ไข</div>
          </div>
        </div>
      </div>
    </div>
  );
}
