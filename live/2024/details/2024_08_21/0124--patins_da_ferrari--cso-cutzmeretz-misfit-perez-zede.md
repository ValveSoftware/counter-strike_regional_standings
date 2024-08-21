### Roster Details<br />
Team Name: Patins da Ferrari<br />
Roster: CSO, CutzMeretz, Misfit, perez, zede<br />
Global Rank: [124](../../standings_global_2024_08_21.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_08_21.md)<br />
Regional Rank: [32]( ../../standings_americas_2024_08_21.md)<br />
<br />
Final Rank Value:  781.6<br />
<br />
Final Rank Value (781.6) = Starting Rank Value (768.6) + Head To Head Adjustments (13.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.356[<sup>1</sup>](#table2)
- Bounty Collected: 0.299[<sup>2</sup>](#table1)
- Opponent Network: 0.088[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.186<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 768.6
- 400 + ( ( 0.186 - 0.000 ) / ( 0.806 - 0.000 ) ) * 1600 = 768.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           25 |      252 | 2024-08-13 | BESTIA         | L   | 1.000      | -            | -                | -                | -         |    -7.19 | CSO, CutzMeretz, Misfit, perez, zede      |
|           24 |      294 | 2024-08-12 | Case           | W   | 1.000      | 0.333        | 0.044 (0.015)    | 0.731 (0.244)    | 0 (0.000) |    20.48 | CSO, CutzMeretz, Misfit, perez, zede      |
|           23 |      331 | 2024-08-11 | KRÜ            | W   | 1.000      | 0.333        | 0.021 (0.007)    | 0.592 (0.197)    | 0 (0.000) |    20.63 | CutzMeretz, jz, Misfit, perez, zede       |
|           22 |      355 | 2024-08-10 | Dusty Roots    | W   | 1.000      | 0.333        | 0.006 (0.002)    | 0.326 (0.109)    | 0 (0.000) |    18.89 | CutzMeretz, jz, Misfit, perez, zede       |
|           21 |      378 | 2024-08-09 | BESTIA         | L   | 1.000      | -            | -                | -                | -         |    -6.17 | CSO, CutzMeretz, Misfit, perez, zede      |
|           20 |      448 | 2024-08-07 | SPORT          | W   | 1.000      | 0.333        | 0.004 (0.001)    | 0.096 (0.032)    | 0 (0.000) |    12.17 | CSO, CutzMeretz, Misfit, perez, zede      |
|           19 |      854 | 2024-07-27 | Case           | L   | 1.000      | -            | -                | -                | -         |    -8.16 | CSO, CutzMeretz, Leomonster, Misfit, zede |
|           18 |      870 | 2024-07-26 | ODDIK          | L   | 1.000      | -            | -                | -                | -         |    -4.35 | CSO, CutzMeretz, Leomonster, Misfit, zede |
|           17 |      882 | 2024-07-26 | ODDIK          | L   | 1.000      | -            | -                | -                | -         |    -5.02 | CSO, CutzMeretz, Leomonster, Misfit, zede |
|           16 |      902 | 2024-07-25 | Sharks         | L   | 1.000      | -            | -                | -                | -         |    -5.79 | CSO, CutzMeretz, Leomonster, MTGG, zede   |
|           15 |      977 | 2024-07-23 | Galorys        | L   | 1.000      | -            | -                | -                | -         |   -13.54 | CSO, CutzMeretz, Leomonster, MTGG, zede   |
|           14 |     1012 | 2024-07-22 | paiN Academy   | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.54 | CSO, CutzMeretz, Leomonster, MTGG, zede   |
|           13 |     1021 | 2024-07-22 | ODDIK          | L   | 0.999      | -            | -                | -                | -         |    -4.61 | CSO, CutzMeretz, Leomonster, MTGG, zede   |
|           12 |     1047 | 2024-07-21 | FURIA Academy  | W   | 0.992      | 0.371        | 0.000 (0.000)    | 0.089 (0.033)    | 0 (0.000) |     7.02 | CSO, CutzMeretz, Leomonster, MTGG, zede   |
|           11 |     1080 | 2024-07-20 | KRÜ            | L   | 0.986      | -            | -                | -                | -         |   -11.74 | CSO, CutzMeretz, Leomonster, MTGG, zede   |
|           10 |     1202 | 2024-07-17 | Hawks          | W   | 0.968      | 0.371        | 0.008 (0.003)    | 0.036 (0.013)    | 0 (0.000) |    11.96 | CSO, CutzMeretz, Leomonster, MTGG, zede   |
|            9 |     1269 | 2024-07-16 | Vikings KR     | L   | 0.961      | -            | -                | -                | -         |   -13.29 | CSO, CutzMeretz, Leomonster, MTGG, zede   |
|            8 |     1417 | 2024-07-10 | ODDIK          | L   | 0.920      | -            | -                | -                | -         |    -4.82 | bsd, CSO, CutzMeretz, Leomonster, zede    |
|            7 |     1438 | 2024-07-09 | Solid          | L   | 0.913      | -            | -                | -                | -         |   -12.03 | bsd, CSO, CutzMeretz, Leomonster, zede    |
|            6 |     1456 | 2024-07-08 | Sharks         | L   | 0.907      | -            | -                | -                | -         |    -5.48 | bsd, CSO, CutzMeretz, Leomonster, zede    |
|            5 |     1479 | 2024-07-06 | 9z Academy     | W   | 0.894      | 0.333        | 0.000 (0.000)    | 0.060 (0.018)    | 0 (0.000) |     4.94 | bsd, CSO, CutzMeretz, Leomonster, zede    |
|            4 |     1489 | 2024-07-01 | Vikings KR     | L   | 0.861      | -            | -                | -                | -         |   -12.78 | bsd, CutzMeretz, Leomonster, perez, zede  |
|            3 |     1492 | 2024-06-30 | Sharks         | W   | 0.854      | 0.333        | 0.055 (0.016)    | 0.499 (0.142)    | 0 (0.000) |    22.03 | bsd, CutzMeretz, Leomonster, perez, zede  |
|            2 |     1502 | 2024-06-29 | Bounty Hunters | L   | 0.846      | -            | -                | -                | -         |    -8.30 | bsd, CutzMeretz, Leomonster, perez, zede  |
|            1 |     1519 | 2024-06-26 | Dusty Roots    | W   | 0.826      | 0.333        | 0.006 (0.002)    | 0.326 (0.090)    | 0 (0.000) |    14.56 | bsd, CutzMeretz, Leomonster, perez, zede  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,800.00)
- Divide that value by the 5th highest value among all rosters ($307,820.64)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-13 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-07-27 |      1.000 | $1,800.00      | $1,800.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
