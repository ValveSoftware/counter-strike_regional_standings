### Roster Details<br />
Team Name: ex-Aether<br />
Roster: bezymecc, brett, H0NeST, s3rum, xaler<br />
Global Rank: [215](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_01.md)<br />
Regional Rank: [52]( ../../standings_americas_2026_06_01.md)<br />
<br />
Final Rank Value:  722.5<br />
<br />
Final Rank Value (722.5) = Starting Rank Value (664.3) + Head To Head Adjustments (58.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.294[<sup>1</sup>](#table2)
- Bounty Collected: 0.229[<sup>2</sup>](#table1)
- Opponent Network: 0.032[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.139<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 664.3
- 400 + ( ( 0.139 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 664.3


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
|            8 |      243 | 2026-05-24 | SportsBetExpert | L   | 1.000      | -            | -                | -                | -         |   -10.56 | Andrew, bezymecc, H0NeST, kAAdory, s3rum |
|            7 |      244 | 2026-05-24 | Overtake Sector | W   | 1.000      | 0.278        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.22 | Andrew, bezymecc, H0NeST, kAAdory, s3rum |
|            6 |      889 | 2026-05-03 | Wildcard        | L   | 1.000      | -            | -                | -                | -         |    -0.63 | bezymecc, brett, H0NeST, s3rum, xaler    |
|            5 |     1017 | 2026-04-30 | BOSS            | W   | 0.989      | 0.354        | 0.003 (0.001)    | 0.286 (0.100)    | 0 (0.000) |    21.82 | bezymecc, brett, H0NeST, s3rum, xaler    |
|            4 |     1102 | 2026-04-28 | Fisher College  | L   | 0.976      | -            | -                | -                | -         |    -2.63 | bezymecc, brett, H0NeST, s3rum, xaler    |
|            3 |     1108 | 2026-04-28 | FarmVille       | W   | 0.975      | 0.354        | 0.007 (0.002)    | 0.354 (0.122)    | 0 (0.000) |    19.25 | bezymecc, brett, H0NeST, s3rum, xaler    |
|            2 |     1150 | 2026-04-27 | Shimmer         | W   | 0.968      | 0.354        | 0.000 (0.000)    | 0.057 (0.019)    | 0 (0.000) |     8.21 | bezymecc, brett, H0NeST, s3rum, xaler    |
|            1 |     1188 | 2026-04-26 | EMPIRE          | W   | 0.963      | 0.363        | 0.002 (0.001)    | 0.213 (0.074)    | 0 (0.000) |    18.46 | bezymecc, brett, H0NeST, s3rum, xaler    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,500.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-24 |      1.000 | $750.00        | $750.00         |
| 2026-05-03 |      1.000 | $1,750.00      | $1,750.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
