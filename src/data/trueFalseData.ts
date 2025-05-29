
export interface TrueFalseQuestion {
  id: number;
  topic: string;
  statement: string;
  correct: boolean;
  explanation: string;
}

export const trueFalseQuestions: TrueFalseQuestion[] = [
  {
    id: 1,
    topic: "Counselling History",
    statement: "Counselling psychology began with a focus on mental health treatment.",
    correct: false,
    explanation: "Counselling psychology began with vocational guidance, not mental health treatment."
  },
  {
    id: 2,
    topic: "Core Conditions",
    statement: "Empathy is a core condition in person-centred therapy.",
    correct: true,
    explanation: "Empathy is one of the three core conditions in person-centred therapy."
  },
  {
    id: 3,
    topic: "Psychodynamic Therapy",
    statement: "Psychodynamic therapy ignores early life experiences.",
    correct: false,
    explanation: "Psychodynamic therapy places significant emphasis on exploring early life experiences."
  },
  {
    id: 4,
    topic: "Ethics",
    statement: "Confidentiality is an ethical obligation in counselling.",
    correct: true,
    explanation: "Maintaining client confidentiality is a fundamental ethical obligation."
  },
  {
    id: 5,
    topic: "Feminist Therapy",
    statement: "Feminist therapy addresses power dynamics and social inequalities.",
    correct: true,
    explanation: "Feminist therapy specifically examines power dynamics and social inequalities."
  },
  {
    id: 6,
    topic: "Ethics",
    statement: "A dual relationship enhances counsellor objectivity.",
    correct: false,
    explanation: "Dual relationships can compromise objectivity and professional judgment."
  },
  {
    id: 7,
    topic: "Research",
    statement: "Counselling research aims to improve therapeutic practices.",
    correct: true,
    explanation: "Research helps validate and improve therapeutic techniques."
  },
  {
    id: 8,
    topic: "Therapy Process",
    statement: "Termination should be planned and gradual when possible.",
    correct: true,
    explanation: "Gradual termination allows for proper closure and consolidation."
  },
  {
    id: 9,
    topic: "Multicultural Counselling",
    statement: "Multicultural counselling ignores cultural differences.",
    correct: false,
    explanation: "Multicultural counselling specifically acknowledges cultural differences."
  },
  {
    id: 10,
    topic: "Ethics",
    statement: "Informed consent is a key ethical requirement in counselling.",
    correct: true,
    explanation: "Informed consent ensures clients understand the counselling process."
  },
  {
    id: 11,
    topic: "Behavioral Therapy",
    statement: "Behavioral therapy focuses on unconscious motivations.",
    correct: false,
    explanation: "Behavioral therapy focuses on observable behaviors."
  },
  {
    id: 12,
    topic: "Counselling Environment",
    statement: "The counselling environment should be safe and supportive.",
    correct: true,
    explanation: "A safe environment is essential for effective counselling."
  },
  {
    id: 13,
    topic: "Positive Psychology",
    statement: "Positive psychology emphasizes client strengths and resilience.",
    correct: true,
    explanation: "Positive psychology focuses on building strengths."
  },
  {
    id: 14,
    topic: "Crisis Intervention",
    statement: "Crisis intervention focuses on long-term therapy goals.",
    correct: false,
    explanation: "Crisis intervention focuses on immediate stabilization."
  },
  {
    id: 15,
    topic: "Professional Development",
    statement: "Counselling training develops ethical awareness and skills.",
    correct: true,
    explanation: "Training develops both skills and ethical awareness."
  },
  {
    id: 16,
    topic: "Gestalt Therapy",
    statement: "Gestalt therapy emphasizes past conflicts over present awareness.",
    correct: false,
    explanation: "Gestalt therapy focuses on present awareness."
  },
  {
    id: 17,
    topic: "Referrals",
    statement: "A referral is appropriate when a counsellor lacks expertise.",
    correct: true,
    explanation: "Referring clients when needed is an ethical responsibility."
  },
  {
    id: 18,
    topic: "CBT",
    statement: "CBT is effective for addressing deep unconscious issues.",
    correct: false,
    explanation: "CBT is more effective for thoughts and behaviors."
  },
  {
    id: 19,
    topic: "Ethics",
    statement: "Ethical decision-making prioritizes client well-being.",
    correct: true,
    explanation: "Client well-being is the primary consideration."
  },
  {
    id: 20,
    topic: "Active Listening",
    statement: "Active listening involves ignoring nonverbal cues.",
    correct: false,
    explanation: "Active listening includes both verbal and nonverbal communication."
  },
  {
    id: 21,
    topic: "Research Ethics",
    statement: "Counselling research must adhere to ethical standards.",
    correct: true,
    explanation: "Research must follow ethical guidelines."
  },
  {
    id: 22,
    topic: "Integrative Therapy",
    statement: "Integrative therapy uses a single therapeutic model.",
    correct: false,
    explanation: "Integrative therapy combines multiple approaches."
  },
  {
    id: 23,
    topic: "Modern Counselling",
    statement: "Modern counselling incorporates technology like telecounselling.",
    correct: true,
    explanation: "Technology is increasingly used in counselling."
  },
  {
    id: 24,
    topic: "Core Conditions",
    statement: "Unconditional positive regard involves judging clients.",
    correct: false,
    explanation: "It means accepting the client without judgment."
  },
  {
    id: 25,
    topic: "Therapeutic Relationship",
    statement: "The client-counsellor relationship is central to therapy.",
    correct: true,
    explanation: "The relationship is key to effective counselling."
  },
  {
    id: 26,
    topic: "Psychoanalysis",
    statement: "Psychoanalysis is a quick solution-focused approach.",
    correct: false,
    explanation: "Psychoanalysis is typically long-term."
  },
  {
    id: 27,
    topic: "Multicultural Competence",
    statement: "Multicultural competence is optional in counselling.",
    correct: false,
    explanation: "Cultural competence is essential."
  },
  {
    id: 28,
    topic: "Group Therapy",
    statement: "Group therapy is always less effective than individual therapy.",
    correct: false,
    explanation: "Group therapy can be equally or more effective for certain issues and clients."
  },
  {
    id: 29,
    topic: "Family Therapy",
    statement: "Family therapy views problems as existing within the family system.",
    correct: true,
    explanation: "It focuses on interactions and relationships within the family unit."
  },
  {
    id: 30,
    topic: "Solution-Focused Therapy",
    statement: "Solution-focused therapy dwells extensively on childhood experiences.",
    correct: false,
    explanation: "It focuses on present and future solutions rather than past problems."
  },
  {
    id: 31,
    topic: "Group Therapy",
    statement: "Group therapy is always less effective than individual therapy.",
    correct: false,
    explanation: "Group therapy can be equally or more effective for certain issues and clients."
  },
  {
    id: 32,
    topic: "Family Therapy",
    statement: "Family therapy views problems as existing within the family system.",
    correct: true,
    explanation: "It focuses on interactions and relationships within the family unit."
  },
  {
    id: 33,
    topic: "Solution-Focused Therapy",
    statement: "Solution-focused therapy dwells extensively on childhood experiences.",
    correct: false,
    explanation: "It focuses on present and future solutions rather than past problems."
  },
  {
    id: 34,
    topic: "Narrative Therapy",
    statement: "Narrative therapy helps clients rewrite their life stories.",
    correct: true,
    explanation: "It separates people from problems and helps them create new narratives."
  },
  {
    id: 35,
    topic: "Trauma-Informed Care",
    statement: "Trauma-informed care assumes all clients have trauma histories.",
    correct: false,
    explanation: "It recognizes the widespread impact of trauma but doesn't assume all clients are traumatized."
  },
  {
    id: 36,
    topic: "Mindfulness",
    statement: "Mindfulness involves judgmental awareness of the present moment.",
    correct: false,
    explanation: "Mindfulness involves non-judgmental awareness of the present moment."
  },
  {
    id: 37,
    topic: "Grief Counselling",
    statement: "The Kübler-Ross model suggests grief follows predictable stages.",
    correct: true,
    explanation: "Though widely used, it's important to note people experience grief differently."
  },
  {
    id: 38,
    topic: "Substance Abuse",
    statement: "Harm reduction is an approach used in substance abuse treatment.",
    correct: true,
    explanation: "It aims to reduce negative consequences without requiring abstinence."
  },
  {
    id: 39,
    topic: "Suicide Assessment",
    statement: "Asking about suicide can put the idea in someone's head.",
    correct: false,
    explanation: "Asking about suicide is a critical assessment tool and doesn't increase risk."
  },
  {
    id: 40,
    topic: "Play Therapy",
    statement: "Play therapy is only for very young children.",
    correct: false,
    explanation: "Play therapy can be adapted for older children and even adolescents."
  },
  {
    id: 41,
    topic: "Career Counselling",
    statement: "Holland's RIASEC model is used in career counselling.",
    correct: true,
    explanation: "It identifies six personality types and work environments."
  },
  {
    id: 42,
    topic: "School Counselling",
    statement: "School counsellors only provide academic guidance.",
    correct: false,
    explanation: "They address academic, career, and social/emotional development."
  },
  {
    id: 43,
    topic: "Rehabilitation Counselling",
    statement: "Rehabilitation counselling focuses on clients with disabilities.",
    correct: true,
    explanation: "It helps individuals with disabilities achieve personal, social, and vocational goals."
  },
  {
    id: 44,
    topic: "Gerontological Counselling",
    statement: "Gerontological counselling only addresses end-of-life issues.",
    correct: false,
    explanation: "It addresses various aspects of aging, not just end-of-life concerns."
  },
  {
    id: 45,
    topic: "Military and Veterans Counselling",
    statement: "Military culture is an important consideration in counselling veterans.",
    correct: true,
    explanation: "Understanding military culture is crucial for effective counselling."
  },
  {
    id: 46,
    topic: "LGBTQ+ Affirmative Therapy",
    statement: "Conversion therapy is an ethical practice for LGBTQ+ clients.",
    correct: false,
    explanation: "Conversion therapy is widely discredited and considered unethical."
  },
  {
    id: 47,
    topic: "Disaster Mental Health",
    statement: "Psychological First Aid is used in disaster response.",
    correct: true,
    explanation: "It provides immediate support to those affected by disasters."
  },
  {
    id: 48,
    topic: "Supervision",
    statement: "Clinical supervision is only for student counsellors.",
    correct: false,
    explanation: "Ongoing supervision is valuable throughout a counsellor's career."
  },
  {
    id: 49,
    topic: "Online Counselling",
    statement: "The same ethical standards apply to online and in-person counselling.",
    correct: true,
    explanation: "While delivery methods differ, ethical standards remain consistent."
  },
  {
    id: 50,
    topic: "Assessment",
    statement: "Standardized tests are the only valid form of assessment.",
    correct: false,
    explanation: "Multiple assessment methods provide a more comprehensive understanding."
  },
  {
    id: 51,
    topic: "Documentation",
    statement: "Thorough documentation protects both client and counsellor.",
    correct: true,
    explanation: "Good documentation is a professional and ethical responsibility."
  },
  {
    id: 52,
    topic: "Self-Care",
    statement: "Counsellor self-care is a professional responsibility.",
    correct: true,
    explanation: "Preventing burnout ensures quality client care."
  },
  {
    id: 53,
    topic: "Cultural Humility",
    statement: "Cultural competence is a destination rather than a journey.",
    correct: false,
    explanation: "Cultural humility is an ongoing process of self-reflection and learning."
  },
  {
    id: 54,
    topic: "Social Justice",
    statement: "Advocacy is part of the counsellor's role.",
    correct: true,
    explanation: "Counsellors advocate for clients and social justice issues."
  },
  {
    id: 55,
    topic: "Technology",
    statement: "Therapists should avoid all social media contact with clients.",
    correct: true,
    explanation: "Dual relationships can compromise professional boundaries."
  },
  {
    id: 56,
    topic: "Legal Issues",
    statement: "Counsellors are mandatory reporters of child abuse.",
    correct: true,
    explanation: "This is a legal requirement in most jurisdictions."
  },
  {
    id: 57,
    topic: "Termination",
    statement: "Therapy should always end when the client decides.",
    correct: false,
    explanation: "Therapist-initiated termination may be necessary in some cases."
  },
  {
    id: 58,
    topic: "Record Keeping",
    statement: "Client records should be kept indefinitely.",
    correct: false,
    explanation: "Records should be kept according to legal and ethical guidelines."
  },
  {
    id: 59,
    topic: "Supervision",
    statement: "Peer supervision can be as valuable as hierarchical supervision.",
    correct: true,
    explanation: "Different types of supervision serve different purposes."
  },
  {
    id: 60,
    topic: "Professional Development",
    statement: "Continuing education is required to maintain counselling credentials.",
    correct: true,
    explanation: "Ongoing learning is essential for maintaining competence."
  }
];
