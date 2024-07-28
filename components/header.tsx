"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import Link from "next/link";

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

const options = [
	{ name: "About Us", href: "/about-us" },
	{ name: "Company", href: "/company" },
	{ name: "Solutions", href: "/solutions" },
];

const Header = ({ variant = "light" }: { variant?: "light" | "dark" }) => {
	const router = useRouter();
	return (
		<header className="bg-gradient-to-r from-BLUE to-GOLD p-[2px] rounded-[10px] shadow-md">
			<div
				className={
					"h-full w-full flex items-center justify-between px-4 py-2  rounded-[8px]" +
					(variant === "dark"
						? " bg-PURPLE text-slate-300"
						: " bg-white text-slate-600")
				}
			>
				<div className="hidden lg:block">
					<Image
						src={"/logos/blue.svg"}
						alt="AMI"
						width={80}
						height={10}
						onClick={() => router.push("/")}
						className="cursor-pointer hover:transform hover:scale-105 transition-transform"
					/>
				</div>

				<div className="block lg:hidden">
					<Image
						src={"/logos/blue.svg"}
						alt="AMI"
						width={60}
						height={10}
						onClick={() => router.push("/")}
						className="cursor-pointer hover:transform hover:scale-105 transition-transform"
					/>
				</div>

				<div className="hidden lg:flex items-center justify-between gap-[100px]">
					<div className="flex items-center gap-6">
						<Button
							variant={"ghost"}
							onClick={() => router.push("/about-us")}
						>
							About Us
						</Button>
						<Button
							variant={"ghost"}
							onClick={() => router.push("/company")}
						>
							Company
						</Button>
						<Button
							variant={"ghost"}
							onClick={() => router.push("/solutions")}
						>
							Solutions
						</Button>
					</div>

					<div className="bg-gradient-to-r from-GOLD to-BLUE rounded-[10px] p-[2px] hover:shadow-sm">
						<Button
							variant={"ghost"}
							onClick={() => router.push("/contact-us")}
							className={
								"rounded-[8px] bg-white hover:bg-white" +
								(variant === "dark"
									? " bg-PURPLE text-slate-300"
									: "")
							}
							size={"sm"}
						>
							Contact Us
						</Button>
					</div>
				</div>

				<div className="block lg:hidden">
					<Drawer direction="right">
						<DrawerTrigger>
							<Button variant="ghost" size={"icon"}>
								<MenuIcon />
							</Button>
						</DrawerTrigger>
						<DrawerContent className="max-w-[50vw] h-screen ml-auto flex flex-col items-center justify-center">
							<motion.ul
								className="flex flex-col gap-2 p-6"
								variants={container}
								initial="hidden"
								animate="visible"
							>
								{options.map(({ name, href }, index) => (
									<motion.li
										key={index}
										className="item"
										variants={item}
									>
										<Link
											href={href}
											className="flex items-center gap-2 p-4 hover:bg-muted"
										>
											<span>{name}</span>
										</Link>
									</motion.li>
								))}
								<motion.li
									className="bg-gradient-to-r from-GOLD to-BLUE rounded-[10px] p-[2px] hover:shadow-sm"
									variants={item}
								>
									<Button
										variant={"ghost"}
										onClick={() =>
											router.push("/contact-us")
										}
										className={
											"w-full rounded-[8px] bg-white hover:bg-white"
										}
									>
										Contact Us
									</Button>
								</motion.li>
							</motion.ul>
						</DrawerContent>
					</Drawer>
				</div>
			</div>
		</header>
	);
};

export { Header };
