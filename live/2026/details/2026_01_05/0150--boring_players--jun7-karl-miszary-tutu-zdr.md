### Roster Details<br />
Team Name: BORING PLAYERS<br />
Roster: Jun7, karl, Miszary, tutu, zdr<br />
Global Rank: [150](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_01_05.md)<br />
Regional Rank: [17]( ../../standings_asia_2026_01_05.md)<br />
<br />
Final Rank Value:  793.9<br />
<br />
Final Rank Value (793.9) = Starting Rank Value (787.8) + Head To Head Adjustments (6.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.282[<sup>1</sup>](#table2)
- Bounty Collected: 0.266[<sup>2</sup>](#table1)
- Opponent Network: 0.029[<sup>2</sup>](#table1)
- LAN Wins: 0.205[<sup>2</sup>](#table1)

The average of these factors is 0.196<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 787.8
- 400 + ( ( 0.196 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 787.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |      898 | 2025-11-13 | 9INE        | L   | 0.850      | -            | -                | -                | -         |    -0.74 | Jun7, karl, Miszary, tutu, zdr   |
|           18 |     1044 | 2025-11-09 | FengDa      | W   | 0.818      | 0.379        | 0.026 (0.008)    | 0.363 (0.113)    | 1 (0.818) |    18.96 | Jun7, karl, Miszary, tutu, zdr   |
|           17 |     1204 | 2025-11-07 | UR          | W   | 0.805      | 0.379        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.805) |     2.76 | Jun7, karl, Miszary, tutu, zdr   |
|           16 |     1258 | 2025-11-05 | Last Bullet | L   | 0.792      | -            | -                | -                | -         |   -12.57 | Jun7, karl, Miszary, tutu, zdr   |
|           15 |     1560 | 2025-10-26 | The QUBE    | L   | 0.726      | -            | -                | -                | -         |   -14.50 | Jun7, karl, Miszary, tutu, zdr   |
|           14 |     1611 | 2025-10-25 | Last Bullet | W   | 0.720      | 0.333        | 0.004 (0.001)    | 0.173 (0.042)    | 0 (0.000) |    10.91 | Jun7, karl, Miszary, tutu, zdr   |
|           13 |     1674 | 2025-10-24 | NomadS      | W   | 0.713      | 0.333        | 0.004 (0.001)    | 0.128 (0.030)    | 0 (0.000) |     8.62 | Jun7, karl, Miszary, tutu, zdr   |
|           12 |     1724 | 2025-10-23 | FengDa      | L   | 0.706      | -            | -                | -                | -         |    -5.21 | Jun7, karl, Miszary, tutu, zdr   |
|           11 |     2251 | 2025-10-06 | Last Bullet | L   | 0.593      | -            | -                | -                | -         |   -10.03 | Jun7, karl, Miszary, tutu, zdr   |
|           10 |     2310 | 2025-10-05 | The Huns    | L   | 0.586      | -            | -                | -                | -         |    -2.50 | Jun7, karl, Miszary, tutu, zdr   |
|            9 |     3251 | 2025-09-10 | The Huns    | L   | 0.420      | -            | -                | -                | -         |    -1.90 | Jun7, Karpyy, Miszary, tutu, zdr |
|            8 |     3305 | 2025-09-09 | Morningstar | W   | 0.413      | 0.333        | 0.026 (0.004)    | 0.352 (0.049)    | 0 (0.000) |    10.99 | Jun7, Karpyy, Miszary, tutu, zdr |
|            7 |     3347 | 2025-09-08 | Rare Atom   | L   | 0.406      | -            | -                | -                | -         |    -1.22 | Jun7, Karpyy, Miszary, tutu, zdr |
|            6 |     3601 | 2025-08-27 | Morningstar | L   | 0.330      | -            | -                | -                | -         |    -1.57 | Jun7, Karpyy, Miszary, tutu, zdr |
|            5 |     3650 | 2025-08-26 | FengDa      | L   | 0.318      | -            | -                | -                | -         |    -2.67 | Jun7, Karpyy, Miszary, tutu, zdr |
|            4 |     3654 | 2025-08-26 | Morningstar | W   | 0.317      | 0.367        | 0.026 (0.003)    | 0.352 (0.041)    | 1 (0.317) |     8.57 | Jun7, Karpyy, Miszary, tutu, zdr |
|            3 |     4006 | 2025-08-13 | NomadS      | L   | 0.233      | -            | -                | -                | -         |    -4.53 | Jun7, Karpyy, Miszary, tutu, zdr |
|            2 |     4053 | 2025-08-12 | Just Swing  | W   | 0.226      | 0.333        | 0.005 (0.000)    | 0.219 (0.016)    | 0 (0.000) |     3.32 | Jun7, Karpyy, Miszary, tutu, zdr |
|            1 |     4112 | 2025-08-11 | Rare Atom   | L   | 0.219      | -            | -                | -                | -         |    -0.62 | Jun7, Karpyy, Miszary, tutu, zdr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,213.79)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-16 |      0.865 | $1,404.00      | $1,213.79       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
