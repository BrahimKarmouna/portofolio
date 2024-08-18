import Link from 'next/link';

export default function Navbar() {
    return (
        <div className='bg-white text-black h-14 flex items-center'>
            <div className='text-center w-full'>
                <Link className='mr-6 font-extrabold text-xl mt-2' href='/'>Home</Link>
                <Link className='mr-6 font-extrabold text-xl mt-2 ' href='/Pricing'>Pricing</Link>
                <Link className='mr-6 font-extrabold text-xl mt-2 ' href='/Services'>Services</Link>
            </div>
        </div>
    );
}
