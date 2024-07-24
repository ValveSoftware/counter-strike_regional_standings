### Roster Details<br />
Team Name: Wildcard<br />
Roster: JBa, phzy, Sonic, stanislaw, susp<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [52](../standings_global.md)<br />
Regional Rank: [39]( ../standings_europe.md)<br />
Final Rank Value:  1053.4<br />
<br />
Final Rank Value (1053.4) = Starting Rank Value (930.0) + Head To Head Adjustments (123.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.462[<sup>1</sup>](#table2)
- Bounty Collected: 0.365[<sup>2</sup>](#table1)
- Opponent Network: 0.191[<sup>2</sup>](#table1)
- LAN Wins: 0.028[<sup>2</sup>](#table1)

The average of these factors is 0.262<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 930.0
- 400 + ( ( 0.262 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 930.0


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
|           69 |       82 | 2024-07-21 | NRG              | W   | 1.000      | 0.303        | 0.025 (0.008)    | 0.574 (0.174)    | 0 (0.000) |    15.23 | JBa, phzy, Sonic, stanislaw, susp        |
|           68 |       83 | 2024-07-21 | Elevate          | W   | 1.000      | 0.303        | 0.035 (0.011)    | 0.563 (0.171)    | 0 (0.000) |    13.54 | JBa, phzy, Sonic, stanislaw, susp        |
|           67 |      108 | 2024-07-20 | Party Astronauts | W   | 1.000      | 0.303        | 0.053 (0.016)    | 0.591 (0.179)    | 0 (0.000) |    15.55 | JBa, phzy, Sonic, stanislaw, susp        |
|           66 |      182 | 2024-07-18 | Take Flyte       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.06 | JBa, phzy, Sonic, stanislaw, susp        |
|           65 |      187 | 2024-07-18 | Take Flyte       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.31 | JBa, phzy, Sonic, stanislaw, susp        |
|           64 |      253 | 2024-07-17 | Limitless        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.91 | JBa, phzy, Sonic, stanislaw, susp        |
|           63 |      256 | 2024-07-17 | Limitless        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.25 | JBa, phzy, Sonic, stanislaw, susp        |
|           62 |      311 | 2024-07-16 | LAG              | W   | 1.000      | 0.477        | 0.017 (0.008)    | 0.385 (0.184)    | 0 (0.000) |    12.31 | JBa, phzy, Sonic, stanislaw, susp        |
|           61 |      317 | 2024-07-16 | LAG              | L   | 1.000      | -            | -                | -                | -         |   -19.50 | JBa, phzy, Sonic, stanislaw, susp        |
|           60 |      601 | 2024-06-16 | Nouns            | L   | 0.947      | -            | -                | -                | -         |   -14.42 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           59 |      625 | 2024-06-15 | Mythic           | W   | 0.942      | -            | -                | -                | 0 (0.000) |     8.55 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           58 |      699 | 2024-06-13 | Final Form       | W   | 0.929      | -            | -                | -                | -         |     3.74 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           57 |      810 | 2024-06-09 | M80              | L   | 0.902      | -            | -                | -                | -         |    -4.69 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           56 |      869 | 2024-06-08 | Nouns            | W   | 0.896      | 0.477        | 0.073 (0.031)    | 0.589 (0.252)    | -         |    14.90 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           55 |      879 | 2024-06-08 | Party Astronauts | L   | 0.895      | -            | -                | -                | -         |   -13.60 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           54 |      928 | 2024-06-07 | LAG              | W   | 0.889      | -            | -                | -                | -         |     8.89 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           53 |      984 | 2024-06-06 | M80              | L   | 0.882      | -            | -                | -                | -         |    -4.16 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           52 |      997 | 2024-06-06 | NRG              | L   | 0.881      | -            | -                | -                | -         |   -16.54 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           51 |     1004 | 2024-06-06 | M80              | L   | 0.880      | -            | -                | -                | -         |    -4.67 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           50 |     1020 | 2024-06-06 | NRG              | W   | 0.880      | -            | -                | -                | -         |    10.70 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           49 |     1055 | 2024-06-05 | Party Astronauts | W   | 0.876      | 0.477        | 0.053 (0.022)    | 0.591 (0.247)    | -         |    13.09 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           48 |     1109 | 2024-06-04 | Strife           | W   | 0.869      | -            | -                | -                | -         |     4.91 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           47 |     1399 | 2024-05-23 | M80              | L   | 0.788      | -            | -                | -                | -         |    -3.89 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           46 |     1413 | 2024-05-22 | Take Flyte       | W   | 0.782      | -            | -                | -                | -         |     3.53 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           45 |     1417 | 2024-05-22 | Take Flyte       | W   | 0.782      | -            | -                | -                | -         |     3.65 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           44 |     1425 | 2024-05-22 | LAG              | W   | 0.782      | -            | -                | -                | -         |     7.74 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           43 |     1473 | 2024-05-21 | Limitless        | W   | 0.774      | -            | -                | -                | -         |     6.97 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           42 |     1479 | 2024-05-21 | Limitless        | W   | 0.774      | -            | -                | -                | -         |     7.38 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           41 |     1536 | 2024-05-19 | Limitless        | W   | 0.762      | -            | -                | -                | -         |     3.40 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           40 |     1664 | 2024-05-15 | BOSS             | W   | 0.736      | -            | -                | -                | -         |     7.43 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           39 |     1675 | 2024-05-15 | BOSS             | W   | 0.735      | -            | -                | -                | -         |     7.87 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           38 |     1720 | 2024-05-14 | FLUFFY AIMERS    | W   | 0.729      | -            | -                | -                | -         |     6.21 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           37 |     1724 | 2024-05-14 | FLUFFY AIMERS    | W   | 0.729      | -            | -                | -                | -         |     6.54 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           36 |     1770 | 2024-05-13 | Nouns            | W   | 0.722      | 0.477        | 0.073 (0.025)    | 0.589 (0.203)    | -         |    12.72 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           35 |     1772 | 2024-05-13 | Nouns            | L   | 0.722      | -            | -                | -                | -         |   -10.15 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           34 |     1815 | 2024-05-11 | Elevate          | L   | 0.708      | -            | -                | -                | -         |    -9.01 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           33 |     1817 | 2024-05-11 | Mythic           | L   | 0.708      | -            | -                | -                | -         |   -15.87 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           32 |     1867 | 2024-05-09 | MIGHT            | W   | 0.695      | -            | -                | -                | -         |     2.02 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           31 |     1871 | 2024-05-09 | MIGHT            | W   | 0.695      | -            | -                | -                | -         |     2.06 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           30 |     1883 | 2024-05-08 | Limitless        | W   | 0.689      | -            | -                | -                | -         |     3.32 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           29 |     1886 | 2024-05-08 | Limitless        | W   | 0.689      | -            | -                | -                | -         |     3.43 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           28 |     2000 | 2024-05-02 | Party Astronauts | W   | 0.649      | 0.477        | 0.053 (0.016)    | 0.591 (0.183)    | -         |    11.28 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           27 |     2001 | 2024-05-02 | Party Astronauts | L   | 0.648      | -            | -                | -                | -         |    -9.30 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           26 |     2164 | 2024-04-25 | NRG              | W   | 0.602      | 0.477        | -                | 0.574 (0.165)    | -         |     8.18 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           25 |     2166 | 2024-04-25 | NRG              | L   | 0.602      | -            | -                | -                | -         |   -11.06 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           24 |     2206 | 2024-04-23 | Elevate          | W   | 0.589      | 0.477        | 0.035 (0.010)    | 0.563 (0.158)    | -         |    11.44 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           23 |     2208 | 2024-04-23 | Elevate          | L   | 0.589      | -            | -                | -                | -         |    -7.20 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           22 |     2400 | 2024-04-17 | Elevate          | L   | 0.548      | -            | -                | -                | -         |    -6.93 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           21 |     2921 | 2024-03-27 | Mythic           | W   | 0.408      | -            | -                | -                | -         |     4.15 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           20 |     2924 | 2024-03-27 | Mythic           | W   | 0.408      | -            | -                | -                | -         |     4.28 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           19 |     2960 | 2024-03-26 | LAG              | W   | 0.402      | -            | -                | -                | -         |     5.55 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           18 |     2964 | 2024-03-26 | LAG              | L   | 0.402      | -            | -                | -                | -         |    -7.28 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           17 |     3160 | 2024-03-14 | Perseverance     | W   | 0.322      | -            | -                | -                | -         |     2.65 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           16 |     3162 | 2024-03-14 | Perseverance     | W   | 0.322      | -            | -                | -                | -         |     2.71 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           15 |     3186 | 2024-03-13 | M80              | W   | 0.316      | 0.477        | 0.238 (0.036)    | -                | -         |     8.77 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           14 |     3188 | 2024-03-13 | M80              | L   | 0.316      | -            | -                | -                | -         |    -1.17 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           13 |     3234 | 2024-03-12 | Mythic           | L   | 0.308      | -            | -                | -                | -         |    -6.53 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           12 |     3467 | 2024-03-03 | M80              | L   | 0.247      | -            | -                | -                | -         |    -0.93 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           11 |     3487 | 2024-03-02 | BESTIA           | W   | 0.240      | -            | -                | -                | 1 (0.240) |     4.92 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           10 |     3508 | 2024-03-01 | RED Canids       | L   | 0.234      | -            | -                | -                | -         |    -1.93 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            9 |     3588 | 2024-02-25 | Liquid           | L   | 0.203      | -            | -                | -                | -         |    -0.34 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            8 |     3593 | 2024-02-25 | BOSS             | L   | 0.202      | -            | -                | -                | -         |    -4.04 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            7 |     3611 | 2024-02-24 | NRG              | W   | 0.196      | -            | -                | -                | -         |     2.54 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            6 |     3612 | 2024-02-24 | Party Astronauts | W   | 0.195      | -            | -                | -                | -         |     3.26 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            5 |     3623 | 2024-02-24 | OMiT             | W   | 0.195      | -            | -                | -                | -         |     1.81 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            4 |     3660 | 2024-02-22 | NRG              | L   | 0.181      | -            | -                | -                | -         |    -3.38 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            3 |     4009 | 2024-02-04 | Elevate          | L   | 0.062      | -            | -                | -                | -         |    -0.69 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            2 |     4066 | 2024-02-02 | NRG              | W   | 0.048      | -            | -                | -                | -         |     0.61 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            1 |     4071 | 2024-02-02 | Carpe Diem       | W   | 0.048      | -            | -                | -                | -         |     0.30 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($18,957.80)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-21 |      1.000 | $4,000.00      | $4,000.00       |
| 2024-06-16 |      0.949 | $1,500.00      | $1,423.47       |
| 2024-06-09 |      0.902 | $15,000.00     | $13,534.33      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
