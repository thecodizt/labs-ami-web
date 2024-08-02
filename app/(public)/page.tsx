"use client";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { MoveRightIcon } from "lucide-react";
import Image from "next/image";
import { FadeInSection } from "@/components/ui/fade-in-view";
import { Footer } from "@/components/footer";
import { MoveUpFadeInSection } from "@/components/ui/move-up-fade-in-section";
import { TimelineComponent } from "@/components/ui/timeline";

const container = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.1,
			staggerChildren: 0.3,
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

const timelineData = [
	{ year: 2010, event: "Company establishment" },
	{
		year: 2010,
		event: "Registered as retail ISO with First Data with Wells Fargo bank as sponsoring bank",
	},
	{
		year: 2011,
		event: "Executed agent agreements with Petroleum Card services & Payment Logistics",
	},
	{
		year: 2012,
		event: "AMI decided to spread it&apos;s wings globally and launched in India",
	},
	{
		year: 2013,
		event: "AMI added ATM services under it&apos;s umbrella through Switch Commerce Partnership",
	},
	{
		year: 2014,
		event: "Signed a agent level agreement with ECS, iPayments to board high risk verticals",
	},
	{
		year: 2015,
		event: "Acheived a milestone of $50M / month in processing volume",
	},
	{
		year: 2018,
		event: "Registered as an retail ISO with NPC Vantiv Worldpay with Fifth Third Bank as sponsoring bank",
	},
	{
		year: 2020,
		event: "AMI expanded its presence in North America with expansion of operation into Canada ",
	},
	{
		year: 2021,
		event: "Registered as a retail ISO with Elavon with US Bank as sponsoring bank",
	},
];

export default function Home() {
	return (
		<>
			<div className="hidden lg:flex bg-gradient-to-b from-VIOLET via-GOLD to-white p-2 flex-col gap-2">
				<FadeInSection className="min-h-[95vh] w-full flex flex-col bg-white rounded-lg shadow-lg p-4">
					{(inView: boolean) => (
						<>
							<Header />
							<div className="h-full w-full flex flex-col items-center justify-center gap-4 p-8 text-center ">
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
										<div className="bg-gradient-to-r from-BLUE via-GOLD to-GOLD bg-clip-text text-transparent text-5xl font-bold font-[Sora] text-left leading-tight">
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
										className="absolute w-full h-full"
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
										className="absolute w-full h-full"
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
							</div>
						</>
					)}
				</FadeInSection>

				<FadeInSection className="hidden lg:flex w-full relative items-center justify-center">
					<div className="rounded-lg h-full w-full bg-PURPLE text-white shadow-sm flex flex-col p-4 items-center">
						<MoveUpFadeInSection className="bg-gradient-to-b from-slate-800 to-slate-600 text-white text-2xl font-bold font-[Sora] text-center p-4 rounded-lg">
							Our Journey
						</MoveUpFadeInSection>
						<TimelineComponent data={timelineData} />
					</div>
				</FadeInSection>

				<Footer />
			</div>

			<div className="flex lg:hidden bg-gradient-to-b from-VIOLET via-GOLD to-white p-2 flex-col gap-2">
				<FadeInSection className="min-h-[95vh] w-full flex flex-col bg-white rounded-lg shadow-lg p-4">
					{(inView: boolean) => (
						<>
							<Header />
							<div className="h-full w-full flex flex-col items-center justify-center gap-4 p-8 text-center ">
								<motion.ul
									className="w-full flex flex-col items-center justify-center gap-16 lg:p-8 text-center"
									variants={container}
									initial="hidden"
									animate={inView ? "visible" : "hidden"}
								>
									<motion.li
										className="flex flex-col gap-1 w-full h-full"
										variants={item}
									>
										<div className="bg-gradient-to-r from-BLUE via-GOLD to-GOLD bg-clip-text text-transparent text-2xl font-bold font-[Sora] text-center leading-tight">
											Seamless, secure and swift payment
										</div>
										<div className="text-2xl font-bold font-[Sora] text-center w-full">
											solutions for your business.
										</div>
									</motion.li>
								</motion.ul>
							</div>
						</>
					)}
				</FadeInSection>

				<FadeInSection className="flex w-full relative items-center justify-center">
					<div className="rounded-lg h-full w-full bg-PURPLE text-white shadow-sm flex flex-col p-4 items-center">
						<MoveUpFadeInSection className="bg-gradient-to-b from-slate-800 to-slate-600 text-white text-2xl font-bold font-[Sora] text-center p-4 rounded-lg">
							Our Journey
						</MoveUpFadeInSection>
						<TimelineComponent data={timelineData} />
					</div>
				</FadeInSection>

				<Footer />
			</div>
		</>
	);
}
