import { Header } from "@/components/header";
import { MoveUpFadeInSection } from "@/components/ui/move-up-fade-in-section";
import { TimelineComponent } from "@/components/ui/timeline";

const CompanyPage = () => {
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
			event: "AMI decided to spread it's wings globally and launched in India",
		},
		{
			year: 2013,
			event: "AMI added ATM services under it's umbrella through Switch Commerce Partnership",
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
	return (
		<div className="flex gap-2 p-2 bg-gradient-to-b from-BLUE via-GOLD to-white scrollbar-hide flex-col">
			<Header active={"company"} />
			<div className="rounded-lg h-full w-full bg-PURPLE text-white shadow-sm flex flex-col p-4 items-center">
				<MoveUpFadeInSection className="bg-gradient-to-b from-slate-800 to-slate-600 text-white text-2xl font-bold font-[Sora] text-center p-4 rounded-lg">
					Our Journey
				</MoveUpFadeInSection>
				<TimelineComponent data={timelineData} />
			</div>
		</div>
	);
};

export default CompanyPage;
