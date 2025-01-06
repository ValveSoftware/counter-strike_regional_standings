### Roster Details<br />
Team Name: FLUFFY AIMERS<br />
Roster: brett, den1ed, jason, slump, Wolffe<br />
Global Rank: [95](../../standings_global_2025_01_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_06.md)<br />
Regional Rank: [23]( ../../standings_americas_2025_01_06.md)<br />
<br />
Final Rank Value:  882.5<br />
<br />
Final Rank Value (882.5) = Starting Rank Value (927.3) + Head To Head Adjustments (-44.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.354[<sup>1</sup>](#table2)
- Bounty Collected: 0.301[<sup>2</sup>](#table1)
- Opponent Network: 0.077[<sup>2</sup>](#table1)
- LAN Wins: 0.336[<sup>2</sup>](#table1)

The average of these factors is 0.267<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 927.3
- 400 + ( ( 0.267 - 0.000 ) / ( 0.809 - 0.000 ) ) * 1600 = 927.3


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
|           55 |      151 | 2024-12-14 | Party Astronauts  | L   | 1.000      | -            | -                | -                | -         |   -14.53 | brett, den1ed, jason, slump, Wolffe      |
|           54 |      251 | 2024-12-08 | BOSS              | L   | 1.000      | -            | -                | -                | -         |    -9.42 | brett, jason, nooz, slump, Wolffe        |
|           53 |      265 | 2024-12-07 | Party Astronauts  | W   | 1.000      | 0.384        | 0.022 (0.008)    | 0.401 (0.154)    | 1 (1.000) |    16.66 | brett, jason, nooz, slump, Wolffe        |
|           52 |      272 | 2024-12-07 | Take Flyte        | W   | 1.000      | 0.384        | 0.003 (0.001)    | 0.231 (0.089)    | 1 (1.000) |     9.13 | brett, jason, nooz, slump, Wolffe        |
|           51 |      286 | 2024-12-07 | What’s for dinner | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.84 | brett, jason, nooz, slump, Wolffe        |
|           50 |      299 | 2024-12-06 | ROOMBA PEEK       | L   | 0.997      | -            | -                | -                | -         |   -26.48 | brett, jason, nooz, slump, Wolffe        |
|           49 |     1415 | 2024-10-15 | BOSS              | L   | 0.649      | -            | -                | -                | -         |    -6.03 | ayy, brett, jason, nooz, slump           |
|           48 |     1436 | 2024-10-13 | Fisher College    | L   | 0.636      | -            | -                | -                | -         |   -11.26 | brett, jason, nooz, slump, Wolffe        |
|           47 |     1437 | 2024-10-13 | InControl         | W   | 0.635      | 0.262        | 0.006 (0.001)    | -                | 0 (0.000) |     3.17 | brett, jason, nooz, slump, Wolffe        |
|           46 |     1451 | 2024-10-12 | Final Form        | W   | 0.629      | -            | -                | -                | 0 (0.000) |     3.04 | brett, jason, nooz, slump, Wolffe        |
|           45 |     1501 | 2024-10-09 | Revenge Nation    | L   | 0.609      | -            | -                | -                | -         |   -14.82 | ayy, brett, jason, nooz, slump           |
|           44 |     1506 | 2024-10-09 | Revenge Nation    | L   | 0.609      | -            | -                | -                | -         |   -15.37 | ayy, brett, jason, nooz, slump           |
|           43 |     1534 | 2024-10-08 | timbermen         | L   | 0.603      | -            | -                | -                | -         |   -11.78 | ayy, brett, jason, nooz, slump           |
|           42 |     1539 | 2024-10-08 | timbermen         | W   | 0.602      | 0.477        | 0.028 (0.008)    | 0.369 (0.106)    | 0 (0.000) |     7.28 | ayy, brett, jason, nooz, slump           |
|           41 |     1570 | 2024-10-07 | BOSS              | L   | 0.596      | -            | -                | -                | -         |    -6.92 | ayy, brett, jason, nooz, slump           |
|           40 |     1572 | 2024-10-07 | BOSS              | W   | 0.596      | 0.477        | 0.040 (0.011)    | 0.426 (0.121)    | 0 (0.000) |    12.17 | ayy, brett, jason, nooz, slump           |
|           39 |     1626 | 2024-10-05 | BOSS              | L   | 0.583      | -            | -                | -                | -         |    -6.51 | brett, jason, nooz, slump, Wolffe        |
|           38 |     1628 | 2024-10-05 | Legacy            | W   | 0.582      | 0.371        | 0.040 (0.009)    | 0.432 (0.093)    | 0 (0.000) |    13.05 | brett, consti, jason, slump, Wolffe      |
|           37 |     1662 | 2024-10-04 | timbermen         | W   | 0.575      | -            | -                | -                | 0 (0.000) |     1.68 | brett, jason, nooz, slump, Wolffe        |
|           36 |     1768 | 2024-10-01 | Revenge Nation    | W   | 0.556      | 0.371        | -                | 0.156 (0.032)    | 0 (0.000) |     3.42 | ayy, brett, jason, nooz, slump           |
|           35 |     2096 | 2024-09-23 | LAG               | W   | 0.503      | 0.477        | 0.004 (0.001)    | 0.101 (0.024)    | -         |     2.66 | ayy, brett, jason, nooz, slump           |
|           34 |     2099 | 2024-09-23 | LAG               | W   | 0.503      | -            | -                | -                | -         |     2.72 | ayy, brett, jason, nooz, slump           |
|           33 |     2139 | 2024-09-22 | NRG               | L   | 0.495      | -            | -                | -                | -         |    -2.63 | brett, C4LLM3SU3, jason, nooz, slump     |
|           32 |     2162 | 2024-09-21 | Legacy            | W   | 0.489      | 0.303        | 0.040 (0.006)    | 0.432 (0.064)    | -         |     9.47 | ayy, brett, jason, nooz, slump           |
|           31 |     2659 | 2024-09-04 | Take Flyte        | W   | 0.376      | 0.477        | -                | 0.231 (0.041)    | -         |     3.42 | ayy, brett, jason, nooz, slump           |
|           30 |     2663 | 2024-09-04 | Take Flyte        | W   | 0.376      | 0.477        | -                | 0.231 (0.041)    | -         |     3.51 | ayy, brett, jason, nooz, slump           |
|           29 |     2749 | 2024-09-01 | Liquid            | L   | 0.355      | -            | -                | -                | -         |    -0.19 | brett, jason, MarKE, nooz, slump         |
|           28 |     2766 | 2024-08-31 | LAG               | W   | 0.349      | -            | -                | -                | -         |     2.11 | brett, jason, MarKE, nooz, slump         |
|           27 |     2768 | 2024-08-31 | Liquid            | L   | 0.348      | -            | -                | -                | -         |    -0.17 | brett, jason, MarKE, nooz, slump         |
|           26 |     2857 | 2024-08-28 | Legacy            | L   | 0.330      | -            | -                | -                | -         |    -4.45 | brett, jason, MarKE, nooz, slump         |
|           25 |     2863 | 2024-08-28 | E-Xolos LAZER     | W   | 0.328      | -            | -                | -                | -         |     2.84 | brett, jason, MarKE, nooz, slump         |
|           24 |     2922 | 2024-08-27 | Party Astronauts  | W   | 0.322      | 0.143        | 0.022 (0.001)    | -                | -         |     5.26 | brett, jason, MarKE, nooz, slump         |
|           23 |     2973 | 2024-08-26 | USA               | W   | 0.316      | -            | -                | -                | -         |     0.90 | brett, jason, MarKE, nooz, slump         |
|           22 |     2997 | 2024-08-26 | Nouns             | L   | 0.314      | -            | -                | -                | -         |    -2.41 | brett, jason, MarKE, nooz, slump         |
|           21 |     3257 | 2024-08-19 | Priority          | W   | 0.269      | -            | -                | -                | -         |     0.72 | brett, jason, MarKE, nooz, slump         |
|           20 |     3258 | 2024-08-19 | Party Astronauts  | L   | 0.269      | -            | -                | -                | -         |    -4.13 | brett, jason, MarKE, nooz, slump         |
|           19 |     3260 | 2024-08-19 | undefined         | W   | 0.269      | -            | -                | -                | -         |     1.86 | brett, jason, MarKE, nooz, slump         |
|           18 |     3410 | 2024-08-13 | Limitless         | L   | 0.229      | -            | -                | -                | -         |    -5.96 | bezymecc, brett, jason, sacrifice, slump |
|           17 |     3413 | 2024-08-13 | Limitless         | W   | 0.229      | -            | -                | -                | -         |     1.27 | bezymecc, brett, jason, sacrifice, slump |
|           16 |     3418 | 2024-08-13 | Wildcard          | L   | 0.229      | -            | -                | -                | -         |    -0.81 | bezymecc, brett, jason, sacrifice, slump |
|           15 |     3422 | 2024-08-13 | Wildcard          | L   | 0.228      | -            | -                | -                | -         |    -0.82 | bezymecc, brett, jason, sacrifice, slump |
|           14 |     3459 | 2024-08-12 | BOSS              | L   | 0.223      | -            | -                | -                | -         |    -1.97 | bezymecc, brett, jason, sacrifice, slump |
|           13 |     3573 | 2024-08-08 | Final Form        | W   | 0.195      | -            | -                | -                | -         |     1.01 | bezymecc, brett, jason, sacrifice, slump |
|           12 |     3654 | 2024-08-06 | M80               | L   | 0.183      | -            | -                | -                | -         |    -1.04 | bezymecc, brett, jason, sacrifice, slump |
|           11 |     3657 | 2024-08-06 | M80               | L   | 0.183      | -            | -                | -                | -         |    -1.05 | bezymecc, brett, jason, sacrifice, slump |
|           10 |     3720 | 2024-08-04 | Homyno            | W   | 0.169      | -            | -                | -                | -         |     0.27 | bezymecc, brett, jason, sacrifice, slump |
|            9 |     3868 | 2024-07-31 | Mythic            | L   | 0.142      | -            | -                | -                | -         |    -4.03 | bezymecc, brett, jason, sacrifice, slump |
|            8 |     3871 | 2024-07-31 | Mythic            | W   | 0.142      | -            | -                | -                | -         |     0.46 | bezymecc, brett, jason, sacrifice, slump |
|            7 |     4068 | 2024-07-25 | Derpy Kids        | W   | 0.103      | -            | -                | -                | -         |     0.16 | bezymecc, brett, jason, sacrifice, slump |
|            6 |     4107 | 2024-07-24 | E-Xolos LAZER     | L   | 0.096      | -            | -                | -                | -         |    -2.28 | bezymecc, brett, jason, sacrifice, slump |
|            5 |     4110 | 2024-07-24 | E-Xolos LAZER     | W   | 0.096      | -            | -                | -                | -         |     0.75 | bezymecc, brett, jason, sacrifice, slump |
|            4 |     4141 | 2024-07-23 | Party Astronauts  | L   | 0.089      | -            | -                | -                | -         |    -1.49 | bezymecc, brett, jason, sacrifice, slump |
|            3 |     4143 | 2024-07-23 | Party Astronauts  | W   | 0.089      | 0.477        | 0.022 (0.001)    | -                | -         |     1.34 | bezymecc, brett, jason, sacrifice, slump |
|            2 |     4429 | 2024-07-16 | NRG               | L   | 0.043      | -            | -                | -                | -         |    -0.24 | bezymecc, brett, jason, sacrifice, slump |
|            1 |     4434 | 2024-07-16 | NRG               | L   | 0.043      | -            | -                | -                | -         |    -0.24 | bezymecc, brett, jason, sacrifice, slump |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,983.02)
- Divide that value by the 5th highest value among all rosters ($265,541.19)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.682 | $2,000.00      | $1,364.88       |
| 2024-10-13 |      0.636 | $450.00        | $286.03         |
| 2024-10-05 |      0.583 | $4,000.00      | $2,332.11       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
