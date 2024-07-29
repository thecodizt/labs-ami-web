"use client";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { MoveRightIcon } from "lucide-react";
import Image from "next/image";
import { FadeInSection } from "@/components/ui/fade-in-view";
import { Footer } from "@/components/footer";

const container = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.4,
			staggerChildren: 0.4,
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

export default function Home() {
	return (
		<div className="bg-gradient-to-b from-VIOLET via-GOLD to-white p-4 h-screen">
			<FadeInSection
				className="h-[500px] lg:h-full w-full flex flex-col bg-white rounded-lg shadow-lg p-4"
				isOnce
			>
				{(inView: boolean) => (
					<>
						<Header />
						<div className="h-full w-full flex flex-col lg:flex-row items-center justify-center gap-4 p-8 text-center ">
							<motion.ul
								className="w-full flex flex-col items-start justify-center gap-16 lg:p-8 text-center"
								variants={container}
								initial="hidden"
								animate={inView ? "visible" : "hidden"}
							>
								<motion.li
									className="flex flex-col gap-1 w-full h-full"
									variants={item}
								>
									<div className="bg-gradient-to-r from-BLUE via-GOLD to-GOLD bg-clip-text text-transparent text-xl lg:text-5xl font-bold font-[Sora] text-left leading-tight">
										Seamless, secure and swift payment
									</div>
									<div className="text-xl lg:text-5xl font-bold font-[Sora] text-left">
										solutions for your business.
									</div>
								</motion.li>
								<motion.li
									variants={item}
									className="hidden lg:block"
								>
									<Button className="bg-gradient-to-r from-BLUE to-GOLD text-white text-lg font-medium font-[Poppins] rounded-full gap-2">
										<>Contact Us</>
										<MoveRightIcon className="hover:scale-125 animate-pulse" />
									</Button>
								</motion.li>
							</motion.ul>
							<motion.ul
								className="w-full h-full relative block lg:hidden"
								variants={container}
								initial="hidden"
								animate="visible"
							>
								<motion.li
									variants={item}
									className="absolute top-0 left-0 w-full h-full"
								>
									<Image
										src={"/images/hero/person.png"}
										alt="Person"
										width={600}
										height={600}
									/>
								</motion.li>
								<motion.li
									variants={{
										hidden: { x: 200, opacity: 0 },
										visible: {
											x: 0,
											opacity: 1,
										},
									}}
									className="absolute top-[80px] left-[30px] w-full h-full"
								>
									<Image
										src={"/images/hero/machine.png"}
										alt="Person"
										width={150}
										height={100}
									/>
								</motion.li>

								<motion.li
									variants={item}
									className="absolute w-full bottom-[-110px] h-full flex items-center justify-center"
								>
									<Button
										className="bg-gradient-to-r from-BLUE to-GOLD text-white font-medium font-[Poppins] rounded-full gap-2"
										size={"sm"}
									>
										<>Contact Us</>
										<MoveRightIcon className="animate-pulse" />
									</Button>
								</motion.li>
							</motion.ul>
							<motion.ul
								className="w-full h-full relative hidden lg:block"
								variants={container}
								initial="hidden"
								animate="visible"
							>
								<motion.li
									variants={item}
									className="absolute top-[70px] right-[5px] w-full h-full"
								>
									<Image
										src={"/images/hero/person.png"}
										alt="Person"
										width={600}
										height={400}
									/>
								</motion.li>
								<motion.li
									variants={{
										hidden: { x: 200, opacity: 0 },
										visible: {
											x: 0,
											opacity: 1,
										},
									}}
									className="absolute top-[300px] left-[100px] w-full h-full"
								>
									<Image
										src={"/images/hero/machine.png"}
										alt="Person"
										width={400}
										height={400}
									/>
								</motion.li>
							</motion.ul>
						</div>
					</>
				)}
			</FadeInSection>

			{/* Module 2 - Desktop  */}
			<FadeInSection
				className="hidden lg:flex h-[500px] lg:h-[60vh] w-full relative p-4 items-center justify-center"
				isOnce
			>
				{(inView: boolean) => (
					<>
						<motion.ul
							className="flex h-[500px] lg:h-[60vh] w-full relative p-4 items-center justify-center"
							variants={container}
							initial="hidden"
							animate={inView ? "visible" : "hidden"}
						>
							<motion.li
								variants={item}
								className="absolute flex flex-col items-center justify-center gap-4 w-full h-full"
							>
								<Image
									src={"/images/hero/globe.png"}
									alt="Globe"
									width={1300}
									height={400}
									className="absolute object-contain"
								/>
							</motion.li>
							<motion.li
								variants={item}
								className="animate-pulse-scale absolute rotate-45 top-[50px] left-[300px] flex flex-col items-center justify-center gap-2 bg-LIGHTBLUE bg-opacity-10 rounded-lg border-2 border-r-LIGHTBLUE border-b-LIGHTBLUE p-2"
							>
								<div className="text-3xl font-bold font-[Sora] text-center text-LIGHTBLUE">
									2500+
								</div>
								<div>Customers</div>
							</motion.li>
							<motion.li
								variants={item}
								className="animate-pulse-scale absolute rotate-45 top-[100px] right-[400px] flex flex-col items-center justify-center gap-2 bg-ORANGE bg-opacity-10 rounded-lg border-2 border-r-ORANGE border-b-ORANGE p-2"
							>
								<div className="text-3xl font-bold font-[Sora] text-center text-ORANGE">
									24/7
								</div>
								<div>Support</div>
							</motion.li>
							<motion.li
								variants={item}
								className=" animate-pulse-scale absolute rotate-45 bottom-[100px] right-[200px] flex flex-col items-center justify-center gap-2 bg-LIGHTBLUE bg-opacity-10 rounded-lg border-2 border-r-LIGHTBLUE border-b-LIGHTBLUE p-2"
							>
								<div className="text-3xl font-bold font-[Sora] text-center text-LIGHTBLUE">
									50M$
								</div>
								<div>Transaction / Month</div>
							</motion.li>
							<motion.li
								variants={item}
								className="animate-pulse-scale absolute rotate-45 bottom-[100px] left-[200px] flex flex-col items-center justify-center gap-2 bg-ORANGE bg-opacity-10 rounded-lg border-2 border-r-ORANGE border-b-ORANGE p-2"
							>
								<div className="text-3xl font-bold font-[Sora] text-center text-ORANGE">
									20+
								</div>
								<div>Members</div>
							</motion.li>
						</motion.ul>
					</>
				)}
			</FadeInSection>

			{/* Module 2 - Mobile */}
			<FadeInSection className="flex lg:hidden h-[500px] lg:h-[60vh] w-full p-4 items-center justify-center">
				{(inView: boolean) => (
					<>
						<motion.ul
							className="flex h-[500px] lg:h-[60vh] w-full p-4 flex-col items-center justify-center gap-6"
							variants={container}
							initial="hidden"
							animate={inView ? "visible" : "hidden"}
						>
							<motion.li
								variants={item}
								className="w-full flex flex-col items-center justify-center gap-2 bg-LIGHTBLUE bg-opacity-10 rounded-lg border-2 border-r-LIGHTBLUE border-b-LIGHTBLUE p-2"
							>
								<div className="text-3xl font-bold font-[Sora] text-center text-LIGHTBLUE">
									2500+
								</div>
								<div>Customers</div>
							</motion.li>
							<motion.li
								variants={item}
								className="w-full flex flex-col items-center justify-center gap-2 bg-ORANGE bg-opacity-10 rounded-lg border-2 border-r-ORANGE border-b-ORANGE p-2"
							>
								<div className="text-3xl font-bold font-[Sora] text-center text-ORANGE">
									24/7
								</div>
								<div>Support</div>
							</motion.li>
							<motion.li
								variants={item}
								className="w-full flex flex-col items-center justify-center gap-2 bg-LIGHTBLUE bg-opacity-10 rounded-lg border-2 border-r-LIGHTBLUE border-b-LIGHTBLUE p-2"
							>
								<div className="text-3xl font-bold font-[Sora] text-center text-LIGHTBLUE">
									50M$
								</div>
								<div>Transaction / Month</div>
							</motion.li>
							<motion.li
								variants={item}
								className="w-full flex flex-col items-center justify-center gap-2 bg-ORANGE bg-opacity-10 rounded-lg border-2 border-r-ORANGE border-b-ORANGE p-2"
							>
								<div className="text-3xl font-bold font-[Sora] text-center text-ORANGE">
									20+
								</div>
								<div>Members</div>
							</motion.li>
						</motion.ul>
					</>
				)}
			</FadeInSection>

			{/* Module 3 - Desktop */}
			<FadeInSection className="bg-PURPLE shadow-sm rounded-lg hidden lg:flex h-[500px] lg:h-[60vh] w-full relative p-4 items-center justify-center">
				{(inView: boolean) => (
					<>
						<div className="h-5 w-5 top-3 left-3 absolute rounded-full bg-ORANGE" />
						<div className="h-5 w-5 top-3 right-3 absolute rounded-full bg-ORANGE" />

						<motion.ul
							className="flex flex-col h-[500px] lg:h-[60vh] w-full relative p-[50px] items-center justify-center gap-12"
							variants={container}
							initial="hidden"
							animate={inView ? "visible" : "hidden"}
						>
							<motion.li
								variants={item}
								className="w-full text-[Sora] font-bold text-5xl text-white"
							>
								<span className="bg-gradient-to-r from-BLUE to-GOLD bg-clip-text text-transparent">
									Accept Payments
								</span>
								<span> your way.</span>
							</motion.li>

							<div className="h-full w-full flex flex-col lg:flex-row items-center justify-center gap-4 p-8 text-center relative">
								<motion.li
									variants={item}
									className="absolute w-full h-full flex flex-col justify-center items-center "
								>
									<Image
										src={"/logos/blue.svg"}
										alt="AMI"
										width={100}
										height={30}
										className="cursor-pointer hover:transform hover:scale-105 transition-transform px-2 py-8 bg-white rounded-lg shadow-lg border-2 border-ORANGE"
									/>
								</motion.li>
								<motion.li
									variants={item}
									className="absolute w-full h-full flex items-center justify-center top-[-70px] left-[-300px]"
								>
									<Image
										src={"/images/hero/card-1.png"}
										alt="AMI"
										width={500}
										height={30}
									/>
								</motion.li>
								<motion.li
									variants={item}
									className="absolute w-full h-full flex items-center justify-center top-[-70px] right-[-300px]"
								>
									<Image
										src={"/images/hero/card-2.png"}
										alt="AMI"
										width={500}
										height={30}
									/>
								</motion.li>
								<motion.li
									variants={item}
									className="absolute w-full h-full flex items-center justify-center bottom-[-70px] left-[-300px]"
								>
									<Image
										src={"/images/hero/card-3.png"}
										alt="AMI"
										width={500}
										height={30}
									/>
								</motion.li>
								<motion.li
									variants={item}
									className="absolute w-full h-full flex items-center justify-center bottom-[-70px] right-[-300px]"
								>
									<Image
										src={"/images/hero/card-4.png"}
										alt="AMI"
										width={500}
										height={30}
									/>
								</motion.li>
							</div>
						</motion.ul>
					</>
				)}
			</FadeInSection>

			{/* Module 3 - Mobile */}
			<FadeInSection className="bg-PURPLE rounded-lg lg:hidden p-4 relative">
				{(inView: boolean) => (
					<>
						<div className="h-3 w-3 top-3 left-3 absolute rounded-full bg-ORANGE" />
						<div className="h-3 w-3 top-3 right-3 absolute rounded-full bg-ORANGE" />
						<motion.ul
							className="flex p-4 flex-col items-center justify-start gap-6"
							variants={container}
							initial="hidden"
							animate={inView ? "visible" : "hidden"}
						>
							<motion.li
								variants={item}
								className="text-[Sora] font-bold text-xl text-white flex flex-col items-center justify-center gap-2"
							>
								<span className="bg-gradient-to-r from-BLUE to-GOLD bg-clip-text text-transparent">
									Accept Payments
								</span>
								<span> your way.</span>
							</motion.li>
							<motion.li
								variants={item}
								className="bg-slate-800 flex flex-col justify-center items-center p-4 gap-4 rounded-lg"
							>
								<Image
									src={"/images/hero/green-thumb.png"}
									alt=""
									width={30}
									height={30}
								/>
								<div className="text-sm text-center font-['Poppins'] text-white">
									Accept payments wherever you do business
									from your computer, tablet, or mobile phone.
								</div>
							</motion.li>
							<motion.li
								variants={item}
								className="bg-slate-800 flex flex-col justify-center items-center p-4 gap-4 rounded-lg"
							>
								<Image
									src={"/images/hero/orange-wifi.png"}
									alt=""
									width={50}
									height={30}
								/>
								<div className="text-sm text-center font-['Poppins'] text-white">
									Accept all major credit and debit cards,
									checks, and cash. Take contactless payments.
								</div>
							</motion.li>
							<motion.li
								variants={item}
								className="bg-slate-800 flex flex-col justify-center items-center p-4 gap-4 rounded-lg"
							>
								<Image
									src={"/images/hero/purple-chart.png"}
									alt=""
									width={30}
									height={30}
								/>
								<div className="text-sm text-center font-['Poppins'] text-white">
									Accept payments wherever you do business
									from your computer, tablet, or mobile phone.
								</div>
							</motion.li>
							<motion.li
								variants={item}
								className="bg-slate-800 flex flex-col justify-center items-center p-4 gap-4 rounded-lg"
							>
								<Image
									src={"/images/hero/blue-smile.png"}
									alt=""
									width={30}
									height={30}
								/>
								<div className="text-sm text-center font-['Poppins'] text-white">
									Accept all major credit and debit cards,
									checks, and cash. Take contactless payments.
								</div>
							</motion.li>
						</motion.ul>
					</>
				)}
			</FadeInSection>

			{/* Module 4 - Desktop */}
			<FadeInSection className="hidden lg:flex h-[700px] w-full p-[50px]">
				{(inView: boolean) => (
					<>
						<div className="w-full h-full flex justify-center items-center p-8 border-2 border-BLUE rounded-lg">
							<div className="w-[40%] h-full flex flex-col items-start justify-center gap-2 p-[50px]">
								<span className="font-[Sora] font-bold text-5xl bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
									Our
								</span>
								<span className="font-[Sora] font-bold text-5xl bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
									Values
								</span>
							</div>

							<motion.ul
								variants={container}
								className="w-[60%] h-full flex flex-col gap-8 p-[50px]"
								initial="hidden"
								animate={inView ? "visible" : "hidden"}
							>
								<div className="flex h-full w-full gap-8">
									<motion.li
										variants={item}
										className="w-full h-full flex flex-col items-start justify-center gap-2 p-4 bg-white relative rounded-lg border border-BLUE"
									>
										<Image
											src={"/images/hero/shield-blue.png"}
											alt=""
											width={60}
											height={60}
										/>
										<div className="text-2xl text-center font-['Poppins'] text-BLUE">
											Security
										</div>
										<div className="text-sm">
											Advanced encryption and fraud
											detection mechanisms to ensure
											secure transactions.
										</div>
									</motion.li>
									<motion.li
										variants={item}
										className="w-full h-full flex flex-col items-start justify-center gap-2 p-4 bg-white relative rounded-lg border border-GOLD"
									>
										<Image
											src={"/images/hero/shield-blue.png"}
											alt=""
											width={60}
											height={60}
										/>
										<div className="text-2xl text-center font-['Poppins'] text-GOLD">
											Versatility
										</div>
										<div className="text-sm">
											Supports multiple payment methods
											including credit/debit cards,
											digital wallets, and bank transfers.
										</div>
									</motion.li>
								</div>
								<div className="flex h-full w-full gap-8">
									<motion.li
										variants={item}
										className="w-full h-full flex flex-col items-start justify-center gap-2 p-4 bg-white relative rounded-lg border border-BLUE"
									>
										<Image
											src={"/images/hero/shield-blue.png"}
											alt=""
											width={60}
											height={60}
										/>
										<div className="text-2xl text-center font-['Poppins'] text-BLUE">
											Scalability
										</div>
										<div className="text-sm">
											Solutions that grow with your
											business, from small startups to
											large enterprises.
										</div>
									</motion.li>
									<motion.li
										variants={item}
										className="w-full h-full flex flex-col items-start justify-center gap-2 p-4 bg-white relative rounded-lg border border-GOLD"
									>
										<Image
											src={"/images/hero/shield-blue.png"}
											alt=""
											width={60}
											height={60}
										/>
										<div className="text-2xl text-center font-['Poppins'] text-GOLD">
											Global Reach
										</div>
										<div className="text-sm">
											Enables businesses to accept
											payments from customers around the
											world.
										</div>
									</motion.li>
								</div>
							</motion.ul>
						</div>
					</>
				)}
			</FadeInSection>
			
			<Footer />
		</div>
	);
}
