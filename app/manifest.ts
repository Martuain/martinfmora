import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Martin Mora",
    short_name: "Martin Mora",
    description: "Business outcomes, AI strategy, and digital systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f6f1",
    theme_color: "#f8f6f1",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml"
      }
    ]
  };
}
