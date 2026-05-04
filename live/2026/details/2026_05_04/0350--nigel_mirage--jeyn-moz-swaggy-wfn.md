### Roster Details<br />
Team Name: Nigel Mirage<br />
Roster: jeyN, moz, swaggy, wfn<br />
Global Rank: [350](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_05_04.md)<br />
Regional Rank: [208]( ../../standings_europe_2026_05_04.md)<br />
<br />
Final Rank Value:  410.5<br />
<br />
Final Rank Value (410.5) = Starting Rank Value (401.6) + Head To Head Adjustments (8.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.001<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 401.6
- 400 + ( ( 0.001 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 401.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1199 | 2026-04-01 | ex-Zero Tenacity | L   | 0.979      | -            | -                | -                | -         |    -2.11 | jeyN, Mad, moz, swaggy, wfn    |
|            5 |     1287 | 2026-03-31 | IDoPieca         | W   | 0.972      | 0.384        | 0.000 (0.000)    | 0.091 (0.034)    | 0 (0.000) |    20.87 | jeyN, Mad, moz, swaggy, wfn    |
|            4 |     1429 | 2026-03-29 | RUSTEC           | L   | 0.959      | -            | -                | -                | -         |    -1.42 | jeyN, Mad, moz, swaggy, wfn    |
|            3 |     2816 | 2026-03-02 | CTRL             | L   | 0.781      | -            | -                | -                | -         |    -7.96 | jeyN, Mad, moz, swaggy, wfn    |
|            2 |     5511 | 2025-11-21 | The Last Resort  | L   | 0.106      | -            | -                | -                | -         |    -0.17 | Dutchy, jeyN, moz, swaggy, wfn |
|            1 |     5540 | 2025-11-20 | ENCE             | L   | 0.101      | -            | -                | -                | -         |    -0.28 | Dutchy, jeyN, moz, swaggy, wfn |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
