### Roster Details<br />
Team Name: 6666<br />
Roster: auth0ri, m4d4ra, rickangel, skcH<br />
Global Rank: [367](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [226]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  438.4<br />
<br />
Final Rank Value (438.4) = Starting Rank Value (449.2) + Head To Head Adjustments (-10.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.104[<sup>2</sup>](#table1)

The average of these factors is 0.026<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 449.2
- 400 + ( ( 0.026 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 449.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |       65 | 2026-06-28 | BERG           | L   | 1.000      | -            | -                | -                | -         |    -4.93 | auth0ri, dENZY, m4d4ra, rickangel, skcH |
|            5 |       67 | 2026-06-28 | SINQU REHTI    | L   | 1.000      | -            | -                | -                | -         |   -13.52 | auth0ri, dENZY, m4d4ra, rickangel, skcH |
|            4 |       70 | 2026-06-28 | ASTRAL         | L   | 1.000      | -            | -                | -                | -         |    -2.12 | auth0ri, dENZY, m4d4ra, rickangel, skcH |
|            3 |      308 | 2026-06-13 | Alliance       | L   | 1.000      | -            | -                | -                | -         |    -0.22 | auth0ri, fix, m4d4ra, rickangel, skcH   |
|            2 |      326 | 2026-06-13 | Minkens finest | W   | 1.000      | 0.373        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |    13.13 | auth0ri, fix, m4d4ra, rickangel, skcH   |
|            1 |      337 | 2026-06-13 | aimclub        | L   | 1.000      | -            | -                | -                | -         |    -3.13 | auth0ri, fix, m4d4ra, rickangel, skcH   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
