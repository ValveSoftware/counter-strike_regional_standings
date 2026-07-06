### Roster Details<br />
Team Name: MAGICOS<br />
Roster: ghosT1, Lcs, Rkzinho, rx, snow<br />
Global Rank: [360](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_07_06.md)<br />
Regional Rank: [94]( ../../standings_americas_2026_07_06.md)<br />
<br />
Final Rank Value:  472.9<br />
<br />
Final Rank Value (472.9) = Starting Rank Value (473.4) + Head To Head Adjustments (-0.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.155[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.039<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 473.4
- 400 + ( ( 0.039 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 473.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     6092 | 2026-01-21 | Pugdesonesto  | L   | 0.095      | -            | -                | -                | -         |    -1.49 | ghosT1, Lcs, Rkzinho, rx, snow |
|            4 |     6146 | 2026-01-19 | lospegadinhas | W   | 0.081      | 0.371        | 0.000 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     1.02 | ghosT1, Lcs, Rkzinho, rx, snow |
|            3 |     6194 | 2026-01-17 | Crashers      | L   | 0.069      | -            | -                | -                | -         |    -0.49 | ghosT1, Lcs, Rkzinho, rx, snow |
|            2 |     6268 | 2026-01-16 | Players       | L   | 0.061      | -            | -                | -                | -         |    -0.58 | ghosT1, Lcs, Rkzinho, rx, snow |
|            1 |     6364 | 2026-01-13 | paiN Academy  | W   | 0.041      | 0.371        | 0.002 (0.000)    | 0.404 (0.006)    | 0 (0.000) |     1.02 | ghosT1, Lcs, Rkzinho, rx, snow |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
