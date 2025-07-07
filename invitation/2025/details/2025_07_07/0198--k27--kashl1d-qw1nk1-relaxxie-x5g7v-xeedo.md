### Roster Details<br />
Team Name: K27<br />
Roster: kashl1d, qw1nk1, relaxxie, X5G7V, xeedo<br />
Global Rank: [198](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [103]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  591.0<br />
<br />
Final Rank Value (591.0) = Starting Rank Value (601.5) + Head To Head Adjustments (-10.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.238[<sup>1</sup>](#table2)
- Bounty Collected: 0.164[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.029[<sup>2</sup>](#table1)

The average of these factors is 0.108<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 601.5
- 400 + ( ( 0.108 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 601.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     2521 | 2025-03-10 | Mousquetaires   | L   | 0.407      | -            | -                | -                | -         |    -8.00 | kashl1d, qw1nk1, relaxxie, X5G7V, xeedo |
|            5 |     2626 | 2025-03-08 | Virtual Cottage | W   | 0.394      | 0.372        | 0.000 (0.000)    | 0.022 (0.003)    | 0 (0.000) |     3.12 | kashl1d, qw1nk1, relaxxie, X5G7V, xeedo |
|            4 |     2771 | 2025-03-06 | modeame         | L   | 0.381      | -            | -                | -                | -         |    -5.08 | kashl1d, qw1nk1, relaxxie, X5G7V, xeedo |
|            3 |     3099 | 2025-02-23 | Inner Circle    | L   | 0.307      | -            | -                | -                | -         |    -5.96 | kashl1d, qw1nk1, relaxxie, X5G7V, xeedo |
|            2 |     3111 | 2025-02-23 | MASONIC         | W   | 0.306      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.32 | kashl1d, qw1nk1, relaxxie, X5G7V, xeedo |
|            1 |     3281 | 2025-02-16 | Nuclear TigeRES | W   | 0.261      | 0.270        | 0.001 (0.000)    | 0.058 (0.004)    | 1 (0.261) |     3.17 | kashl1d, qw1nk1, relaxxie, X5G7V, xeedo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($320.30)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-16 |      0.261 | $1,225.00      | $320.30         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
