### Roster Details<br />
Team Name: SKYFURY<br />
Roster: 7oX1C, Kiy0o, shield<br />
Global Rank: [214](../../standings_global_2025_10_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_10_06.md)<br />
Regional Rank: [120]( ../../standings_europe_2025_10_06.md)<br />
<br />
Final Rank Value:  545.2<br />
<br />
Final Rank Value (545.2) = Starting Rank Value (528.8) + Head To Head Adjustments (16.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.251[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.066<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 528.8
- 400 + ( ( 0.066 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 528.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1473 | 2025-08-14 | UNiTY      | L   | 0.846      | -            | -                | -                | -         |    -7.07 | 7oX1C, Kiy0o, majky, Q-Q, shield     |
|            5 |     1681 | 2025-08-09 | ECLOT      | W   | 0.813      | 0.278        | 0.045 (0.010)    | 0.486 (0.110)    | 0 (0.000) |    23.11 | 7oX1C, Kiy0o, majky, Q-Q, shield     |
|            4 |     3645 | 2025-04-20 | NOVAQ      | L   | 0.072      | -            | -                | -                | -         |    -0.21 | 7oX1C, auth0ri, Kiy0o, shield, Templ |
|            3 |     3695 | 2025-04-17 | FUT        | L   | 0.054      | -            | -                | -                | -         |    -0.07 | 7oX1C, auth0ri, Kiy0o, shield, Templ |
|            2 |     3784 | 2025-04-14 | CYBERSHOKE | L   | 0.033      | -            | -                | -                | -         |    -0.06 | 7oX1C, auth0ri, Kiy0o, shield, Templ |
|            1 |     3813 | 2025-04-12 | Nexus      | W   | 0.022      | 0.435        | 0.031 (0.000)    | 0.646 (0.006)    | 0 (0.000) |     0.64 | 7oX1C, auth0ri, Kiy0o, shield, Templ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($380,085.28)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
