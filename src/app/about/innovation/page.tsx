import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft } from 'lucide-react'

export default function InnovationPage() {
  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 bg-[#4f4f50]">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2072&auto=format&fit=crop")',
        }}
      >
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
                Innovation
              </Badge>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter text-[#EEEEEE]">
                Pushing the Boundaries of AI
              </h1>
            </div>
            
            <div className="space-y-4 text-[#777775]">
              <p>
                Our innovation journey is driven by a relentless pursuit of technological advancement. 
                We are constantly exploring new frontiers in artificial intelligence, pushing the 
                boundaries of what is possible.
              </p>
              
              <div className="grid gap-4 sm:grid-cols-2 mt-6">
                <div className="p-4 rounded-lg bg-[rgba(114,112,114,0.5)] border border-[#777376]">
                  <h3 className="text-xl font-semibold text-[#EEEEEE] mb-2">Cutting-edge Technology</h3>
                  <p className="text-[#777775]">
                    Leveraging the latest advancements in machine learning and neural networks to 
                    create innovative solutions.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[rgba(114,112,114,0.5)] border border-[#777376]">
                  <h3 className="text-xl font-semibold text-[#EEEEEE] mb-2">Future-focused</h3>
                  <p className="text-[#777775]">
                    Developing next-generation AI systems that anticipate and shape the future of 
                    technology.
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

