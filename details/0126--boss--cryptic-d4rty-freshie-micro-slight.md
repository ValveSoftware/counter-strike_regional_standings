### Roster Details<br />
Team Name: BOSS<br />
Roster: Cryptic, d4rty, freshie, micro, SLIGHT<br />
Global Rank: [126](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [33]( ../standings_americas.md)<br />
<br />
Final Rank Value:  783.9<br />
<br />
Final Rank Value (783.9) = Starting Rank Value (793.8) + Head To Head Adjustments (-9.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.346[<sup>1</sup>](#table2)
- Bounty Collected: 0.303[<sup>2</sup>](#table1)
- Opponent Network: 0.139[<sup>2</sup>](#table1)
- LAN Wins: 0.010[<sup>2</sup>](#table1)

The average of these factors is 0.200<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 793.8
- 400 + ( ( 0.200 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 793.8


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
|           62 |       61 | 2024-08-12 | FLUFFY AIMERS     | W   | 1.000      | 0.371        | -                | 0.373 (0.138)    | 0 (0.000) |    13.32 | Cryptic, d4rty, freshie, micro, SLIGHT   |
|           61 |      257 | 2024-08-06 | Take Flyte        | L   | 1.000      | -            | -                | -                | -         |   -21.47 | Cryptic, d4rty, freshie, micro, SLIGHT   |
|           60 |      261 | 2024-08-06 | Take Flyte        | W   | 1.000      | 0.477        | -                | 0.244 (0.117)    | 0 (0.000) |     9.59 | Cryptic, d4rty, freshie, micro, SLIGHT   |
|           59 |      357 | 2024-08-03 | NRG               | L   | 1.000      | -            | -                | -                | -         |    -8.06 | Cryptic, d4rty, freshie, micro, SLIGHT   |
|           58 |      464 | 2024-07-31 | NRG               | L   | 1.000      | -            | -                | -                | -         |    -8.64 | Cryptic, d4rty, freshie, micro, SLIGHT   |
|           57 |      468 | 2024-07-31 | NRG               | L   | 1.000      | -            | -                | -                | -         |    -9.28 | Cryptic, d4rty, freshie, micro, SLIGHT   |
|           56 |      514 | 2024-07-30 | Nouns             | L   | 1.000      | -            | -                | -                | -         |    -8.08 | Cryptic, d4rty, freshie, micro, SLIGHT   |
|           55 |      516 | 2024-07-30 | Nouns             | L   | 1.000      | -            | -                | -                | -         |    -8.65 | Cryptic, d4rty, freshie, micro, SLIGHT   |
|           54 |      835 | 2024-07-20 | NRG               | L   | 1.000      | -            | -                | -                | -         |    -9.32 | Cryptic, d4rty, freshie, micro, SLIGHT   |
|           53 |      904 | 2024-07-18 | Elevate           | W   | 1.000      | 0.477        | 0.027 (0.013)    | 0.536 (0.256)    | 0 (0.000) |    21.06 | Cryptic, d4rty, freshie, micro, SLIGHT   |
|           52 |      906 | 2024-07-18 | Elevate           | L   | 1.000      | -            | -                | -                | -         |   -10.03 | Cryptic, d4rty, freshie, micro, SLIGHT   |
|           51 |      966 | 2024-07-17 | LAG               | W   | 1.000      | 0.477        | 0.011 (0.005)    | 0.337 (0.161)    | 0 (0.000) |    16.10 | Cryptic, d4rty, freshie, micro, SLIGHT   |
|           50 |      973 | 2024-07-17 | LAG               | W   | 1.000      | 0.477        | 0.011 (0.005)    | 0.337 (0.161)    | 0 (0.000) |    17.58 | Cryptic, d4rty, freshie, micro, SLIGHT   |
|           49 |     1084 | 2024-07-15 | Mythic            | W   | 1.000      | 0.477        | 0.009 (0.004)    | 0.311 (0.148)    | 0 (0.000) |    15.49 | Cryptic, d4rty, freshie, micro, SLIGHT   |
|           48 |     1087 | 2024-07-15 | Mythic            | W   | 1.000      | 0.477        | 0.009 (0.004)    | 0.311 (0.148)    | 0 (0.000) |    16.93 | Cryptic, d4rty, freshie, micro, SLIGHT   |
|           47 |     1344 | 2024-06-15 | Elevate           | L   | 0.802      | -            | -                | -                | -         |    -6.27 | Cryptic, d4rty, freshie, Momo, Pluto     |
|           46 |     1399 | 2024-06-14 | Final Form        | W   | 0.793      | -            | -                | -                | 0 (0.000) |     5.85 | Cryptic, d4rty, freshie, Momo, Pluto     |
|           45 |     1830 | 2024-06-04 | Mythic            | L   | 0.728      | -            | -                | -                | -         |   -10.24 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           44 |     2141 | 2024-05-22 | Phoenix           | W   | 0.642      | 0.477        | -                | 0.287 (0.088)    | 0 (0.000) |     9.66 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           43 |     2144 | 2024-05-22 | Phoenix           | L   | 0.641      | -            | -                | -                | -         |   -10.78 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           42 |     2226 | 2024-05-20 | Limitless         | L   | 0.628      | -            | -                | -                | -         |    -9.97 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           41 |     2230 | 2024-05-20 | Limitless         | W   | 0.628      | -            | -                | -                | -         |    10.02 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           40 |     2261 | 2024-05-19 | M80               | L   | 0.621      | -            | -                | -                | -         |    -1.67 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           39 |     2263 | 2024-05-19 | M80               | L   | 0.621      | -            | -                | -                | -         |    -1.70 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           38 |     2324 | 2024-05-17 | NRG               | L   | 0.607      | -            | -                | -                | -         |    -6.00 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           37 |     2387 | 2024-05-15 | Wildcard          | L   | 0.595      | -            | -                | -                | -         |    -6.07 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           36 |     2398 | 2024-05-15 | Wildcard          | L   | 0.595      | -            | -                | -                | -         |    -6.35 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           35 |     2449 | 2024-05-14 | MIGHT             | W   | 0.588      | -            | -                | -                | -         |     3.23 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           34 |     2455 | 2024-05-14 | MIGHT             | W   | 0.588      | -            | -                | -                | -         |     3.33 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           33 |     2543 | 2024-05-11 | Phoenix           | L   | 0.567      | -            | -                | -                | -         |   -10.62 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           32 |     2545 | 2024-05-11 | Party Astronauts  | W   | 0.567      | 0.270        | 0.038 (0.006)    | 0.494 (0.076)    | -         |    11.93 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           31 |     2549 | 2024-05-11 | NRG               | L   | 0.567      | -            | -                | -                | -         |    -7.03 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           30 |     2586 | 2024-05-09 | Nouns             | L   | 0.555      | -            | -                | -                | -         |    -5.62 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           29 |     2591 | 2024-05-09 | Nouns             | L   | 0.555      | -            | -                | -                | -         |    -5.87 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           28 |     2706 | 2024-05-03 | Ninjas in Pyjamas | L   | 0.513      | -            | -                | -                | -         |    -0.31 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           27 |     2745 | 2024-05-02 | FlyQuest          | L   | 0.505      | -            | -                | -                | -         |    -2.52 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           26 |     2766 | 2024-05-01 | BIG               | L   | 0.498      | -            | -                | -                | -         |    -1.08 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           25 |     2911 | 2024-04-24 | Mythic            | L   | 0.455      | -            | -                | -                | -         |    -8.37 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           24 |     2912 | 2024-04-24 | Mythic            | W   | 0.455      | 0.477        | 0.009 (0.002)    | -                | -         |     6.07 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           23 |     3241 | 2024-04-11 | Limitless         | W   | 0.368      | -            | -                | -                | -         |     3.22 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           22 |     3245 | 2024-04-11 | Limitless         | W   | 0.368      | -            | -                | -                | -         |     3.31 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           21 |     3271 | 2024-04-10 | NRG               | L   | 0.362      | -            | -                | -                | -         |    -4.92 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           20 |     3276 | 2024-04-10 | NRG               | W   | 0.361      | 0.477        | 0.031 (0.005)    | 0.580 (0.100)    | -         |     6.61 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           19 |     3329 | 2024-04-09 | LAG               | W   | 0.355      | 0.477        | 0.011 (0.002)    | -                | -         |     5.99 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           18 |     3332 | 2024-04-09 | LAG               | W   | 0.355      | -            | -                | -                | -         |     6.18 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           17 |     3462 | 2024-04-04 | FLUFFY AIMERS     | W   | 0.321      | -            | -                | -                | -         |     4.29 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           16 |     3468 | 2024-04-04 | FLUFFY AIMERS     | W   | 0.321      | -            | -                | -                | -         |     4.40 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           15 |     3511 | 2024-04-03 | Party Astronauts  | L   | 0.315      | -            | -                | -                | -         |    -8.14 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           14 |     3554 | 2024-04-02 | Nouns             | L   | 0.309      | -            | -                | -                | -         |    -3.27 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           13 |     3559 | 2024-04-02 | Phoenix           | W   | 0.307      | -            | -                | -                | -         |     3.95 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           12 |     3635 | 2024-03-27 | Take Flyte        | W   | 0.269      | -            | -                | -                | -         |     3.33 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           11 |     3639 | 2024-03-27 | Take Flyte        | L   | 0.268      | -            | -                | -                | -         |    -5.22 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           10 |     3681 | 2024-03-26 | Elevate           | L   | 0.262      | -            | -                | -                | -         |    -2.16 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            9 |     3688 | 2024-03-26 | Elevate           | L   | 0.262      | -            | -                | -                | -         |    -2.20 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            8 |     3764 | 2024-03-20 | Party Astronauts  | L   | 0.222      | -            | -                | -                | -         |    -2.35 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            7 |     3768 | 2024-03-20 | Party Astronauts  | L   | 0.222      | -            | -                | -                | -         |    -2.39 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            6 |     4200 | 2024-03-03 | Liquid            | L   | 0.106      | -            | -                | -                | -         |    -0.02 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            5 |     4217 | 2024-03-02 | Complexity        | L   | 0.099      | -            | -                | -                | -         |    -0.03 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            4 |     4232 | 2024-03-01 | MIBR              | W   | 0.093      | 0.143        | 0.204 (0.003)    | -                | 1 (0.093) |     2.84 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            3 |     4300 | 2024-02-26 | Liquid            | L   | 0.067      | -            | -                | -                | -         |    -0.01 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            2 |     4313 | 2024-02-25 | Nouns             | L   | 0.062      | -            | -                | -                | -         |    -0.70 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            1 |     4316 | 2024-02-25 | Wildcard          | W   | 0.061      | -            | -                | -                | -         |     1.25 | brett, Cryptic, d4rty, freshie, PwnAlone |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,133.56)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.808 | $750.00        | $606.34         |
| 2024-06-09 |      0.762 | $2,000.00      | $1,523.51       |
| 2024-05-12 |      0.572 | $3,500.00      | $2,003.71       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
