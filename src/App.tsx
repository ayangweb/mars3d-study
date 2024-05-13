import * as mars3d from "mars3d";
import { useEffect } from "react";

const App = () => {
	useEffect(() => {
		new mars3d.Map("mars3d-container", {
			basemaps: [
				{
					// @ts-ignore
					name: "天地图",
					type: "tdt",
					layer: "img_d",
					show: true,
				},
			],
		});
	}, []);

	return <div id="mars3d-container" className="h-screen" />;
};

export default App;
