import { ArrowRight, BarChart, Brain, Briefcase } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <Image src={"./logo.png"} alt="The Brand Atelier Logo" width={80} height={80} className="h-10 w-auto" />
              <span className="text-xl font-bold">The Brand Atelier</span>
            </div>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link href="#services" className="text-sm font-medium hover:underline underline-offset-4">
              Services
            </Link>
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <Button>Get Started</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Strategic Marketing Solutions for Growing Brands
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Transform your brand's potential with expert marketing guidance and strategic leadership.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src={"./placeholder.png"}
                  alt="Hero Image"
                  width={500}
                  height={500}
                  className="aspect-square overflow-hidden rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Services</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Comprehensive marketing solutions tailored to your business needs
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <BarChart className="h-12 w-12" />
                <h3 className="text-xl font-bold">Content Marketing</h3>
                <p className="text-center text-muted-foreground">
                  Data-driven content strategies that engage your audience and drive conversions
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <Briefcase className="h-12 w-12" />
                <h3 className="text-xl font-bold">Fractional CMO</h3>
                <p className="text-center text-muted-foreground">
                  Expert marketing leadership without the full-time commitment
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <Brain className="h-12 w-12" />
                <h3 className="text-xl font-bold">Product Marketing</h3>
                <p className="text-center text-muted-foreground">
                  Strategic product positioning and go-to-market strategies
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Why Choose The Brand Atelier?</h2>
                <p className="text-muted-foreground md:text-xl">
                  We combine strategic thinking with creative execution to deliver exceptional results for our clients.
                </p>
                <ul className="grid gap-4">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>Proven track record of success</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>Customized solutions for your unique needs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>Expert team with diverse industry experience</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src={"./logo.png"}
                  alt="About Image"
                  width={500}
                  height={500}
                  className="aspect-square overflow-hidden rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full border-t bg-muted py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Let's Work Together</h2>
              <p className="text-muted-foreground md:text-xl">
                Ready to transform your brand? Get in touch to schedule a consultation.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Button size="lg">
                Schedule a Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2024 The Brand Atelier. All rights reserved.
            </p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

