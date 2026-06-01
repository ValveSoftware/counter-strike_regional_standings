### Roster Details<br />
Team Name: MARKandLARRY<br />
Roster: BRACE, micalis, Roflko, yourwombat, zeph<br />
Global Rank: [304](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_06_01.md)<br />
Regional Rank: [37]( ../../standings_asia_2026_06_01.md)<br />
<br />
Final Rank Value:  541.0<br />
<br />
Final Rank Value (541.0) = Starting Rank Value (507.3) + Head To Head Adjustments (33.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.210[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.056<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 507.3
- 400 + ( ( 0.056 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 507.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     1047 | 2026-04-30 | FURY        | L   | 0.985      | -            | -                | -                | -         |   -16.75 | BRACE, micalis, Roflko, yourwombat, zeph |
|            7 |     1097 | 2026-04-29 | Ground Zero | L   | 0.978      | -            | -                | -                | -         |    -3.25 | BRACE, micalis, Roflko, yourwombat, zeph |
|            6 |     1183 | 2026-04-27 | Rooster     | W   | 0.965      | 0.278        | 0.006 (0.002)    | 0.348 (0.093)    | 0 (0.000) |    24.40 | BRACE, micalis, Roflko, yourwombat, zeph |
|            5 |     2717 | 2026-03-24 | Mindfreak   | L   | 0.739      | -            | -                | -                | -         |    -3.90 | BRACE, micalis, Roflko, yourwombat, zeph |
|            4 |     2795 | 2026-03-23 | Skele       | W   | 0.732      | 0.278        | 0.000 (0.000)    | 0.068 (0.014)    | 0 (0.000) |    12.35 | BRACE, micalis, sav, yourwombat, zeph    |
|            3 |     2842 | 2026-03-22 | BBBMBCBS    | W   | 0.725      | 0.278        | 0.000 (0.000)    | 0.096 (0.019)    | 0 (0.000) |    10.15 | BRACE, micalis, Roflko, yourwombat, zeph |
|            2 |     2901 | 2026-03-21 | Mindfreak   | L   | 0.719      | -            | -                | -                | -         |    -3.39 | BRACE, micalis, Roflko, sav, yourwombat  |
|            1 |     2967 | 2026-03-20 | Ding Cuts   | W   | 0.711      | 0.278        | 0.001 (0.000)    | 0.138 (0.027)    | 0 (0.000) |    14.02 | BRACE, micalis, Roflko, yourwombat, zeph |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
