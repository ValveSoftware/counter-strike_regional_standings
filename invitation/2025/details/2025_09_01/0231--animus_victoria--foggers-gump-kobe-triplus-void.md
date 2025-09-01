### Roster Details<br />
Team Name: Animus Victoria<br />
Roster: foggers, gump, Kobe, TRIPLUS, void<br />
Global Rank: [231](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_09_01.md)<br />
Regional Rank: [38]( ../../standings_asia_2025_09_01.md)<br />
<br />
Final Rank Value:  533.2<br />
<br />
Final Rank Value (533.2) = Starting Rank Value (501.3) + Head To Head Adjustments (31.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.201[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.053<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 501.3
- 400 + ( ( 0.053 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 501.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      977 | 2025-07-16 | Ground Zero | L   | 0.885      | -            | -                | -                | -         |    -9.95 | foggers, gump, Kobe, TRIPLUS, void |
|            4 |     1022 | 2025-07-14 | Mindfreak   | W   | 0.871      | 0.314        | 0.002 (0.001)    | 0.181 (0.050)    | 0 (0.000) |    16.62 | foggers, gump, Kobe, TRIPLUS, void |
|            3 |     1057 | 2025-07-12 | Rooster     | L   | 0.859      | -            | -                | -                | -         |    -7.22 | foggers, gump, Kobe, TRIPLUS, void |
|            2 |     1154 | 2025-07-09 | Mindfreak   | W   | 0.838      | 0.314        | 0.002 (0.000)    | 0.181 (0.048)    | 0 (0.000) |    17.49 | foggers, gump, Kobe, TRIPLUS, void |
|            1 |     1177 | 2025-07-07 | LE-LUX      | W   | 0.825      | 0.314        | 0.000 (0.000)    | 0.005 (0.001)    | 0 (0.000) |    14.89 | foggers, gump, Kobe, TRIPLUS, void |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
