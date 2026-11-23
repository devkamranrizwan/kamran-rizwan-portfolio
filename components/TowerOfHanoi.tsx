"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

type Move = [number, number];
const colors = ["#8ff0ca", "#6cdbc1", "#77cde6", "#92b5f7", "#bba3f4", "#dda8e9", "#f0bc93"];

function initialStacks(count: number): number[][] {
  return [Array.from({ length: count }, (_, index) => count - index), [], []];
}

function getBest(count: number) {
  try { const value = Number(localStorage.getItem(`hanoi-best-${count}`)); return value > 0 ? value : null; } catch { return null; }
}

export function TowerOfHanoi() {
  const [count, setCount] = useState(4);
  const [stacks, setStacks] = useState<number[][]>(() => initialStacks(4));
  const [selected, setSelected] = useState<number | null>(null);
  const [moves, setMoves] = useState(0);
  const [history, setHistory] = useState<Move[]>([]);
  const [complete, setComplete] = useState(false);
  const [best, setBest] = useState<number | null>(null);
  const [message, setMessage] = useState("Step 1: Select tower A to pick up its top disk.");
  const [isError, setIsError] = useState(false);
  const [copyLabel, setCopyLabel] = useState("Copy code");
  const minimum = 2 ** count - 1;

  useEffect(() => { setBest(getBest(count)); }, [count]);

  const reset = useCallback((nextCount = count) => {
    setCount(nextCount); setStacks(initialStacks(nextCount)); setSelected(null); setMoves(0); setHistory([]); setComplete(false); setBest(getBest(nextCount)); setMessage("Step 1: Select tower A to pick up its top disk."); setIsError(false); setCopyLabel("Copy code");
  }, [count]);

  function say(text: string, error = false) { setMessage(text); setIsError(error); }

  function choose(index: number) {
    if (complete) return;
    if (selected === null) {
      if (!stacks[index].length) { say("That tower is empty. Choose a tower with disks.", true); return; }
      setSelected(index); say("Step 2: Choose another tower to place the disk."); return;
    }
    if (selected === index) { setSelected(null); say("Selection cleared. Choose a tower to pick up a disk."); return; }
    const source = stacks[selected]; const target = stacks[index]; const disk = source[source.length - 1];
    if (target.length && target[target.length - 1] < disk) { say("That move is not allowed. Larger disks must stay below smaller disks.", true); return; }
    const nextStacks = stacks.map((stack) => [...stack]); const origin = selected;
    nextStacks[origin].pop(); nextStacks[index].push(disk);
    const nextMoves = moves + 1; const nextHistory: Move[] = [...history, [origin, index]];
    setStacks(nextStacks); setSelected(null); setMoves(nextMoves); setHistory(nextHistory);
    if (nextStacks[2].length === count) {
      setComplete(true); let nextBest = best;
      if (best === null || nextMoves < best) { nextBest = nextMoves; try { localStorage.setItem(`hanoi-best-${count}`, String(nextMoves)); } catch { /* Storage is optional. */ } }
      setBest(nextBest); say(`Success! All ${count} disks are on tower C.`);
    } else say("Good move. Keep moving disks toward tower C.");
  }

  const sourceCode = useMemo(() => {
    const letters = ["A", "B", "C"];
    const recorded = history.map(([from, to]) => `  ['${letters[from]}', '${letters[to]}']`).join(",\n");
    return `// Your exact Tower of Hanoi moves (${moves} moves, ${count} disks).\n// This is a replay of your moves, not a guessed algorithm.\nconst disks = ${count};\nconst towers = {\n  A: Array.from({ length: disks }, (_, i) => disks - i),\n  B: [],\n  C: []\n};\n\nconst moves = [\n${recorded}\n];\n\nfunction moveDisk(from, to) {\n  const source = towers[from];\n  const target = towers[to];\n  if (!source.length) throw new Error('Source tower is empty');\n  const disk = source[source.length - 1];\n  if (target.length && target[target.length - 1] < disk) {\n    throw new Error('Cannot place a larger disk on a smaller one');\n  }\n  target.push(source.pop());\n}\n\nfor (const [from, to] of moves) {\n  moveDisk(from, to);\n}\n\nconsole.log(towers); // All disks should be on C\n`;
  }, [count, history, moves]);

  async function copyCode() { try { await navigator.clipboard.writeText(sourceCode); setCopyLabel("Copied!"); } catch { setCopyLabel("Select the code to copy"); } }

  return <><div className="game-wrap"><div className="game-dashboard"><span className="mono" style={{ color: "var(--lime)" }}>Tower of Hanoi</span><div className="hanoi-options"><label htmlFor="hanoi-difficulty">Difficulty</label><select id="hanoi-difficulty" onChange={(event) => reset(Number(event.target.value))} value={count}><option value="3">Easy: 3 disks</option><option value="4">Normal: 4 disks</option><option value="5">Hard: 5 disks</option><option value="6">Expert: 6 disks</option><option value="7">Master: 7 disks</option></select></div></div>
      <div className="game-status"><div className="game-scores"><div className="game-score"><small>Moves</small><strong>{moves}</strong></div><div className="game-score"><small>Minimum</small><strong>{minimum}</strong></div><div className="game-score"><small>Best</small><strong>{best ?? "Not yet"}</strong></div></div><button className="game-restart" onClick={() => reset()} type="button">Reset puzzle</button></div>
      <div aria-label="Tower of Hanoi puzzle board" className={`hanoi-board${complete ? " is-complete" : ""}`} role="group">{stacks.map((stack, index) => <button aria-label={`Peg ${String.fromCharCode(65 + index)}, ${stack.length} disks${selected === index ? ", selected" : ""}`} className={`hanoi-peg${selected === index ? " selected" : ""}${selected !== null && selected !== index && !complete ? " target" : ""}`} key={index} onClick={() => choose(index)} type="button"><span className="hanoi-stack">{stack.map((disk) => <span aria-hidden="true" className="hanoi-disk" key={disk} style={{ background: colors[disk - 1], width: `${29 + disk / count * 67}%` }} />)}</span><span className="hanoi-peg-label">{index === 0 ? "A / Start" : index === 1 ? "B / Helper" : "C / Goal"}</span></button>)}</div>
      <div aria-live="polite" className={`game-message${isError ? " is-error" : ""}${complete ? " is-win" : ""}`} role="status">{message}</div><div className="hanoi-tip">Tap or click to select a tower, then tap or click a destination.</div></div>
    <div aria-live="polite" className="hanoi-victory" hidden={!complete}><div className="win-summary"><div aria-hidden="true" className="hanoi-victory-icon">🏆</div><div className="mono" style={{ color: "var(--lime)", marginBottom: 12 }}>Challenge complete</div><h4>Puzzle solved</h4><p>You solved it in {moves} moves. {moves === minimum ? "Perfect! That is the minimum possible." : `The minimum is ${minimum} moves. Try to beat your score.`}</p><button className="game-restart" onClick={() => reset()} type="button">Play again</button></div><div className="hanoi-analysis"><h5>How you solved it</h5><p>You completed {count} disks in {moves} moves. The shortest possible solution takes {minimum} moves. Your move list is shown below in the same order you played it.</p><div className="analysis-grid"><div className="analysis-stat"><small>Your move replay</small><strong>O(m) time, m = {moves}</strong></div><div className="analysis-stat"><small>Optimal recursive algorithm</small><strong>O(2^n) time, n = {count}</strong></div></div><p><strong>Space complexity:</strong> The recorded moves need O(m) storage; the tower simulation needs O(n). An optimal recursive solution uses O(n) auxiliary stack space.</p><p className="analysis-note">Here n means the number of disks and m means the moves you made. The code records the actual sequence of moves you used, not a guessed algorithm.</p><div className="analysis-codehead"><h5>Your JavaScript replay</h5><button className="analysis-copy" onClick={copyCode} type="button">{copyLabel}</button></div><pre className="analysis-code"><code>{sourceCode}</code></pre></div></div>
  </>;
}
