'use client'
import React from 'react';
import { motion } from 'framer-motion';

const LanguagesProgress = () => {
    const languages = [
        { language: 'C++', proficiency: 70, bgColor: '#838fe9' },
        { language: 'Python', proficiency: 55, bgColor: '#81d8d0' },
        { language: 'JavaScript', proficiency: 65, bgColor: '#2965F1' },
        { language: 'SQL', proficiency: 40, bgColor: '#61DAFB' },
        { language: 'Next.js', proficiency: 70, bgColor: '#ffabe7' },
        { language: 'React', proficiency: 75, bgColor: '#b068cb' },
    ];

    return (
        <div className="max-w-lg">
            <h4 className="bold-20 mb-4 uppercase">Languages / Frameworks Proficiency</h4>
            <div className="flexStart flex-wrap">
                {languages.map((lang, index) => (
                    <CircularProgress
                        key={index}
                        language={lang.language}
                        proficiency={lang.proficiency}
                        bgColor={lang.bgColor}
                    />
                ))}
            </div>
        </div>
    );
};

const CircularProgress = ({ language, proficiency, bgColor }) => {
    const radius = 20; // Radius of the circle
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference * (1 - proficiency / 100);

    return (
        <div>
            <svg className="w-24 h-24 mr-1" viewBox="0 0 50 50">
                <circle
                    className="circle-bg"
                    cx="25"
                    cy="25"
                    r={radius}
                    fill="none"
                    stroke="#e0e0e0"
                    strokeWidth="7"
                />
                <motion.circle
                    className="circle"
                    cx="25"
                    cy="25"
                    r={radius}
                    fill="none"
                    stroke={bgColor}
                    strokeWidth="4"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset: strokeDashoffset }}
                    transition={{ duration: 1 }}
                    strokeLinecap="round"
                />
                <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="grey"
                    fontSize="6px"
                    fontWeight="bold"
                >
                    {language}
                </text>
            </svg>
        </div>
    );
};

export default LanguagesProgress;