// Navigation
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// App 
let questions = [
    {
        title: '1. WHEN YOU SEE THIS SIGN, YOU MUST:',
        alternatives: [
            'A. Stop completely, check for pedestrians, and cross traffic.',
            'B. Slow down without coming to a complete stop.',
            'C. Stop completely and wait for a green light.',
            'D. Slow down and check for traffic.'
        ],
        correctAnswer: 0,
        questionImage: "/images/stop_sign.PNG"
    },
    {
        title: '2. THIS IS THE SHAPE AND COLOR OF A __________ SIGN.',
        alternatives: [
            'A. Stop',
            'B. Wrong Way',
            'C. Yield',
            'D. Do not enter'
        ],
        correctAnswer: 2,
        questionImage: "/images/yield_sign.PNG"
    },
    {
        title: '3. THIS SIGN MEANS:',
        alternatives: [
            'A. Stop',
            'B. No U-Turn',
            'C. Yield',
            'D. Do not enter'
        ],
        correctAnswer: 3,
        questionImage: "/images/do_not_enter_sign.PNG"
    },
    {
        title: '4. THIS SIGN MEANS:',
        alternatives: [
            'A. No U-Turn',
            'B. No Turning',
            'C. No left turn',
            'D. No right turn'
        ],
        correctAnswer: 0,
        questionImage: "/images/no_uTurn_sign.PNG"
    },
    {
        title: '5. THIS SIGN MEANS:',
        alternatives: [
            'A. No U-Turn',
            'B. No left turn',
            'C. No right turn',
            'D. No turning'
        ],
        correctAnswer: 2,
        questionImage: "/images/no_right_turn.PNG"
    },
    {
        title: '6. THIS SIGN MEANS:',
        alternatives: [
            'A. You must turn left or right',
            'B. You are approaching a T-intersection',
            'C. The road that you are on intersects with a divided highway',
            'D. Designates an overpass above a divided highway'
        ],
        correctAnswer: 2,
        questionImage: "/images/divided_highway_sign.PNG"
    },
    {
        title: '7. YOU NEED TO USE EXTRA CAUTION WHEN DRIVING NEAR A PEDESTRIAN USING A WHITE CANE BECAUSE:',
        alternatives: [
            'A. He or she is deaf',
            'B. He or she has a mental disability',
            'C. He or she is blind',
            'D. He or she has a walking problem'
        ],
        correctAnswer: 2,
        questionImage: ""
    },
    {
        title: '8. WHEN DRIVING NEAR A BLIND PEDESTRIAN WHO IS CARRYING A WHITE CANE OR USING A GUIDE DOG, YOU SHOULD:',
        alternatives: [
            'A. Slow down and be prepared to stop',
            'B. Take the right-of-way',
            'C. Proceed normally',
            'D. Drive away quickly'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '9. IF THERE ARE NO SIGNALS AT A RAILROAD CROSSING, YOU SHOULD:',
        alternatives: [
            'A. Slow down and prepare to stop if you see or hear a train approaching',
            'B. Proceed as quickly as possible over the tracks',
            'C. Proceed through the crossing at a normal rate',
            'D. Proceed slowly over the tracks'
        ],
        correctAnswer: 0,
        questionImage: "/images/rail_road_crossing.PNG"
    },
    {
        title: '10. YOU MAY DRIVE AROUND THE GATES AT A RAILROAD CROSSING:',
        alternatives: [
            'A. When the train has passed',
            'B. Never',
            'C. When the lights have stopped flashing',
            'D. When other drivers drive around the gates'
        ],
        correctAnswer: 1,
        questionImage: ""
    },
    {
        title: '11. IF YOU SEE THIS SIGN ABOVE YOUR LANE, YOU:',
        alternatives: [
            'A. May not exit the freeway in this lane',
            'B. May continue through the interchange or exit the freeway in this lane',
            'C. May stay in this lane and continue through the interchange',
            'D. Must exit the freeway if you stay in this lane'
        ],
        correctAnswer: 3,
        questionImage: "/images/highway_exit_sign.PNG"
    },
    {
        title: '12. HIGHWAY AND EXPRESSWAY GUIDE SIGNS ARE:',
        alternatives: [
            'A. Orange with black letters',
            'B. Green with white letters',
            'C. Yellow with black letters',
            'D. Red with white letters'
        ],
        correctAnswer: 1,
        questionImage: ""
    },
    {
        title: '13. THIS SIGN IS USED TO WARN DRIVERS ABOUT:',
        alternatives: [
            'A. Upcoming intersections',
            'B. Road construction',
            'C. Road curves ahead',
            'D. Changes in traffic lanes'
        ],
        correctAnswer: 2,
        questionImage: "/images/road_curve_sign.PNG"
    },
    {
        title: '14. THIS SIGN TELLS YOU THAT:',
        alternatives: [
            'A. No turns are allowed on this road',
            'B. The road narrows ahead',
            'C. There are a series of curves ahead',
            'D. The road may be slippery when wet'
        ],
        correctAnswer: 2,
        questionImage: "/images/road_curve_sign.PNG"
    },
    {
        title: '15. THIS SIGN MEANS:',
        alternatives: [
            'A. Left curve ahead',
            'B. Series of curves',
            'C. S curved ahead',
            'D. Slippery when wet'
        ],
        correctAnswer: 3,
        questionImage: "/images/slippery_road_sign.PNG"
    },
    {
        title: '16. THIS SIGN INDICATES THAT:',
        alternatives: [
            'A. There is a steep hill ahead',
            'B. No trucks are allowed on the hill',
            'C. A logging road is ahead',
            'D. There are trucks on the hill'
        ],
        correctAnswer: 0,
        questionImage: "/images/steep_road_sign.PNG"
    },
    {
        title: '17. A YELLOW AND BLACK DIAMOND-SHAPED SIGN:',
        alternatives: [
            'A. Warns you about conditions on or near the road',
            'B. Helps direct you to cities and towns ahead',
            'C. Tells you about traffic laws and regulations',
            'D. Tells you about road construction ahead'
        ],
        correctAnswer: 0,
        questionImage: "/images/road_condition_sign.PNG"
    },
    {
        title: '18. THE SIGN WITH THIS SHAPE AND COLOR IS A _____________ SIGN.',
        alternatives: [
            'A. No passing zone',
            'B. Wrong way',
            'C. Railroad crossing',
            'D. Stop'
        ],
        correctAnswer: 0,
        questionImage: "/images/no_passing_zone.PNG"
    },
    {
        title: '19. WHICH OF THESE SIGNS IS USED TO SHOW THE END OF A DIVIDED HIGHWAY?',
        alternatives: [
            'A. 2',
            'B. 4',
            'C. 3',
            'D. 1'
        ],
        correctAnswer: 0,
        questionImage: "/images/multiple_signs_1.PNG"
    },
    {
        title: '20. THIS SIGN IS USED TO WARN DRIVERS ABOUT:',
        alternatives: [
            'A. Lane ends, merge left',
            'B. Road curves ahead',
            'C. Upcoming intersections',
            'D. Road construction'
        ],
        correctAnswer: 0,
        questionImage: "/images/lane_ends_sign.PNG"
    },
    {
        title: '21. THIS SIGN SHOWS ONE TYPE OF:',
        alternatives: [
            'A. Intersection',
            'B. Road curve',
            'C. Right turn',
            'D. Lane change'
        ],
        correctAnswer: 0,
        questionImage: "/images/intersection_sign.PNG"
    },
    {
        title: '22. THIS SIGN SHOWS ONE TYPE OF:',
        alternatives: [
            'A. Right turn',
            'B. Intersection',
            'C. Lane change',
            'D. Road curve'
        ],
        correctAnswer: 1,
        questionImage: "/images/intersection_sign_2.PNG"
    },
    {
        title: '23. WHAT SHOULD YOU BE MOST CONCERNED ABOUT WHEN YOU SEE THIS SIGN?',
        alternatives: [
            'A. Driving with your headlights out of alignment because one side of your car is higher than the other',
            'B. Damaging a tire, if you drift onto the shoulder',
            'C. Hydroplaning, if the shoulder has water on it',
            'D. Losing control of your vehicle, if you drift onto the shoulder, because of a drop off'
        ],
        correctAnswer: 3,
        questionImage: "/images/lost_control_sign.PNG"
    },
    {
        title: '24. WHAT IS THE MEANING OF THIS SIGN?',
        alternatives: [
            'A. The traffic signal ahead is red',
            'B. The traffic signal ahead is broken',
            'C. The traffic signal ahead is green',
            'D. There is a traffic signal ahead'
        ],
        correctAnswer: 3,
        questionImage: "/images/traffic_signal_sign.PNG"
    },
    {
        title: '25. THIS SIGN MEANS:',
        alternatives: [
            'A. Divided highway ends',
            'B. One-way street begins',
            'C. One-way street ends',
            'D. Divided highway begins'
        ],
        correctAnswer: 3,
        questionImage: "/images/divided_highway_begins.PNG"
    },
    {
        title: '26. FROM TOP TO BOTTOM, THE FOLLOWING IS THE PROPER ORDER FOR TRAFFIC LIGHTS:',
        alternatives: [
            'A. Red, yellow, green',
            'B. Red, green, yellow',
            'C. Green, red, yellow',
            'D. Green, yellow, red'
        ],
        correctAnswer: 0,
        questionImage: "/images/traffic_signal_sign_2.PNG"
    },
    {
        title: '27. IF A GREEN ARROW TURNS INTO A GREEN LIGHT, YOU:',
        alternatives: [
            'A. May still turn but you must yield to oncoming traffic',
            'B. May no longer turn and must proceed straight',
            'C. Still have the right of way to turn',
            'D. No longer have to turn the way the arrow indicates'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '28. A STEADY YELLOW LIGHT AT AN INTERSECTION MEANS:',
        alternatives: [
            'A. Go',
            'B. Yield to other cars',
            'C. Slow down and prepare to stop',
            'D. Stop'
        ],
        correctAnswer: 2,
        questionImage: ""
    },
    {
        title: '29. A FLASHING YELLOW LIGHT MEANS THAT YOU SHOULD:',
        alternatives: [
            'A. Slow down and proceed with care',
            'B. Continue through if the way is clear',
            'C. Stop and proceed when a green light appears',
            'D. Stop and proceed when the way is clear'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '30. YOU MUST STOP WHEN YOU SEE A:',
        alternatives: [
            'A. Flashing red light',
            'B. Steady yellow light',
            'C. Yellow arrow',
            'D. Flashing yellow light'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '31. A STEADY GREEN LIGHT AT AN INTERSECTION MEANS THAT YOU:',
        alternatives: [
            'A. Must slow down and prepare to stop',
            'B. Must stop and check for oncoming traffic before proceeding',
            'C. May drive through the intersection if the road is clear',
            'D. May not turn right'
        ],
        correctAnswer: 2,
        questionImage: ""
    },
    {
        title: '32. A STEADY YELLOW LIGHT MEANS THAT A _______ LIGHT WILL SOON APPEAR.',
        alternatives: [
            'A. Flashing yellow',
            'B. Steady green',
            'C. Steady red',
            'D. Flashing red'
        ],
        correctAnswer: 2,
        questionImage: ""
    },
    {
        title: '33. YOU MAY CONTINUE CAREFULLY THROUGH A YELLOW LIGHT IF:',
        alternatives: [
            'A. There is an emergency vehicle crossing your lane',
            'B. There are no pedestrians crossing',
            'C. You are turning right',
            'D. You are within the intersection'
        ],
        correctAnswer: 3,
        questionImage: ""
    },
    {
        title: '34. YOU MAY TURN LEFT AT A RED LIGHT IF:',
        alternatives: [
            'A. There is no traffic coming in the opposite direction',
            'B. You are turning from a two-way street onto a one-way street',
            'C. You are turning from a one-way street onto another one-way street',
            'D. The car in front of you turns left'
        ],
        correctAnswer: 2,
        questionImage: ""
    },
    {
        title: '35. IF A TRAFFIC LIGHT IS BROKEN OR NOT FUNCTIONING YOU SHOULD:',
        alternatives: [
            'A Stop and wait for it to be repaired',
            'B Stop and wait for a police officer to arrive',
            'C. Continue as if it were a four-way stop sign',
            'D. Continue as you normally would'
        ],
        correctAnswer: 2,
        questionImage: ""
    },
    {
        title: '36. YOU MAY TURN RIGHT ON RED IF YOU:',
        alternatives: [
            'A. Stop first and check for traffic and pedestrians',
            'B. Have a right turn red arrow',
            'C. Are in the left lane',
            'D. Slow down first'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '37. WHEN MAKING A RIGHT TURN ON A GREEN LIGHT, YOU MUST:',
        alternatives: [
            'A. Maintain normal driving speed',
            'B. Stop and look for oncoming traffic',
            'C. Yield to pedestrians',
            'D. Increase your normal driving speed'
        ],
        correctAnswer: 2,
        questionImage: ""
    },
    {
        title: '38. THE SPEED LIMIT IS _______ MILES PER HOUR WHEN THE YELLOW LIGHTS ARE FLASHING ON THE SCHOOL ZONE SPEED SIGN.',
        alternatives: [
            'A. 25',
            'B. 15',
            'C. 20',
            'D. 35'
        ],
        correctAnswer: 1,
        questionImage: ""
    },
    {
        title: '39. A FLASHING RED LIGHT AT A RAILROAD CROSSING MEANS:',
        alternatives: [
            'A. Stop, do not proceed until signals are completed',
            'B. Slow down and proceed if clear',
            'C. Proceed with caution',
            'D. You have the right-of-way'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '40. THIS GREEN ARROW ON A LANE USE CONTROL SIGNAL MEANS THAT:',
        alternatives: [
            'A. You may use this lane',
            'B. No traffic is allowed in this lane',
            'C. You have the right-of-way',
            'D. You must merge into this lane'
        ],
        correctAnswer: 0,
        questionImage: "/images/use_lane_sign.PNG"
    },
    {
        title: '41. THIS SIGN MEANS:',
        alternatives: [
            'A. Pedestrians ahead',
            'B. End of construction zone',
            'C. School crossing ahead',
            'D. Flagger ahead'
        ],
        correctAnswer: 3,
        questionImage: "/images/flagger_ahead_sign.PNG"
    },
    {
        title: '42. THIS SIGN MEANS THAT:',
        alternatives: [
            'A. A community service group is picking up trash along the highway ahead',
            'B. Workers are on or very close to the road in the work zone ahead',
            'C. Children are at play ahead',
            'D. There is a pedestrian crosswalk ahead'
        ],
        correctAnswer: 2,
        questionImage: "/images/workers_close_sign.PNG"
    },
    {
        title: '43. WHEN AN ARROW PANEL IN A WORK ZONE SHOWS EITHER OF THE FOLLOWING PATTERNS, IT MEANS:',
        alternatives: [
            'A. The bulbs on the sign are burned out',
            'B. Drive with caution',
            'C. Changes lanes immediately',
            'D. Tune your radio to a station that gives traffic updates'
        ],
        correctAnswer: 1,
        questionImage: "/images/drive_caution_sign.PNG"
    },
    {
        title: '44. THE CENTER LANE IN THE ILLUSTRATION IS USED FOR:',
        alternatives: [
            'A. Regular travel',
            'B. Left turns only',
            'C. Passing only',
            'D. Emergency vehicles only'
        ],
        correctAnswer: 1,
        questionImage: "/images/left_turn_only_sign.PNG"
    },
    {
        title: '45. YOU MAY PASS IF THE LINE DIVIDING TWO LANES IS A ___________ LINE.',
        alternatives: [
            'A. Broken white',
            'B. Double solid yellow',
            'C. Solid yellow',
            'D. Solid white'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '46. LANES OF TRAFFIC MOVING IN THE SAME DIRECTION ARE DIVIDED BY ____ LINES.',
        alternatives: [
            'A. Yellow',
            'B. White',
            'C. Red',
            'D. Black'
        ],
        correctAnswer: 1,
        questionImage: ""
    },
    {
        title: '47. YOU MAY NOT PASS ANOTHER CAR ON EITHER SIDE OF A _______ CENTERLINE.',
        alternatives: [
            'A. Combination solid and broken yellow',
            'B. Single broken yellow',
            'C. Double solid yellow',
            'D. Single broken white'
        ],
        correctAnswer: 2,
        questionImage: ""
    },
    {
        title: '48. YOU MAY CROSS SOLID YELLOW LINES:',
        alternatives: [
            'A. To pass traffic moving in the same direction',
            'B. During daylight hours only',
            'C. At any time',
            'D. When making turns'
        ],
        correctAnswer: 3,
        questionImage: ""
    },
    {
        title: '49. THE ROAD EDGE ON THE RIGHT SIDE IS MARKED BY A ___________ LINE.',
        alternatives: [
            'A. Broken white',
            'B. Solid yellow',
            'C. Solid white',
            'D. Broken yellow audio'
        ],
        correctAnswer: 2,
        questionImage: ""
    },
    {
        title: '50. LANES OF TRAFFIC MOVING IN THE OPPOSITE DIRECTION ARE DIVIDED BY ____ LINES.',
        alternatives: [
            'A. White',
            'B. Red',
            'C. Black',
            'D. Yellow'
        ],
        correctAnswer: 3,
        questionImage: ""
    },
    {
        title: '51. WHEN YOU SEE THIS BLACK AND YELLOW SIGN, IT MEANS:',
        alternatives: [
            'A. The road to the right is for one-way traffic only',
            'B. Detour to the right because of road construction',
            'C. Slow down because the road ahead changes direction at an extreme angle',
            'D. There is a cross road ahead on your right'
        ],
        correctAnswer: 2,
        questionImage: "/images/slow_down_road_change_sign.PNG"
    },
    {
        title: '52. WHEN YOU SEE THIS SIGN, IT MEANS:',
        alternatives: [
            'A. There is an object on the roadway',
            'B. Traffic is coming from the right',
            'C. The road is curving sharply to the left',
            'D. There is a merge point ahead'
        ],
        correctAnswer: 2,
        questionImage: "/images/sharp_curve_left.PNG"
    },
    {
        title: '53. AT AN INTERSECTION CONTROLLED BY A STOP SIGN, IF YOU CAN’T GET A GOOD VIEW OF CROSS-STREET TRAFFIC WHEN YOU STOP BEHIND THE WHITE TOP BAR PAINTED ON THE PAVEMENT, YOU SHOULD:',
        alternatives: [
            'A. Wait 5 seconds, then proceed.',
            'B. Sound your horn before proceeding',
            'C. Put down your windows, listen for traffic, and then proceed',
            'D. Pull forward slowly, check for traffic and pedestrians, and proceed when clear'
        ],
        correctAnswer: 3,
        questionImage: ""
    },
    {
        title: '54. THE POSTED SPEED LIMITS SHOW:',
        alternatives: [
            'A. The minimum legal speed limit',
            'B. The exact speed at which you must travel to avoid a ticket',
            'C. The maximum safe speed under ideal road and weather conditions',
            'D. The maximum safe speed under all road conditions'
        ],
        correctAnswer: 2,
        questionImage: "/images/max_safe_speed.PNG"
    },
    {
        title: '55. A HIGHWAY WITH TWO-WAY TRAFFIC IS MARKED BY WHICH OF THESE SIGNS?',
        alternatives: [
            'A. 1',
            'B. 2',
            'C. 3',
            'D. 4'
        ],
        correctAnswer: 2,
        questionImage: "/images/multiple_signs_1.PNG"
    },
    {
        title: '56. FROM THE CENTER LANE, WHAT MANEUVERS CAN YOU PERFORM?',
        alternatives: [
            'A. Make left turns',
            'B. Make U-turns',
            'C. Pass slower-moving traffic',
            'D. All of the above'
        ],
        correctAnswer: 0,
        questionImage: "/images/left_turns_only_2.PNG"
    },
    {
        title: '57. WHICH OF THESE SIGNS MEANS THAT DRIVERS SHOULD KEEP TO THE RIGHT?',
        alternatives: [
            'A. 2',
            'B. 1',
            'C. 3',
            'D. 4'
        ],
        correctAnswer: 0,
        questionImage: "/images/keep_right_sign.PNG"
    },
];

let app = {
    start: function () {

        // keep track of the current position in the questions array
        this.currentPosition = 0;
        this.score = 0;
        

        // get alternatives
        let alts = document.querySelectorAll('.alternative');

        alts.forEach((element, index) => {
            element.addEventListener('click', () => {
                // check correct answer
                this.checkAnswer(index);
            });
        });

        // refresh stats/score
        this.updateStats();
        
        // show first question
        this.showQuestion(questions[this.currentPosition]);

        // this.restartApp();
    },

    showQuestion: function (q) {

        // show question title
        let titleDiv = document.getElementById('title');
        titleDiv.textContent = q.title;

        // show question image
        let imgDiv = document.getElementById('image-content');
        imgDiv.innerHTML = `<img class="img" src="${q.questionImage}">`;

        // show alternatives
        let alts = document.querySelectorAll('.alternative');
        
        alts.forEach(function (element, index) {
            element.textContent = q.alternatives[index];
        });
    },

    checkAnswer: function (userSelected) {

        let currentQuestion = questions[this.currentPosition];

        if (currentQuestion.correctAnswer == userSelected) {
            // correct
            this.score++;
            this.showResult(true);
        }
        else {
            // not correct
            this.showResult(false);
        }

        // refresh stats/score
        this.updateStats();

        // increase position
        this.increasePosition();

        // show next question
        this.showQuestion(questions[this.currentPosition]);

        
    },

    increasePosition: function () {
        // increase current position
        this.currentPosition++;

        // if reached the end of database
        if (this.currentPosition == questions.length) {
            // Send back to beginning
            this.showScore();
            this.restartApp();
            this.currentPosition = 0;
            
        }
    },

    updateStats: function () {
        let scoreDiv = document.getElementById('score');
        scoreDiv.textContent = `Your Score: ${this.score}/${questions.length}`;
    },

    showResult: function (isCorrect) {
        let resultDiv = document.getElementById('result');
        let result = '';

        // checks
        if (isCorrect) {
            result = 'Correct Answer!';
        }
        else {
            // get the current question
            let currentQuestion = questions[this.currentPosition];

            // get the correct answer (index)
            let correctAnswerIndex = currentQuestion.correctAnswer;

            // get the correct answer (text)
            let correctAnswerText = currentQuestion.alternatives[correctAnswerIndex];

            result = `Incorrect! Correct answer: ${correctAnswerText}`;
        }

        resultDiv.textContent = result;
    },

    showScore: function () {
        let newScore = this.score / questions.length * 100;

       
        let gradeFinal = document.getElementById('test-grade');
        gradeFinal.textContent = `Final Grade: ${parseFloat(newScore).toFixed(1)}% (${this.score}/${questions.length})`;
    },

    restartApp: function () {
        
        if (this.currentPosition == questions.length) {
            let gradeContainer = document.getElementById('grade-container');
            let gradeBorder = document.getElementById('grade-border');

            gradeContainer.style.backgroundColor = '#007DC1';
            gradeContainer.style.position = 'absolute';
            gradeContainer.style.top = '0';
            gradeContainer.style.left = '0';
            gradeContainer.style.bottom = '0';
            gradeContainer.style.right = '0';

            gradeBorder.style.border = '10px solid rgb(79, 236, 6)';
            gradeBorder.style.borderRadius = '50%';
            gradeBorder.style.height = '280px';
            gradeBorder.style.width = '300px';
            gradeBorder.style.margin = '0 auto';
            gradeBorder.style.display = 'flex';
            gradeBorder.style.flexDirection = 'column';
            gradeBorder.style.justifyContent = 'center';
            gradeBorder.style.alignItems = 'center';
            gradeBorder.style.marginTop = '10em';
            gradeBorder.style.keyframes = 'bounce 2s infinite';
            

            let restartBtn = document.createElement('button');
            restartBtn.textContent = 'Restart';

            let reButton = document.getElementById('btn');
            reButton.appendChild(restartBtn);

            restartBtn.addEventListener('click', () => {
                location.reload();
            });

            let homeButton = document.getElementById('btn2');
            homeButton.innerHTML = `<button><a href="/home.html">Home</a></button>`;
        }
    }
};

// initialize app
app.start();
