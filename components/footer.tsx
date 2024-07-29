"use client";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { FadeInSection } from "./ui/fade-in-view";
import { Input } from "./ui/input";
import { inView, motion } from "framer-motion";
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

const Footer = () => {
	const router = useRouter();

	return (
		<>
			<FadeInSection
				className="hidden lg:block p-8 bg-PURPLE rounded-t-lg shadow-sm w-full text-['Poppins'] text-white"
				isOnce
			>
				{(inView: boolean) => (
					<motion.ul
						className="flex flex-col gap-8 px-6 pt-6 justify-between"
						variants={container}
						initial="hidden"
						animate={inView ? "visible" : "hidden"}
					>
						<div className="w-full flex items-center justify-between gap-4 text-3xl font-bold">
							<motion.li
								variants={item}
								className="bg-gradient-to-r from-BLUE to-GOLD bg-clip-text text-transparent text-bold text-4xl font-[Sora]"
							>
								Seamless, secure and <br /> swift payment
							</motion.li>

							<motion.li
								variants={item}
								className="bg-gradient-to-br from-GOLD to-BLUE rounded-full p-[2px]"
							>
								<Button
									variant={"ghost"}
									onClick={() => router.push("/contact-us")}
									className={
										"rounded-full h-full w-full p-4 bg-PURPLE hover:bg-PURPLE text-white text-sm"
									}
									size={"sm"}
								>
									Book a Consultation
								</Button>
							</motion.li>
						</div>
						<div className="w-full flex items-center justify-between gap-4 text-3xl">
							<div className="w-full flex gap-4 items-center">
								<motion.li
									variants={item}
									className="flex flex-col gap-2"
								>
									<span className="bg-gradient-to-r from-BLUE to-GOLD bg-clip-text text-transparent text-bold text-xl font-[Sora]">
										Canada
									</span>
									<span className="text-xs">
										AMI Merchants Services Inc 13841 Harper
										Road Surrey, BC Canada V3R 5L5
									</span>
								</motion.li>
								<motion.li
									variants={item}
									className="flex flex-col gap-2"
								>
									<span className="bg-gradient-to-r from-BLUE to-GOLD bg-clip-text text-transparent text-bold text-xl font-[Sora]">
										United States
									</span>
									<span className="text-xs">
										American Merchants Inc 2219 W Olive Ave
										#106 Burbank, CA USA 91506
									</span>
								</motion.li>
								<motion.li
									variants={item}
									className="flex flex-col gap-2"
								>
									<span className="bg-gradient-to-r from-BLUE to-GOLD bg-clip-text text-transparent text-bold text-xl font-[Sora]">
										India
									</span>
									<span className="text-xs">
										AMI Merchant Services Pvt Ltd Suite 120
										Edmonton Mall The Bristol, Gurgaon,
										India
									</span>
								</motion.li>
							</div>
							<div className="w-full flex flex-col items-end justify-end gap-4 p-8">
								<motion.li
									variants={item}
									className="flex flex-col items-start gap-2"
								>
									<span className="text-sm">
										Join our mailing list
									</span>
									<Input
										placeholder="Enter your email"
										className="w-[200px] h-10 p-2 rounded-full border border-slate-600 bg-transparent text-slate-600 outline-none"
									/>
								</motion.li>
							</div>
						</div>

						<motion.li
							variants={item}
							className="w-full flex flex-col items-start justify-center gap-2 text-slate-400"
						>
							<div className="flex gap-2 items-center">
								<Image
									src={"/images/hero/green-check.png"}
									alt="AMI"
									width={20}
									height={20}
								/>
								<span className="text-xs">
									For the US, American Merchants Inc is a
									registered ISO of Wells Fargo Bank, NA,
									Concord, CA, Fifth Third Bank, N.A.
									Cincinnati, OH, USA and Elavon, Inc. Georgia
									[a wholly owned subsidiary of U.S. Bancorp,
									Minneapolis, MN]
								</span>
							</div>

							<div className="flex gap-2 items-center">
								<Image
									src={"/images/hero/green-check.png"}
									alt="AMI"
									width={20}
									height={20}
								/>
								<span className="text-xs">
									For Canada, American Merchants Inc is a
									registered ISO of Wells Fargo Bank, NA,
									Concord, CA, Fifth Third Bank, N.A.
									Cincinnati, OH, USA and Elavon, Inc. Georgia
									[a wholly owned subsidiary of U.S. Bancorp,
									Minneapolis, MN]
								</span>
							</div>
							<div className="flex gap-2 items-center">
								<Image
									src={"/images/hero/green-check.png"}
									alt="AMI"
									width={20}
									height={20}
								/>
								<span className="text-xs">
									For India, American Merchants Inc is a
									registered ISO of Wells Fargo Bank, NA,
									Concord, CA, Fifth Third Bank, N.A.
									Cincinnati, OH, USA and Elavon, Inc. Georgia
									[a wholly owned subsidiary of U.S. Bancorp,
									Minneapolis, MN]
								</span>
							</div>
						</motion.li>

						<div className="w-full flex justify-between items-center text-slate-400 text-xs pt-8">
							<span>
								Copyright ©️ American Merchants Inc. 2007 -
								2024. All rights reserved. American Merchants
								Inc. is a registered trade mark. Any
								unauthorised use is expressly prohibited{" "}
							</span>
							<span>Cookies Terms of Use Legal</span>
						</div>
					</motion.ul>
				)}
			</FadeInSection>
		</>
	);
};

export { Footer };
