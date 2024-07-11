### Roster Details<br />
Team Name: BOSS<br />
Roster: Cryptic, d4rty, freshie, Momo, Pluto<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [122](../standings_global.md)<br />
Regional Rank: [31]( ../standings_americas.md)<br />
Final Rank Value:  810.1<br />
<br />
Final Rank Value (810.1) = Starting Rank Value (836.5) + Head To Head Adjustments (-26.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.375[<sup>1</sup>](#table2)
- Bounty Collected: 0.313[<sup>2</sup>](#table1)
- Opponent Network: 0.103[<sup>2</sup>](#table1)
- LAN Wins: 0.037[<sup>2</sup>](#table1)

The average of these factors is 0.207<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 836.5
- 400 + ( ( 0.207 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 836.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           54 |      169 | 2024-06-15 | Elevate           | L   | 1.000      | -            | -                | -                | -         |    -6.87 | Cryptic, d4rty, freshie, Momo, Pluto     |
|           53 |      224 | 2024-06-14 | Snakes Den        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.53 | Cryptic, d4rty, freshie, Momo, Pluto     |
|           52 |      655 | 2024-06-04 | Mythic            | L   | 0.956      | -            | -                | -                | -         |   -11.91 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           51 |      966 | 2024-05-22 | Take Flyte        | W   | 0.869      | 0.477        | -                | 0.283 (0.117)    | 0 (0.000) |    13.79 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           50 |      969 | 2024-05-22 | Take Flyte        | L   | 0.869      | -            | -                | -                | -         |   -13.72 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           49 |     1051 | 2024-05-20 | Carpe Diem        | L   | 0.855      | -            | -                | -                | -         |   -13.67 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           48 |     1055 | 2024-05-20 | Carpe Diem        | W   | 0.855      | 0.477        | 0.008 (0.003)    | 0.245 (0.100)    | 0 (0.000) |    13.41 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           47 |     1086 | 2024-05-19 | M80               | L   | 0.848      | -            | -                | -                | -         |    -2.23 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           46 |     1088 | 2024-05-19 | M80               | L   | 0.848      | -            | -                | -                | -         |    -2.28 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           45 |     1149 | 2024-05-17 | NRG               | L   | 0.835      | -            | -                | -                | -         |    -7.50 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           44 |     1212 | 2024-05-15 | Wildcard          | L   | 0.822      | -            | -                | -                | -         |    -7.77 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           43 |     1223 | 2024-05-15 | Wildcard          | L   | 0.822      | -            | -                | -                | -         |    -8.27 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           42 |     1274 | 2024-05-14 | MIGHT             | W   | 0.815      | -            | -                | -                | 0 (0.000) |     4.25 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           41 |     1280 | 2024-05-14 | MIGHT             | W   | 0.815      | -            | -                | -                | 0 (0.000) |     4.43 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           40 |     1368 | 2024-05-11 | Take Flyte        | L   | 0.795      | -            | -                | -                | -         |   -14.65 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           39 |     1370 | 2024-05-11 | Party Astronauts  | W   | 0.794      | 0.270        | 0.062 (0.013)    | 0.589 (0.126)    | 0 (0.000) |    17.46 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           38 |     1374 | 2024-05-11 | NRG               | L   | 0.794      | -            | -                | -                | -         |    -9.70 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           37 |     1411 | 2024-05-09 | Nouns             | L   | 0.782      | -            | -                | -                | -         |    -6.72 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           36 |     1416 | 2024-05-09 | Nouns             | L   | 0.782      | -            | -                | -                | -         |    -7.10 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           35 |     1531 | 2024-05-03 | Ninjas in Pyjamas | L   | 0.741      | -            | -                | -                | -         |    -0.23 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           34 |     1570 | 2024-05-02 | FlyQuest          | L   | 0.732      | -            | -                | -                | -         |    -1.41 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           33 |     1591 | 2024-05-01 | BIG               | L   | 0.725      | -            | -                | -                | -         |    -1.23 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           32 |     1736 | 2024-04-24 | Mythic            | L   | 0.683      | -            | -                | -                | -         |   -12.20 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           31 |     1737 | 2024-04-24 | Mythic            | W   | 0.682      | 0.477        | 0.014 (0.005)    | 0.359 (0.117)    | 0 (0.000) |     9.41 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           30 |     2066 | 2024-04-11 | Limitless         | W   | 0.596      | 0.477        | -                | 0.225 (0.064)    | 0 (0.000) |     4.88 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           29 |     2070 | 2024-04-11 | Limitless         | W   | 0.595      | -            | -                | -                | 0 (0.000) |     5.08 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           28 |     2096 | 2024-04-10 | NRG               | L   | 0.589      | -            | -                | -                | -         |    -8.22 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           27 |     2101 | 2024-04-10 | NRG               | W   | 0.589      | 0.477        | 0.026 (0.007)    | 0.478 (0.134)    | -         |    10.59 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           26 |     2154 | 2024-04-09 | LAG               | W   | 0.582      | 0.477        | 0.021 (0.006)    | 0.396 (0.110)    | -         |    10.36 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           25 |     2157 | 2024-04-09 | LAG               | W   | 0.582      | 0.477        | 0.021 (0.006)    | 0.396 (0.110)    | -         |    10.89 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           24 |     2287 | 2024-04-04 | FLUFFY AIMERS     | W   | 0.549      | 0.477        | 0.016 (0.004)    | 0.297 (0.078)    | -         |     8.58 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           23 |     2293 | 2024-04-04 | FLUFFY AIMERS     | W   | 0.549      | 0.477        | 0.016 (0.004)    | 0.297 (0.078)    | -         |     9.00 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           22 |     2336 | 2024-04-03 | Party Astronauts  | L   | 0.542      | -            | -                | -                | -         |   -14.27 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           21 |     2379 | 2024-04-02 | Nouns             | L   | 0.536      | -            | -                | -                | -         |    -4.47 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           20 |     2384 | 2024-04-02 | Take Flyte        | W   | 0.535      | -            | -                | -                | -         |     7.11 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           19 |     2460 | 2024-03-27 | One More          | W   | 0.496      | -            | -                | -                | -         |     5.76 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           18 |     2464 | 2024-03-27 | One More          | L   | 0.496      | -            | -                | -                | -         |   -10.11 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           17 |     2506 | 2024-03-26 | Elevate           | L   | 0.489      | -            | -                | -                | -         |    -3.31 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           16 |     2513 | 2024-03-26 | Elevate           | L   | 0.489      | -            | -                | -                | -         |    -3.40 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           15 |     2589 | 2024-03-20 | Party Astronauts  | L   | 0.449      | -            | -                | -                | -         |    -3.93 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           14 |     2593 | 2024-03-20 | Party Astronauts  | L   | 0.449      | -            | -                | -                | -         |    -4.06 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           13 |     3025 | 2024-03-03 | Liquid            | L   | 0.333      | -            | -                | -                | -         |    -0.15 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           12 |     3042 | 2024-03-02 | Complexity        | L   | 0.326      | -            | -                | -                | -         |    -0.05 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           11 |     3057 | 2024-03-01 | MIBR              | W   | 0.321      | 0.143        | 0.270 (0.012)    | -                | 1 (0.321) |     9.95 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           10 |     3125 | 2024-02-26 | Liquid            | L   | 0.295      | -            | -                | -                | -         |    -0.13 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            9 |     3138 | 2024-02-25 | Nouns             | L   | 0.289      | -            | -                | -                | -         |    -2.83 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            8 |     3141 | 2024-02-25 | Wildcard          | W   | 0.289      | 0.143        | 0.073 (0.003)    | -                | -         |     6.17 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            7 |     3642 | 2024-02-01 | Nouns             | L   | 0.129      | -            | -                | -                | -         |    -1.28 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            6 |     3644 | 2024-02-01 | Rocket            | W   | 0.129      | -            | -                | -                | -         |     0.57 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            5 |     3649 | 2024-02-01 | Elevate           | L   | 0.128      | -            | -                | -                | -         |    -0.85 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            4 |     3926 | 2024-01-19 | M80               | L   | 0.043      | -            | -                | -                | -         |    -0.11 | brett, Cryptic, cynic, d4rty, freshie    |
|            3 |     3937 | 2024-01-19 | Liquid            | L   | 0.042      | -            | -                | -                | -         |    -0.02 | brett, Cryptic, cynic, d4rty, freshie    |
|            2 |     4173 | 2024-01-14 | Rocket            | W   | 0.009      | -            | -                | -                | -         |     0.04 | brett, Cryptic, cynic, d4rty, freshie    |
|            1 |     4196 | 2024-01-13 | Akimbo            | W   | 0.002      | -            | -                | -                | -         |     0.02 | brett, Cryptic, cynic, d4rty, freshie    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,527.74)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $750.00        | $750.00         |
| 2024-06-09 |      0.989 | $2,000.00      | $1,978.25       |
| 2024-05-12 |      0.800 | $3,500.00      | $2,799.49       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
