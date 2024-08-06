### Roster Details<br />
Team Name: Wildcard<br />
Roster: JBa, phzy, Sonic, stanislaw, susp<br />
Global Rank: [54](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [40]( ../standings_europe.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [13]( ../standings_americas.md)<br />
<br />
Final Rank Value:  1038.4<br />
<br />
Final Rank Value (1038.4) = Starting Rank Value (912.8) + Head To Head Adjustments (125.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.442[<sup>1</sup>](#table2)
- Bounty Collected: 0.353[<sup>2</sup>](#table1)
- Opponent Network: 0.184[<sup>2</sup>](#table1)
- LAN Wins: 0.018[<sup>2</sup>](#table1)

The average of these factors is 0.249<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 912.8
- 400 + ( ( 0.249 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 912.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           70 |       50 | 2024-08-04 | NRG              | L   | 1.000      | -            | -                | -                | -         |   -17.27 | JBa, phzy, Sonic, stanislaw, susp        |
|           69 |       85 | 2024-08-03 | Take Flyte       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.34 | JBa, MarKE, phzy, Sonic, susp            |
|           68 |      192 | 2024-07-31 | Elevate          | W   | 1.000      | 0.477        | 0.030 (0.014)    | 0.509 (0.243)    | 0 (0.000) |    10.12 | JBa, phzy, Sonic, stanislaw, susp        |
|           67 |      199 | 2024-07-31 | Elevate          | W   | 1.000      | 0.477        | 0.030 (0.014)    | 0.509 (0.243)    | 0 (0.000) |    10.95 | JBa, phzy, Sonic, stanislaw, susp        |
|           66 |      532 | 2024-07-21 | NRG              | W   | 1.000      | 0.303        | 0.032 (0.010)    | 0.524 (0.159)    | 0 (0.000) |    15.54 | JBa, phzy, Sonic, stanislaw, susp        |
|           65 |      533 | 2024-07-21 | Elevate          | W   | 1.000      | 0.303        | 0.030 (0.009)    | 0.509 (0.154)    | 0 (0.000) |    13.74 | JBa, phzy, Sonic, stanislaw, susp        |
|           64 |      558 | 2024-07-20 | Party Astronauts | W   | 1.000      | 0.303        | 0.041 (0.012)    | 0.510 (0.154)    | 0 (0.000) |    15.67 | JBa, phzy, Sonic, stanislaw, susp        |
|           63 |      632 | 2024-07-18 | Take Flyte       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.36 | JBa, phzy, Sonic, stanislaw, susp        |
|           62 |      637 | 2024-07-18 | Take Flyte       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.64 | JBa, phzy, Sonic, stanislaw, susp        |
|           61 |      703 | 2024-07-17 | Limitless        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.10 | JBa, phzy, Sonic, stanislaw, susp        |
|           60 |      706 | 2024-07-17 | Limitless        | W   | 1.000      | -            | -                | -                | -         |     6.45 | JBa, phzy, Sonic, stanislaw, susp        |
|           59 |      761 | 2024-07-16 | LAG              | W   | 1.000      | 0.477        | -                | 0.364 (0.173)    | -         |    12.41 | JBa, phzy, Sonic, stanislaw, susp        |
|           58 |      767 | 2024-07-16 | LAG              | L   | 1.000      | -            | -                | -                | -         |   -19.39 | JBa, phzy, Sonic, stanislaw, susp        |
|           57 |     1051 | 2024-06-16 | Nouns            | L   | 0.861      | -            | -                | -                | -         |   -13.10 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           56 |     1075 | 2024-06-15 | Mythic           | W   | 0.855      | -            | -                | -                | -         |     7.91 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           55 |     1149 | 2024-06-13 | Final Form       | W   | 0.843      | -            | -                | -                | -         |     3.74 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           54 |     1260 | 2024-06-09 | M80              | L   | 0.816      | -            | -                | -                | -         |    -4.67 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           53 |     1319 | 2024-06-08 | Nouns            | W   | 0.810      | 0.477        | 0.057 (0.022)    | 0.566 (0.219)    | -         |    13.51 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           52 |     1329 | 2024-06-08 | Party Astronauts | L   | 0.808      | -            | -                | -                | -         |   -12.22 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           51 |     1378 | 2024-06-07 | LAG              | W   | 0.802      | -            | -                | -                | -         |     8.08 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           50 |     1434 | 2024-06-06 | M80              | L   | 0.796      | -            | -                | -                | -         |    -4.21 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           49 |     1447 | 2024-06-06 | NRG              | L   | 0.794      | -            | -                | -                | -         |   -14.56 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           48 |     1454 | 2024-06-06 | M80              | L   | 0.794      | -            | -                | -                | -         |    -4.68 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           47 |     1470 | 2024-06-06 | NRG              | W   | 0.793      | -            | -                | -                | -         |    10.11 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           46 |     1505 | 2024-06-05 | Party Astronauts | W   | 0.789      | 0.477        | 0.041 (0.015)    | 0.510 (0.192)    | -         |    12.00 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           45 |     1559 | 2024-06-04 | Homyno           | W   | 0.782      | -            | -                | -                | -         |     4.83 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           44 |     1849 | 2024-05-23 | M80              | L   | 0.702      | -            | -                | -                | -         |    -3.89 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           43 |     1863 | 2024-05-22 | Take Flyte       | W   | 0.696      | -            | -                | -                | -         |     3.43 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           42 |     1867 | 2024-05-22 | Take Flyte       | W   | 0.696      | -            | -                | -                | -         |     3.55 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           41 |     1875 | 2024-05-22 | LAG              | W   | 0.695      | -            | -                | -                | -         |     6.90 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           40 |     1923 | 2024-05-21 | Limitless        | W   | 0.688      | -            | -                | -                | -         |     6.26 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           39 |     1929 | 2024-05-21 | Limitless        | W   | 0.688      | -            | -                | -                | -         |     6.59 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           38 |     1986 | 2024-05-19 | Limitless        | W   | 0.675      | -            | -                | -                | -         |     3.25 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           37 |     2114 | 2024-05-15 | BOSS             | W   | 0.649      | -            | -                | -                | -         |     6.65 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           36 |     2125 | 2024-05-15 | BOSS             | W   | 0.649      | -            | -                | -                | -         |     7.00 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           35 |     2170 | 2024-05-14 | FLUFFY AIMERS    | W   | 0.642      | -            | -                | -                | -         |     5.57 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           34 |     2174 | 2024-05-14 | FLUFFY AIMERS    | W   | 0.642      | -            | -                | -                | -         |     5.83 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           33 |     2220 | 2024-05-13 | Nouns            | W   | 0.636      | 0.477        | 0.057 (0.017)    | 0.566 (0.172)    | -         |    11.14 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           32 |     2222 | 2024-05-13 | Nouns            | L   | 0.635      | -            | -                | -                | -         |    -9.03 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           31 |     2265 | 2024-05-11 | Elevate          | L   | 0.622      | -            | -                | -                | -         |    -7.91 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           30 |     2267 | 2024-05-11 | Mythic           | L   | 0.621      | -            | -                | -                | -         |   -13.84 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           29 |     2317 | 2024-05-09 | MIGHT            | W   | 0.609      | -            | -                | -                | -         |     1.84 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           28 |     2321 | 2024-05-09 | MIGHT            | W   | 0.609      | -            | -                | -                | -         |     1.88 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           27 |     2333 | 2024-05-08 | Limitless        | W   | 0.603      | -            | -                | -                | -         |     3.13 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           26 |     2336 | 2024-05-08 | Limitless        | W   | 0.602      | -            | -                | -                | -         |     3.23 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           25 |     2450 | 2024-05-02 | Party Astronauts | W   | 0.562      | 0.477        | 0.041 (0.011)    | 0.510 (0.137)    | -         |     9.78 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           24 |     2451 | 2024-05-02 | Party Astronauts | L   | 0.562      | -            | -                | -                | -         |    -8.08 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           23 |     2614 | 2024-04-25 | NRG              | W   | 0.516      | -            | -                | -                | -         |     7.43 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           22 |     2616 | 2024-04-25 | NRG              | L   | 0.515      | -            | -                | -                | -         |    -9.03 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           21 |     2656 | 2024-04-23 | Elevate          | W   | 0.503      | -            | -                | -                | -         |     9.78 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           20 |     2658 | 2024-04-23 | Elevate          | L   | 0.502      | -            | -                | -                | -         |    -6.14 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           19 |     2850 | 2024-04-17 | Elevate          | L   | 0.461      | -            | -                | -                | -         |    -5.79 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           18 |     3371 | 2024-03-27 | Mythic           | W   | 0.322      | -            | -                | -                | -         |     3.29 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           17 |     3374 | 2024-03-27 | Mythic           | W   | 0.322      | -            | -                | -                | -         |     3.38 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           16 |     3410 | 2024-03-26 | LAG              | W   | 0.316      | -            | -                | -                | -         |     4.18 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           15 |     3414 | 2024-03-26 | LAG              | L   | 0.316      | -            | -                | -                | -         |    -5.88 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           14 |     3610 | 2024-03-14 | Phoenix          | W   | 0.235      | -            | -                | -                | -         |     2.00 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           13 |     3612 | 2024-03-14 | Phoenix          | W   | 0.235      | -            | -                | -                | -         |     2.03 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           12 |     3636 | 2024-03-13 | M80              | W   | 0.229      | 0.477        | 0.188 (0.021)    | -                | -         |     6.17 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           11 |     3638 | 2024-03-13 | M80              | L   | 0.229      | -            | -                | -                | -         |    -1.06 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           10 |     3684 | 2024-03-12 | Mythic           | L   | 0.222      | -            | -                | -                | -         |    -4.71 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            9 |     3917 | 2024-03-03 | M80              | L   | 0.160      | -            | -                | -                | -         |    -0.75 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            8 |     3937 | 2024-03-02 | BESTIA           | W   | 0.154      | -            | -                | -                | 1 (0.154) |     3.14 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            7 |     3958 | 2024-03-01 | RED Canids       | L   | 0.148      | -            | -                | -                | -         |    -1.34 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            6 |     4038 | 2024-02-25 | Liquid           | L   | 0.116      | -            | -                | -                | -         |    -0.08 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            5 |     4043 | 2024-02-25 | BOSS             | L   | 0.115      | -            | -                | -                | -         |    -2.32 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            4 |     4061 | 2024-02-24 | NRG              | W   | 0.109      | -            | -                | -                | -         |     1.53 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            3 |     4062 | 2024-02-24 | Party Astronauts | W   | 0.109      | -            | -                | -                | -         |     1.81 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            2 |     4073 | 2024-02-24 | Akimbo           | W   | 0.108      | -            | -                | -                | -         |     1.01 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            1 |     4110 | 2024-02-22 | NRG              | L   | 0.095      | -            | -                | -                | -         |    -1.67 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($17,531.34)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-21 |      1.000 | $4,000.00      | $4,000.00       |
| 2024-06-16 |      0.863 | $1,500.00      | $1,293.80       |
| 2024-06-09 |      0.816 | $15,000.00     | $12,237.55      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
