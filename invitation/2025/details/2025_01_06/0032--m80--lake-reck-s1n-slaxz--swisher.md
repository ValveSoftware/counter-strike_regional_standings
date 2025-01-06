### Roster Details<br />
Team Name: M80<br />
Roster: Lake, reck, s1n, slaxz-, Swisher<br />
Global Rank: [32](../../standings_global_2025_01_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_06.md)<br />
Regional Rank: [9]( ../../standings_americas_2025_01_06.md)<br />
<br />
Final Rank Value:  1194.1<br />
<br />
Final Rank Value (1194.1) = Starting Rank Value (1188.3) + Head To Head Adjustments (5.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.541[<sup>1</sup>](#table2)
- Bounty Collected: 0.410[<sup>2</sup>](#table1)
- Opponent Network: 0.149[<sup>2</sup>](#table1)
- LAN Wins: 0.495[<sup>2</sup>](#table1)

The average of these factors is 0.399<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1188.3
- 400 + ( ( 0.399 - 0.000 ) / ( 0.809 - 0.000 ) ) * 1600 = 1188.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           52 |      745 | 2024-11-15 | FURIA            | L   | 0.853      | -            | -                | -                | -         |    -2.75 | Lake, reck, s1n, slaxz-, Swisher |
|           51 |      761 | 2024-11-14 | BESTIA           | W   | 0.850      | 0.143        | 0.103 (0.012)    | -                | 1 (0.850) |    11.38 | Lake, reck, s1n, slaxz-, Swisher |
|           50 |      802 | 2024-11-14 | Complexity       | L   | 0.844      | -            | -                | -                | -         |    -6.49 | Lake, reck, s1n, slaxz-, Swisher |
|           49 |      837 | 2024-11-12 | Legacy           | W   | 0.837      | -            | -                | -                | 1 (0.837) |    10.00 | Lake, reck, s1n, slaxz-, Swisher |
|           48 |      851 | 2024-11-12 | RED Canids       | W   | 0.832      | -            | -                | -                | 1 (0.832) |     9.09 | Lake, reck, s1n, slaxz-, Swisher |
|           47 |      869 | 2024-11-11 | BOSS             | L   | 0.831      | -            | -                | -                | -         |   -17.06 | Lake, reck, s1n, slaxz-, Swisher |
|           46 |     1215 | 2024-10-25 | BESTIA           | L   | 0.715      | -            | -                | -                | -         |   -13.68 | Lake, reck, s1n, slaxz-, Swisher |
|           45 |     1235 | 2024-10-24 | Aurora           | W   | 0.707      | 0.477        | 0.056 (0.019)    | -                | 0 (0.000) |     4.64 | Lake, reck, s1n, slaxz-, Swisher |
|           44 |     1238 | 2024-10-24 | BESTIA           | L   | 0.706      | -            | -                | -                | -         |   -14.07 | Lake, reck, s1n, slaxz-, Swisher |
|           43 |     1276 | 2024-10-20 | NRG              | W   | 0.682      | 0.477        | 0.115 (0.037)    | 0.575 (0.187)    | 0 (0.000) |     9.79 | Lake, reck, s1n, slaxz-, Swisher |
|           42 |     1356 | 2024-10-17 | Legacy           | W   | 0.663      | 0.477        | 0.040 (0.013)    | 0.432 (0.137)    | -         |     8.00 | Lake, reck, s1n, slaxz-, Swisher |
|           41 |     1387 | 2024-10-16 | NRG              | W   | 0.656      | 0.477        | 0.115 (0.036)    | 0.575 (0.180)    | -         |     9.43 | Lake, reck, s1n, slaxz-, Swisher |
|           40 |     1496 | 2024-10-09 | BOSS             | W   | 0.609      | 0.477        | -                | 0.426 (0.124)    | -         |     6.65 | Lake, reck, s1n, slaxz-, Swisher |
|           39 |     1502 | 2024-10-09 | BOSS             | L   | 0.609      | -            | -                | -                | -         |   -12.88 | Lake, reck, s1n, slaxz-, Swisher |
|           38 |     1535 | 2024-10-08 | Legacy           | W   | 0.603      | 0.477        | -                | 0.432 (0.124)    | -         |     7.35 | Lake, reck, s1n, slaxz-, Swisher |
|           37 |     1542 | 2024-10-08 | Legacy           | L   | 0.602      | -            | -                | -                | -         |   -11.94 | Lake, reck, s1n, slaxz-, Swisher |
|           36 |     1633 | 2024-10-05 | Wildcard         | L   | 0.581      | -            | -                | -                | -         |    -7.39 | Lake, reck, s1n, slaxz-, Swisher |
|           35 |     1667 | 2024-10-04 | BIG              | L   | 0.575      | -            | -                | -                | -         |    -5.37 | Lake, reck, s1n, slaxz-, Swisher |
|           34 |     1671 | 2024-10-04 | Wildcard         | W   | 0.574      | 0.500        | 0.133 (0.038)    | 0.507 (0.145)    | 1 (0.574) |    10.85 | Lake, reck, s1n, slaxz-, Swisher |
|           33 |     1771 | 2024-10-01 | Party Astronauts | W   | 0.556      | -            | -                | -                | -         |     3.20 | Lake, reck, s1n, slaxz-, Swisher |
|           32 |     1776 | 2024-10-01 | Party Astronauts | L   | 0.556      | -            | -                | -                | -         |   -14.59 | Lake, reck, s1n, slaxz-, Swisher |
|           31 |     1781 | 2024-10-01 | Nouns            | W   | 0.555      | 0.477        | -                | 0.587 (0.155)    | -         |     6.27 | Lake, reck, s1n, slaxz-, Swisher |
|           30 |     1785 | 2024-10-01 | Nouns            | L   | 0.555      | -            | -                | -                | -         |   -11.51 | Lake, reck, s1n, slaxz-, Swisher |
|           29 |     1819 | 2024-09-30 | Revenge Nation   | W   | 0.549      | -            | -                | -                | -         |     0.86 | Lake, reck, s1n, slaxz-, Swisher |
|           28 |     1821 | 2024-09-30 | Revenge Nation   | W   | 0.549      | -            | -                | -                | -         |     0.87 | Lake, reck, s1n, slaxz-, Swisher |
|           27 |     1868 | 2024-09-28 | Take Flyte       | W   | 0.536      | -            | -                | -                | -         |     1.15 | Lake, reck, s1n, slaxz-, Swisher |
|           26 |     1869 | 2024-09-28 | Take Flyte       | W   | 0.536      | -            | -                | -                | -         |     1.17 | Lake, reck, s1n, slaxz-, Swisher |
|           25 |     1951 | 2024-09-26 | timbermen        | W   | 0.523      | -            | -                | -                | -         |     2.07 | Lake, reck, s1n, slaxz-, Swisher |
|           24 |     1953 | 2024-09-26 | timbermen        | W   | 0.522      | -            | -                | -                | -         |     2.12 | Lake, reck, s1n, slaxz-, Swisher |
|           23 |     1999 | 2024-09-25 | NRG              | W   | 0.516      | 0.477        | 0.115 (0.028)    | 0.575 (0.142)    | -         |     8.85 | Lake, reck, s1n, slaxz-, Swisher |
|           22 |     2004 | 2024-09-25 | NRG              | L   | 0.516      | -            | -                | -                | -         |    -7.55 | Lake, reck, s1n, slaxz-, Swisher |
|           21 |     2231 | 2024-09-19 | MIBR             | L   | 0.473      | -            | -                | -                | -         |    -1.76 | Lake, reck, s1n, slaxz-, Swisher |
|           20 |     2365 | 2024-09-14 | Imperial         | W   | 0.441      | 0.889        | 0.158 (0.062)    | 0.451 (0.177)    | 1 (0.441) |     6.90 | Lake, reck, s1n, slaxz-, Swisher |
|           19 |     2463 | 2024-09-11 | fnatic           | W   | 0.421      | 0.889        | 0.189 (0.071)    | 0.326 (0.122)    | 1 (0.421) |     6.22 | Lake, reck, s1n, slaxz-, Swisher |
|           18 |     2498 | 2024-09-10 | Complexity       | W   | 0.414      | 0.889        | 0.126 (0.046)    | -                | 1 (0.414) |     9.47 | Lake, reck, s1n, slaxz-, Swisher |
|           17 |     3131 | 2024-08-22 | Falcons          | L   | 0.288      | -            | -                | -                | -         |    -6.48 | Lake, reck, s1n, slaxz-, Swisher |
|           16 |     3295 | 2024-08-18 | Wildcard         | L   | 0.262      | -            | -                | -                | -         |    -3.04 | Lake, reck, s1n, slaxz-, Swisher |
|           15 |     3310 | 2024-08-17 | undefined        | W   | 0.255      | -            | -                | -                | -         |     0.45 | Lake, reck, s1n, slaxz-, Swisher |
|           14 |     3419 | 2024-08-13 | InControl        | W   | 0.229      | -            | -                | -                | -         |     0.34 | Lake, reck, s1n, slaxz-, Swisher |
|           13 |     3460 | 2024-08-12 | Mythic           | W   | 0.223      | -            | -                | -                | -         |     0.19 | Lake, reck, s1n, slaxz-, Swisher |
|           12 |     3463 | 2024-08-12 | Mythic           | W   | 0.222      | -            | -                | -                | -         |     0.19 | Lake, reck, s1n, slaxz-, Swisher |
|           11 |     3600 | 2024-08-07 | LAG              | W   | 0.189      | -            | -                | -                | -         |     0.29 | Lake, reck, s1n, slaxz-, Swisher |
|           10 |     3602 | 2024-08-07 | LAG              | W   | 0.189      | -            | -                | -                | -         |     0.29 | Lake, reck, s1n, slaxz-, Swisher |
|            9 |     3654 | 2024-08-06 | FLUFFY AIMERS    | W   | 0.183      | -            | -                | -                | -         |     1.04 | Lake, reck, s1n, slaxz-, Swisher |
|            8 |     3657 | 2024-08-06 | FLUFFY AIMERS    | W   | 0.183      | -            | -                | -                | -         |     1.05 | Lake, reck, s1n, slaxz-, Swisher |
|            7 |     3861 | 2024-07-31 | Limitless        | W   | 0.143      | -            | -                | -                | -         |     0.20 | Lake, reck, s1n, slaxz-, Swisher |
|            6 |     3867 | 2024-07-31 | Limitless        | W   | 0.142      | -            | -                | -                | -         |     0.20 | Lake, reck, s1n, slaxz-, Swisher |
|            5 |     3911 | 2024-07-30 | E-Xolos LAZER    | W   | 0.136      | -            | -                | -                | -         |     0.31 | Lake, reck, s1n, slaxz-, Swisher |
|            4 |     3916 | 2024-07-30 | E-Xolos LAZER    | W   | 0.136      | -            | -                | -                | -         |     0.31 | Lake, reck, s1n, slaxz-, Swisher |
|            3 |     4336 | 2024-07-18 | The MongolZ      | L   | 0.053      | -            | -                | -                | -         |    -0.03 | Lake, reck, s1n, slaxz-, Swisher |
|            2 |     4349 | 2024-07-18 | Complexity       | W   | 0.052      | -            | -                | -                | 1 (0.052) |     1.19 | Lake, reck, s1n, slaxz-, Swisher |
|            1 |     4410 | 2024-07-17 | Vitality         | L   | 0.047      | -            | -                | -                | -         |    -0.04 | Lake, reck, s1n, slaxz-, Swisher |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($37,700.20)
- Divide that value by the 5th highest value among all rosters ($265,541.19)
- The final value (0.14) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.682 | $25,000.00     | $17,060.98      |
| 2024-10-06 |      0.589 | $3,000.00      | $1,766.33       |
| 2024-09-22 |      0.494 | $32,000.00     | $15,821.71      |
| 2024-08-25 |      0.308 | $5,000.00      | $1,538.13       |
| 2024-08-18 |      0.263 | $1,500.00      | $394.88         |
| 2024-07-21 |      0.075 | $15,000.00     | $1,118.18       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
