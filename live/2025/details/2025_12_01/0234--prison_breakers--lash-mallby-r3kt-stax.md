### Roster Details<br />
Team Name: Prison Breakers<br />
Roster: lash, MaLLby, r3kt, stax<br />
Global Rank: [234](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_12_01.md)<br />
Regional Rank: [63]( ../../standings_americas_2025_12_01.md)<br />
<br />
Final Rank Value:  570.3<br />
<br />
Final Rank Value (570.3) = Starting Rank Value (509.3) + Head To Head Adjustments (60.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.195[<sup>2</sup>](#table1)
- Opponent Network: 0.035[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.057<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 509.3
- 400 + ( ( 0.057 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 509.3


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
|            5 |      389 | 2025-11-12 | 9z          | L   | 1.000      | -            | -                | -                | -         |    -0.88 | lash, MaLLby, pepe, r3kt, stax       |
|            4 |      433 | 2025-11-10 | GameHunters | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.358 (0.133)    | 0 (0.000) |    20.85 | lash, MaLLby, pepe, r3kt, stax       |
|            3 |      559 | 2025-11-07 | Procyon     | W   | 1.000      | 0.371        | 0.002 (0.001)    | 0.375 (0.139)    | 0 (0.000) |    25.13 | lash, MaLLby, pepe, r3kt, stax       |
|            2 |      691 | 2025-11-05 | Four Magic  | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.213 (0.079)    | 0 (0.000) |    18.38 | lash, MaLLby, r3kt, stax, vinaabEAST |
|            1 |      749 | 2025-11-03 | Galorys     | L   | 1.000      | -            | -                | -                | -         |    -2.52 | lash, MaLLby, r3kt, stax, vinaabEAST |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
