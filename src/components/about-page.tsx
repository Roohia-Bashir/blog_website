import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function AboutSection() {
  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 bg-[#4f4f50]">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-[#252427]/90" />
      </div>

      {/* Content */}
      <Card className="relative max-w-3xl bg-[#252427] border-[#777376]">
        <CardContent className="p-6 sm:p-8">
          <div className="space-y-6 text-center">
            <div className="space-y-2">
              <Badge className="bg-[#646263] text-[#EEEEEE] hover:bg-[#777775]">
                About Us
              </Badge>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter text-[#EEEEEE]">
                Exploring the Future of AI
              </h1>
            </div>
            
            <p className="text-[#777775] leading-relaxed max-w-2xl mx-auto">
              Welcome to our AI journey. We are passionate about pushing the boundaries of artificial intelligence 
              and creating innovative solutions that shape tomorrow. Our mission is to make AI technology 
              accessible and beneficial for everyone, driving progress through cutting-edge research and 
              practical applications.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <Link href="/about/innovation" className="transition-transform hover:scale-105">
                <div className="p-4 rounded-lg bg-[rgba(114,112,114,0.5)] hover:bg-[#646263] cursor-pointer transition-colors border border-[#777376]">
                  <h3 className="text-xl font-semibold text-[#EEEEEE]">Innovation</h3>
                  <p className="text-[#777775] text-sm mt-1">Pushing boundaries</p>
                </div>
              </Link>
              <Link href="/about/research" className="transition-transform hover:scale-105">
                <div className="p-4 rounded-lg bg-[rgba(114,112,114,0.5)] hover:bg-[#646263] cursor-pointer transition-colors border border-[#777376]">
                  <h3 className="text-xl font-semibold text-[#EEEEEE]">Research</h3>
                  <p className="text-[#777775] text-sm mt-1">Deep learning focus</p>
                </div>
              </Link>
              <Link href="/about/impact" className="transition-transform hover:scale-105">
                <div className="p-4 rounded-lg bg-[rgba(114,112,114,0.5)] hover:bg-[#646263] cursor-pointer transition-colors border border-[#777376]">
                  <h3 className="text-xl font-semibold text-[#EEEEEE]">Impact</h3>
                  <p className="text-[#777775] text-sm mt-1">Global solutions</p>
                </div>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

