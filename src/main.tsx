import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "virtual:uno.css";
import "@unocss/reset/tailwind-compat.css";
import "mars3d-cesium/Build/Cesium/Widgets/widgets.css";
import "mars3d/dist/mars3d.css";

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
