### Roster Details<br />
Team Name: Patins da Ferrari<br />
Roster: CSO, CutzMeretz, Misfit, perez, zede<br />
Global Rank: [128](../../standings_global_2024_08_14.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_08_14.md)<br />
Regional Rank: [34]( ../../standings_americas_2024_08_14.md)<br />
<br />
Final Rank Value:  768.2<br />
<br />
Final Rank Value (768.2) = Starting Rank Value (762.5) + Head To Head Adjustments (5.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.354[<sup>1</sup>](#table2)
- Bounty Collected: 0.288[<sup>2</sup>](#table1)
- Opponent Network: 0.093[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.184<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 762.5
- 400 + ( ( 0.184 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 762.5


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
|           25 |       25 | 2024-08-13 | BESTIA         | L   | 1.000      | -            | -                | -                | -         |    -7.24 | CSO, CutzMeretz, Misfit, perez, zede      |
|           24 |       67 | 2024-08-12 | Case           | W   | 1.000      | 0.333        | 0.030 (0.010)    | 0.768 (0.256)    | 0 (0.000) |    20.30 | CSO, CutzMeretz, Misfit, perez, zede      |
|           23 |      104 | 2024-08-11 | KRÜ            | W   | 1.000      | 0.333        | 0.021 (0.007)    | 0.565 (0.188)    | 0 (0.000) |    20.44 | CutzMeretz, jz, Misfit, perez, zede       |
|           22 |      128 | 2024-08-10 | Dusty Roots    | W   | 1.000      | 0.333        | 0.006 (0.002)    | 0.353 (0.118)    | 0 (0.000) |    19.18 | CutzMeretz, jz, Misfit, perez, zede       |
|           21 |      151 | 2024-08-09 | BESTIA         | L   | 1.000      | -            | -                | -                | -         |    -6.22 | CSO, CutzMeretz, Misfit, perez, zede      |
|           20 |      221 | 2024-08-07 | SPORT          | W   | 1.000      | 0.333        | 0.004 (0.001)    | 0.107 (0.036)    | 0 (0.000) |    12.59 | CSO, CutzMeretz, Misfit, perez, zede      |
|           19 |      627 | 2024-07-27 | Case           | L   | 1.000      | -            | -                | -                | -         |    -8.46 | CSO, CutzMeretz, Leomonster, Misfit, zede |
|           18 |      643 | 2024-07-26 | ODDIK          | L   | 1.000      | -            | -                | -                | -         |    -4.93 | CSO, CutzMeretz, Leomonster, Misfit, zede |
|           17 |      655 | 2024-07-26 | ODDIK          | L   | 1.000      | -            | -                | -                | -         |    -5.74 | CSO, CutzMeretz, Leomonster, Misfit, zede |
|           16 |      675 | 2024-07-25 | Sharks         | L   | 1.000      | -            | -                | -                | -         |    -6.74 | CSO, CutzMeretz, Leomonster, MTGG, zede   |
|           15 |      750 | 2024-07-23 | Galorys        | L   | 1.000      | -            | -                | -                | -         |   -13.56 | CSO, CutzMeretz, Leomonster, MTGG, zede   |
|           14 |      785 | 2024-07-22 | paiN Academy   | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.73 | CSO, CutzMeretz, Leomonster, MTGG, zede   |
|           13 |      794 | 2024-07-22 | ODDIK          | L   | 1.000      | -            | -                | -                | -         |    -5.44 | CSO, CutzMeretz, Leomonster, MTGG, zede   |
|           12 |      820 | 2024-07-21 | FURIA Academy  | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.098 (0.036)    | 0 (0.000) |     7.35 | CSO, CutzMeretz, Leomonster, MTGG, zede   |
|           11 |      853 | 2024-07-20 | KRÜ            | L   | 1.000      | -            | -                | -                | -         |   -12.30 | CSO, CutzMeretz, Leomonster, MTGG, zede   |
|           10 |      975 | 2024-07-17 | Hawks          | W   | 1.000      | 0.371        | 0.008 (0.003)    | 0.038 (0.014)    | 0 (0.000) |    12.49 | CSO, CutzMeretz, Leomonster, MTGG, zede   |
|            9 |     1042 | 2024-07-16 | Vikings KR     | L   | 1.000      | -            | -                | -                | -         |   -13.49 | CSO, CutzMeretz, Leomonster, MTGG, zede   |
|            8 |     1190 | 2024-07-10 | ODDIK          | L   | 0.967      | -            | -                | -                | -         |    -6.63 | bsd, CSO, CutzMeretz, Leomonster, zede    |
|            7 |     1211 | 2024-07-09 | Solid          | L   | 0.960      | -            | -                | -                | -         |   -12.83 | bsd, CSO, CutzMeretz, Leomonster, zede    |
|            6 |     1229 | 2024-07-08 | Sharks         | L   | 0.954      | -            | -                | -                | -         |    -7.51 | bsd, CSO, CutzMeretz, Leomonster, zede    |
|            5 |     1252 | 2024-07-06 | 9z Academy     | W   | 0.940      | 0.333        | 0.000 (0.000)    | 0.065 (0.020)    | 0 (0.000) |     5.33 | bsd, CSO, CutzMeretz, Leomonster, zede    |
|            4 |     1262 | 2024-07-01 | Vikings KR     | L   | 0.907      | -            | -                | -                | -         |   -13.25 | bsd, CutzMeretz, Leomonster, perez, zede  |
|            3 |     1265 | 2024-06-30 | Sharks         | W   | 0.900      | 0.333        | 0.027 (0.008)    | 0.533 (0.160)    | 0 (0.000) |    21.54 | bsd, CutzMeretz, Leomonster, perez, zede  |
|            2 |     1275 | 2024-06-29 | Bounty Hunters | L   | 0.893      | -            | -                | -                | -         |    -8.66 | bsd, CutzMeretz, Leomonster, perez, zede  |
|            1 |     1292 | 2024-06-26 | Dusty Roots    | W   | 0.873      | 0.333        | 0.006 (0.002)    | 0.353 (0.103)    | 0 (0.000) |    15.72 | bsd, CutzMeretz, Leomonster, perez, zede  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,800.00)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-13 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-07-27 |      1.000 | $1,800.00      | $1,800.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
