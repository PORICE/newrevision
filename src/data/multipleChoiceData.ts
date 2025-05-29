
export interface Question {
  id: number;
  topic: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const questions: Question[] = [
  {
    id: 1,
    topic: "Theoretical Approaches",
    question: "What is the primary focus of person-centred therapy?",
    options: [
      "Unconscious conflicts",
      "Client self-actualization",
      "Behavioural modification",
      "Cognitive restructuring"
    ],
    correctAnswer: 1,
    explanation: "Person-centred therapy emphasizes the client's capacity for self-direction and growth."
  },
  {
    id: 2,
    topic: "Ethics",
    question: "What is a key ethical principle in counselling?",
    options: [
      "Nonmaleficence",
      "Uniformity",
      "Efficiency",
      "Standardization"
    ],
    correctAnswer: 0,
    explanation: "Nonmaleficence means 'do no harm' and is a fundamental ethical principle in counselling."
  },
  {
    id: 3,
    topic: "Counselling Skills",
    question: "Which technique involves reflecting both content and feeling?",
    options: [
      "Paraphrasing",
      "Summarizing",
      "Reflection of meaning",
      "Reflection of feeling"
    ],
    correctAnswer: 3,
    explanation: "Reflection of feeling involves capturing both the content and emotional tone of what the client is expressing."
  },
  {
    id: 4,
    topic: "Theoretical Approaches",
    question: "Which therapy focuses on changing negative thought patterns?",
    options: [
      "Psychodynamic therapy",
      "Cognitive Behavioral Therapy (CBT)",
      "Gestalt therapy",
      "Existential therapy"
    ],
    correctAnswer: 1,
    explanation: "CBT focuses on identifying and changing negative thought patterns that affect emotions and behaviors."
  },
  {
    id: 5,
    topic: "Ethics",
    question: "When is it ethically permissible to break confidentiality?",
    options: [
      "When the client is late to sessions",
      "When the client is not making progress",
      "When there is risk of harm to self or others",
      "When the client misses a payment"
    ],
    correctAnswer: 2,
    explanation: "Confidentiality can be broken when there is an imminent risk of harm to the client or others."
  },
  {
    id: 6,
    topic: "Counselling Skills",
    question: "What is the purpose of open-ended questions?",
    options: [
      "To get specific information",
      "To encourage detailed responses",
      "To test the client's knowledge",
      "To direct the conversation"
    ],
    correctAnswer: 1,
    explanation: "Open-ended questions encourage clients to elaborate and provide more detailed responses."
  },
  {
    id: 7,
    topic: "Theoretical Approaches",
    question: "Which approach emphasizes the here-and-now experience?",
    options: [
      "Psychoanalysis",
      "Gestalt therapy",
      "Rational Emotive Behavior Therapy",
      "Solution-Focused Brief Therapy"
    ],
    correctAnswer: 1,
    explanation: "Gestalt therapy emphasizes awareness of the present moment and immediate experience."
  },
  {
    id: 8,
    topic: "Ethics",
    question: "What is the primary purpose of informed consent?",
    options: [
      "To protect the counselor from liability",
      "To ensure the client understands the counseling process",
      "To limit the number of sessions",
      "To establish payment terms"
    ],
    correctAnswer: 1,
    explanation: "Informed consent ensures clients understand the nature, risks, and benefits of counseling."
  },
  {
    id: 9,
    topic: "Counselling Skills",
    question: "What does the skill of summarizing accomplish?",
    options: [
      "Ends the session",
      "Brings together key points",
      "Changes the subject",
      "Tests the client's memory"
    ],
    correctAnswer: 1,
    explanation: "Summarizing helps to consolidate and reflect back the main points discussed."
  },
  {
    id: 10,
    topic: "Theoretical Approaches",
    question: "Which therapy focuses on family systems and relationships?",
    options: [
      "Narrative Therapy",
      "Family Systems Therapy",
      "Reality Therapy",
      "Transactional Analysis"
    ],
    correctAnswer: 1,
    explanation: "Family Systems Therapy views problems within the context of family relationships and dynamics."
  },
  {
    id: 11,
    topic: "Ethics",
    question: "What should a counselor do if they encounter a dual relationship?",
    options: [
      "Ignore it if it's not causing problems",
      "Document it and consult with a supervisor",
      "Continue as usual if the client doesn't mind",
      "Only address it if the client brings it up"
    ],
    correctAnswer: 1,
    explanation: "Dual relationships should be carefully managed, documented, and discussed in supervision."
  },
  {
    id: 12,
    topic: "Counselling Skills",
    question: "What is the purpose of minimal encouragers?",
    options: [
      "To show agreement",
      "To indicate listening and encourage continuation",
      "To change the subject",
      "To end the conversation"
    ],
    correctAnswer: 1,
    explanation: "Minimal encouragers (like 'uh-huh' or 'I see') show the client they are being heard and encourage them to continue."
  },
  {
    id: 13,
    topic: "Theoretical Approaches",
    question: "Which therapy focuses on the meaning people create in their lives?",
    options: [
      "Existential Therapy",
      "Behavior Therapy",
      "Dialectical Behavior Therapy",
      "Psychoanalysis"
    ],
    correctAnswer: 0,
    explanation: "Existential Therapy focuses on helping clients find meaning and purpose in life."
  },
  {
    id: 14,
    topic: "Ethics",
    question: "What is the primary purpose of maintaining case notes?",
    options: [
      "To have a record for insurance purposes",
      "To document the counseling process and treatment",
      "To share with other professionals",
      "To satisfy legal requirements"
    ],
    correctAnswer: 1,
    explanation: "Case notes document the counseling process, treatment plans, and client progress."
  },
  {
    id: 15,
    topic: "Counselling Skills",
    question: "What does the skill of confrontation involve?",
    options: [
      "Challenging the client's inconsistencies",
      "Arguing with the client",
      "Telling the client what to do",
      "Ending the session"
    ],
    correctAnswer: 0,
    explanation: "Confrontation involves gently pointing out discrepancies in a client's thoughts, feelings, or behaviors."
  },
  {
    id: 16,
    topic: "Theoretical Approaches",
    question: "Which therapy focuses on changing maladaptive behaviors through reinforcement?",
    options: [
      "Psychodynamic Therapy",
      "Behavior Therapy",
      "Person-Centered Therapy",
      "Gestalt Therapy"
    ],
    correctAnswer: 1,
    explanation: "Behavior Therapy uses principles of learning to modify maladaptive behaviors."
  },
  {
    id: 17,
    topic: "Ethics",
    question: "What is the counselor's responsibility regarding cultural competence?",
    options: [
      "To be aware of their own cultural biases",
      "To understand the client's cultural background",
      "To adapt interventions to be culturally appropriate",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Cultural competence involves self-awareness, understanding of others' cultures, and adapting approaches accordingly."
  },
  {
    id: 18,
    topic: "Counselling Skills",
    question: "What is the purpose of paraphrasing?",
    options: [
      "To repeat exactly what the client said",
      "To reflect the content in the counselor's own words",
      "To give advice",
      "To change the subject"
    ],
    correctAnswer: 1,
    explanation: "Paraphrasing involves restating the client's message in the counselor's own words to show understanding."
  },
  {
    id: 19,
    topic: "Theoretical Approaches",
    question: "Which therapy focuses on the stories people tell about their lives?",
    options: [
      "Narrative Therapy",
      "Reality Therapy",
      "Transactional Analysis",
      "Solution-Focused Brief Therapy"
    ],
    correctAnswer: 0,
    explanation: "Narrative Therapy focuses on the stories and meanings people create about their lives."
  },
  {
    id: 20,
    topic: "Ethics",
    question: "What should a counselor do if they suspect child abuse?",
    options: [
      "Confront the abuser",
      "Report it to the appropriate authorities",
      "Keep it confidential",
      "Wait for more evidence"
    ],
    correctAnswer: 1,
    explanation: "Counselors are mandated reporters and must report suspected child abuse to the appropriate authorities."
  },
  {
    id: 21,
    topic: "Counselling Skills",
    question: "What is the purpose of reflection of meaning?",
    options: [
      "To repeat the client's words",
      "To explore the client's values and beliefs",
      "To give advice",
      "To end the session"
    ],
    correctAnswer: 1,
    explanation: "Reflection of meaning helps explore the client's values, beliefs, and the significance they attach to experiences."
  },
  {
    id: 22,
    topic: "Theoretical Approaches",
    question: "Which therapy focuses on the relationship between thoughts, feelings, and behaviors?",
    options: [
      "Psychoanalysis",
      "Cognitive Behavioral Therapy",
      "Person-Centered Therapy",
      "Gestalt Therapy"
    ],
    correctAnswer: 1,
    explanation: "CBT examines the relationships between thoughts, feelings, and behaviors."
  },
  {
    id: 23,
    topic: "Ethics",
    question: "What is the primary purpose of professional boundaries?",
    options: [
      "To maintain a professional relationship",
      "To keep clients at a distance",
      "To limit the number of sessions",
      "To avoid legal issues"
    ],
    correctAnswer: 0,
    explanation: "Professional boundaries help maintain an appropriate and effective therapeutic relationship."
  },
  {
    id: 24,
    topic: "Counselling Skills",
    question: "What is the purpose of using silence in counseling?",
    options: [
      "To give the counselor time to think",
      "To allow the client to reflect",
      "To create discomfort",
      "To end the session"
    ],
    correctAnswer: 1,
    explanation: "Silence can provide valuable space for reflection and processing."
  },
  {
    id: 25,
    topic: "Theoretical Approaches",
    question: "Which therapy focuses on helping clients accept difficult emotions?",
    options: [
      "Dialectical Behavior Therapy (DBT)",
      "Rational Emotive Behavior Therapy",
      "Reality Therapy",
      "Solution-Focused Brief Therapy"
    ],
    correctAnswer: 0,
    explanation: "DBT emphasizes the balance between acceptance and change, helping clients accept difficult emotions."
  },
  {
    id: 26,
    topic: "Ethics",
    question: "What should a counselor do if they feel attracted to a client?",
    options: [
      "Ignore the feelings",
      "Discuss it with the client",
      "Seek supervision and possibly refer the client",
      "Act on the feelings if the client consents"
    ],
    correctAnswer: 2,
    explanation: "Counselors should seek supervision and consider referral if they experience personal feelings that could affect the therapeutic relationship."
  },
  {
    id: 27,
    topic: "Counselling Skills",
    question: "What is the purpose of using scaling questions?",
    options: [
      "To measure progress",
      "To assess the client's mood",
      "To end the session",
      "To change the subject"
    ],
    correctAnswer: 0,
    explanation: "Scaling questions help measure progress, motivation, or confidence on a numerical scale."
  },
  {
    id: 28,
    topic: "Theoretical Approaches",
    question: "Which therapy focuses on helping clients take responsibility for their choices?",
    options: [
      "Reality Therapy",
      "Psychoanalysis",
      "Person-Centered Therapy",
      "Gestalt Therapy"
    ],
    correctAnswer: 0,
    explanation: "Reality Therapy emphasizes personal responsibility and making positive choices."
  },
  {
    id: 29,
    topic: "Ethics",
    question: "What is the primary purpose of a professional will?",
    options: [
      "To distribute personal assets",
      "To ensure continuity of client care in case of death or disability",
      "To outline fees and payment policies",
      "To establish office procedures"
    ],
    correctAnswer: 1,
    explanation: "A professional will ensures clients continue to receive care if the counselor becomes incapacitated or dies."
  },
  {
    id: 30,
    topic: "Counselling Skills",
    question: "What is the purpose of immediacy in counseling?",
    options: [
      "To address what's happening in the here-and-now",
      "To end the session on time",
      "To give immediate advice",
      "To change the subject"
    ],
    correctAnswer: 0,
    explanation: "Immediacy involves addressing the current therapeutic relationship and process."
  }
]; Question {
  id: number;
  topic: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const questions: Question[] = [
  {
    id: 1,
    topic: "Theoretical Approaches",
    question: "What is the primary focus of person-centred therapy?",
    options: [
      "Unconscious conflicts",
      "Client self-actualization",
      "Behavioural modification",
      "Cognitive restructuring"
    ],
    correctAnswer: 1,
    explanation: "Person-centred therapy emphasizes the client's capacity for self-direction and growth."
  },
  {
    id: 2,
    topic: "Ethics",
    question: "What is a key ethical principle in counselling?",
    options: [
      "Nonmaleficence",
      "Uniformity",
      "Efficiency",
      "Standardization"
    ],
    correctAnswer: 0,
    explanation: "Nonmaleficence means 'do no harm' and is a fundamental ethical principle in counselling."
  },
  {
    id: 3,
    topic: "Counselling Skills",
    question: "Which technique involves reflecting both content and feeling?",
    options: [
      "Paraphrasing",
      "Summarizing",
      "Reflection of meaning",
      "Reflection of feeling"
    ],
    correctAnswer: 3,
    explanation: "Reflection of feeling involves capturing both the content and emotional tone of what the client is expressing."
  },
  {
    id: 4,
    topic: "Theoretical Approaches",
    question: "Which therapy focuses on changing negative thought patterns?",
    options: [
      "Psychodynamic therapy",
      "Cognitive Behavioral Therapy (CBT)",
      "Gestalt therapy",
      "Existential therapy"
    ],
    correctAnswer: 1,
    explanation: "CBT focuses on identifying and changing negative thought patterns that affect emotions and behaviors."
  },
  {
    id: 5,
    topic: "Ethics",
    question: "When is it ethically permissible to break confidentiality?",
    options: [
      "When the client is late to sessions",
      "When the client is not making progress",
      "When there is risk of harm to self or others",
      "When the client misses a payment"
    ],
    correctAnswer: 2,
    explanation: "Confidentiality can be broken when there is an imminent risk of harm to the client or others."
  },
  {
    id: 6,
    topic: "Counselling Skills",
    question: "What is the purpose of open-ended questions?",
    options: [
      "To get specific information",
      "To encourage detailed responses",
      "To test the client's knowledge",
      "To direct the conversation"
    ],
    correctAnswer: 1,
    explanation: "Open-ended questions encourage clients to elaborate and provide more detailed responses."
  },
  {
    id: 7,
    topic: "Theoretical Approaches",
    question: "Which approach emphasizes the here-and-now experience?",
    options: [
      "Psychoanalysis",
      "Gestalt therapy",
      "Rational Emotive Behavior Therapy",
      "Solution-Focused Brief Therapy"
    ],
    correctAnswer: 1,
    explanation: "Gestalt therapy emphasizes awareness of the present moment and immediate experience."
  },
  {
    id: 8,
    topic: "Ethics",
    question: "What is the primary purpose of informed consent?",
    options: [
      "To protect the counselor from liability",
      "To ensure the client understands the counseling process",
      "To limit the number of sessions",
      "To establish payment terms"
    ],
    correctAnswer: 1,
    explanation: "Informed consent ensures clients understand the nature, risks, and benefits of counseling."
  },
  {
    id: 9,
    topic: "Counselling Skills",
    question: "What does the skill of summarizing accomplish?",
    options: [
      "Ends the session",
      "Brings together key points",
      "Changes the subject",
      "Tests the client's memory"
    ],
    correctAnswer: 1,
    explanation: "Summarizing helps to consolidate and reflect back the main points discussed."
  },
  {
    id: 10,
    topic: "Theoretical Approaches",
    question: "Which therapy focuses on family systems and relationships?",
    options: [
      "Narrative Therapy",
      "Family Systems Therapy",
      "Reality Therapy",
      "Transactional Analysis"
    ],
    correctAnswer: 1,
    explanation: "Family Systems Therapy views problems within the context of family relationships and dynamics."
  },
  {
    id: 11,
    topic: "Ethics",
    question: "What should a counselor do if they encounter a dual relationship?",
    options: [
      "Ignore it if it's not causing problems",
      "Document it and consult with a supervisor",
      "Continue as usual if the client doesn't mind",
      "Only address it if the client brings it up"
    ],
    correctAnswer: 1,
    explanation: "Dual relationships should be carefully managed, documented, and discussed in supervision."
  },
  {
    id: 12,
    topic: "Counselling Skills",
    question: "What is the purpose of minimal encouragers?",
    options: [
      "To show agreement",
      "To indicate listening and encourage continuation",
      "To change the subject",
      "To end the conversation"
    ],
    correctAnswer: 1,
    explanation: "Minimal encouragers (like 'uh-huh' or 'I see') show the client they are being heard and encourage them to continue."
  },
  {
    id: 13,
    topic: "Theoretical Approaches",
    question: "Which therapy focuses on the meaning people create in their lives?",
    options: [
      "Existential Therapy",
      "Behavior Therapy",
      "Dialectical Behavior Therapy",
      "Psychoanalysis"
    ],
    correctAnswer: 0,
    explanation: "Existential Therapy focuses on helping clients find meaning and purpose in life."
  },
  {
    id: 14,
    topic: "Ethics",
    question: "What is the primary purpose of maintaining case notes?",
    options: [
      "To have a record for insurance purposes",
      "To document the counseling process and treatment",
      "To share with other professionals",
      "To satisfy legal requirements"
    ],
    correctAnswer: 1,
    explanation: "Case notes document the counseling process, treatment plans, and client progress."
  },
  {
    id: 15,
    topic: "Counselling Skills",
    question: "What does the skill of confrontation involve?",
    options: [
      "Challenging the client's inconsistencies",
      "Arguing with the client",
      "Telling the client what to do",
      "Ending the session"
    ],
    correctAnswer: 0,
    explanation: "Confrontation involves gently pointing out discrepancies in a client's thoughts, feelings, or behaviors."
  },
  {
    id: 16,
    topic: "Theoretical Approaches",
    question: "Which therapy focuses on changing maladaptive behaviors through reinforcement?",
    options: [
      "Psychodynamic Therapy",
      "Behavior Therapy",
      "Person-Centered Therapy",
      "Gestalt Therapy"
    ],
    correctAnswer: 1,
    explanation: "Behavior Therapy uses principles of learning to modify maladaptive behaviors."
  },
  {
    id: 17,
    topic: "Ethics",
    question: "What is the counselor's responsibility regarding cultural competence?",
    options: [
      "To be aware of their own cultural biases",
      "To understand the client's cultural background",
      "To adapt interventions to be culturally appropriate",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Cultural competence involves self-awareness, understanding of others' cultures, and adapting approaches accordingly."
  },
  {
    id: 18,
    topic: "Counselling Skills",
    question: "What is the purpose of paraphrasing?",
    options: [
      "To repeat exactly what the client said",
      "To reflect the content in the counselor's own words",
      "To give advice",
      "To change the subject"
    ],
    correctAnswer: 1,
    explanation: "Paraphrasing involves restating the client's message in the counselor's own words to show understanding."
  },
  {
    id: 19,
    topic: "Theoretical Approaches",
    question: "Which therapy focuses on the stories people tell about their lives?",
    options: [
      "Narrative Therapy",
      "Reality Therapy",
      "Transactional Analysis",
      "Solution-Focused Brief Therapy"
    ],
    correctAnswer: 0,
    explanation: "Narrative Therapy focuses on the stories and meanings people create about their lives."
  },
  {
    id: 20,
    topic: "Ethics",
    question: "What should a counselor do if they suspect child abuse?",
    options: [
      "Confront the abuser",
      "Report it to the appropriate authorities",
      "Keep it confidential",
      "Wait for more evidence"
    ],
    correctAnswer: 1,
    explanation: "Counselors are mandated reporters and must report suspected child abuse to the appropriate authorities."
  },
  {
    id: 21,
    topic: "Counselling Skills",
    question: "What is the purpose of reflection of meaning?",
    options: [
      "To repeat the client's words",
      "To explore the client's values and beliefs",
      "To give advice",
      "To end the session"
    ],
    correctAnswer: 1,
    explanation: "Reflection of meaning helps explore the client's values, beliefs, and the significance they attach to experiences."
  },
  {
    id: 22,
    topic: "Theoretical Approaches",
    question: "Which therapy focuses on the relationship between thoughts, feelings, and behaviors?",
    options: [
      "Psychoanalysis",
      "Cognitive Behavioral Therapy",
      "Person-Centered Therapy",
      "Gestalt Therapy"
    ],
    correctAnswer: 1,
    explanation: "CBT examines the relationships between thoughts, feelings, and behaviors."
  },
  {
    id: 23,
    topic: "Ethics",
    question: "What is the primary purpose of professional boundaries?",
    options: [
      "To maintain a professional relationship",
      "To keep clients at a distance",
      "To limit the number of sessions",
      "To avoid legal issues"
    ],
    correctAnswer: 0,
    explanation: "Professional boundaries help maintain an appropriate and effective therapeutic relationship."
  },
  {
    id: 24,
    topic: "Counselling Skills",
    question: "What is the purpose of using silence in counseling?",
    options: [
      "To give the counselor time to think",
      "To allow the client to reflect",
      "To create discomfort",
      "To end the session"
    ],
    correctAnswer: 1,
    explanation: "Silence can provide valuable space for reflection and processing."
  },
  {
    id: 25,
    topic: "Theoretical Approaches",
    question: "Which therapy focuses on helping clients accept difficult emotions?",
    options: [
      "Dialectical Behavior Therapy (DBT)",
      "Rational Emotive Behavior Therapy",
      "Reality Therapy",
      "Solution-Focused Brief Therapy"
    ],
    correctAnswer: 0,
    explanation: "DBT emphasizes the balance between acceptance and change, helping clients accept difficult emotions."
  },
  {
    id: 26,
    topic: "Ethics",
    question: "What should a counselor do if they feel attracted to a client?",
    options: [
      "Ignore the feelings",
      "Discuss it with the client",
      "Seek supervision and possibly refer the client",
      "Act on the feelings if the client consents"
    ],
    correctAnswer: 2,
    explanation: "Counselors should seek supervision and consider referral if they experience personal feelings that could affect the therapeutic relationship."
  },
  {
    id: 27,
    topic: "Counselling Skills",
    question: "What is the purpose of using scaling questions?",
    options: [
      "To measure progress",
      "To assess the client's mood",
      "To end the session",
      "To change the subject"
    ],
    correctAnswer: 0,
    explanation: "Scaling questions help measure progress, motivation, or confidence on a numerical scale."
  },
  {
    id: 28,
    topic: "Theoretical Approaches",
    question: "Which therapy focuses on helping clients take responsibility for their choices?",
    options: [
      "Reality Therapy",
      "Psychoanalysis",
      "Person-Centered Therapy",
      "Gestalt Therapy"
    ],
    correctAnswer: 0,
    explanation: "Reality Therapy emphasizes personal responsibility and making positive choices."
  },
  {
    id: 29,
    topic: "Ethics",
    question: "What is the primary purpose of a professional will?",
    options: [
      "To distribute personal assets",
      "To ensure continuity of client care in case of death or disability",
      "To outline fees and payment policies",
      "To establish office procedures"
    ],
    correctAnswer: 1,
    explanation: "A professional will ensures clients continue to receive care if the counselor becomes incapacitated or dies."
  },
  {
    id: 30,
    topic: "Counselling Skills",
    question: "What is the purpose of immediacy in counseling?",
    options: [
      "To address what's happening in the here-and-now",
      "To end the session on time",
      "To give immediate advice",
      "Gestalt Therapy",
      "CBT"
    ],
    correctAnswer: 1,
    explanation: "Psychoanalysis uses free association to explore unconscious material."
  },
  {
    id: 4,
    topic: "Counselling Skills",
    question: "What is a purpose of active listening in counselling?",
    options: [
      "To diagnose disorders",
      "To build rapport",
      "To enforce boundaries",
      "To limit sessions"
    ],
    correctAnswer: 1,
    explanation: "Active listening helps build trust and understanding between counsellor and client."
  },
  {
    id: 5,
    topic: "Therapy Process",
    question: "When is termination appropriate in counselling?",
    options: [
      "When goals are met",
      "When sessions begin",
      "When clients resist",
      "When counsellors disagree"
    ],
    correctAnswer: 0,
    explanation: "Termination should occur when the client has achieved their therapeutic goals."
  },
  {
    id: 6,
    topic: "Multicultural Counselling",
    question: "What is a feature of multicultural counselling?",
    options: [
      "Ignoring cultural differences",
      "Uniform treatment approaches",
      "Respecting diverse backgrounds",
      "Avoiding client input"
    ],
    correctAnswer: 2,
    explanation: "Multicultural counselling values and respects diverse cultural backgrounds."
  },
  {
    id: 7,
    topic: "Theoretical Approaches",
    question: "What is a limitation of psychodynamic therapy?",
    options: [
      "Overemphasis on behaviour",
      "Time-intensive process",
      "Reliance on medication",
      "Lack of structure"
    ],
    correctAnswer: 1,
    explanation: "Psychodynamic therapy can be time-intensive due to its focus on deep exploration."
  },
  {
    id: 8,
    topic: "Research",
    question: "What is a key goal of counselling research?",
    options: [
      "To limit client access",
      "To validate interventions",
      "To enforce diagnoses",
      "To increase costs"
    ],
    correctAnswer: 1,
    explanation: "Research helps validate the effectiveness of counselling interventions."
  },
  {
    id: 9,
    topic: "Theoretical Approaches",
    question: "What is a core condition in humanistic therapy?",
    options: [
      "Cognitive restructuring",
      "Congruence",
      "Systematic desensitization",
      "Free association"
    ],
    correctAnswer: 1,
    explanation: "Congruence, or genuineness, is a core condition in humanistic therapy."
  },
  {
    id: 10,
    topic: "Modern Trends",
    question: "What is a trend in modern counselling?",
    options: [
      "Avoiding technology",
      "Using telecounselling",
      "Limiting diversity",
      "Focusing only on groups"
    ],
    correctAnswer: 1,
    explanation: "Telecounselling has become increasingly common in modern practice."
  },
  {
    id: 11,
    topic: "Theoretical Approaches",
    question: "What is the focus of Adlerian therapy?",
    options: [
      "Cognitive distortions",
      "Social interest and goals",
      "Present awareness",
      "Conditioning techniques"
    ],
    correctAnswer: 1,
    explanation: "Adlerian therapy emphasizes social interest and goal-directed behavior."
  },
  {
    id: 12,
    topic: "Ethics",
    question: "What is a purpose of informed consent?",
    options: [
      "To limit client rights",
      "To ensure client understanding",
      "To enforce therapy rules",
      "To avoid ethical standards"
    ],
    correctAnswer: 1,
    explanation: "Informed consent ensures clients understand the counselling process."
  },
  {
    id: 13,
    topic: "Theoretical Approaches",
    question: "What is a key feature of behavioural therapy?",
    options: [
      "Exploring unconscious drives",
      "Modifying observable behaviours",
      "Focusing on self-actualization",
      "Addressing power dynamics"
    ],
    correctAnswer: 1,
    explanation: "Behavioural therapy focuses on changing observable behaviors."
  },
  {
    id: 14,
    topic: "Counselling Environment",
    question: "What is a role of the counselling environment?",
    options: [
      "To create discomfort",
      "To ensure privacy and safety",
      "To limit client expression",
      "To enforce strict rules"
    ],
    correctAnswer: 1,
    explanation: "A safe, private environment is crucial for effective counselling."
  },
  {
    id: 15,
    topic: "Theoretical Approaches",
    question: "What is a limitation of CBT?",
    options: [
      "Ignoring thoughts",
      "Limited focus on deep trauma",
      "Overuse of medication",
      "Lack of structure"
    ],
    correctAnswer: 1,
    explanation: "CBT may not fully address deep-seated trauma in some cases."
  },
  {
    id: 16,
    topic: "Crisis Intervention",
    question: "What is a purpose of crisis intervention?",
    options: [
      "Long-term therapy planning",
      "Immediate emotional support",
      "Avoiding client emotions",
      "Limiting session time"
    ],
    correctAnswer: 1,
    explanation: "Crisis intervention provides immediate support during acute distress."
  },
  {
    id: 17,
    topic: "Research Ethics",
    question: "What is a key ethical issue in counselling research?",
    options: [
      "Ignoring client consent",
      "Ensuring participant rights",
      "Avoiding data analysis",
      "Limiting research scope"
    ],
    correctAnswer: 1,
    explanation: "Protecting participant rights is paramount in research ethics."
  },
  {
    id: 18,
    topic: "Feminist Therapy",
    question: "What is a feature of feminist therapy?",
    options: [
      "Ignoring social context",
      "Addressing gender inequalities",
      "Focusing only on cognition",
      "Avoiding client empowerment"
    ],
    correctAnswer: 1,
    explanation: "Feminist therapy addresses gender and social inequalities."
  },
  {
    id: 19,
    topic: "Professional Development",
    question: "What is a purpose of counselling training?",
    options: [
      "To limit counsellor skills",
      "To develop professional competence",
      "To enforce diagnoses",
      "To avoid ethical practice"
    ],
    correctAnswer: 1,
    explanation: "Training develops the skills and knowledge needed for competent practice."
  },
  {
    id: 20,
    topic: "Ethics",
    question: "What is a dual relationship concern?",
    options: [
      "Enhanced client trust",
      "Risk of ethical conflicts",
      "Improved outcomes",
      "Simplified therapy"
    ],
    correctAnswer: 1,
    explanation: "Dual relationships can create conflicts of interest and ethical issues."
  },
  {
    id: 21,
    topic: "Positive Psychology",
    question: "What is a goal of positive psychology?",
    options: [
      "Focusing on pathology",
      "Enhancing client strengths",
      "Exploring unconscious drives",
      "Modifying behaviours"
    ],
    correctAnswer: 1,
    explanation: "Positive psychology focuses on building strengths and well-being."
  },
  {
    id: 22,
    topic: "Counselling Skills",
    question: "What is a key attending skill?",
    options: [
      "Diagnosing disorders",
      "Maintaining eye contact",
      "Enforcing boundaries",
      "Limiting empathy"
    ],
    correctAnswer: 1,
    explanation: "Eye contact is a fundamental attending skill in counselling."
  },
  {
    id: 23,
    topic: "Gestalt Therapy",
    question: "What is a feature of Gestalt therapy?",
    options: [
      "Focus on past conflicts",
      "Emphasis on present awareness",
      "Use of medication",
      "Cognitive restructuring"
    ],
    correctAnswer: 1,
    explanation: "Gestalt therapy emphasizes present-moment awareness."
  },
  {
    id: 24,
    topic: "Ethics",
    question: "What is a purpose of confidentiality?",
    options: [
      "To share client information",
      "To protect client privacy",
      "To limit session time",
      "To enforce legal rules"
    ],
    correctAnswer: 1,
    explanation: "Confidentiality protects client privacy and builds trust."
  },
  {
    id: 25,
    topic: "Modern Counselling",
    question: "What is a challenge in modern counselling?",
    options: [
      "Avoiding technology",
      "Integrating diverse approaches",
      "Ignoring client feedback",
      "Limiting session duration"
    ],
    correctAnswer: 1,
    explanation: "Integrating various therapeutic approaches is a current challenge."
  },
  {
    id: 26,
    topic: "Therapy Process",
    question: "What is a key aspect of termination?",
    options: [
      "Extending therapy indefinitely",
      "Ensuring client closure",
      "Avoiding client feedback",
      "Limiting counsellor effort"
    ],
    correctAnswer: 1,
    explanation: "Proper termination ensures clients have closure and feel complete."
  },
  {
    id: 27,
    topic: "Professional Development",
    question: "What is a role of self-reflection in counselling?",
    options: [
      "To diagnose clients",
      "To improve counsellor practice",
      "To enforce boundaries",
      "To limit empathy"
    ],
    correctAnswer: 1,
    explanation: "Self-reflection helps counsellors grow and improve their practice."
  },
  {
    id: 28,
    topic: "Integrative Therapy",
    question: "What is a feature of integrative therapy?",
    options: [
      "Using a single model",
      "Combining multiple approaches",
      "Focusing on unconscious drives",
      "Avoiding client input"
    ],
    correctAnswer: 1,
    explanation: "Integrative therapy combines elements from different therapeutic approaches."
  },
  {
    id: 29,
    topic: "Multicultural Counselling",
    question: "What is a purpose of multicultural counselling?",
    options: [
      "Uniform treatment",
      "Respecting diversity",
      "Ignoring cultural context",
      "Limiting client input"
    ],
    correctAnswer: 1,
    explanation: "Multicultural counselling respects and values cultural diversity."
  },
  {
    id: 30,
    topic: "Counselling Skills",
    question: "What is a key counselling skill?",
    options: [
      "Prescribing medication",
      "Active listening",
      "Enforcing rules",
      "Limiting sessions"
    ],
    correctAnswer: 1,
    explanation: "Active listening is fundamental to effective counselling."
  },
  {
    id: 2,
    topic: "Core Conditions",
    question: "Which of the following is NOT one of Rogers' core conditions?",
    options: [
      "Unconditional positive regard",
      "Empathy", 
      "Interpretation",
      "Genuineness"
    ],
    correctAnswer: 2,
    explanation: "Interpretation is a technique used in psychodynamic therapy, not one of Rogers' core conditions. The three core conditions are unconditional positive regard, empathy, and genuineness."
  },
  {
    id: 3,
    topic: "Counselling Ethics",
    question: "When is it appropriate to break confidentiality?",
    options: [
      "When the counsellor is curious about the client's life",
      "When the client poses a danger to self or others",
      "When the client's family asks for information",
      "When the counsellor wants to discuss the case with friends"
    ],
    correctAnswer: 1,
    explanation: "Confidentiality can be broken when there is imminent danger to the client or others, when child abuse is suspected, or when legally required."
  },
  {
    id: 4,
    topic: "Therapeutic Approaches",
    question: "Which therapeutic approach focuses on changing negative thought patterns?",
    options: [
      "Psychodynamic therapy",
      "Person-centred therapy",
      "Cognitive Behavioural Therapy (CBT)",
      "Gestalt therapy"
    ],
    correctAnswer: 2,
    explanation: "CBT focuses on identifying and changing negative thought patterns and behaviors that contribute to emotional distress."
  },
  {
    id: 5,
    topic: "Multicultural Counselling",
    question: "Cultural competence in counselling involves:",
    options: [
      "Ignoring cultural differences",
      "Treating all clients the same way",
      "Understanding and respecting cultural diversity",
      "Only working with clients from your own culture"
    ],
    correctAnswer: 2,
    explanation: "Cultural competence requires understanding, respecting, and effectively working with clients from diverse cultural backgrounds."
  }
  // ... Continue with 195+ more questions covering all topics
];
