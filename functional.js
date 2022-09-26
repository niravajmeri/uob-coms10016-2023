//LAYOUT CUSTOMIZATION
var currentWeek   = 1;                        // current week [releases content fully visible up to this week]
var activityNum   = 8;                         // number of activities per week (empty slots possible)
var columnNum     = 4;                         // desired columns per week (yet, autofitted to max 2 rows per week)
var title         = "FUNCTIONAL PROGRAMMING";  // content title (different to unitName since multiple content streams maybe in one unit)
var headerOn      = 1;                         // table column headers on(=1) or off(=0), min of 4 columns needed to render
var header1       = "EXERCISES";    // leftmost 1x column header
var header2       = "LECTURES";  // middle 2x column header
var header3       = "COURSEWORK";  // rest of the columns header
var inactColour   = "#999999";                 // font colour for inactive content
var titleColour   = "#777777";                 // table title colour
var titleBColour  = "#BBBBBB";                 // table title background colour
var bkgColour     = "#CCCCCC";                 // table border background colour
var embossColour  = "#AAAAAA";                 // table border emboss colour
var fontSizePix   = 11;                        // font size in pixels
var extendCatNum1 = 8;                         // number of one category that has no border to above cell (e.g. for multi-week coursework)
var extendCatNum2 = 10;                        // number of one category that has no border to above cell (e.g. for multi-week empty)

//ACTIVITY CATEGORIES (up to 35 allowed)
//CATEGORY NUM, CATEGORY TITLE, COLOUR, COUNTER?, SLIDES LINK, MATERIAL LINK
var categories = [
["0", "Lecture:",             "#CCCFFF","0","Slides with Voice",    "Code",     ],
["1", "Teams Session",       "#DDE3FC","1","Slides",    "Code",     ],
["2", "Teams Q&amp;A",       "#CCDFFF","1","",          "",              ],
["3", "Lab",           "#EEDFCF","1","",          "Materials",              ],
["4", "Exercises",           "#D8CCFF","1","","Code",          ],
["5", "Startup Materials:",           "#DDDDDD","0","",          "",              ],
["6", "Formative Coursework","#EEEEDD","1","",          "Materials",     ],
["7", "Summative Coursework","#EEEEDD","1","",          "Materials",     ],
["8",  "",                   "#EEEEDD","0","",          "",              ], // multi-week coursework
["9",  "",                   "#CCCCCC","0","",          "",              ], // empty slot
["10", "",                   "#CCCCCC","0","",          "",              ], // multi-week empty
["11", "Setup Lab:",          "#E0CFCF","0","",          "",              ],
["12", "No Lab this Week",   "#CCCCCC","0","",          "",              ], // week off
["13", "Notes ft. <br> Extra Examples <br> + Explanations",      "#94e5bf","0","",          "Notes",         ],
["14", "Q&A",                "#94e5bf","0","",          "",              ],
["15", "Lecture",            "#CCCFFF","0","Slides with Voice",    "",     ],
["16", "<br/><div align='center' style='color:#777777'>LECTURE-FREE WEEK</div>",   "#CCCCCC","0","",          "",              ], // empty slot
["17", "Formative Practical Assignment",       "#EEEEDD","1","",    "Materials",     ],
["18", "Lecture",             "#CCCFFF","0","",    "Code",     ],
["19", "Sample Exam questions",             "#CCCFFF","0","",    "Materials",     ],
["20", "Formative Sheet",       "#EEEEDD","1","",    "Materials",     ],
["21", "History",       "#EEEEDD","0","",    "Materials",     ],
["22", "Lecture",            "#CCCFFF","0","Slides",    "Code",     ],
["23", "Lecture",            "#CCCFFF","0","",    "",     ],
["24", "Extra Materials",    "#DDDDDD","0","",    "",          ],
];

const blank = ["9","","","","","0","0"]
const lectureSlidesOnly = (lectureName, slidesLink) => ["23", "Mon 11:00-11:50<br/>Tues 14:00-14:50<br/>QB1.40 Pugsley",   lectureName, slidesLink, "", "0", "0"]


