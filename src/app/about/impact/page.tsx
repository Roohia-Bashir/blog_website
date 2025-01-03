import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft } from 'lucide-react'
import Image from "next/image" // Import the Image component

export default function ImpactPage() {
  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 bg-[#4f4f50]">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat">
        {/* Using Image for background optimization, if needed */}
        <Image
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2072&auto=format&fit=crop"
          alt="Background image"
          layout="fill" // Makes the image cover the div
          objectFit="cover"
          objectPosition="center"
          priority
        />
        <div className="absolute inset-0 bg-[#252427]/90" />
      </div>

      <Card className="relative max-w-3xl bg-[#252427] border-[#777376]">
        <CardContent className="p-6 sm:p-8">
          <Link 
            href="/about" 
            className="inline-flex items-center text-[#777775] hover:text-[#EEEEEE] transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to About
          </Link>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <Badge className="bg-[#646263] text-[#EEEEEE] hover:bg-[#777775]">
                Impact
              </Badge>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter text-[#EEEEEE]">
                Global Solutions
              </h1>
            </div>
            
            <div className="space-y-4 text-[#777775]">
              <p>
                Our work in AI extends beyond technological advancement – we're committed to creating 
                positive change on a global scale. Through our solutions, we're addressing some of 
                the world's most pressing challenges.
              </p>
              
              <div className="grid gap-4 sm:grid-cols-2 mt-6">
                <div className="p-4 rounded-lg bg-[rgba(114,112,114,0.5)] border border-[#777376]">
                  <h3 className="text-xl font-semibold text-[#EEEEEE] mb-2">Global Reach</h3>
                  <p className="text-[#777775]">
                    Implementing AI solutions that benefit communities worldwide and drive 
                    positive change.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[rgba(114,112,114,0.5)] border border-[#777376]">
                  <h3 className="text-xl font-semibold text-[#EEEEEE] mb-2">Sustainable Future</h3>
                  <p className="text-[#777775]">
                    Creating AI-powered solutions that contribute to environmental sustainability 
                    and social progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
