import * as mars3d from "mars3d";
import { useEffect } from "react";

const App = () => {
	useEffect(() => {
		new mars3d.Map("mars3d-container", {
			scene: {
				//默认视角参数
				center: {
					// 经度值, 180 - 180
					lng: 116.412834,
					// 纬度值, -90 - 90
					lat: 39.884141,
					// 高度
					alt: 242.1,
					// 方向角度值，绕垂直于地心的轴旋转角度, 0至360
					heading: 45,
					// 俯仰角度值，绕纬度线旋转角度,-90至90
					pitch: -39.1,
				},
			},
			control: {
				// 视角复位按钮
				homeButton: true,
				// 放大缩小按钮
				zoom: true,
				// 二三维切换按钮
				sceneModePicker: true,
				// 全屏按钮
				fullscreenButton: true,
				// 帮助按钮
				navigationHelpButton: true,
				// 鼠标滚轮缩放美化样式(指示图标)
				mouseDownView: true,
				// 导航球
				compass: true,
			},
			terrain: {
				url: "http://data.mars3d.cn/terrain",
				show: true,
			},
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
