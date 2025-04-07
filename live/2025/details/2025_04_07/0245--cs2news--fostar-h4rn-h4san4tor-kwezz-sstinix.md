### Roster Details<br />
Team Name: CS2News<br />
Roster: fostar, h4rn, H4SAN4TOR, kwezz, sstiNiX<br />
Global Rank: [245](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [139]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  520.5<br />
<br />
Final Rank Value (520.5) = Starting Rank Value (504.4) + Head To Head Adjustments (16.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.222[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.057<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 504.4
- 400 + ( ( 0.057 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 504.4


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
|            5 |     1676 | 2025-01-08 | ECSTATIC   | L   | 0.606      | -            | -                | -                | -         |    -2.48 | fostar, h4rn, H4SAN4TOR, kwezz, sstiNiX |
|            4 |     1680 | 2025-01-07 | Dark Cloud | W   | 0.599      | 0.143        | 0.018 (0.002)    | 0.218 (0.019)    | 0 (0.000) |    13.61 | fostar, h4rn, H4SAN4TOR, kwezz, sstiNiX |
|            3 |     1692 | 2025-01-04 | Rhyno      | L   | 0.579      | -            | -                | -                | -         |    -4.45 | fostar, h4rn, H4SAN4TOR, kwezz, sstiNiX |
|            2 |     1699 | 2024-12-29 | WOPA       | W   | 0.539      | 0.143        | 0.021 (0.002)    | 0.357 (0.027)    | 0 (0.000) |    13.24 | fostar, h4rn, H4SAN4TOR, kwezz, sstiNiX |
|            1 |     1711 | 2024-12-27 | kONO       | L   | 0.528      | -            | -                | -                | -         |    -3.87 | fostar, h4rn, H4SAN4TOR, kwezz, sstiNiX |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
