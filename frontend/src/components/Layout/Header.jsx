import React, { useState } from 'react'
import styles from '../../styles/styles'
import { Link } from 'react-router-dom'

const Header = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchData, setSearchData] = useState(null);
    return (
        <div className={`${styles.section}`}>
            <div className='hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between'>
                <div>
                    <Link to="/" >
                        <img src="https://shopo.quomodothemes.website/assets/images/logo.svg" alt="" />
                    </Link>
                </div>
                {/* Search box */}
                <div className='w-[50%] relative'>
                    <input type="text" placeholder="Search Product..." className='h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md' />
                </div>
            </div>
        </div>
    )
}

export default Header