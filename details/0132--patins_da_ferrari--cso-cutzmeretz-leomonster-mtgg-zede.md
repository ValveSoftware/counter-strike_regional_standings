### Roster Details<br />
Team Name: Patins da Ferrari<br />
Roster: CSO, CutzMeretz, Leomonster, MTGG, zede<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [132](../standings_global.md)<br />
Regional Rank: [33]( ../standings_americas.md)<br />
Final Rank Value:  773.0<br />
<br />
Final Rank Value (773.0) = Starting Rank Value (775.6) + Head To Head Adjustments (-2.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.326[<sup>1</sup>](#table2)
- Bounty Collected: 0.316[<sup>2</sup>](#table1)
- Opponent Network: 0.101[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.186<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 775.6
- 400 + ( ( 0.186 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 775.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |       27 | 2024-07-23 | Galorys        | L   | 1.000      | -            | -                | -                | -         |   -15.13 | CSO, CutzMeretz, Leomonster, MTGG, zede  |
|           19 |       62 | 2024-07-22 | paiN Academy   | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.03 | CSO, CutzMeretz, Leomonster, MTGG, zede  |
|           18 |       71 | 2024-07-22 | ODDIK          | L   | 1.000      | -            | -                | -                | -         |    -5.90 | CSO, CutzMeretz, Leomonster, MTGG, zede  |
|           17 |       97 | 2024-07-21 | FURIA Academy  | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.112 (0.041)    | 0 (0.000) |     6.01 | CSO, CutzMeretz, Leomonster, MTGG, zede  |
|           16 |      130 | 2024-07-20 | KRÜ            | L   | 1.000      | -            | -                | -                | -         |   -13.11 | CSO, CutzMeretz, Leomonster, MTGG, zede  |
|           15 |      252 | 2024-07-17 | Hawks          | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.033 (0.012)    | 0 (0.000) |     5.83 | CSO, CutzMeretz, Leomonster, MTGG, zede  |
|           14 |      319 | 2024-07-16 | Vikings KR     | L   | 1.000      | -            | -                | -                | -         |   -14.58 | CSO, CutzMeretz, Leomonster, MTGG, zede  |
|           13 |      467 | 2024-07-10 | ODDIK          | L   | 1.000      | -            | -                | -                | -         |    -8.23 | bsd, CSO, CutzMeretz, Leomonster, zede   |
|           12 |      488 | 2024-07-09 | Solid          | L   | 1.000      | -            | -                | -                | -         |   -14.45 | bsd, CSO, CutzMeretz, Leomonster, zede   |
|           11 |      506 | 2024-07-08 | Sharks         | L   | 1.000      | -            | -                | -                | -         |    -8.30 | bsd, CSO, CutzMeretz, Leomonster, zede   |
|           10 |      529 | 2024-07-06 | 9z Academy     | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.075 (0.025)    | 0 (0.000) |     4.17 | bsd, CSO, CutzMeretz, Leomonster, zede   |
|            9 |      539 | 2024-07-01 | Vikings KR     | L   | 1.000      | -            | -                | -                | -         |   -16.09 | bsd, CutzMeretz, Leomonster, perez, zede |
|            8 |      542 | 2024-06-30 | Sharks         | W   | 1.000      | 0.333        | 0.038 (0.013)    | 0.538 (0.179)    | 0 (0.000) |    23.33 | bsd, CutzMeretz, Leomonster, perez, zede |
|            7 |      552 | 2024-06-29 | Bounty Hunters | L   | 1.000      | -            | -                | -                | -         |   -10.43 | bsd, CutzMeretz, Leomonster, perez, zede |
|            6 |      569 | 2024-06-26 | Dusty Roots    | W   | 1.000      | 0.333        | 0.008 (0.003)    | 0.268 (0.089)    | 0 (0.000) |    14.20 | bsd, CutzMeretz, Leomonster, perez, zede |
|            5 |      672 | 2024-06-14 | inSanitY       | L   | 0.933      | -            | -                | -                | -         |    -8.36 | CutzMeretz, desh, Leomonster, roz, zede  |
|            4 |      836 | 2024-06-09 | Vikings KR     | W   | 0.899      | 0.450        | 0.011 (0.004)    | 0.415 (0.168)    | 0 (0.000) |    13.76 | CutzMeretz, desh, Leomonster, roz, zede  |
|            3 |      902 | 2024-06-08 | Sharks         | W   | 0.893      | 0.450        | 0.038 (0.015)    | 0.538 (0.216)    | 0 (0.000) |    22.64 | CutzMeretz, desh, Leomonster, roz, zede  |
|            2 |      932 | 2024-06-07 | paiN           | L   | 0.888      | -            | -                | -                | -         |    -1.00 | CutzMeretz, desh, Leomonster, roz, zede  |
|            1 |     1008 | 2024-06-06 | ODDIK          | W   | 0.880      | 0.450        | 0.083 (0.033)    | 0.694 (0.275)    | 0 (0.000) |    19.98 | CutzMeretz, desh, Leomonster, roz, zede  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,368.95)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
