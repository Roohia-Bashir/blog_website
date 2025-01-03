import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft } from 'lucide-react'

export default function ResearchPage() {
  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 bg-[#4f4f50]">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2072&auto=format&fit=crop")',
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
                Research
              </Badge>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter text-[#EEEEEE]">
                Deep Learning Focus
              </h1>
            </div>
            
            <div className="space-y-4 text-[#777775]">
              <p>
                Our research team is dedicated to advancing the field of artificial intelligence 
                through rigorous scientific investigation and experimental development. We focus 
                on deep learning and neural networks to solve complex problems.
              </p>
              
              <div className="grid gap-4 sm:grid-cols-2 mt-6">
                <div className="p-4 rounded-lg bg-[rgba(114,112,114,0.5)] border border-[#777376]">
                  <h3 className="text-xl font-semibold text-[#EEEEEE] mb-2">Advanced AI Models</h3>
                  <p className="text-[#777775]">
                    Developing sophisticated neural networks and machine learning algorithms for 
                    complex problem-solving.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[rgba(114,112,114,0.5)] border border-[#777376]">
                  <h3 className="text-xl font-semibold text-[#EEEEEE] mb-2">Research Papers</h3>
                  <p className="text-[#777775]">
                    Publishing groundbreaking findings in top-tier academic journals and conferences.
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