var activities = [
//WEEKLY ACTIVITIES
//CATEGORY NUM, DATE|TIME, ACTIVITY TITLE, ACTIVITY URL, SLIDES URL, MATERIAL START, MATERIAL RANGE

//WEEK 01
["24", "in your own time",   "<a href='https://web.microsoftstream.com/video/17f0fbf7-461c-4cf1-937f-21e8407a137e' target='_blank'>Guest seminar VOD: Haskell in the Datacentre</a><br/><br/><a href='https://mengwangoxf.github.io/Papers/NSR15.pdf' target='_blank'>Paper: How functional programming mattered</a><br/><br/><a href='https://bristolpl.github.io/' target='_blank'>Bristol PL Research Group</a>", "", "", "0", "0"],
lectureSlidesOnly("Week 1 - Introduction", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/content/functional/slides/week1.pdf"),
blank,
["11","Thurs 29/09/22<br/>15:00-18:00<br/>MVB2.11/1.15", "GET YOUR PC READY",  "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2022_TB-1/setup.html", "", "0", "0"],
blank,blank,blank,blank,

//WEEK 02
["9", "",                   "",                                "", "", "0", "1"],
["15", "watch before Tue",   "Evaluation", "https://mediasite.bris.ac.uk/Mediasite/Play/414c3f30ea7640128553df9124ca84091d", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/slides/evaluation.zip",    "0", "0"],
["15", "watch before Tue",   "Currying", "https://mediasite.bris.ac.uk/Mediasite/Play/52ceaba7371a483aa9b60df27fdb35991d", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/slides/currying.zip",    "0", "0"],
["3",  "07/10/21<br/>1pm-4pm<br/>MVB2.11", "Join Session Virtually", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/thursday.html", "", "10", "5"],
["9", "",                   "",             "", "", "0", "0"],
["15", "watch before Tue",   "Case and Recursion", "https://mediasite.bris.ac.uk/Mediasite/Play/056c02fa85cc4f4290edbf8f2a8ae36c1d", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/slides/case&recursion.zip",    "0", "0"],
["13", "in your own time",  "",             "", "", "2", "8"],
["21", "(optional)",         "History of Haskell",              "", "", "25", "2"],
//WEEK 03
["9", "",                   "",             "", "", "0", "0"],
["0", "watch before Tue",   "Modelling&Datatypes",       "https://mediasite.bris.ac.uk/Mediasite/Play/b1707b1a799d441980f7d6f349a261d91d", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/slides/modelling&datatypes.zip", "27", "1"],
["0", "watch before Tue",   "Pattern Matching",       "https://mediasite.bris.ac.uk/Mediasite/Play/649bb5f1efc14f589866d27d91faf5fc1d", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/slides/pattern matching.zip", "27", "1"],
["3",  "14/10/21<br/>1pm-4pm<br/>MVB2.11", "Join Session Virtually", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/thursday.html", "", "16", "5"],
["9", "",                   "",             "", "", "0", "0"],
["0", "watch before Tue",   "Recursive Datatypes",       "https://mediasite.bris.ac.uk/Mediasite/Play/dd1ad32f76084b35a99cbd7673ac371c1d", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/slides/recursive datatypes.zip", "27", "1"],
["13", "in your own time",  "",             "", "", "15", "1"],
["17", "(optional)",        "Power",        "", "", "21", "4"],
//WEEK 04
["9", "", "",                    "", "", "0", "0"],
["15", "watch before Tue",   "Lists",       "https://mediasite.bris.ac.uk/Mediasite/Play/6a4a3816dc0c40f3bb7aec6b05de2b091d", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/slides/lists.zip", "2", "1"],
["0", "watch before Tue",   "Functions on lists",       "https://mediasite.bris.ac.uk/Mediasite/Play/df8d5226ad3145b683f32590d1f859511d", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/slides/functions on lists.zip", "55", "1"],
["3", "21/10/21<br/>1pm-4pm<br/>MVB2.11", "Join Session Virtually", "", "", "28", "5"],
["9", "",                   "",                                "", "", "0", "1"],
["9", "",                   "",                                "", "", "0", "1"],
["13", "in your own time", "",           "", "", "33", "2"],
["20", "(optional)", "Structural Inductive Proofs", "", "", "35", "6"],
//WEEK 05
["9", "", "",                         "", "", "0", "0"],
["15", "watch before Tue",   "HO function",                 "https://mediasite.bris.ac.uk/Mediasite/Play/fcbf2a224b344ccf9a6a31629ee699741d", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/slides/HO function.zip", "", ""],
["0",  "watch before Tue",   "foldr",                       "https://mediasite.bris.ac.uk/Mediasite/Play/02ba4aefcd214153bbfc9840f7776c871d", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/slides/foldr.zip", "107", "1"],
["3",  "28/10/21<br/>1pm-4pm<br/>MVB2.11", "Join Session Virtually", "", "", "41", "5"],
["9",  "",                   "",                            "", "", "0", "1"],
["0",  "watch before Tue",   "More HO functions",           "https://mediasite.bris.ac.uk/Mediasite/Play/919dfd46f7bb4812856b31e803608ebe1d", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/slides/more HO functions.zip", "107", "1"],
["13", "in your own time",   "",                            "", "", "46", "5"],
["17", "(optional)",         "Sudoku", "", "", "51", "5"],
//WEEK 06 - reading week
["9", "", "",                         "", "", "0", "0"],
["16","",                   "",           "", ""],
["16","",                   "",           "", ""],
["9", "",                   "",             "", "", "0", "0"],
["9", "",                   "",           "", "", "0", "1"],
["9", "",                   "",             "", "", "0", "0"],
["9", "",                   "",             "", "", "0", "0"],
["9", "",                   "",             "", "", "0", "0"],
//WEEK 07
["9", "", "",                         "", "", "0", "0"],
["15", "watch before Tue",   "Design w. HO functions",                 "https://mediasite.bris.ac.uk/Mediasite/Play/2a7c3b77e49b4f24b61a707fca1d53e91d", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/slides/design w HO.zip", "", ""],
["15", "watch before Tue",   "Type classes",                 "https://mediasite.bris.ac.uk/Mediasite/Play/b56703cfd8484e3e9d36e1980515da711d", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/slides/type classes.zip", "", ""],
["3", "11/11/21 (Remembrance Day)<br/>1pm-4pm<br/>MVB2.11", "Join Session Virtually",                  "", "", "56", "5"],
["9", "",                   "",                            "", "", "0",  "1"],
["18", "view before Tue","Trees","https://mediasite.bris.ac.uk/Mediasite/Play/b3fcbbfaf52a4ea0a850d131b088c8ac1d", "", "107",  "3"],
["13", "in your own time",  "",                            "", "", "66", "4"],
["20", "(optional)",        "Monoids",                     "", "", "70", "6"],
//WEEK 08
["9", "", "",                         "", "", "0", "0"],
["0",  "watch before Tue",   "IO",                       "https://mediasite.bris.ac.uk/Mediasite/Play/3cd46d621c9f412b83426dd5fbc25e021d", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/slides/IO.zip", "109", "1"],
["15", "watch before Tue",   "QC Generator",                 "https://mediasite.bris.ac.uk/Mediasite/Play/d916544af76e4f20a1638fb20b6c96971d", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/slides/QC Generator.zip", "", ""],
//["15", "view by 7/12/20",   "IO",                 "", "", "", ""],
//["15", "view by 7/12/20",   "QC Generator",                 "", "", "", ""],
["3", "18/11/21<br/>1pm-4pm<br/>MVB2.11", "Join Session Virtually",                       "", "", "76", "5"],
["9", "",                   "",                                "", "", "0",  "1"],
["9", "",                   "",                                "", "", "0",  "1"],
["9", "",                   "",                                "", "", "0",  "1"],
["17", "(optional)",        "Blackjack",                          "", "", "81", "4"],
//WEEK 09
["9", "", "",                         "", "", "0", "0"],
["22", "watch before Tue","Functors","https://web.microsoftstream.com/video/73561218-e307-44d2-9b2e-dbffed287f9d", "https://quizizz.com/admin/presentation/619be26fa9afb8001d4e68fa", "116",  "1"],
["22", "watch before Tue","Applicatives","https://web.microsoftstream.com/video/d613cc29-e391-401f-af4c-ad6c5c86d541", "https://quizizz.com/admin/presentation/619be26fa9afb8001d4e68fa", "116",  "2"],
["3", "25/11/21<br/>1pm-4pm<br/>MVB2.11", "Join Session Virtually",                     "", "", "85", "3"],
["9", "",                   "",                                "", "", "0",  "1"],
["9", "",                   "",                                "", "", "0",  "1"],
["9", "",                   "",                                "", "", "0",  "1"],
["20", "(optional)",        "Data.Map and Tries",              "", "", "90", "3"],
//WEEK 10
["9", "", "",                         "", "", "0", "0"],
["22", "watch before Tue","Monads","https://web.microsoftstream.com/video/728e6fb3-907d-4bc1-8259-77386009a481", "https://quizizz.com/admin/presentation/61a1077bf56186001dc1301e", "125",  "1"],
["22", "watch before Tue",   "Embedding Part I", "https://web.microsoftstream.com/video/9acfe070-bfcb-4743-8479-1e305b16cb6c", "https://docs.google.com/presentation/d/10wf-nPV-66mhulP8Bb_1ElC--qIldsTeWfrpXqT4rWA/edit?usp=sharing", "123",  "1"],
["3", "02/12/21<br/>1pm-4pm<br/>MVB2.11", "Join Session Virtually",                     "", "", "118", "5"],
["9", "",                   "",                                "", "", "0",  "1"],
["9", "",                   "",                                "", "", "0", "1"],
["9", "",                   "",                                "", "", "0", "1"],
["17", "(optional)",        "Simplify",                  "", "", "95", "4"],
//WEEK 11
["9",  "",                   "",                            "", "", "0", "1"],
["22",  "watch before Tue",  "Embedding Part II",            "https://web.microsoftstream.com/video/85b52444-fbe7-4f67-a7e2-b9083f2690a6", "https://docs.google.com/presentation/d/1uZM44OzxS3u0MjMnPLsp8kKUxtiBFGW1J2p84zxDQ_Y/edit?usp=sharing", "124", "1"],
["23",  "watch before Tue",                   "Haskell at Facebook",                            "https://web.microsoftstream.com/video/17f0fbf7-461c-4cf1-937f-21e8407a137e?list=user&userId=11ae9db5-365e-4f65-9ce4-94bfea847835", "", "0", "0"],// TODO(Meng): upload video (josef)
["3",  "09/12/21<br/>1pm-4pm<br/>MVB2.11", "Join Session Virtually",                    "", "", "126", "6"],
["9",  "",                   "",                            "", "", "0", "1"],
["9",  "",                   "",                            "", "", "0", "1"],
["9",  "",                   "",                            "", "", "0", "1"],
["17",  "(optional)",        "Tetris",                      "", "", "110", "6"],
//WEEK 12
["9",  "",                   "",                            "", "", "0", "1"],
["15",  "",   "Exam preparation",                       "", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/slides/exam.zip", "0", "0"],
["9",  "",                   "",                            "", "", "0", "1"],
["9",  "", "",                    "", "", "0", "0"],
["9",  "",                   "",                            "", "", "0", "1"],
["9",  "",                   "",                            "", "", "0", "1"],
["9",  "",                   "",                            "", "", "0", "1"],
["9",  "",                   "",         "", "", "0", "0"],
];

//UNIT RESOURCES & MATERIALS
var files = [
[  "0", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/day.hs",           "day.hs"],
[  "1", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/functions.hs",             "functions.hs"],
[  "2", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Notes/Types.pdf", "Types"],
[  "3", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Notes/HaskellPoDs.pdf", "Haskell PoDs"],
[  "4", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Notes/DataConstructors.pdf", "Data Constructors"],
[  "5", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Notes/Tuples.pdf", "Tuples"],
[  "6", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Notes/FunctionComposition.pdf", "Function Composition"],
[  "7", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Notes/Branching.pdf", "Branching"],
[  "8", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Notes/Guards.pdf", "Guards"],
[  "9", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Notes/Laziness.pdf", "Laziness"],
[  "10", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/sheet01.pdf", "Sheet One"],
[  "11", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/sheet01Dyslexic.pdf", "Sheet One (Dyslexic Friendly)"],
[  "12", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/code01.hs", "Code One"],
[  "13", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/answer01.pdf", "Sheet One - Answers"],
[  "14", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/answer01Dyslexic.pdf", "Sheet One - Answers (Dyslexic Friendly)"],
[  "15", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Notes/PatternMatching.pdf", "PatternMatching"],
[  "16", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/sheet02.pdf", "Sheet Two"],
[  "17", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/sheet02Dyslexic.pdf", "Sheet Two (Dyslexic Friendly)"],
[  "18", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/code02.hs", "Code Two"],
[  "19", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/answer02.pdf", "Sheet Two - Answers"],
[  "20", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/answer02Dyslexic.pdf", "Sheet Two - Answers (Dyslexic Friendly)"],
[  "21", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Practicals/Power/PowerInstrs.pdf", "Instructions"],
[  "22", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Practicals/Power/PowerInstrsDyslexic.pdf", "Instructions (Dyslexic Friendly)"],
[  "23", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Practicals/Power/Power.hs", "Power.hs"],
[  "24", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Practicals/Power/MeasureTime.hs", "MeasureTime.hs"],
[  "25", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Notes/HistoryOfHaskell.pdf", "HistoryOfHaskell.pdf"],
[  "26", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Notes/HowFPMattered.pdf", "HowFPMattered.pdf"],
[  "27", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/card.hs",             "card.hs"],
[  "28", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/sheet03.pdf", "Sheet Three"],
[  "29", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/sheet03Dyslexic.pdf", "Sheet Three (Dyslexic Friendly)"],
[  "30", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/code03.hs", "Code Three"],
[  "31", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/answer03.pdf", "Sheet Three - Answers"],
[  "32", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/answer03Dyslexic.pdf", "Sheet Three - Answers (Dyslexic Friendly)"],
[  "33", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Notes/Lists.pdf", "Lists"],
[  "34", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Notes/Maybe.pdf", "Maybe"],
[  "35", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Notes/StructuralInductiveProofs.pdf", "Structural Inductive Proofs"],
[  "36", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/sheetBonus1.pdf", "Bonus Sheet One"],
[  "37", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/sheetBonus1Dyslexic.pdf", "Bonus Sheet One (Dyslexic Friendly)"],
[  "38", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/codeBonus1.hs", "Bonus Code One"],
[  "39", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/answerBonus1.pdf", "Bonus Sheet One - Answers"],
[  "40", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/answerBonus1Dyslexic.pdf", "Bonus Sheet One - Answers (Dyslexic Friendly)"],
[  "41", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/sheet04.pdf", "Sheet Four"],
[  "42", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/sheet04Dyslexic.pdf", "Sheet Four (Dyslexic Friendly)"],
[  "43", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/code04.hs", "Code Four"],
[  "44", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/answer04.pdf", "Sheet Four - Answers"],
[  "45", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/answer04Dyslexic.pdf", "Sheet Four - Answers (Dyslexic Friendly)"],
[  "46", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Notes/UniversalQuantification.pdf", "Universal Quantification"],
[  "47", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Notes/HigherOrderFunctions.pdf", "Higher Order Functions"],
[  "48", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Notes/Map.pdf", "Map"],
[  "49", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Notes/Folds.pdf", "Folds"],
[  "50", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Notes/RecordSyntax.pdf", "Record Syntax"],
[  "51", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Practicals/Sudoku/SudokuInstrs.pdf", "Instructions"],
[  "52", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Practicals/Sudoku/SudokuInstrsDyslexic.pdf", "Instructions (Dyslexic Friendly)"],
[  "53", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Practicals/Sudoku/Sudoku.hs", "Sudoku.hs"],
[  "54", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Practicals/Sudoku/hard.txt", "hard.txt"],
[  "55", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/lists.hs",             "lists.hs"],
[  "56", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/sheet05.pdf", "Sheet Five"],
[  "57", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/sheet05Dyslexic.pdf", "Sheet Five (Dyslexic Friendly)"],
[  "58", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/code05.hs", "Code Five"],
[  "59", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/answer05.pdf", "Sheet Five - Answers"],
[  "60", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/answer05Dyslexic.pdf", "Sheet Five - Answers (Dyslexic Friendly)"],
[  "61", ".", ""], // it got upset i missed numbers
[  "62", ".", ""], // it got upset i missed numbers
[  "63", ".", ""], // it got upset i missed numbers
[  "64", ".", ""], // it got upset i missed numbers
[  "65", ".", ""], // it got upset i missed numbers
[  "66", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Notes/FunctionRecipe.pdf", "Recipe for Writing Functions"],
[  "67", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Notes/copro.pdf", "How to Design \"Co\"-Programs"],
[  "68", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Notes/PreludeFunctionsCheatsheet.pdf", "Functions Cheatsheet"],
[  "69", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Notes/TypeClasses.pdf", "Type Classes"],
[  "70", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Notes/Monoids.pdf", "Monoids"],
[  "71", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/sheetBonus2.pdf", "Bonus Sheet Two"],
[  "72", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/sheetBonus2Dyslexic.pdf", "Bonus Sheet Two (Dyslexic Friendly)"],
[  "73", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/codeBonus2.hs", "Bonus Code Two"],
[  "74", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/answerBonus2.pdf", "Bonus Sheet Two - Answers"],
[  "75", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/answerBonus2Dyslexic.pdf", "Bonus Sheet Two - Answers (Dyslexic Friendly)"],
[  "76", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/sheet06.pdf", "Sheet Six"],
[  "77", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/sheet06Dyslexic.pdf", "Sheet Six (Dyslexic Friendly)"],
[  "78", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/code06.hs", "Code Six"],
[  "79", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/answer06.pdf", "Sheet Six - Answers"],
[  "80", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/answer06Dyslexic.pdf", "Sheet Six - Answers (Dyslexic Friendly)"],
[  "81", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Practicals/Blackjack/BlackjackInstrs.pdf", "Instructions"],
[  "82", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Practicals/Blackjack/BlackjackInstrsDyslexic.pdf", "Instructions (Dyslexic Friendly)"],
[  "83", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Practicals/Blackjack/Cards.hs", "Cards.hs"],
[  "84", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Practicals/Blackjack/RunGame.hs", "RunGame.hs"],
[  "85", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/sheet07.pdf", "Sheet Seven"],
[  "86", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/sheet07Dyslexic.pdf", "Sheet Seven (Dyslexic Friendly)"],
[  "87", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/code07.hs", "Code Seven"],
[  "88", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/answer07.pdf", "Sheet Seven - Answers"],
[  "89", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/answer07Dyslexic.pdf", "Sheet Seven - Answers (Dyslexic Friendly)"],
[  "90", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/sheetBonus3.pdf", "Bonus Sheet Three"],
[  "91", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/sheetBonus3Dyslexic.pdf", "Bonus Sheet Three (Dyslexic Friendly)"],
[  "92", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/codeBonus3.hs", "Bonus Code Three"],
[  "93", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/answerBonus3.pdf", "Bonus Sheet Three - Answers"],
[  "94", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/answerBonus3Dyslexic.pdf", "Bonus Sheet Three - Answers (Dyslexic Friendly)"],
[  "95", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Practicals/Simplify/SimplifyInstrs.pdf", "Instructions"],
[  "96", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Practicals/Simplify/SimplifyInstrsDyslexic.pdf", "Instructions (Dyslexic Friendly)"],
[  "97", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Practicals/Simplify/Simplify.hs", "Simplify.hs"],
[  "98", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Practicals/Simplify/Poly.hs", "Poly.hs"],
[  "99", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Practicals/Simplify/Poly.hs", "Poly.hs"],
[  "100", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/sheetBonus4.pdf", "Sheet of Death"],
[  "101", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/sheetBonus4Dyslexic.pdf", "Sheet of Death (Dyslexic Friendly)"],
[  "102", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/codeBonus4.hs", "Bonus Code Three"],
[  "103", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/answerBonus4.pdf", "Sheet of Death - Answers"],
[  "104", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/answerBonus4Dyslexic.pdf", "Sheet of Death - Answers (Dyslexic Friendly)"],
[  "105", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Practicals/Famous/FamousInstrs.pdf", "Instructions"],
[  "106", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Practicals/Famous/FamousInstrsDyslexic.pdf", "Instructions (Dyslexic Friendly)"],
[  "107", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/HO.hs", "HO.hs"],
[  "108", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/BinaryTrees.hs", "BinaryTrees.hs"],
[  "109", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/ExampleIO.hs", "ExampleIO.hs"],
[  "110", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Practicals/Tetris/CodeWorldGUI.hs", "CodeWorldGUI.hs"],
[  "111", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Practicals/Tetris/ConsoleGUI.hs", "ConsoleGUI.hs"],
[  "112", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Practicals/Tetris/GameInterface.hs", "GameInterface.hs"],
[  "113", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Practicals/Tetris/Shapes.hs", "Shapes.hs"],
[  "114", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Practicals/Tetris/Tetris.hs ", "Tetris.hs"],
[  "115", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Practicals/Tetris/TetrisInstrs.pdf", "TetrisInstrs.pdf"],
[  "116", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Functors.hs", "Functors.hs"],
[  "117", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Applicatives.hs", "Applicatives.hs"],
[  "118", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/sheet08.pdf", "Sheet Eight"],
[  "119", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/sheet08Dyslexic.pdf", "Sheet Eight (Dyslexic Friendly)"],
[  "120", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/code08.hs", "Code Eight"],
[  "121", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/answer08.pdf", "Sheet Eight - Example Solutions"],
[  "122", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/answer08Dyslexic.pdf", "Sheet Eight - Example Solutions (Dyslexic Friendly)"],
[  "123", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/EmbeddingPartI.hs", "EmbeddingPartI.hs"],
[  "124", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/EmbeddingPartII.hs", "EmbeddingPartII.hs"],
[  "125", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Monads.hs", "Monads.hs"],
[  "126", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/MonadLawsChecker.hs", "MonadLawsChecker.hs"],
[  "127", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/sheet09.pdf", "Sheet Nine"],
[  "128", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/sheet09Dyslexic.pdf", "Sheet Nine (Dyslexic Friendly)"],
[  "129", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/code09.hs", "Code Nine"],
[  "130", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/answer09.pdf", "Sheet Nine - Example Solutions"],
[  "131", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/functional/Sheets/answer09Dyslexic.pdf", "Sheet Nine - Example Solutions (Dyslexic Friendly)"],



// file list from last year:
// [  "2", "functional/card.hs",             "card.hs"],
// [  "3", "functional/lists.hs",          "lists.hs"],
// [  "4", "functional/HO.hs",         "HO.hs"],
// [  "5", "functional/ExampleIO.hs",       "ExampleIO.hs"],
// [  "6", "minimum.c",           "minimum.c"],
// [  "7", "nexthailstone.c",     "nexthailstone.c"],
// [  "8", "grade.c",             "grade.c"],
// [  "19", "functional/sheets/sheet02.pdf", "Sheet Two"],
// [  "20", "functional/sheets/answer02.pdf", "Sheet Two - Answers"],
// [  "21", "functional/Notes/PatternMatching.pdf", "PatternMatching"],
// [  "22", "functional/sheets/sheet03.pdf", "Sheet Three"],
// [  "23", "functional/sheets/answer03.pdf", "Sheet Three - Answers"],
// [  "24", "functional/Notes/Lists.pdf", "Lists"],
// [  "25", "functional/Notes/Maybe.pdf", "Maybe"],
// [  "26", "functional/sheets/sheet04.pdf", "Sheet Four"],
// [  "27", "functional/sheets/answer04.pdf", "Sheet Four - Answers"],
// [  "28", "functional/sheets/sheet05.pdf", "Sheet Five"],
// [  "29", "functional/sheets/answer05.pdf", "Sheet Five - Answers"],
// [  "30", "functional/sheets/sheet06.pdf", "Sheet Six"],
// [  "31", "functional/sheets/answer06.pdf", "Sheet Six - Answers"],
// [  "32", "functional/sheets/prevWeeksCode.zip", "Previous Week's Code"],
// [  "33", "functional/sheets/code06.hs", "Code 6"],
// [  "34", "functional/sheets/sheet07.pdf", "Sheet Seven"],
// [  "35", "functional/sheets/answer07.pdf", "Sheet Seven - Answers"],
// [  "36", "functional/sheets/code07.hs", "Code 7"],
// [  "37", "functional/Notes/UniversalQuantification.pdf", "UniversalQuantification"],
// [  "38", "functional/Notes/HigherOrderFunctions.pdf", "Higher Order Functions"],
// [  "39", "functional/Notes/Map.pdf", "Map"],
// [  "40", "functional/Notes/Folds.pdf", "Folds"],
// [  "41", "functional/Notes/RecordSyntax.pdf", "Record Syntax"],
// [  "42", "functional/sheets/sheetBonus1.pdf", "Bonus Sheet One"],
// [  "43", "functional/Notes/StructuralInductiveProofs.pdf", "Structural Inductive Proofs"],
// [  "44", "functional/sheets/answerBonus1.pdf", "Bonus Sheet One - Answers"],
// [  "45", "functional/COMINGSOON.txt", "COMING SOON"],
// [  "46", "functional/sheets/Sudoku.zip", "Sudoku"],
// [  "47", "functional/Notes/ListComprehensions.pdf", "List Comprehensions"],
// [  "48", "functional/Notes/TypeClasses.pdf", "Type Classes"],
// [  "49", "functional/sheets/sheetBonus2.pdf", "Bonus Sheet Two"],
// [  "50", "functional/Notes/Monoids.pdf", "Monoids"],
// [  "51", "functional/sheets/answerBonus2.pdf", "Bonus Sheet Two - Answers"],
// [  "52", "functional/Notes/FunctionRecipe.pdf", "Recipe for Writing Functions"],
// [  "53", "functional/Notes/PreludeFunctionsCheatsheet.pdf", "Functions Cheatsheet"],
// [  "54", "functional/sheets/Tetris.zip", "Tetris"],
// [  "55", "functional/sheets/sheetBonus3.pdf", "Bonus Sheet Three"],
// [  "56", "functional/Notes/Kinds.pdf", "Kinds"],
// [  "57", "functional/Notes/DataMap.pdf", "Map"],
// [  "58", "functional/Notes/Trie.pdf", "Trie"],
// [  "59", "functional/sheets/answerBonus3.pdf", "Bonus Sheet Three - Answers"],
// [  "60", "functional/sheets/PrevWeeksCodeBonus.zip", "Previous Week's Code"],
// [  "61", "functional/sheets/codeBonus3.hs", "Bonus Code 3"],
// [  "62", "functional/sheets/sheet08.pdf", "Sheet Eight"],
// [  "63", "functional/sheets/answer08.pdf", "Sheet Eight - Answers"],
// [  "64", "functional/sheets/code08.hs", "Code 8"],
// [  "65", "functional/Notes/Trees.pdf", "Trees"],
// [  "66", "functional/sheets/sheetBonus4.pdf", "Bonus Sheet Four"],
// [  "67", "functional/sheets/answerBonus4.pdf", "Bonus Sheet Four - Answers"],
// [  "68", "functional/sheets/codeBonus4.hs", "Bonus Code 4"],
// [  "69", "functional/BinaryTrees.hs", "BinaryTrees.hs"],
// [  "70", "functional/Austen.hs", "Austen.hs"],
// [  "71", "functional/Eval.hs", "Eval.hs"],
// [  "72", "functional/ReasoningI.lhs", "ReasoningI.hs"],
// [  "73", "functional/ReasoningII.lhs", "ReasoningII.hs"],
// [  "74", "functional/Sample.pdf", "Sample.pdf"],
// [  "75", "functional/Sample.pdf", "Sample / Exam Format Demo"],
];
