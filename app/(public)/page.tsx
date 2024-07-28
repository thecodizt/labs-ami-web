"use client";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { MoveRightIcon } from "lucide-react";
import Image from "next/image";

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
		<div className="bg-gradient-to-b from-VIOLET via-GOLD to-white min-h-screen h-screen p-4">
			<div className="h-[500px] lg:h-full w-full flex flex-col bg-white rounded-lg shadow-lg p-4">
				<Header />
				<div className="h-full w-full flex flex-col lg:flex-row items-center justify-center gap-4 p-8 text-center ">
					<motion.ul
						className="w-full flex flex-col items-start justify-center gap-16 lg:p-8 text-center"
						variants={container}
						initial="hidden"
						animate="visible"
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
						<motion.li variants={item} className="hidden lg:block">
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
							<Button className="bg-gradient-to-r from-BLUE to-GOLD text-white font-medium font-[Poppins] rounded-full gap-2" size={"sm"}>
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
			</div>
		</div>
	);
}
