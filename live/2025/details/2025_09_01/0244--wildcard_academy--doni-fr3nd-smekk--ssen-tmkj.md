### Roster Details<br />
Team Name: Wildcard Academy<br />
Roster: doni, fr3nd, smekk-, sSen, TMKj<br />
Global Rank: [244](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_09_01.md)<br />
Regional Rank: [124]( ../../standings_europe_2025_09_01.md)<br />
<br />
Final Rank Value:  508.6<br />
<br />
Final Rank Value (508.6) = Starting Rank Value (506.2) + Head To Head Adjustments (2.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.203[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.055<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 506.2
- 400 + ( ( 0.055 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 506.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      486 | 2025-08-11 | K27            | L   | 1.000      | -            | -                | -                | -         |   -14.27 | doni, leen, mhL, sSen, TMKj     |
|            5 |     1134 | 2025-07-09 | modeame        | L   | 0.841      | -            | -                | -                | -         |    -8.17 | doni, fr3nd, smekk-, sSen, TMKj |
|            4 |     1174 | 2025-07-07 | QMISTRY        | L   | 0.827      | -            | -                | -                | -         |    -7.77 | doni, fr3nd, smekk-, sSen, TMKj |
|            3 |     1189 | 2025-07-05 | TPuDCATb TPu   | L   | 0.812      | -            | -                | -                | -         |    -4.14 | doni, fr3nd, smekk-, sSen, TMKj |
|            2 |     1194 | 2025-07-03 | Fire Flux      | W   | 0.801      | 0.486        | 0.002 (0.001)    | 0.323 (0.126)    | 0 (0.000) |    20.29 | doni, fr3nd, smekk-, sSen, TMKj |
|            1 |     1210 | 2025-07-01 | Fisher College | W   | 0.787      | 0.486        | 0.001 (0.000)    | 0.160 (0.061)    | 0 (0.000) |    16.45 | doni, fr3nd, smekk-, sSen, TMKj |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
