'use client'
import Image from 'next/image'
import Link from 'next/link'
import {useState, useEffect} from 'react'
import {usePathname} from 'next/navigation'
import {motion, AnimatePresence} from 'framer-motion'

export default function Navbar() {
	const pathname = usePathname()
	const [menuOpen, setMenuOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 10)
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<nav
			className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-linear-to-r from-slate-50/95 via-emerald-50/95 to-blue-50/95 backdrop-blur-xl shadow-lg border-b border-emerald-100/50`}>
			<div className='py-4 max-w-7xl mx-auto px-4 pr-7 md:pr-0 sm:px-6 lg:px-0 flex justify-between items-center'>
				{/* Logo */}
				<Link
					href='/'
					className='flex  items-center gap-2'>
					<Image
						src='/logo2.png'
						className=' sm:h-20 h-16 w-auto'
						alt='logo'
						width={155}
						height={155}
					/>
				</Link>

				{/* Desktop Nav */}
				<div className='hidden md:flex items-center space-x-10 font-medium text-slate-900'>
					{['Home', 'Services', 'About Us', 'Blogs'].map((item) => {
						const href = `/${
							item === 'Home' ? '' : item.toLowerCase().replace(' ', '')
						}`
						const isActive =
							(href === '/' && pathname === '/') ||
							(href !== '/' && pathname.startsWith(href))
						return (
							<Link
								key={item}
								href={href}
								className={`relative group ${
									isActive ? 'text-blue-600 font-semibold' : ''
								}`}>
								<span
									className={`transition group-hover:text-blue-600 ${
										isActive ? 'text-blue-600' : ''
									}`}>
									{item}
								</span>
								<span
									className={`absolute left-0 bottom-[-5px] h-[2.5px] ${
										isActive ? 'w-full' : 'w-0'
									} bg-linear-to-r from-blue-500 to-emerald-400 transition-all duration-300 group-hover:w-full`}></span>
							</Link>
						)
					})}

					<Link
						href='/contact'
						className={`px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition tracking-wide ${
							pathname.startsWith('/contact') ? 'ring-2 ring-emerald-400' : ''
						}`}>
						Contact Us
					</Link>
				</div>

				{/* Mobile - Animated Hamburger Button */}
				<button
					className='md:hidden text-slate-900'
					onClick={() => setMenuOpen(!menuOpen)}>
					<motion.svg
						initial={false}
						animate={menuOpen ? 'open' : 'closed'}
						width='24'
						height='24'
						viewBox='0 0 23 23'>
						<motion.path
							strokeWidth='3'
							strokeLinecap='round'
							stroke='currentColor'
							variants={{
								closed: {d: 'M 2 3 L 21 3'},
								open: {d: 'M 3 3 L 20 20'},
							}}
						/>
						<motion.path
							strokeWidth='3'
							strokeLinecap='round'
							stroke='currentColor'
							variants={{
								closed: {opacity: 1, d: 'M 2 11.5 L 21 11.5'},
								open: {opacity: 0},
							}}
						/>
						<motion.path
							strokeWidth='3'
							strokeLinecap='round'
							stroke='currentColor'
							variants={{
								closed: {d: 'M 2 20 L 21 20'},
								open: {d: 'M 3 20 L 20 3'},
							}}
						/>
					</motion.svg>
				</button>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{menuOpen && (
					<motion.div
						initial={{opacity: 0, y: -10}}
						animate={{opacity: 1, y: 0}}
						exit={{opacity: 0, y: -10}}
						transition={{duration: 0.25}}
						className='md:hidden bg-linear-to-br from-slate-50/98 via-emerald-50/98 to-blue-50/98 backdrop-blur-lg text-slate-900 text-center space-y-6 py-6 shadow-xl border-t border-emerald-100/50'>
						{['Home', 'About Us', 'Services', 'Blogs', 'Contact Us'].map(
							(item) => {
								const href = `/${
									item === 'Home'
										? ''
										: item === 'Contact Us'
										? 'contact'
										: item.toLowerCase().replace(' ', '')
								}`
								const isActive =
									(href === '/' && pathname === '/') ||
									(href !== '/' && pathname.startsWith(href))
								return (
									<Link
										key={item}
										href={href}
										onClick={() => setMenuOpen(false)}
										className={`block text-lg font-medium transition ${
											isActive
												? 'text-blue-600 font-semibold'
												: 'hover:text-blue-600'
										}`}>
										{item}
									</Link>
								)
							}
						)}
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	)
}
