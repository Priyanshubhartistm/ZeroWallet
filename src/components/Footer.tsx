import { Link } from 'react-router-dom';
import { Github, Fingerprint } from 'lucide-react';

export function Footer() {
    return (
        <footer className="relative mt-auto  bg-gradient-to-b from-background to-background/80">
            <div className="container mx-auto px-4 py-12 relative">
                <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center">
                                <Fingerprint className="w-4 h-4 text-primary-foreground" />
                            </div>
                            <span className="text-sm font-semibold">
                                <span className="text-gradient-primary">Zero</span>
                                <span className="text-foreground">Wallet</span>
                            </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Built by <span className="text-primary font-medium">Priyanshu Bharti</span> · Powered by <Link className="text-primary hover:underline" to="https://docs.lazorkit.com/">LazorKit SDK</Link>
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/Priyanshubhartistm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all hover:scale-105"
                            aria-label="GitHub"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom glow */}
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </footer>
    );
}
