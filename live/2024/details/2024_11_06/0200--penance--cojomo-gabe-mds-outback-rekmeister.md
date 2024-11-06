### Roster Details<br />
Team Name: Penance<br />
Roster: CoJoMo, Gabe, mds, Outback, REKMEISTER<br />
Global Rank: [200](../../standings_global_2024_11_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_11_06.md)<br />
Regional Rank: [58]( ../../standings_americas_2024_11_06.md)<br />
<br />
Final Rank Value:  586.6<br />
<br />
Final Rank Value (586.6) = Starting Rank Value (637.5) + Head To Head Adjustments (-50.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.240[<sup>1</sup>](#table2)
- Bounty Collected: 0.229[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.121<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 637.5
- 400 + ( ( 0.121 - 0.000 ) / ( 0.815 - 0.000 ) ) * 1600 = 637.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |      327 | 2024-10-19 | Fisher Tsunami   | L   | 1.000      | -            | -                | -                | -         |    -5.01 | CoJoMo, Gabe, mds, Outback, REKMEISTER    |
|           33 |     1162 | 2024-09-22 | Lore             | L   | 0.902      | -            | -                | -                | -         |   -17.78 | CoJoMo, Gabe, mds, shutout, YuZ           |
|           32 |     1207 | 2024-09-20 | Final Form       | L   | 0.889      | -            | -                | -                | -         |   -13.21 | CoJoMo, Gabe, mds, shutout, YuZ           |
|           31 |     1334 | 2024-09-16 | undefined        | L   | 0.862      | -            | -                | -                | -         |    -9.31 | CoJoMo, CooperTrooper, Gabe, mds, shutout |
|           30 |     1421 | 2024-09-13 | Maximum Ego      | W   | 0.843      | 0.371        | 0.000 (0.000)    | -                | 0 (0.000) |     5.71 | CoJoMo, CooperTrooper, Gabe, mds, shutout |
|           29 |     1997 | 2024-08-26 | FLUFFY AIMERS    | L   | 0.723      | -            | -                | -                | -         |    -6.83 | CoJoMo, Gabe, Louie, mds, shutout         |
|           28 |     2012 | 2024-08-26 | Party Astronauts | L   | 0.721      | -            | -                | -                | -         |    -3.42 | CoJoMo, Gabe, Louie, mds, shutout         |
|           27 |     2378 | 2024-08-15 | Party Astronauts | L   | 0.650      | -            | -                | -                | -         |    -3.48 | CoJoMo, Gabe, Louie, mds, shutout         |
|           26 |     2523 | 2024-08-11 | Revenge Nation   | W   | 0.623      | 0.371        | 0.003 (0.001)    | 0.249 (0.057)    | 0 (0.000) |    12.66 | CoJoMo, Gabe, Louie, mds, shutout         |
|           25 |     2596 | 2024-08-08 | undefined        | L   | 0.603      | -            | -                | -                | -         |    -7.28 | CoJoMo, CooperTrooper, Gabe, mds, shutout |
|           24 |     2774 | 2024-08-03 | DETONATE         | W   | 0.570      | 0.371        | 0.000 (0.000)    | 0.103 (0.022)    | 0 (0.000) |     6.15 | CoJoMo, CooperTrooper, Gabe, mds, shutout |
|           23 |     3138 | 2024-07-24 | Aether           | W   | 0.502      | 0.371        | -                | 0.100 (0.019)    | 0 (0.000) |     5.26 | CoJoMo, Gabe, mds, nooz, shutout          |
|           22 |     3256 | 2024-07-20 | timbermen        | L   | 0.475      | -            | -                | -                | -         |    -1.91 | CoJoMo, Gabe, mds, nooz, shutout          |
|           21 |     3390 | 2024-07-17 | timbermen        | L   | 0.456      | -            | -                | -                | -         |    -1.83 | CoJoMo, Gabe, mds, shutout, xaler         |
|           20 |     3394 | 2024-07-17 | timbermen        | L   | 0.456      | -            | -                | -                | -         |    -1.86 | CoJoMo, Gabe, mds, shutout, xaler         |
|           19 |     3454 | 2024-07-16 | Take Flyte       | L   | 0.450      | -            | -                | -                | -         |    -4.18 | CoJoMo, Gabe, mds, shutout, xaler         |
|           18 |     3460 | 2024-07-16 | Take Flyte       | L   | 0.449      | -            | -                | -                | -         |    -4.32 | CoJoMo, Gabe, mds, shutout, xaler         |
|           17 |     3809 | 2024-06-14 | Akimbo           | L   | 0.235      | -            | -                | -                | -         |    -2.45 | CoJoMo, Gabe, mds, shutout, xaler         |
|           16 |     4262 | 2024-06-04 | Mythic           | L   | 0.168      | -            | -                | -                | -         |    -2.16 | CoJoMo, Gabe, Louie, mds, shutout         |
|           15 |     4563 | 2024-05-22 | BOSS             | L   | 0.083      | -            | -                | -                | -         |    -0.61 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           14 |     4566 | 2024-05-22 | BOSS             | W   | 0.083      | 0.477        | 0.029 (0.001)    | 0.383 (0.015)    | 0 (0.000) |     2.01 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           13 |     4611 | 2024-05-21 | NRG              | W   | 0.076      | 0.477        | 0.049 (0.002)    | 0.505 (0.018)    | 0 (0.000) |     1.98 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           12 |     4613 | 2024-05-21 | NRG              | L   | 0.076      | -            | -                | -                | -         |    -0.42 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           11 |     4646 | 2024-05-20 | FLUFFY AIMERS    | L   | 0.069      | -            | -                | -                | -         |    -0.63 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           10 |     4651 | 2024-05-20 | FLUFFY AIMERS    | W   | 0.069      | 0.477        | 0.014 (0.000)    | 0.509 (0.017)    | 0 (0.000) |     1.55 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|            9 |     4813 | 2024-05-15 | Mythic           | L   | 0.036      | -            | -                | -                | -         |    -0.46 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|            8 |     4819 | 2024-05-15 | Mythic           | W   | 0.036      | 0.477        | 0.002 (0.000)    | 0.220 (0.004)    | 0 (0.000) |     0.68 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|            7 |     4881 | 2024-05-14 | timbermen        | L   | 0.029      | -            | -                | -                | -         |    -0.11 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|            6 |     4885 | 2024-05-14 | timbermen        | L   | 0.029      | -            | -                | -                | -         |    -0.11 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|            5 |     4937 | 2024-05-12 | NRG              | L   | 0.016      | -            | -                | -                | -         |    -0.09 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|            4 |     4944 | 2024-05-12 | Mythic           | W   | 0.015      | 0.270        | 0.002 (0.000)    | 0.220 (0.001)    | 0 (0.000) |     0.27 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|            3 |     4965 | 2024-05-11 | BOSS             | W   | 0.008      | 0.270        | 0.029 (0.000)    | 0.383 (0.001)    | 0 (0.000) |     0.21 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|            2 |     4969 | 2024-05-11 | NRG              | L   | 0.008      | -            | -                | -                | -         |    -0.04 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|            1 |     4973 | 2024-05-11 | Party Astronauts | W   | 0.008      | 0.270        | 0.003 (0.000)    | 0.004 (0.000)    | -         |     0.12 | BeaKie, CoJoMo, Gabe, mds, shutout        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($324.86)
- Divide that value by the 5th highest value among all rosters ($478,523.89)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
