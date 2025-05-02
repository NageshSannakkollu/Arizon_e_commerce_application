import { useState } from 'react'
import {Dialog,DialogPanel,PopoverGroup,} from '@headlessui/react'
import {Bars3Icon,XMarkIcon} from '@heroicons/react/24/outline'
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const cartList = useSelector(state => state.cart)
      console.log("cartList:",cartList)

  return (
    <header className="bg-white shadow-md h-[100px] pl-3 pr-3">
      <nav aria-label="Global" className="flex items-center justify-between lg:px-5">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <img
              alt="Logo"
              src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1746076449/New_Arizon_-Logo-01_dms5nf.png"
              className="h-[100px] w-[150px]"
            />
            </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link to="/products" className="text-sm/6 font-semibold text-gray-900">
            Products
          </Link>
          <p className="text-sm/6 font-semibold text-gray-900">
            Features
          </p>
          <p className="text-sm/6 font-semibold text-gray-900">
            Marketplace
          </p>
          <p className="text-sm/6 font-semibold text-gray-900">
            Company
          </p>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
             <Link to="/cart">
                <IoCartOutline className='h-[30px] w-[30px]'/>
            </Link>
            <p className='border-2 pl-2 pr-2 rounded-3xl bg-orange-300' >{cartList.length}</p>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <img
              alt="Logo"
              src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1746076449/New_Arizon_-Logo-01_dms5nf.png"
              className="h-[100px] w-[150px]"
            />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link to="/products"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                    Products
                </Link>
                <p
                 
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Features
                </p>
                <p
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </p>
                <p
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Company
                </p>
                <div className="">
                    <p className='border-2 pl-2 pr-2 rounded-3xl bg-orange-300 w-[30px]' >{cartList.length}</p>
                    <Link to="/cart">
                        <IoCartOutline className='h-[30px] w-[30px]'/>
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

export default Header