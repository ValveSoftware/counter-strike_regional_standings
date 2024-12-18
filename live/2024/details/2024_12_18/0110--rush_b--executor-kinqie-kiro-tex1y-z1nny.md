### Roster Details<br />
Team Name: RUSH B<br />
Roster: executor, kinqie, Kiro, tex1y, z1Nny<br />
Global Rank: [110](../../standings_global_2024_12_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_18.md)<br />
Regional Rank: [81]( ../../standings_europe_2024_12_18.md)<br />
<br />
Final Rank Value:  842.1<br />
<br />
Final Rank Value (842.1) = Starting Rank Value (851.0) + Head To Head Adjustments (-8.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.421[<sup>1</sup>](#table2)
- Bounty Collected: 0.342[<sup>2</sup>](#table1)
- Opponent Network: 0.074[<sup>2</sup>](#table1)
- LAN Wins: 0.104[<sup>2</sup>](#table1)

The average of these factors is 0.235<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 851.0
- 400 + ( ( 0.235 - 0.000 ) / ( 0.835 - 0.000 ) ) * 1600 = 851.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           25 |       38 | 2024-12-15 | FORZE Reload    | W   | 1.000      | 0.338        | 0.019 (0.006)    | 0.083 (0.028)    | 1 (1.000) |    10.89 | executor, kinqie, Kiro, tex1y, z1Nny      |
|           24 |      923 | 2024-11-03 | ARCRED          | L   | 0.901      | -            | -                | -                | -         |   -17.28 | executor, kinqie, Kiro, tex1y, z1Nny      |
|           23 |      952 | 2024-11-02 | 1WIN            | W   | 0.894      | 0.396        | 0.007 (0.003)    | 0.078 (0.027)    | 0 (0.000) |     8.12 | executor, kinqie, Kiro, tex1y, z1Nny      |
|           22 |      974 | 2024-11-01 | Nuclear TigeRES | W   | 0.887      | 0.396        | 0.004 (0.001)    | 0.083 (0.029)    | 0 (0.000) |     4.44 | executor, kinqie, Kiro, tex1y, z1Nny      |
|           21 |     1092 | 2024-10-26 | ECSTATIC        | L   | 0.847      | -            | -                | -                | -         |    -7.78 | executor, kinqie, Kiro, tex1y, z1Nny      |
|           20 |     1223 | 2024-10-19 | Rhyno           | W   | 0.799      | 0.354        | 0.152 (0.043)    | 0.532 (0.150)    | 0 (0.000) |    19.71 | executor, kinqie, Kiro, tex1y, z1Nny      |
|           19 |     1350 | 2024-10-13 | FAVBET          | L   | 0.759      | -            | -                | -                | -         |    -8.24 | executor, kinqie, Kiro, tex1y, z1Nny      |
|           18 |     1541 | 2024-10-05 | NAVI Junior     | W   | 0.706      | 0.354        | 0.169 (0.042)    | 1.000 (0.250)    | 0 (0.000) |    17.45 | executor, kinqie, Kiro, tex1y, z1Nny      |
|           17 |     1803 | 2024-09-28 | GUN5            | L   | 0.658      | -            | -                | -                | -         |    -4.46 | executor, kinqie, Kiro, tex1y, z1Nny      |
|           16 |     2277 | 2024-09-14 | ARCRED          | L   | 0.566      | -            | -                | -                | -         |    -9.54 | executor, Gospadarov, kinqie, Kiro, tex1y |
|           15 |     2290 | 2024-09-14 | devils.one      | L   | 0.565      | -            | -                | -                | -         |   -11.90 | executor, Gospadarov, kinqie, Kiro, tex1y |
|           14 |     2339 | 2024-09-12 | Nexus           | L   | 0.553      | -            | -                | -                | -         |    -1.17 | executor, Gospadarov, kinqie, Kiro, tex1y |
|           13 |     2545 | 2024-09-05 | HOTU            | L   | 0.506      | -            | -                | -                | -         |   -10.10 | executor, Gospadarov, kinqie, Kiro, tex1y |
|           12 |     2659 | 2024-09-01 | Insilio         | L   | 0.479      | -            | -                | -                | -         |    -7.54 | executor, Gospadarov, kinqie, Kiro, tex1y |
|           11 |     3143 | 2024-08-20 | B8              | L   | 0.401      | -            | -                | -                | -         |    -1.88 | executor, kinqie, Kiro, nota, tex1y       |
|           10 |     3329 | 2024-08-13 | PARIVISION      | L   | 0.354      | -            | -                | -                | -         |    -4.02 | executor, kinqie, Kiro, nota, tex1y       |
|            9 |     3383 | 2024-08-12 | ARCRED          | W   | 0.347      | 0.500        | 0.040 (0.007)    | 0.235 (0.041)    | 0 (0.000) |     4.45 | executor, kinqie, Kiro, nota, tex1y       |
|            8 |     3643 | 2024-08-04 | BC.Game         | L   | 0.292      | -            | -                | -                | -         |    -4.44 | executor, kinqie, Kiro, nota, tex1y       |
|            7 |     3680 | 2024-08-03 | Alliance        | W   | 0.285      | 0.342        | 0.031 (0.003)    | 0.446 (0.044)    | 0 (0.000) |     5.43 | executor, kinqie, Kiro, nota, tex1y       |
|            6 |     3719 | 2024-08-02 | Astralis Talent | W   | 0.278      | 0.342        | 0.004 (0.000)    | 0.339 (0.032)    | 0 (0.000) |     3.10 | executor, kinqie, Kiro, nota, tex1y       |
|            5 |     3830 | 2024-07-30 | Rebels          | W   | 0.261      | 0.500        | 0.034 (0.004)    | 0.405 (0.053)    | 0 (0.000) |     4.28 | executor, kinqie, Kiro, nota, tex1y       |
|            4 |     4060 | 2024-07-23 | SINNERS         | W   | 0.214      | 0.500        | 0.082 (0.009)    | 0.826 (0.088)    | 0 (0.000) |     5.65 | executor, kinqie, Kiro, nota, tex1y       |
|            3 |     4187 | 2024-07-19 | SAW             | L   | 0.187      | -            | -                | -                | -         |    -0.20 | executor, kinqie, Kiro, nota, tex1y       |
|            2 |     4298 | 2024-07-17 | Apogee          | L   | 0.174      | -            | -                | -                | -         |    -3.38 | executor, kinqie, Kiro, nota, tex1y       |
|            1 |     4405 | 2024-07-15 | Sangal          | L   | 0.160      | -            | -                | -                | -         |    -0.45 | executor, kinqie, Kiro, nota, tex1y       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($14,593.79)
- Divide that value by the 5th highest value among all rosters ($344,999.34)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      1.000 | $7,500.00      | $7,500.00       |
| 2024-11-03 |      0.901 | $5,112.00      | $4,605.10       |
| 2024-10-20 |      0.806 | $2,000.00      | $1,612.35       |
| 2024-08-04 |      0.292 | $3,000.00      | $876.34         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
