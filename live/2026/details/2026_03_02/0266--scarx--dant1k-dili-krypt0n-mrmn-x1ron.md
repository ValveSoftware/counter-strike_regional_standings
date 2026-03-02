### Roster Details<br />
Team Name: ScarX<br />
Roster: Dant1k, Dili, kRYPt0N, mRmN, X1RON<br />
Global Rank: [266](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_03_02.md)<br />
Regional Rank: [35]( ../../standings_asia_2026_03_02.md)<br />
<br />
Final Rank Value:  574.8<br />
<br />
Final Rank Value (574.8) = Starting Rank Value (591.1) + Head To Head Adjustments (-16.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.225[<sup>1</sup>](#table2)
- Bounty Collected: 0.178[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.101<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 591.1
- 400 + ( ( 0.101 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 591.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |       82 | 2026-02-27 | Legion      | L   | 1.000      | -            | -                | -                | -         |   -10.01 | Berar, Dant1k, Dili, mRmN, X1RON   |
|           13 |       93 | 2026-02-27 | Biryani     | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.038 (0.005)    | 0 (0.000) |     8.60 | Berar, Dant1k, Dili, mRmN, X1RON   |
|           12 |      127 | 2026-02-26 | Legion      | L   | 1.000      | -            | -                | -                | -         |   -10.47 | Berar, Dant1k, Dili, mRmN, X1RON   |
|           11 |      156 | 2026-02-25 | THE UNIT    | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     8.19 | Berar, Dant1k, Dili, mRmN, X1RON   |
|           10 |     2272 | 2025-11-29 | OxinGame    | L   | 0.584      | -            | -                | -                | -         |    -8.50 | Dant1k, Dili, kRYPt0N, mRmN, X1RON |
|            9 |     3387 | 2025-10-25 | Just Swing  | L   | 0.346      | -            | -                | -                | -         |    -3.98 | Dant1k, Dili, kRYPt0N, mRmN, X1RON |
|            8 |     3451 | 2025-10-24 | FengDa      | L   | 0.339      | -            | -                | -                | -         |    -2.36 | Dant1k, Dili, kRYPt0N, mRmN, X1RON |
|            7 |     3500 | 2025-10-23 | NomadS      | W   | 0.333      | 0.333        | 0.002 (0.000)    | 0.048 (0.005)    | 0 (0.000) |     5.68 | Dant1k, Dili, kRYPt0N, mRmN, X1RON |
|            6 |     4027 | 2025-10-06 | Legion      | L   | 0.219      | -            | -                | -                | -         |    -2.68 | Dant1k, Dili, kRYPt0N, mRmN, X1RON |
|            5 |     4089 | 2025-10-05 | NomadS      | L   | 0.213      | -            | -                | -                | -         |    -3.10 | Dant1k, Dili, kRYPt0N, mRmN, X1RON |
|            4 |     4617 | 2025-09-21 | CRIMSON     | W   | 0.118      | 0.262        | 0.000 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     1.40 | Dant1k, Dili, K1A, kRYPt0N, X1RON  |
|            3 |     4622 | 2025-09-21 | OxinGame    | W   | 0.118      | 0.262        | 0.002 (0.000)    | 0.036 (0.001)    | 0 (0.000) |     1.94 | Dant1k, Dili, K1A, kRYPt0N, X1RON  |
|            2 |     5084 | 2025-09-09 | GATERON     | L   | 0.039      | -            | -                | -                | -         |    -0.60 | Dant1k, Dili, K1A, kRYPt0N, X1RON  |
|            1 |     5131 | 2025-09-08 | Last Bullet | L   | 0.033      | -            | -                | -                | -         |    -0.34 | Dant1k, Dili, K1A, kRYPt0N, X1RON  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($118.48)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-09-21 |      0.118 | $1,000.00      | $118.48         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
