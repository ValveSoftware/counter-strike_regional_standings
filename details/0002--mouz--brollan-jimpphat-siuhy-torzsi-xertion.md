### Roster Details<br />
Team Name: MOUZ<br />
Roster: Brollan, Jimpphat, siuhy, torzsi, xertioN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [2](../standings_global.md)<br />
Regional Rank: [2]( ../standings_europe.md)<br />
Final Rank Value:  1975.3<br />
<br />
Final Rank Value (1975.3) = Starting Rank Value (1953.6) + Head To Head Adjustments (21.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.703[<sup>2</sup>](#table1)
- Opponent Network: 0.308[<sup>2</sup>](#table1)
- LAN Wins: 0.935[<sup>2</sup>](#table1)

The average of these factors is 0.737<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1953.6
- 400 + ( ( 0.737 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1953.6


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
|           34 |      849 | 2024-05-28 | G2                 | L   | 0.909      | -            | -                | -                | -         |   -18.74 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           33 |      870 | 2024-05-27 | Complexity         | W   | 0.903      | 0.624        | 0.440 (0.248)    | 0.427 (0.241)    | 1 (0.903) |     7.07 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           32 |      881 | 2024-05-27 | 9z                 | L   | 0.900      | -            | -                | -                | -         |   -26.26 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           31 |     1098 | 2024-05-19 | Spirit             | W   | 0.846      | 0.769        | 1.000 (0.650)    | 0.462 (0.300)    | 1 (0.846) |    13.33 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           30 |     1126 | 2024-05-18 | HEROIC             | W   | 0.840      | 0.769        | -                | 0.480 (0.310)    | 1 (0.840) |     4.81 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           29 |     1205 | 2024-05-16 | Virtus.pro         | W   | 0.825      | 0.769        | 0.347 (0.220)    | 0.391 (0.248)    | 1 (0.825) |     5.17 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           28 |     1310 | 2024-05-14 | BetBoom            | W   | 0.813      | 0.769        | 0.406 (0.253)    | 0.745 (0.465)    | 1 (0.813) |     1.59 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           27 |     1353 | 2024-05-12 | Vitality           | W   | 0.800      | 0.889        | 0.733 (0.521)    | 0.395 (0.281)    | 1 (0.800) |    12.76 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           26 |     1373 | 2024-05-11 | Complexity         | W   | 0.794      | 0.889        | 0.440 (0.310)    | 0.427 (0.302)    | 1 (0.794) |     7.53 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           25 |     1423 | 2024-05-09 | G2                 | W   | 0.781      | 0.889        | 0.745 (0.517)    | 0.481 (0.334)    | 1 (0.781) |     9.31 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           24 |     1516 | 2024-05-04 | Liquid             | W   | 0.747      | 0.889        | 0.494 (0.328)    | 0.546 (0.363)    | 1 (0.747) |     2.92 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           23 |     1585 | 2024-05-01 | GamerLegion        | W   | 0.726      | -            | -                | -                | 1 (0.726) |     0.43 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           22 |     1615 | 2024-04-30 | Bad News Kangaroos | W   | 0.719      | -            | -                | -                | -         |     0.05 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           21 |     2034 | 2024-04-14 | FaZe               | L   | 0.612      | -            | -                | -                | -         |   -10.80 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           20 |     2051 | 2024-04-13 | G2                 | W   | 0.604      | 0.624        | 0.745 (0.281)    | -                | -         |     8.14 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           19 |     2144 | 2024-04-10 | Liquid             | W   | 0.584      | -            | -                | -                | -         |     2.37 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           18 |     2214 | 2024-04-08 | FURIA              | W   | 0.573      | -            | -                | -                | -         |     2.52 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           17 |     2232 | 2024-04-08 | TYLOO              | W   | 0.570      | -            | -                | -                | -         |     0.03 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           16 |     2433 | 2024-03-29 | G2                 | L   | 0.508      | -            | -                | -                | -         |    -9.06 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           15 |     2556 | 2024-03-22 | Complexity         | W   | 0.459      | -            | -                | -                | -         |     4.22 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           14 |     2576 | 2024-03-21 | Eternal Fire       | W   | 0.453      | 1.000        | 1.000 (0.453)    | -                | -         |     3.55 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           13 |     2587 | 2024-03-21 | Gaimin Gladiators  | W   | 0.452      | 1.000        | -                | 0.528 (0.239)    | -         |     0.18 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           12 |     3266 | 2024-02-20 | Spirit             | W   | 0.253      | -            | -                | -                | -         |     4.63 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           11 |     3288 | 2024-02-19 | Gaimin Gladiators  | W   | 0.247      | -            | -                | -                | -         |     0.08 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           10 |     3301 | 2024-02-19 | ex-Guild Eagles    | W   | 0.245      | -            | -                | -                | -         |     0.02 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            9 |     3495 | 2024-02-10 | FaZe               | L   | 0.186      | -            | -                | -                | -         |    -3.28 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            8 |     3538 | 2024-02-06 | ENCE               | W   | 0.160      | -            | -                | -                | -         |     0.38 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            7 |     3550 | 2024-02-05 | GamerLegion        | W   | 0.153      | -            | -                | -                | -         |     0.02 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            6 |     3573 | 2024-02-04 | Cloud9             | W   | 0.146      | -            | -                | -                | -         |     0.09 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            5 |     3886 | 2024-01-20 | ex-Preasy          | W   | 0.048      | -            | -                | -                | -         |     0.00 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            4 |     3901 | 2024-01-20 | Spirit             | L   | 0.046      | -            | -                | -                | -         |    -0.63 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            3 |     3951 | 2024-01-19 | Eternal Fire       | L   | 0.040      | -            | -                | -                | -         |    -0.98 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            2 |     4009 | 2024-01-18 | HEROIC             | W   | 0.033      | -            | -                | -                | -         |     0.28 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            1 |     4025 | 2024-01-18 | EYEBALLERS         | W   | 0.033      | -            | -                | -                | -         |     0.00 | Brollan, Jimpphat, siuhy, torzsi, xertioN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($459,086.81)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      0.941 | $5,000.00      | $4,705.01       |
| 2024-05-19 |      0.846 | $300,000.00    | $253,801.20     |
| 2024-05-12 |      0.800 | $170,000.00    | $135,975.43     |
| 2024-04-14 |      0.612 | $42,000.00     | $25,692.77      |
| 2024-03-31 |      0.521 | $45,000.00     | $23,428.73      |
| 2024-02-11 |      0.194 | $80,000.00     | $15,483.65      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
