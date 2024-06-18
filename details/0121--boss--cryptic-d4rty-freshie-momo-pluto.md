### Roster Details<br />
Team Name: BOSS<br />
Roster: Cryptic, d4rty, freshie, Momo, Pluto<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [121](../standings_global.md)<br />
Regional Rank: [31]( ../standings_americas.md)<br />
Final Rank Value:  805.7<br />
<br />
Final Rank Value (805.7) = Starting Rank Value (847.6) + Head To Head Adjustments (-41.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.374[<sup>1</sup>](#table2)
- Bounty Collected: 0.323[<sup>2</sup>](#table1)
- Opponent Network: 0.135[<sup>2</sup>](#table1)
- LAN Wins: 0.050[<sup>2</sup>](#table1)

The average of these factors is 0.220<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 847.6
- 400 + ( ( 0.220 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 847.6


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
|           56 |       33 | 2024-06-15 | Elevate           | L   | 1.000      | -            | -                | -                | -         |    -8.14 | Cryptic, d4rty, freshie, Momo, Pluto     |
|           55 |       88 | 2024-06-14 | Snakes Den        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.45 | Cryptic, d4rty, freshie, Momo, Pluto     |
|           54 |      519 | 2024-06-04 | Mythic            | L   | 1.000      | -            | -                | -                | -         |   -12.43 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           53 |      832 | 2024-05-22 | Take Flyte        | W   | 1.000      | 0.477        | -                | 0.306 (0.146)    | 0 (0.000) |    15.86 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           52 |      835 | 2024-05-22 | Take Flyte        | L   | 1.000      | -            | -                | -                | -         |   -15.63 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           51 |      917 | 2024-05-20 | Carpe Diem        | L   | 1.000      | -            | -                | -                | -         |   -16.25 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           50 |      921 | 2024-05-20 | Carpe Diem        | W   | 1.000      | 0.477        | 0.007 (0.003)    | 0.278 (0.133)    | 0 (0.000) |    15.21 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           49 |      952 | 2024-05-19 | M80               | L   | 1.000      | -            | -                | -                | -         |    -2.64 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           48 |      954 | 2024-05-19 | M80               | L   | 1.000      | -            | -                | -                | -         |    -2.72 | Cryptic, d4rty, freshie, Pluto, PwnAlone |
|           47 |     1015 | 2024-05-17 | NRG               | L   | 0.991      | -            | -                | -                | -         |    -8.42 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           46 |     1078 | 2024-05-15 | Wildcard          | L   | 0.978      | -            | -                | -                | -         |    -9.18 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           45 |     1089 | 2024-05-15 | Wildcard          | L   | 0.978      | -            | -                | -                | -         |    -9.88 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           44 |     1140 | 2024-05-14 | MIGHT             | W   | 0.971      | -            | -                | -                | 0 (0.000) |     5.25 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           43 |     1146 | 2024-05-14 | MIGHT             | W   | 0.971      | -            | -                | -                | 0 (0.000) |     5.52 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           42 |     1234 | 2024-05-11 | Take Flyte        | L   | 0.950      | -            | -                | -                | -         |   -17.56 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           41 |     1236 | 2024-05-11 | Party Astronauts  | W   | 0.950      | 0.270        | 0.055 (0.014)    | 0.600 (0.154)    | 0 (0.000) |    20.02 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           40 |     1240 | 2024-05-11 | NRG               | L   | 0.950      | -            | -                | -                | -         |   -11.37 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           39 |     1277 | 2024-05-09 | Nouns             | L   | 0.938      | -            | -                | -                | -         |    -8.40 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           38 |     1282 | 2024-05-09 | Nouns             | L   | 0.938      | -            | -                | -                | -         |    -9.00 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           37 |     1397 | 2024-05-03 | Ninjas in Pyjamas | L   | 0.896      | -            | -                | -                | -         |    -0.40 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           36 |     1436 | 2024-05-02 | FlyQuest          | L   | 0.888      | -            | -                | -                | -         |    -1.40 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           35 |     1457 | 2024-05-01 | BIG               | L   | 0.881      | -            | -                | -                | -         |    -1.41 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           34 |     1602 | 2024-04-24 | Mythic            | L   | 0.838      | -            | -                | -                | -         |   -15.56 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           33 |     1603 | 2024-04-24 | Mythic            | W   | 0.838      | 0.477        | 0.013 (0.005)    | 0.377 (0.151)    | 0 (0.000) |    10.82 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           32 |     1932 | 2024-04-11 | Limitless         | W   | 0.751      | 0.477        | -                | 0.227 (0.081)    | 0 (0.000) |     5.77 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           31 |     1936 | 2024-04-11 | Limitless         | W   | 0.751      | -            | -                | -                | 0 (0.000) |     6.07 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           30 |     1962 | 2024-04-10 | NRG               | L   | 0.745      | -            | -                | -                | -         |   -10.49 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           29 |     1967 | 2024-04-10 | NRG               | W   | 0.744      | 0.477        | 0.024 (0.008)    | 0.507 (0.180)    | -         |    13.25 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           28 |     2020 | 2024-04-09 | LAG               | W   | 0.738      | 0.477        | 0.021 (0.007)    | 0.421 (0.148)    | -         |    12.87 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           27 |     2023 | 2024-04-09 | LAG               | W   | 0.738      | 0.477        | 0.021 (0.007)    | 0.421 (0.148)    | -         |    13.72 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           26 |     2153 | 2024-04-04 | FLUFFY AIMERS     | W   | 0.704      | 0.477        | 0.016 (0.005)    | 0.311 (0.105)    | -         |    10.97 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           25 |     2159 | 2024-04-04 | FLUFFY AIMERS     | W   | 0.704      | 0.477        | 0.016 (0.005)    | 0.311 (0.104)    | -         |    11.68 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           24 |     2202 | 2024-04-03 | Party Astronauts  | L   | 0.698      | -            | -                | -                | -         |   -18.31 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           23 |     2245 | 2024-04-02 | Nouns             | L   | 0.692      | -            | -                | -                | -         |    -5.73 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           22 |     2250 | 2024-04-02 | Take Flyte        | W   | 0.690      | -            | -                | -                | -         |     9.03 | Cryptic, d4rty, FaNg, freshie, PwnAlone  |
|           21 |     2327 | 2024-03-27 | One More          | W   | 0.652      | -            | -                | -                | -         |     7.42 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           20 |     2331 | 2024-03-27 | One More          | L   | 0.651      | -            | -                | -                | -         |   -13.46 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           19 |     2373 | 2024-03-26 | Elevate           | L   | 0.645      | -            | -                | -                | -         |    -8.01 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           18 |     2380 | 2024-03-26 | Elevate           | L   | 0.645      | -            | -                | -                | -         |    -8.46 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           17 |     2456 | 2024-03-20 | Party Astronauts  | L   | 0.605      | -            | -                | -                | -         |    -5.84 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           16 |     2460 | 2024-03-20 | Party Astronauts  | L   | 0.605      | -            | -                | -                | -         |    -6.12 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           15 |     2892 | 2024-03-03 | Liquid            | L   | 0.489      | -            | -                | -                | -         |    -0.20 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           14 |     2909 | 2024-03-02 | Complexity        | L   | 0.482      | -            | -                | -                | -         |    -0.08 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           13 |     2924 | 2024-03-01 | MIBR              | W   | 0.476      | 0.143        | 0.281 (0.019)    | -                | 1 (0.476) |    14.79 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           12 |     2992 | 2024-02-26 | Liquid            | L   | 0.451      | -            | -                | -                | -         |    -0.16 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           11 |     3005 | 2024-02-25 | Nouns             | L   | 0.445      | -            | -                | -                | -         |    -4.72 | brett, Cryptic, d4rty, freshie, PwnAlone |
|           10 |     3008 | 2024-02-25 | Wildcard          | W   | 0.444      | 0.143        | 0.068 (0.004)    | -                | -         |     9.65 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            9 |     3509 | 2024-02-01 | Nouns             | L   | 0.285      | -            | -                | -                | -         |    -3.10 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            8 |     3511 | 2024-02-01 | Rocket            | W   | 0.285      | -            | -                | -                | -         |     1.39 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            7 |     3516 | 2024-02-01 | Elevate           | L   | 0.284      | -            | -                | -                | -         |    -3.97 | brett, Cryptic, d4rty, freshie, PwnAlone |
|            6 |     3793 | 2024-01-19 | M80               | L   | 0.199      | -            | -                | -                | -         |    -0.53 | brett, Cryptic, cynic, d4rty, freshie    |
|            5 |     3804 | 2024-01-19 | Liquid            | L   | 0.197      | -            | -                | -                | -         |    -0.07 | brett, Cryptic, cynic, d4rty, freshie    |
|            4 |     4040 | 2024-01-14 | Rocket            | W   | 0.165      | -            | -                | -                | -         |     0.76 | brett, Cryptic, cynic, d4rty, freshie    |
|            3 |     4063 | 2024-01-13 | Akimbo            | W   | 0.158      | -            | -                | -                | -         |     1.54 | brett, Cryptic, cynic, d4rty, freshie    |
|            2 |     4103 | 2024-01-12 | Wildcard          | L   | 0.152      | -            | -                | -                | -         |    -1.68 | brett, Cryptic, cynic, d4rty, freshie    |
|            1 |     4105 | 2024-01-12 | For Fun           | W   | 0.152      | -            | -                | -                | -         |     1.40 | brett, Cryptic, cynic, d4rty, freshie    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,344.35)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-06-09 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-05-12 |      0.956 | $3,500.00      | $3,344.35       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
