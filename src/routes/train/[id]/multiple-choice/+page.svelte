<script lang="ts">
	import ArrowRight from '$lib/components/icons/ArrowRight.svelte';
	import PlayIcon from '$lib/components/icons/PlayIcon.svelte';
	import HeaderMenu from '$lib/components/menu/HeaderMenu.svelte';
	import Footer from '$lib/components/menu/footer.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import type { Card } from '$lib/types/Card';
	import type { PageData } from './$types';
	import ArrowLeft from "$lib/components/icons/ArrowLeft.svelte";

	export let data: PageData;

	let previousQuestions: Card[] = [];
	let currentQuestion: Card;
	let started = false;
	let correctQuestions: Card[] = [];
	let wrongQuestions: Card[] = [];
	let selectedAnswer: string;
	let answerIndex: number;

	let quizCompleted = false;

	$: answerPossibilities = currentQuestion ? getAnswerPossibilities(currentQuestion) : [];

	const startQuiz = () => {
		quizCompleted = false;
		previousQuestions = [];
		correctQuestions = [];
		wrongQuestions = [];
		answerIndex = 0;
		selectedAnswer = '';
		started = true;
		previousQuestions = [];
		nextQuestion();
	};

	const nextQuestion = () => {
		if (previousQuestions.length === data.collection.card_ids.length) {
			// handle quiz completion
			quizCompleted = true;
			return;
		}

		answerIndex = previousQuestions.length + 1;
		let nextQuestionCard = getRandomCard(data.collection.card_ids, previousQuestions);
		currentQuestion = nextQuestionCard;
		previousQuestions.push(nextQuestionCard);
	};

	const getRandomCard = (cards: Card[], exclude: Card[]) => {
		let randomCard;
		do {
			randomCard = cards[Math.floor(Math.random() * cards.length)];
		} while (exclude.includes(randomCard));
		return randomCard;
	};

	const getAnswerPossibilities = (question: Card) => {
		const possibilities = [question.answer];
		while (possibilities.length < 4) {
			const randomAnswer = getRandomCard(data.collection.card_ids, []).answer;
			if (!possibilities.includes(randomAnswer)) {
				possibilities.push(randomAnswer);
			}
		}
		return shuffleArray(possibilities);
	};

	const shuffleArray = (array: any[]) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	};

	const selectAnswer = (answer: string) => {
		selectedAnswer = selectedAnswer === answer ? '' : answer;
	};

	const submitAnswer = () => {
		if (selectedAnswer === currentQuestion.answer) {
			correctQuestions.push(currentQuestion);
		} else {
			wrongQuestions.push(currentQuestion);
		}
		selectedAnswer = '';
		nextQuestion();
	};

	const goBack = () => {
		window.location.href = '/';
	};
</script>

<div class="max-w-md py-3 px-5 space-y-3">
	<HeaderMenu />
	<Button on:click={goBack} variant="link" class="h-8 p-0 flex items-center">
		<div class="mr-2"><ArrowLeft /></div>
		Beenden
	</Button>

	{#if quizCompleted}
		<div class="w-full flex items-center justify-between">
			<div class="text-xl font-medium">Quiz Completed</div>
			<Button on:click={startQuiz} variant="link" class="h-8 p-0 flex items-center">
				<div class="mr-2"><PlayIcon /></div>
				Nochmal
			</Button>
		</div>

		<div class="w-full flex justify-between space-x-2">
			<div
				class="w-1/2 h-10 px-2 py-1 border bg-green-50 border-green-500 rounded flex items-center justify-center font-medium"
			>
				Richtig: {correctQuestions.length}
			</div>
			<div
				class="w-1/2 h-10 px-2 py-1 border bg-red-50 border-red-500 rounded flex items-center justify-center font-medium"
			>
				Falsch: {wrongQuestions.length}
			</div>
		</div>

		<div>Overview</div>

		{#each previousQuestions as previousQuestion}
			{#if correctQuestions.includes(previousQuestion)}
				<div class="w-full h-20 border rounded shadow-sm p-4 bg-green-50 border-green-500">
					<div class="text-sm text-slate-400">
						{previousQuestions.indexOf(previousQuestion) + 1} / {data.collection.card_ids.length}
					</div>
					<div class="text-2xl font-normal text-green-700">{@html previousQuestion.question}</div>
				</div>
			{:else}
				<div class="w-full h-20 border rounded shadow-sm p-4 bg-green-50 border-red-500">
					<div class="text-sm text-slate-400">
						{previousQuestions.indexOf(previousQuestion) + 1} / {data.collection.card_ids.length}
					</div>
					<div class="text-2xl font-normal text-red-700">{@html previousQuestion.question}</div>
				</div>
			{/if}
		{/each}
	{:else if !started}
		<div class="w-full rounded h-40 flex justify-center items-center border shadow">
			<Button on:click={startQuiz} variant="link" class="h-8 p-0 flex text-lg items-center">
				<div class="mr-2"><PlayIcon /></div>
				Start
			</Button>
		</div>
	{:else}
		<div class="w-full h-min max-h-52 border rounded shadow-sm p-4">
			<div class="text-sm text-slate-400">
				{answerIndex} / {data.collection.card_ids.length}
			</div>
			<div class="text-2xl font-normal text-[#DA627D]">{@html currentQuestion?.question}</div>
		</div>

		<div class="w-full flex flex-col space-y-2">
			{#each answerPossibilities as answerPossibility}
				<Button
					on:click={() => selectAnswer(answerPossibility)}
					variant="outline"
					class="w-full h-14 space-x-4 flex items-center justify-start"
				>
					{#if selectedAnswer === answerPossibility}
						<div class="mr-2 h-4 w-4 rounded-full bg-slate-800"></div>
					{:else}
						<div class="mr-2 h-4 w-4 rounded-full border"></div>
					{/if}
					<div>{@html answerPossibility}</div>
				</Button>
			{/each}
		</div>

		<div class="w-full flex justify-end">
			<Button on:click={submitAnswer} variant="link" class="h-8 p-0 flex items-center">
				<div class="mr-2"><ArrowRight /></div>
				Weiter
			</Button>
		</div>
	{/if}
</div>

<Footer />
