import { writable } from "svelte/store";

const colorList = ["red", "green", "yellow", "pink", "blue", "purple", "gray", "orange", "black", "brown"]



export const score = writable(0)
export const scoreList = writable([
    {score: 0, name: "--"},
    {score: 0, name: "--"},
    {score: 0, name: "--"},
    {score: 0, name: "--"},
    {score: 0, name: "--"},
    {score: 0, name: "--"},
    {score: 0, name: "--"},
    {score: 0, name: "--"},
    {score: 0, name: "--"},
    {score: 0, name: "--"},
]);
export const quizList = writable([

])
