### Roster Details<br />
Team Name: Outfit 49<br />
Roster: Gabe, Grimblee, H0NeST, mds, Valter0k<br />
Global Rank: [287](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_07_06.md)<br />
Regional Rank: [69]( ../../standings_americas_2026_07_06.md)<br />
<br />
Final Rank Value:  605.0<br />
<br />
Final Rank Value (605.0) = Starting Rank Value (607.2) + Head To Head Adjustments (-2.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.255[<sup>1</sup>](#table2)
- Bounty Collected: 0.183[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.110<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 607.2
- 400 + ( ( 0.110 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 607.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     5124 | 2026-02-17 | Rave       | L   | 0.277      | -            | -                | -                | -         |    -3.99 | Gabe, Grimblee, H0NeST, mds, Valter0k |
|            7 |     5585 | 2026-02-06 | Zomblers   | L   | 0.203      | -            | -                | -                | -         |    -2.15 | Gabe, Grimblee, H0NeST, mds, Valter0k |
|            6 |     5625 | 2026-02-05 | F5         | W   | 0.197      | 0.333        | 0.005 (0.000)    | 0.281 (0.018)    | 0 (0.000) |     4.99 | Gabe, Grimblee, H0NeST, mds, Valter0k |
|            5 |     5648 | 2026-02-04 | LAG        | L   | 0.190      | -            | -                | -                | -         |    -0.48 | Gabe, Grimblee, H0NeST, mds, Valter0k |
|            4 |     5670 | 2026-02-03 | OverKnight | W   | 0.183      | 0.333        | 0.000 (0.000)    | 0.025 (0.002)    | 0 (0.000) |     1.96 | Gabe, Grimblee, H0NeST, mds, Valter0k |
|            3 |     5703 | 2026-02-02 | Aether     | L   | 0.177      | -            | -                | -                | -         |    -2.17 | Gabe, Grimblee, H0NeST, mds, Valter0k |
|            2 |     6401 | 2026-01-10 | Rave       | L   | 0.021      | -            | -                | -                | -         |    -0.31 | Gabe, H0NeST, jchancE, mds, Valter0k  |
|            1 |     6411 | 2026-01-09 | NRG        | L   | 0.017      | -            | -                | -                | -         |    -0.03 | Gabe, H0NeST, jchancE, mds, Valter0k  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($662.75)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-24 |      0.324 | $1,000.00      | $323.66         |
| 2026-02-22 |      0.309 | $1,000.00      | $309.26         |
| 2026-01-11 |      0.030 | $1,000.00      | $29.84          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
