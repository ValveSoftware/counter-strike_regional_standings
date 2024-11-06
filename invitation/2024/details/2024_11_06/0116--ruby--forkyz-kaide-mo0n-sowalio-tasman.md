### Roster Details<br />
Team Name: RUBY<br />
Roster: forkyz, Kaide, mo0N, sowalio, tasman<br />
Global Rank: [116](../../standings_global_2024_11_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_06.md)<br />
Regional Rank: [81]( ../../standings_europe_2024_11_06.md)<br />
<br />
Final Rank Value:  778.3<br />
<br />
Final Rank Value (778.3) = Starting Rank Value (758.7) + Head To Head Adjustments (19.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.361[<sup>1</sup>](#table2)
- Bounty Collected: 0.287[<sup>2</sup>](#table1)
- Opponent Network: 0.084[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.183<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 758.7
- 400 + ( ( 0.183 - 0.000 ) / ( 0.815 - 0.000 ) ) * 1600 = 758.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           46 |      709 | 2024-10-04 | HOTU             | L   | 0.979      | -            | -                | -                | -         |   -13.40 | forkyz, Kaide, mo0N, sowalio, tasman   |
|           45 |      774 | 2024-10-02 | ECSTATIC         | L   | 0.967      | -            | -                | -                | -         |    -7.44 | forkyz, Kaide, mo0N, sowalio, tasman   |
|           44 |      825 | 2024-10-01 | Passion UA       | L   | 0.960      | -            | -                | -                | -         |    -6.62 | forkyz, Kaide, mo0N, sowalio, tasman   |
|           43 |      882 | 2024-09-29 | FLuffy Gangsters | W   | 0.946      | 0.143        | 0.008 (0.001)    | 0.321 (0.043)    | 0 (0.000) |    12.37 | forkyz, Kaide, mo0N, sowalio, tasman   |
|           42 |     1053 | 2024-09-25 | ENCE Academy     | W   | 0.921      | 0.143        | 0.009 (0.001)    | -                | 0 (0.000) |    11.00 | forkyz, Kaide, mo0N, sowalio, tasman   |
|           41 |     1103 | 2024-09-24 | Molotov          | W   | 0.914      | -            | -                | -                | 0 (0.000) |    12.72 | forkyz, Kaide, mo0N, sowalio, tasman   |
|           40 |     1164 | 2024-09-22 | Rhyno            | L   | 0.901      | -            | -                | -                | -         |   -12.52 | forkyz, Kaide, mo0N, sowalio, tasman   |
|           39 |     1210 | 2024-09-20 | CPH Wolves       | W   | 0.888      | 0.143        | -                | 0.504 (0.064)    | 0 (0.000) |    12.87 | forkyz, Kaide, mo0N, sowalio, tasman   |
|           38 |     1246 | 2024-09-19 | FLuffy Gangsters | W   | 0.881      | 0.143        | -                | 0.321 (0.040)    | 0 (0.000) |    13.23 | forkyz, Kaide, mo0N, sowalio, tasman   |
|           37 |     1431 | 2024-09-13 | DMS              | L   | 0.841      | -            | -                | -                | -         |   -11.63 | Chill, Kaide, mo0N, Something, sowalio |
|           36 |     1479 | 2024-09-12 | ENCE Academy     | W   | 0.832      | -            | -                | -                | 0 (0.000) |    11.66 | Chill, Kaide, mo0N, Something, sowalio |
|           35 |     1506 | 2024-09-11 | DMS              | L   | 0.826      | -            | -                | -                | -         |   -11.85 | Chill, Kaide, mo0N, Something, sowalio |
|           34 |     1658 | 2024-09-05 | ECLOT            | L   | 0.787      | -            | -                | -                | -         |    -3.78 | Chill, Kaide, mo0N, Something, sowalio |
|           33 |     1699 | 2024-09-04 | Spirit Academy   | L   | 0.780      | -            | -                | -                | -         |    -6.38 | Chill, Kaide, mo0N, Something, sowalio |
|           32 |     1740 | 2024-09-03 | BC.Game          | W   | 0.773      | 0.372        | 0.008 (0.002)    | 0.180 (0.052)    | 0 (0.000) |    14.56 | Chill, Kaide, mo0N, Something, sowalio |
|           31 |     2196 | 2024-08-21 | Permitta         | L   | 0.688      | -            | -                | -                | -         |    -4.78 | Chill, Kaide, mo0N, Something, sowalio |
|           30 |     2271 | 2024-08-20 | Young Ninjas     | L   | 0.680      | -            | -                | -                | -         |    -9.16 | Chill, Kaide, mo0N, Something, sowalio |
|           29 |     2346 | 2024-08-17 | Nexus            | W   | 0.661      | 0.435        | 0.014 (0.004)    | 0.523 (0.150)    | 0 (0.000) |    12.59 | Chill, Kaide, mo0N, Something, sowalio |
|           28 |     2366 | 2024-08-16 | Endpoint         | L   | 0.655      | -            | -                | -                | -         |    -6.19 | Chill, Kaide, mo0N, Something, sowalio |
|           27 |     2430 | 2024-08-14 | Insilio          | W   | 0.639      | 0.435        | 0.020 (0.006)    | 0.730 (0.203)    | 0 (0.000) |    13.74 | Chill, Kaide, mo0N, Something, sowalio |
|           26 |     2770 | 2024-08-04 | Project G        | L   | 0.572      | -            | -                | -                | -         |   -14.53 | dekz, fostar, Kaide, mo0N, sowalio     |
|           25 |     3112 | 2024-07-25 | 9z               | L   | 0.507      | -            | -                | -                | -         |    -1.42 | dekz, fostar, Kaide, mo0N, sowalio     |
|           24 |     3193 | 2024-07-23 | Metizport        | W   | 0.492      | 0.435        | 0.014 (0.003)    | 0.509 (0.109)    | 0 (0.000) |    10.14 | dekz, fostar, Kaide, mo0N, sowalio     |
|           23 |     3287 | 2024-07-20 | Passion UA       | L   | 0.472      | -            | -                | -                | -         |    -2.71 | dekz, fostar, Kaide, mo0N, sowalio     |
|           22 |     3445 | 2024-07-17 | VP.Prodigy       | W   | 0.453      | -            | -                | -                | -         |     6.18 | dekz, fostar, Kaide, mo0N, sowalio     |
|           21 |     3489 | 2024-07-16 | Sampi            | L   | 0.447      | -            | -                | -                | -         |    -3.44 | dekz, fostar, Kaide, mo0N, sowalio     |
|           20 |     3756 | 2024-06-16 | ARCRED           | W   | 0.247      | 0.450        | 0.037 (0.004)    | -                | -         |     4.80 | dekz, Kaide, mo0N, sowalio, w1nt3r     |
|           19 |     3778 | 2024-06-15 | System5          | L   | 0.241      | -            | -                | -                | -         |    -5.43 | dekz, Kaide, mo0N, sowalio, w1nt3r     |
|           18 |     3790 | 2024-06-15 | Spirit Academy   | W   | 0.240      | 0.450        | 0.062 (0.007)    | 0.825 (0.089)    | -         |     5.88 | dekz, Kaide, mo0N, sowalio, w1nt3r     |
|           17 |     3822 | 2024-06-14 | Zero Tenacity    | L   | 0.234      | -            | -                | -                | -         |    -1.53 | dekz, Kaide, mo0N, sowalio, w1nt3r     |
|           16 |     3830 | 2024-06-14 | LEON             | W   | 0.233      | -            | -                | -                | -         |     2.45 | dekz, Kaide, mo0N, sowalio, w1nt3r     |
|           15 |     3973 | 2024-06-09 | Insilio          | L   | 0.201      | -            | -                | -                | -         |    -1.75 | dekz, Kaide, mo0N, sowalio, w1nt3r     |
|           14 |     4118 | 2024-06-07 | SINNERS          | L   | 0.186      | -            | -                | -                | -         |    -0.59 | dekz, Kaide, mo0N, sowalio, w1nt3r     |
|           13 |     4227 | 2024-06-05 | ARCRED           | L   | 0.173      | -            | -                | -                | -         |    -2.20 | dekz, Kaide, mo0N, sowalio, w1nt3r     |
|           12 |     4245 | 2024-06-05 | Rare Atom        | L   | 0.172      | -            | -                | -                | -         |    -2.56 | dekz, Kaide, mo0N, sowalio, w1nt3r     |
|           11 |     4296 | 2024-06-03 | Insilio          | W   | 0.161      | 0.372        | 0.020 (0.001)    | 0.730 (0.044)    | -         |     3.64 | dekz, Kaide, mo0N, sowalio, w1nt3r     |
|           10 |     4305 | 2024-06-03 | HAVU             | L   | 0.160      | -            | -                | -                | -         |    -4.00 | dekz, Kaide, mo0N, sowalio, w1nt3r     |
|            9 |     4341 | 2024-06-01 | Zero Tenacity    | W   | 0.148      | 0.372        | 0.060 (0.003)    | 0.792 (0.044)    | -         |     3.72 | dekz, Kaide, mo0N, sowalio, w1nt3r     |
|            8 |     4405 | 2024-05-30 | Portugal         | W   | 0.134      | -            | -                | -                | -         |     1.07 | dekz, Kaide, mo0N, sowalio, w1nt3r     |
|            7 |     4415 | 2024-05-30 | FURIA            | L   | 0.133      | -            | -                | -                | -         |    -0.05 | dekz, Kaide, mo0N, sowalio, w1nt3r     |
|            6 |     4459 | 2024-05-28 | MOUZ NXT         | L   | 0.120      | -            | -                | -                | -         |    -1.54 | dekz, Kaide, mo0N, sowalio, w1nt3r     |
|            5 |     4499 | 2024-05-26 | Zero Tenacity    | L   | 0.106      | -            | -                | -                | -         |    -0.69 | dekz, Kaide, mo0N, sowalio, w1nt3r     |
|            4 |     4510 | 2024-05-25 | B8               | L   | 0.101      | -            | -                | -                | -         |    -0.13 | dekz, Kaide, mo0N, sowalio, w1nt3r     |
|            3 |     4550 | 2024-05-23 | Nexus            | W   | 0.087      | -            | -                | -                | -         |     1.75 | dekz, Kaide, mo0N, sowalio, w1nt3r     |
|            2 |     4640 | 2024-05-21 | Endpoint         | W   | 0.072      | -            | -                | -                | -         |     1.55 | dekz, Kaide, mo0N, sowalio, w1nt3r     |
|            1 |     4979 | 2024-05-11 | 9 Pandas         | L   | 0.007      | -            | -                | -                | -         |    -0.04 | dekz, Kaide, mo0N, sowalio, w1nt3r     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,112.81)
- Divide that value by the 5th highest value among all rosters ($478,523.89)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.247 | $30,000.00     | $7,397.39       |
| 2024-06-10 |      0.208 | $3,300.00      | $686.99         |
| 2024-05-12 |      0.014 | $2,000.00      | $28.42          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
