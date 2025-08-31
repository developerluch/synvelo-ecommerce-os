import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play, X, Users, Calendar, Clock } from "lucide-react";

interface DemoModalProps {
  trigger: React.ReactNode;
}

const DemoModal = ({ trigger }: DemoModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full bg-background border border-glass-border">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 p-2 rounded-lg hover:bg-glass-hover transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="p-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">See Synvelo in Action</h2>
            <p className="text-foreground-secondary text-lg">
              Watch how our AI agents automate your entire Amazon business
            </p>
          </div>

          {/* Video Container */}
          <div className="relative aspect-video bg-navy/10 rounded-xl mb-8 flex items-center justify-center group cursor-pointer hover:bg-navy/20 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-navy/20 to-transparent rounded-xl" />
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-navy/90 hover:bg-navy rounded-full mb-4 group-hover:scale-110 transition-all duration-300">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
              <p className="text-navy font-semibold">Click to Play Demo Video</p>
              <p className="text-sm text-foreground-muted">5 minute overview</p>
            </div>
          </div>

          {/* Demo Options */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-glass backdrop-blur-lg rounded-xl border border-glass-border hover:border-glass-border-hover hover:bg-glass-hover transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-navy/10 text-navy rounded-lg mb-4 group-hover:bg-navy/20 transition-colors">
                <Play className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Quick Demo</h3>
              <p className="text-sm text-foreground-secondary mb-4">
                5-minute video walkthrough of key features
              </p>
              <Button variant="outline-navy" size="sm" className="w-full">
                Watch Now
              </Button>
            </div>

            <div className="text-center p-6 bg-glass backdrop-blur-lg rounded-xl border border-glass-border hover:border-glass-border-hover hover:bg-glass-hover transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-navy/10 text-navy rounded-lg mb-4 group-hover:bg-navy/20 transition-colors">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Live Demo</h3>
              <p className="text-sm text-foreground-secondary mb-4">
                Book a personalized 30-minute demo call
              </p>
              <Button variant="hero" size="sm" className="w-full">
                Schedule Call
              </Button>
            </div>

            <div className="text-center p-6 bg-glass backdrop-blur-lg rounded-xl border border-glass-border hover:border-glass-border-hover hover:bg-glass-hover transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-navy/10 text-navy rounded-lg mb-4 group-hover:bg-navy/20 transition-colors">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Group Demo</h3>
              <p className="text-sm text-foreground-secondary mb-4">
                Join our weekly group demo sessions
              </p>
              <Button variant="outline-navy" size="sm" className="w-full">
                Join Session
              </Button>
            </div>
          </div>

          {/* Next Demo Times */}
          <div className="mt-8 text-center p-4 bg-navy/10 rounded-lg border border-navy/20">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-navy" />
              <span className="text-sm font-medium text-navy">Next Live Demo Sessions</span>
            </div>
            <div className="text-sm text-foreground-secondary">
              Today 3:00 PM EST • Tomorrow 11:00 AM EST • Friday 2:00 PM EST
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoModal;