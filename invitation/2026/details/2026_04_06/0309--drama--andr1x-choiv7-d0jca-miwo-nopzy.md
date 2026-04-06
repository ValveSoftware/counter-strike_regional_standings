### Roster Details<br />
Team Name: Drama<br />
Roster: andr1x, choiv7, d0jca, miwo, nopzy<br />
Global Rank: [309](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [190]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  530.2<br />
<br />
Final Rank Value (530.2) = Starting Rank Value (506.1) + Head To Head Adjustments (24.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.200[<sup>2</sup>](#table1)

The average of these factors is 0.054<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 506.1
- 400 + ( ( 0.054 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 506.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |       25 | 2026-04-05 | magic        | L   | 1.000      | -            | -                | -                | -         |    -0.30 | andr1x, choiv7, d0jca, miwo, nopzy |
|            6 |      102 | 2026-04-03 | FaZe         | L   | 1.000      | -            | -                | -                | -         |    -0.18 | andr1x, choiv7, d0jca, miwo, nopzy |
|            5 |      112 | 2026-04-03 | BEE          | W   | 1.000      | 0.396        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |    10.23 | andr1x, choiv7, d0jca, miwo, nopzy |
|            4 |      351 | 2026-03-29 | INFINITE     | L   | 1.000      | -            | -                | -                | -         |    -5.21 | andr1x, choiv7, d0jca, miwo, nopzy |
|            3 |      364 | 2026-03-29 | HYPERSPIRIT  | W   | 1.000      | 0.354        | 0.000 (0.000)    | 0.479 (0.170)    | 1 (1.000) |    29.74 | andr1x, choiv7, d0jca, miwo, nopzy |
|            2 |      383 | 2026-03-29 | Eternal Fire | L   | 1.000      | -            | -                | -                | -         |    -0.42 | andr1x, choiv7, d0jca, miwo, nopzy |
|            1 |     1851 | 2026-02-27 | yngods       | L   | 0.948      | -            | -                | -                | -         |    -9.72 | andr1x, choiv7, d0jca, miwo, VLDN  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
