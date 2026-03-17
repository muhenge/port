import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hervé M. Ngenzi | Full-Stack Web Developer",
    short_name: "Hervé Ngenzi",
    description:
      "Full-stack web developer focused on scalable backend systems, robust APIs, and clean, maintainable software.",
    start_url: "/",
    display: "standalone",
    background_color: "#f9fafb",
    theme_color: "#111827",
    icons: [
      {
        src: "/path21.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/path21.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
