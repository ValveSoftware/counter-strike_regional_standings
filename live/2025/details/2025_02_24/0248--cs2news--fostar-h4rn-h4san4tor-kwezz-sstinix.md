### Roster Details<br />
Team Name: CS2News<br />
Roster: fostar, h4rn, H4SAN4TOR, kwezz, sstiNiX<br />
Global Rank: [248](../../standings_global_2025_02_24.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_24.md)<br />
Regional Rank: [144]( ../../standings_europe_2025_02_24.md)<br />
<br />
Final Rank Value:  547.6<br />
<br />
Final Rank Value (547.6) = Starting Rank Value (519.3) + Head To Head Adjustments (28.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.239[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.063<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 519.3
- 400 + ( ( 0.063 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 519.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      653 | 2025-01-08 | ECSTATIC   | L   | 0.885      | -            | -                | -                | -         |    -4.05 | fostar, h4rn, H4SAN4TOR, kwezz, sstiNiX |
|            4 |      657 | 2025-01-07 | Dark Cloud | W   | 0.878      | 0.143        | 0.027 (0.003)    | 0.412 (0.052)    | 0 (0.000) |    20.23 | fostar, h4rn, H4SAN4TOR, kwezz, sstiNiX |
|            3 |      669 | 2025-01-04 | Rhyno      | L   | 0.857      | -            | -                | -                | -         |    -4.22 | fostar, h4rn, H4SAN4TOR, kwezz, sstiNiX |
|            2 |      676 | 2024-12-29 | WOPA       | W   | 0.818      | 0.143        | 0.027 (0.003)    | 0.549 (0.064)    | 0 (0.000) |    20.79 | fostar, h4rn, H4SAN4TOR, kwezz, sstiNiX |
|            1 |      688 | 2024-12-27 | kONO       | L   | 0.806      | -            | -                | -                | -         |    -4.42 | fostar, h4rn, H4SAN4TOR, kwezz, sstiNiX |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($371,464.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
