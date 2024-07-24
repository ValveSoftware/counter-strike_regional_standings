### Roster Details<br />
Team Name: ENCE<br />
Roster: gla1ve, Goofy, Kylar, podi, sdy<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [23](../standings_global.md)<br />
Regional Rank: [16]( ../standings_europe.md)<br />
Final Rank Value:  1334.9<br />
<br />
Final Rank Value (1334.9) = Starting Rank Value (1411.4) + Head To Head Adjustments (-76.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.566[<sup>1</sup>](#table2)
- Bounty Collected: 0.501[<sup>2</sup>](#table1)
- Opponent Network: 0.239[<sup>2</sup>](#table1)
- LAN Wins: 0.693[<sup>2</sup>](#table1)

The average of these factors is 0.500<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1411.4
- 400 + ( ( 0.500 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1411.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           46 |        5 | 2024-07-24 | The MongolZ        | L   | 1.000      | -            | -                | -                | -         |    -3.69 | gla1ve, Goofy, Kylar, podi, sdy    |
|           45 |       15 | 2024-07-24 | BLEED              | W   | 1.000      | 0.650        | 0.162 (0.105)    | 0.439 (0.285)    | 1 (1.000) |    10.39 | gla1ve, Goofy, Kylar, podi, sdy    |
|           44 |      615 | 2024-06-16 | Falcons            | L   | 0.945      | -            | -                | -                | -         |   -10.11 | gla1ve, Goofy, Kylar, podi, sdy    |
|           43 |      684 | 2024-06-14 | Complexity         | W   | 0.933      | 0.500        | 0.405 (0.189)    | 0.378 (0.176)    | 1 (0.933) |    24.96 | gla1ve, Goofy, Kylar, podi, sdy    |
|           42 |      691 | 2024-06-14 | MIBR               | W   | 0.932      | 0.500        | 0.257 (0.120)    | 0.561 (0.261)    | 1 (0.932) |    20.18 | gla1ve, Goofy, Kylar, podi, sdy    |
|           41 |     1026 | 2024-06-06 | HEROIC             | L   | 0.879      | -            | -                | -                | -         |    -4.36 | gla1ve, Goofy, Kylar, podi, sdy    |
|           40 |     1039 | 2024-06-06 | Astralis           | L   | 0.878      | -            | -                | -                | -         |    -2.61 | gla1ve, Goofy, Kylar, podi, sdy    |
|           39 |     1076 | 2024-06-05 | Sashi              | W   | 0.873      | 0.715        | 0.234 (0.146)    | 1.000 (0.625)    | 1 (0.873) |    10.93 | gla1ve, Goofy, Kylar, podi, sdy    |
|           38 |     1086 | 2024-06-05 | The MongolZ        | L   | 0.873      | -            | -                | -                | -         |    -1.10 | gla1ve, Goofy, Kylar, podi, sdy    |
|           37 |     1096 | 2024-06-05 | Ninjas in Pyjamas  | L   | 0.872      | -            | -                | -                | -         |    -5.02 | gla1ve, Goofy, Kylar, podi, sdy    |
|           36 |     1201 | 2024-06-01 | DMS                | L   | 0.847      | -            | -                | -                | -         |   -23.59 | gla1ve, Goofy, Kylar, podi, sdy    |
|           35 |     1207 | 2024-06-01 | KOI                | W   | 0.846      | -            | -                | -                | -         |     5.24 | gla1ve, Goofy, Kylar, podi, sdy    |
|           34 |     1216 | 2024-06-01 | DMS                | L   | 0.845      | -            | -                | -                | -         |   -24.04 | gla1ve, Goofy, Kylar, podi, sdy    |
|           33 |     1496 | 2024-05-21 | Liquid             | L   | 0.771      | -            | -                | -                | -         |    -7.72 | dycha, gla1ve, Goofy, hades, Kylar |
|           32 |     1579 | 2024-05-18 | fnatic             | W   | 0.753      | 0.769        | 0.428 (0.248)    | 0.666 (0.385)    | -         |    16.38 | dycha, gla1ve, Goofy, hades, Kylar |
|           31 |     1603 | 2024-05-17 | Gaimin Gladiators  | W   | 0.748      | 0.769        | 0.053 (0.031)    | 0.432 (0.248)    | -         |     3.96 | dycha, gla1ve, Goofy, hades, Kylar |
|           30 |     1616 | 2024-05-17 | fnatic             | L   | 0.746      | -            | -                | -                | -         |    -6.50 | dycha, gla1ve, Goofy, hades, Kylar |
|           29 |     1972 | 2024-05-04 | FURIA              | L   | 0.659      | -            | -                | -                | -         |    -2.56 | dycha, gla1ve, Goofy, hades, Kylar |
|           28 |     1988 | 2024-05-03 | GamerLegion        | L   | 0.653      | -            | -                | -                | -         |   -14.82 | dycha, gla1ve, Goofy, hades, Kylar |
|           27 |     2007 | 2024-05-02 | Monte              | W   | 0.647      | 0.889        | 0.083 (0.048)    | 0.210 (0.121)    | 1 (0.647) |     3.34 | dycha, gla1ve, Goofy, hades, Kylar |
|           26 |     2034 | 2024-05-01 | Bad News Kangaroos | W   | 0.640      | 0.889        | 0.023 (0.013)    | 0.134 (0.076)    | 1 (0.640) |     0.98 | dycha, gla1ve, Goofy, hades, Kylar |
|           25 |     2065 | 2024-04-30 | GamerLegion        | L   | 0.632      | -            | -                | -                | -         |   -15.02 | dycha, gla1ve, Goofy, hades, Kylar |
|           24 |     2330 | 2024-04-19 | AMKAL              | L   | 0.559      | -            | -                | -                | -         |   -14.41 | dycha, gla1ve, Goofy, hades, Kylar |
|           23 |     2413 | 2024-04-17 | Enterprise         | W   | 0.546      | 0.384        | -                | 0.646 (0.136)    | -         |     1.41 | dycha, gla1ve, Goofy, hades, Kylar |
|           22 |     2582 | 2024-04-10 | OG                 | L   | 0.499      | -            | -                | -                | -         |   -13.56 | dycha, gla1ve, Goofy, hades, Kylar |
|           21 |     2665 | 2024-04-08 | FORZE              | L   | 0.486      | -            | -                | -                | -         |   -14.06 | dycha, gla1ve, Goofy, hades, Kylar |
|           20 |     2776 | 2024-04-04 | Aurora Young Blud  | W   | 0.459      | 0.384        | -                | 0.411 (0.072)    | -         |     0.45 | dycha, gla1ve, Goofy, hades, Kylar |
|           19 |     3071 | 2024-03-19 | FURIA              | L   | 0.353      | -            | -                | -                | -         |    -1.20 | dycha, gla1ve, Goofy, hades, Kylar |
|           18 |     3087 | 2024-03-18 | paiN               | L   | 0.345      | -            | -                | -                | -         |    -4.38 | dycha, gla1ve, Goofy, hades, Kylar |
|           17 |     3096 | 2024-03-17 | KOI                | W   | 0.341      | -            | -                | -                | 1 (0.341) |     1.75 | dycha, gla1ve, Goofy, hades, Kylar |
|           16 |     3113 | 2024-03-17 | Imperial           | L   | 0.339      | -            | -                | -                | -         |    -6.07 | dycha, gla1ve, Goofy, hades, Kylar |
|           15 |     3243 | 2024-03-12 | B8                 | L   | 0.306      | -            | -                | -                | -         |    -8.23 | dycha, gla1ve, Goofy, hades, Kylar |
|           14 |     3256 | 2024-03-11 | HEROIC             | L   | 0.301      | -            | -                | -                | -         |    -2.45 | dycha, gla1ve, Goofy, hades, Kylar |
|           13 |     3269 | 2024-03-11 | Metizport          | W   | 0.299      | -            | -                | -                | -         |     0.61 | dycha, gla1ve, Goofy, hades, Kylar |
|           12 |     3669 | 2024-02-22 | Astralis           | W   | 0.178      | -            | -                | -                | 1 (0.178) |     4.80 | dycha, gla1ve, Goofy, hades, Kylar |
|           11 |     3691 | 2024-02-21 | Vitality           | L   | 0.173      | -            | -                | -                | -         |    -0.39 | dycha, gla1ve, Goofy, hades, Kylar |
|           10 |     3723 | 2024-02-20 | GamerLegion        | W   | 0.165      | -            | -                | -                | 1 (0.165) |     0.21 | dycha, gla1ve, Goofy, hades, Kylar |
|            9 |     3744 | 2024-02-19 | ex-Guild Eagles    | W   | 0.160      | -            | -                | -                | 1 (0.160) |     0.20 | dycha, gla1ve, Goofy, hades, Kylar |
|            8 |     3752 | 2024-02-19 | Spirit             | L   | 0.158      | -            | -                | -                | -         |    -0.29 | dycha, gla1ve, Goofy, hades, Kylar |
|            7 |     3956 | 2024-02-09 | Falcons            | L   | 0.094      | -            | -                | -                | -         |    -1.37 | dycha, gla1ve, Goofy, hades, Kylar |
|            6 |     3990 | 2024-02-06 | MOUZ               | L   | 0.074      | -            | -                | -                | -         |    -0.13 | dycha, gla1ve, Goofy, hades, Kylar |
|            5 |     4001 | 2024-02-05 | G2                 | W   | 0.067      | 1.000        | 1.000 (0.067)    | -                | -         |     2.02 | dycha, gla1ve, Goofy, hades, Kylar |
|            4 |     4037 | 2024-02-03 | Vitality           | W   | 0.054      | 1.000        | 0.749 (0.041)    | -                | -         |     1.59 | dycha, gla1ve, Goofy, hades, Kylar |
|            3 |     4076 | 2024-02-02 | The MongolZ        | W   | 0.047      | -            | -                | -                | -         |     1.39 | dycha, gla1ve, Goofy, hades, Kylar |
|            2 |     4105 | 2024-02-01 | Astralis           | W   | 0.041      | -            | -                | -                | -         |     1.10 | dycha, gla1ve, Goofy, hades, Kylar |
|            1 |     4131 | 2024-01-31 | BIG                | L   | 0.033      | -            | -                | -                | -         |    -0.67 | dycha, gla1ve, Goofy, hades, Kylar |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($47,246.09)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.17) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.946 | $10,000.00     | $9,458.39       |
| 2024-06-09 |      0.900 | $8,000.00      | $7,197.97       |
| 2024-05-23 |      0.787 | $12,500.00     | $9,831.65       |
| 2024-05-12 |      0.713 | $7,000.00      | $4,991.14       |
| 2024-04-14 |      0.526 | $15,000.00     | $7,897.44       |
| 2024-03-20 |      0.360 | $10,000.00     | $3,601.09       |
| 2024-02-11 |      0.107 | $40,000.00     | $4,268.41       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
