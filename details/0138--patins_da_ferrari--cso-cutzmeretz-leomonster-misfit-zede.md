### Roster Details<br />
Team Name: Patins da Ferrari<br />
Roster: CSO, CutzMeretz, Leomonster, Misfit, zede<br />
Global Rank: [138](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [37]( ../standings_americas.md)<br />
<br />
Final Rank Value:  750.4<br />
<br />
Final Rank Value (750.4) = Starting Rank Value (791.5) + Head To Head Adjustments (-41.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.344[<sup>1</sup>](#table2)
- Bounty Collected: 0.312[<sup>2</sup>](#table1)
- Opponent Network: 0.103[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.190<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 791.5
- 400 + ( ( 0.190 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 791.5


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
|           24 |      146 | 2024-07-27 | Case           | L   | 1.000      | -            | -                | -                | -         |    -9.67 | CSO, CutzMeretz, Leomonster, Misfit, zede |
|           23 |      162 | 2024-07-26 | ODDIK          | L   | 1.000      | -            | -                | -                | -         |    -5.53 | CSO, CutzMeretz, Leomonster, Misfit, zede |
|           22 |      174 | 2024-07-26 | ODDIK          | L   | 1.000      | -            | -                | -                | -         |    -6.47 | CSO, CutzMeretz, Leomonster, Misfit, zede |
|           21 |      194 | 2024-07-25 | Sharks         | L   | 1.000      | -            | -                | -                | -         |    -7.20 | CSO, CutzMeretz, Leomonster, MTGG, zede   |
|           20 |      269 | 2024-07-23 | Galorys        | L   | 1.000      | -            | -                | -                | -         |   -15.09 | CSO, CutzMeretz, Leomonster, MTGG, zede   |
|           19 |      304 | 2024-07-22 | paiN Academy   | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.94 | CSO, CutzMeretz, Leomonster, MTGG, zede   |
|           18 |      313 | 2024-07-22 | ODDIK          | L   | 1.000      | -            | -                | -                | -         |    -6.27 | CSO, CutzMeretz, Leomonster, MTGG, zede   |
|           17 |      339 | 2024-07-21 | FURIA Academy  | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.103 (0.038)    | 0 (0.000) |     5.83 | CSO, CutzMeretz, Leomonster, MTGG, zede   |
|           16 |      372 | 2024-07-20 | KRÜ            | L   | 1.000      | -            | -                | -                | -         |   -13.46 | CSO, CutzMeretz, Leomonster, MTGG, zede   |
|           15 |      494 | 2024-07-17 | Hawks          | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.029 (0.011)    | 0 (0.000) |     5.67 | CSO, CutzMeretz, Leomonster, MTGG, zede   |
|           14 |      561 | 2024-07-16 | Vikings KR     | L   | 1.000      | -            | -                | -                | -         |   -14.92 | CSO, CutzMeretz, Leomonster, MTGG, zede   |
|           13 |      709 | 2024-07-10 | ODDIK          | L   | 1.000      | -            | -                | -                | -         |    -8.63 | bsd, CSO, CutzMeretz, Leomonster, zede    |
|           12 |      730 | 2024-07-09 | Solid          | L   | 1.000      | -            | -                | -                | -         |   -14.94 | bsd, CSO, CutzMeretz, Leomonster, zede    |
|           11 |      748 | 2024-07-08 | Sharks         | L   | 1.000      | -            | -                | -                | -         |    -8.96 | bsd, CSO, CutzMeretz, Leomonster, zede    |
|           10 |      771 | 2024-07-06 | 9z Academy     | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.069 (0.023)    | 0 (0.000) |     4.01 | bsd, CSO, CutzMeretz, Leomonster, zede    |
|            9 |      781 | 2024-07-01 | Vikings KR     | L   | 1.000      | -            | -                | -                | -         |   -16.47 | bsd, CutzMeretz, Leomonster, perez, zede  |
|            8 |      784 | 2024-06-30 | Sharks         | W   | 0.994      | 0.333        | 0.029 (0.010)    | 0.558 (0.185)    | 0 (0.000) |    22.45 | bsd, CutzMeretz, Leomonster, perez, zede  |
|            7 |      794 | 2024-06-29 | Bounty Hunters | L   | 0.986      | -            | -                | -                | -         |   -10.92 | bsd, CutzMeretz, Leomonster, perez, zede  |
|            6 |      811 | 2024-06-26 | Dusty Roots    | W   | 0.966      | 0.333        | 0.007 (0.002)    | 0.286 (0.092)    | 0 (0.000) |    14.68 | bsd, CutzMeretz, Leomonster, perez, zede  |
|            5 |      914 | 2024-06-14 | inSanitY       | L   | 0.886      | -            | -                | -                | -         |    -8.62 | CutzMeretz, desh, Leomonster, roz, zede   |
|            4 |     1078 | 2024-06-09 | Vikings KR     | W   | 0.852      | 0.450        | 0.008 (0.003)    | 0.458 (0.175)    | 0 (0.000) |    12.58 | CutzMeretz, desh, Leomonster, roz, zede   |
|            3 |     1144 | 2024-06-08 | Sharks         | W   | 0.846      | 0.450        | 0.029 (0.011)    | 0.558 (0.212)    | 0 (0.000) |    20.80 | CutzMeretz, desh, Leomonster, roz, zede   |
|            2 |     1174 | 2024-06-07 | paiN           | L   | 0.841      | -            | -                | -                | -         |    -1.23 | CutzMeretz, desh, Leomonster, roz, zede   |
|            1 |     1250 | 2024-06-06 | ODDIK          | W   | 0.833      | 0.450        | 0.096 (0.036)    | 0.781 (0.293)    | 0 (0.000) |    18.40 | CutzMeretz, desh, Leomonster, roz, zede   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,050.73)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-27 |      1.000 | $1,800.00      | $1,800.00       |
| 2024-06-16 |      0.900 | $2,500.00      | $2,250.73       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
