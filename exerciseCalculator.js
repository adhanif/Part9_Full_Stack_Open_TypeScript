"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseArguments = exports.calculateExercises = exports.isNotNumber = void 0;
var isNotNumber = function (argument) { return isNaN(Number(argument)); };
exports.isNotNumber = isNotNumber;
var calculateExercises = function (args, target) {
    // if (args.length < 7) throw new Error("Not enough arguments");
    // if (args.length > 7) throw new Error("Too many arguments");
    var periodLength = args.length;
    var trainingDays = args.filter(function (ele) { return ele > 0; }).length;
    var targetValue = target;
    var averageTime = args.reduce(function (curr, total) { return curr + total; }, 0) / periodLength;
    var success = averageTime >= target;
    var rating;
    var ratingDescription;
    if (averageTime > target) {
        rating = 3;
        ratingDescription = "very good";
    }
    else if (averageTime === target) {
        rating = 2;
        ratingDescription = "good";
    }
    else if (averageTime < target) {
        rating = 1;
        ratingDescription = "Not good";
    }
    else {
        rating = 0;
        ratingDescription = "You did not meet your target";
    }
    return {
        periodLength: periodLength,
        trainingDays: trainingDays,
        targetValue: targetValue,
        averageTime: averageTime,
        success: success,
        rating: rating,
        ratingDescription: ratingDescription,
    };
};
exports.calculateExercises = calculateExercises;
var parseArguments = function (args) {
    if (args.length < 8)
        throw new Error("Not enough arguments for exercise calculation");
    var target = parseFloat(args[2]);
    if ((0, exports.isNotNumber)(target)) {
        throw new Error("Invalid argument: ".concat(args[2], " is not a number"));
    }
    var exerciseArgs = args.slice(3).map(function (arg) {
        if ((0, exports.isNotNumber)(arg)) {
            throw new Error("Invalid argument: ".concat(arg, " is not a number"));
        }
        return parseFloat(arg);
    });
    return { target: target, exerciseArgs: exerciseArgs };
};
exports.parseArguments = parseArguments;
try {
    var _a = (0, exports.parseArguments)(process.argv), target = _a.target, exerciseArgs = _a.exerciseArgs;
    var ans = (0, exports.calculateExercises)(exerciseArgs, target);
    console.log(ans);
}
catch (e) {
    console.error(e.message);
}
