"use client"

import { Button } from "@/components/ui/button"
import { useEffect } from "react"
import Image from "next/image"

export function PremiumHeader() {
  useEffect(() => {
    const script = document.createElement("script")
    script.innerHTML = `
      (function (C, A, L) { 
        let p = function (a, ar) { a.q.push(ar); }; 
        let d = C.document; 
        C.Cal = C.Cal || function () { 
          let cal = C.Cal; 
          let ar = arguments; 
          if (!cal.loaded) { 
            cal.ns = {}; 
            cal.q = cal.q || []; 
            d.head.appendChild(d.createElement("script")).src = A; 
            cal.loaded = true; 
          } 
          if (ar[0] === L) { 
            const api = function () { p(api, arguments); }; 
            const namespace = ar[1]; 
            api.q = api.q || []; 
            if(typeof namespace === "string"){
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar); 
            return;
          } 
          p(cal, ar); 
        }; 
      })(window, "https://app.cal.com/embed/embed.js", "init"); 
      Cal("init", "30min", {origin:"https://app.cal.com"});   
      Cal.ns["30min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    `
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Image
              src="/vocalogo-small.png"
              alt="Voca Logo"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
              priority
            />
            <span className="font-semibold text-lg">Voca</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("industries")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Industries
            </button>
            <button
              onClick={() => scrollToSection("use-cases")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Use Cases
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              size="sm"
              data-cal-link="xinyue-fang/30min"
              data-cal-namespace="30min"
              data-cal-config='{"layout":"month_view"}'
            >
              Book Demo
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
