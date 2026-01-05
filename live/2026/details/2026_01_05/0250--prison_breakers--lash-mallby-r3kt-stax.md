### Roster Details<br />
Team Name: Prison Breakers<br />
Roster: lash, MaLLby, r3kt, stax<br />
Global Rank: [250](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_01_05.md)<br />
Regional Rank: [68]( ../../standings_americas_2026_01_05.md)<br />
<br />
Final Rank Value:  551.2<br />
<br />
Final Rank Value (551.2) = Starting Rank Value (504.8) + Head To Head Adjustments (46.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.190[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.053<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 504.8
- 400 + ( ( 0.053 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 504.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      942 | 2025-11-12 | 9z          | L   | 0.840      | -            | -                | -                | -         |    -0.87 | lash, MaLLby, pepe, r3kt, stax       |
|            4 |      993 | 2025-11-10 | GameHunters | W   | 0.829      | 0.371        | 0.000 (0.000)    | 0.247 (0.076)    | 0 (0.000) |    15.70 | lash, MaLLby, pepe, r3kt, stax       |
|            3 |     1119 | 2025-11-07 | Procyon     | W   | 0.808      | 0.371        | 0.002 (0.001)    | 0.296 (0.089)    | 0 (0.000) |    20.00 | lash, MaLLby, pepe, r3kt, stax       |
|            2 |     1251 | 2025-11-05 | Four Magic  | W   | 0.793      | 0.371        | 0.000 (0.000)    | 0.165 (0.048)    | 0 (0.000) |    13.89 | lash, MaLLby, r3kt, stax, vinaabEAST |
|            1 |     1309 | 2025-11-03 | Galorys     | L   | 0.780      | -            | -                | -                | -         |    -2.25 | lash, MaLLby, r3kt, stax, vinaabEAST |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
