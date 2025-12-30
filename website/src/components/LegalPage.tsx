import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'motion/react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LegalPageProps {
    source: string;
    title: string;
}

export default function LegalPage({ source, title }: LegalPageProps) {
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch(source)
            .then(res => res.text())
            .then(text => setContent(text))
            .catch(err => console.error(err));
    }, [source]);

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-white/20 pt-20 pb-32">
            <div className="container mx-auto px-4 relative z-10 max-w-4xl">
                <Link to="/" className="inline-flex items-center text-neutral-400 hover:text-white transition-colors mb-8">
                    <ChevronLeft size={20} className="mr-1" />
                    Back to Home
                </Link>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mb-12"
                >
                    {title}
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="prose prose-invert prose-lg max-w-none text-neutral-300"
                >
                    <ReactMarkdown>{content}</ReactMarkdown>
                </motion.div>
            </div>
        </div>
    );
}
