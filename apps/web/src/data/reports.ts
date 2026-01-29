// Detailed report data for class reports
export interface ReportDetail {
    id: string;
    childId: string;
    programType: 'english-academy' | 'champions-wonderlab';
    date: string;
    unitTitle: string;
    teacher: {
        name: string;
        title: string;
    };
    heroImage: string;
    activityDetail: {
        learningObjective: string;
        skillsFocus?: {
            vocabulary?: string[];
            structure?: string[];
        };
        developmentAreas?: Array<{
            category: string;
            categoryColor: string;
            title: string;
            result: string;
            notes: string;
        }>;
    };
    developmentNotes: string;
    closingMessage: string;
}

export const REPORT_DETAILS: Record<string, ReportDetail> = {
    // Liam's English Academy Reports
    '1': {
        id: '1',
        childId: 'liam',
        programType: 'english-academy',
        date: '25 November 2025',
        unitTitle: 'Unit A1 : Crazy Colour',
        teacher: {
            name: 'Winai Elprit Sekarputri',
            title: 'Master Teacher'
        },
        heroImage: '/assets/images/thumbnail-activity.png',
        activityDetail: {
            learningObjective: 'To learn about living things and their young, life stages, and the number of offspring they have',
            skillsFocus: {
                vocabulary: [
                    'Animal offspring: calf, joey, cub, puppy, kitten, caterpillar',
                    'Human life stages: baby, toddler, kid, teenager, adult',
                    'Plant life stages: seed, seedling, young plant, adult plant'
                ],
                structure: [
                    'Nouns, pronouns (he, she, it, they, etc.), reflexive pronouns (themselves, herself, myself, etc.)'
                ]
            }
        },
        developmentNotes: 'Hari ini, Ananda aktif mengikuti semua kegiatan dengan antusiasme tinggi 🗣️. Dari penguasaan materi, Ananda memahami materi dengan sangat baik dan mampu mengerjakan tugas dengan mandiri 📖. Ketika berinteraksi dengan yang lain, Ananda menunjukkan kemampuan untuk berkomunikasi dengan lancar dan positif, bekerja sama, serta berbagi pendapat dengan percaya diri 👥.',
        closingMessage: 'Mohon diinformasikan jika ada hal yang ingin Ayah/Bunda tanyakan.\n\nTerima kasih atas perhatian dan kerja samanya. Hormat kami, English Academy Center'
    },
    '2': {
        id: '2',
        childId: 'liam',
        programType: 'english-academy',
        date: '18 November 2025',
        unitTitle: 'Unit J : Grammar Essentials',
        teacher: {
            name: 'Winai Elprit Sekarputri',
            title: 'Master Teacher'
        },
        heroImage: '/assets/images/thumbnail-activity.png',
        activityDetail: {
            learningObjective: 'To understand and apply fundamental grammar rules in writing and speaking',
            skillsFocus: {
                vocabulary: [
                    'Grammar terms: subject, predicate, verb, noun, adjective',
                    'Writing elements: sentence, paragraph, clause, phrase'
                ],
                structure: [
                    'Subject-verb agreement, tense consistency, proper punctuation'
                ]
            }
        },
        developmentNotes: 'Liam menunjukkan pemahaman yang sangat baik terhadap konsep tata bahasa yang diajarkan. Dia mampu mengidentifikasi kesalahan grammar dalam kalimat dan memperbaikinya dengan tepat. Partisipasi aktif dalam diskusi kelas sangat baik.',
        closingMessage: 'Mohon diinformasikan jika ada hal yang ingin Ayah/Bunda tanyakan.\n\nTerima kasih atas perhatian dan kerja samanya. Hormat kami, English Academy Center'
    },
    // Dora's Champions Wonderlab Reports
    'd1': {
        id: 'd1',
        childId: 'dora',
        programType: 'champions-wonderlab',
        date: '25 November 2025',
        unitTitle: 'Discovering Me - This Is Me!',
        teacher: {
            name: 'Winsi Elpril Sekarputri',
            title: 'Master Teacher'
        },
        heroImage: '/assets/images/thumbnail-activity.png',
        activityDetail: {
            learningObjective: 'To explore and celebrate personal identity, helping children recognize their unique qualities and abilities',
            developmentAreas: [
                {
                    category: 'Social & Emotional Development',
                    categoryColor: '#9747FF',
                    title: 'Show awareness of personal identity (own abilities and personal qualities)',
                    result: 'Proficient',
                    notes: 'Dora showed wonderful self-awareness today by confidently sharing her favorite activities during circle time. She proudly demonstrated her jumping skills and talked about how she likes to help her friends. Her ability to recognize and express her strengths shows excellent progress in understanding her own identity.'
                },
                {
                    category: 'Authenticity',
                    categoryColor: '#E85C34',
                    title: 'Feels content being oneself, Expresses genuine feelings honestly',
                    result: 'Proficient',
                    notes: 'Throughout the day, Dora expressed her feelings authentically. When she felt frustrated with a puzzle, she communicated her emotions clearly and asked for help. She also shared her excitement when completing tasks, showing comfort in being herself.'
                }
            ]
        },
        developmentNotes: 'Hari ini, Dora menunjukkan perkembangan yang sangat baik dalam mengenali dirinya sendiri. Ia aktif berpartisipasi dalam kegiatan "All About Me" dan dengan percaya diri membagikan hal-hal yang membuatnya unik. Dora juga menunjukkan kemampuan yang baik dalam mengekspresikan perasaannya dengan jujur dan terbuka 🌟.',
        closingMessage: 'Mohon diinformasikan jika ada hal yang ingin Ayah/Bunda tanyakan.\n\nTerima kasih atas perhatian dan kerja samanya. Hormat kami, Champions Wonderlab Center'
    },
    'd2': {
        id: 'd2',
        childId: 'dora',
        programType: 'champions-wonderlab',
        date: '18 November 2025',
        unitTitle: 'Discovering Me - My Hands and Feet',
        teacher: {
            name: 'Winsi Elpril Sekarputri',
            title: 'Master Teacher'
        },
        heroImage: '/assets/images/thumbnail-activity.png',
        activityDetail: {
            learningObjective: 'To develop awareness of body parts and their functions, enhancing gross and fine motor skills',
            developmentAreas: [
                {
                    category: 'Physical Development',
                    categoryColor: '#4CAF50',
                    title: 'Demonstrate control and coordination in large and small movements',
                    result: 'Proficient',
                    notes: 'Dora demonstrated excellent control during today\'s activities. She successfully completed hand-tracing art and participated enthusiastically in footprint painting. Her fine motor skills showed improvement as she carefully traced around her fingers and used different grips when handling paintbrushes.'
                },
                {
                    category: 'Body Awareness',
                    categoryColor: '#FF9800',
                    title: 'Recognize and name body parts, understand their functions',
                    result: 'Developing',
                    notes: 'Dora is making good progress in identifying her hands and feet and talking about what they can do. She enjoyed exploring different movements like clapping, stomping, and tiptoeing. With gentle guidance, she is becoming more aware of how her body moves in space.'
                }
            ]
        },
        developmentNotes: 'Dora sangat antusias dalam mengeksplorasi kemampuan tangan dan kakinya hari ini. Ia berhasil menyelesaikan aktivitas melukis dengan jari dan kaki dengan penuh kegembiraan. Koordinasi motorik halusnya terus berkembang, terutama saat ia mencoba berbagai gerakan tangan yang berbeda 👐🦶.',
        closingMessage: 'Mohon diinformasikan jika ada hal yang ingin Ayah/Bunda tanyakan.\n\nTerima kasih atas perhatian dan kerja samanya. Hormat kami, Champions Wonderlab Center'
    },
    'd3': {
        id: 'd3',
        childId: 'dora',
        programType: 'champions-wonderlab',
        date: '11 November 2025',
        unitTitle: 'Discovering Me - I Can Try!',
        teacher: {
            name: 'Winsi Elpril Sekarputri',
            title: 'Master Teacher'
        },
        heroImage: '/assets/images/thumbnail-activity.png',
        activityDetail: {
            learningObjective: 'To build confidence and resilience by encouraging attempts at new challenges, fostering a growth mindset',
            developmentAreas: [
                {
                    category: 'Resilience & Perseverance',
                    categoryColor: '#2196F3',
                    title: 'Show willingness to try new activities and persist when facing challenges',
                    result: 'Proficient',
                    notes: 'Dora showed remarkable resilience today! When building a tall block tower that kept falling, she didn\'t give up. Instead, she tried different approaches and eventually succeeded. She said "I can try again!" multiple times, demonstrating a wonderful growth mindset.'
                },
                {
                    category: 'Self-Confidence',
                    categoryColor: '#FFC107',
                    title: 'Express confidence in own abilities, celebrate small successes',
                    result: 'Proficient',
                    notes: 'Dora celebrated her achievements throughout the day, from completing a complex puzzle to learning a new song. Her positive self-talk and proud expressions show strong self-confidence. She also encouraged her peers with phrases like "You can do it too!"'
                }
            ]
        },
        developmentNotes: 'Hari ini Dora menunjukkan semangat pantang menyerah yang luar biasa! Ia mencoba berbagai aktivitas baru dengan antusias dan tidak mudah putus asa ketika menghadapi kesulitan. Sikap positif dan kemauan untuk terus mencoba menunjukkan perkembangan karakter yang sangat baik 💪✨.',
        closingMessage: 'Mohon diinformasikan jika ada hal yang ingin Ayah/Bunda tanyakan.\n\nTerima kasih atas perhatian dan kerja samanya. Hormat kami, Champions Wonderlab Center'
    },
    'd4': {
        id: 'd4',
        childId: 'dora',
        programType: 'champions-wonderlab',
        date: '4 November 2025',
        unitTitle: 'Discovering Me - Little Explorer',
        teacher: {
            name: 'Winsi Elpril Sekarputri',
            title: 'Master Teacher'
        },
        heroImage: '/assets/images/thumbnail-activity.png',
        activityDetail: {
            learningObjective: 'To nurture curiosity and observational skills by exploring the environment and discovering new things',
            developmentAreas: [
                {
                    category: 'Cognitive Development',
                    categoryColor: '#FF9800',
                    title: 'Demonstrate curiosity and ask questions about the world',
                    result: 'Proficient',
                    notes: 'Dora was incredibly curious during our nature exploration today. She asked numerous "why" and "how" questions about leaves, insects, and rocks. Her observations were detailed - she noticed different leaf shapes and colors, showing excellent attention to detail and genuine interest in learning.'
                },
                {
                    category: 'Scientific Thinking',
                    categoryColor: '#00BCD4',
                    title: 'Make observations, compare and categorize objects',
                    result: 'Developing',
                    notes: 'Dora is developing her ability to observe and categorize. During the sorting activity, she successfully grouped items by color and size. With teacher support, she\'s beginning to make predictions and test her ideas through hands-on exploration.'
                }
            ]
        },
        developmentNotes: 'Dora menunjukkan rasa ingin tahu yang tinggi hari ini! Ia aktif bertanya dan mengeksplorasi berbagai benda di sekitarnya dengan antusiasme. Kemampuan observasinya berkembang pesat, terlihat dari cara ia memperhatikan detail-detail kecil dan membuat perbandingan antar objek 🔍🌿.',
        closingMessage: 'Mohon diinformasikan jika ada hal yang ingin Ayah/Bunda tanyakan.\n\nTerima kasih atas perhatian dan kerja samanya. Hormat kami, Champions Wonderlab Center'
    },
    'd5': {
        id: 'd5',
        childId: 'dora',
        programType: 'champions-wonderlab',
        date: '28 October 2025',
        unitTitle: 'Discovering Me - My Choice!',
        teacher: {
            name: 'Winsi Elpril Sekarputri',
            title: 'Master Teacher'
        },
        heroImage: '/assets/images/thumbnail-activity.png',
        activityDetail: {
            learningObjective: 'To develop decision-making skills and independence by making choices and understanding their consequences',
            developmentAreas: [
                {
                    category: 'Independence & Autonomy',
                    categoryColor: '#673AB7',
                    title: 'Make independent choices and take responsibility for decisions',
                    result: 'Proficient',
                    notes: 'Dora demonstrated strong decision-making skills today. During free play, she chose her activities thoughtfully and explained her choices clearly. When given options for snack time, she made a selection and stuck with it. She\'s also learning to accept the natural consequences of her choices with minimal support.'
                },
                {
                    category: 'Self-Regulation',
                    categoryColor: '#E91E63',
                    title: 'Manage own behavior and follow through with chosen activities',
                    result: 'Developing',
                    notes: 'Dora is making progress in following through with her choices. When she chose to work on a art project, she stayed focused for an appropriate length of time. She\'s learning to transition between activities she\'s chosen and occasionally needs gentle reminders to complete what she started.'
                }
            ]
        },
        developmentNotes: 'Dora menunjukkan kemajuan yang baik dalam membuat pilihan dan keputusan sendiri. Ia mampu memilih aktivitas dengan percaya diri dan mulai memahami bahwa setiap pilihan memiliki konsekuensi. Kemandiriannya terus berkembang dengan baik, dan ia semakin mampu mengatur dirinya sendiri 🌈🎯.',
        closingMessage: 'Mohon diinformasikan jika ada hal yang ingin Ayah/Bunda tanyakan.\n\nTerima kasih atas perhatian dan kerja samanya. Hormat kami, Champions Wonderlab Center'
    }
};

