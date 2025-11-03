### Roster Details<br />
Team Name: 9BOOMPRO<br />
Roster: Ax1Le, FL4MUS, shalfey, zorte<br />
Global Rank: [93](../../standings_global_2025_11_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_11_03.md)<br />
Regional Rank: [63]( ../../standings_europe_2025_11_03.md)<br />
<br />
Final Rank Value:  893.5<br />
<br />
Final Rank Value (893.5) = Starting Rank Value (822.0) + Head To Head Adjustments (71.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.306[<sup>1</sup>](#table2)
- Bounty Collected: 0.303[<sup>2</sup>](#table1)
- Opponent Network: 0.100[<sup>2</sup>](#table1)
- LAN Wins: 0.192[<sup>2</sup>](#table1)

The average of these factors is 0.225<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 822.0
- 400 + ( ( 0.225 - 0.000 ) / ( 0.853 - 0.000 ) ) * 1600 = 822.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     1047 | 2025-09-27 | BetBoom         | L   | 0.954      | -            | -                | -                | -         |    -1.92 | Ax1Le, FL4MUS, shalfey, sugaR, zorte   |
|            6 |     1065 | 2025-09-27 | Nuclear TigeRES | W   | 0.952      | 0.435        | 0.006 (0.002)    | 0.617 (0.255)    | 1 (0.952) |    15.84 | Ax1Le, FL4MUS, shalfey, sugaR, zorte   |
|            5 |     1095 | 2025-09-26 | PARIVISION      | L   | 0.947      | -            | -                | -                | -         |    -1.91 | Ax1Le, FL4MUS, shalfey, sugaR, zorte   |
|            4 |     1148 | 2025-09-25 | Nemiga          | W   | 0.940      | 0.435        | 0.075 (0.031)    | 0.593 (0.242)    | 1 (0.940) |    22.94 | Ax1Le, FL4MUS, shalfey, sugaR, zorte   |
|            3 |     2055 | 2025-08-26 | Nuclear TigeRES | W   | 0.741      | 0.384        | 0.006 (0.002)    | 0.617 (0.176)    | 0 (0.000) |    12.63 | Ax1Le, FL4MUS, n0rb3r7, shalfey, zorte |
|            2 |     2108 | 2025-08-23 | RUBY            | W   | 0.719      | 0.384        | 0.052 (0.014)    | 1.000 (0.276)    | 0 (0.000) |    14.06 | Ax1Le, FL4MUS, n0rb3r7, shalfey, zorte |
|            1 |     2176 | 2025-08-20 | SENZA           | W   | 0.698      | 0.384        | 0.002 (0.001)    | 0.184 (0.049)    | 0 (0.000) |     9.89 | Ax1Le, FL4MUS, n0rb3r7, shalfey, zorte |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,359.27)
- Divide that value by the 5th highest value among all rosters ($619,318.60)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-09-28 |      0.960 | $3,500.00      | $3,359.27       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
