// Navigation
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};

// App 
let questions = [
    {
        title: '1. TEENAGE DRIVERS ARE MORE LIKELY TO BE INVOLVED IN A CRASH WHEN:',
        alternatives: [
            'A. They are driving with their pet as a passenger ',
            'B. They are driving with adult passengers',
            'C. They are driving with teenage passengers',
            'D. They are driving without any passengers'
        ],
        correctAnswer: 2,
        questionImage: ""
    },
    {
        title: '2. DRIVERS WHO EAT AND DRINK WHILE DRIVING:',
        alternatives: [
            'A. Have no driving errors ',
            'B. Have trouble driving slow',
            'C. Are better drivers because they are not hungry',
            'D. Have trouble controlling their vehicles'
        ],
        correctAnswer: 3,
        questionImage: ""
    },
    {
        title: '3. PREPARING TO SMOKE AND SMOKING WHILE DRIVING:',
        alternatives: [
            'A. Do not affect driving abilities',
            'B. Help maintain driver alertness',
            'C. Are distracting activities',
            'D. Are not distracting activities'
        ],
        correctAnswer: 2,
        questionImage: ""
    },
    {
        title: '4. THE TOP MAJOR CRASH TYPE FOR 16 YEAR OLD DRIVERS IN PENNSYLVANIA IS: ',
        alternatives: [
            'A. Single vehicle/run-off-the-road ',
            'B. Being sideswiped on an interstate ',
            'C. Driving in reverse on a side street ',
            'D. Driving on the shoulder of a highway'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '5. WHEN PASSING A BICYCLIST, YOU SHOULD: ',
        alternatives: [
            'A. Blast your horn to alert the bicyclist',
            'B. Move as far left as possible ',
            'C. Remain in the center of the lane',
            'D. Put on your four-way flashers '
        ],
        correctAnswer: 1,
        questionImage: ""
    },
    {
        title: '6. WHEN YOU DRIVE THROUGH AN AREA WHERE CHILDREN ARE PLAYING, YOU SHOULD EXPECT THEM:',
        alternatives: [
            'A. To know when it is safe to cross',
            'B. To stop at the curb before crossing the street',
            'C. To run out in front of you without looking',
            'D. Not to cross unless they are with an adult'
        ],
        correctAnswer: 2,
        questionImage: ""
    },
    {
        title: '7. IF YOU ARE DRIVING BEHIND A MOTORCYCLE, YOU MUST:',
        alternatives: [
            'A. Allow the motorcycle to use a complete lane',
            'B. Drive on the shoulder beside the motorcycle',
            'C. Allow the motorcycle to use only half a lane',
            'D. Pass in the same lane where the motorcycle is driving'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '8. WHEN TRAVELING BEHIND A MOTORCYCLE:',
        alternatives: [
            'A. Allow a following distance of at least 2 car lengths',
            'B. Allow at least 2 seconds of following distance',
            'C. Allow at least 4 seconds of following distance',
            'D. Allow a following distance of at least 4 motorcycle lengths'
        ],
        correctAnswer: 2,
        questionImage: ""
    },
    {
        title: '9. YOU NEED TO USE EXTRA CAUTION WHEN DRIVING NEAR A PEDESTRIAN USING A WHITE CANE BECAUSE: ',
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
        title: '10. WHEN DRIVING NEAR A BLIND PEDESTRIAN WHO IS CARRYING A WHITE CANE OR USING A GUIDE DOG, YOU SHOULD:',
        alternatives: [
            'A. Slow down and be prepared to stop',
            'B. Take the right-of-way ',
            'C. Proceed normally ',
            'D. Drive away quickly'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '11. WHO MUST YIELD WHEN A DRIVER IS TURNING AND A PEDESTRIAN IS CROSSING WITHOUT A TRAFFIC LIGHT?',
        alternatives: [
            'A. Whoever started last',
            'B. The driver',
            'C. Whoever is slower',
            'D. The pedestrian'
        ],
        correctAnswer: 1,
        questionImage: ""
    },
    {
        title: '12. AN ORANGE TRIANGLE ON THE BACK OF A VEHICLE INDICATES THAT VEHICLE:',
        alternatives: [
            'A. Carries radioactive materials',
            'B. Takes wide turns',
            'C. Travels at slower speeds than normal traffic',
            'D. Makes frequent stops'
        ],
        correctAnswer: 2,
        questionImage: ""
    },
    {
        title: '13. AT NIGHT, IT IS HARDEST TO SEE:',
        alternatives: [
            'A. Road signs',
            'B. Pedestrians',
            'C. Other motorists',
            'D. Street lights'
        ],
        correctAnswer: 1,
        questionImage: ""
    },
    {
        title: '14. WHEN A TRUCK DRIVER BEHIND YOU WANTS TO PASS YOUR VEHICLE, YOUR SPEED SHOULD:',
        alternatives: [
            'A. Remain steady or decrease ',
            'B. Change lanes ',
            'C. Change',
            'D. Increase'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '15. WHEN SHARING THE ROAD WITH A TRUCK, IT IS IMPORTANT TO REMEMBER THAT, IN GENERAL, TRUCKS: ',
        alternatives: [
            'A. Take longer distances than cars to stop',
            'B. Require less time to pass on a downgrade than cars',
            'C. Require less turning radius than cars',
            'D. Require less time to pass on an incline than cars'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '16. IF YOU STOP AT A RAILROAD CROSSING WITH MORE THAN ONE TRACK:',
        alternatives: [
            'A. Wait until you have a clear view of both tracks',
            'B. Stop on the railroad track and watch for another train',
            'C. Go through as soon as the train passes',
            'D. Go through when one of the tracks is free'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '17. IF YOU ARE FOLLOWING A TRUCK THAT SWINGS LEFT BEFORE MAKING A RIGHT TURN AT AN INTERSECTION, YOU SHOULD REMEMBER THAT IT IS VERY DANGEROUS TO: ',
        alternatives: [
            'A. Try to squeeze between the truck and curb to make a right turn',
            'B. Apply your brakes until the truck has completed the turn',
            'C. Violate the “4 – second” following distance rule',
            'D. Honk your horn at the truck driver'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '18. THE ONLY TIME YOU DO NOT HAVE TO STOP FOR A SCHOOL BUS WHOSE RED LIGHTS ARE FLASHING AND STOP ARM IS EXTENDED IS WHEN YOU:',
        alternatives: [
            'A. Are driving on the opposite side of a divided highway',
            'B. Are behind the bus',
            'C. See no children present',
            'D. Can safely pass on the left'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '19. WHEN A SCHOOL BUS HAS ITS LIGHTS FLASHING AND ITS STOP ARM EXTENDED, YOU MUST:',
        alternatives: [
            'A. Stop at least 10 feet away from the bus ',
            'B. Pass if children have exited the bus',
            'C. Stop if the bus is on the opposite side of a barrier',
            'D. Drive slowly by the bus'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '20. AFTER A TRAIN HAS PASSED, YOU SHOULD: ',
        alternatives: [
            'A. Check again for approaching trains and proceed with caution',
            'B. Wait for a green light',
            'C. Proceed across the tracks ',
            'D. Blow horn and proceed'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '21. IF YOU NEED TO SLOW DOWN OR STOP WHEN OTHER DRIVERS MAY NOT EXPECT IT, YOU SHOULD:',
        alternatives: [
            'A. Quickly tap your brake pedal a few times',
            'B. Use your emergency brake ',
            'C. Look over your shoulder for traffic in your blind spot',
            'D. Get ready to blow your horn'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '22. WHEN YOU ARE PLANNING TO MAKE A TURN, YOU SHOULD ACTIVATE YOUR TURN SIGNALS:',
        alternatives: [
            'A. Only if there are other drivers following you ',
            'B. Just as the front of your car reaches the intersection',
            'C. 3 to 4 seconds before you reach the intersection',
            'D. 2 car lengths before reaching the intersection'
        ],
        correctAnswer: 2,
        questionImage: ""
    },
    {
        title: '23. BEFORE PASSING ANOTHER VEHICLE YOU SHOULD:',
        alternatives: [
            'A. Flash your headlights to alert the driver',
            'B. Turn on your four-way flashers to warn the driver',
            'C. Give the proper turn signal to show you are changing lanes',
            'D. Sound your horn to get the drivers attention'
        ],
        correctAnswer: 2,
        questionImage: ""
    },
    {
        title: '24. YOUR BLIND SPOT IS THE AREA OF THE ROAD:',
        alternatives: [
            'A. You cannot see without moving your head',
            'B. Directly behind your vehicle',
            'C. You see in your rearview mirror',
            'D. You see in your side mirror'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '25. BEFORE PASSING ANOTHER VEHICLE, YOU SHOULD SIGNAL: ',
        alternatives: [
            'A. Just before changing lanes',
            'B. At any time',
            'C. After changing lanes',
            'D. Early enough so others know your plans'
        ],
        correctAnswer: 3,
        questionImage: ""
    },
    {
        title: '26. BEFORE CHANGING LANES ON A MULTI-LANE HIGHWAY YOU SHOULD:',
        alternatives: [
            'A. Sound your horn',
            'B. Turn on your headlights',
            'C. Reduce your speed ',
            'D. Check your mirrors and blind spots'
        ],
        correctAnswer: 3,
        questionImage: ""
    },
    {
        title: '27. WHEN YOU PARK ON THE ROADWAY, YOU SHOULD:',
        alternatives: [
            'A. Use your four-way flashers ',
            'B. Park at an angle',
            'C. Keep your turn signal on ',
            'D. Turn your lights on'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '28. BEFORE BACKING UP, YOU SHOULD:',
        alternatives: [
            'A. Rely on your mirrors to see if it is clear to proceed',
            'B. Flash your lights',
            'C. Open your door to see if it is clear to proceed',
            'D. Turn your head and look through the rear window'
        ],
        correctAnswer: 3,
        questionImage: ""
    },
    {
        title: '29. TO HELP AVOID CRASHES, YOU SHOULD:',
        alternatives: [
            'A. Communicate with other drivers on the road',
            'B. Ignore other drivers on the road',
            'C. Drive on side streets and back roads',
            'D. Avoid driving during rush hour'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '30. THE DRIVER IS:',
        alternatives: [
            'A. Slowing or stopping ',
            'B. Turning left',
            'C. Turning right',
            'D. Opening his/her door'
        ],
        correctAnswer: 0,
        questionImage: "/images/driver_action_1.PNG"
    },
    {
        title: '31. IF YOUR TURN SIGNALS FAIL, YOU SHOULD USE _____ TO INDICATE YOU ARE TURNING',
        alternatives: [
            'A. Your horn',
            'B. Your headlights',
            'C. Hand signals',
            'D. Your emergency flashers'
        ],
        correctAnswer: 2,
        questionImage: ""
    },
    {
        title: '32. WHEN TRAVELING BELOW 40 MILES PER HOUR ON A LIMITED ACCESS HIGHWAY, YOU SHOULD:',
        alternatives: [
            'A. Drive on the shoulder',
            'B. Use your high beams',
            'C. Sound your horn to warn others',
            'D. Use your four-way flashers'
        ],
        correctAnswer: 3,
        questionImage: ""
    },
    {
        title: '33. YOU SHOULD HONK YOUR HORN WHEN YOU:',
        alternatives: [
            'A. Are travelling through an intersection',
            'B. Are passing a bicyclist ',
            'C. See a child who is about to run into the street',
            'D. Are parallel parking '
        ],
        correctAnswer: 2,
        questionImage: ""
    },
    {
        title: '34. YOU MUST USE YOUR HEADLIGHTS WHEN OTHER VEHICLES ARE NOT VISIBLE FROM _____ FEET AWAY',
        alternatives: [
            'A. 1000',
            'B. 1500',
            'C. 1800',
            'D. 1200'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '35. IF A VEHICLE USING HIGH BEAMS COMES TOWARD YOU, YOU SHOULD:',
        alternatives: [
            'A. Turn on your high beams',
            'B. Turn off your headlights',
            'C. Sound your horn',
            'D. Flash your high beams'
        ],
        correctAnswer: 3,
        questionImage: ""
    },
    {
        title: '36. IF A VEHICLE USING HIGH BEAMS COMES TOWARD YOU, YOU SHOULD LOOK TOWARDS _____ OF THE ROAD.',
        alternatives: [
            'A. Either side',
            'B. The center',
            'C. The right side ',
            'D. The left side'
        ],
        correctAnswer: 2,
        questionImage: ""
    },
    {
        title: '37. YOU MAY HONK YOUR HORN WHEN YOU:',
        alternatives: [
            'A. Have to stop quickly',
            'B. Are passing another car',
            'C. Have lost control of your car',
            'D. Are passing a bicyclist'
        ],
        correctAnswer: 2,
        questionImage: ""
    },
    {
        title: '38. YOUR BRAKE LIGHTS TELL OTHER DRIVERS THAT YOU: ',
        alternatives: [
            'A. Are making a turn',
            'B. Have your emergency brake on',
            'C. Are changing lanes',
            'D. Are slowing down or stopping'
        ],
        correctAnswer: 3,
        questionImage: ""
    },
    {
        title: '39. BEFORE TURNING, YOU SHOULD:',
        alternatives: [
            'A. Use your signal ',
            'B. Turn the wheel',
            'C. Increase your speed',
            'D. Change lanes'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '40. THE DRIVER IS: ',
        alternatives: [
            'A. Turning left',
            'B. Slowing',
            'C. Stopping',
            'D. Turning right'
        ],
        correctAnswer: 3,
        questionImage: "/images/driver_action_2.PNG"
    },
    {
        title: '41. THE DRIVER IS: ',
        alternatives: [
            'A. Turning left',
            'B. Stopping',
            'C. Slowing',
            'D. Turning right'
        ],
        correctAnswer: 0,
        questionImage: "/images/driver_action_3.PNG"
    },
    {
        title: '42. IF ANOTHER CAR IS IN DANGER OF HITTING YOU, YOU SHOULD:',
        alternatives: [
            'A. Sound your horn',
            'B. Wave your arms',
            'C. Use your emergency lights',
            'D. Flash your headlights'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '43. IF YOU BEGIN TO FEEL TIRED WHILE DRIVING, THE BEST THING TO DO IS:',
        alternatives: [
            'A. Get some coffee',
            'B. Open your window',
            'C. Stop driving ',
            'D. Turn on the radio'
        ],
        correctAnswer: 2,
        questionImage: ""
    },
    {
        title: '44. THE EFFECT THAT LACK OF SLEEP HAS ON YOUR SAFE DRIVING ABILITY IS THE SAME AS: ',
        alternatives: [
            'A. The effect that alcohol has',
            'B. The effect that amphetamines have',
            'C. The effect that anger has',
            'D. The effect that driving with teenagers has'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '45. TEENAGERS SHOULD TRY TO GET AT LEAST ___ OF SLEEP EACH NIGHT TO AVOID THE RISK OF DROWSY DRIVING CRASHES. ',
        alternatives: [
            'A. 7 hours',
            'B. 6 hours ',
            'C. 8 hours ',
            'D. 9 hours'
        ],
        correctAnswer: 2,
        questionImage: ""
    },
    {
        title: '46. IF ANOTHER DRIVER CUTS YOU OFF IN TRAFFIC, YOU SHOULD:',
        alternatives: [
            'A. Pull next to the driver and yell at him or her ',
            'B. Ignore the other driver ',
            'C. Flash your high beams at the driver ',
            'D. Get back at the other driver by cutting him or her off '
        ],
        correctAnswer: 1,
        questionImage: ""
    },
    {
        title: '47. IF SOMEONE IS DRIVING AGGRESSIVELY BEHIND YOU, YOU SHOULD: ',
        alternatives: [
            'A. Try to get out of the aggressive driver’s way ',
            'B. Stare at the driver as he or she is passing you ',
            'C. Speed up as he or she is passing you ',
            'D. Block the passing lane'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '48. FOR AN AVERAGE PERSON, HOW MANY MINUTES DOES THE BODY NEED TO PROCESS THE ALCOHOL IN ONE DRINK? ',
        alternatives: [
            'A. 15',
            'B. 60',
            'C. 90',
            'D. 30'
        ],
        correctAnswer: 1,
        questionImage: ""
    },
    {
        title: '49. __________ LIMIT(S) YOUR CONCENTRATION, PERCEPTION, JUDGMENT, AND MEMORY. ',
        alternatives: [
            'A. Only a blood alcohol level greater than the legal limit',
            'B. Alcohol does not',
            'C. Even the smallest amount of alcohol',
            'D. Only a blood alcohol level greater than .05'
        ],
        correctAnswer: 2,
        questionImage: ""
    },
    {
        title: '50. TAKING DRUGS ALONG WITH ALCOHOL:',
        alternatives: [
            'A. Increases the risk of causing a crash',
            'B. Is no more dangerous than alcohol by itself',
            'C. Lessens the effect of alcohol on your ability to drive',
            'D. Has no effect on your general driving ability'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '51. AS ALCOHOL BUILDS UP IN YOUR BLOOD, IT: ',
        alternatives: [
            'A. Slows down your reactions ',
            'B. Makes you feel less confident ',
            'C. Begins to metabolize itself more quickly',
            'D. Decreases your driving errors'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '52. IF YOUR BLOOD ALCOHOL LEVEL IS .04, YOU:',
        alternatives: [
            'A. Are 2 – 7 times more likely to have a crash than a person who has not consumed any',
            'B. Are above the legal blood alcohol limit but fine to drive',
            'C. Can be very sure that you will drive safely',
            'D. Should drink plenty of coffee before getting behind the wheel of your car'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '53. WHEN YOU HEAR A FIRE ENGINE SIREN, YOU MUST:',
        alternatives: [
            'A. Slow down until it passes you',
            'B. Drive with your flashers on ',
            'C. Pull over to the side of the road and stop ',
            'D. Speed up and take the nearest exit'
        ],
        correctAnswer: 2,
        questionImage: ""
    },
    {
        title: '54. IF YOU HAVE A TIRE BLOWOUT, YOU SHOULD: ',
        alternatives: [
            'A. Allow the steering wheel to move freely ',
            'B. Let the car slow to a stop',
            'C. Continue driving until you reach a garage',
            'D. Brake hard to stop the car immediately'
        ],
        correctAnswer: 1,
        questionImage: ""
    },
    {
        title: '55. IF YOUR CAR BREAKS DOWN ON A HIGHWAY, YOU SHOULD:',
        alternatives: [
            'A. Sit in your car and wait for help ',
            'B. Use your four-way flashers to warn other drivers',
            'C. Sound your horn at passing motorists',
            'D. Flash your headlights at oncoming traffic'
        ],
        correctAnswer: 1,
        questionImage: ""
    },
    {
        title: '56. WHEN YOU SEE AN EMERGENCY VEHICLE WITH FLASHING LIGHTS, YOU MUST:',
        alternatives: [
            'A. Slow down and keep moving in your lane',
            'B. Keep driving in your lane',
            'C. Pull to the curb and stop',
            'D. Stop exactly where you are'
        ],
        correctAnswer: 2,
        questionImage: ""
    },
    {
        title: '57. WHEN DRIVING ON A ONE WAY STREET AND AN EMERGENCY VEHICLE WITH FLASHING LIGHTS IS BEHIND YOUR CAR, YOU: ',
        alternatives: [
            'A. Drive with your flashers on',
            'B. Drive toward the nearest road side and stop',
            'C. Speed up and take the nearest exit',
            'D. Slow down until the vehicle passes you'
        ],
        correctAnswer: 1,
        questionImage: ""
    },
    {
        title: '58. AFTER AN EMERGENCY VEHICLE PASSES YOU WITH ITS SIREN ON, YOU MUST:',
        alternatives: [
            'A. Drive closely to the police car',
            'B. Drive as fast as the police car',
            'C. Avoid driving closer than 500 feet behind the emergency vehicle',
            'D. Drive near the curb very slowly'
        ],
        correctAnswer: 2,
        questionImage: ""
    },
    {
        title: '59. CRASHES IN WORK ZONES ARE MOST COMMONLY THE RESULT OF:',
        alternatives: [
            'A. Tire blow-outs ',
            'B. Hydroplaning because of water sprayed on the roadway',
            'C. Loss of steering control after driving over wet paint',
            'D. Carelessness and speeding'
        ],
        correctAnswer: 3,
        questionImage: ""
    },
    {
        title: '60. WHEN DRIVING THROUGH A WORK ZONE, IT IS A GOOD SAFETY PRACTICE TO:',
        alternatives: [
            'A. Drive close to the vehicle in front of you to keep traffic flowing freely',
            'B. Shorten your usual following distance — by about half',
            'C. Turn on your cruise control ',
            'D. Lengthen your usual following distance — by double'
        ],
        correctAnswer: 3,
        questionImage: ""
    },
    {
        title: '61. ON TWO-LANE, TWO-WAY STREETS OR HIGHWAYS, YOU SHOULD START LEFT TURNS:',
        alternatives: [
            'A. Close to the center line',
            'B. Close to the outside line',
            'C. In the center of the lane ',
            'D. Anywhere in the lane'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '62. TO TURN LEFT ON MULTI-LANE STREETS AND HIGHWAYS, YOU SHOULD START FROM: ',
        alternatives: [
            'A. The middle of the intersection ',
            'B. The right lane',
            'C. The left lane ',
            'D. Any lane'
        ],
        correctAnswer: 2,
        questionImage: ""
    },
    {
        title: '63. ON A TWO-LANE ROAD, YOU MAY PASS ANOTHER VEHICLE ON THE RIGHT WHEN: ',
        alternatives: [
            'A. Driving on a single lane entrance ramp',
            'B. The driver you are passing is travelling slower than the posted speed limit ',
            'C. Never ',
            'D. The driver you are passing is making a left turn'
        ],
        correctAnswer: 3,
        questionImage: ""
    },
    {
        title: '64. TO PASS A SLOWER-MOVING VEHICLE ON A TWO-LANE ROAD YOU MUST:',
        alternatives: [
            'A. Not cross the center line ',
            'B. Flash your lights to oncoming traffic',
            'C. Use the shoulder',
            'D. Use that lane that belongs to oncoming traffic '
        ],
        correctAnswer: 3,
        questionImage: ""
    },
    {
        title: '65. THESE PAVEMENT MARKINGS TELL YOU THAT AT THE INTERSECTION AHEAD:',
        alternatives: [
            'A. Center lane traffic may go straight or turn left ',
            'B. You can only turn right from the center lane ',
            'C. The center lane mergers into one lane',
            'D. Center lane traffic must turn left'
        ],
        correctAnswer: 0,
        questionImage: "/images/pavement_markings.PNG"
    },
    {
        title: '66. THE MOST IMPORTANT THING TO REMEMBER ABOUT SPEED MANAGEMENT AND CURVES IS TO: ',
        alternatives: [
            'A. Drive at the posted speed limit as you enter the curve, then slow down at the sharpest part of the curve',
            'B. Slow down before you enter the curve',
            'C. Accelerate gently before you enter the curve',
            'D. Drive at the posted speed limit of the roadway, before, throughout, and after the curve'
        ],
        correctAnswer: 1,
        questionImage: ""
    },
    {
        title: '67. DRIVERS ENTERING A ROUNDABOUT OR TRAFFIC CIRCLE:',
        alternatives: [
            'A. Must stop before entering',
            'B. Must yield to drivers in the roundabout or traffic circle',
            'C. Have the right of way if they arrive first ',
            'D. Have the right of way if there are two lanes'
        ],
        correctAnswer: 1,
        questionImage: ""
    },
    {
        title: '68. THE LAW GIVES _______ THE RIGHT OF WAY AT INTERSECTIONS.',
        alternatives: [
            'A. No one',
            'B. Drivers turning left',
            'C. Drivers going straight',
            'D. Drivers turning right'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '69. AT AN INTERSECTION WITH A STOP SIGN, YOU SHOULD STOP AND:',
        alternatives: [
            'A. Check your rearview mirror for cars tailgating ',
            'B. Go when the vehicle ahead of you goes ',
            'C. Look right first, then left, then right again ',
            'D. Look left first, then right, then left again '
        ],
        correctAnswer: 3,
        questionImage: ""
    },
    {
        title: '70. WHEN ENTERING A HIGHWAY FROM AN ENTRANCE RAMP, YOU SHOULD GENERALLY: ',
        alternatives: [
            'A. Enter above the speed of traffic to get ahead ',
            'B. Enter slowly to avoid other vehicles ',
            'C. Stop first, then slowly enter traffic ',
            'D. Accelerate to the speed of traffic'
        ],
        correctAnswer: 3,
        questionImage: ""
    },
    {
        title: '71. WHEN EXITING A HIGHWAY, YOU SHOULD SLOW DOWN:',
        alternatives: [
            'A. On the main road, just before the exit lane ',
            'B. Once you see the toll booth ',
            'C. Once you have moved into the exit lane',
            'D. When you first see the exit sign'
        ],
        correctAnswer: 2,
        questionImage: ""
    },
    {
        title: '72. WHEN DRIVING ON A FREEWAY ENTRANCE RAMP, YOU SHOULD LOOK FOR A GAP IN FREEWAY TRAFFIC BY:',
        alternatives: [
            'A. Looking in the inside rearview mirror only',
            'B. Looking in the sideview mirror only',
            'C. Looking in both rearview and sideview mirrors',
            'D. Looking in your mirrors and turning your head to look over your shoulder'
        ],
        correctAnswer: 3,
        questionImage: ""
    },
    {
        title: '73. IF YOU WANT TO GET OFF OF A FREEWAY, BUT YOU MISSED YOUR EXIT, YOU SHOULD:',
        alternatives: [
            'A. Go to the next exit, and get off of the freeway there ',
            'B. Make a U-turn through the median',
            'C. Pull onto the shoulder and back your car to the exit',
            'D. Flag down a police officer for an escort back to your exit'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '74. YOU ARE WAITING TO TURN LEFT AT A MULTILANE INTERSECTION, AND OPPOSING TRAFFIC IS BLOCKING YOUR VIEW, YOU SHOULD: ',
        alternatives: [
            'A. Accelerate rapidly when the first lane you need to cross is clear',
            'B. Wait until you can see all the lanes you need to cross before going ahead with your turn',
            'C. Wait for the opposing driver to wave you across the intersection ',
            'D. Edge your car into each lane of opposing traffic as soon as it clears '
        ],
        correctAnswer: 1,
        questionImage: ""
    },
    {
        title: '75. WHEN NO SIGNS, SIGNALS, OR POLICE TELL YOU WHAT TO DO AT AN INTERSECTION, THE LAW STATES THAT:',
        alternatives: [
            'A. Drivers on the right must yield to drivers on the left',
            'B. There are no laws stating who must yield',
            'C. Drivers going straight must yield to drivers turning left at the intersection',
            'D. Drivers turning left must yield to drivers going straight through the intersection'
        ],
        correctAnswer: 3,
        questionImage: ""
    },
    {
        title: '76. “HIGHWAY HYPNOSIS” IS A DRIVER CONDITION THAT CAN RESULT FROM:',
        alternatives: [
            'A. Staring at the roadway for long periods of time',
            'B. Frequent rest stops',
            'C. Too much sleep the night before your trip',
            'D. Short trips on expressways'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '77. WHEN PASSING ON A MULTI-LANE HIGHWAY: ',
        alternatives: [
            'A. Be sure the passing lane is clear',
            'B. Pass only on the right',
            'C. Watch for oncoming traffic',
            'D. There is no need to signal'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '78. THE “FOUR-SECOND RULE” REFERS TO HOW ONE SHOULD: ',
        alternatives: [
            'A. Yield to other cars',
            'B. Turn at stop signs ',
            'C. Follow another car',
            'D. Cross an intersection'
        ],
        correctAnswer: 2,
        questionImage: ""
    },
    {
        title: '79. IT IS BEST TO KEEP A SPACE CUSHION:',
        alternatives: [
            'A. Only in back of your vehicle',
            'B. Only on the left and right side of your vehicle',
            'C. Only in front of the vehicle',
            'D. On all sides of the vehicle'
        ],
        correctAnswer: 3,
        questionImage: ""
    },
    {
        title: '80. ALLOWING A SPACE CUSHION IS IMPORTANT BECAUSE IT:',
        alternatives: [
            'A. Prevents distractions from other vehicles ',
            'B. Allows you time to react to situations',
            'C. Keeps traffic flowing at a safe pace',
            'D. Keeps other drivers alert '
        ],
        correctAnswer: 1,
        questionImage: ""
    },
    {
        title: '81. ALLOW A LARGER SPACE CUSHION WHEN STOPPING: ',
        alternatives: [
            'A. On an up-hill ',
            'B. At an intersection',
            'C. At a stop sign ',
            'D. At a toll plaza '
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '82. WHEN MAKING A TURN, YOU MUST _____ YOUR SPEED. ',
        alternatives: [
            'A. Increase',
            'B. Maintain',
            'C. Vary',
            'D. Reduce'
        ],
        correctAnswer: 3,
        questionImage: ""
    },
    {
        title: '83. WHEN DRIVING IN TRAFFIC, IT IS SAFEST TO: ',
        alternatives: [
            'A. Fluctuate your speed to keep alert',
            'B. Drive faster than the flow of traffic',
            'C. Drive slower than the flow of traffic ',
            'D. Drive with the flow of traffic'
        ],
        correctAnswer: 3,
        questionImage: ""
    },
    {
        title: '84. THE MAXIMUM SPEED LIMIT IN THIS STATE IS ____ MILES PER HOUR . ',
        alternatives: [
            'A. 55',
            'B. 50',
            'C. 60',
            'D. 65'
        ],
        correctAnswer: 3,
        questionImage: ""
    },
    {
        title: '85. DRIVE BELOW THE POSTED SPEED LIMIT WHEN:',
        alternatives: [
            'A. Anything makes conditions less than perfect',
            'B. Others drive below the speed limit',
            'C. Entering a highway where there are other cars ',
            'D. You are on a four lane road '
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '86. THE AMOUNT OF SPACE YOU NEED TO CROSS TRAFFIC DEPENDS ON THE: ',
        alternatives: [
            'A. Road and weather conditions and oncoming traffic',
            'B. Presence of a stop sign',
            'C. Use of your turn signals ',
            'D. Cars behind you'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '87. YOUR ABILITY TO STOP IS AFFECTED BY: ',
        alternatives: [
            'A. Signal lights ',
            'B. Other cars on the road',
            'C. The time of day',
            'D. The condition of the road'
        ],
        correctAnswer: 3,
        questionImage: ""
    },
    {
        title: '88. WHICH OF THE FOLLOWING IS TRUE ABOUT THE SPEED AT WHICH YOU TRAVEL?',
        alternatives: [
            'A. The safe speed to drive depends on many conditions ',
            'B. Driving slowly is always safer',
            'C. The speed limit is always a safe speed ',
            'D. Accelerating is always dangerous'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '89. TO PREPARE FOR ANYTHING COMING UP IN THE ROAD AHEAD, YOU SHOULD:',
        alternatives: [
            'A. Continually scan the entire road and roadsides',
            'B. Stare straight ahead at all times',
            'C. Drive with your left foot resting lightly on the brake pedal',
            'D. Maintain focus toward the middle of the road'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '90. AT HIGHWAY SPEEDS, ON A DRY ROAD, A SAFE FOLLOWING DISTANCE IS AT LEAST:',
        alternatives: [
            'A. 3 seconds of following distance from the car ahead of you',
            'B. 2 seconds of following distance from the car ahead of you',
            'C. 4 seconds of following distance from the car ahead of you',
            'D. 2 car lengths of following distance from the car ahead of you '
        ],
        correctAnswer: 2,
        questionImage: ""
    },
    {
        title: '91. WHAT CAN YOU DO TO AVOID THE NEED TO MAKE EMERGENCY (OR “PANIC”) STOPS WHILE DRIVING IN TRAFFIC? ',
        alternatives: [
            'A. Honk your horn to make others aware of your presence',
            'B. Look ahead and maintain a safe following distance',
            'C. Drive in the right lane only',
            'D. Drive slower than the flow of traffic '
        ],
        correctAnswer: 1,
        questionImage: ""
    },
    {
        title: '92. WHEN FACED WITH ONE ONCOMING CAR TO THE LEFT AND A BICYCLIST TO THE RIGHT,YOU SHOULD:',
        alternatives: [
            'A. Pull onto the shoulder',
            'B. Split the difference',
            'C. Let the car pass and then pass the bike',
            'D. Pass the bike quickly'
        ],
        correctAnswer: 2,
        questionImage: ""
    },
    {
        title: '93. IF AN ONCOMING DRIVER IS HEADING TOWARD YOU IN YOUR LANE, YOU SHOULD:',
        alternatives: [
            'A. Steer right, blow your horn, and accelerate',
            'B. Steer left, blow your horn, and brake',
            'C. Steer right, blow your horn, and brake',
            'D. Stay in the center of your lane, blow your horn, and brake'
        ],
        correctAnswer: 2,
        questionImage: ""
    },
    {
        title: '94. IF THE REAR OF YOUR VEHICLE STARTS TO SKID LEFT, YOU SHOULD:',
        alternatives: [
            'A. Steer left',
            'B. Hit your brakes',
            'C. Accelerate',
            'D. Steer righ'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '95. THE MOST EFFECTIVE THING YOU CAN DO TO REDUCE YOUR RISK OF GETTING INJURED OR KILLED IN A TRAFFIC CRASH IS: ',
        alternatives: [
            'A. Wear your seat belt ',
            'B. Limit your driving to week days',
            'C. Stay in the right lane on multi-lane highways',
            'D. Limit your driving to times between 3:00 p.m. and 6:00 p.m'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '96. WHEN DRIVING ON SLICK ROADS, YOU SHOULD:',
        alternatives: [
            'A. Take turns more slowly',
            'B. Change lanes quickly',
            'C. Accelerate quickly',
            'D. Brake hard'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '97. WHICH OF THE FOLLOWING IS TRUE ABOUT DRIVING ON A WET ROADWAY?',
        alternatives: [
            'A. As you drive faster, your tires become less effective ',
            'B. Water does not affect cars with good tires ',
            'C. Deeper water is less dangerous ',
            'D. As you decrease your speed, the roadway becomes more slippery'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '98. WHEN DRIVING ON SLIPPERY ROADS, YOU SHOULD:',
        alternatives: [
            'A. Use alternate routes ',
            'B. Drive as you would on dry roads ',
            'C. Increase your following distance ',
            'D. Avoid crossing bridges or intersections'
        ],
        correctAnswer: 2,
        questionImage: ""
    },
    {
        title: '99. WHEN DRIVING ON WET ROADS, YOU SHOULD:',
        alternatives: [
            'A. Drive the speed limit',
            'B. Drive slightly faster than the speed limit',
            'C. Drive 5 to 10 miles below the speed limit',
            'D. Stay close to the vehicle ahead'
        ],
        correctAnswer: 2,
        questionImage: ""
    },
    {
        title: '100. WHEN DRIVING ON WET ROADS, YOU SHOULD: ',
        alternatives: [
            'A. Increase following distance to 5 or 6 seconds ',
            'B. Decrease following distance to 2 seconds ',
            'C. Not be concerned about following distance',
            'D. Maintain the 4-second following distance rule '
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '101. ROADS FREEZE MORE QUICKLY WHEN THEY ARE:',
        alternatives: [
            'A. Flat ',
            'B. Curvy ',
            'C. In the sun',
            'D. Shaded'
        ],
        correctAnswer: 3,
        questionImage: ""
    },
    {
        title: '102. ROADS BECOME VERY SLIPPERY:',
        alternatives: [
            'A. When it has been raining for an hour or more',
            'B. The day after it rains',
            'C. For the first 10 to 15 minutes of a rain storm',
            'D. Right after the rain has stopped'
        ],
        correctAnswer: 2,
        questionImage: ""
    },
    {
        title: '103. HYDROPLANING IS USUALLY CAUSED BY: ',
        alternatives: [
            'A. Excessive stops',
            'B. Sudden stops',
            'C. Sudden turns',
            'D. Excessive speed'
        ],
        correctAnswer: 3,
        questionImage: ""
    },
    {
        title: '104. HYDROPLANING CAN BE HELPED BY DRIVING: ',
        alternatives: [
            'A. Through shallow water',
            'B. Faster',
            'C. Slower ',
            'D. Through deep water'
        ],
        correctAnswer: 2,
        questionImage: ""
    },
    {
        title: '105. WHEN DRIVING IN FOG, YOU SHOULD USE YOUR _________. ',
        alternatives: [
            'A. Low beam headlights',
            'B. High beam headlights',
            'C. Parking lights',
            'D. Hazard flashers'
        ],
        correctAnswer: 0,
        questionImage: ""
    },
    {
        title: '106. COMPARED TO DRIVING DURING THE DAY, DRIVING AT NIGHT IS: ',
        alternatives: [
            'A. Less dangerous',
            'B. No more of less dangerous ',
            'C. More dangerous ',
            'D. Easier on your eyes'
        ],
        correctAnswer: 2,
        questionImage: ""
    },
    {
        title: '107. ANYTHING THAT REQUIRES YOU TO _______ COULD CAUSE YOU TO CRASH. ',
        alternatives: [
            'A. Take your eyes off the road',
            'B. Take your hands off the wheel',
            'C. Take your attention away from the driving task ',
            'D. All of the above'
        ],
        correctAnswer: 3,
        questionImage: ""
    },
    {
        title: '108. DISTRACTED DRIVERS ARE AT A GREATER RISK OF A CRASH WHEN THEY ARE USING WHICH OF THE FOLLOWING:',
        alternatives: [
            'A. CD player',
            'B. Radio ',
            'C. Cell phone',
            'D. All of the above'
        ],
        correctAnswer: 3,
        questionImage: ""
    },
    {
        title: '109. WHEN YOU ARE IN A LINE OF TRAFFIC THAT IS CROSSING A RAILROAD TRACK THAT HAS NO SIGNALS OR GATES: ',
        alternatives: [
            'A. You have the right of way and do not need to check for trains',
            'B. You may pass slower drivers crossing the track',
            'C. You need to make sure there is space to get all the way across the tracks without stopping, before you start to cross',
            'D. All of the above'
        ],
        correctAnswer: 2,
        questionImage: ""
    },
    {
        title: '110. WHEN APPROACHING A STOPPED SCHOOL BUS WITH ITS RED LIGHTS FLASHING AND ITS STOP ARM EXTENDED, YOU MUST:',
        alternatives: [
            'A. Stop 5 feet away from the bus',
            'B. Stop only if you see children are present',
            'C. Stop and remain stopped until it appears safe to proceed',
            'D. Stop and remain stopped until the red lights stop flashing and the stop arm has been withdrawn'
        ],
        correctAnswer: 3,
        questionImage: ""
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
        gradeFinal.textContent = `Final Grade: ${parseFloat(newScore).toFixed(0)}% (${this.score}/${questions.length})`;
    },

    restartApp: function () {
        
         if (this.currentPosition == questions.length) {
            let gradeContainer = document.getElementById('grade-container');
            let gradeBorder = document.getElementById('grade-border');

            // final grade container styles
            gradeContainer.style.backgroundColor = '#007DC1';
            gradeContainer.style.position = 'absolute';
            gradeContainer.style.top = '0';
            gradeContainer.style.left = '0';
            gradeContainer.style.bottom = '0';
            gradeContainer.style.right = '0';

            gradeBorder.style.border = '10px solid rgb(79, 236, 6)';
            gradeBorder.style.borderRadius = '50%';
            gradeBorder.style.height = '300px';
            gradeBorder.style.width = '320px';
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
            homeButton.innerHTML = `<a href="/home.html"><button>Home</button></a>`;
        }
    }
};

// initialize app
app.start();