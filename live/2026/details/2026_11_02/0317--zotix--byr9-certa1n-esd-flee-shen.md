### Roster Details<br />
Team Name: ZOTIX<br />
Roster: byr9, certa1n, EsD, flee, shen<br />
Global Rank: [317](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [209]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  531.8<br />
<br />
Final Rank Value (531.8) = Starting Rank Value (496.8) + Head To Head Adjustments (35.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.195[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.052<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 496.8
- 400 + ( ( 0.052 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 496.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      101 | 2026-10-29 | TYLOO         | L   | 1.000      | -            | -                | -                | -         |    -0.47 | byr9, certa1n, EsD, flee, n1neteenn |
|            6 |      121 | 2026-10-29 | Iberian Soul  | L   | 1.000      | -            | -                | -                | -         |    -0.48 | byr9, certa1n, EsD, flee, n1neteenn |
|            5 |     2009 | 2026-09-16 | Banger Gang   | L   | 0.888      | -            | -                | -                | -         |   -12.36 | byr9, certa1n, EsD, flee, shen      |
|            4 |     2066 | 2026-09-14 | Drama         | W   | 0.874      | 0.357        | 0.000 (0.000)    | 0.267 (0.083)    | 0 (0.000) |    20.85 | byr9, certa1n, EsD, flee, shen      |
|            3 |     2200 | 2026-09-11 | ex-VP.Prodigy | W   | 0.854      | 0.357        | 0.000 (0.000)    | 0.027 (0.008)    | 0 (0.000) |    12.27 | byr9, certa1n, EsD, flee, shen      |
|            2 |     2315 | 2026-09-09 | B8 Academy    | W   | 0.841      | 0.357        | 0.003 (0.001)    | 0.077 (0.023)    | 0 (0.000) |    17.57 | byr9, certa1n, EsD, flee, shen      |
|            1 |     2502 | 2026-09-05 | Falcons Force | L   | 0.814      | -            | -                | -                | -         |    -2.34 | byr9, certa1n, EsD, flee, shen      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
