### Roster Details<br />
Team Name: Betera<br />
Roster: h1te, MaSvAl, synyx, tENZY, Vert<br />
Global Rank: [272](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [150]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  420.3<br />
<br />
Final Rank Value (420.3) = Starting Rank Value (402.2) + Head To Head Adjustments (18.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.001<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 402.2
- 400 + ( ( 0.001 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 402.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      337 | 2025-03-24 | WildLotus   | L   | 1.000      | -            | -                | -                | -         |   -10.03 | h1te, MaSvAl, synyx, tENZY, Vert |
|            7 |      342 | 2025-03-24 | undeRRRated | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    14.41 | h1te, MaSvAl, synyx, tENZY, Vert |
|            6 |      366 | 2025-03-22 | Tricked     | L   | 1.000      | -            | -                | -                | -         |    -8.41 | h1te, MaSvAl, synyx, tENZY, Vert |
|            5 |      381 | 2025-03-22 | SkyFury     | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    14.68 | h1te, MaSvAl, synyx, tENZY, Vert |
|            4 |      436 | 2025-03-17 | ECSTATIC    | L   | 1.000      | -            | -                | -                | -         |    -2.13 | h1te, MaSvAl, synyx, tENZY, Vert |
|            3 |      439 | 2025-03-17 | Insilio     | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.339 (0.048)    | 0 (0.000) |    22.92 | h1te, MaSvAl, synyx, tENZY, Vert |
|            2 |      475 | 2025-03-15 | Kubix       | L   | 1.000      | -            | -                | -                | -         |    -4.87 | h1te, MaSvAl, synyx, tENZY, Vert |
|            1 |     1410 | 2025-02-08 | LFO 3       | L   | 0.814      | -            | -                | -                | -         |    -8.46 | h1te, MaSvAl, synyx, tENZY, Vert |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
