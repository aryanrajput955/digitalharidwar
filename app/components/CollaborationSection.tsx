'use client'

import { motion, Variants } from 'framer-motion'
import { Mail, Phone, Globe, Shield, Zap, Heart, Code2, Rocket } from 'lucide-react'
import Link from 'next/link'

const CollaborationSection = () => {
	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	}

	const itemVariants: Variants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.6,
				ease: 'easeOut',
			},
		},
	}

	return (
		<section
			id='collaboration'
			className='relative py-20 md:py-32 px-4 sm:px-6 lg:px-12 bg-linear-to-b from-white to-slate-50 overflow-hidden'>
			{/* Decorative Elements */}
			<div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden'>
				<div className='absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[100px] opacity-30 animate-pulse'></div>
				<div className='absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-100 rounded-full blur-[100px] opacity-30 animate-pulse'></div>
			</div>

			<div className='max-w-7xl mx-auto relative z-10'>
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					variants={containerVariants}
					className='text-center max-w-3xl mx-auto mb-16 md:mb-24'>
					<motion.div
						variants={itemVariants}
						className='inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6'>
						<Heart className='w-4 h-4 text-blue-600' />
						<span className='text-xs font-bold tracking-widest text-blue-700 uppercase'>
							Strategic Collaboration
						</span>
					</motion.div>
					<motion.h2
						variants={itemVariants}
						className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-8 leading-tight'>
						Two Giants, One{' '}
						<span className='bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent'>
							Digital Vision
						</span>
					</motion.h2>
					<motion.p
						variants={itemVariants}
						className='text-lg md:text-xl text-slate-600 leading-relaxed font-light'>
						TheCraftsync and Digital Haridwar unite to bridge the gap between
						technical excellence and marketing mastery. Together, we deliver
						unparalleled digital growth.
					</motion.p>
				</motion.div>

				<div className='grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-stretch'>
					{/* TheCraftsync Card */}
					<motion.div
						initial={{ x: -50, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className='group relative bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 hover:border-blue-200 transition-all duration-500 hover:shadow-2xl overflow-hidden'>
						<div className='absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700 opacity-50'></div>
						
						<div className='relative z-10'>
							<div className='flex items-center space-x-6 mb-8'>
								<div className='w-24 h-24 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500'>
									<img src="/tcs.png" alt="TheCraftsync" className="w-full h-full object-contain" />
								</div>
								<div>
									<h3 className='text-3xl font-black text-slate-900 tracking-tight'>
										TheCraftsync
									</h3>
									<p className='text-blue-600 font-semibold'>Technical Architecture</p>
								</div>
							</div>

							<p className='text-slate-600 text-lg mb-10 leading-relaxed'>
								Specializing in high-performance web applications, scalable cloud infrastructure, and bespoke software solutions that drive modern enterprises.
							</p>

							<div className='space-y-6 mb-12'>
								<div className='flex items-center space-x-4 text-slate-600'>
									<div className='w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100'>
										<Mail className='w-5 h-5 text-blue-600' />
									</div>
									<span className='font-medium'>connect@thecraftsync.com</span>
								</div>
								<div className='flex items-center space-x-4 text-slate-600'>
									<div className='w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100'>
										<Phone className='w-5 h-5 text-blue-600' />
									</div>
									<span className='font-medium'>+91 84330 23265</span>
								</div>
								<div className='flex items-center space-x-4 text-slate-600'>
									<div className='w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100'>
										<Globe className='w-5 h-5 text-blue-600' />
									</div>
									<span className='font-medium'>www.thecraftsync.com</span>
								</div>
							</div>

							<div className='grid grid-cols-2 gap-4'>
								<div className='flex items-center space-x-2 text-sm text-slate-500'>
									<Shield className='w-4 h-4' />
									<span>Scalable Systems</span>
								</div>
								<div className='flex items-center space-x-2 text-sm text-slate-500'>
									<Zap className='w-4 h-4' />
									<span>Custom Software</span>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Digital Haridwar Card */}
					<motion.div
						initial={{ x: 50, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className='group relative bg-slate-900 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-800 hover:border-blue-900 transition-all duration-500 hover:shadow-2xl overflow-hidden text-white'>
						<div className='absolute bottom-0 right-0 w-32 h-32 bg-blue-900/20 rounded-tl-full -mr-16 -mb-16 group-hover:scale-150 transition-transform duration-700 opacity-50'></div>
						
						<div className='relative z-10'>
							<div className='flex items-center space-x-6 mb-8'>
								<div className='w-24 h-24 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500'>
									<img src="/logo3.png" alt="Digital Haridwar" className="w-full h-full object-contain" />
								</div>
								<div>
									<h3 className='text-3xl font-black text-white tracking-tight'>
										Digital Haridwar
									</h3>
									<p className='text-blue-400 font-semibold'>Growth & Strategy</p>
								</div>
							</div>

							<p className='text-slate-300 text-lg mb-10 leading-relaxed text-balance'>
								Haridwar's premier digital marketing agency, helping brands dominate search engines, social media, and the digital landscape through data-driven marketing.
							</p>

							<div className='space-y-6 mb-12'>
								<div className='flex items-center space-x-4 text-slate-300'>
									<div className='w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700'>
										<Mail className='w-5 h-5 text-blue-400' />
									</div>
									<span className='font-medium'>info@digitalharidwar.com</span>
								</div>
								<div className='flex items-center space-x-4 text-slate-300'>
									<div className='w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700'>
										<Phone className='w-5 h-5 text-blue-400' />
									</div>
									<span className='font-medium'>+91 82189 11085</span>
								</div>
								<div className='flex items-center space-x-4 text-slate-300'>
									<div className='w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700'>
										<Globe className='w-5 h-5 text-blue-400' />
									</div>
									<span className='font-medium'>www.digitalharidwar.com</span>
								</div>
							</div>

							<div className='grid grid-cols-2 gap-4'>
								<div className='flex items-center space-x-2 text-sm text-slate-400'>
									<Rocket className='w-4 h-4' />
									<span>SEO Mastery</span>
								</div>
								<div className='flex items-center space-x-2 text-sm text-slate-400'>
									<Heart className='w-4 h-4' />
									<span>Brand Building</span>
								</div>
							</div>
						</div>
					</motion.div>
				</div>

				<motion.div
					initial={{ y: 30, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.5, duration: 0.8 }}
					className='mt-20 text-center'>
					<div className='inline-block p-px rounded-full bg-linear-to-r from-blue-600 via-cyan-500 to-blue-600 bg-size-[200%_auto] animate-gradient-x'>
						<Link href='/contact' className='px-10 py-5 bg-white rounded-full font-bold text-slate-900 hover:bg-transparent hover:text-white transition-all duration-300 group flex items-center space-x-3'>
							<span>Inquire About Combined Services</span>
							<Rocket className='w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform' />
						</Link>
					</div>
				</motion.div>
			</div>
		</section>
	)
}

export default CollaborationSection
