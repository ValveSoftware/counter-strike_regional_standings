### Roster Details<br />
Team Name: Betera<br />
Roster: h1te, MaSvAl, synyx, tENZY, Vert<br />
Global Rank: [285](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [159]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  425.0<br />
<br />
Final Rank Value (425.0) = Starting Rank Value (401.5) + Head To Head Adjustments (23.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.001<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 401.5
- 400 + ( ( 0.001 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 401.5


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
|            8 |      900 | 2025-03-24 | WildLotus   | L   | 0.920      | -            | -                | -                | -         |    -9.83 | h1te, MaSvAl, synyx, tENZY, Vert |
|            7 |      905 | 2025-03-24 | undeRRRated | W   | 0.920      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    13.12 | h1te, MaSvAl, synyx, tENZY, Vert |
|            6 |      933 | 2025-03-22 | Tricked     | L   | 0.908      | -            | -                | -                | -         |    -2.50 | h1te, MaSvAl, synyx, tENZY, Vert |
|            5 |      948 | 2025-03-22 | SkyFury     | W   | 0.906      | 0.143        | 0.000 (0.000)    | 0.051 (0.007)    | 0 (0.000) |    19.00 | h1te, MaSvAl, synyx, tENZY, Vert |
|            4 |     1041 | 2025-03-17 | ECSTATIC    | L   | 0.874      | -            | -                | -                | -         |    -1.85 | h1te, MaSvAl, synyx, tENZY, Vert |
|            3 |     1044 | 2025-03-17 | Insilio     | W   | 0.873      | 0.143        | 0.000 (0.000)    | 0.210 (0.026)    | 0 (0.000) |    18.37 | h1te, MaSvAl, synyx, tENZY, Vert |
|            2 |     1082 | 2025-03-15 | Kubix       | L   | 0.860      | -            | -                | -                | -         |    -5.89 | h1te, MaSvAl, synyx, tENZY, Vert |
|            1 |     2096 | 2025-02-08 | LFO 3       | L   | 0.627      | -            | -                | -                | -         |    -6.96 | h1te, MaSvAl, synyx, tENZY, Vert |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
