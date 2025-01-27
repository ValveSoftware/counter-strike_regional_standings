### Roster Details<br />
Team Name: adalYamigos<br />
Roster: cass1n, ckzao, delboNi, f4stzin, SHOOWTiME<br />
Global Rank: [120](../../standings_global_2025_01_27.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_27.md)<br />
Regional Rank: [29]( ../../standings_americas_2025_01_27.md)<br />
<br />
Final Rank Value:  806.0<br />
<br />
Final Rank Value (806.0) = Starting Rank Value (776.2) + Head To Head Adjustments (29.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.340[<sup>1</sup>](#table2)
- Bounty Collected: 0.330[<sup>2</sup>](#table1)
- Opponent Network: 0.099[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.192<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 776.2
- 400 + ( ( 0.192 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 776.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |       35 | 2025-01-24 | GameHunters | W   | 1.000      | 0.450        | 0.002 (0.001)    | 0.458 (0.206)    | 0 (0.000) |    13.24 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME |
|           13 |       40 | 2025-01-24 | GameHunters | L   | 1.000      | -            | -                | -                | -         |   -18.49 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME |
|           12 |       91 | 2025-01-23 | UNO MILLE   | W   | 1.000      | 0.450        | 0.016 (0.007)    | 0.444 (0.200)    | 0 (0.000) |    15.05 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME |
|           11 |       96 | 2025-01-23 | UNO MILLE   | W   | 1.000      | 0.450        | 0.016 (0.007)    | 0.444 (0.200)    | 0 (0.000) |    16.44 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME |
|           10 |      135 | 2025-01-22 | Yawara      | W   | 1.000      | 0.450        | 0.005 (0.002)    | 0.386 (0.174)    | 0 (0.000) |    13.05 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME |
|            9 |      139 | 2025-01-22 | Yawara      | L   | 1.000      | -            | -                | -                | -         |   -18.69 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME |
|            8 |     1445 | 2024-10-26 | ODDIK       | L   | 0.581      | -            | -                | -                | -         |    -6.38 | cass1n, delboNi, f4stzin, iDk, pesadelo    |
|            7 |     1617 | 2024-10-17 | BESTIA      | L   | 0.521      | -            | -                | -                | -         |    -2.53 | cass1n, delboNi, f4stzin, iDk, shz         |
|            6 |     1646 | 2024-10-16 | paiN        | L   | 0.515      | -            | -                | -                | -         |    -0.44 | cass1n, delboNi, f4stzin, iDk, shz         |
|            5 |     1676 | 2024-10-15 | Imperial    | W   | 0.508      | 0.450        | 0.161 (0.037)    | 0.411 (0.094)    | 0 (0.000) |    14.15 | cass1n, delboNi, f4stzin, iDk, shz         |
|            4 |     1923 | 2024-10-04 | Solid       | L   | 0.435      | -            | -                | -                | -         |    -4.20 | cass1n, delboNi, f4stzin, iDk, shz         |
|            3 |     1925 | 2024-10-04 | Solid       | L   | 0.434      | -            | -                | -                | -         |    -4.34 | cass1n, delboNi, f4stzin, iDk, shz         |
|            2 |     1962 | 2024-10-03 | MIBR        | L   | 0.428      | -            | -                | -                | -         |    -0.31 | cass1n, delboNi, f4stzin, iDk, shz         |
|            1 |     1963 | 2024-10-03 | MIBR        | W   | 0.428      | 0.450        | 0.205 (0.040)    | 0.598 (0.115)    | 0 (0.000) |    13.21 | cass1n, delboNi, f4stzin, iDk, shz         |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,358.66)
- Divide that value by the 5th highest value among all rosters ($204,341.08)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-27 |      0.588 | $1,250.00      | $734.85         |
| 2024-10-20 |      0.541 | $3,000.00      | $1,623.81       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
