interface Result1 {
    periodLength: number;
    trainingDays: number;
    targetValue: number;
    averageTime: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
}
export declare const isNotNumber: (argument: any) => boolean;
export declare const calculateExercises: (args: number[], target: number) => Result1;
export declare const parseArguments: (args: string[]) => {
    target: number;
    exerciseArgs: number[];
};
export {};
