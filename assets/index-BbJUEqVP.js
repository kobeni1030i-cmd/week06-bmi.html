(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let t=0,n=e.querySelector(`[aria-live="polite"]`),r=e=>{t=e,n.textContent=t};e.querySelector(`[data-action="increment"]`).addEventListener(`click`,()=>{r(t+1)}),e.querySelector(`[data-action="decrement"]`).addEventListener(`click`,()=>{r(t-1)}),e.querySelector(`[data-action="reset"]`).addEventListener(`click`,()=>{r(0)}),r(0)}document.querySelector(`#app`).innerHTML=`
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
`,e(document.querySelector(`main`));