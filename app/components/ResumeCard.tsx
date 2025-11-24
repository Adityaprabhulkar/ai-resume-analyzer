import { Link } from "react-router";
import ScoreCircle from "~/components/ScoreCircle";

const ResumeCard = ({
                        resume: { id, companyName, jobTitle, feedback, imagePath },
                    }: {
    resume: Resume;
}) => {
    return (
        <Link
            to={`/resume/${id}`}
            className="resume-card animate-in fade-in duration-1000">
            <div className="flex items-start justify-between mb-4">
                <div className="flex flex-col gap-1">
                    <h2 className="text-xl font-bold text-black break-words">{companyName}</h2>
                    <h3 className="text-lg text-gray-500 break-words">{jobTitle}</h3>
                </div>
                <div className="flex-shrink-0">
                    <ScoreCircle score={feedback.overallScore} />
                </div>
            </div>
            <div className="gradient-border rounded-3xl overflow-hidden">
                <img
                    src={imagePath}
                    alt="resume"
                    className="w-full h-[350px] max-sm:h-[200px] object-cover object-top"
                />
            </div>
        </Link>
    );
};

export default ResumeCard;
