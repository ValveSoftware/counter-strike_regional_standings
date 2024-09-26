### Roster Details<br />
Team Name: M80<br />
Roster: Lake, reck, s1n, slaxz-, Swisher<br />
Global Rank: [22](../../standings_global_2024_09_26.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_09_26.md)<br />
Regional Rank: [7]( ../../standings_americas_2024_09_26.md)<br />
<br />
Final Rank Value:  1300.6<br />
<br />
Final Rank Value (1300.6) = Starting Rank Value (1286.4) + Head To Head Adjustments (14.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.605[<sup>1</sup>](#table2)
- Bounty Collected: 0.511[<sup>2</sup>](#table1)
- Opponent Network: 0.306[<sup>2</sup>](#table1)
- LAN Wins: 0.454[<sup>2</sup>](#table1)

The average of these factors is 0.469<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1286.4
- 400 + ( ( 0.469 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 1286.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           62 |       24 | 2024-09-25 | NRG              | W   | 1.000      | 0.477        | 0.035 (0.017)    | 0.631 (0.301)    | 0 (0.000) |     8.74 | Lake, reck, s1n, slaxz-, Swisher        |
|           61 |       29 | 2024-09-25 | NRG              | L   | 1.000      | -            | -                | -                | -         |   -23.29 | Lake, reck, s1n, slaxz-, Swisher        |
|           60 |      256 | 2024-09-19 | MIBR             | L   | 1.000      | -            | -                | -                | -         |   -13.44 | Lake, reck, s1n, slaxz-, Swisher        |
|           59 |      390 | 2024-09-14 | Imperial         | W   | 1.000      | 0.889        | 0.158 (0.141)    | 0.606 (0.538)    | 1 (1.000) |    12.60 | Lake, reck, s1n, slaxz-, Swisher        |
|           58 |      488 | 2024-09-11 | fnatic           | W   | 1.000      | 0.889        | 0.248 (0.220)    | 0.616 (0.547)    | 1 (1.000) |    13.54 | Lake, reck, s1n, slaxz-, Swisher        |
|           57 |      523 | 2024-09-10 | Complexity       | W   | 1.000      | 0.889        | 0.321 (0.285)    | 0.426 (0.379)    | 1 (1.000) |    25.80 | Lake, reck, s1n, slaxz-, Swisher        |
|           56 |     1156 | 2024-08-22 | Falcons          | L   | 0.968      | -            | -                | -                | -         |    -8.52 | Lake, reck, s1n, slaxz-, Swisher        |
|           55 |     1320 | 2024-08-18 | Wildcard         | L   | 0.942      | -            | -                | -                | -         |   -23.19 | Lake, reck, s1n, slaxz-, Swisher        |
|           54 |     1335 | 2024-08-17 | undefined        | W   | 0.935      | -            | -                | -                | 0 (0.000) |     1.43 | Lake, reck, s1n, slaxz-, Swisher        |
|           53 |     1444 | 2024-08-13 | InControl        | W   | 0.908      | -            | -                | -                | 0 (0.000) |     0.83 | Lake, reck, s1n, slaxz-, Swisher        |
|           52 |     1485 | 2024-08-12 | Mythic           | W   | 0.903      | -            | -                | -                | -         |     1.07 | Lake, reck, s1n, slaxz-, Swisher        |
|           51 |     1488 | 2024-08-12 | Mythic           | W   | 0.902      | -            | -                | -                | -         |     1.08 | Lake, reck, s1n, slaxz-, Swisher        |
|           50 |     1625 | 2024-08-07 | LAG              | W   | 0.869      | -            | -                | -                | -         |     0.62 | Lake, reck, s1n, slaxz-, Swisher        |
|           49 |     1627 | 2024-08-07 | LAG              | W   | 0.869      | -            | -                | -                | -         |     0.63 | Lake, reck, s1n, slaxz-, Swisher        |
|           48 |     1679 | 2024-08-06 | FLUFFY AIMERS    | W   | 0.863      | 0.477        | -                | 0.530 (0.218)    | -         |     1.10 | Lake, reck, s1n, slaxz-, Swisher        |
|           47 |     1682 | 2024-08-06 | FLUFFY AIMERS    | W   | 0.862      | 0.477        | -                | 0.530 (0.218)    | -         |     1.12 | Lake, reck, s1n, slaxz-, Swisher        |
|           46 |     1886 | 2024-07-31 | Limitless        | W   | 0.823      | -            | -                | -                | -         |     0.62 | Lake, reck, s1n, slaxz-, Swisher        |
|           45 |     1892 | 2024-07-31 | Limitless        | W   | 0.822      | -            | -                | -                | -         |     0.63 | Lake, reck, s1n, slaxz-, Swisher        |
|           44 |     1936 | 2024-07-30 | E-Xolos LAZER    | W   | 0.816      | 0.477        | -                | 0.522 (0.203)    | -         |     1.41 | Lake, reck, s1n, slaxz-, Swisher        |
|           43 |     1941 | 2024-07-30 | E-Xolos LAZER    | W   | 0.816      | 0.477        | -                | 0.522 (0.203)    | -         |     1.43 | Lake, reck, s1n, slaxz-, Swisher        |
|           42 |     2361 | 2024-07-18 | The MongolZ      | L   | 0.733      | -            | -                | -                | -         |    -2.44 | Lake, reck, s1n, slaxz-, Swisher        |
|           41 |     2374 | 2024-07-18 | Complexity       | W   | 0.732      | 1.000        | 0.321 (0.235)    | 0.426 (0.312)    | 1 (0.732) |    19.67 | Lake, reck, s1n, slaxz-, Swisher        |
|           40 |     2435 | 2024-07-17 | Vitality         | L   | 0.727      | -            | -                | -                | -         |    -0.80 | Lake, reck, s1n, slaxz-, Swisher        |
|           39 |     2956 | 2024-06-09 | Wildcard         | W   | 0.476      | 0.477        | 0.082 (0.019)    | 0.613 (0.139)    | -         |     2.49 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           38 |     2970 | 2024-06-09 | NRG              | L   | 0.474      | -            | -                | -                | -         |   -13.37 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           37 |     3023 | 2024-06-08 | Legacy           | W   | 0.468      | -            | -                | -                | -         |     1.58 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           36 |     3130 | 2024-06-06 | Wildcard         | W   | 0.456      | 0.477        | 0.082 (0.018)    | -                | -         |     2.29 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           35 |     3150 | 2024-06-06 | Wildcard         | W   | 0.454      | -            | -                | -                | -         |     2.43 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           34 |     3160 | 2024-06-06 | FLUFFY AIMERS    | W   | 0.454      | -            | -                | -                | -         |     0.63 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           33 |     3200 | 2024-06-05 | Nouns            | W   | 0.449      | 0.477        | 0.062 (0.013)    | -                | -         |     3.19 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           32 |     3457 | 2024-05-28 | HEROIC           | L   | 0.394      | -            | -                | -                | -         |    -3.86 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           31 |     3475 | 2024-05-27 | FaZe             | L   | 0.388      | -            | -                | -                | -         |    -1.32 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           30 |     3530 | 2024-05-24 | Nouns            | W   | 0.370      | -            | -                | -                | -         |     2.57 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           29 |     3545 | 2024-05-23 | Wildcard         | W   | 0.362      | 0.384        | 0.082 (0.011)    | -                | -         |     1.88 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           28 |     3570 | 2024-05-22 | Party Astronauts | L   | 0.355      | -            | -                | -                | -         |   -10.36 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           27 |     3575 | 2024-05-22 | Party Astronauts | W   | 0.355      | -            | -                | -                | -         |     0.83 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           26 |     3581 | 2024-05-22 | Mythic           | W   | 0.355      | -            | -                | -                | -         |     0.52 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           25 |     3645 | 2024-05-20 | NRG              | W   | 0.343      | -            | -                | -                | -         |     1.15 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           24 |     3650 | 2024-05-20 | NRG              | W   | 0.342      | -            | -                | -                | -         |     1.16 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           23 |     3660 | 2024-05-20 | E-Xolos LAZER    | W   | 0.341      | -            | -                | -                | -         |     0.59 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           22 |     3684 | 2024-05-19 | BOSS             | W   | 0.335      | -            | -                | -                | -         |     0.53 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           21 |     3686 | 2024-05-19 | BOSS             | W   | 0.335      | -            | -                | -                | -         |     0.54 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           20 |     3709 | 2024-05-18 | Nouns            | L   | 0.329      | -            | -                | -                | -         |    -8.36 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           19 |     3743 | 2024-05-17 | DETONATE         | W   | 0.322      | -            | -                | -                | -         |     0.12 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           18 |     3816 | 2024-05-15 | Take Flyte       | W   | 0.309      | -            | -                | -                | -         |     0.52 | malbsMd, reck, slaxz-, stamina, Swisher |
|           17 |     3822 | 2024-05-15 | Take Flyte       | W   | 0.309      | -            | -                | -                | -         |     0.53 | malbsMd, reck, slaxz-, stamina, Swisher |
|           16 |     3865 | 2024-05-14 | timbermen        | W   | 0.303      | -            | -                | -                | -         |     1.88 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           15 |     3871 | 2024-05-14 | timbermen        | W   | 0.302      | -            | -                | -                | -         |     1.92 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           14 |     3994 | 2024-05-10 | Limitless        | W   | 0.276      | -            | -                | -                | -         |     0.18 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           13 |     3996 | 2024-05-10 | Limitless        | W   | 0.276      | -            | -                | -                | -         |     0.18 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           12 |     4011 | 2024-05-09 | LAG              | W   | 0.269      | -            | -                | -                | -         |     0.23 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           11 |     4016 | 2024-05-09 | LAG              | W   | 0.269      | -            | -                | -                | -         |     0.23 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           10 |     4242 | 2024-04-28 | G2               | L   | 0.194      | -            | -                | -                | -         |    -0.22 | malbsMd, reck, s1n, slaxz-, Swisher     |
|            9 |     4267 | 2024-04-27 | TYLOO            | W   | 0.187      | -            | -                | -                | 1 (0.187) |     0.18 | malbsMd, reck, s1n, slaxz-, Swisher     |
|            8 |     4287 | 2024-04-26 | BetBoom          | L   | 0.181      | -            | -                | -                | -         |    -4.03 | malbsMd, reck, s1n, slaxz-, Swisher     |
|            7 |     4297 | 2024-04-26 | G2               | W   | 0.180      | 0.889        | 0.882 (0.141)    | -                | 1 (0.180) |     5.45 | malbsMd, reck, s1n, slaxz-, Swisher     |
|            6 |     4322 | 2024-04-25 | Sharks           | W   | 0.174      | -            | -                | -                | 1 (0.174) |     0.17 | malbsMd, reck, s1n, slaxz-, Swisher     |
|            5 |     4356 | 2024-04-23 | BetBoom          | L   | 0.161      | -            | -                | -                | -         |    -3.61 | malbsMd, reck, s1n, slaxz-, Swisher     |
|            4 |     4442 | 2024-04-19 | Liquid           | W   | 0.136      | -            | -                | -                | -         |     3.80 | malbsMd, reck, s1n, slaxz-, Swisher     |
|            3 |     4449 | 2024-04-19 | Legacy           | W   | 0.135      | -            | -                | -                | -         |     0.45 | malbsMd, reck, s1n, slaxz-, Swisher     |
|            2 |     4492 | 2024-04-18 | Liquid           | L   | 0.130      | -            | -                | -                | -         |    -0.47 | malbsMd, reck, s1n, slaxz-, Swisher     |
|            1 |     4497 | 2024-04-18 | timbermen        | W   | 0.128      | -            | -                | -                | -         |     0.85 | malbsMd, reck, s1n, slaxz-, Swisher     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($74,116.79)
- Divide that value by the 5th highest value among all rosters ($332,851.90)
- The final value (0.22) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-22 |      1.000 | $32,000.00     | $32,000.00      |
| 2024-08-25 |      0.988 | $5,000.00      | $4,937.62       |
| 2024-08-18 |      0.943 | $1,500.00      | $1,414.73       |
| 2024-07-21 |      0.754 | $15,000.00     | $11,316.66      |
| 2024-06-09 |      0.476 | $25,000.00     | $11,902.63      |
| 2024-06-02 |      0.428 | $4,000.00      | $1,711.94       |
| 2024-05-24 |      0.370 | $20,000.00     | $7,391.18       |
| 2024-05-12 |      0.287 | $12,000.00     | $3,442.04       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
