### Roster Details<br />
Team Name: BOSS<br />
Roster: Cryptic, d4rty, freshie, micro, SLIGHT<br />
Global Rank: [114](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [28]( ../standings_americas.md)<br />
<br />
Final Rank Value:  829.0<br />
<br />
Final Rank Value (829.0) = Starting Rank Value (817.1) + Head To Head Adjustments (12.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.352[<sup>1</sup>](#table2)
- Bounty Collected: 0.309[<sup>2</sup>](#table1)
- Opponent Network: 0.126[<sup>2</sup>](#table1)
- LAN Wins: 0.021[<sup>2</sup>](#table1)

The average of these factors is 0.202<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 817.1
- 400 + ( ( 0.202 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 817.1


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
|           56 |       33 | 2024-07-30 | Nouns             | L   | 1.000      | -            | -                | -                | -         |    -7.87 | Cryptic, d4rty, freshie, micro, SLIGHT   |
|           55 |       35 | 2024-07-30 | Nouns             | L   | 1.000      | -            | -                | -                | -         |    -8.41 | Cryptic, d4rty, freshie, micro, SLIGHT   |
|           54 |      354 | 2024-07-20 | NRG               | L   | 1.000      | -            | -                | -                | -         |    -9.29 | Cryptic, d4rty, freshie, micro, SLIGHT   |
|           53 |      423 | 2024-07-18 | Elevate           | W   | 1.000      | 0.477        | 0.028 (0.013)    | 0.505 (0.241)    | 0 (0.000) |    21.30 | Cryptic, d4rty, freshie, micro, SLIGHT   |
|           52 |      425 | 2024-07-18 | Elevate           | L   | 1.000      | -            | -                | -                | -         |    -9.77 | Cryptic, d4rty, freshie, micro, SLIGHT   |
|           51 |      485 | 2024-07-17 | LAG               | W   | 1.000      | 0.477        | 0.013 (0.006)    | 0.344 (0.164)    | 0 (0.000) |    16.50 | Cryptic, d4rty, freshie, micro, SLIGHT   |
|           50 |      492 | 2024-07-17 | LAG               | W   | 1.000      | 0.477        | 0.013 (0.006)    | 0.344 (0.164)    | 0 (0.000) |    18.01 | Cryptic, d4rty, freshie, micro, SLIGHT   |
|           49 |      603 | 2024-07-15 | Mythic            | W   | 1.000      | 0.477        | 0.010 (0.005)    | 0.266 (0.127)    | 0 (0.000) |    15.54 | Cryptic, d4rty, freshie, micro, SLIGHT   |
|           48 |      606 | 2024-07-15 | Mythic            | W   | 1.000      | 0.477        | 0.010 (0.005)    | 0.266 (0.127)    | 0 (0.000) |    16.97 | Cryptic, d4rty, freshie, micro, SLIGHT   |
|           47 |      863 | 2024-06-15 | Elevate           | L   | 0.895      | -            | -                | -                | -         |    -6.76 | Cryptic, d4rty, freshie, Momo, Pluto     |
|           46 |      918 | 2024-06-14 | Final Form        | W   | 0.886      | -            | -                | -                | 0 (0.000) |     6.19 | Cryptic, d4rty, freshie, Momo, Pluto     |
|           45 |     1349 | 2024-06-04 | Mythic            | L   | 0.822      | -            | -                | -                | -         |   -11.56 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           44 |     1660 | 2024-05-22 | Perseverance      | W   | 0.735      | 0.477        | -                | 0.248 (0.087)    | 0 (0.000) |    11.03 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           43 |     1663 | 2024-05-22 | Perseverance      | L   | 0.735      | -            | -                | -                | -         |   -12.36 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           42 |     1745 | 2024-05-20 | Limitless         | L   | 0.721      | -            | -                | -                | -         |   -11.35 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           41 |     1749 | 2024-05-20 | Limitless         | W   | 0.721      | -            | -                | -                | 0 (0.000) |    11.58 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           40 |     1780 | 2024-05-19 | M80               | L   | 0.714      | -            | -                | -                | -         |    -1.53 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           39 |     1782 | 2024-05-19 | M80               | L   | 0.714      | -            | -                | -                | -         |    -1.55 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           38 |     1843 | 2024-05-17 | NRG               | L   | 0.701      | -            | -                | -                | -         |    -7.02 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           37 |     1906 | 2024-05-15 | Wildcard          | L   | 0.688      | -            | -                | -                | -         |    -7.15 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           36 |     1917 | 2024-05-15 | Wildcard          | L   | 0.688      | -            | -                | -                | -         |    -7.55 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           35 |     1968 | 2024-05-14 | MIGHT             | W   | 0.681      | -            | -                | -                | 0 (0.000) |     3.65 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           34 |     1974 | 2024-05-14 | MIGHT             | W   | 0.681      | -            | -                | -                | -         |     3.77 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           33 |     2062 | 2024-05-11 | Perseverance      | L   | 0.660      | -            | -                | -                | -         |   -12.51 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           32 |     2064 | 2024-05-11 | Party Astronauts  | W   | 0.660      | 0.270        | 0.042 (0.007)    | 0.532 (0.095)    | -         |    14.08 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           31 |     2068 | 2024-05-11 | NRG               | L   | 0.660      | -            | -                | -                | -         |    -8.65 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           30 |     2105 | 2024-05-09 | Nouns             | L   | 0.648      | -            | -                | -                | -         |    -6.50 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           29 |     2110 | 2024-05-09 | Nouns             | L   | 0.648      | -            | -                | -                | -         |    -6.84 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           28 |     2225 | 2024-05-03 | Ninjas in Pyjamas | L   | 0.606      | -            | -                | -                | -         |    -0.32 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           27 |     2264 | 2024-05-02 | FlyQuest          | L   | 0.598      | -            | -                | -                | -         |    -2.07 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           26 |     2285 | 2024-05-01 | BIG               | L   | 0.591      | -            | -                | -                | -         |    -1.88 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           25 |     2430 | 2024-04-24 | Mythic            | L   | 0.548      | -            | -                | -                | -         |   -10.53 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           24 |     2431 | 2024-04-24 | Mythic            | W   | 0.548      | -            | -                | -                | -         |     6.83 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           23 |     2760 | 2024-04-11 | Limitless         | W   | 0.462      | -            | -                | -                | -         |     3.84 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           22 |     2764 | 2024-04-11 | Limitless         | W   | 0.461      | -            | -                | -                | -         |     3.97 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           21 |     2790 | 2024-04-10 | NRG               | L   | 0.455      | -            | -                | -                | -         |    -6.72 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           20 |     2795 | 2024-04-10 | NRG               | W   | 0.455      | 0.477        | 0.020 (0.004)    | 0.519 (0.112)    | -         |     7.78 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           19 |     2848 | 2024-04-09 | LAG               | W   | 0.448      | 0.477        | 0.013 (0.003)    | 0.344 (0.073)    | -         |     7.83 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           18 |     2851 | 2024-04-09 | LAG               | W   | 0.448      | 0.477        | 0.013 (0.003)    | 0.344 (0.073)    | -         |     8.14 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           17 |     2981 | 2024-04-04 | FLUFFY AIMERS     | W   | 0.415      | -            | -                | -                | -         |     5.75 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           16 |     2987 | 2024-04-04 | FLUFFY AIMERS     | W   | 0.414      | -            | -                | -                | -         |     5.96 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           15 |     3030 | 2024-04-03 | Party Astronauts  | L   | 0.408      | -            | -                | -                | -         |   -10.67 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           14 |     3073 | 2024-04-02 | Nouns             | L   | 0.402      | -            | -                | -                | -         |    -4.25 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           13 |     3078 | 2024-04-02 | Perseverance      | W   | 0.401      | -            | -                | -                | -         |     5.02 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           12 |     3154 | 2024-03-27 | Take Flyte        | W   | 0.362      | -            | -                | -                | -         |     4.23 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           11 |     3158 | 2024-03-27 | Take Flyte        | L   | 0.362      | -            | -                | -                | -         |    -7.32 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           10 |     3200 | 2024-03-26 | Elevate           | L   | 0.355      | -            | -                | -                | -         |    -2.82 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            9 |     3207 | 2024-03-26 | Elevate           | L   | 0.355      | -            | -                | -                | -         |    -2.89 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            8 |     3283 | 2024-03-20 | Party Astronauts  | L   | 0.315      | -            | -                | -                | -         |    -3.20 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            7 |     3287 | 2024-03-20 | Party Astronauts  | L   | 0.315      | -            | -                | -                | -         |    -3.28 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            6 |     3719 | 2024-03-03 | Liquid            | L   | 0.199      | -            | -                | -                | -         |    -0.18 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            5 |     3736 | 2024-03-02 | Complexity        | L   | 0.192      | -            | -                | -                | -         |    -0.06 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            4 |     3751 | 2024-03-01 | MIBR              | W   | 0.187      | 0.143        | 0.202 (0.005)    | -                | 1 (0.187) |     5.70 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            3 |     3819 | 2024-02-26 | Liquid            | L   | 0.161      | -            | -                | -                | -         |    -0.14 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            2 |     3832 | 2024-02-25 | Nouns             | L   | 0.155      | -            | -                | -                | -         |    -1.78 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            1 |     3835 | 2024-02-25 | Wildcard          | W   | 0.154      | -            | -                | -                | -         |     3.04 | brett, Cryptic, d4rty, freshie, PwnAlone |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,716.34)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.902 | $750.00        | $676.27         |
| 2024-06-09 |      0.855 | $2,000.00      | $1,710.00       |
| 2024-05-12 |      0.666 | $3,500.00      | $2,330.06       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
