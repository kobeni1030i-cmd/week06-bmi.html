import './style.css'
import setupCounter from './counter.js'

document.querySelector('#app').innerHTML = `
	<main class="grid min-h-screen place-items-center bg-slate-100 px-4 py-8 text-slate-800" aria-labelledby="counter-title">
		<section class="w-full max-w-md rounded-lg border border-slate-200 bg-white p-10 text-center shadow-xl shadow-slate-300/40">
			<h1 id="counter-title" class="mb-6 text-3xl font-bold">カウンター</h1>
			<p class="mb-8 text-6xl font-bold leading-none" aria-live="polite"></p>
			<div class="flex flex-wrap justify-center gap-3" role="group" aria-label="カウンター操作">
				<button class="min-w-24 rounded-md bg-blue-600 px-4 py-3 font-bold text-white transition hover:bg-blue-700 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-blue-300" type="button" data-action="increment">増やす</button>
				<button class="min-w-24 rounded-md bg-blue-600 px-4 py-3 font-bold text-white transition hover:bg-blue-700 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-blue-300" type="button" data-action="decrement">減らす</button>
				<button class="min-w-24 rounded-md bg-slate-600 px-4 py-3 font-bold text-white transition hover:bg-slate-700 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-slate-300" type="button" data-action="reset">リセット</button>
			</div>
		</section>
	</main>
`

setupCounter(document.querySelector('main'))

