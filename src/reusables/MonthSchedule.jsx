import React from 'react'

const MonthSchedule = ({data,title}) => { 
  return (
    <div className=" bg-white drop-shadow-md border border-gray-100 px-4 lg:px-8 py-4 md:py-8 flex-1 rounded-lg h-fit">
          <h6 className=" border-b border-gray-200 py-2">{title} This Month</h6>
          <div className=" space-y-6 mt-4">
            {data.slice(0, 4).map((item, idx) => {
              const [month,day]=item.date.split(" ");
              return (
                <div className=" flex flex-row items-center sm:items-start  gap-4  " key={idx}>
                  <section className=" sm:w-[14%] mr-auto sm:mx-0">
                    <p
                      className={`font-[500] caption ${
                        idx > 0 ? "bg-gray-200" : "bg-indigo-400 text-white"
                      } sm:w-[3.3rem] h-fit  text-center sm:py-1.5 sm:px-1.5 px-6 py-3 rounded-lg `}
                    >
                      {month}<br/> <span className=" text-[20px] font-semibold">{day}</span>
                    </p>
                  </section>
                  <section
                    className={` md:border-l-2 border-b-2 md:border-b-0 border-gray-200 pb-3 p-2 flex-1 space-y-1.5 sm:space-y-3 ${
                      idx === 0 ? " md:bg-indigo-50" : " md:bg-gray-100"
                    }`}
                  >
                    <p className=" text-gray-500 font-[500] font-jamjure text-[12px]">
                      {item.time}
                    </p>
                    <p className=" font-semibold font-poppins">  {item.title || item.name || item.title}</p>
                    <p className=" line-clamp-2 caption">{item.desc || item.status }</p>
                  </section>
                </div>
              );
            })}
          </div>
        </div>
  )
}

export default MonthSchedule
