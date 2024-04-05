import React, { useState } from 'react'

const FooterOne = () => {
    const [arr] = useState([
        'Luggage Bags', 'Cabin Bags', 'Laptop Bags',
        'Duffle Bags', 'Backpacks', 'Hard Trolley Bags',
        'Lock for Bags', 'Soft Trolley Bags',
        'Casual Backpacks', 'Trekking Bags',
        'School Bags', 'College Bags', 'Office Bags',
        'Wheel Duffle Bags', 'Kids Backpack',
        'Briefcase Bags', 'Sling Bags', 'Travel Neck Pillow',
        'Travel Eye Mask',
        'Large Trolley Bags',
        'Medium Size Trolley Bags',
        'Weekender Bags', 'Travel Bags for Short Trips', 'Luggage for Long Trip', 'Kids Luggage'
    ])
    return (
        <div className='bg-[#272727;]'>
            <div className="w-[85%] m-auto py-6 gap-2 flex flex-col justify-center items-start" >
                <strong className='text-white'>POPULAR SEARCHES</strong>
                <ul className='flex gap-2 flex-wrap'>
                    {arr.map((item, i) => <li key={i} className='text-white cursor-pointer text-sm flex my-2' ><p className='underline px-2'>{item}</p>| </li>)}
                </ul>
            </div>
            <div className="w-[85%] m-auto py-6 gap-2 flex flex-col justify-center items-start">
                <strong className='text-white'>BUY TRAVEL BAGS & LUGGAGE ONLINE IN INDIA AT AMERICAN TOURISTER</strong>
                <div className="max-h-[130px] overflow-x-auto">
                    <div className='text-white text-sm'>People traveling to different places often focus on selecting the perfect destination, planning activities, and choosing accommodations. One aspect that they often overlook is the choice of luggage. A comfortable and well-designed suitcase is a fundamental part of any successful trip. Imagine effortlessly gliding through airports, maneuvering crowded streets, and neatly organizing your belongings in a thoughtfully designed suitcase. A comfortable luggage trolley ensures that you can fully enjoy the journey, as it takes away the hassle and stress of managing your luggage.
                        <p>
                            The right suitcase is not just a travel accessory; it's your reliable partner in creating memorable travel experiences. Thus, American Tourister provides high-quality, lightweight, and exclusively featured travel trolley bags that can enhance your travel experience, whether you are alone or with kids.</p>
                        <br />
                        <strong>  LUGGAGE BAGS TO MEET TRAVEL NEEDS</strong>
                        <p>
                            Whether you're going on a short weekend getaway or a month-long expedition, having the right luggage size is crucial. For short trips and keeping your essentials close, a cabin size trolley bag is perfect. To acquire a balance between space and convenience, prefer medium luggage, ideal for trips lasting several days to a week. Large suitcases are generous in size; these suitcases are ideal for extended vacations, family travel, or journeys requiring extra packing space. With features like TSA Lock, Expander, Double Wheels, Garment Suiter, and Eco-Friendly, you can also buy trolley bags based on their type. Hard luggage offers durability and impact resistance, ensuring your belongings remain secure throughout your journey. On the other hand, a soft trolley suitcase is lightweight and versatile, perfect for travelers who prefer adaptability.
                        </p>
                        <br />
                        <strong> BACKPACKS TO LOOK PRACTICAL AND STYLISH</strong>
                        <p>
                            Whether you're exploring the urban jungle, embarking on a hiking adventure, or simply commuting to work, a well-chosen backpack can make a world of difference in your journey. The beauty of backpacks lies in their practicality. They come in various types and colors, each tailored to meet a specific need and style. Casual backpacks are perfect for everyday use, while laptop backpacks offer dedicated compartments to safeguard your tech gear. Weekender and trekking backpacks are built to handle the rigors of outdoor exploration. Additionally, backpacks often feature handy extras like rain covers and USB charge ports, ensuring you stay connected and prepared while on the move.</p>
                        <br />
                        <strong>DUFFLES TO ACQUIRE VERSATILITY</strong>
                        <p>
                            Duffles are highly adaptable bags designed to accommodate various travel scenarios, from weekend getaways to sports activities and everything in between. Wheeled duffle bags offer the convenience of easy transportation with sturdy wheels that can handle different terrains. They are perfect for travelers who want to roll their luggage effortlessly, sparing themselves the strain of carrying a heavy bag. On the other hand, weekender duffle bags are compact and stylish, ideal for shorter trips or as a carry-on option for both men and women. They often come with creative designs and practical features.</p>

                        <strong> FAQS</strong>
                        <p> WHAT TYPES OF MATERIALS ARE COMMONLY USED IN HARD LUGGAGE?
                            Polypropylene and polycarbonate are common materials used in hard trolley bags online.
                        </p>

                        <strong> WHAT IS THE PRICE OF YOUR TROLLEY BAG?</strong>
                        <p>
                            Our trolley bag price ranges from INR 2000 to INR 25000, depending on the type you choose.
                        </p>

                        <strong>WHY SHOULD I PREFER WEEKENDER/TREKKING BACKPACKS FOR TRIPS?</strong>
                       <p> Weekender/trekking backpacks are designed for outdoor adventures and may include features like rain covers and eco-friendly materials.</p>

                        <strong>DO YOU PROVIDE LAPTOP TROLLEY BAGS AS WELL?</strong>
                        <p> Yes, we provide stylish laptop trolly bags like Chole to enhance your travel experience while you are on a business trip.</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default FooterOne 
