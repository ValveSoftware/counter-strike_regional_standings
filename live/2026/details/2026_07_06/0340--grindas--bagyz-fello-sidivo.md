### Roster Details<br />
Team Name: Grindas<br />
Roster: BaGyZ, fello, Sidivo<br />
Global Rank: [340](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [216]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  505.0<br />
<br />
Final Rank Value (505.0) = Starting Rank Value (483.3) + Head To Head Adjustments (21.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.175[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.044<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 483.3
- 400 + ( ( 0.044 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 483.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2729 | 2026-04-02 | Atreides   | L   | 0.567      | -            | -                | -                | -         |    -3.34 | BaGyZ, fello, OniX, REL, Sidivo   |
|            4 |     2839 | 2026-04-01 | BIG EQUIPA | W   | 0.560      | 0.384        | 0.001 (0.000)    | 0.047 (0.010)    | 0 (0.000) |    10.74 | BaGyZ, fello, REL, Sidivo, Uzman  |
|            3 |     2967 | 2026-03-30 | THE        | W   | 0.551      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.38 | BaGyZ, fello, OniX, REL, Sidivo   |
|            2 |     2991 | 2026-03-30 | PsychoFace | L   | 0.547      | -            | -                | -                | -         |    -0.78 | BaGyZ, fello, OniX, REL, Sidivo   |
|            1 |     3067 | 2026-03-29 | home       | W   | 0.540      | 0.384        | 0.000 (0.000)    | 0.017 (0.004)    | 0 (0.000) |     8.64 | BaGyZ, fello, OniX, Sidivo, Uzman |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
