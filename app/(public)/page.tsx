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
import FullPageVideoOverlay from "@/components/ui/video-overlay";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "@/components/ui/avatar";
import AnimatedNumber from "@/components/ui/animate-number";

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
				<FadeInSection className="min-h-[95vh] h-[95vh] w-full flex flex-col bg-white rounded-lg shadow-lg p-4">
					{(inView: boolean) => (
						<>
							<Header />
							<div className="h-full w-full flex flex-col items-center justify-center gap-4 p-8 text-center ">
								<motion.ul
									className="h-full w-full flex items-center justify-center gap-16 lg:p-8 text-center"
									variants={container}
									initial="hidden"
									animate={inView ? "visible" : "hidden"}
								>
									<motion.li
										className="w-[40%] flex flex-col items-center justify-center gap-1 h-full"
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
										className="h-full w-[60%] flex items-center justify-center"
									>
										<Image
											src={"/images/hero/main.png"}
											alt=""
											width={600}
											height={600}
											className="object-contain animate-pulse-scale"
										/>
									</motion.li>
									{/* <motion.li
										variants={item}
										className="hidden lg:block"
									>
										<Button className="bg-gradient-to-r from-BLUE to-GOLD text-white text-lg font-medium font-[Poppins] rounded-full gap-2">
											<>Contact Us</>
											<MoveRightIcon className="hover:scale-125 animate-pulse" />
										</Button>
									</motion.li> */}
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

				<FadeInSection className="hidden lg:flex w-full relative items-center justify-center">
					<div className="rounded-lg h-full w-full bg-PURPLE text-white shadow-sm flex flex-col p-4 py-8 items-center">
						<MoveUpFadeInSection className="bg-gradient-to-b from-slate-800 to-slate-600 text-white text-2xl font-bold font-[Sora] text-center p-4 rounded-lg">
							Our Strengths
						</MoveUpFadeInSection>
						<div className="p-8 flex flex-wrap gap-4 items-center justify-center">
							<MoveUpFadeInSection className="max-w-[400px] bg-gradient-to-b from-slate-700 to-slate-900 rounded-lg shadow-sm flex flex-col gap-8 p-8 h-full w-full items-center justify-between">
								<Image
									src={"/images/company/person1.png"}
									alt=""
									width={700}
									height={500}
									className="object-contain"
								/>

								<div className="flex flex-col gap-2 w-full justify-center items-center">
									<div className="text-2xl font-[Sora] text-white font-semibold">
										Jumesh Walia
									</div>

									<div className="font-[Sora] text-white">
										CEO
									</div>
								</div>

								<div className="flex items-center justify-center gap-4 w-full">
									<Avatar>
										<AvatarImage
											src={
												"/images/countries/united-states.png"
											}
											alt=""
										/>
									</Avatar>
									<Avatar>
										<AvatarImage
											src={"/images/countries/canada.png"}
											alt=""
										/>
									</Avatar>
									<Avatar>
										<AvatarImage
											src={"/images/countries/india.png"}
											alt=""
										/>
									</Avatar>
								</div>
							</MoveUpFadeInSection>
							<MoveUpFadeInSection className="max-w-[400px] bg-gradient-to-b from-slate-700 to-slate-900 rounded-lg shadow-sm flex flex-col gap-8 p-8 h-full w-full items-center justify-between">
								<Image
									src={"/images/company/person2.png"}
									alt=""
									width={700}
									height={500}
									className="object-contain"
								/>

								<div className="flex flex-col gap-2 w-full justify-center items-center">
									<div className="text-2xl font-[Sora] text-white font-semibold">
										Ramneek Kochar
									</div>

									<div className="font-[Sora] text-white">
										National Sales Director
									</div>
								</div>

								<div className="flex items-center justify-center gap-4 w-full">
									<Avatar>
										<AvatarImage
											src={"/images/countries/canada.png"}
											alt=""
										/>
									</Avatar>
									<Avatar>
										<AvatarImage
											src={"/images/countries/india.png"}
											alt=""
										/>
									</Avatar>
								</div>
							</MoveUpFadeInSection>
							<MoveUpFadeInSection className="max-w-[400px] bg-gradient-to-b from-slate-700 to-slate-900 rounded-lg shadow-sm flex flex-col gap-8 p-8 h-full w-full items-center justify-between">
								<Image
									src={"/images/company/person3.png"}
									alt=""
									width={700}
									height={500}
									className="object-contain"
								/>

								<div className="flex flex-col gap-2 w-full justify-center items-center">
									<div className="text-2xl font-[Sora] text-white font-semibold">
										Sivaram Elangovan
									</div>

									<div className="font-[Sora] text-white">
										COO
									</div>
								</div>

								<div className="flex items-center justify-center gap-4 w-full">
									<Avatar>
										<AvatarImage
											src={
												"/images/countries/united-states.png"
											}
											alt=""
										/>
									</Avatar>
									<Avatar>
										<AvatarImage
											src={"/images/countries/canada.png"}
											alt=""
										/>
									</Avatar>
								</div>
							</MoveUpFadeInSection>
							<MoveUpFadeInSection className="max-w-[400px] bg-gradient-to-b from-slate-700 to-slate-900 rounded-lg shadow-sm flex flex-col gap-8 p-8 h-full w-full items-center justify-between">
								<Image
									src={"/images/company/person1.png"}
									alt=""
									width={700}
									height={500}
									className="object-contain"
								/>

								<div className="flex flex-col gap-2 w-full justify-center items-center">
									<div className="text-2xl font-[Sora] text-white font-semibold">
										Jumesh Walia
									</div>

									<div className="font-[Sora] text-white">
										CEO
									</div>
								</div>

								<div className="flex items-center justify-center gap-4 w-full">
									<Avatar>
										<AvatarImage
											src={
												"/images/countries/united-states.png"
											}
											alt=""
										/>
									</Avatar>
									<Avatar>
										<AvatarImage
											src={"/images/countries/canada.png"}
											alt=""
										/>
									</Avatar>
								</div>
							</MoveUpFadeInSection>
							<MoveUpFadeInSection className="max-w-[400px] bg-gradient-to-b from-slate-700 to-slate-900 rounded-lg shadow-sm flex flex-col gap-8 p-8 h-full w-full items-center justify-between">
								<Image
									src={"/images/company/person1.png"}
									alt=""
									width={700}
									height={500}
									className="object-contain"
								/>

								<div className="flex flex-col gap-2 w-full justify-center items-center">
									<div className="text-2xl font-[Sora] text-white font-semibold">
										Jumesh Walia
									</div>

									<div className="font-[Sora] text-white">
										CEO
									</div>
								</div>

								<div className="flex items-center justify-center gap-4 w-full">
									<Avatar>
										<AvatarImage
											src={
												"/images/countries/united-states.png"
											}
											alt=""
										/>
									</Avatar>
									<Avatar>
										<AvatarImage
											src={
												"/images/countries/united-states.png"
											}
											alt=""
										/>
									</Avatar>
									<Avatar>
										<AvatarImage
											src={
												"/images/countries/united-states.png"
											}
											alt=""
										/>
									</Avatar>
								</div>
							</MoveUpFadeInSection>
						</div>
					</div>
				</FadeInSection>

				<FadeInSection className="hidden lg:flex w-full relative items-center justify-center">
					<MoveUpFadeInSection className="h-[500px] w-full relative flex flex-col items-center justify-center gap-4">
						<Image
							src={"/images/hero/globe.png"}
							alt=""
							width={1000}
							height={600}
							className="object-contain absolute"
						/>
					</MoveUpFadeInSection>

					<MoveUpFadeInSection
						delay={0.2}
						className="absolute top-[100px] left-[200px] w-[200px] rounded-lg bg-orange-200 border border-1 border-orange-500 border-b-4 border-r-4 flex flex-col items-center justify-center gap-2 p-4 text-center"
					>
						<div className="text-5xl font-[Sora] text-orange-500 font-semibold">
							<AnimatedNumber
								start={0}
								end={20}
								duration={1000}
								className="text-orange-500"
							/>
							+
						</div>
						<div className="text-slate-600">Countries</div>
					</MoveUpFadeInSection>
					<MoveUpFadeInSection
						delay={0.4}
						className="absolute top-[100px] right-[200px] w-[200px] rounded-lg bg-blue-100 border border-1 border-blue-500 border-b-4 border-r-4 flex flex-col items-center justify-center gap-2 p-4 text-center"
					>
						<div className="text-5xl font-[Sora] text-blue-500 font-semibold">
							<AnimatedNumber
								start={0}
								end={50}
								duration={1000}
								className="text-blue-500"
							/>
							M$
						</div>
						<div className="text-slate-600">Transaction/Month</div>
					</MoveUpFadeInSection>
					<MoveUpFadeInSection
						delay={0.6}
						className="absolute bottom-[100px] left-[200px] w-[200px] rounded-lg bg-blue-100 border border-1 border-blue-500 border-b-4 border-r-4 flex flex-col items-center justify-center gap-2 p-4 text-center"
					>
						<div className="text-5xl font-[Sora] text-blue-500 font-semibold">
							<AnimatedNumber
								start={0}
								end={2500}
								duration={1000}
								className="text-blue-500"
							/>
							+
						</div>
						<div className="text-slate-600">Customers</div>
					</MoveUpFadeInSection>
					<MoveUpFadeInSection
						delay={0.8}
						className="absolute bottom-[100px] right-[200px] w-[200px] rounded-lg bg-orange-200 border border-1 border-orange-500 border-b-4 border-r-4 flex flex-col items-center justify-center gap-2 p-4 text-center"
					>
						<div className="text-5xl font-[Sora] text-orange-500 font-semibold">
							<AnimatedNumber
								start={0}
								end={24}
								duration={1000}
								className="text-orange-500"
							/>
							/
							<AnimatedNumber
								start={0}
								end={7}
								duration={1000}
								className="text-orange-500"
							/>
						</div>
						<div className="text-slate-600">Support</div>
					</MoveUpFadeInSection>
				</FadeInSection>

				<Footer />
			</div>

			<div className="flex lg:hidden bg-gradient-to-b from-VIOLET via-GOLD to-white p-2 flex-col gap-2">
				<FadeInSection className="min-h-[95vh] h-[95vh] w-full flex flex-col bg-white rounded-lg shadow-lg p-4">
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
										<div className="bg-gradient-to-r from-BLUE via-GOLD to-GOLD bg-clip-text text-transparent text-4xl font-bold font-[Sora] text-center leading-tight">
											Seamless, secure and swift payment
										</div>
										<div className="text-4xl font-bold font-[Sora] text-center w-full">
											solutions for your business.
										</div>
									</motion.li>
									<motion.li
										variants={item}
										className="h-full w-full flex items-center justify-center"
									>
										<Image
											src={"/images/hero/main.png"}
											alt=""
											width={600}
											height={600}
											className="object-contain animate-pulse-scale"
										/>
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

				<FadeInSection className="flex w-full relative items-center justify-center">
					<div className="rounded-lg h-full w-full bg-PURPLE text-white shadow-sm flex flex-col p-4 py-8 items-center">
						<MoveUpFadeInSection className="bg-gradient-to-b from-slate-800 to-slate-600 text-white text-2xl font-bold font-[Sora] text-center p-4 rounded-lg">
							Our Strengths
						</MoveUpFadeInSection>
						<div className="p-8 flex flex-wrap gap-4 items-center justify-center">
							<MoveUpFadeInSection className="max-w-[400px] bg-gradient-to-b from-slate-700 to-slate-900 rounded-lg shadow-sm flex flex-col gap-8 p-8 h-full w-full items-center justify-between">
								<Image
									src={"/images/company/person1.png"}
									alt=""
									width={700}
									height={500}
									className="object-contain"
								/>

								<div className="flex flex-col gap-2 w-full justify-center items-center">
									<div className="text-2xl font-[Sora] text-white font-semibold">
										Jumesh Walia
									</div>

									<div className="font-[Sora] text-white">
										CEO
									</div>
								</div>

								<div className="flex items-center justify-center gap-4 w-full">
									<Avatar>
										<AvatarImage
											src={
												"/images/countries/united-states.png"
											}
											alt=""
										/>
									</Avatar>
									<Avatar>
										<AvatarImage
											src={"/images/countries/canada.png"}
											alt=""
										/>
									</Avatar>
									<Avatar>
										<AvatarImage
											src={"/images/countries/india.png"}
											alt=""
										/>
									</Avatar>
								</div>
							</MoveUpFadeInSection>
							<MoveUpFadeInSection className="max-w-[400px] bg-gradient-to-b from-slate-700 to-slate-900 rounded-lg shadow-sm flex flex-col gap-8 p-8 h-full w-full items-center justify-between">
								<Image
									src={"/images/company/person2.png"}
									alt=""
									width={700}
									height={500}
									className="object-contain"
								/>

								<div className="flex flex-col gap-2 w-full justify-center items-center">
									<div className="text-2xl font-[Sora] text-white font-semibold">
										Ramneek Kochar
									</div>

									<div className="font-[Sora] text-white">
										National Sales Director
									</div>
								</div>

								<div className="flex items-center justify-center gap-4 w-full">
									<Avatar>
										<AvatarImage
											src={"/images/countries/canada.png"}
											alt=""
										/>
									</Avatar>
									<Avatar>
										<AvatarImage
											src={"/images/countries/india.png"}
											alt=""
										/>
									</Avatar>
								</div>
							</MoveUpFadeInSection>
							<MoveUpFadeInSection className="max-w-[400px] bg-gradient-to-b from-slate-700 to-slate-900 rounded-lg shadow-sm flex flex-col gap-8 p-8 h-full w-full items-center justify-between">
								<Image
									src={"/images/company/person3.png"}
									alt=""
									width={700}
									height={500}
									className="object-contain"
								/>

								<div className="flex flex-col gap-2 w-full justify-center items-center">
									<div className="text-2xl font-[Sora] text-white font-semibold">
										Sivaram Elangovan
									</div>

									<div className="font-[Sora] text-white">
										COO
									</div>
								</div>

								<div className="flex items-center justify-center gap-4 w-full">
									<Avatar>
										<AvatarImage
											src={
												"/images/countries/united-states.png"
											}
											alt=""
										/>
									</Avatar>
									<Avatar>
										<AvatarImage
											src={"/images/countries/canada.png"}
											alt=""
										/>
									</Avatar>
								</div>
							</MoveUpFadeInSection>
							<MoveUpFadeInSection className="max-w-[400px] bg-gradient-to-b from-slate-700 to-slate-900 rounded-lg shadow-sm flex flex-col gap-8 p-8 h-full w-full items-center justify-between">
								<Image
									src={"/images/company/person1.png"}
									alt=""
									width={700}
									height={500}
									className="object-contain"
								/>

								<div className="flex flex-col gap-2 w-full justify-center items-center">
									<div className="text-2xl font-[Sora] text-white font-semibold">
										Jumesh Walia
									</div>

									<div className="font-[Sora] text-white">
										CEO
									</div>
								</div>

								<div className="flex items-center justify-center gap-4 w-full">
									<Avatar>
										<AvatarImage
											src={
												"/images/countries/united-states.png"
											}
											alt=""
										/>
									</Avatar>
									<Avatar>
										<AvatarImage
											src={"/images/countries/canada.png"}
											alt=""
										/>
									</Avatar>
								</div>
							</MoveUpFadeInSection>
							<MoveUpFadeInSection className="max-w-[400px] bg-gradient-to-b from-slate-700 to-slate-900 rounded-lg shadow-sm flex flex-col gap-8 p-8 h-full w-full items-center justify-between">
								<Image
									src={"/images/company/person1.png"}
									alt=""
									width={700}
									height={500}
									className="object-contain"
								/>

								<div className="flex flex-col gap-2 w-full justify-center items-center">
									<div className="text-2xl font-[Sora] text-white font-semibold">
										Jumesh Walia
									</div>

									<div className="font-[Sora] text-white">
										CEO
									</div>
								</div>

								<div className="flex items-center justify-center gap-4 w-full">
									<Avatar>
										<AvatarImage
											src={
												"/images/countries/united-states.png"
											}
											alt=""
										/>
									</Avatar>
									<Avatar>
										<AvatarImage
											src={
												"/images/countries/united-states.png"
											}
											alt=""
										/>
									</Avatar>
									<Avatar>
										<AvatarImage
											src={
												"/images/countries/united-states.png"
											}
											alt=""
										/>
									</Avatar>
								</div>
							</MoveUpFadeInSection>
						</div>
					</div>
				</FadeInSection>

				<Footer />
			</div>
		</>
	);
}
