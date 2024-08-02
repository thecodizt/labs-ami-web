"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ChevronDownIcon, MenuIcon } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import {
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useEffect, useState } from "react";
import VideoOverlay from "./ui/video-overlay";

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

const countries = [
	{
		name: "United States",
		href: "https://www.americanmerchantsinc.com/",
		image: "/images/countries/united-states.png",
		video: "/images/videos/three-stops.mp4",
	},
	{
		name: "Canada",
		href: "/canada",
		image: "/images/countries/canada.png",
		video: "/images/videos/to-canada.mp4",
	},

	{
		name: "India",
		href: "https://amimerchants.in/",
		image: "/images/countries/india.png",
		video: "/images/videos/to-india.mp4",
	},
];

const Header = ({
	variant = "light",
	active = null,
}: {
	variant?: "light" | "dark";
	active?: string | null;
}) => {
	const router = useRouter();
	const [selectedCountry, setSelectedCountry] = useState(countries[0]); // Default to United States

	return (
		<header className="bg-gradient-to-r from-BLUE to-GOLD p-[2px] rounded-[10px] shadow-md">
			<div
				className={
					"h-full w-full flex items-center justify-between p-4 rounded-[8px]" +
					(variant === "dark"
						? " bg-PURPLE text-slate-300"
						: " bg-white text-slate-600")
				}
			>
				<div className="hidden lg:block">
					<Image
						src={"/logos/blue.svg"}
						alt="AMI"
						width={100}
						height={40}
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

				<div className="hidden lg:flex items-center justify-between gap-4">
					<div className="bg-gradient-to-r from-GOLD to-BLUE rounded-full p-[2px] hover:shadow-sm">
						<Avatar>
							<AvatarImage
								src={selectedCountry.image}
								alt={selectedCountry.name}
							/>
						</Avatar>
					</div>
					<div>{selectedCountry.name}</div>
					<DropdownMenu>
						<DropdownMenuTrigger className="flex items-center gap-2">
							<ChevronDownIcon className="h-4 w-4" />
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuLabel>
								Select Country
							</DropdownMenuLabel>
							<DropdownMenuSeparator />
							{countries.map((country, index) => (
								<DropdownMenuItem key={index}>
									<VideoOverlay
										trigger={
											<div
												className="flex items-center gap-2 p-4 hover:bg-muted"
												onClick={() =>
													setSelectedCountry(country)
												}
											>
												<Avatar>
													<AvatarImage
														src={country.image}
														alt={country.name}
													/>
												</Avatar>
												<span>{country.name}</span>
											</div>
										}
										videoPath={
											country.video
												? country.video
												: "/images/videos/three-stops.mp4"
										}
										url={country.href}
									/>
								</DropdownMenuItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
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
								className="flex flex-col gap-2 p-6 w-full"
								variants={container}
								initial="hidden"
								animate="visible"
							>
								<motion.li
									className="text-sm w-full text-center py-4"
									variants={item}
								>
									Choose a country
								</motion.li>
								<motion.li className="item" variants={item}>
									<div className="flex items-center gap-2 p-4 border-b mb-2">
										<Avatar>
											<AvatarImage
												src={selectedCountry.image}
												alt={selectedCountry.name}
											/>
										</Avatar>
										<span>{selectedCountry.name}</span>
									</div>
								</motion.li>
								{countries
									.filter(
										(country) =>
											country.name !==
											selectedCountry.name
									)
									.map((country, index) => (
										<motion.li
											key={index}
											className="item"
											variants={item}
										>
											<Link
												href={country.href}
												className="flex items-center gap-2 p-4 hover:bg-muted w-full"
												onClick={() =>
													setSelectedCountry(country)
												}
											>
												<Avatar>
													<AvatarImage
														src={country.image}
														alt={country.name}
													/>
												</Avatar>
												<span>{country.name}</span>
											</Link>
										</motion.li>
									))}
							</motion.ul>
						</DrawerContent>
					</Drawer>
				</div>
			</div>
		</header>
	);
};

export { Header };
