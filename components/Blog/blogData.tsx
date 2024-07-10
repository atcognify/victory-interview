import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title:
      "The Rise of Linux Rootkits on VMware ESXi VMs: Understanding the Threat and Past Cybersecurity Issues",
    paragraph:
      "Rootkits on VMware ESXi VMs pose a critical threat to cybersecurity. Understanding their rise and past issues is crucial for safeguarding virtual environments.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Jane Smith",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title:
      "VMWare Workers Face Return-to-Office Mandate After $69 Billion Merger",
    paragraph:
      "Many employees have grown accustomed to the convenience of working from home and have successfully adapted to this new way of operating.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Jane Smith",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title:
      "Broadcom Secures Regulatory Approval in China, Set to Close VMware Acquisition",
    paragraph:
      "Broadcom’s regulatory approval for its acquisition of VMware in China signifies a major achievement for the company and paves the way for the deal’s completion.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Jane Smith",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
