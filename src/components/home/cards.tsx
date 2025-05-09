"use client";

import {  Braces, Sparkles, Hammer, Share2, Flame, FileText, Tent } from "lucide-react";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";
import { APICard } from "@/components/home/api";
import { Shimmer, Marquee, Retro } from "@/components/ui";

const hooks = [
  {
    title: "前端物语",
    description: "整理前端常用知识点（面试八股文）探索前端技术的奇妙世界，从框架实践到性能优化。",
  },
  {
    title: "踩坑记录",
    description: "那些年我们踩过的坑，总有一些让你意想不到的问题。开发避坑指南，记录实战中遇到的各种难题与解决方案。",
  },
  {
    title: "源码阅读",
    description: "了解各种库的实现原理，学习其中的小技巧和冷知识。剖析经典框架与库，洞察代码逻辑与设计模式。",
  },
  {
    title: "提效工具",
    description: "工欲善其事，必先利其器。记录开发和日常使用中所用到的软件、插件、扩展等。",
  },
];

function CommitCard({ className, comment, icon }: { className?: string; comment: string; icon: ReactNode }) {
  return (
    <div
      className={cn(
        "dark:bg-fd-muted/25 bg-fd-muted border-fd-border/50 absolute inline-flex h-10 w-80 transform select-none items-center rounded-full border px-3 transition-all group-hover:-right-4 lg:w-72",
        className,
      )}
    >
      <span>{icon}</span>
      <Shimmer color="#888" className="font-mono text-xs" text={comment} />
    </div>
  );
}

const commits = [
  {
    comment: "feat: 添加社交媒体分享封面图",
    icon: <Share2 className="text-fd-foreground/50 mr-2 size-4" />,
    className: "-right-4",
  },
  {
    comment: "fix: 修复存在表格时，表格宽度溢出的问题",
    icon: (
      <Sparkles className="text-fd-foreground/50 mr-2 size-4 transform transition group-hover:rotate-180 group-hover:fill-amber-500 group-hover:stroke-amber-500" />
    ),
    className: "-right-12 top-12",
  },
  {
    comment: "docs: 修正措辞和改善文档",
    icon: <Hammer className="text-fd-foreground/50 mr-2 size-4" />,
    className: "-right-24 top-24",
  },
];

export const features = [
  {
    Icon: Flame,
    name: "持续更新中",
    description: "知识宇宙持续 “大爆炸”，海量信息汹涌汇聚，我们的知识库正以多维迭代之姿火热更新。",
    className: "lg:row-start-1 lg:row-end-1 lg:col-start-1 lg:col-end-2 rounded-t-2xl lg:rounded-tl-2xl lg:rounded-tr-none border-b-[0.5px] border-r-[1px] lg:border-r-[0.5px] border-t-[1px] border-l-[1px]",
    background: (
      <div className="absolute right-0 top-9">
        {commits.map((commit, index) => (
          <CommitCard
            className={commit.className}
            key={index}
            icon={commit.icon}
            comment={commit.comment}
          />
        ))}
      </div>
    ),
  },
  {
    Icon: Braces,
    name: "OpenAPI 支持",
    description: "WhoaNote 支持生成 OpenAPI 架构的文档",
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-2 lg:rounded-br-2xl lg:rounded-tr-none border-b-[0.5px] lg:border-b-[1px] border-r-[1px] border-t-[0.5px] border-l-[1px] lg:border-l-[0.5px]",
    background: (
      <div className="flex h-full w-full items-center justify-center">
        <APICard
          className="absolute top-20"
          method="GET"
          endpoint="/api/notes/:title"
        />
      </div>
    ),
  },
  {
    Icon: Tent,
    name: "杂七杂八",
    description: "本知识库和所生成的页面均由创作者们维护，涉及到生活中各方面知识和内容，承载无限畅想。",
    className: "lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3 lg:rounded-bl-2xl border-b-[1px] lg:border-r-[0.5px] border-t-[0.5px] border-l-[1px] lg:rounded-bl-2xl border-b-[0.5px] lg:border-b-[1px] border-r-[1px] border-t-[0.5px] border-l-[1px]",
    background: (
      <>
        <Marquee
          pauseOnHover
          className="absolute top-10 h-64 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] lg:rounded-bl-2xl"
        >
          {hooks.map((hook, idx) => (
            <figure
              key={idx}
              className={cn(
                "relative w-44 cursor-pointer overflow-hidden rounded-xl border p-4",
                "border-neutral-950/[.1] bg-neutral-950/[.01] hover:bg-neutral-950/[.05]",
                "dark:border-neutral-50/[.1] dark:bg-neutral-50/[.10] dark:hover:bg-neutral-50/[.15]",
                "transform-gpu transition-all duration-300 ease-in-out",
              )}
            >
              <div className="flex flex-row items-center gap-2">
                <div className="flex flex-col">
                  <figcaption className="text-sm font-medium dark:text-white">
                    {hook.title}
                  </figcaption>
                </div>
              </div>
              <blockquote className="mt-2 text-xs">
                {hook.description}
              </blockquote>
            </figure>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white dark:from-neutral-950"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-white dark:from-neutral-950"></div>
      </>
    ),
  },
  {
    Icon: FileText,
    name: "皆为 Markdown",
    description: "使用 Markdown 及其拓展语法 MDX 编写笔记，每个页面都是独立的 Markdown(MDX) 文件。",
    className: "lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-1 rounded-b-2xl lg:rounded-br-none lg:rounded-tr-2xl lg:rounded-bl-none border-b-[1px] lg:border-b-[0.5px] border-r-[1px] border-t-[1px] border-l-[1px] lg:border-l-[0.5px]",
    background: (
      <Retro
        angle={15}
        cellSize={75}
        darkLineColor="#666666"
        lightLineColor="#000000"
        className="absolute inset-0"
      />
    ),
  },
];
