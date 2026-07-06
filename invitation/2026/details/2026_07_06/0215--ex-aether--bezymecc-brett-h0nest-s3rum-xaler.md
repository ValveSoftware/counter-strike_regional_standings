### Roster Details<br />
Team Name: ex-Aether<br />
Roster: bezymecc, brett, H0NeST, s3rum, xaler<br />
Global Rank: [215](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_07_06.md)<br />
Regional Rank: [46]( ../../standings_americas_2026_07_06.md)<br />
<br />
Final Rank Value:  709.0<br />
<br />
Final Rank Value (709.0) = Starting Rank Value (659.2) + Head To Head Adjustments (49.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.291[<sup>1</sup>](#table2)
- Bounty Collected: 0.238[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.138<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 659.2
- 400 + ( ( 0.138 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 659.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      900 | 2026-05-24 | SportsBetExpert | L   | 0.916      | -            | -                | -                | -         |    -9.75 | Andrew, bezymecc, H0NeST, kAAdory, s3rum |
|            7 |      901 | 2026-05-24 | Overtake Sector | W   | 0.915      | 0.278        | 0.004 (0.001)    | 0.074 (0.019)    | 0 (0.000) |    11.07 | Andrew, bezymecc, H0NeST, kAAdory, s3rum |
|            6 |     1550 | 2026-05-03 | Wildcard        | L   | 0.774      | -            | -                | -                | -         |    -0.80 | bezymecc, brett, H0NeST, s3rum, xaler    |
|            5 |     1678 | 2026-04-30 | BOSS            | W   | 0.756      | 0.354        | 0.002 (0.001)    | 0.220 (0.059)    | 0 (0.000) |    15.07 | bezymecc, brett, H0NeST, s3rum, xaler    |
|            4 |     1763 | 2026-04-28 | Fisher College  | L   | 0.743      | -            | -                | -                | -         |    -3.03 | bezymecc, brett, H0NeST, s3rum, xaler    |
|            3 |     1769 | 2026-04-28 | FarmVille       | W   | 0.742      | 0.354        | 0.005 (0.001)    | 0.280 (0.074)    | 0 (0.000) |    13.78 | bezymecc, brett, H0NeST, s3rum, xaler    |
|            2 |     1811 | 2026-04-27 | Shimmer         | W   | 0.735      | 0.354        | 0.011 (0.003)    | 0.082 (0.021)    | 0 (0.000) |    10.17 | bezymecc, brett, H0NeST, s3rum, xaler    |
|            1 |     1849 | 2026-04-26 | EMPIRE          | W   | 0.730      | 0.363        | 0.002 (0.001)    | 0.166 (0.044)    | 0 (0.000) |    13.24 | bezymecc, brett, H0NeST, s3rum, xaler    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,047.14)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-24 |      0.916 | $750.00        | $687.05         |
| 2026-05-03 |      0.777 | $1,750.00      | $1,360.09       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
