### Roster Details<br />
Team Name: MOUZ<br />
Roster: Brollan, Jimpphat, siuhy, torzsi, xertioN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [2](../standings_global.md)<br />
Regional Rank: [2]( ../standings_europe.md)<br />
Final Rank Value:  2010.7<br />
<br />
Final Rank Value (2010.7) = Starting Rank Value (2000.0) + Head To Head Adjustments (10.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.691[<sup>2</sup>](#table1)
- Opponent Network: 0.361[<sup>2</sup>](#table1)
- LAN Wins: 0.928[<sup>2</sup>](#table1)

The average of these factors is 0.745<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 2000.0
- 400 + ( ( 0.745 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 2000.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |        6 | 2024-07-17 | Sashi              | W   | 1.000      | 1.000        | 0.215 (0.215)    | 1.000 (1.000)    | 1 (1.000) |     0.33 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           32 |     1013 | 2024-05-28 | G2                 | L   | 0.869      | -            | -                | -                | -         |   -17.65 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           31 |     1034 | 2024-05-27 | Complexity         | W   | 0.863      | 0.624        | 0.445 (0.240)    | 0.412 (0.222)    | 1 (0.863) |     6.09 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           30 |     1045 | 2024-05-27 | 9z                 | L   | 0.861      | -            | -                | -                | -         |   -25.24 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           29 |     1262 | 2024-05-19 | Spirit             | W   | 0.806      | 0.769        | 1.000 (0.620)    | 0.434 (0.269)    | 1 (0.806) |    11.18 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           28 |     1290 | 2024-05-18 | HEROIC             | W   | 0.800      | 0.769        | -                | 0.448 (0.275)    | 1 (0.800) |     3.71 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           27 |     1369 | 2024-05-16 | Virtus.pro         | W   | 0.786      | 0.769        | -                | 0.367 (0.221)    | 1 (0.786) |     3.99 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           26 |     1474 | 2024-05-14 | BetBoom            | W   | 0.773      | 0.769        | 0.403 (0.239)    | 0.704 (0.418)    | 1 (0.773) |     1.19 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           25 |     1517 | 2024-05-12 | Vitality           | W   | 0.760      | 0.889        | 0.733 (0.495)    | 0.416 (0.281)    | 1 (0.760) |    11.41 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           24 |     1537 | 2024-05-11 | Complexity         | W   | 0.754      | 0.889        | 0.445 (0.298)    | 0.412 (0.276)    | 1 (0.754) |     6.30 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           23 |     1587 | 2024-05-09 | G2                 | W   | 0.741      | 0.889        | 0.738 (0.486)    | 0.496 (0.327)    | 1 (0.741) |     8.97 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           22 |     1680 | 2024-05-04 | Liquid             | W   | 0.707      | 0.889        | 0.494 (0.310)    | 0.510 (0.321)    | 1 (0.707) |     1.95 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           21 |     1749 | 2024-05-01 | GamerLegion        | W   | 0.687      | -            | -                | -                | -         |     0.31 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           20 |     1779 | 2024-04-30 | Bad News Kangaroos | W   | 0.679      | -            | -                | -                | -         |     0.04 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           19 |     2198 | 2024-04-14 | FaZe               | L   | 0.572      | -            | -                | -                | -         |   -11.22 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           18 |     2215 | 2024-04-13 | G2                 | W   | 0.565      | 0.624        | 0.738 (0.260)    | -                | -         |     7.68 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           17 |     2308 | 2024-04-10 | Liquid             | W   | 0.545      | -            | -                | -                | -         |     1.52 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           16 |     2378 | 2024-04-08 | FURIA              | W   | 0.533      | -            | -                | -                | -         |     1.80 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           15 |     2396 | 2024-04-08 | TYLOO              | W   | 0.531      | -            | -                | -                | -         |     0.02 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           14 |     2597 | 2024-03-29 | G2                 | L   | 0.468      | -            | -                | -                | -         |    -8.23 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           13 |     2720 | 2024-03-22 | Complexity         | W   | 0.420      | -            | -                | -                | -         |     3.36 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           12 |     2740 | 2024-03-21 | Eternal Fire       | W   | 0.414      | 1.000        | 1.000 (0.414)    | -                | -         |     2.41 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           11 |     2751 | 2024-03-21 | Gaimin Gladiators  | W   | 0.412      | -            | -                | -                | -         |     0.10 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           10 |     3430 | 2024-02-20 | Spirit             | W   | 0.214      | -            | -                | -                | -         |     3.38 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            9 |     3452 | 2024-02-19 | Gaimin Gladiators  | W   | 0.207      | -            | -                | -                | -         |     0.04 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            8 |     3465 | 2024-02-19 | ex-Guild Eagles    | W   | 0.205      | -            | -                | -                | -         |     0.01 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            7 |     3659 | 2024-02-10 | FaZe               | L   | 0.147      | -            | -                | -                | -         |    -2.88 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            6 |     3702 | 2024-02-06 | ENCE               | W   | 0.121      | -            | -                | -                | -         |     0.18 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            5 |     3714 | 2024-02-05 | GamerLegion        | W   | 0.114      | -            | -                | -                | -         |     0.01 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            4 |     3737 | 2024-02-04 | Cloud9             | W   | 0.106      | -            | -                | -                | -         |     0.04 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            3 |     4050 | 2024-01-20 | ex-Preasy          | W   | 0.008      | -            | -                | -                | -         |     0.00 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            2 |     4065 | 2024-01-20 | Spirit             | L   | 0.007      | -            | -                | -                | -         |    -0.11 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            1 |     4115 | 2024-01-19 | Eternal Fire       | L   | 0.001      | -            | -                | -                | -         |    -0.02 | Brollan, Jimpphat, siuhy, torzsi, xertioN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($433,657.02)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      0.901 | $5,000.00      | $4,506.96       |
| 2024-05-19 |      0.806 | $300,000.00    | $241,918.13     |
| 2024-05-12 |      0.760 | $170,000.00    | $129,241.69     |
| 2024-04-14 |      0.572 | $42,000.00     | $24,029.14      |
| 2024-03-31 |      0.481 | $45,000.00     | $21,646.27      |
| 2024-02-11 |      0.154 | $80,000.00     | $12,314.83      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
