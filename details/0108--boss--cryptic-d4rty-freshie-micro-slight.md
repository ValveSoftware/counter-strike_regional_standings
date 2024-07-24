### Roster Details<br />
Team Name: BOSS<br />
Roster: Cryptic, d4rty, freshie, micro, SLIGHT<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [108](../standings_global.md)<br />
Regional Rank: [26]( ../standings_americas.md)<br />
Final Rank Value:  860.4<br />
<br />
Final Rank Value (860.4) = Starting Rank Value (834.8) + Head To Head Adjustments (25.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.365[<sup>1</sup>](#table2)
- Bounty Collected: 0.321[<sup>2</sup>](#table1)
- Opponent Network: 0.145[<sup>2</sup>](#table1)
- LAN Wins: 0.028[<sup>2</sup>](#table1)

The average of these factors is 0.215<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 834.8
- 400 + ( ( 0.215 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 834.8


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
|           57 |      112 | 2024-07-20 | NRG               | L   | 1.000      | -            | -                | -                | -         |    -9.21 | Cryptic, d4rty, freshie, micro, SLIGHT   |
|           56 |      181 | 2024-07-18 | Elevate           | W   | 1.000      | 0.477        | 0.035 (0.017)    | 0.563 (0.269)    | 0 (0.000) |    21.43 | Cryptic, d4rty, freshie, micro, SLIGHT   |
|           55 |      183 | 2024-07-18 | Elevate           | L   | 1.000      | -            | -                | -                | -         |    -9.64 | Cryptic, d4rty, freshie, micro, SLIGHT   |
|           54 |      243 | 2024-07-17 | LAG               | W   | 1.000      | 0.477        | 0.017 (0.008)    | 0.385 (0.184)    | 0 (0.000) |    16.59 | Cryptic, d4rty, freshie, micro, SLIGHT   |
|           53 |      250 | 2024-07-17 | LAG               | W   | 1.000      | 0.477        | 0.017 (0.008)    | 0.385 (0.184)    | 0 (0.000) |    18.11 | Cryptic, d4rty, freshie, micro, SLIGHT   |
|           52 |      361 | 2024-07-15 | Mythic            | W   | 1.000      | 0.477        | 0.012 (0.006)    | 0.310 (0.148)    | 0 (0.000) |    15.65 | Cryptic, d4rty, freshie, micro, SLIGHT   |
|           51 |      364 | 2024-07-15 | Mythic            | W   | 1.000      | 0.477        | 0.012 (0.006)    | 0.310 (0.148)    | 0 (0.000) |    17.09 | Cryptic, d4rty, freshie, micro, SLIGHT   |
|           50 |      621 | 2024-06-15 | Elevate           | L   | 0.943      | -            | -                | -                | -         |    -6.96 | Cryptic, d4rty, freshie, Momo, Pluto     |
|           49 |      676 | 2024-06-14 | Snakes Den        | W   | 0.933      | -            | -                | -                | 0 (0.000) |     6.28 | Cryptic, d4rty, freshie, Momo, Pluto     |
|           48 |     1107 | 2024-06-04 | Mythic            | L   | 0.869      | -            | -                | -                | -         |   -12.14 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           47 |     1418 | 2024-05-22 | Perseverance      | W   | 0.782      | 0.477        | -                | 0.243 (0.091)    | 0 (0.000) |    11.65 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           46 |     1421 | 2024-05-22 | Perseverance      | L   | 0.782      | -            | -                | -                | -         |   -13.22 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           45 |     1503 | 2024-05-20 | Limitless         | L   | 0.769      | -            | -                | -                | -         |   -12.16 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           44 |     1507 | 2024-05-20 | Limitless         | W   | 0.768      | -            | -                | -                | 0 (0.000) |    12.24 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           43 |     1538 | 2024-05-19 | M80               | L   | 0.761      | -            | -                | -                | -         |    -1.44 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           42 |     1540 | 2024-05-19 | M80               | L   | 0.761      | -            | -                | -                | -         |    -1.46 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           41 |     1601 | 2024-05-17 | NRG               | L   | 0.748      | -            | -                | -                | -         |    -7.37 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           40 |     1664 | 2024-05-15 | Wildcard          | L   | 0.736      | -            | -                | -                | -         |    -7.43 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           39 |     1675 | 2024-05-15 | Wildcard          | L   | 0.735      | -            | -                | -                | -         |    -7.87 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           38 |     1726 | 2024-05-14 | MIGHT             | W   | 0.729      | -            | -                | -                | 0 (0.000) |     3.75 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           37 |     1732 | 2024-05-14 | MIGHT             | W   | 0.728      | -            | -                | -                | -         |     3.88 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           36 |     1820 | 2024-05-11 | Perseverance      | L   | 0.708      | -            | -                | -                | -         |   -13.56 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           35 |     1822 | 2024-05-11 | Party Astronauts  | W   | 0.707      | 0.270        | 0.053 (0.010)    | 0.591 (0.113)    | -         |    14.97 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           34 |     1826 | 2024-05-11 | NRG               | L   | 0.707      | -            | -                | -                | -         |    -9.28 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           33 |     1863 | 2024-05-09 | Nouns             | L   | 0.696      | -            | -                | -                | -         |    -7.05 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           32 |     1868 | 2024-05-09 | Nouns             | L   | 0.695      | -            | -                | -                | -         |    -7.45 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           31 |     1983 | 2024-05-03 | Ninjas in Pyjamas | L   | 0.654      | -            | -                | -                | -         |    -0.28 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           30 |     2022 | 2024-05-02 | FlyQuest          | L   | 0.645      | -            | -                | -                | -         |    -1.86 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           29 |     2043 | 2024-05-01 | BIG               | L   | 0.639      | -            | -                | -                | -         |    -1.74 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           28 |     2188 | 2024-04-24 | Mythic            | L   | 0.596      | -            | -                | -                | -         |   -11.58 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           27 |     2189 | 2024-04-24 | Mythic            | W   | 0.595      | -            | -                | -                | -         |     7.26 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           26 |     2518 | 2024-04-11 | Limitless         | W   | 0.509      | -            | -                | -                | -         |     4.00 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           25 |     2522 | 2024-04-11 | Limitless         | W   | 0.509      | -            | -                | -                | -         |     4.13 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           24 |     2548 | 2024-04-10 | NRG               | L   | 0.502      | -            | -                | -                | -         |    -7.50 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           23 |     2553 | 2024-04-10 | NRG               | W   | 0.502      | 0.477        | 0.025 (0.006)    | 0.574 (0.137)    | -         |     8.51 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           22 |     2606 | 2024-04-09 | LAG               | W   | 0.496      | 0.477        | 0.017 (0.004)    | 0.385 (0.091)    | -         |     8.73 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           21 |     2609 | 2024-04-09 | LAG               | W   | 0.495      | 0.477        | 0.017 (0.004)    | 0.385 (0.091)    | -         |     9.11 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           20 |     2739 | 2024-04-04 | FLUFFY AIMERS     | W   | 0.462      | -            | -                | -                | -         |     6.35 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           19 |     2745 | 2024-04-04 | FLUFFY AIMERS     | W   | 0.462      | -            | -                | -                | -         |     6.61 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           18 |     2788 | 2024-04-03 | Party Astronauts  | L   | 0.455      | -            | -                | -                | -         |   -12.05 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           17 |     2831 | 2024-04-02 | Nouns             | L   | 0.449      | -            | -                | -                | -         |    -4.83 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           16 |     2836 | 2024-04-02 | Perseverance      | W   | 0.448      | -            | -                | -                | -         |     5.48 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           15 |     2912 | 2024-03-27 | Take Flyte        | W   | 0.409      | -            | -                | -                | -         |     4.62 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           14 |     2916 | 2024-03-27 | Take Flyte        | L   | 0.409      | -            | -                | -                | -         |    -8.46 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           13 |     2958 | 2024-03-26 | Elevate           | L   | 0.403      | -            | -                | -                | -         |    -3.07 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           12 |     2965 | 2024-03-26 | Elevate           | L   | 0.402      | -            | -                | -                | -         |    -3.15 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           11 |     3041 | 2024-03-20 | Party Astronauts  | L   | 0.362      | -            | -                | -                | -         |    -3.75 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           10 |     3045 | 2024-03-20 | Party Astronauts  | L   | 0.362      | -            | -                | -                | -         |    -3.86 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            9 |     3477 | 2024-03-03 | Liquid            | L   | 0.246      | -            | -                | -                | -         |    -0.26 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            8 |     3494 | 2024-03-02 | Complexity        | L   | 0.239      | -            | -                | -                | -         |    -0.07 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            7 |     3509 | 2024-03-01 | MIBR              | W   | 0.234      | 0.143        | 0.257 (0.009)    | -                | 1 (0.234) |     7.16 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            6 |     3577 | 2024-02-26 | Liquid            | L   | 0.208      | -            | -                | -                | -         |    -0.21 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            5 |     3590 | 2024-02-25 | Nouns             | L   | 0.203      | -            | -                | -                | -         |    -2.40 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            4 |     3593 | 2024-02-25 | Wildcard          | W   | 0.202      | -            | -                | -                | -         |     4.04 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            3 |     4094 | 2024-02-01 | Nouns             | L   | 0.042      | -            | -                | -                | -         |    -0.51 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            2 |     4096 | 2024-02-01 | Rocket            | W   | 0.042      | -            | -                | -                | -         |     0.18 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            1 |     4101 | 2024-02-01 | Elevate           | L   | 0.041      | -            | -                | -                | -         |    -0.31 | brett, Cryptic, d4rty, freshie, PwnAlone |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,011.88)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.949 | $750.00        | $711.74         |
| 2024-06-09 |      0.902 | $2,000.00      | $1,804.58       |
| 2024-05-12 |      0.713 | $3,500.00      | $2,495.57       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
