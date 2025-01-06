### Roster Details<br />
Team Name: Take Flyte<br />
Roster: cbass, Champ, Grave, jchancE, z0mb1e<br />
Global Rank: [149](../../standings_global_2025_01_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_06.md)<br />
Regional Rank: [37]( ../../standings_americas_2025_01_06.md)<br />
<br />
Final Rank Value:  719.0<br />
<br />
Final Rank Value (719.0) = Starting Rank Value (770.2) + Head To Head Adjustments (-51.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.278[<sup>1</sup>](#table2)
- Bounty Collected: 0.251[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.200[<sup>2</sup>](#table1)

The average of these factors is 0.187<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 770.2
- 400 + ( ( 0.187 - 0.000 ) / ( 0.809 - 0.000 ) ) * 1600 = 770.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           47 |      124 | 2024-12-15 | Alter Iron       | L   | 1.000      | -            | -                | -                | -         |   -14.82 | cbass, Champ, Grave, jchancE, z0mb1e |
|           46 |      147 | 2024-12-14 | Undone           | L   | 1.000      | -            | -                | -                | -         |   -10.71 | cbass, Champ, Grave, jchancE, z0mb1e |
|           45 |      176 | 2024-12-13 | LAG              | W   | 1.000      | 0.143        | 0.004 (0.001)    | 0.101 (0.014)    | 0 (0.000) |    10.38 | cbass, Champ, Grave, jchancE, z0mb1e |
|           44 |      196 | 2024-12-12 | Wanted Goons     | W   | 1.000      | 0.143        | 0.012 (0.002)    | 0.043 (0.006)    | 0 (0.000) |    11.96 | cbass, Champ, Grave, jchancE, z0mb1e |
|           43 |      211 | 2024-12-11 | Undone           | L   | 1.000      | -            | -                | -                | -         |   -11.13 | cbass, Champ, Grave, jchancE, z0mb1e |
|           42 |      223 | 2024-12-10 | Wanted Goons     | W   | 1.000      | 0.143        | 0.012 (0.002)    | 0.043 (0.006)    | 0 (0.000) |    12.52 | cbass, Champ, Grave, jchancE, z0mb1e |
|           41 |      272 | 2024-12-07 | FLUFFY AIMERS    | L   | 1.000      | -            | -                | -                | -         |    -9.13 | cbass, Champ, Grave, jchancE, z0mb1e |
|           40 |      277 | 2024-12-07 | Sharks           | L   | 1.000      | -            | -                | -                | -         |    -2.90 | cbass, Champ, Grave, jchancE, z0mb1e |
|           39 |      307 | 2024-12-06 | Not Mythic       | W   | 0.996      | 0.384        | 0.000 (0.000)    | -                | 1 (0.996) |     4.21 | cbass, Champ, Grave, jchancE, z0mb1e |
|           38 |     1495 | 2024-10-09 | LAG              | L   | 0.610      | -            | -                | -                | -         |   -12.93 | cbass, Champ, Grave, jchancE, z0mb1e |
|           37 |     1500 | 2024-10-09 | LAG              | W   | 0.609      | 0.477        | 0.004 (0.001)    | 0.101 (0.029)    | 0 (0.000) |     6.30 | cbass, Champ, Grave, jchancE, z0mb1e |
|           36 |     1533 | 2024-10-08 | E-Xolos LAZER    | L   | 0.603      | -            | -                | -                | -         |    -9.12 | cbass, Champ, Grave, jchancE, z0mb1e |
|           35 |     1540 | 2024-10-08 | E-Xolos LAZER    | L   | 0.602      | -            | -                | -                | -         |    -9.62 | cbass, Champ, Grave, jchancE, z0mb1e |
|           34 |     1693 | 2024-10-03 | Mythic           | W   | 0.569      | 0.477        | 0.000 (0.000)    | 0.108 (0.029)    | 0 (0.000) |     4.95 | cbass, Champ, Grave, jchancE, z0mb1e |
|           33 |     1700 | 2024-10-03 | Mythic           | W   | 0.569      | 0.477        | -                | 0.108 (0.029)    | 0 (0.000) |     5.16 | cbass, Champ, Grave, jchancE, z0mb1e |
|           32 |     1772 | 2024-10-01 | vagrants         | L   | 0.556      | -            | -                | -                | -         |    -9.41 | cbass, Champ, Grave, jchancE, z0mb1e |
|           31 |     1777 | 2024-10-01 | vagrants         | W   | 0.556      | 0.477        | 0.005 (0.001)    | 0.172 (0.046)    | 0 (0.000) |     8.27 | cbass, Champ, Grave, jchancE, z0mb1e |
|           30 |     1868 | 2024-09-28 | M80              | L   | 0.536      | -            | -                | -                | -         |    -1.15 | cbass, Grave, jchancE, serv0, z0mb1e |
|           29 |     1869 | 2024-09-28 | M80              | L   | 0.536      | -            | -                | -                | -         |    -1.17 | cbass, Champ, Grave, jchancE, z0mb1e |
|           28 |     2000 | 2024-09-25 | Legacy           | L   | 0.516      | -            | -                | -                | -         |    -2.81 | cbass, Champ, Grave, jchancE, z0mb1e |
|           27 |     2005 | 2024-09-25 | Legacy           | L   | 0.516      | -            | -                | -                | -         |    -2.88 | cbass, Champ, Grave, jchancE, z0mb1e |
|           26 |     2244 | 2024-09-18 | NRG              | L   | 0.469      | -            | -                | -                | -         |    -1.17 | cbass, Champ, Grave, jchancE, z0mb1e |
|           25 |     2247 | 2024-09-18 | NRG              | L   | 0.469      | -            | -                | -                | -         |    -1.18 | cbass, Champ, Grave, jchancE, z0mb1e |
|           24 |     2535 | 2024-09-08 | timbermen        | L   | 0.402      | -            | -                | -                | -         |    -4.13 | cbass, Grave, jchancE, serv0, z0mb1e |
|           23 |     2553 | 2024-09-07 | Wanted Goons     | W   | 0.396      | -            | -                | -                | 1 (0.396) |     2.82 | cbass, Grave, jchancE, serv0, z0mb1e |
|           22 |     2568 | 2024-09-07 | Amped Red        | W   | 0.394      | -            | -                | -                | 1 (0.394) |     1.49 | cbass, Grave, jchancE, serv0, z0mb1e |
|           21 |     2659 | 2024-09-04 | FLUFFY AIMERS    | L   | 0.376      | -            | -                | -                | -         |    -3.42 | cbass, Grave, jchancE, serv0, z0mb1e |
|           20 |     2663 | 2024-09-04 | FLUFFY AIMERS    | L   | 0.376      | -            | -                | -                | -         |    -3.51 | cbass, Grave, jchancE, serv0, z0mb1e |
|           19 |     2921 | 2024-08-27 | Legacy           | L   | 0.322      | -            | -                | -                | -         |    -2.57 | cbass, Grave, jchancE, serv0, z0mb1e |
|           18 |     2972 | 2024-08-26 | LAG              | W   | 0.316      | 0.143        | 0.004 (0.000)    | 0.101 (0.005)    | -         |     3.62 | cbass, Champ, jchancE, serv0, z0mb1e |
|           17 |     3601 | 2024-08-07 | timbermen        | L   | 0.189      | -            | -                | -                | -         |    -2.05 | cbass, Grave, jchancE, serv0, z0mb1e |
|           16 |     3603 | 2024-08-07 | timbermen        | L   | 0.189      | -            | -                | -                | -         |    -2.08 | cbass, Grave, jchancE, serv0, z0mb1e |
|           15 |     3655 | 2024-08-06 | BOSS             | W   | 0.183      | 0.477        | 0.040 (0.003)    | 0.426 (0.037)    | -         |     4.99 | cbass, Grave, jchancE, serv0, z0mb1e |
|           14 |     3659 | 2024-08-06 | BOSS             | L   | 0.183      | -            | -                | -                | -         |    -0.77 | cbass, Grave, jchancE, serv0, z0mb1e |
|           13 |     3717 | 2024-08-04 | Final Form       | L   | 0.170      | -            | -                | -                | -         |    -3.66 | cbass, Grave, jchancE, serv0, z0mb1e |
|           12 |     3756 | 2024-08-03 | Wildcard         | L   | 0.162      | -            | -                | -                | -         |    -0.26 | cbass, Champ, jchancE, serv0, z0mb1e |
|           11 |     3859 | 2024-07-31 | Revenge Nation   | L   | 0.143      | -            | -                | -                | -         |    -2.66 | cbass, Grave, jchancE, serv0, z0mb1e |
|           10 |     3864 | 2024-07-31 | Revenge Nation   | L   | 0.143      | -            | -                | -                | -         |    -2.69 | cbass, Grave, jchancE, serv0, z0mb1e |
|            9 |     4106 | 2024-07-24 | InControl        | W   | 0.096      | 0.371        | 0.006 (0.000)    | 0.066 (0.002)    | -         |     1.04 | cbass, Grave, jchancE, serv0, z0mb1e |
|            8 |     4303 | 2024-07-18 | Wildcard         | L   | 0.056      | -            | -                | -                | -         |    -0.09 | cbass, Grave, jchancE, serv0, z0mb1e |
|            7 |     4308 | 2024-07-18 | Wildcard         | L   | 0.056      | -            | -                | -                | -         |    -0.09 | cbass, Grave, jchancE, serv0, z0mb1e |
|            6 |     4365 | 2024-07-17 | Party Astronauts | L   | 0.049      | -            | -                | -                | -         |    -0.49 | cbass, Grave, jchancE, serv0, z0mb1e |
|            5 |     4369 | 2024-07-17 | Party Astronauts | L   | 0.049      | -            | -                | -                | -         |    -0.49 | cbass, Grave, jchancE, serv0, z0mb1e |
|            4 |     4430 | 2024-07-16 | USA              | W   | 0.043      | -            | -                | -                | -         |     0.23 | cbass, Grave, jchancE, serv0, z0mb1e |
|            3 |     4436 | 2024-07-16 | USA              | W   | 0.042      | -            | -                | -                | -         |     0.23 | cbass, Grave, jchancE, serv0, z0mb1e |
|            2 |     4483 | 2024-07-15 | Nouns            | L   | 0.036      | -            | -                | -                | -         |    -0.15 | cbass, Grave, jchancE, serv0, z0mb1e |
|            1 |     4488 | 2024-07-15 | Nouns            | L   | 0.036      | -            | -                | -                | -         |    -0.15 | cbass, Grave, jchancE, serv0, z0mb1e |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($675.93)
- Divide that value by the 5th highest value among all rosters ($265,541.19)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.682 | $400.00        | $272.98         |
| 2024-09-08 |      0.403 | $1,000.00      | $402.95         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