// Existing reports list data
export const REPORTS_BY_CHILD: Record<string, { id: string; type: string; unit?: string; title: string; time: string; status?: string; statusColor?: string; link: string }[]> = {
    liam: [
        {
            id: "c1",
            type: "Class Report",
            unit: "Unit J · Writing Skills",
            title: "Essay Structure",
            time: "5 Hours ago",
            status: "Hadir",
            statusColor: "bg-[#dbf5e8] text-[#2a7650]",
            link: "/learning/report/1"
        },
        {
            id: "c2",
            type: "Class Report",
            unit: "Unit J · Writing Skills",
            title: "Grammar Essentials",
            time: "1 Week ago",
            status: "Hadir",
            statusColor: "bg-[#dbf5e8] text-[#2a7650]",
            link: "/learning/report/2"
        },
        {
            id: "c3",
            type: "Class Report",
            unit: "Unit K · Creative Writing",
            title: "Character Development",
            time: "2 Weeks ago",
            status: "Hadir",
            statusColor: "bg-[#dbf5e8] text-[#2a7650]",
            link: "/learning/report/3"
        },
        {
            id: "c4",
            type: "Class Report",
            unit: "Unit L · Literature Analysis",
            title: "Poetry Techniques",
            time: "3 Weeks ago",
            status: "Hadir",
            statusColor: "bg-[#dbf5e8] text-[#2a7650]",
            link: "/learning/report/4"
        },
        {
            id: "p1",
            type: "Teacher Parent Report",
            title: "Liam A. - Learning Report 1",
            time: "3 Weeks ago",
            link: "#"
        },
        {
            id: "c5",
            type: "Class Report",
            unit: "Unit M · Research Skills",
            title: "Citing Sources",
            time: "4 Weeks ago",
            status: "Hadir",
            statusColor: "bg-[#dbf5e8] text-[#2a7650]",
            link: "/learning/report/5"
        }
    ],
    dora: [
        {
            id: "d1",
            type: "Class Report",
            unit: "Discovering Me",
            title: "This Is Me!",
            time: "5 Hours ago",
            status: "Hadir",
            statusColor: "bg-[#dbf5e8] text-[#2a7650]",
            link: "/learning/report/d1"
        },
        {
            id: "d2",
            type: "Class Report",
            unit: "Discovering Me",
            title: "My Hands and Feet",
            time: "1 Week ago",
            status: "Hadir",
            statusColor: "bg-[#dbf5e8] text-[#2a7650]",
            link: "/learning/report/d2"
        },
        {
            id: "d3",
            type: "Class Report",
            unit: "Discovering Me",
            title: "I Can Try!",
            time: "2 Weeks ago",
            status: "Hadir",
            statusColor: "bg-[#dbf5e8] text-[#2a7650]",
            link: "/learning/report/d3"
        },
        {
            id: "d4",
            type: "Class Report",
            unit: "Discovering Me",
            title: "Little Explorer",
            time: "3 Weeks ago",
            status: "Hadir",
            statusColor: "bg-[#dbf5e8] text-[#2a7650]",
            link: "/learning/report/d4"
        },
        {
            id: "dp1",
            type: "Teacher Parent Report",
            title: "Dora P. - Learning Report 1",
            time: "3 Weeks ago",
            link: "#"
        },
        {
            id: "d5",
            type: "Class Report",
            unit: "Discovering Me",
            title: "My Choice!",
            time: "4 Weeks ago",
            status: "Hadir",
            statusColor: "bg-[#dbf5e8] text-[#2a7650]",
            link: "/learning/report/d5"
        }
    ]
};
