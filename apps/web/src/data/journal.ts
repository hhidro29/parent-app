export interface Skill {
    title: string;
    status: 'Proficient' | 'Developing' | 'Need Support';
    observationIndicators: string[];
    activityDetail: string;
    updatedDate?: string;
    // New fields for English Academy
    category?: string;
    date?: string; // e.g. "5 Hour ago"
    quizScore?: number;
    hasReport?: boolean;
}

export interface JournalEntry {
    id: string;
    title: string;
    subTitle?: string; // e.g. "Unit A"
    description: string;
    bg: string;
    totalStimulasi: number;
    skills: Skill[];
    // New fields for English Academy
    scores?: {
        finalTest: number;
        productiveFinal: number;
    };
}

export const JOURNAL_DATA: Record<string, JournalEntry> = {
    'cognitive': {
        id: 'cognitive',
        title: 'Cognitive Development',
        description: 'Building problem-solving skills, memory, and logical thinking through puzzles and patterns.',
        bg: 'bg-[#FF9800]',
        totalStimulasi: 7,
        skills: [
            {
                title: 'Show awareness of and interest in their immediate environment (e.g., objects, people, animals, places, plants)',
                status: 'Proficient',
                updatedDate: '25 Sep 2025',
                observationIndicators: [
                    'Explore and play with objects and a range of materials that interest them for a sustained period of time.',
                    'Observe and talk about the natural environment (e.g., clouds, wind, trees, sun, plant growth).',
                    'Ask questions using "why", "what", "who", "where", etc.'
                ],
                activityDetail: 'Sustained Object Exploration: Providing various materials (like foam blocks or sensory toys) for the child to investigate and play with for extended periods. Nature Observation: Structured time for observing and discussing natural elements like the weather, trees, and plant growth in their immediate surroundings. Environmental Problem Solving: Navigating through or around obstacles in their environment and finding new ways to interact with their immediate physical space.'
            },
            {
                title: 'Aware that their actions can cause things to happen in their environment (cause and effect)',
                status: 'Proficient',
                updatedDate: '24 Sep 2025',
                observationIndicators: [
                    'Push a button to make a toy sound.',
                    'Knock over a tower to see it fall.',
                    'Splash water to make ripples.'
                ],
                activityDetail: 'Cause and Effect Toys: Playing with pop-up toys or musical instruments. Water Play: Experimenting with floating and sinking objects. Building and Crashing: Building block towers and knocking them down.'
            },
            {
                title: 'Develop the ability to recall and anticipate what will happen based on previous experiences',
                status: 'Developing',
                updatedDate: '20 Sep 2025',
                observationIndicators: [
                    'Look for a hidden object.',
                    'Know that lunch comes after cleanup.',
                    'Get shoes when hearing "go outside".'
                ],
                activityDetail: 'Hide and Seek: Hiding toys under a blanket. Routine Cards: Using visual cards to show the daily schedule. Memory Games: Simple matching games with cards.'
            },
            {
                title: 'Explore the immediate environment with their senses',
                status: 'Proficient',
                updatedDate: '18 Sep 2025',
                observationIndicators: [
                    'Touch different textures.',
                    'Smell flowers in the garden.',
                    'Listen to different sounds.'
                ],
                activityDetail: 'Sensory Bins: Exploring bins filled with rice, beans, or water. Nature Walks: Focusing on sights, sounds, and smells outside. Sound Jars: Guessing what is inside a shaker jar.'
            },
            {
                title: 'Play to explore, test out ideas, and solve problems',
                status: 'Developing',
                updatedDate: '15 Sep 2025',
                observationIndicators: [
                    'Try to fit shapes into a sorter.',
                    'Build a bridge with blocks.',
                    'Figure out how to open a container.'
                ],
                activityDetail: 'Shape Sorters: Practicing with different shapes. Block Play: Challenging the child to build specific structures. Container Play: Opening and closing different types of boxes.'
            },
            {
                title: 'Recognise differences and similarities in objects, people, and places in their environment',
                status: 'Need Support',
                updatedDate: '12 Sep 2025',
                observationIndicators: [
                    'Sort objects by color.',
                    'Match identical pictures.',
                    'Point out differences in two images.'
                ],
                activityDetail: 'Sorting Games: Sorting buttons or pompoms by color. Matching Cards: Finding pairs of matching animals. Spot the Difference: Looking at simple picture books.'
            },
            {
                title: 'Recognise basic relationships and simple patterns (e.g., shape, colour, size)',
                status: 'Developing',
                updatedDate: '10 Sep 2025',
                observationIndicators: [
                    'Complete a simple pattern (red, blue, red...).',
                    'Stack rings by size.',
                    'Group objects by shape.'
                ],
                activityDetail: 'Patterning with Beads: Stringing beads in a pattern. Stacking Rings: Organizing rings from biggest to smallest. Shape Grouping: Putting all the circles together.'
            }
        ]
    },
    'language': {
        id: 'language',
        title: 'Communication & Language Development',
        description: 'Enhancing vocabulary, sentence structure, and storytelling abilities.',
        bg: 'bg-[#9C27B0]',
        totalStimulasi: 6,
        skills: [
            {
                title: 'Develop an interest in language experiences (e.g., listening to a variety of stories, rhymes, and songs)',
                status: 'Proficient',
                updatedDate: '25 Sep 2025',
                observationIndicators: [
                    'Listen to a story without distraction.',
                    'Join in singing familiar songs.',
                    'Ask to read a favorite book.'
                ],
                activityDetail: 'Story Time: Reading varied books daily. Singing Songs: Singing nursery rhymes with hand motions. Library Visits: Choosing new books to explore.'
            },
            {
                title: 'Engage in daily back-and-forth communication using non-verbal cues and simple words',
                status: 'Proficient',
                updatedDate: '24 Sep 2025',
                observationIndicators: [
                    'Wave hello and goodbye.',
                    'Point to wanted items.',
                    'Say "mama" or "dada" with meaning.'
                ],
                activityDetail: 'Face-to-Face Play: Talking while looking at the child. Copycat Games: Mimicking sounds and gestures. naming Objects: Pointing to and naming everyday items.'
            },
            {
                title: 'Make known their ideas and needs through non-verbal and verbal cues / simple words',
                status: 'Developing',
                updatedDate: '22 Sep 2025',
                observationIndicators: [
                    'Point to a cup when thirsty.',
                    'Shake head for "no".',
                    'Bring a shoe to go outside.'
                ],
                activityDetail: 'Choice Boards: Pointing to pictures to make choices. Sign Language: Teaching simple signs like "more" and "all done". Modeling Language: Saying the words for what the child is pointing to.'
            },
            {
                title: 'Begin to express their ideas, needs, and feelings through simple art forms and music and movement',
                status: 'Developing',
                updatedDate: '20 Sep 2025',
                observationIndicators: [
                    'Dance to music.',
                    'Scribble on paper.',
                    'Bang on a drum.'
                ],
                activityDetail: 'Music and Movement: Dancing with scarves. Art Station: Providing crayons and paper freely. Rhythm Band: Playing with simple percussion instruments.'
            },
            {
                title: 'Show interest in books and other printed materials (e.g., signs and labels in the environment)',
                status: 'Need Support',
                updatedDate: '18 Sep 2025',
                observationIndicators: [
                    'Hold a book right side up.',
                    'Point to pictures in a book.',
                    'Notice signs on a walk.'
                ],
                activityDetail: 'Book Exploration: Letting the child handle board books. Labeling Environment: Putting labels on toy bins. Sign Hunt: Looking for stop signs or exit signs.'
            },
            {
                title: 'Develop early comprehension skills',
                status: 'Need Support',
                updatedDate: '16 Sep 2025',
                observationIndicators: [
                    'Follow simple one-step directions.',
                    'Answer simple "who" questions.',
                    'Point to body parts when named.'
                ],
                activityDetail: 'I Spy: Finding objects described by color or use. Body Part Game: "Where is your nose?". Simple Commands: "Put the block in the box."'
            }
        ]
    },
    'physical': {
        id: 'physical',
        title: 'Physical Development',
        description: 'Improving gross and fine motor skills through active play and coordination exercises.',
        bg: 'bg-[#4CAF50]',
        totalStimulasi: 6,
        skills: [
            {
                title: 'Gain a sense of independence in caring for self',
                status: 'Proficient',
                updatedDate: '25 Sep 2025',
                observationIndicators: [
                    'Wash hands with help.',
                    'Hold a spoon to eat.',
                    'Pull off socks.'
                ],
                activityDetail: 'Self-Care Steps: Breaking down handwashing into steps. Feeding Practice: Offering finger foods and utensils. Dressing Up: Playing with easy-to-wear costumes.'
            },
            {
                title: 'Show an awareness of the importance of healthy habits and personal hygiene and safety',
                status: 'Proficient',
                updatedDate: '24 Sep 2025',
                observationIndicators: [
                    'Sneeze into elbow.',
                    'Hold hand when crossing street.',
                    'Brush teeth with help.'
                ],
                activityDetail: 'Healthy Habits Books: Reading about hygiene. Safety Walks: Discussing safety rules outside. Pretend Play: Playing doctor or dentist.'
            },
            {
                title: 'Show interest in a variety of indoor and outdoor sensorimotor and movement activities',
                status: 'Developing',
                updatedDate: '22 Sep 2025',
                observationIndicators: [
                    'Play on playground equipment.',
                    'Crawl through a tunnel.',
                    'Roll a ball.'
                ],
                activityDetail: 'Obstacle Course: Crawling under chairs and over pillows. Ball Play: Rolling and throwing soft balls. Playground Visits: Exploring slides and swings.'
            },
            {
                title: 'Develop body awareness and skills (include both locomotor and non-locomotor skills)',
                status: 'Developing',
                updatedDate: '20 Sep 2025',
                observationIndicators: [
                    'Balance on one foot briefly.',
                    'Jump forward.',
                    'Walk backward.'
                ],
                activityDetail: 'Animal Walks: Walking like a bear or hopping like a bunny. Balance Beam: Walking on a line of tape. Freeze Dance: Stopping movement when music stops.'
            },
            {
                title: 'Develop awareness of space (aware of the space around them and the relationship between their body and objects)',
                status: 'Need Support',
                updatedDate: '18 Sep 2025',
                observationIndicators: [
                    'Navigate around furniture.',
                    'Fit body into a small space.',
                    'Throw a beanbag into a hoop.'
                ],
                activityDetail: 'Tunnel Play: Crawling through tunnels. Target Throw: Throwing beanbags into a laundry basket. Space Bubble: Teaching about personal space with hula hoops.'
            },
            {
                title: 'Manipulate objects with increasing degree of control',
                status: 'Need Support',
                updatedDate: '16 Sep 2025',
                observationIndicators: [
                    'Stack 3-4 blocks.',
                    'Turn pages of a book.',
                    'String large beads.'
                ],
                activityDetail: 'Block Building: Stacking and balancing blocks. Fine Motor Board: Using zippers, snaps, and latches. Bead Stringing: Using shoelaces and large beads.'
            }
        ]
    },
    'social': {
        id: 'social',
        title: 'Social & Emotional Development',
        description: 'Fostering cooperation, empathy, and self-confidence in group activities.',
        bg: 'bg-[#673AB7]',
        totalStimulasi: 8,
        skills: [
            {
                title: 'Show awareness of personal identity (own abilities and personal qualities)',
                status: 'Proficient',
                updatedDate: '25 Sep 2025',
                observationIndicators: [
                    'Identify their facial features and limbs during mirror play.',
                    'Communicate what they can do with different parts of their body.',
                    'Communicate with educators and friends about their likes and dislikes, interests, favourite things, and what they like to play.'
                ],
                activityDetail: 'Mirror Play: Engaging in activities using mirrors to recognize and identify their own facial features and body parts. Personal Preference Discussions: Facilitating conversations where the child communicates their favorite things, toys, and play interests. Choice Making: Allowing the child to select specific items meaningful to them, such as choosing which book they would like to read.'
            },
            {
                title: 'Develop confidence to explore (with caregiver as a secure base)',
                status: 'Proficient',
                updatedDate: '24 Sep 2025',
                observationIndicators: [
                    'Move away from caregiver to play.',
                    'Check back with caregiver.',
                    'Try a new activity.'
                ],
                activityDetail: 'Secure Base Play: Sitting nearby while child explores. New Environment: Visiting a new park together. Encouragement: Praising efforts to try new things.'
            },
            {
                title: 'Identify / Know their own emotions',
                status: 'Proficient',
                updatedDate: '23 Sep 2025',
                observationIndicators: [
                    'Say "I am mad".',
                    'Identify happy face in picture.',
                    'Cry when sad.'
                ],
                activityDetail: 'Emotion Mirror: Making faces in the mirror. Feeling Check-In: Asking "How do you feel?" daily. Drawing Feelings: Drawing happy or sad faces.'
            },
            {
                title: 'Self-regulate and manage their emotions',
                status: 'Developing',
                updatedDate: '21 Sep 2025',
                observationIndicators: [
                    'Take deep breaths when mad.',
                    'Ask for a hug when sad.',
                    'Wait for a turn patiently.'
                ],
                activityDetail: 'Calming Corner: Creating a safe space with soft toys. Breathing Exercises: Blowing "soup" or "candles". Waiting Games: Practicing waiting for a cue.'
            },
            {
                title: 'Develop a sense of belonging',
                status: 'Developing',
                updatedDate: '19 Sep 2025',
                observationIndicators: [
                    'Greet friends by name.',
                    'Participate in group clean up.',
                    'Refer to "our class".'
                ],
                activityDetail: 'Photo Board: Looking at photos of family and friends. Group Songs: Singing songs that include everyone\'s name. Collaborative Art: Making a mural together.'
            },
            {
                title: 'Show an awareness of rules and taking turns',
                status: 'Need Support',
                updatedDate: '17 Sep 2025',
                observationIndicators: [
                    'Wait in line for slide.',
                    'Pass the ball to a friend.',
                    'Stop when asked.'
                ],
                activityDetail: 'Turn-Taking Games: Rolling a ball back and forth. Stop and Go: Playing Red Light, Green Light. Rule Posters: Reviewing simple class rules visually.'
            },
            {
                title: 'Make simple choices to meet their immediate needs, with or without support from educator',
                status: 'Developing',
                updatedDate: '15 Sep 2025',
                observationIndicators: [
                    'Choose a snack.',
                    'Pick a toy to play with.',
                    'Decide where to sit.'
                ],
                activityDetail: 'Choice Time: Offering 2-3 options for play. Snack Selection: Letting child choose between apple or banana. Clothing Choices: Letting child pick blue or red shirt.'
            },
            {
                title: 'Show a sense of responsibility in performing simple tasks',
                status: 'Proficient',
                updatedDate: '12 Sep 2025',
                observationIndicators: [
                    'Put toys away after use.',
                    'Throw trash in bin.',
                    'Help wipe the table.'
                ],
                activityDetail: 'Clean Up Song: Singing while tidying up. Helper Chart: Assigning simple jobs like line leader. Modeling: Showing how to take care of classroom items.'
            }
        ]
    },
    'unit-a-crazy-colour': {
        id: 'unit-a-crazy-colour',
        subTitle: 'Unit A',
        title: 'Crazy Colour',
        description: 'In this unit, students learned about their taste buds and how our tongues interact with flavours. Structure...',
        bg: 'bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0]', // Example gradient
        totalStimulasi: 0, // Not used for EA
        scores: {
            finalTest: 85,
            productiveFinal: 85
        },
        skills: [
            {
                category: 'A.1 Language Introduction',
                title: 'Kata kerja memasak',
                date: '5 Hour ago',
                status: 'Proficient', // Reusing status for badge color logic if needed, or ignore
                quizScore: 70,
                observationIndicators: [],
                activityDetail: ''
            },
            {
                category: 'A.3 Culture & pronunciation',
                title: 'Makanan khas Thailand',
                date: '5 Days ago',
                status: 'Proficient',
                hasReport: true,
                observationIndicators: [],
                activityDetail: ''
            },
            {
                category: 'A.2 Language practice',
                title: 'Zero conditional',
                status: 'Proficient',
                observationIndicators: [],
                activityDetail: ''
            },
            {
                category: 'A.4 Language extension',
                title: 'Peralatan memasak',
                status: 'Proficient',
                observationIndicators: [],
                activityDetail: ''
            },
            {
                category: 'A.5 Language practice 2',
                title: 'Kata pembilang',
                status: 'Proficient',
                observationIndicators: [],
                activityDetail: ''
            },
            {
                category: 'A.6 Cross-curricular',
                title: 'Selera',
                status: 'Proficient',
                observationIndicators: [],
                activityDetail: ''
            },
            {
                category: 'A.3 Culture & pronunciation',
                title: 'Makanan khas Thailand',
                status: 'Proficient',
                observationIndicators: [],
                activityDetail: ''
            },
            {
                category: 'A.4 Language extension',
                title: 'Peralatan memasak',
                status: 'Proficient',
                observationIndicators: [],
                activityDetail: ''
            }
        ]
    }
};
