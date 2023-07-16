import React from 'react'
import house from '../../assets/images/house-2.jpg'
import house2 from '../../assets/images/house-3.jpg'
import { Link } from 'react-router-dom';

function ItemCard() {
  return (
    <div className='px[6%] md:px-[9%] bg-white p-6 w-full flex flex-col shadow rounded'>
        <div className='flex items-center justify-between md:mx-16 mx-6'>
            <h3 className='font-bold md:text-2xl text-xl ml-[-9px]'>Recently Added</h3>
            <span className='text-[#00befe] text-sm'>See all</span>
        </div>
        {/* Recent items */}
        <div className='mt-4 flex items-center justify-center flex-wrap gap-5 p-4 pb-5 '>
            {/* item */}
            <div className='flex flex-col md:flex-row gap-6  overflow-hidden w-[480px] md:h-[200px] h-auto bg-white shadow-lg border-2 hover:border-[#00befe] p-4 rounded-xl hover:scale-[0.98] cursor-pointer transition-all'>
                <img src={house} alt="" className='w-full h-[200px] md:w-[160px] md:h-full rounded-xl bg-auto bg-no-repeat bg-center'/>
                <div className='flex flex-col gap-4 md:gap-7 w-full h-full'>
                    <div className='flex flex-col gap-3'>
                        <h3 className='font-bold text-2xl'>103/143 West Street, <br/>Crows Nest</h3>
                        <span className='text-sm text-[#acacac]'>10 bedroom</span>
                    </div>
                    <div className='flex items-center justify-between'>
                        <span className='text-sm text-[#acacac]'>Landlord Name</span>
                        <button className='py-2 px-3 bg-slate-500 text-white rounded-lg'>$220.09</button>
                    </div>
                </div>
            </div>

            <div className='flex flex-col md:flex-row gap-6  overflow-hidden w-[480px] md:h-[200px] h-auto bg-white shadow-lg border-2 hover:border-[#00befe] p-4 rounded-xl hover:scale-[0.98] cursor-pointer transition-all'>
                <img src={house} alt="" className='w-full h-[200px] md:w-[160px] md:h-full rounded-xl bg-auto bg-no-repeat bg-center'/>
                <div className='flex flex-col gap-4 md:gap-7 w-full h-full'>
                    <div className='flex flex-col gap-3'>
                        <h3 className='font-bold text-2xl'>103/143 West Street, <br/>Crows Nest</h3>
                        <span className='text-sm text-[#acacac]'>10 bedroom</span>
                    </div>
                    <div className='flex items-center justify-between'>
                        <span className='text-sm text-[#acacac]'>Landlord Name</span>
                        <button className='py-2 px-3 bg-slate-500 text-white rounded-lg'>$220.09</button>
                    </div>
                </div>
            </div>

            <div className='flex flex-col md:flex-row gap-6  overflow-hidden w-[480px] md:h-[200px] h-auto bg-white shadow-lg border-2 hover:border-[#00befe] p-4 rounded-xl hover:scale-[0.98] cursor-pointer transition-all'>
                <img src={house} alt="" className='w-full h-[200px] md:w-[160px] md:h-full rounded-xl bg-auto bg-no-repeat bg-center'/>
                <div className='flex flex-col gap-4 md:gap-7 w-full h-full'>
                    <div className='flex flex-col gap-3'>
                        <h3 className='font-bold text-2xl'>103/143 West Street, <br/>Crows Nest</h3>
                        <span className='text-sm text-[#acacac]'>10 bedroom</span>
                    </div>
                    <div className='flex items-center justify-between'>
                        <span className='text-sm text-[#acacac]'>Landlord Name</span>
                        <button className='py-2 px-3 bg-slate-500 text-white rounded-lg'>$220.09</button>
                    </div>
                </div>
            </div>



        </div>
  
    </div>
    
    )
}

export default ItemCard