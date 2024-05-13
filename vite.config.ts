import react from "@vitejs/plugin-react-swc";
import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";
import { mars3dPlugin } from "vite-plugin-mars3d";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), UnoCSS(), mars3dPlugin()],
	server: {
		open: true,
		host: "0.0.0.0",
	},
});
