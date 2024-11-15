"use client"

import { testimonials } from "@/lib/extensions/data/mock"
import { Marquee } from "@devnomic/marquee"
import "@devnomic/marquee/dist/index.css"
import Image from "next/image"

export interface TestimonialProps {
  name: string
  title: string
  avatar: string
  content: string
}

function Testimonials() {
  return (
    <div className="">
      <Marquee
        fade={true}
        direction="left"
        reverse={false}
        pauseOnHover={false}
        className="pb-24 gap-24" // pass class to change gap or speed
        innerClassName="gap-24" // pass class to change gap or speed
      >
        {testimonials.map((testimonial, i) => (
          <TestimonialCard
            key={i}
            name={testimonial.name}
            title={testimonial.title}
            avatar={testimonial.avatar}
            content={testimonial.content}
          />
        ))}
      </Marquee>
    </div>
  )
}

export default Testimonials

export function TestimonialCard({
  name,
  title,
  avatar,
  content,
}: TestimonialProps) {
  return (
    <div className="w-[300px] border space-y-3 rounded-lg bg-white px-5 py-3  shadow-sm text-sm">
      <div className="flex items-center gap-2">
        <Image
          src={avatar}
          alt={name}
          className="h-16 w-16 rounded-full"
          width={1000}
          height={1000}
        />
        <div>
          <div className="font-medium text-base">{name}</div>
          <div className="text-stone-600">{title}</div>
        </div>
      </div>
      {/* <FiveStars /> */}
      <div className="whitespace-pre-line text-stone-600">{content}</div>
    </div>
  )
}
