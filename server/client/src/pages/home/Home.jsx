import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../../assets/Cassette player-amico.svg";
import { useTheme } from "../../Context/theme-context.js";
import { Features } from "../../components/Features";
import "./home.css";

function Home() {
	const { theme } = useTheme();

	return (
		<div>
			<section className="hero-section p-4">
				<div className="flex flex-col gap-y-4 justify-center text-center md:text-left px-10">
					<h1 className="text-4xl font-bold">
						Let your Emotion express the music.
					</h1>
					<p>
						Offering best music worldwide. Discover and stream constantly
						expanding mix of music from artists around the world.
					</p>
					<button
						className="hero-btn px-4 py-2 mx-auto md:mx-0"
						style={{
							backgroundColor: `${theme.mode.secondaryColor}`,
							color: `${theme.mode.bgColor}`,
						}}
					>
						<Link to="/choice">Listen Now</Link>
					</button>
				</div>
				<div>
					<img
						className="mx-auto w-4/6"
						src={heroImg}
						loading="eager"
						alt="hero"
					/>
				</div>
			</section>
			<Features />
		</div>
	);
}

export { Home };
