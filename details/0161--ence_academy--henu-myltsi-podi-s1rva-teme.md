### Roster Details<br />
Team Name: ENCE Academy<br />
Roster: HENU, myltsi, podi, S1rva, teme<br />
Global Rank: [161](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [104]( ../standings_europe.md)<br />
<br />
Final Rank Value:  682.3<br />
<br />
Final Rank Value (682.3) = Starting Rank Value (686.1) + Head To Head Adjustments (-3.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.287[<sup>1</sup>](#table2)
- Bounty Collected: 0.251[<sup>2</sup>](#table1)
- Opponent Network: 0.030[<sup>2</sup>](#table1)
- LAN Wins: 0.012[<sup>2</sup>](#table1)

The average of these factors is 0.145<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 686.1
- 400 + ( ( 0.145 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 686.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     2769 | 2024-05-01 | Sampi           | L   | 0.497      | -            | -                | -                | -         |    -3.73 | HENU, myltsi, podi, S1rva, teme |
|           13 |     2787 | 2024-04-30 | Endpoint        | L   | 0.491      | -            | -                | -                | -         |    -2.58 | HENU, myltsi, podi, S1rva, teme |
|           12 |     2797 | 2024-04-29 | RUSH B          | L   | 0.487      | -            | -                | -                | -         |    -4.21 | HENU, myltsi, podi, S1rva, teme |
|           11 |     2828 | 2024-04-28 | Heimo           | L   | 0.478      | -            | -                | -                | -         |    -8.26 | HENU, myltsi, podi, S1rva, teme |
|           10 |     2960 | 2024-04-22 | ALTERNATE aTTaX | L   | 0.438      | -            | -                | -                | -         |    -3.18 | HENU, myltsi, podi, S1rva, teme |
|            9 |     3007 | 2024-04-20 | SINNERS         | W   | 0.425      | 0.371        | 0.044 (0.007)    | 0.922 (0.145)    | 0 (0.000) |    12.28 | HENU, myltsi, podi, S1rva, teme |
|            8 |     3062 | 2024-04-19 | Viperio         | L   | 0.417      | -            | -                | -                | -         |    -8.06 | HENU, myltsi, podi, S1rva, teme |
|            7 |     3110 | 2024-04-18 | MOUZ NXT        | L   | 0.411      | -            | -                | -                | -         |    -1.92 | HENU, myltsi, podi, S1rva, teme |
|            6 |     3172 | 2024-04-16 | 1WIN            | L   | 0.399      | -            | -                | -                | -         |    -2.83 | HENU, myltsi, podi, S1rva, teme |
|            5 |     3191 | 2024-04-15 | Sampi           | W   | 0.392      | 0.371        | 0.024 (0.003)    | 0.981 (0.142)    | 0 (0.000) |     9.13 | HENU, myltsi, podi, S1rva, teme |
|            4 |     3194 | 2024-04-15 | Viperio         | W   | 0.391      | 0.143        | 0.001 (0.000)    | 0.031 (0.002)    | 0 (0.000) |     4.87 | HENU, myltsi, podi, S1rva, teme |
|            3 |     3267 | 2024-04-11 | Secret          | W   | 0.365      | 0.371        | 0.000 (0.000)    | 0.046 (0.006)    | 0 (0.000) |     3.42 | HENU, myltsi, podi, S1rva, teme |
|            2 |     4340 | 2024-02-24 | HAVU            | W   | 0.054      | 0.306        | 0.000 (0.000)    | 0.176 (0.003)    | 1 (0.054) |     0.84 | HENU, myltsi, podi, S1rva, teme |
|            1 |     4362 | 2024-02-24 | ex-sYnck        | W   | 0.051      | 0.306        | 0.000 (0.000)    | 0.011 (0.000)    | 1 (0.051) |     0.40 | HENU, myltsi, podi, S1rva, teme |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,049.47)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-05 |      0.526 | $1,608.00      | $845.62         |
| 2024-02-24 |      0.054 | $3,748.00      | $203.85         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
