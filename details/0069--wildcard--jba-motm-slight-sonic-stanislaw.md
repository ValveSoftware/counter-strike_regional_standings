### Roster Details<br />
Team Name: Wildcard<br />
Roster: JBa, motm, SLIGHT, Sonic, stanislaw<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [69](../standings_global.md)<br />
Regional Rank: [16]( ../standings_americas.md)<br />
Final Rank Value:  1018.4<br />
<br />
Final Rank Value (1018.4) = Starting Rank Value (959.8) + Head To Head Adjustments (58.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.462[<sup>1</sup>](#table2)
- Bounty Collected: 0.379[<sup>2</sup>](#table1)
- Opponent Network: 0.211[<sup>2</sup>](#table1)
- LAN Wins: 0.050[<sup>2</sup>](#table1)

The average of these factors is 0.276<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 959.8
- 400 + ( ( 0.276 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 959.8


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
|           76 |       13 | 2024-06-16 | Nouns            | L   | 1.000      | -            | -                | -                | -         |   -14.51 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           75 |       37 | 2024-06-15 | Mythic           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.86 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           74 |      111 | 2024-06-13 | Final Form       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.74 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           73 |      222 | 2024-06-09 | M80              | L   | 1.000      | -            | -                | -                | -         |    -6.43 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           72 |      281 | 2024-06-08 | Nouns            | W   | 1.000      | 0.477        | 0.081 (0.039)    | 0.504 (0.240)    | 0 (0.000) |    17.32 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           71 |      291 | 2024-06-08 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |   -14.64 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           70 |      340 | 2024-06-07 | LAG              | W   | 1.000      | 0.384        | 0.021 (0.008)    | 0.421 (0.162)    | 0 (0.000) |     9.49 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           69 |      396 | 2024-06-06 | M80              | L   | 1.000      | -            | -                | -                | -         |    -5.93 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           68 |      409 | 2024-06-06 | NRG              | L   | 1.000      | -            | -                | -                | -         |   -18.26 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           67 |      416 | 2024-06-06 | M80              | L   | 1.000      | -            | -                | -                | -         |    -6.81 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           66 |      432 | 2024-06-06 | NRG              | W   | 1.000      | -            | -                | -                | 0 (0.000) |    12.38 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           65 |      467 | 2024-06-05 | Party Astronauts | W   | 1.000      | 0.477        | 0.055 (0.026)    | 0.600 (0.286)    | 0 (0.000) |    15.11 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           64 |      521 | 2024-06-04 | Strife           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.55 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           63 |      813 | 2024-05-23 | M80              | L   | 1.000      | -            | -                | -                | -         |    -6.64 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           62 |      827 | 2024-05-22 | One More         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.94 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           61 |      831 | 2024-05-22 | One More         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.10 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           60 |      839 | 2024-05-22 | LAG              | W   | 1.000      | -            | -                | -                | -         |     9.10 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           59 |      887 | 2024-05-21 | Carpe Diem       | W   | 1.000      | -            | -                | -                | -         |     8.24 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           58 |      893 | 2024-05-21 | Carpe Diem       | W   | 1.000      | -            | -                | -                | -         |     8.84 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           57 |      950 | 2024-05-19 | Limitless        | W   | 1.000      | -            | -                | -                | -         |     4.28 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           56 |     1008 | 2024-05-17 | Nouns            | L   | 0.991      | -            | -                | -                | -         |   -17.04 | Grizz, JBa, motm, SLIGHT, stanislaw      |
|           55 |     1078 | 2024-05-15 | BOSS             | W   | 0.978      | 0.477        | 0.021 (0.010)    | 0.386 (0.180)    | -         |     9.18 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           54 |     1089 | 2024-05-15 | BOSS             | W   | 0.978      | 0.477        | 0.021 (0.010)    | 0.386 (0.180)    | -         |     9.88 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           53 |     1134 | 2024-05-14 | FLUFFY AIMERS    | W   | 0.971      | -            | -                | -                | -         |     8.36 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           52 |     1138 | 2024-05-14 | FLUFFY AIMERS    | W   | 0.971      | -            | -                | -                | -         |     8.96 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           51 |     1184 | 2024-05-13 | Nouns            | W   | 0.965      | 0.477        | 0.081 (0.037)    | 0.504 (0.232)    | -         |    17.35 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           50 |     1186 | 2024-05-13 | Nouns            | L   | 0.964      | -            | -                | -                | -         |   -12.90 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           49 |     1229 | 2024-05-11 | Elevate          | L   | 0.951      | -            | -                | -                | -         |   -16.12 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           48 |     1231 | 2024-05-11 | Mythic           | L   | 0.950      | -            | -                | -                | -         |   -20.83 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           47 |     1281 | 2024-05-09 | MIGHT            | W   | 0.938      | -            | -                | -                | -         |     2.67 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           46 |     1285 | 2024-05-09 | MIGHT            | W   | 0.938      | -            | -                | -                | -         |     2.75 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           45 |     1297 | 2024-05-08 | Limitless        | W   | 0.931      | -            | -                | -                | -         |     4.01 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           44 |     1300 | 2024-05-08 | Limitless        | W   | 0.931      | -            | -                | -                | -         |     4.17 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           43 |     1414 | 2024-05-02 | Party Astronauts | W   | 0.891      | 0.477        | 0.055 (0.023)    | 0.600 (0.255)    | -         |    15.50 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           42 |     1415 | 2024-05-02 | Party Astronauts | L   | 0.891      | -            | -                | -                | -         |   -12.57 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           41 |     1578 | 2024-04-25 | NRG              | W   | 0.845      | 0.477        | 0.024 (0.010)    | 0.507 (0.204)    | -         |    11.76 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           40 |     1580 | 2024-04-25 | NRG              | L   | 0.844      | -            | -                | -                | -         |   -15.12 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           39 |     1620 | 2024-04-23 | Elevate          | W   | 0.831      | 0.477        | 0.031 (0.012)    | 0.481 (0.191)    | -         |    11.68 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           38 |     1622 | 2024-04-23 | Elevate          | L   | 0.831      | -            | -                | -                | -         |   -14.78 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           37 |     1814 | 2024-04-17 | Elevate          | L   | 0.790      | -            | -                | -                | -         |   -15.26 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           36 |     2067 | 2024-04-08 | Cloud9           | L   | 0.733      | -            | -                | -                | -         |    -2.27 | horvy, motm, SLIGHT, Sonic, stanislaw    |
|           35 |     2096 | 2024-04-08 | Virtus.pro       | L   | 0.726      | -            | -                | -                | -         |    -0.30 | horvy, motm, SLIGHT, Sonic, stanislaw    |
|           34 |     2336 | 2024-03-27 | Mythic           | W   | 0.651      | -            | -                | -                | -         |     6.84 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           33 |     2339 | 2024-03-27 | Mythic           | W   | 0.651      | -            | -                | -                | -         |     7.20 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           32 |     2375 | 2024-03-26 | LAG              | W   | 0.645      | -            | -                | -                | -         |     8.16 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           31 |     2379 | 2024-03-26 | LAG              | L   | 0.645      | -            | -                | -                | -         |   -12.46 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           30 |     2575 | 2024-03-14 | Take Flyte       | W   | 0.564      | -            | -                | -                | -         |     4.26 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           29 |     2577 | 2024-03-14 | Take Flyte       | W   | 0.564      | -            | -                | -                | -         |     4.42 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           28 |     2601 | 2024-03-13 | M80              | W   | 0.558      | 0.477        | 0.205 (0.055)    | 0.666 (0.177)    | -         |    14.68 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           27 |     2603 | 2024-03-13 | M80              | L   | 0.558      | -            | -                | -                | -         |    -2.85 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           26 |     2649 | 2024-03-12 | Mythic           | L   | 0.551      | -            | -                | -                | -         |   -11.82 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           25 |     2882 | 2024-03-03 | M80              | L   | 0.489      | -            | -                | -                | -         |    -2.57 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           24 |     2902 | 2024-03-02 | BESTIA           | W   | 0.483      | -            | -                | -                | 1 (0.483) |     8.71 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           23 |     2923 | 2024-03-01 | RED Canids       | L   | 0.477      | -            | -                | -                | -         |    -4.02 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           22 |     3003 | 2024-02-25 | Liquid           | L   | 0.445      | -            | -                | -                | -         |    -0.33 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           21 |     3008 | 2024-02-25 | BOSS             | L   | 0.444      | -            | -                | -                | -         |    -9.65 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           20 |     3026 | 2024-02-24 | NRG              | W   | 0.438      | -            | -                | -                | -         |     5.32 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           19 |     3027 | 2024-02-24 | Party Astronauts | W   | 0.438      | -            | -                | -                | -         |     6.86 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           18 |     3038 | 2024-02-24 | OMiT             | W   | 0.437      | -            | -                | -                | -         |     3.81 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           17 |     3075 | 2024-02-22 | NRG              | L   | 0.424      | -            | -                | -                | -         |    -8.29 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           16 |     3424 | 2024-02-04 | Elevate          | L   | 0.305      | -            | -                | -                | -         |    -5.92 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           15 |     3448 | 2024-02-03 | Nouns            | W   | 0.298      | -            | -                | -                | -         |     4.41 | Infinite, JBa, motm, SLIGHT, stanislaw   |
|           14 |     3481 | 2024-02-02 | NRG              | W   | 0.291      | -            | -                | -                | -         |     3.36 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           13 |     3486 | 2024-02-02 | Carpe Diem       | W   | 0.290      | -            | -                | -                | -         |     2.33 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           12 |     3750 | 2024-01-20 | M80              | L   | 0.204      | -            | -                | -                | -         |    -1.02 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           11 |     3794 | 2024-01-19 | Liquid           | L   | 0.198      | -            | -                | -                | -         |    -0.14 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           10 |     3799 | 2024-01-19 | M80              | W   | 0.198      | -            | -                | -                | -         |     5.28 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            9 |     3856 | 2024-01-18 | Nouns            | W   | 0.192      | -            | -                | -                | -         |     2.98 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            8 |     3859 | 2024-01-18 | NRG              | W   | 0.191      | -            | -                | -                | -         |     2.27 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            7 |     3861 | 2024-01-18 | MIGHT            | W   | 0.191      | -            | -                | -                | -         |     0.57 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            6 |     3908 | 2024-01-17 | Mythic           | W   | 0.184      | -            | -                | -                | -         |     2.06 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            5 |     3962 | 2024-01-16 | Liquid           | L   | 0.177      | -            | -                | -                | -         |    -0.11 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            4 |     4013 | 2024-01-15 | ex-CatEvil       | W   | 0.171      | -            | -                | -                | -         |     0.22 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            3 |     4056 | 2024-01-13 | M80              | W   | 0.159      | -            | -                | -                | -         |     4.30 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            2 |     4103 | 2024-01-12 | BOSS             | W   | 0.152      | -            | -                | -                | -         |     1.68 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            1 |     4106 | 2024-01-12 | vagrants         | W   | 0.152      | -            | -                | -                | -         |     0.20 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($20,569.62)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $2,500.00      | $2,500.00       |
| 2024-06-09 |      1.000 | $15,000.00     | $15,000.00      |
| 2024-04-14 |      0.767 | $4,000.00      | $3,069.62       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
