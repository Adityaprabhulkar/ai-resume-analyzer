import { Link } from "react-router";
import ScoreCircle from "~/components/ScoreCircle";
import Navbar from "~/components/Navbar";
import {usePuterStore} from "~/lib/puter";
import {useEffect, useState} from "react";

const ResumeCard = ({
                        resume: { id, companyName, jobTitle, feedback, imagePath },
                    }: {
    resume: Resume;
}) => {

    const { fs } = usePuterStore();
    const [resumeUrl, setResumeUrl] = useState("");

    useEffect(() => {
        const loadResume = async () => {
            const blob = await fs.read(imagePath);
            if (!blob) return;
            let url = URL.createObjectURL(blob);
            setResumeUrl(url);


        }
        loadResume()
    }, [imagePath]);
    return (
        <Link
            to={`/resume/${id}`}
            className="resume-card animate-in fade-in duration-1000">
            <div className="flex items-start justify-between mb-4">
                <div className="flex flex-col gap-1">
                    {companyName && <h2 className="text-xl font-bold text-black break-words">{companyName}</h2>}
                    {jobTitle && <h3 className="text-lg text-gray-500 break-words">{jobTitle}</h3>}
                    {!companyName && jobTitle && <h2 className="!text-black font-bold">Resume</h2>}
                </div>
                <div className="flex-shrink-0">
                    <ScoreCircle score={feedback.overallScore} />
                </div>
            </div>
            {resumeUrl && (
                <div className="gradient-border rounded-3xl overflow-hidden">
                <img
                    src={resumeUrl}
                    alt="resume"
                    className="w-full h-[350px] max-sm:h-[200px] object-cover object-top"
                />
            </div>
                )}
        </Link>
    );
};

export default ResumeCard;
