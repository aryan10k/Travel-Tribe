import React from 'react'


const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-10' 
    style={{
        backgroundPosition:'bottom',
        backgroundSize: 'cover'
        }}>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            <div>
                <h1 className='font-bold text-4xl mb-4'><span className='text-blue-500'>Travel</span>Tribe</h1>
                <p className='text-sm'>We're dedicated to making your travel dreams come true with expertly curated tours and unforgettable experiences, with love from your very own tribe.</p>
            </div>
           
            <div>
                <h3 className='text-lg font-semibold mb-4'>Contact Us</h3>
                <ul className='space-y-2 text-sm'>
                    <li>mohali, City, Country</li>
                    <li>Phone: +91 7973 567 785</li>
                    <li>Email: kondal.aryan@gmail.com</li>
                </ul>
            </div>
           
        </div>
        <div className='mt-8 pt-8 border-t border-gray-700 text-center justify-end text-sm'>
            <p>&copy; {new Date().getFullYear()} TravelEase. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
