export interface Flashcard {
  id: number;
  front: string;
  back: string;
}

export interface MultipleChoiceQuestion {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

export interface TrueFalseQuestion {
  id: number;
  statement: string;
  isTrue: boolean;
  explanation: string;
}

export const flashcards: Flashcard[] = [
  {
    id: 1,
    front: 'What is counselling?',
    back: 'A professional relationship empowering individuals to achieve mental health, wellness, education, and career goals through collaboration.'
  },
  {
    id: 2,
    front: 'Name the three core conditions of person-centred therapy.',
    back: 'Empathy, unconditional positive regard, and congruence.'
  },
  {
    id: 3,
    front: 'What is the primary goal of Cognitive Behavioural Therapy (CBT)?',
    back: 'To identify and modify negative thought patterns and behaviours to improve emotional regulation.'
  },
  {
    id: 4,
    front: 'Define a dual relationship in counselling.',
    back: 'A relationship where a counsellor has both a professional and non-professional connection with a client, risking ethical conflicts.'
  },
  {
    id: 5,
    front: 'What is cultural sensitivity in counselling?',
    back: 'Understanding and respecting a client\'s cultural, religious, and social background to provide effective counselling.'
  },
  {
    id: 6,
    front: 'What is the purpose of counselling research?',
    back: 'To advance knowledge, improve practices, and evaluate the effectiveness of counselling interventions.'
  },
  {
    id: 7,
    front: 'Define confidentiality in counselling.',
    back: 'The ethical obligation to protect a client\'s private information unless consent or legal/ethical exceptions apply.'
  },
  {
    id: 8,
    front: 'What is the termination phase in counselling?',
    back: 'The process of ending the counselling relationship when goals are met or it\'s no longer beneficial, ensuring closure.'
  },
  {
    id: 9,
    front: 'What is the focus of psychodynamic therapy?',
    back: 'Unconscious processes and early life experiences impacting current behaviour and emotions.'
  },
  {
    id: 10,
    front: 'What is an attending skill in counselling?',
    back: 'Active listening, eye contact, and body language to show engagement with the client.'
  },
  {
    id: 11,
    front: 'What is the goal of counselling ethics?',
    back: 'To ensure professional conduct, client well-being, and adherence to ethical standards.'
  },
  {
    id: 12,
    front: 'What is Gestalt therapy?',
    back: 'A humanistic approach focusing on present awareness and personal responsibility for growth.'
  },
  {
    id: 13,
    front: 'Define unconditional positive regard.',
    back: 'Accepting and valuing a client without judgment to foster a safe therapeutic environment.'
  },
  {
    id: 14,
    front: 'What is a referral in counselling?',
    back: 'Directing a client to another professional when the counsellor lacks expertise or resources.'
  },
  {
    id: 15,
    front: 'What is the role of empathy in counselling?',
    back: 'Understanding and sharing a client\'s feelings to build trust and rapport.'
  },
  {
    id: 16,
    front: 'What is the focus of behavioural therapy?',
    back: 'Modifying maladaptive behaviours through techniques like conditioning and reinforcement.'
  },
  {
    id: 17,
    front: 'What is informed consent in counselling?',
    back: 'Providing clients with clear information about the counselling process and obtaining their agreement.'
  },
  {
    id: 18,
    front: 'What is the client-counsellor relationship?',
    back: 'A collaborative, trusting partnership central to effective counselling outcomes.'
  },
  {
    id: 19,
    front: 'What is feminist therapy?',
    back: 'A therapeutic approach addressing gender, power dynamics, and social inequalities.'
  },
  {
    id: 20,
    front: 'What is the purpose of crisis intervention counselling?',
    back: 'To provide immediate support to clients experiencing acute distress or trauma.'
  },
  {
    id: 21,
    front: 'Define active listening.',
    back: 'Fully concentrating on, understanding, and responding to a client\'s verbal and nonverbal communication.'
  },
  {
    id: 22,
    front: 'What is the role of self-reflection in counselling?',
    back: 'Counsellors examine their own biases and emotions to improve practice and client interactions.'
  },
  {
    id: 23,
    front: 'What is integrative therapy?',
    back: 'Combining multiple therapeutic approaches to tailor treatment to client needs.'
  },
  {
    id: 24,
    front: 'What is a key principle of counselling ethics?',
    back: 'Beneficence, ensuring actions promote client well-being.'
  },
  {
    id: 25,
    front: 'What is the counselling environment?',
    back: 'A safe, private, and comfortable setting conducive to open communication.'
  },
  {
    id: 26,
    front: 'What is positive psychology in counselling?',
    back: 'Focusing on strengths, resilience, and well-being to enhance client growth.'
  },
  {
    id: 27,
    front: 'What is a limitation of psychoanalysis?',
    back: 'It is time-intensive and may not suit clients seeking quick solutions.'
  },
  {
    id: 28,
    front: 'What is the role of counselling training?',
    back: 'To develop competencies, skills, and ethical awareness for effective practice.'
  },
  {
    id: 29,
    front: 'What is multicultural counselling?',
    back: 'Counselling that respects and integrates clients\' cultural identities and values.'
  },
  {
    id: 30,
    front: 'What is the purpose of evaluating counselling effectiveness?',
    back: 'To assess outcomes, improve interventions, and ensure client progress.'
  }
];

export const multipleChoiceQuestions: MultipleChoiceQuestion[] = [
  {
    id: 1,
    question: 'What is a key characteristic of an effective counsellor?',
    options: [
      'Rigid adherence to one approach',
      'Empathy and active listening',
      'Focusing only on outcomes',
      'Maintaining formal distance'
    ],
    answer: 'Empathy and active listening'
  },
  {
    id: 2,
    question: 'Which approach emphasizes unconscious conflicts?',
    options: [
      'CBT',
      'Person-Centred Therapy',
      'Psychodynamic Therapy',
      'Gestalt Therapy'
    ],
    answer: 'Psychodynamic Therapy'
  },
  {
    id: 3,
    question: 'What is the primary goal of Cognitive Behavioral Therapy (CBT)?',
    options: [
      'Explore childhood experiences',
      'Modify negative thought patterns',
      'Focus on future aspirations',
      'Analyze dreams'
    ],
    answer: 'Modify negative thought patterns'
  },
  {
    id: 4,
    question: 'Which of the following is NOT a core condition in Person-Centred Therapy?',
    options: [
      'Empathy',
      'Unconditional positive regard',
      'Congruence',
      'Directive guidance'
    ],
    answer: 'Directive guidance'
  },
  {
    id: 5,
    question: 'What does the term "confidentiality" mean in counselling?',
    options: [
      'Sharing all information with family members',
      'Keeping client information private with exceptions',
      'Discussing cases with colleagues without consent',
      'Publishing case studies without identifiers'
    ],
    answer: 'Keeping client information private with exceptions'
  },
  {
    id: 6,
    question: 'Which therapy focuses on the here and now experience?',
    options: [
      'Psychoanalysis',
      'Gestalt Therapy',
      'Behavioral Therapy',
      'Reality Therapy'
    ],
    answer: 'Gestalt Therapy'
  },
  {
    id: 7,
    question: 'What is the main focus of family systems therapy?',
    options: [
      'Individual pathology',
      'Family dynamics and relationships',
      'Dream analysis',
      'Cognitive restructuring'
    ],
    answer: 'Family dynamics and relationships'
  },
  {
    id: 8,
    question: 'Which of the following is a basic counselling skill?',
    options: [
      'Giving advice',
      'Active listening',
      'Making decisions for clients',
      'Sharing personal problems'
    ],
    answer: 'Active listening'
  },
  {
    id: 9,
    question: 'What is the purpose of a counselling contract?',
    options: [
      'To set legal boundaries only',
      'To establish fees and payment schedules',
      'To clarify expectations and boundaries',
      'To limit the number of sessions'
    ],
    answer: 'To clarify expectations and boundaries'
  },
  {
    id: 10,
    question: 'Which approach is most directive?',
    options: [
      'Person-Centred Therapy',
      'Psychoanalysis',
      'Reality Therapy',
      'Existential Therapy'
    ],
    answer: 'Reality Therapy'
  },
  {
    id: 11,
    question: 'What is the main goal of crisis intervention?',
    options: [
      'Long-term personality change',
      'Immediate stabilization',
      'Family reconstruction',
      'Career counseling'
    ],
    answer: 'Immediate stabilization'
  },
  {
    id: 12,
    question: 'Which therapy focuses on changing irrational beliefs?',
    options: [
      'REBT',
      'Gestalt Therapy',
      'Narrative Therapy',
      'Solution-Focused Therapy'
    ],
    answer: 'REBT'
  },
  {
    id: 13,
    question: 'What is the primary focus of career counseling?',
    options: [
      'Resolving childhood trauma',
      'Improving work-life balance',
      'Enhancing career development',
      'Treating mental disorders'
    ],
    answer: 'Enhancing career development'
  },
  {
    id: 14,
    question: 'Which of the following is a microskill in counseling?',
    options: [
      'Dream interpretation',
      'Reflection of feeling',
      'Family genogram',
      'Psychological testing'
    ],
    answer: 'Reflection of feeling'
  },
  {
    id: 15,
    question: 'What is the main goal of multicultural counseling?',
    options: [
      'Imposing counselor values',
      'Cultural sensitivity and competence',
      'Ignoring cultural differences',
      'Standardizing treatment approaches'
    ],
    answer: 'Cultural sensitivity and competence'
  },
  {
    id: 16,
    question: 'Which approach emphasizes personal responsibility?',
    options: [
      'Psychoanalysis',
      'Reality Therapy',
      'Behavioral Therapy',
      'Person-Centred Therapy'
    ],
    answer: 'Reality Therapy'
  },
  {
    id: 17,
    question: 'What is the main focus of grief counseling?',
    options: [
      'Eliminating grief',
      'Facilitating healthy grieving',
      'Avoiding painful emotions',
      'Replacing lost relationships'
    ],
    answer: 'Facilitating healthy grieving'
  },
  {
    id: 18,
    question: 'Which therapy uses empty chair technique?',
    options: [
      'CBT',
      'Gestalt Therapy',
      'Solution-Focused Therapy',
      'Narrative Therapy'
    ],
    answer: 'Gestalt Therapy'
  },
  {
    id: 19,
    question: 'What is the main goal of group counseling?',
    options: [
      'Individual attention',
      'Social skills development',
      'Therapeutic factors of group interaction',
      'Faster results than individual therapy'
    ],
    answer: 'Therapeutic factors of group interaction'
  },
  {
    id: 20,
    question: 'Which approach focuses on solutions rather than problems?',
    options: [
      'Psychoanalysis',
      'Solution-Focused Therapy',
      'Behavioral Therapy',
      'Existential Therapy'
    ],
    answer: 'Solution-Focused Therapy'
  },
  {
    id: 21,
    question: 'What is the main focus of career counseling?',
    options: [
      'Treating mental illness',
      'Enhancing career development',
      'Resolving family conflicts',
      'Improving academic performance'
    ],
    answer: 'Enhancing career development'
  },
  {
    id: 22,
    question: 'Which therapy focuses on the meaning of life?',
    options: [
      'Existential Therapy',
      'CBT',
      'Behavioral Therapy',
      'Reality Therapy'
    ],
    answer: 'Existential Therapy'
  },
  {
    id: 23,
    question: 'What is the main goal of crisis intervention?',
    options: [
      'Long-term personality change',
      'Immediate stabilization',
      'Family therapy',
      'Career counseling'
    ],
    answer: 'Immediate stabilization'
  },
  {
    id: 24,
    question: 'Which approach uses the concept of "unconditional positive regard"?',
    options: [
      'Person-Centred Therapy',
      'CBT',
      'Behavioral Therapy',
      'Psychoanalysis'
    ],
    answer: 'Person-Centred Therapy'
  },
  {
    id: 25,
    question: 'What is the main focus of narrative therapy?',
    options: [
      'Changing behaviors',
      'Rewriting life stories',
      'Exploring childhood',
      'Analyzing dreams'
    ],
    answer: 'Rewriting life stories'
  },
  {
    id: 26,
    question: 'Which therapy focuses on the relationship between thoughts, feelings, and behaviors?',
    options: [
      'CBT',
      'Gestalt Therapy',
      'Psychoanalysis',
      'Existential Therapy'
    ],
    answer: 'CBT'
  },
  {
    id: 27,
    question: 'What is the main goal of career counseling?',
    options: [
      'Finding the perfect job',
      'Enhancing career development',
      'Increasing income',
      'Changing careers frequently'
    ],
    answer: 'Enhancing career development'
  },
  {
    id: 28,
    question: 'Which approach focuses on the present moment?',
    options: [
      'Psychoanalysis',
      'Gestalt Therapy',
      'Behavioral Therapy',
      'Person-Centred Therapy'
    ],
    answer: 'Gestalt Therapy'
  },
  {
    id: 29,
    question: 'What is the main focus of family therapy?',
    options: [
      'Individual pathology',
      'Family dynamics',
      'Dream analysis',
      'Cognitive restructuring'
    ],
    answer: 'Family dynamics'
  },
  {
    id: 30,
    question: 'Which therapy focuses on the therapeutic relationship as the primary healing factor?',
    options: [
      'Person-Centred Therapy',
      'CBT',
      'Behavioral Therapy',
      'REBT'
    ],
    answer: 'Person-Centred Therapy'
  }
];

export const trueFalseQuestions: TrueFalseQuestion[] = [
  {
    id: 1,
    statement: 'Confidentiality in counseling means never sharing any client information under any circumstances.',
    isTrue: false,
    explanation: 'Confidentiality has exceptions, such as when there is risk of harm to self or others, or when required by law.'
  },
  {
    id: 2,
    statement: 'Active listening involves only hearing the words that the client is saying.',
    isTrue: false,
    explanation: 'Active listening involves understanding both verbal and non-verbal communication, including tone, body language, and underlying emotions.'
  },
  {
    id: 3,
    statement: 'Cognitive Behavioral Therapy (CBT) focuses on exploring childhood experiences to understand current behavior.',
    isTrue: false,
    explanation: 'CBT primarily focuses on identifying and changing current thought patterns and behaviors, rather than exploring childhood experiences.'
  },
  {
    id: 4,
    statement: 'Unconditional positive regard means accepting the client without judgment.',
    isTrue: true,
    explanation: 'Unconditional positive regard is a core condition in Person-Centred Therapy where the counselor accepts the client without judgment or evaluation.'
  },
  {
    id: 5,
    statement: 'Dual relationships in counseling are always unethical and should be avoided.',
    isTrue: false,
    explanation: 'While dual relationships can be problematic, they are not always unethical. They require careful consideration of potential harm and benefits.'
  },
  {
    id: 6,
    statement: 'The main goal of crisis intervention is to provide immediate support and stabilization.',
    isTrue: true,
    explanation: 'Crisis intervention focuses on immediate support, safety, and stabilization rather than long-term therapy goals.'
  },
  {
    id: 7,
    statement: 'Gestalt therapy emphasizes the importance of staying in the present moment.',
    isTrue: true,
    explanation: 'Gestalt therapy focuses on the here and now experience, emphasizing present awareness and personal responsibility.'
  },
  {
    id: 8,
    statement: 'A counselor should always give advice to their clients.',
    isTrue: false,
    explanation: 'Counselors typically avoid giving direct advice, instead helping clients explore options and make their own decisions.'
  },
  {
    id: 9,
    statement: 'Cultural competence in counseling involves understanding only the client\'s racial and ethnic background.',
    isTrue: false,
    explanation: 'Cultural competence includes understanding all aspects of a client\'s identity, including but not limited to race and ethnicity, such as religion, gender, sexual orientation, and socioeconomic status.'
  },
  {
    id: 10,
    statement: 'Reality Therapy focuses on helping clients take responsibility for their choices.',
    isTrue: true,
    explanation: 'Reality Therapy emphasizes personal responsibility and focuses on present behavior and choices rather than past experiences.'
  },
  {
    id: 11,
    statement: 'The empty chair technique is commonly used in Gestalt therapy.',
    isTrue: true,
    explanation: 'The empty chair technique is a hallmark of Gestalt therapy, used to help clients explore different aspects of their personality or unresolved issues.'
  },
  {
    id: 12,
    statement: 'Solution-Focused Therapy spends most of the session exploring the problem in depth.',
    isTrue: false,
    explanation: 'Solution-Focused Therapy focuses on solutions and the client\'s goals rather than extensively analyzing problems.'
  },
  {
    id: 13,
    statement: 'Group therapy is always more effective than individual therapy.',
    isTrue: false,
    explanation: 'The effectiveness of group versus individual therapy depends on the client\'s needs, preferences, and the nature of their concerns.'
  },
  {
    id: 14,
    statement: 'Transference occurs when a counselor projects their own feelings onto the client.',
    isTrue: false,
    explanation: 'Transference is when the client projects feelings about significant others onto the counselor. The counselor projecting onto the client is called countertransference.'
  },
  {
    id: 15,
    statement: 'Narrative therapy helps clients rewrite their life stories in more empowering ways.',
    isTrue: true,
    explanation: 'Narrative therapy focuses on helping clients reframe and rewrite their personal narratives to create more positive meanings and outcomes.'
  },
  {
    id: 16,
    statement: 'Existential therapy focuses primarily on childhood experiences.',
    isTrue: false,
    explanation: 'Existential therapy focuses on themes of existence, meaning, freedom, and responsibility in the present and future, not primarily on childhood.'
  },
  {
    id: 17,
    statement: 'A counselor should always maintain the same professional boundaries with all clients.',
    isTrue: true,
    explanation: 'Maintaining consistent professional boundaries is crucial for ethical practice and client welfare.'
  },
  {
    id: 18,
    statement: 'Psychoanalysis typically involves long-term, intensive therapy.',
    isTrue: true,
    explanation: 'Traditional psychoanalysis often involves multiple sessions per week over several years to explore unconscious processes.'
  },
  {
    id: 19,
    statement: 'Family systems theory views the family as a single emotional unit.',
    isTrue: true,
    explanation: 'Family systems theory sees the family as an interconnected emotional unit where changes in one member affect all members.'
  },
  {
    id: 20,
    statement: 'A counselor should always self-disclose personal information to build rapport.',
    isTrue: false,
    explanation: 'While limited self-disclosure can sometimes be therapeutic, it should be used judiciously and only when it benefits the client.'
  },
  {
    id: 21,
    statement: 'The main goal of career counseling is to help clients find any job as quickly as possible.',
    isTrue: false,
    explanation: 'Career counseling focuses on helping clients make informed career decisions and develop career management skills, not just finding any job quickly.'
  },
  {
    id: 22,
    statement: 'Mindfulness is a key component of Dialectical Behavior Therapy (DBT).',
    isTrue: true,
    explanation: 'Mindfulness is one of the core skills taught in DBT to help clients become more aware of the present moment.'
  },
  {
    id: 23,
    statement: 'A counselor should always agree with their client\'s perspective.',
    isTrue: false,
    explanation: 'While counselors should be empathetic and understanding, they don\'t need to agree with all client perspectives, especially if they are harmful or unrealistic.'
  },
  {
    id: 24,
    statement: 'The initial counseling session typically involves gathering background information and establishing goals.',
    isTrue: true,
    explanation: 'The first session usually focuses on assessment, building rapport, and establishing goals for therapy.'
  },
  {
    id: 25,
    statement: 'All counseling approaches are equally effective for all clients and issues.',
    isTrue: false,
    explanation: 'Different approaches may be more or less effective depending on the client, their issues, and the therapeutic relationship.'
  },
  {
    id: 26,
    statement: 'A counselor should always maintain a neutral facial expression to avoid influencing the client.',
    isTrue: false,
    explanation: 'While counselors should be aware of their non-verbal communication, maintaining a completely neutral expression can appear cold or disengaged.'
  },
  {
    id: 27,
    statement: 'The therapeutic alliance is a key factor in successful counseling outcomes.',
    isTrue: true,
    explanation: 'Research consistently shows that the quality of the therapeutic relationship is a strong predictor of positive counseling outcomes.'
  },
  {
    id: 28,
    statement: 'A counselor should never cry in session, even if moved by a client\'s story.',
    isTrue: false,
    explanation: 'While counselors need to manage their emotions, genuine emotional responses can sometimes be appropriate if they are in the client\'s best interest.'
  },
  {
    id: 29,
    statement: 'Termination is an important phase of the counseling process that should be planned and discussed.',
    isTrue: true,
    explanation: 'Proper termination helps consolidate gains, review progress, and address any feelings about ending the therapeutic relationship.'
  },
  {
    id: 30,
    statement: 'Self-care is important for counselors to prevent burnout and maintain effectiveness.',
    isTrue: true,
    explanation: 'Regular self-care is essential for counselors to maintain their own well-being and provide the best possible care to their clients.'
  }
];
