import React from "react";

interface Suggestion {
    type: "good" | "improve";
    tip: string;
}

interface ATSProps {
    score: number;
    suggestions: Suggestion[];
}

const ATS: React.FC<ATSProps> = ({ score, suggestions }) => {
    // Background Gradient Logic
    const gradientClass =
        score > 69
            ? "from-green-100"
            : score > 49
                ? "from-yellow-100"
                : "from-red-100";

    // Icon Based on Score

    const getIcon = () => {
        if (score > 69) return "/icons/ats-good.svg";
        if (score > 49) return "/icons/ats-warning.svg";
        return "/icons/ats-bad.svg";
    };

    const getSuggestionIcon = (type: "good" | "improve") =>
        type === "good" ? "/icons/check.svg" : "/icons/warning.svg";

    return (
        <div className={`p-6 rounded-2xl bg-gradient-to-br ${gradientClass} shadow-md`}>

            {/* Top Section */}

            <div className="flex items-center gap-4 mb-4">
                <img
                    src={getIcon()}
                    alt="ATS Status"
                    className="w-10 h-10"
                />

                <h2 className="text-xl font-bold">ATS Score – {score}/100</h2>
            </div>


            {/* Description Section */}

            <div className="mb-4">
                <h3 className="text-lg font-semibold">Applicant Tracking System Review</h3>
                <p className="text-gray-600 text-sm">
                    Based on your ATS scan results, here’s how your resume performed and what can be improved.
                </p>
            </div>

                    {/* Suggestions */}

            <div className="flex flex-col gap-3">
                {suggestions.map((item, i) => (
                    <div key={i} className="flex gap-3 items-start">
                        <img
                            src={getSuggestionIcon(item.type)}
                            className="w-5 h-5 mt-1"
                            alt="suggestion icon"
                        />
                        <p className="text-sm">{item.tip}</p>
                    </div>
                ))}
            </div>


            {/* Closing Line */}

            <p className="mt-4 font-medium text-gray-800">
                Keep improving your resume for a higher ATS match score!
            </p>
        </div>
    );
};

export default ATS;
