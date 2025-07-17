
import React from 'react';
import type { Value, ExpertiseItem, ContentFormat, Testimonial, Stat } from './types';

const GrowthIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#ffd700]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;
const EmpathyIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#ffd700]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;
const ClarityIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#ffd700]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>;
const ActionIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#ffd700]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const ResilienceIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#ffd700]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>;

export const VALUES: Value[] = [
  { icon: <GrowthIcon />, title: 'Growth', description: 'Fostering a growth-first mindset to overcome career plateaus.' },
  { icon: <EmpathyIcon />, title: 'Empathy', description: 'Empathy-led coaching that understands the immigrant and professional journey.' },
  { icon: <ClarityIcon />, title: 'Clarity', description: 'Delivering career clarity and strategic direction, not just generic tips.' },
  { icon: <ActionIcon />, title: 'Action', description: 'Providing actionable tools and frameworks that lead to tangible results.' },
  { icon: <ResilienceIcon />, title: 'Resilience', description: 'Building resilience to navigate the challenges of the modern job market.' },
];

const GlobalIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3" /></svg>;
const ATSIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const CommunityIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.125-1.273-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.125-1.273.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;


export const EXPERTISE_ITEMS: ExpertiseItem[] = [
  { icon: <GlobalIcon/>, title: 'Global Talent Acquisition', description: '15 years of recruitment experience across US, Canada, UK, and India.' },
  { icon: <ATSIcon/>, title: 'ATS & Interview Mastery', description: 'Insider knowledge on ATS optimization and interview prep that gets results.' },
  { icon: <CommunityIcon/>, title: 'Community Building', description: 'Founder of job search communities with over 139,000 members.' },
];


const InfographicIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" /></svg>;
const CarouselIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2H5a2 2 0 00-2 2v2m14 0h-2" /></svg>;
const QuoteIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>;
const VideoIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>;


export const CONTENT_FORMATS: ContentFormat[] = [
    { icon: <InfographicIcon/>, title: "Text + Infographics", example: "“5 resume mistakes that make recruiters swipe left”" },
    { icon: <CarouselIcon/>, title: "Carousels", example: "“The 7-step job strategy I use for my coaching clients”" },
    { icon: <QuoteIcon/>, title: "Quotes & Billboards", example: "“Rejection is the gateway to opportunity.”" },
    { icon: <VideoIcon/>, title: "Videos", example: "“Why I tell newcomers to stop applying blindly”" },
];


export const TESTIMONIALS: Testimonial[] = [
    { quote: "Landed 3 interviews in 10 days after no calls for 6 months. Sajith's strategy is a game-changer.", author: 'Aisha K.', role: 'Software Engineer' },
    { quote: "Got my first job in Canada! I was lost, but Sajith’s FOCUS™ system gave me the clarity and confidence I needed.", author: 'Raj Patel', role: 'Project Manager' },
    { quote: "The best investment I made in my career. His insights on personal branding are priceless.", author: 'Maria Garcia', role: 'Marketing Specialist' },
];

export const STATS: Stat[] = [
    { value: '900+', label: 'Jobseekers Coached' },
    { value: '30%', label: 'Faster Placements' },
    { value: 'Top 1%', label: 'Topmate Coach' },
    { value: '5/5', label: 'Coaching Rating' },
];
