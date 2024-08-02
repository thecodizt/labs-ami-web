"use client";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { Input } from "./ui/input";
import Image from "next/image";
import { MoveUpFadeInSection } from "./ui/move-up-fade-in-section";
import { InfiniteMovingCardsFooter } from "./ui/infinite-moving-cards-footer";

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
			<MoveUpFadeInSection className="hidden lg:block p-8 bg-PURPLE rounded-lg shadow-sm h-full w-full text-['Poppins'] text-white">
				{(inView: boolean) => (
					<MoveUpFadeInSection className="flex flex-col gap-12 px-6 pt-8 w-full h-full justify-between">
						<div className="w-full flex items-center justify-between gap-4 text-3xl font-bold">
							<MoveUpFadeInSection className="bg-gradient-to-r from-BLUE to-GOLD bg-clip-text text-transparent text-bold text-5xl font-[Sora]">
								Seamless, secure and <br /> swift payments.
							</MoveUpFadeInSection>

							<MoveUpFadeInSection className="bg-gradient-to-br from-GOLD to-BLUE rounded-full p-[2px]">
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
							</MoveUpFadeInSection>
						</div>
						<div className="w-full flex items-center justify-between gap-4 text-3xl">
							<div className="w-[60%] flex gap-4">
								<MoveUpFadeInSection className="flex flex-col gap-2 w-full">
									<span className="bg-gradient-to-r from-BLUE to-GOLD bg-clip-text text-transparent text-bold text-3xl font-[Sora]">
										Canada
									</span>
									<span className="text-sm">
										AMI Merchants Services Inc, <br /> 13841
										Harper Road Surrey, <br /> BC Canada V3R
										5L5
									</span>
								</MoveUpFadeInSection>
								<MoveUpFadeInSection className="flex flex-col gap-2 w-full">
									<span className="bg-gradient-to-r from-BLUE to-GOLD bg-clip-text text-transparent text-bold text-3xl font-[Sora]">
										United States
									</span>
									<span className="text-sm">
										American Merchants Inc, <br /> 2219 W
										Olive Ave #106, <br /> Burbank, CA USA
										91506
									</span>
								</MoveUpFadeInSection>
								<MoveUpFadeInSection className="flex flex-col gap-2 w-full">
									<span className="bg-gradient-to-r from-BLUE to-GOLD bg-clip-text text-transparent text-bold text-3xl font-[Sora]">
										India
									</span>
									<span className="text-sm">
										AMI Merchant Services Pvt Ltd, <br />{" "}
										Suite 120 Edmonton Mall, <br /> The
										Bristol, Gurgaon, India
									</span>
								</MoveUpFadeInSection>
							</div>
							<div className="w-[40%] flex flex-col items-end justify-end gap-4 p-8">
								<MoveUpFadeInSection className="flex flex-col items-start gap-2">
									<span className="text-sm">
										Join our mailing list
									</span>
									<Input
										placeholder="Enter your email"
										className="w-[200px] h-10 p-2 rounded-full border border-slate-600 bg-transparent text-slate-600 outline-none"
									/>
								</MoveUpFadeInSection>
							</div>
						</div>

						<MoveUpFadeInSection className="w-full flex flex-col items-start justify-center gap-2 text-slate-400">
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
						</MoveUpFadeInSection>

						<div className="w-full flex justify-between items-center text-slate-400 text-xs pt-8">
							<span>
								Copyright ©️ American Merchants Inc. 2007 -
								2024. All rights reserved. American Merchants
								Inc. is a registered trade mark. Any
								unauthorised use is expressly prohibited{" "}
							</span>
							<span>Cookies Terms of Use Legal</span>
						</div>
					</MoveUpFadeInSection>
				)}
			</MoveUpFadeInSection>

			<MoveUpFadeInSection className="flex lg:hidden flex-col gap-4 p-8 bg-PURPLE rounded-lg shadow-sm h-[98vh] w-full text-['Poppins'] text-white">
				<div className="w-full flex flex-col items-center justify-center gap-4 text-2xl font-bold text-center">
					<MoveUpFadeInSection className="bg-gradient-to-r from-BLUE to-GOLD bg-clip-text text-transparent text-bold text2xl font-[Sora]">
						Seamless, secure and <br /> swift payments.
					</MoveUpFadeInSection>

					<MoveUpFadeInSection className="bg-gradient-to-br from-GOLD to-BLUE rounded-full p-[2px]">
						<Button
							variant={"ghost"}
							onClick={() => router.push("/contact-us")}
							className={
								"rounded-full h-full w-full p-4 bg-PURPLE hover:bg-PURPLE text-white text-xs"
							}
							size={"sm"}
						>
							Book a Consultation
						</Button>
					</MoveUpFadeInSection>
				</div>
				<MoveUpFadeInSection className="w-full flex flex-col items-center justify-center gap-4 p-4">
					<span className="text-sm">Join our mailing list</span>
					<Input
						placeholder="Enter your email"
						className="w-full h-10 p-2 rounded-full border border-slate-600 bg-transparent text-slate-600 outline-none"
					/>
				</MoveUpFadeInSection>

				<div className="w-full flex items-center justify-between gap-4 text-3xl">
					<InfiniteMovingCardsFooter />
				</div>

				<MoveUpFadeInSection className="w-full flex flex-col items-start justify-center gap-2 text-slate-400">
					<div className="flex gap-2 items-center">
						<Image
							src={"/images/hero/green-check.png"}
							alt="AMI"
							width={20}
							height={20}
						/>
						<span className="max-w-[80vw] text-xs font-light text-ellipsis text-nowrap overflow-hidden">
							For the US, American Merchants Inc is a registered
							ISO of Wells Fargo Bank, NA, Concord, CA, Fifth
							Third Bank, N.A. Cincinnati, OH, USA and Elavon,
							Inc. Georgia [a wholly owned subsidiary of U.S.
							Bancorp, Minneapolis, MN]
						</span>
					</div>

					<div className="flex gap-2 items-center">
						<Image
							src={"/images/hero/green-check.png"}
							alt="AMI"
							width={20}
							height={20}
						/>
						<span className="max-w-[80vw] text-xs font-light text-ellipsis text-nowrap overflow-hidden">
							For Canada, American Merchants Inc is a registered
							ISO of Wells Fargo Bank, NA, Concord, CA, Fifth
							Third Bank, N.A. Cincinnati, OH, USA and Elavon,
							Inc. Georgia [a wholly owned subsidiary of U.S.
							Bancorp, Minneapolis, MN]
						</span>
					</div>

					<div className="flex gap-2 items-center">
						<Image
							src={"/images/hero/green-check.png"}
							alt="AMI"
							width={20}
							height={20}
						/>
						<span className="max-w-[80vw] text-xs font-light text-ellipsis text-nowrap overflow-hidden">
							For India, American Merchants Inc is a registered
							ISO of Wells Fargo Bank, NA, Concord, CA, Fifth
							Third Bank, N.A. Cincinnati, OH, USA and Elavon,
							Inc. Georgia [a wholly owned subsidiary of U.S.
							Bancorp, Minneapolis, MN]
						</span>
					</div>
				</MoveUpFadeInSection>

				<div className="w-full h-full flex flex-col justify-end items-center text-slate-400 text-xs font-thin text-center pt-8 gap-8">
					<span>
						Copyright ©️ American Merchants Inc. 2007 - 2024. All
						rights reserved. American Merchants Inc. is a registered
						trade mark. Any unauthorised use is expressly prohibited{" "}
					</span>
					<span>Cookies Terms of Use Legal</span>
				</div>
			</MoveUpFadeInSection>
		</>
	);
};

export { Footer };
