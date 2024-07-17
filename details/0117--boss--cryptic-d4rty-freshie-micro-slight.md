### Roster Details<br />
Team Name: BOSS<br />
Roster: Cryptic, d4rty, freshie, micro, SLIGHT<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [117](../standings_global.md)<br />
Regional Rank: [29]( ../standings_americas.md)<br />
Final Rank Value:  849.8<br />
<br />
Final Rank Value (849.8) = Starting Rank Value (848.8) + Head To Head Adjustments (1.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.375[<sup>1</sup>](#table2)
- Bounty Collected: 0.315[<sup>2</sup>](#table1)
- Opponent Network: 0.113[<sup>2</sup>](#table1)
- LAN Wins: 0.033[<sup>2</sup>](#table1)

The average of these factors is 0.209<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 848.8
- 400 + ( ( 0.209 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 848.8


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
|           54 |       73 | 2024-07-15 | Mythic            | W   | 1.000      | 0.477        | 0.015 (0.007)    | 0.341 (0.163)    | 0 (0.000) |    16.17 | Cryptic, d4rty, freshie, micro, SLIGHT   |
|           53 |       76 | 2024-07-15 | Mythic            | W   | 1.000      | 0.477        | 0.015 (0.007)    | 0.341 (0.163)    | 0 (0.000) |    17.66 | Cryptic, d4rty, freshie, micro, SLIGHT   |
|           52 |      333 | 2024-06-15 | Elevate           | L   | 0.990      | -            | -                | -                | -         |    -6.93 | Cryptic, d4rty, freshie, Momo, Pluto     |
|           51 |      388 | 2024-06-14 | Snakes Den        | W   | 0.981      | -            | -                | -                | 0 (0.000) |     6.28 | Cryptic, d4rty, freshie, Momo, Pluto     |
|           50 |      819 | 2024-06-04 | Mythic            | L   | 0.916      | -            | -                | -                | -         |   -12.25 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           49 |     1130 | 2024-05-22 | Perseverance      | W   | 0.829      | 0.477        | -                | 0.268 (0.106)    | 0 (0.000) |    12.58 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           48 |     1133 | 2024-05-22 | Perseverance      | L   | 0.829      | -            | -                | -                | -         |   -13.75 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           47 |     1215 | 2024-05-20 | Limitless         | L   | 0.816      | -            | -                | -                | -         |   -12.45 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           46 |     1219 | 2024-05-20 | Limitless         | W   | 0.816      | 0.477        | -                | 0.164 (0.064)    | 0 (0.000) |    13.46 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           45 |     1250 | 2024-05-19 | M80               | L   | 0.809      | -            | -                | -                | -         |    -1.86 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           44 |     1252 | 2024-05-19 | M80               | L   | 0.808      | -            | -                | -                | -         |    -1.89 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           43 |     1313 | 2024-05-17 | NRG               | L   | 0.795      | -            | -                | -                | -         |    -7.40 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           42 |     1376 | 2024-05-15 | Wildcard          | L   | 0.783      | -            | -                | -                | -         |    -7.57 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           41 |     1387 | 2024-05-15 | Wildcard          | L   | 0.782      | -            | -                | -                | -         |    -8.03 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           40 |     1438 | 2024-05-14 | MIGHT             | W   | 0.776      | -            | -                | -                | 0 (0.000) |     3.91 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           39 |     1444 | 2024-05-14 | MIGHT             | W   | 0.776      | -            | -                | -                | 0 (0.000) |     4.06 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           38 |     1532 | 2024-05-11 | Perseverance      | L   | 0.755      | -            | -                | -                | -         |   -14.23 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           37 |     1534 | 2024-05-11 | Party Astronauts  | W   | 0.755      | 0.270        | 0.063 (0.013)    | 0.604 (0.123)    | 0 (0.000) |    16.53 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           36 |     1538 | 2024-05-11 | NRG               | L   | 0.754      | -            | -                | -                | -         |    -9.52 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           35 |     1575 | 2024-05-09 | Nouns             | L   | 0.743      | -            | -                | -                | -         |    -6.88 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           34 |     1580 | 2024-05-09 | Nouns             | L   | 0.742      | -            | -                | -                | -         |    -7.27 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           33 |     1695 | 2024-05-03 | Ninjas in Pyjamas | L   | 0.701      | -            | -                | -                | -         |    -0.20 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           32 |     1734 | 2024-05-02 | FlyQuest          | L   | 0.692      | -            | -                | -                | -         |    -1.47 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           31 |     1755 | 2024-05-01 | BIG               | L   | 0.686      | -            | -                | -                | -         |    -1.34 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           30 |     1900 | 2024-04-24 | Mythic            | L   | 0.643      | -            | -                | -                | -         |   -12.15 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           29 |     1901 | 2024-04-24 | Mythic            | W   | 0.643      | 0.477        | 0.015 (0.004)    | 0.341 (0.104)    | 0 (0.000) |     8.19 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           28 |     2230 | 2024-04-11 | Limitless         | W   | 0.556      | 0.477        | -                | 0.214 (0.057)    | -         |     4.40 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           27 |     2234 | 2024-04-11 | Limitless         | W   | 0.556      | -            | -                | -                | -         |     4.57 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           26 |     2260 | 2024-04-10 | NRG               | L   | 0.549      | -            | -                | -                | -         |    -7.93 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           25 |     2265 | 2024-04-10 | NRG               | W   | 0.549      | 0.477        | 0.026 (0.007)    | 0.515 (0.135)    | -         |     9.60 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           24 |     2318 | 2024-04-09 | LAG               | W   | 0.543      | 0.477        | 0.020 (0.005)    | 0.417 (0.108)    | -         |    10.16 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           23 |     2321 | 2024-04-09 | LAG               | W   | 0.542      | 0.477        | 0.020 (0.005)    | 0.417 (0.108)    | -         |    10.64 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           22 |     2451 | 2024-04-04 | FLUFFY AIMERS     | W   | 0.509      | 0.477        | 0.016 (0.004)    | -                | -         |     7.43 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           21 |     2457 | 2024-04-04 | FLUFFY AIMERS     | W   | 0.509      | 0.477        | 0.016 (0.004)    | -                | -         |     7.77 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           20 |     2500 | 2024-04-03 | Party Astronauts  | L   | 0.502      | -            | -                | -                | -         |   -13.36 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           19 |     2543 | 2024-04-02 | Nouns             | L   | 0.496      | -            | -                | -                | -         |    -4.69 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           18 |     2548 | 2024-04-02 | Perseverance      | W   | 0.495      | -            | -                | -                | -         |     6.36 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           17 |     2624 | 2024-03-27 | Take Flyte        | W   | 0.456      | -            | -                | -                | -         |     5.42 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           16 |     2628 | 2024-03-27 | Take Flyte        | L   | 0.456      | -            | -                | -                | -         |    -9.17 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           15 |     2670 | 2024-03-26 | Elevate           | L   | 0.450      | -            | -                | -                | -         |    -3.02 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           14 |     2677 | 2024-03-26 | Elevate           | L   | 0.449      | -            | -                | -                | -         |    -3.11 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           13 |     2753 | 2024-03-20 | Party Astronauts  | L   | 0.410      | -            | -                | -                | -         |    -3.71 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           12 |     2757 | 2024-03-20 | Party Astronauts  | L   | 0.409      | -            | -                | -                | -         |    -3.82 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           11 |     3189 | 2024-03-03 | Liquid            | L   | 0.294      | -            | -                | -                | -         |    -0.17 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           10 |     3206 | 2024-03-02 | Complexity        | L   | 0.287      | -            | -                | -                | -         |    -0.04 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            9 |     3221 | 2024-03-01 | MIBR              | W   | 0.281      | 0.143        | 0.269 (0.011)    | -                | 1 (0.281) |     8.70 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            8 |     3289 | 2024-02-26 | Liquid            | L   | 0.255      | -            | -                | -                | -         |    -0.14 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            7 |     3302 | 2024-02-25 | Nouns             | L   | 0.250      | -            | -                | -                | -         |    -2.60 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            6 |     3305 | 2024-02-25 | Wildcard          | W   | 0.249      | -            | -                | -                | -         |     5.19 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            5 |     3806 | 2024-02-01 | Nouns             | L   | 0.090      | -            | -                | -                | -         |    -0.94 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            4 |     3808 | 2024-02-01 | Rocket            | W   | 0.089      | -            | -                | -                | -         |     0.37 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            3 |     3813 | 2024-02-01 | Elevate           | L   | 0.088      | -            | -                | -                | -         |    -0.58 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            2 |     4090 | 2024-01-19 | M80               | L   | 0.003      | -            | -                | -                | -         |    -0.01 | brett, Cryptic, cynic, d4rty, freshie    |
|            1 |     4101 | 2024-01-19 | Liquid            | L   | 0.002      | -            | -                | -                | -         |    -0.00 | brett, Cryptic, cynic, d4rty, freshie    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,307.04)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.996 | $750.00        | $747.16         |
| 2024-06-09 |      0.950 | $2,000.00      | $1,899.03       |
| 2024-05-12 |      0.760 | $3,500.00      | $2,660.86       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
