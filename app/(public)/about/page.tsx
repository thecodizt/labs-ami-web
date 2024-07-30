"use client";
import { Header } from "@/components/header";
import { MoveUpFadeInSection } from "@/components/ui/move-up-fade-in-section";
import { motion } from "framer-motion";
import Image from "next/image";

const container = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.2,
		},
	},
};

const item = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};

const AboutPage = () => {
	return (
		<div className="bg-gradient-to-b from-BLUE via-GOLD to-white h-screen overflow-y-scroll scrollbar-hide snap-y snap-mandatory flex flex-col scroll">
			<div className="min-h-screen w-full p-2 snap-start">
				<div className="h-full w-full rounded-lg bg-PURPLE text-white shadow-sm flex flex-col p-4">
					<Header variant="dark" />
					<div className="h-full w-full flex">
						<div className="w-[40%] h-full p-8 flex flex-col items-start justify-center gap-4">
							<MoveUpFadeInSection className="text-5xl font-[Poppins] font-bold text-white">
								About Us
							</MoveUpFadeInSection>
							<MoveUpFadeInSection
								className="text-xl font-[Poppins] font-light text-white"
								delay={0.5}
							>
								<span>
									AMI is a leading payment processing company
									offering versatile in-store, online, and
									mobile solutions. Our advanced technology
									ensures fast, efficient, and secure
									transactions, protecting sensitive financial
									information with robust security measures.
									We cater to the diverse needs of modern
									businesses with comprehensive payment
									processing services.
								</span>
							</MoveUpFadeInSection>
						</div>
						<motion.ul
							variants={container}
							className="w-[60%] h-full relative"
							initial="hidden"
							animate="visible"
						>
							<motion.li
								variants={item}
								className="h-full w-full flex items-center justify-center"
							>
								<Image
									src={"/images/about/hero-1.png"}
									alt=""
									width={700}
									height={500}
									className="object-contain"
								/>
							</motion.li>
							<motion.li
								variants={item}
								className="absolute bottom-[50px] left-[-20px]"
							>
								<Image
									src={"/images/about/hero-2.png"}
									alt=""
									width={300}
									height={200}
									className="object-contain animate-pulse-scale"
								/>
							</motion.li>
							<motion.li
								variants={item}
								className="absolute bottom-0 right-[20px]"
							>
								<Image
									src={"/images/about/hero-3.png"}
									alt=""
									width={200}
									height={200}
									className="object-contain animate-pulse-scale"
								/>
							</motion.li>
							<motion.li
								variants={item}
								className="absolute top-[100px] left-[-20px]"
							>
								<Image
									src={"/images/about/hero-4.png"}
									alt=""
									width={200}
									height={200}
									className="object-contain animate-pulse-scale"
								/>
							</motion.li>
						</motion.ul>
					</div>
				</div>
			</div>

			<div className="min-h-screen h-full w-full snap-start p-2">
				<div className="bg-SKYBLUE rounded-lg shadow-sm flex flex-col gap-8 p-8 h-full w-full items-center justify-center">
					<div className="w-full flex items-center justify-center">
						<MoveUpFadeInSection
							className="font-[Sora] font-bold text-black text-5xl"
							duration={0.8}
						>
							Our Services
						</MoveUpFadeInSection>
					</div>
					<div className="h-full w-full flex gap-8">
						<MoveUpFadeInSection
							delay={0.5}
							duration={0.8}
							className="w-full h-full flex flex-col gap-4"
						>
							<div className="w-full h-full flex flex-col items-start justify-center gap-4 bg-white rounded-lg shadow-sm p-8 relative">
								<div className="absolute h-3 w-3 rounded-full bg-black top-3 left-3" />
								<div className="absolute h-3 w-3 rounded-full bg-black top-3 right-3" />
								<div className="absolute h-3 w-3 rounded-full bg-black bottom-3 left-3" />
								<div className="absolute h-3 w-3 rounded-full bg-black bottom-3 right-3" />

								<div className="text-xl font-[Poppins] font-light text-black flex flex-col gap-6">
									<Image
										src={"/images/about/presentation.png"}
										alt=""
										width={200}
										height={200}
										className="object-contain"
									/>
									<div className="text-4xl font-bold font-[Sora] bg-gradient-to-r from-BLUE to-VIOLET bg-clip-text text-transparent">
										Global <br /> Aspriation
									</div>
									<div>
										At AMI, we take pride in delivering
										superior customer service, ensuring that
										our clients receive the highest level of
										support and satisfaction.
									</div>
								</div>
							</div>
						</MoveUpFadeInSection>
						<MoveUpFadeInSection
							delay={1}
							duration={0.8}
							className="w-full h-full flex flex-col gap-4"
						>
							<div className="w-full h-full flex flex-col items-start justify-center gap-4 bg-white rounded-lg shadow-sm p-8 relative">
								<div className="absolute h-3 w-3 rounded-full bg-black top-3 left-3" />
								<div className="absolute h-3 w-3 rounded-full bg-black top-3 right-3" />
								<div className="absolute h-3 w-3 rounded-full bg-black bottom-3 left-3" />
								<div className="absolute h-3 w-3 rounded-full bg-black bottom-3 right-3" />

								<div className="text-xl font-[Poppins] font-light text-black flex flex-col gap-6">
									<Image
										src={"/images/about/presentation.png"}
										alt=""
										width={200}
										height={200}
										className="object-contain"
									/>
									<div className="text-4xl font-bold font-[Sora] bg-gradient-to-r from-BLUE to-VIOLET bg-clip-text text-transparent">
										Global <br /> Aspriation
									</div>
									<div>
										At AMI, we take pride in delivering
										superior customer service, ensuring that
										our clients receive the highest level of
										support and satisfaction.
									</div>
								</div>
							</div>
						</MoveUpFadeInSection>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
